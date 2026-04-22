
// File: src/app/parents-faq/page.jsx
import Link from "next/link";
import Script from "next/script";
import faqData from "../../../../public/data/faq/parentsFaqStem.json";
import FAQList from "../../components/FAQList";


export const metadata = {
  title: "Parent FAQ — TINITIATE AI STEM & IT Programs",
  description:
    "Answers for parents about TINITIATE AI STEM & IT career programs: what STEM means in India, structure, duration, delivery, technologies, and how we bridge college-to-career.",
  openGraph: {
    title: "Parent FAQ — TINITIATE AI STEM & IT Programs",
    description:
      "Answers for parents about TINITIATE AI STEM & IT career programs: what STEM means in India, structure, duration, delivery, technologies, and how we bridge college-to-career.",
    url: "https://www.tinitiate.com/parents-faq",
    siteName: "TINITIATE AI",
    type: "article",
  },
};

// Hardened helper
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
      const rows = b.rows;
      parts.push(
        rows
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

export default function ParentFAQPage() {
  const { updatedAt, faqs } = faqData;

  // ✅ Normalize data so blocks is ALWAYS an array
  const normalizedFaqs = (Array.isArray(faqs) ? faqs : []).map((f) => ({
    ...f,
    blocks: Array.isArray(f?.blocks) ? f.blocks : [],
  }));

  const updatedAtLabel = new Date(`${updatedAt}T00:00:00+05:30`).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Kolkata" }
  );

  // STEM explainer content (shown and included in JSON-LD)
  const stemTitle = "What is STEM ?";
  const stemAnswerText =
    "STEM means Science, Technology, Engineering, and Mathematics — learned together with practical, project-based activities. In India, think of it as “Applied Science & Technology learning” that builds real-world skills (problem-solving, logical thinking, making projects) beyond just exam preparation. It is not only coding; it can include electronics (IoT), design/engineering, data analysis, automation, and AI. Examples: building a weather or finance tracker app, automating attendance with Excel→Python, a simple IoT sensor project, or analysing cricket/stock-market data. This strengthens fundamentals, creates a portfolio for internships, and improves confidence for interviews.";

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: stemTitle,
        acceptedAnswer: { "@type": "Answer", text: stemAnswerText },
      },
      ...normalizedFaqs.map((f) => ({
        "@type": "Question",
        name: f.title,
        acceptedAnswer: { "@type": "Answer", text: flattenBlocksToText(f.blocks) },
      })),
    ],
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-16 md:pt-16">
      {/* ===== Hero ===== */}
      <section className="mx-auto w-[92%] max-w-[1200px] pb-6">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-sky-50 to-white p-7 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              For Parents 
            </p>
            {/* <p className="text-xs text-gray-500">Updated: {updatedAtLabel} (IST)</p> */}
          </div>

          <h1 className="mt-2 text-2xl font-extrabold leading-tight md:text-4xl">
            Parent FAQ — TINITIATE AI STEM & IT Career Programs
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Clear answers on our online model, program structure, technologies,
            and how we turn classroom learning into job-ready skills.
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
              View Work Experience Program
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Layout ===== */}
      <div className="mx-auto grid w-[92%] max-w-[1200px] gap-8 md:grid-cols-12 ">
        {/* ===== ToC ===== */}
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
                {/* REMOVED the "What is STEM ?" ToC item */}
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

        {/* ===== Main column ===== */}
        <section className="md:col-span-9 space-y-8 ">
          {/* --- STEM Explainer Card (kept) --- */}
          <article
            id="what-is-stem"
            aria-labelledby="stem-title"
            className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6"
          >
            <h2 id="stem-title" className="text-xl font-bold md:text-2xl">
              STEM = Science, Technology, Engineering, Mathematics — learned the practical way
            </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-700">
            STEM means learning core science and technology through{" "}
            <strong>hands-on, project-based work</strong>. It focuses on building real-world
            skills—<strong>problem-solving, logical thinking, and creating things</strong>—not
            just memorizing concepts. It isn’t only coding; it can include{" "}
            <strong>electronics (IoT), design/engineering, automation, data analysis, and AI</strong>.
              </p>


            <div className="mt-4 grid gap-4 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-sm font-semibold text-gray-900">Everyday examples</h3>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li>• Build a small weather/finance tracker app.</li>
                    <li>• Automate attendance using Excel → Python.</li>
                    <li>• Make a simple IoT sensor mini-project.</li>
                    <li>• Analyse cricket or stock-market data.</li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <h3 className="text-sm font-semibold text-gray-900">Why it helps</h3>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li>• Strong fundamentals + real-world problem-solving.</li>
                    <li>• A portfolio for internships and placements.</li>
                    <li>• Confidence for interviews & tech tasks.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* --- FAQ List (controlled) --- */}
          <FAQList faqs={normalizedFaqs} openAll />

          {/* --- Bottom CTA --- */}
          <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-5 md:p-6 mb-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Didn’t find your question?</h3>
                <p className="text-sm text-gray-600">
                  Talk to a mentor for personalised guidance based on your child’s goals.
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
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </main>
  );
}
