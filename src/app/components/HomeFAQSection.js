import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

const homeFaqs = [
  {
    question: "What exactly will I learn?",
    answer:
      "You will learn practical IT skills through the pathway you choose, including full stack development, Gen AI integration, databases, APIs, Git, cloud basics, testing habits, and project documentation. The focus is on skills you can apply and explain in interviews.",
  },
  {
    question: "Will I build real projects?",
    answer:
      "Yes. You will work on guided, industry-style projects that help you practice coding, debugging, Git workflow, documentation, and demos. These projects become useful proof for your portfolio, resume, and interview conversations.",
  },
  {
    question: "Is a job guaranteed?",
    answer:
      "No honest training program can guarantee a job for every learner. TINITIATE AI provides structured placement assistance, interview preparation, portfolio support, and referrals where available, while final selection depends on your skill, consistency, interviews, and market demand.",
  },
  {
    question: "What is placement assistance?",
    answer:
      "Placement assistance includes resume improvement, LinkedIn guidance, mock interviews, technical and HR interview preparation, project storytelling, and referral support wherever suitable opportunities are available.",
  },
  {
    question: "I'm from a non-IT background. Can I join?",
    answer:
      "Yes. Beginners and non-IT learners can start with a guided foundation path. We build confidence step by step, beginning with core logic and practical tools before moving into deeper project work.",
  },
  {
    question: "Can I ask unlimited doubts?",
    answer:
      "Yes. Students are encouraged to ask doubts regularly. The goal is to catch confusion early, correct mistakes through mentor feedback, and help you become confident through repeated practice.",
  },
  {
    question: "Why should I choose TINITIATE AI instead of another institute?",
    answer:
      "TINITIATE AI focuses on practical learning, mentor review, real project execution, career readiness, and work-style habits. You do not only complete topics; you build, document, review, and present your work like a professional.",
  },
  {
    question: "Is my investment worthwhile?",
    answer:
      "The value depends on your effort, attendance, and consistency. The program is designed to give you practical skills, portfolio proof, mentor feedback, and career preparation, which are all useful when you take the process seriously.",
  },
  {
    question: "Can colleges partner with TINITIATE AI?",
    answer:
      "Yes. Colleges can collaborate with TINITIATE AI for skill development programs, placement preparation, bootcamps, project-based learning, internships, faculty development, and industry-aligned training.",
  },
  {
    question: "Can training be conducted on campus?",
    answer:
      "Yes. Training can be conducted on campus, online, or in a hybrid format depending on the college requirement, student count, schedule, and selected program scope.",
  },
];

export default function HomeFAQSection() {
  return (
    <section className="scroll-mt-32 bg-white px-4 py-12 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-16 md:px-10">
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-[#12345f] dark:text-white sm:text-4xl lg:text-5xl">
            Answers Before You Enroll
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#c9a227]" />
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm font-medium leading-7 text-[#53677d] dark:text-slate-300 sm:text-base">
            Clear answers about learning, projects, placement support,
            beginner readiness, and college training options.
          </p>
        </div>

        <div className="mx-auto mt-9 max-w-5xl border-y border-gray-200 dark:border-slate-700">
          {homeFaqs.map((item) => (
            <details
              key={item.question}
              className="group border-b border-gray-200 py-5 last:border-b-0 dark:border-slate-700"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 pr-14 text-left sm:pr-0">
                <span className="text-base font-extrabold leading-6 text-gray-950 dark:text-white sm:text-lg">
                  {item.question}
                </span>
                <Plus className="mt-1 h-5 w-5 shrink-0 text-[#9b7a10] transition group-open:rotate-45 dark:text-[#f2c94c]" />
              </summary>
              <p className="mt-3 max-w-4xl text-pretty text-sm font-medium leading-7 text-[#53677d] dark:text-slate-300 sm:text-[15px]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/faq"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#12345f] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1d4775] dark:bg-[#f2cf5b] dark:text-[#13233a] sm:w-auto"
          >
            View Full FAQ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
