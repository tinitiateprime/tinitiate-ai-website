// File: src/app/faq/why-tinitiate/parents-stem/FAQList.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ---------- media helpers (YouTube/Vimeo/MP4) ---------- */
const isYouTube = (url) => /youtu\.be|youtube\.com/.test(url);
const isVimeo = (url) => /vimeo\.com/.test(url);
const toYouTubeEmbed = (url) => {
  const id =
    url.match(/youtu\.be\/([^?&]+)/)?.[1] ||
    url.match(/[?&]v=([^?&]+)/)?.[1] ||
    url.match(/embed\/([^?&]+)/)?.[1];
  return id ? `https://www.youtube.com/embed/${id}` : url;
};
const toVimeoEmbed = (url) => {
  const id = url.match(/vimeo\.com\/(\d+)/)?.[1];
  return id ? `https://player.vimeo.com/video/${id}` : url;
};

/* ---------- shared block renderer ---------- */
function renderBlock(block, idx) {
  switch (block.type) {
    case "p":
      return (
        <p key={`p-${idx}`} className="text-gray-700">
          {block.text}
        </p>
      );

    case "ul":
      return (
        <ul key={`ul-${idx}`} className="list-disc space-y-2 pl-5 text-gray-700">
          {block.items?.map((it, i) => (
            <li key={`li-${idx}-${i}`}>{it}</li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div key={`tbl-${idx}`} className="overflow-x-auto">
          <table className="w-full text-left text-sm md:text-base border border-gray-200 rounded-xl overflow-hidden">
            {block.headers?.length ? (
              <thead>
                <tr className="border-b border-gray-200 bg-gray-100 text-gray-800">
                  {block.headers.map((h, hIdx) => (
                    <th key={`th-${hIdx}`} className="p-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody className="divide-y divide-gray-200">
              {block.rows?.map((row, rIdx) =>
                Array.isArray(row) ? (
                  <tr key={`tr-${rIdx}`}>
                    {row.map((cell, cIdx) => (
                      <td key={`td-${rIdx}-${cIdx}`} className="p-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      );

    case "image":
    case "img": {
      const { src, alt = "Image", caption } = block;
      if (!src) return null;
      return (
        <figure key={`img-${idx}`} className="space-y-2">
          <img
            src={src}
            alt={alt}
            className="w-full rounded-xl border border-gray-200"
            loading="lazy"
          />
          {caption && <figcaption className="text-xs text-gray-500">{caption}</figcaption>}
        </figure>
      );
    }

    case "video": {
      const { src, caption, poster } = block;
      if (!src) return null;

      if (isYouTube(src) || isVimeo(src)) {
        const embed = isYouTube(src) ? toYouTubeEmbed(src) : toVimeoEmbed(src);
        return (
          <figure key={`vid-${idx}`} className="space-y-2">
            <div
              className="w-full overflow-hidden rounded-xl border border-gray-200"
              style={{ aspectRatio: "16 / 9" }}
            >
              <iframe
                src={embed}
                title={caption || "Embedded video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            {caption && <figcaption className="text-xs text-gray-500">{caption}</figcaption>}
          </figure>
        );
      }

      return (
        <figure key={`vid-${idx}`} className="space-y-2">
          <video
            controls
            preload="metadata"
            poster={poster || undefined}
            className="w-full max-h-[70vh] rounded-xl border border-gray-200"
          >
            <source src={src} />
            Your browser does not support the video tag.
          </video>
          {caption && <figcaption className="text-xs text-gray-500">{caption}</figcaption>}
        </figure>
      );
    }

    default:
      return null;
  }
}

/* =========================================================
   FAQList
   - Desktop (≥768px): all questions OPEN (static sections).
   - Mobile (<768px): questions CLOSED by default (collapsible with scroll/clamp).
   ========================================================= */
export default function FAQList({
  faqs = [],
  headerOffsetDesktop = 112,
  headerOffsetMobile = 96,
  nextPeek = 56,
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  // Track viewport to choose desktop vs mobile rendering
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();

    if (mq.addEventListener) mq.addEventListener("change", update);
    else if (mq.addListener) mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else if (mq.removeListener) mq.removeListener(update);
    };
  }, []);

  // Split blocks per item (video first ordering)
  const prepared = useMemo(
    () =>
      (faqs || []).map((f) => {
        const blocks = Array.isArray(f.blocks) ? f.blocks : [];
        return {
          ...f,
          videoBlocks: blocks.filter((b) => b?.type === "video" && b.src),
          otherBlocks: blocks.filter((b) => b?.type !== "video"),
        };
      }),
    [faqs]
  );

  /* ---------- Desktop: render all open (static) ---------- */
  if (isDesktop) {
    return (
      <section className="md:col-span-9 space-y-4 mb-4">
        {prepared.map((f) => (
          <div
            id={f.id}
            key={f.id}
            className="relative group rounded-2xl p-3 bg-gray-50 scroll-mt-28"
          >
            {/* left accent */}
            <span
              aria-hidden
              className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-sky-500"
            />

            {/* header (highlighted) */}
            <div className="flex items-start justify-between gap-2 rounded-lg bg-indigo-200 p-2">
              <h2 className="text-lg font-bold sm:text-base md:text-xl leading-snug">
                {f.title}
              </h2>
            </div>

            {/* content: video(s) first, then text/tables/lists/images */}
            <div className="mt-3 pl-4 space-y-4">
              {f.videoBlocks.map((b, idx) => renderBlock(b, `v-${idx}`))}
              {f.otherBlocks.map((b, idx) => renderBlock(b, idx))}
            </div>
          </div>
        ))}
      </section>
    );
  }

  /* ---------- Mobile: collapsible (all closed by default) ---------- */
  return <MobileCollapsible prepared={prepared} headerOffsetMobile={headerOffsetMobile} nextPeek={nextPeek} />;
}

/* =========================================================
   Mobile collapsible implementation
   (keeps your clamp + scroll-into-view behavior)
   ========================================================= */
function MobileCollapsible({ prepared, headerOffsetMobile, nextPeek }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const itemRefs = useRef([]);
  const summaryRefs = useRef([]);
  const contentRefs = useRef([]);

  const getOffset = () => headerOffsetMobile;

  const clearClamp = (i) => {
    const cont = contentRefs.current[i];
    if (!cont) return;
    cont.style.maxHeight = "";
    cont.style.overflowY = "";
  };

  const applyMobileClamp = (i) => {
    const cont = contentRefs.current[i];
    const sum = summaryRefs.current[i];
    if (!cont || !sum) return;

    const offset = getOffset();
    const sumH = sum.getBoundingClientRect().height;
    const max = window.innerHeight - offset - sumH - nextPeek;

    if (max > 140) {
      cont.style.maxHeight = `${max}px`;
      cont.style.overflowY = "auto";
    } else {
      clearClamp(i);
    }
  };

  const scrollToIndex = (i) => {
    const el = itemRefs.current[i];
    if (!el) return;
    const offset = getOffset();
    const top = el.getBoundingClientRect().top + window.scrollY - offset - 8;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // open via hash on load (mobile)
  useEffect(() => {
    const id = window.location.hash?.slice(1);
    if (!id) return;
    const idx = prepared.findIndex((f) => f.id === id);
    if (idx >= 0) setOpenIndex(idx);
  }, [prepared]);

  // respond to hash changes
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash?.slice(1);
      if (!id) return;
      const idx = prepared.findIndex((f) => f.id === id);
      if (idx >= 0) setOpenIndex(idx);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [prepared]);

  // enforce single-open + clamp + scroll
  useEffect(() => {
    itemRefs.current.forEach((d, idx) => {
      if (d) d.open = idx === openIndex;
      if (idx !== openIndex) clearClamp(idx);
    });

    if (openIndex >= 0) {
      requestAnimationFrame(() => {
        applyMobileClamp(openIndex);
        scrollToIndex(openIndex);

        const nextSummary = itemRefs.current[openIndex + 1]?.querySelector("summary");
        if (nextSummary) {
          setTimeout(() => {
            const rect = nextSummary.getBoundingClientRect();
            const margin = 12;
            const overflow = rect.bottom - (window.innerHeight - margin);
            if (overflow > 0) window.scrollBy({ top: overflow, behavior: "smooth" });
          }, 260);
        }
      });
    }
  }, [openIndex]);

  // re-clamp on resize (still on mobile)
  useEffect(() => {
    const onResize = () => {
      if (openIndex >= 0) applyMobileClamp(openIndex);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [openIndex]);

  const onSummaryClick = (i, e) => {
    e.preventDefault(); // we control open state
    const next = openIndex === i ? -1 : i;
    setOpenIndex(next);
    if (next >= 0 && typeof history !== "undefined") {
      history.replaceState(null, "", `#${prepared[i].id}`);
    }
  };

  return (
    <section className="md:col-span-9 space-y-4 mb-4">
      {prepared.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <details
            id={f.id}
            key={f.id}
            ref={(el) => (itemRefs.current[i] = el)}
            open={isOpen}
            className="relative group rounded-2xl p-3 transition-colors open:bg-gray-50 scroll-mt-24"
          >
            {/* left accent when open */}
            <span
              aria-hidden
              className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-colors ${
                isOpen ? "bg-sky-500" : "bg-transparent"
              }`}
            />

            <summary
              ref={(el) => (summaryRefs.current[i] = el)}
              onClick={(e) => onSummaryClick(i, e)}
              className="flex items-start justify-between gap-2 cursor-pointer list-none bg-indigo-200 rounded-lg p-2"
              aria-expanded={isOpen}
            >
              <div className="flex min-w-0 items-center gap-3">
                <h2 className="text-lg font-bold sm:text-base leading-snug">{f.title}</h2>
              </div>

              {/* chevron */}
              <svg
                className={`mt-1 h-4 w-4 flex-none text-gray-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.08 1.04l-4.25 4.25a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
              </svg>
            </summary>

            {/* Answer: video(s) first, then other content */}
            <div ref={(el) => (contentRefs.current[i] = el)} className="mt-3 pl-4 space-y-4">
              {f.videoBlocks.map((b, idx) => renderBlock(b, `v-${idx}`))}
              {f.otherBlocks.map((b, idx) => renderBlock(b, idx))}
            </div>
          </details>
        );
      })}
    </section>
  );
}
