// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function FAQList({
//   faqs,
//   headerOffsetDesktop = 112, // ~ pt-28
//   headerOffsetMobile = 96,    // ~ pt-24
//   nextPeek = 56               // keep next question header visible on mobile
// }) {
//   const [openIndex, setOpenIndex] = useState(-1);
//   const itemRefs = useRef([]);     // <details>
//   const summaryRefs = useRef([]);  // <summary>
//   const contentRefs = useRef([]);  // answer container

//   const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;
//   const getOffset = () => (isDesktop() ? headerOffsetDesktop : headerOffsetMobile);

//   const pad2 = (n) => n.toString().padStart(2, "0");

//   const renderBlock = (block, idx) => {
//     switch (block.type) {
//       case "p":
//         return (
//           <p key={`p-${idx}`} className="text-gray-700">
//             {block.text}
//           </p>
//         );
//       case "ul":
//         return (
//           <ul key={`ul-${idx}`} className="list-disc space-y-2 pl-5 text-gray-700">
//             {block.items?.map((it, i) => (
//               <li key={`li-${idx}-${i}`}>{it}</li>
//             ))}
//           </ul>
//         );
//       case "table":
//         return (
//           <div key={`tbl-${idx}`} className="overflow-x-auto">
//             <table className="w-full text-left text-sm md:text-base border border-gray-200 rounded-xl overflow-hidden">
//               {block.headers?.length ? (
//                 <thead>
//                   <tr className="border-b border-gray-200 bg-gray-100 text-gray-800">
//                     {block.headers.map((h, hIdx) => (
//                       <th key={`th-${hIdx}`} className="p-3">{h}</th>
//                     ))}
//                   </tr>
//                 </thead>
//               ) : null}
//               <tbody className="divide-y divide-gray-200">
//                 {block.rows?.map((row, rIdx) => (
//                   <tr key={`tr-${rIdx}`}>
//                     {row.map((cell, cIdx) => (
//                       <td key={`td-${rIdx}-${cIdx}`} className="p-3">{cell}</td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const clearClamp = (i) => {
//     const cont = contentRefs.current[i];
//     if (!cont) return;
//     cont.style.maxHeight = "";
//     cont.style.overflowY = "";
//   };

//   const applyMobileClamp = (i) => {
//     const cont = contentRefs.current[i];
//     const sum = summaryRefs.current[i];
//     if (!cont || !sum) return;

//     if (isDesktop()) {
//       clearClamp(i);
//       return;
//     }

//     // Compute max height so next question header stays visible
//     const offset = getOffset();
//     const sumH = sum.getBoundingClientRect().height;
//     const max = window.innerHeight - offset - sumH - nextPeek;

//     if (max > 140) { // clamp only if there’s reasonable space
//       cont.style.maxHeight = `${max}px`;
//       cont.style.overflowY = "auto";
//     } else {
//       clearClamp(i);
//     }
//   };

//   const scrollToIndex = (i) => {
//     const el = itemRefs.current[i];
//     if (!el) return;
//     const offset = getOffset();
//     const top = el.getBoundingClientRect().top + window.scrollY - offset - 8;
//     window.scrollTo({ top, behavior: "smooth" });
//   };

//   // open via hash on load
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     const id = window.location.hash?.slice(1);
//     if (!id) return;
//     const idx = faqs.findIndex((f) => f.id === id);
//     if (idx >= 0) setOpenIndex(idx);
//   }, [faqs]);

//   // also respond to hash changes (e.g., ToC clicks)
//   useEffect(() => {
//     const onHash = () => {
//       const id = window.location.hash?.slice(1);
//       if (!id) return;
//       const idx = faqs.findIndex((f) => f.id === id);
//       if (idx >= 0) setOpenIndex(idx);
//     };
//     window.addEventListener("hashchange", onHash);
//     return () => window.removeEventListener("hashchange", onHash);
//   }, [faqs]);

//   // manage opening/closing + scroll + clamp
//   useEffect(() => {
//     // ensure only one is open
//     itemRefs.current.forEach((d, idx) => {
//       if (d) d.open = idx === openIndex;
//       if (idx !== openIndex) clearClamp(idx);
//     });

//     if (openIndex >= 0) {
//       // wait for details expansion
//       requestAnimationFrame(() => {
//         applyMobileClamp(openIndex);
//         scrollToIndex(openIndex);

//         // tiny nudge if next header overflows viewport
//         if (!isDesktop()) {
//           const nextSummary = itemRefs.current[openIndex + 1]?.querySelector("summary");
//           if (nextSummary) {
//             setTimeout(() => {
//               const rect = nextSummary.getBoundingClientRect();
//               const margin = 12;
//               const overflow = rect.bottom - (window.innerHeight - margin);
//               if (overflow > 0) {
//                 window.scrollBy({ top: overflow, behavior: "smooth" });
//               }
//             }, 260);
//           }
//         }
//       });
//     }
//   }, [openIndex]);

