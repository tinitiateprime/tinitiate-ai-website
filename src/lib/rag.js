// lib/rag.js
import { createHash } from "node:crypto";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { crawlSite } from "./crawl";
import { openai } from "./openai";
import { DOCS } from "./rag-data";
import path from "node:path";

// Config
const ORIGIN = process.env.RAG_ORIGIN || "https://tinitiate.com";
const DEFAULT_CACHE_DIR = process.env.NETLIFY ? "/tmp" : path.join(process.cwd(), ".cache");
const INDEX_PATH =
  process.env.RAG_INDEX_PATH ||
  path.join(DEFAULT_CACHE_DIR, "tinitiate-rag.json");
// const INDEX_PATH =
//   process.env.RAG_INDEX_PATH ||
//   path.join(process.cwd(), ".cache", "tinitiate-rag.json"); // writable on server
const EMBED_MODEL =
  process.env.OPENAI_EMBED_MODEL ||
  process.env.EMBED_MODEL ||
  "text-embedding-3-small";

// Add near top-level:
const EMBED_CANDIDATES = [
  EMBED_MODEL,
  "text-embedding-3-small",
  "text-embedding-3-large",
  "text-embedding-ada-002" // legacy fallback
].filter(Boolean);

async function embedWithFallback(input) {
  let lastErr;
  for (const model of EMBED_CANDIDATES) {
    try {
      const { data } = await openai.embeddings.create({ model, input });
      return { modelUsed: model, data };
    } catch (err) {
      // Only fall through on model-not-found; rethrow others (e.g., 401)
      const code = err?.code || err?.error?.code;
      if (code !== "model_not_found") {
        throw err;
      }
      lastErr = err;
    }
  }
  throw lastErr || new Error("No embedding models available");
}

// Chunking
const CHUNK_SIZE = 1100; // chars
const CHUNK_OVERLAP = 180;

// ------- Public APIs --------

/**
 * Rebuild the index by crawling the website + including static DOCS.
 * Returns { chunks, pages, sources } counts.
 */
export async function reindex({ origin = ORIGIN, maxPages = 60 } = {}) {
  // 1) Crawl live site
  const pages = await crawlSite({ origin, maxPages });

  // 2) Convert curated DOCS into "pages"
  const docPages = DOCS.map(d => ({
    url: d.url?.startsWith("http") ? d.url : new URL(d.url || "/", origin).toString(),
    title: d.title || "Document",
    text: d.content || "",
  }));

  // 3) Merge & chunk
  const allPages = [...docPages, ...pages];
  const chunks = chunkPages(allPages);

  // 4) Dedupe & embed
  const unique = dedupeByHash(chunks);
  const embedded = await embedAll(unique);

  // 5) Save index
  await saveIndex({ origin, model: EMBED_MODEL, vectors: embedded });

  return {
    pages: allPages.length,
    chunks: chunks.length,
    uniqueChunks: unique.length,
    vectors: embedded.length,
    sources: new Set(allPages.map(p => p.url)).size,
  };
}

/**
 * Vector search top-K. Returns [{ score, doc: {title,url,content} }]
 */
export async function searchTopK(query, k = 4) {
  const idx = await loadIndexOrCreate();
  if (!idx?.vectors?.length) return [];

  const qEmb = await embedQuery(query);
  const q = normalize(qEmb);

  // Score
  const scored = idx.vectors.map(v => ({
    score: dot(q, v.vec), // cosine because vecs are normalized
    doc: { title: v.title, url: v.url, content: v.content },
  }));

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, k);
}

// ------- Internals --------

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
  if (size <= 0) throw new Error("chunk size must be > 0");
  overlap = Math.max(0, overlap | 0);

  const step = Math.max(1, size - overlap);
  const chunks = [];

  for (let start = 0; start < text.length; start += step) {
    const end = Math.min(text.length, start + size);
    const slice = text.slice(start, end).trim();
    if (slice) chunks.push(slice);
    if (end === text.length) break; // prevent an extra empty/looping iteration
  }

  return chunks;
}

function dedupeByHash(chunks) {
  const seen = new Set();
  const out = [];
  for (const c of chunks) {
    if (seen.has(c.id)) continue;
    seen.add(c.id);
    out.push(c);
  }
  return out;
}

async function embedAll(chunks) {
  // Batch to be nice to API
  const out = [];
  const B = 64;
  for (let i = 0; i < chunks.length; i += B) {
    const batch = chunks.slice(i, i + B);
    const inputs = batch.map(b => b.content);
    const { data } = await embedWithFallback(inputs);
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
  const { data } = await embedWithFallback([text]);
  return data[0].embedding;
}

async function ensureDirFor(filePath) {
  const dir = path.dirname(filePath);
  await mkdir(dir, { recursive: true });
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
  // Build a tiny index from DOCS on first run (no crawl yet)
  const docPages = DOCS.map(d => ({
    url: d.url?.startsWith("http") ? d.url : new URL(d.url || "/", ORIGIN).toString(),
    title: d.title || "Document",
    text: d.content || "",
  }));
  const chunks = chunkPages(docPages);
  const unique = dedupeByHash(chunks);
  const embedded = await embedAll(unique);
  const indexObj = { origin: ORIGIN, model: EMBED_MODEL, vectors: embedded };
  await saveIndex(indexObj);
  return indexObj;
}

// Math utils
function dot(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * b[i];
  return s;
}
function normalize(arr) {
  let n2 = 0;
  for (let i = 0; i < arr.length; i++) n2 += arr[i] * arr[i];
  const n = Math.sqrt(n2) || 1;
  return arr.map(x => x / n);
}
function hash(s) {
  return createHash("sha1").update(s).digest("hex");
}
