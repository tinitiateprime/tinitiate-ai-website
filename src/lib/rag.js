import { createHash } from "node:crypto";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { crawlSite } from "./crawl";
import { getOpenAI, EMBED_MODEL } from "./openai";
import { DOCS } from "./rag-data";
import path from "node:path";

// Config
const ORIGIN = process.env.RAG_ORIGIN || "https://tinitiate.com";
const DEFAULT_CACHE_DIR = process.env.NETLIFY ? "/tmp" : path.join(process.cwd(), ".cache");
const INDEX_PATH =
  process.env.RAG_INDEX_PATH ||
  path.join(DEFAULT_CACHE_DIR, "tinitiate-rag.json");

const EMBED_CANDIDATES = [
  EMBED_MODEL,
  "text-embedding-3-small",
  "text-embedding-3-large",
  "text-embedding-ada-002"
].filter(Boolean);

// -------- Embedding --------

async function embedWithFallback(input) {
  const openai = getOpenAI();

  let lastErr;
  for (const model of EMBED_CANDIDATES) {
    try {
      const { data } = await openai.embeddings.create({ model, input });
      return { modelUsed: model, data };
    } catch (err) {
      const code = err?.code || err?.error?.code;
      if (code !== "model_not_found") throw err;
      lastErr = err;
    }
  }
  throw lastErr || new Error("No embedding models available");
}

// -------- Public APIs --------

export async function reindex({ origin = ORIGIN, maxPages = 60 } = {}) {
  const pages = await crawlSite({ origin, maxPages });

  const docPages = DOCS.map(d => ({
    url: d.url?.startsWith("http") ? d.url : new URL(d.url || "/", origin).toString(),
    title: d.title || "Document",
    text: d.content || "",
  }));

  const allPages = [...docPages, ...pages];
  const chunks = chunkPages(allPages);
  const unique = dedupeByHash(chunks);
  const embedded = await embedAll(unique);

  await saveIndex({ origin, model: EMBED_MODEL, vectors: embedded });

  return {
    pages: allPages.length,
    chunks: chunks.length,
    uniqueChunks: unique.length,
    vectors: embedded.length,
    sources: new Set(allPages.map(p => p.url)).size,
  };
}

export async function searchTopK(query, k = 4) {
  const idx = await loadIndexOrCreate();
  if (!idx?.vectors?.length) return [];

  const qEmb = await embedQuery(query);
  const q = normalize(qEmb);

  const scored = idx.vectors.map(v => ({
    score: dot(q, v.vec),
    doc: { title: v.title, url: v.url, content: v.content },
  }));

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, k);
}

// -------- Internals --------

const CHUNK_SIZE = 1100;
const CHUNK_OVERLAP = 180;

function chunkPages(pages) {
  const out = [];
  for (const p of pages) {
    const pieces = chunkText(p.text, CHUNK_SIZE, CHUNK_OVERLAP);
    for (const content of pieces) {
      out.push({
        url: p.url,
        title: p.title,
        content,
        id: hash(`${p.url}::${content}`),
      });
    }
  }
  return out;
}

function chunkText(text, size, overlap) {
  if (!text) return [];
  const step = Math.max(1, size - overlap);
  const chunks = [];

  for (let start = 0; start < text.length; start += step) {
    const end = Math.min(text.length, start + size);
    const slice = text.slice(start, end).trim();
    if (slice) chunks.push(slice);
    if (end === text.length) break;
  }

  return chunks;
}

function dedupeByHash(chunks) {
  const seen = new Set();
  return chunks.filter(c => {
    if (seen.has(c.id)) return false;
    seen.add(c.id);
    return true;
  });
}

async function embedAll(chunks) {
  const openai = getOpenAI();

  const out = [];
  const B = 64;

  for (let i = 0; i < chunks.length; i += B) {
    const batch = chunks.slice(i, i + B);
    const inputs = batch.map(b => b.content);

    const { data } = await openai.embeddings.create({
      model: EMBED_MODEL,
      input: inputs,
    });

    data.forEach((d, j) => {
      out.push({
        url: batch[j].url,
        title: batch[j].title,
        content: batch[j].content,
        vec: normalize(d.embedding),
      });
    });
  }

  return out;
}

async function embedQuery(text) {
  const openai = getOpenAI();

  const { data } = await openai.embeddings.create({
    model: EMBED_MODEL,
    input: [text],
  });

  return data[0].embedding;
}

// -------- Storage --------

async function ensureDirFor(filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });
}

async function saveIndex(indexObj) {
  await ensureDirFor(INDEX_PATH);
  await writeFile(INDEX_PATH, JSON.stringify(indexObj), "utf8");
}

async function loadIndex() {
  try {
    const raw = await readFile(INDEX_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function loadIndexOrCreate() {
  const idx = await loadIndex();
  if (idx?.vectors?.length) return idx;

  const docPages = DOCS.map(d => ({
    url: new URL(d.url || "/", ORIGIN).toString(),
    title: d.title,
    text: d.content,
  }));

  const chunks = chunkPages(docPages);
  const unique = dedupeByHash(chunks);
  const embedded = await embedAll(unique);

  const indexObj = { origin: ORIGIN, model: EMBED_MODEL, vectors: embedded };
  await saveIndex(indexObj);
  return indexObj;
}

// -------- Math --------

function dot(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * b[i];
  return s;
}

function normalize(arr) {
  const n = Math.sqrt(arr.reduce((s, x) => s + x * x, 0)) || 1;
  return arr.map(x => x / n);
}

function hash(s) {
  return createHash("sha1").update(s).digest("hex");
}