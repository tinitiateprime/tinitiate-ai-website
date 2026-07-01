import { Plus } from "lucide-react";
import whyTinitiate from "../../../public/data/faq/whyTinitiate.json";
import studentStem from "../../../public/data/faq/studentFaqStem.json";
import studentNonStem from "../../../public/data/faq/studentFaqNonStem.json";
import parentsStem from "../../../public/data/faq/parentsFaqStem.json";
import parentsNonStem from "../../../public/data/faq/parentsFaqNonStem.json";

export const metadata = {
  title: "FAQ'S | Tinitiate AI Solutions",
  description:
    "Browse Tinitiate AI Solutions FAQs category-wise for students, parents, and college partners.",
};

const faqCategories = [
  {
    id: "why-tinitiate",
    label: "Why Tinitiate AI Solutions",
    description:
      "Training model, remote learning, course value, certificates, breaks, and career use.",
    data: whyTinitiate,
  },
  {
    id: "students-stem",
    label: "Students - STEM",
    description:
      "For technical students who want practical IT, cloud, data, AI, and project readiness.",
    data: studentStem,
  },
  {
    id: "students-nonstem",
    label: "Students - Non-STEM",
    description:
      "For learners from non-technical backgrounds who want to enter technology step by step.",
    data: studentNonStem,
  },
  {
    id: "parents-stem",
    label: "Parents - STEM",
    description:
      "For parents evaluating structured technical training and career preparation.",
    data: parentsStem,
  },
  {
    id: "parents-nonstem",
    label: "Parents - Non-STEM",
    description:
      "For parents of non-technical learners exploring technology, confidence, and job-ready skills.",
    data: parentsNonStem,
  },
];

function cleanText(value = "") {
  return String(value)
    .replace(/\u00e2\u20ac\u2122/g, "'")
    .replace(/\u00e2\u20ac\u0153/g, '"')
    .replace(/\u00e2\u20ac\u009d/g, '"')
    .replace(/\u00e2\u20ac\u201d/g, "-")
    .replace(/\u00e2\u20ac\u201c/g, "-")
    .replace(/\u00e2\u2020\u2019/g, "->")
    .replace(/\u00e2\u20ac\u00a2/g, "-")
    .replace(/\u00c2/g, "")
    .trim();
}

function getFaqs(category) {
  return Array.isArray(category.data?.faqs) ? category.data.faqs : [];
}

function renderBlock(block, index) {
  if (!block) return null;

  if (block.type === "ul" && Array.isArray(block.items)) {
    return (
      <ul key={index} className="mt-3 space-y-2">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm font-medium leading-7 text-[#53677d] dark:text-slate-300 sm:text-[15px]"
          >
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b7a10] dark:bg-[#f2c94c]" />
            <span>{cleanText(item)}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (
    block.type === "table" &&
    Array.isArray(block.headers) &&
    Array.isArray(block.rows)
  ) {
    return (
      <div
        key={index}
        className="mt-4 overflow-x-auto border border-gray-200 dark:border-slate-700"
      >
        <table className="w-full min-w-[620px] border-collapse bg-white text-left dark:bg-slate-950">
          <thead>
            <tr className="bg-gray-50 dark:bg-slate-900">
              {block.headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-r border-gray-200 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#53677d] last:border-r-0 dark:border-slate-700 dark:text-slate-300"
                >
                  {cleanText(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${rowIndex}-${cellIndex}`}
                    className="border-b border-r border-gray-200 px-4 py-3 text-sm font-medium leading-6 text-[#53677d] last:border-r-0 dark:border-slate-700 dark:text-slate-300"
                  >
                    {cleanText(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.text) {
    return (
      <p
        key={index}
        className="mt-3 max-w-4xl text-pretty text-sm font-medium leading-7 text-[#53677d] dark:text-slate-300 sm:text-[15px]"
      >
        {cleanText(block.text)}
      </p>
    );
  }

  return null;
}

export default function FAQPage() {
  const totalFaqs = faqCategories.reduce(
    (total, category) => total + getFaqs(category).length,
    0
  );

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      getFaqs(category).map((faq) => ({
        "@type": "Question",
        name: cleanText(faq.title),
        acceptedAnswer: {
          "@type": "Answer",
          text: cleanText(
            (faq.blocks || [])
              .flatMap((block) => [
                block.text,
                ...(Array.isArray(block.items) ? block.items : []),
              ])
              .filter(Boolean)
              .join(" ")
          ),
        },
      }))
    ),
  };

  return (
    <main className="bg-white text-gray-950 dark:bg-slate-950 dark:text-white">
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-extrabold leading-tight text-[#12345f] dark:text-white sm:text-5xl">
              {"FAQ'S"}
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#c9a227]" />
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base font-medium leading-8 text-[#53677d] dark:text-slate-300">
              All important questions organized by learner, parent, and Tinitiate
              AI Solutions categories.
            </p>
            <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#7f93b0] dark:text-slate-400">
              {faqCategories.length} categories / {totalFaqs} questions
            </p>
          </div>

          <nav
            aria-label="FAQ categories"
            className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2"
          >
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm font-extrabold text-[#12345f] transition hover:border-[#c9a227] hover:text-[#9b7a10] dark:border-slate-700 dark:text-slate-200 dark:hover:border-[#f2c94c] dark:hover:text-[#f2c94c]"
              >
                {category.label}
              </a>
            ))}
          </nav>

          <div className="mt-12 space-y-14">
            {faqCategories.map((category) => {
              const faqs = getFaqs(category);

              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-32 border-t border-gray-200 pt-8 dark:border-slate-700"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-extrabold leading-tight text-[#12345f] dark:text-white sm:text-3xl">
                        {category.label}
                      </h2>
                      <p className="mt-2 max-w-3xl text-sm font-medium leading-7 text-[#53677d] dark:text-slate-300 sm:text-base">
                        {category.description}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm font-extrabold uppercase tracking-[0.16em] text-[#7f93b0] dark:text-slate-400">
                      {faqs.length} FAQs
                    </p>
                  </div>

                  <div className="mt-6 border-y border-gray-200 dark:border-slate-700">
                    {faqs.map((faq) => (
                      <details
                        key={`${category.id}-${faq.id}`}
                        className="group border-b border-gray-200 py-5 last:border-b-0 dark:border-slate-700"
                      >
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-5 pr-24 text-left sm:pr-0">
                          <span className="text-base font-extrabold leading-6 text-gray-950 dark:text-white sm:text-lg">
                            {cleanText(faq.title)}
                          </span>
                          <Plus className="mt-1 h-5 w-5 shrink-0 text-[#9b7a10] transition group-open:rotate-45 dark:text-[#f2c94c]" />
                        </summary>
                        <div className="mt-3">
                          {(faq.blocks || []).map(renderBlock)}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </main>
  );
}
