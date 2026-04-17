// File: src/app/faq/why-tinitiate/page.jsx
import Link from "next/link";
import Script from "next/script";
import faqData from "../../../../public/data/faq/whyTinitiate.json";
import FAQList from "../../components/FAQList";

export const metadata = {
  title: "Why TINITIATE — Remote Training that Fits Your Life",
  description:
    "Why remote training, what makes TINITIATE different, course duration, best technologies in India, flexibility, certificates, and job-readiness.",
  openGraph: {
    title: "Why TINITIATE — Remote Training that Fits Your Life",
    description:
      "Remote-friendly, mentor-led, project-based training for career-ready skills.",
    url: "https://www.tinitiate.com/faq/why-tinitiate",
    siteName: "TINITIATE",
    type: "article",
  },
};

// Flatten for JSON-LD (same as your other pages)
function flattenBlocksToText(blocks) {
  if (!Array.isArray(blocks)) return "";
  const parts = [];
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    if (b.type === "p" && typeof b.text === "string") parts.push(b.text);
    if (b.type === "ul" && Array.isArray(b.items)) {
      parts.push(b.items.filter((x) => typeof x === "string").join("; "));
    }
    if (b.type === "table" && Array.isArray(b.rows)) {
      const header = Array.isArray(b.headers) ? b.headers : [];
      parts.push(
        b.rows
          .map((row) =>
            Array.isArray(row)
              ? row
                  .map((cell, i) =>
                    header[i] ? `${header[i]}: ${cell}` : String(cell ?? "")
                  )
                  .join(" | ")
              : ""
          )
          .join("; ")
      );
    }
  }
  return parts.join(" ");
}

export default function WhyTinitiatePage() {
  const { updatedAt, faqs } = faqData;

  // Use JSON as-is; just ensure blocks is always an array
  const normalizedFaqs = (Array.isArray(faqs) ? faqs : []).map((f) => ({
    ...f,
    title: f.title ?? "",
    blocks: Array.isArray(f?.blocks) ? f.blocks : [],
  }));

  const updatedAtLabel = new Date(`${updatedAt}T00:00:00+05:30`).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Kolkata" }
  );

  // JSON-LD for ALL FAQs from JSON (no hardcoded/priority section)
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: normalizedFaqs.map((f) => ({
      "@type": "Question",
      name: f.title,
      acceptedAnswer: { "@type": "Answer", text: flattenBlocksToText(f.blocks) },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-16 md:pt-16">
      {/* ===== Hero ===== */}
      <section className="mx-auto w-[92%] max-w-[1200px] pb-6">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-sky-50 to-white p-7 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              Why TINITIATE
            </p>
            {/* <p className="text-xs text-gray-500">Updated: {updatedAtLabel} (IST)</p> */}
          </div>

          <h1 className="mt-2 text-2xl font-extrabold leading-tight md:text-4xl">
            Why TINITIATE — Remote Training that Fits Your Life
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Remote-friendly, mentor-led, project-based training that turns learning into
            job-ready skills — without compromising your routine.
          </p>

          {/* Quick value chips */}
          <ul className="mt-5 flex flex-wrap gap-2">
            {[
              "100% Online • Live + Recordings",
              "Hands-on Projects & Portfolio",
              "1-to-1 Doubt Clearing",
            ].map((t) => (
              <li
                key={t}
                className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-800 shadow-sm"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* CTA Row */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/request-callback"
              className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Talk to a Mentor
            </Link>
            <Link
              href="/work-experience-program"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              Explore WEP
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Layout ===== */}
      <div className="mx-auto grid w-[92%] max-w-[1200px] gap-8 md:grid-cols-12 ">
        {/* ===== ToC (built only from JSON) ===== */}
        <aside className="hidden md:col-span-3 md:block mb-6">
          <div className="sticky top-20">
            <nav
              aria-label="On this page"
              className="rounded-2xl border border-gray-200 p-4"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
                On this page
              </p>

              <ul
                className="
                  mt-2 text-sm border border-gray-200 rounded-xl
                  overflow-x-hidden md:overflow-y-auto
                  md:max-h-[calc(100vh-10rem)]
                  overscroll-contain
                "
              >
                {normalizedFaqs.map((f) => (
                  <li key={`toc-${f.id}`} className="border-b last:border-b-0">
                    <a
                      className="block px-3 py-2 hover:bg-gray-50 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                      href={`#${f.id}`}
                    >
                      {f.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* ===== Main column (all from JSON only) ===== */}
        <section className="md:col-span-9 space-y-8 ">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
            <FAQList faqs={normalizedFaqs} openAll />
          </div>

          {/* Bottom CTA */}
          <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-5 md:p-6 mb-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Didn’t find your question?</h3>
                <p className="text-sm text-gray-600">
                  We’ll guide you to the right track based on your background and goals.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/request-callback"
                  className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                >
                  Talk to a Mentor
                </Link>
                <Link
                  href="/work-experience-program"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
                >
                  Explore WEP
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <Script
        id="faq-jsonld-why-tinitiate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd),
        }}
      />
    </main>
  );
}