//   // re-clamp on resize
//   useEffect(() => {
//     const onResize = () => {
//       if (openIndex >= 0) applyMobileClamp(openIndex);
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [openIndex]);

//   const onSummaryClick = (i, e) => {
//     e.preventDefault(); // we control open state
//     const next = openIndex === i ? -1 : i;
//     setOpenIndex(next);
//     // keep hash in sync for back/forward + anchor sharing
//     if (next >= 0 && typeof history !== "undefined") {
//       history.replaceState(null, "", `#${faqs[i].id}`);
//     }
//   };

//   return (
// <section className="md:col-span-9 space-y-4 mb-4">
//   {faqs.map((f, i) => {
//     const isOpen = openIndex === i;
//     return (
//       <details
//         id={f.id}
//         key={f.id}
//         ref={(el) => (itemRefs.current[i] = el)}
//         open={isOpen}
//         className="relative group rounded-2xl p-3 transition-colors open:bg-gray-50 scroll-mt-24 md:scroll-mt-28"
//       >
//         {/* left accent when open */}
//         <span
//           aria-hidden
//           className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-colors ${
//             isOpen ? "bg-sky-500" : "bg-transparent"
//           }`}
//         />

//         <summary
//           ref={(el) => (summaryRefs.current[i] = el)}
//           onClick={(e) => onSummaryClick(i, e)}
//           className="flex items-start justify-between gap-2 cursor-pointer list-none bg-indigo-200 rounded-lg sm:p-2 p-2"
//           aria-expanded={isOpen}
//         >
//           <div className="flex min-w-0 items-center gap-3">
//             {/* simple question icon (no numbers) */}
//             {/* <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sky-100 text-sky-700 ring-1 ring-sky-200">
//               <svg
//                 viewBox="0 0 20 20"
//                 className="h-4 w-4"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-.75-5.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM10 5.5c-1.657 0-3 1.12-3 2.5a.75.75 0 0 0 1.5 0c0-.56.673-1 1.5-1s1.5.44 1.5 1c0 .43-.357.75-.918 1.13-.168.114-.347.22-.523.324C9.5 10 9 10.3 9 11v.25a.75.75 0 0 0 1.5 0V11c0-.11.08-.22.34-.37.2-.12.414-.245.64-.4.81-.55 1.52-1.27 1.52-2.23 0-1.38-1.343-2.5-3-2.5Z" />
//               </svg>
//             </span> */}

//             <h2 className="text-lg font-bold sm: text-sm md:text-xl leading-snug">
//               {f.title}
//             </h2>
//           </div>

//           {/* chevron */}
//           <svg
//             className={`mt-1 h-4 w-4 flex-none text-gray-500 transition-transform duration-200 ${
//               isOpen ? "rotate-180" : ""
//             }`}
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.08 1.04l-4.25 4.25a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
//           </svg>
//         </summary>

//         {/* Answer (mobile clamp handled by your controller) */}
//         <div
//           ref={(el) => (contentRefs.current[i] = el)}
//           className="mt-3 pl-4 space-y-4"
//         >
//           {f.blocks.map((b, idx) => renderBlock(b, idx))}
//         </div>
//       </details>
//     );
//   })}
// </section>

//   );
// }










// // File: src/app/faq/why-tinitiate/parents-stem/FAQList.jsx
// "use client";

// import { useEffect, useRef, useState } from "react";

// // --- helpers for embeds ---
// const isYouTube = (url) => /youtu\.be|youtube\.com/.test(url);
// const isVimeo  = (url) => /vimeo\.com/.test(url);
// const toYouTubeEmbed = (url) => {
//   const id =
//     url.match(/youtu\.be\/([^?&]+)/)?.[1] ||
//     url.match(/[?&]v=([^?&]+)/)?.[1] ||
//     url.match(/embed\/([^?&]+)/)?.[1];
//   return id ? `https://www.youtube.com/embed/${id}` : url;
// };
// const toVimeoEmbed = (url) => {
//   const id = url.match(/vimeo\.com\/(\d+)/)?.[1];
//   return id ? `https://player.vimeo.com/video/${id}` : url;
// };

// export default function FAQList({
//   faqs,
//   headerOffsetDesktop = 112,   // ~ pt-28
//   headerOffsetMobile = 96,      // ~ pt-24
//   nextPeek = 56,                // keep next question header visible on mobile
//   autoOpenOnDesktop = true,     // ✅ open a question by default on desktop
//   defaultDesktopIndex = 0       // ✅ which one to open (0 = first)
// }) {
//   const [openIndex, setOpenIndex] = useState(-1);
//   const itemRefs = useRef([]);     // <details>
//   const summaryRefs = useRef([]);  // <summary>
//   const contentRefs = useRef([]);  // answer container

