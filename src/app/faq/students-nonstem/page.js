// File: src/app/faq/why-tinitiate/students-nonstem/page.jsx
import Link from "next/link";
import Script from "next/script";
import FAQList from "../../components/FAQList";
import faqData from "../../../../public/data/faq/studentFaqNonStem.json"; // uses the student JSON you made

export const metadata = {
  title: "Student FAQ — Non-STEM (No Coding Background Needed) | TINITIATE",
  description:
    "For students from non-STEM backgrounds: why tech skills matter in every career, what you’ll learn at TINITIATE, and how projects + mentoring make you job-ready.",
  openGraph: {
    title: "Student FAQ — Non-STEM (No Coding Background Needed)",
    description:
      "Learn-by-doing with beginner-friendly tracks. Build projects, get mentored, and become interview-ready — even without a technical degree.",
    url: "https://www.tinitiate.com/faq/why-tinitiate/students-nonstem",
    siteName: "TINITIATE",
    type: "article",
  },
};

// Helper to flatten blocks for JSON-LD Answer text (same as other pages)
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
  const { faqs } = faqData ?? {};
  const normalizedFaqs = (Array.isArray(faqs) ? faqs : []).map((f) => ({
    ...f,
    blocks: Array.isArray(f?.blocks) ? f.blocks : [],
  }));

  // Since JSON has no updatedAt, show today's date in IST for the header label.
  const updatedAtLabel = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Kolkata",
  });

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
      {/* HERO */}
      <section className="mx-auto w-[92%] max-w-[1200px] pb-6">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-sky-50 to-white p-7 md:p-10 shadow-sm">
          {/* decorative pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(700px_260px_at_110%_-10%,rgba(56,189,248,.18),transparent_60%),radial-gradient(500px_200px_at_-10%_120%,rgba(59,130,246,.12),transparent_60%)]"
          />
          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700">
                For Students (Non-STEM / Non-IT)
              </p>
            </div>

            <h1 className="mt-2 text-2xl font-extrabold leading-tight md:text-4xl">
              Student FAQ — Not from STEM? Start Here
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
              Why tech skills matter in every career and how TINITIATE helps you learn
              by doing — with beginner-friendly projects and mentorship.
            </p>

            {/* value chips */}
            <ul className="mt-5 flex flex-wrap gap-2">
              {[
                "Beginner-friendly (No coding required)",
                "Live + Recordings • Hands-on projects",
                "Mentor-led • 1-to-1 Doubt Clearing",
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-sky-200 bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-sky-900 shadow-sm"
                >
                  {t}
                </li>
              ))}
            </ul>

            {/* CTAs */}
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
        </div>
      </section>

      {/* LAYOUT */}
      <div className="mx-auto grid w-[92%] max-w-[1200px] gap-8 md:grid-cols-12">
        {/* ToC */}
        <aside className="hidden md:col-span-3 md:block mb-6">
          <div className="sticky top-20">
            <nav
              className="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur p-4 shadow-sm"
              aria-label="On this page"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
                On this page
              </p>
              <ul className="mt-2 text-sm border border-gray-200 rounded-xl overflow-x-hidden md:overflow-y-auto md:max-h-[calc(100vh-10rem)] overscroll-contain">
                {normalizedFaqs.map((f) => (
                  <li key={`toc-${f.id}`} className="border-b last:border-b-0">
                    <a
                      href={`#${f.id}`}
                      className="block px-3 py-2 transition hover:bg-gray-50 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                    >
                      {f.title}
                    </a>
                  </li>
                ))}
              </ul>

            </nav>
          </div>
        </aside>

        {/* Main content */}
        <section className="md:col-span-9 space-y-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
            {/* Ensure FAQList renders an element with id={f.id} for each FAQ */}
            <FAQList faqs={normalizedFaqs} openAll />
          </div>

          {/* bottom CTA */}
          <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-5 md:p-6 shadow-sm mb-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Still have a question?</h3>
                <p className="text-sm text-gray-600">
                  We’ll help you start with the right foundation — no prior coding
                  required.
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
        id="faq-jsonld-students-nonstem"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd),
        }}
      />
    </main>
  );
}
