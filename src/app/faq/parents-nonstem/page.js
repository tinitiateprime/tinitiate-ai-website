// File: src/app/faq/why-tinitiate/parents-nonstem/page.jsx
import Link from "next/link";
import Script from "next/script";
import FAQList from "../../components/FAQList";
import faqData from "../../../../public/data/faq/parentsFaqNonStem.json";

export const metadata = {
  title: "Parent FAQ — Why Tech Skills Matter for Non-STEM Students | Tinitiate AI Solutions",
  description:
    "Clear answers for parents of non-IT/non-STEM students: why tech skills matter in every career, what Tinitiate AI Solutions teaches, and how beginners succeed with hands-on projects.",
  openGraph: {
    title: "Parent FAQ — Why Tech Skills Matter for Non-STEM Students",
    description:
      "Why tech matters beyond Computer Science, what we teach, career benefits, and how beginners succeed.",
    url: "https://www.tinitiateai.com/faq/why-tinitiate/parents-nonstem",
    siteName: "Tinitiate AI Solutions",
    type: "article",
  },
};

// Helper to flatten blocks for JSON-LD
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

export default function Page() {
  const { updatedAt, faqs } = faqData;

  // Normalize: ensure blocks is always an array
  const normalizedFaqs = (Array.isArray(faqs) ? faqs : []).map((f) => ({
    ...f,
    blocks: Array.isArray(f?.blocks) ? f.blocks : [],
  }));

  // Optional label if you want to show "Updated:" somewhere
  const updatedAtLabel = new Date(`${updatedAt}T00:00:00+05:30`).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Kolkata" }
  );

  // Top explainer (shown + included in JSON-LD)
  const topTitle = "Why should Non-STEM students learn technology?";
  const topAnswerText =
    "Because every career today runs on technology — from finance and marketing to design, HR, and operations. You don’t have to become a programmer: understanding digital tools and thinking logically makes you more effective in ANY field. Tinitiate AI Solutions focuses on beginner-friendly, hands-on learning: small projects that build confidence (Excel→Python automation, data analysis, simple apps, or IoT demos), then larger, resume-ready work. This approach improves problem-solving, creates a portfolio for internships, and prepares students to contribute on Day 1.";

  // JSON-LD
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: topTitle,
        acceptedAnswer: { "@type": "Answer", text: topAnswerText },
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
              For Parents (Non-IT / Non-STEM)
            </p>
            {/* <p className="text-xs text-gray-500">Updated: {updatedAtLabel} (IST)</p> */}
          </div>

          <h1 className="mt-2 text-2xl font-extrabold leading-tight md:text-4xl">
            Parent FAQ — Why Tech Skills Matter for Non-STEM Students
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Why technology skills matter in every career, what we teach at Tinitiate AI Solutions,
            and how beginners from any stream can build confidence through projects.
          </p>

          {/* Quick value chips */}
          <ul className="mt-5 flex flex-wrap gap-2">
            {[
              "Beginner-friendly (Zero coding required)",
              "Live + Recordings • Hands-on projects",
              "Mentor-led • 1-to-1 Doubt Clearing",
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
              Explore Work Experience Program
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
                {/* Top explainer first */}
                <li className="border-b">
                  <a
                    className="block px-3 py-2 hover:bg-gray-50 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                    href="#why-nonstem-tech"
                  >
                    {topTitle}
                  </a>
                </li>

                {/* Then the rest of the FAQs */}
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
          
          {/* --- Top Explainer Card ---
          <article
            id="why-nonstem-tech"
            aria-labelledby="nonstem-title"
            className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6"
          >
            <h2 id="nonstem-title" className="text-xl font-bold md:text-2xl">
              Tech skills make non-STEM students more effective in any career
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Non-STEM students don’t need to become programmers. Learning{" "}
              <strong>digital tools and project-based problem-solving</strong> helps in
              every role — marketing, finance, design, HR, operations. We begin with{" "}
              <strong>small, confidence-building projects</strong> (Excel→Python automation,
              data analysis dashboards, simple apps/IoT demos), then guide students to{" "}
              <strong>portfolio-ready work</strong> useful for internships and interviews.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-sm font-semibold text-gray-900">Examples we build</h3>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li>• Automate attendance or reports (Excel → Python).</li>
                    <li>• Create a mini website or simple app.</li>
                    <li>• Analyse cricket/finance data with visual dashboards.</li>
                    <li>• Try a tiny IoT sensor demo (optional).</li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <h3 className="text-sm font-semibold text-gray-900">Why this helps</h3>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li>• Stronger problem-solving & logical thinking.</li>
                    <li>• A practical portfolio for internships.</li>
                    <li>• Confidence for interviews & on-the-job tasks.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article> */}

          {/* --- FAQ List --- */}
          <FAQList faqs={normalizedFaqs} />

          {/* --- Bottom CTA --- */}
          <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-5 md:p-6 mb-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Still have a question?</h3>
                <p className="text-sm text-gray-600">
                  We’ll match your child’s background with the right path — without pressure.
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
        id="faq-jsonld-nonstem"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </main>
  );
}