//   const isDesktop = () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;
//   const getOffset = () => (isDesktop() ? headerOffsetDesktop : headerOffsetMobile);

//   // ----- render blocks (video first support is below where we split blocks) -----
//   const renderBlock = (block, idx) => {
//     switch (block.type) {
//       case "p":
//         return (
//           <p key={`p-${idx}`} className="text-gray-700">
//             {block.text}
//           </p>
//         );
//       case "ul":
//         return (
//           <ul key={`ul-${idx}`} className="list-disc space-y-2 pl-5 text-gray-700">
//             {block.items?.map((it, i) => (
//               <li key={`li-${idx}-${i}`}>{it}</li>
//             ))}
//           </ul>
//         );
//       case "table":
//         return (
//           <div key={`tbl-${idx}`} className="overflow-x-auto">
//             <table className="w-full text-left text-sm md:text-base border border-gray-200 rounded-xl overflow-hidden">
//               {block.headers?.length ? (
//                 <thead>
//                   <tr className="border-b border-gray-200 bg-gray-100 text-gray-800">
//                     {block.headers.map((h, hIdx) => (
//                       <th key={`th-${hIdx}`} className="p-3">{h}</th>
//                     ))}
//                   </tr>
//                 </thead>
//               ) : null}
//               <tbody className="divide-y divide-gray-200">
//                 {block.rows?.map((row, rIdx) => (
//                   <tr key={`tr-${rIdx}`}>
//                     {row.map((cell, cIdx) => (
//                       <td key={`td-${rIdx}-${cIdx}`} className="p-3">{cell}</td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );
//       case "video": {
//         const src = block.src;
//         if (!src) return null;

//         if (isYouTube(src) || isVimeo(src)) {
//           const embed = isYouTube(src) ? toYouTubeEmbed(src) : toVimeoEmbed(src);
//           return (
//             <figure key={`vid-${idx}`} className="space-y-2">
//               <div
//                 className="w-full overflow-hidden rounded-xl border border-gray-200"
//                 style={{ aspectRatio: "16 / 9" }}
//               >
//                 <iframe
//                   src={embed}
//                   title={block.caption || "Embedded video"}
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   allowFullScreen
//                   className="h-full w-full"
//                 />
//               </div>
//               {block.caption ? (
//                 <figcaption className="text-xs text-gray-500">{block.caption}</figcaption>
//               ) : null}
//             </figure>
//           );
//         }

//         return (
//           <figure key={`vid-${idx}`} className="space-y-2">
//             <video
//               controls
//               preload="metadata"
//               poster={block.poster || undefined}
//               className="w-full max-h-[70vh] rounded-xl border border-gray-200"
//             >
//               <source src={src} />
//               Your browser does not support the video tag.
//             </video>
//             {block.caption ? (
//               <figcaption className="text-xs text-gray-500">{block.caption}</figcaption>
//             ) : null}
//           </figure>
//         );
//       }
//       default:
//         return null;
//     }
//   };

//   const clearClamp = (i) => {
//     const cont = contentRefs.current[i];
//     if (!cont) return;
//     cont.style.maxHeight = "";
//     cont.style.overflowY = "";
//   };

//   const applyMobileClamp = (i) => {
//     const cont = contentRefs.current[i];
//     const sum = summaryRefs.current[i];
//     if (!cont || !sum) return;

//     if (isDesktop()) {
//       clearClamp(i);
//       return;
//     }

//     // Compute max height so next question header stays visible
//     const offset = getOffset();
//     const sumH = sum.getBoundingClientRect().height;
//     const max = window.innerHeight - offset - sumH - nextPeek;

//     if (max > 140) {
//       cont.style.maxHeight = `${max}px`;
//       cont.style.overflowY = "auto";
//     } else {
//       clearClamp(i);
//     }
//   };

//   const scrollToIndex = (i) => {
//     const el = itemRefs.current[i];
//     if (!el) return;
//     const offset = getOffset();
//     const top = el.getBoundingClientRect().top + window.scrollY - offset - 8;
//     window.scrollTo({ top, behavior: "smooth" });
//   };

//   // On mount: open from hash if present; otherwise open default on desktop
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const hashId = window.location.hash?.slice(1);
//     if (hashId) {
//       const idx = faqs.findIndex((f) => f.id === hashId);
//       if (idx >= 0) {
//         setOpenIndex(idx);
//         return;
//       }
//     }

//     // ✅ Auto-open on desktop if enabled and nothing is open
//     if (autoOpenOnDesktop && isDesktop() && openIndex === -1) {
//       const safeIndex =
//         typeof defaultDesktopIndex === "number" && defaultDesktopIndex >= 0 && defaultDesktopIndex < faqs.length
//           ? defaultDesktopIndex
//           : 0;
//       setOpenIndex(safeIndex);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [faqs]);

