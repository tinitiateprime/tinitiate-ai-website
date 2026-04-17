// lib/crawl.js
import * as cheerio from "cheerio";

const DEFAULT_MAX_PAGES = 60;
const BLOCKED_EXT = /\.(png|jpe?g|gif|svg|webp|ico|pdf|zip|rar|7z|mp4|mp3|avi|mov|webm|woff2?|ttf|eot)(\?|$)/i;

export async function crawlSite({
  origin = "https://tinitiate.com",
  startPaths = ["/"],
  maxPages = DEFAULT_MAX_PAGES,
} = {}) {
  const visited = new Set();
  const queue = startPaths.map(p => new URL(p, origin).toString());
  const pages = [];

  while (queue.length && pages.length < maxPages) {
    const url = queue.shift();
    if (visited.has(url) || BLOCKED_EXT.test(url)) continue;

    try {
      const u = new URL(url);
      if (u.origin !== origin) continue; // stay in-domain only

      visited.add(url);
      const res = await fetch(url, { headers: { "user-agent": "TINITIATE-RAG/1.0" } });
      if (!res.ok || !res.headers.get("content-type")?.includes("text/html")) continue;

      const html = await res.text();
      const $ = cheerio.load(html);

      // Drop boilerplate
      $("script,style,noscript,template,iframe,svg,canvas,form,header,nav,aside,footer,button,input,select,textarea")
        .remove();

      // Prefer <main> text if present
      const main = $("main").text() || $("body").text() || "";
      const title = ($("title").first().text() || u.pathname).trim();

      const text = normalizeText(main);
      if (text.length > 200) {
        pages.push({ url, title, text });
      }

      // Discover internal links
      $("a[href]").each((_, el) => {
        const href = $(el).attr("href");
        if (!href) return;
        const abs = new URL(href, url);
        // same origin & avoid obvious non-content paths
        if (
          abs.origin === origin &&
          !visited.has(abs.toString()) &&
          !BLOCKED_EXT.test(abs.pathname) &&
          !abs.pathname.startsWith("/_") &&
          !abs.pathname.startsWith("/api")
        ) {
          queue.push(abs.toString());
        }
      });
    } catch (_) {
      // ignore a bad page and continue
    }
  }

  return pages;
}

function normalizeText(t) {
  return t
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\s+\n/g, "\n")
    .replace(/\n\s+/g, "\n")
    .trim();
}