//   // Also respond to hash changes (e.g., ToC clicks)
//   useEffect(() => {
//     const onHash = () => {
//       const id = window.location.hash?.slice(1);
//       if (!id) return;
//       const idx = faqs.findIndex((f) => f.id === id);
//       if (idx >= 0) setOpenIndex(idx);
//     };
//     window.addEventListener("hashchange", onHash);
//     return () => window.removeEventListener("hashchange", onHash);
//   }, [faqs]);

//   // Enforce single-open behavior and clamp/scroll
//   useEffect(() => {
//     itemRefs.current.forEach((d, idx) => {
//       if (d) d.open = idx === openIndex;
//       if (idx !== openIndex) clearClamp(idx);
//     });

//     if (openIndex >= 0) {
//       requestAnimationFrame(() => {
//         applyMobileClamp(openIndex);
//         scrollToIndex(openIndex);

//         // keep next header visible on mobile
//         if (!isDesktop()) {
//           const nextSummary = itemRefs.current[openIndex + 1]?.querySelector("summary");
//           if (nextSummary) {
//             setTimeout(() => {
//               const rect = nextSummary.getBoundingClientRect();
//               const margin = 12;
//               const overflow = rect.bottom - (window.innerHeight - margin);
//               if (overflow > 0) {
//                 window.scrollBy({ top: overflow, behavior: "smooth" });
//               }
//             }, 260);
//           }
//         }
//       });
//     }
//   }, [openIndex]);

//   // Re-apply clamp if viewport crosses breakpoints; also auto-open when resizing to desktop if desired
//   useEffect(() => {
//     const onResize = () => {
//       if (openIndex >= 0) applyMobileClamp(openIndex);

//       if (autoOpenOnDesktop && isDesktop() && openIndex === -1) {
//         const safeIndex =
//           typeof defaultDesktopIndex === "number" && defaultDesktopIndex >= 0 && defaultDesktopIndex < faqs.length
//             ? defaultDesktopIndex
//             : 0;
//         setOpenIndex(safeIndex);
//       }
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [openIndex, autoOpenOnDesktop, defaultDesktopIndex, faqs.length]);

//   const onSummaryClick = (i, e) => {
//     e.preventDefault(); // we control open state
//     const next = openIndex === i ? -1 : i;
//     setOpenIndex(next);
//     // keep hash in sync for back/forward + anchor sharing
//     if (next >= 0 && typeof history !== "undefined") {
//       history.replaceState(null, "", `#${faqs[i].id}`);
//     }
//   };

//   return (
//     <section className="md:col-span-9 space-y-4 mb-4">
//       {faqs.map((f, i) => {
//         const isOpen = openIndex === i;
//         const allBlocks = Array.isArray(f.blocks) ? f.blocks : [];
//         const videoBlocks = allBlocks.filter((b) => b?.type === "video" && b.src);
//         const otherBlocks = allBlocks.filter((b) => b?.type !== "video");

//         return (
//           <details
//             id={f.id}
//             key={f.id}
//             ref={(el) => (itemRefs.current[i] = el)}
//             open={isOpen}
//             className="relative group rounded-2xl p-3 transition-colors open:bg-gray-50 scroll-mt-24 md:scroll-mt-28"
//           >
//             {/* left accent when open */}
//             <span
//               aria-hidden
//               className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-colors ${
//                 isOpen ? "bg-sky-500" : "bg-transparent"
//               }`}
//             />

//             <summary
//               ref={(el) => (summaryRefs.current[i] = el)}
//               onClick={(e) => onSummaryClick(i, e)}
//               className="flex items-start justify-between gap-2 cursor-pointer list-none bg-indigo-200 rounded-lg sm:p-2 p-2"
//               aria-expanded={isOpen}
//             >
//               <div className="flex min-w-0 items-center gap-3">
//                 <h2 className="text-lg font-bold sm:text-sm md:text-xl leading-snug">
//                   {f.title}
//                 </h2>
//               </div>

//               {/* chevron */}
//               <svg
//                 className={`mt-1 h-4 w-4 flex-none text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.08 1.04l-4.25 4.25a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
//               </svg>
//             </summary>

//             {/* Video(s) under the question, then the rest */}
//             <div ref={(el) => (contentRefs.current[i] = el)} className="mt-3 pl-4 space-y-4">
//               {videoBlocks.map((b, idx) => renderBlock({ ...b, type: "video" }, `v-${idx}`))}
//               {otherBlocks.map((b, idx) => renderBlock(b, idx))}
//             </div>
//           </details>
//         );
//       })}
//     </section>
//   );
// }










// File: src/app/faq/why-tinitiate/parents-stem/FAQList.jsx

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
