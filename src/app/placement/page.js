import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileCheck2,
  FileText,
  GraduationCap,
  Layers3,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  UserCircle2,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Placement Support & Career Readiness | Tinitiate AI Solutions",
  description:
    "Explore resume support, LinkedIn guidance, mock interviews, project storytelling, and career-readiness pathways from Tinitiate AI Solutions.",
};

const supportHighlights = [
  {
    title: "Resume & LinkedIn Positioning",
    description:
      "Refine your story, sharpen project bullets, and present your strengths in a recruiter-friendly format.",
    icon: FileCheck2,
  },
  {
    title: "Interview Preparation",
    description:
      "Practice technical rounds, project walkthroughs, and HR conversations with structured feedback.",
    icon: ClipboardCheck,
  },
  {
    title: "Portfolio & Project Storytelling",
    description:
      "Turn assignments, capstones, and deployments into credible proof of skill for interviews.",
    icon: Code2,
  },
  {
    title: "Role-Mapped Career Guidance",
    description:
      "Choose a realistic target role and align your profile, practice, and learning journey around it.",
    icon: Target,
  },
  {
    title: "Live Project Credibility",
    description:
      "Strengthen your placement story with practical exposure through training and work-experience pathways.",
    icon: Layers3,
  },
  {
    title: "Confidence & Communication",
    description:
      "Learn how to explain decisions, contributions, and trade-offs with clarity instead of hesitation.",
    icon: Users,
  },
];

const readinessPillars = [
  {
    title: "Clarity before applications",
    description:
      "Strong placement journeys start with the right role target, not random job applications.",
    icon: Briefcase,
  },
  {
    title: "Proof before promises",
    description:
      "Projects, GitHub work, and practical storytelling build more trust than buzzwords ever can.",
    icon: ShieldCheck,
  },
  {
    title: "Practice before pressure",
    description:
      "Mock interviews and review loops help you fix weak spots before the real conversation starts.",
    icon: LineChart,
  },
];

const journeySteps = [
  {
    step: "Stage 01",
    title: "Choose your target role",
    description:
      "We start by understanding whether you are aiming for software, data, cloud, reporting, or a related track.",
  },
  {
    step: "Stage 02",
    title: "Rebuild your profile assets",
    description:
      "Resume bullets, LinkedIn headline, project summaries, and role alignment get tightened together.",
  },
  {
    step: "Stage 03",
    title: "Turn projects into interview proof",
    description:
      "Your work is framed around outcomes, architecture, tools used, challenges faced, and what you personally delivered.",
  },
  {
    step: "Stage 04",
    title: "Run mock interview loops",
    description:
      "Technical discussions, HR questions, and project demos are rehearsed until your answers feel natural and sharp.",
  },
  {
    step: "Stage 05",
    title: "Move forward with a better plan",
    description:
      "You continue with clearer positioning, stronger confidence, and a next-step route into training or work experience.",
  },
];

const supportTracks = [
  {
    title: "Beginner Training",
    description:
      "Start with fundamentals and guided practice that build confidence step by step.",
    href: "/training/beginner-training",
    cta: "Explore Beginner",
    points: [
      "Foundational skills",
      "Mini-project practice",
      "Better clarity on your next role",
    ],
  },
  {
    title: "Professional Training",
    description:
      "Move into role-focused tracks across full-stack, data, cloud, DevOps, and reporting.",
    href: "/training/professional-training",
    cta: "View Pro Paths",
    points: [
      "Job-role aligned learning",
      "Hands-on assignments",
      "Interview-relevant technical depth",
    ],
  },
  {
    title: "Work Experience Program",
    description:
      "Add live-project credibility and stronger stories for resumes and interviews.",
    href: "/work-experience-program",
    cta: "See Work Experience",
    points: [
      "Real project exposure",
      "Portfolio-strengthening outcomes",
      "Resume and interview readiness support",
    ],
  },
];

const faqs = [
  {
    question: "Do you guarantee a job?",
    answer:
      "No. We focus on job readiness, stronger project proof, clearer positioning, and better interview performance rather than unrealistic placement promises.",
  },
  {
    question: "Who is this support best for?",
    answer:
      "Students, fresh graduates, career switchers, and working professionals who want stronger profile presentation for IT roles can all benefit from this support.",
  },
  {
    question: "What improves placement chances fastest?",
    answer:
      "Consistent technical practice, real projects, a recruiter-friendly resume, LinkedIn clarity, and repeated mock interview feedback usually create the biggest lift.",
  },
];

const roleChips = [
  "Full Stack Developer",
  "Python Developer",
  "Java Developer",
  "Data Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "Power BI Developer",
  "Reporting Analyst",
];

export default function PlacementPage() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-2rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.16),transparent_64%)] dark:bg-[radial-gradient(circle,rgba(56,189,248,0.14),transparent_66%)]" />
        <div className="absolute right-[-8rem] top-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.18),transparent_62%)] dark:bg-[radial-gradient(circle,rgba(245,158,11,0.12),transparent_64%)]" />
        <div className="absolute inset-x-0 top-0 h-[40rem] bg-[linear-gradient(180deg,rgba(15,34,66,0.06),transparent_58%)] dark:bg-[linear-gradient(180deg,rgba(8,47,73,0.22),transparent_54%)]" />
      </div>

      <section className="relative isolate -mt-[72px] overflow-hidden border-b border-slate-200 bg-[#07111e] pt-[72px] text-white dark:border-slate-800 sm:-mt-[84px] sm:pt-[84px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(201,162,39,0.14),transparent_18%),linear-gradient(135deg,#030914_0%,#071525_48%,#030913_100%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_160px)] opacity-15" />
        <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%),linear-gradient(90deg,rgba(3,9,18,0)_0%,rgba(3,9,18,0.22)_58%,rgba(3,9,18,0.78)_100%)] lg:block" />

        <div className="relative min-h-[560px] sm:min-h-[600px] lg:min-h-[640px]">
          <div className="grid min-h-[560px] sm:min-h-[600px] lg:min-h-[640px] lg:grid-cols-[minmax(0,0.96fr)_minmax(24rem,46vw)]">
            <div className="relative z-10 flex px-4 py-8 sm:px-5 sm:py-10 lg:px-8 xl:px-10">
              <div className="max-w-[46rem] self-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100 shadow-sm backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Placement Support
                </span>

                <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-[3.75rem]">
                  Placement support that makes your profile interview-ready.
                </h1>

                <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-200/88 sm:text-lg">
                  Build a sharper resume, stronger LinkedIn, clearer project storytelling,
                  and more confident interview performance with support built around
                  real career outcomes.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/request-callback?service=Placement%20Support"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    Request Guidance
                  </Link>
                  <Link
                    href="/work-experience-program"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/14"
                  >
                    See Work Program
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-5 overflow-hidden rounded-[1.7rem] border border-white/10 shadow-[0_24px_65px_-40px_rgba(2,6,23,0.82)] lg:hidden">
                  <div className="relative h-[150px] overflow-hidden rounded-[1.7rem] min-[390px]:h-[165px] sm:h-[220px]">
                    <Image
                      src="/images/hero/placement-hero-interview.jpg"
                      alt="Interview-style placement discussion"
                      fill
                      priority
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,9,18,0.04),rgba(3,9,18,0.10)_38%,rgba(3,9,18,0.24)_100%)]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="absolute inset-y-0 left-0 right-0 xl:right-0">
                <div className="relative h-full overflow-hidden rounded-l-[2.8rem] border border-r-0 border-white/10 shadow-[0_36px_90px_-42px_rgba(2,6,23,0.84)]">
                  <Image
                    src="/images/hero/placement-hero-interview.jpg"
                    alt="Interview-style placement discussion"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,9,18,0.12)_0%,rgba(3,9,18,0.04)_34%,rgba(3,9,18,0.10)_66%,rgba(3,9,18,0.34)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(3,9,18,0.06)_30%,rgba(3,9,18,0.20)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_55%,#f1f6ff_100%)] p-6 shadow-[0_24px_70px_-44px_rgba(15,23,42,0.22)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,#020617_0%,#0b1220_58%,#0f1c34_100%)] sm:p-7">
              <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-200">
                    Why It Works
                  </span>
                  <h2 className="mt-5 max-w-[18ch] text-balance text-3xl font-black leading-tight text-[#0f2242] dark:text-slate-50 sm:text-4xl">
                    Career support should feel specific, not generic.
                  </h2>
                  <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-[#5a6b83] dark:text-slate-300">
                    Strong placement support focuses on clarity, proof, and progression.
                    The goal here is to help learners understand what to
                    improve, how to present it, and what path to follow next.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Clear target-role thinking instead of scattered applications",
                    "Practical profile building around projects and outcomes",
                    "Interview practice that improves confidence under pressure",
                    "Career-ready guidance connected to real Tinitiate programs",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-sky-300" />
                      <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
              {readinessPillars.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="flex h-full flex-col rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_-36px_rgba(15,23,42,0.24)] transition-transform duration-200 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#0f2242] dark:bg-sky-500/10 dark:text-sky-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-slate-50">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5b667a] dark:text-slate-300">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f7fafe] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 dark:bg-slate-950/80">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm dark:border-sky-500/20 dark:bg-slate-900 dark:text-sky-200">
              Career Launch Stack
            </span>
              <h2 className="mt-5 text-balance text-3xl font-black leading-tight text-[#0f2242] dark:text-slate-50 sm:text-4xl">
              Career services built for modern hiring expectations.
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-[#586983] dark:text-slate-300">
              The goal is simple: make your profile easier to trust, your projects
              easier to understand, and your interviews easier to navigate.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportHighlights.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group flex h-full flex-col rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-[0_20px_48px_-36px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f2242] text-white transition group-hover:bg-[#17345f] dark:bg-sky-500/12 dark:text-sky-200 dark:group-hover:bg-sky-500/18">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-slate-50">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5b667a] dark:text-slate-300">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#0f2242_0%,#10294e_45%,#0b1730_100%)] p-6 text-white shadow-[0_30px_90px_-40px_rgba(2,6,23,0.72)] dark:border-slate-800 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                  <LineChart className="h-4 w-4" />
                  Placement Journey
                </span>
                <h2 className="mt-5 max-w-[16ch] text-balance text-3xl font-black leading-tight sm:text-4xl">
                  From uncertainty to interview readiness.
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-slate-300">
                  Instead of leaving learners with scattered advice, we organize the
                  path into stages that improve clarity, proof, and confidence one layer at a time.
                </p>

                <div className="mt-8 rounded-[1.7rem] border border-white/10 bg-white/8 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-sky-100">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-sky-200">
                        Outcome-focused support
                      </p>
                      <p className="mt-1 text-sm leading-7 text-slate-300">
                        We help learners become better prepared for the market. We do not
                        rely on inflated promises or unrealistic guarantees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {journeySteps.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[1.7rem] border border-white/10 bg-white/8 p-5 backdrop-blur"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-[#0f2242]">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                          {item.step}
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 dark:bg-[linear-gradient(180deg,#020617_0%,#0b1220_100%)]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-200">
              Next Best Step
            </span>
            <h2 className="mt-5 text-balance text-3xl font-black leading-tight text-[#0f2242] dark:text-slate-50 sm:text-4xl">
              Placement support becomes stronger when it connects to the right training path.
            </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-[#5a6c84] dark:text-slate-300">
              Career readiness becomes more effective when it is connected to a
              practical learning path. These are three of the clearest routes inside Tinitiate.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
            {supportTracks.map(({ title, description, href, cta, points }) => (
              <div
                key={title}
                className="flex h-full flex-col rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.24)] dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#0f2242] dark:bg-sky-500/10 dark:text-sky-200">
                  {title === "Beginner Training" && <BookOpen className="h-5 w-5" />}
                  {title === "Professional Training" && <FileText className="h-5 w-5" />}
                  {title === "Work Experience Program" && <Sparkles className="h-5 w-5" />}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-slate-50">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5b667a] dark:text-slate-300">
                  {description}
                </p>

                <div className="mt-5 space-y-3">
                  {points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-sky-300" />
                      <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={href}
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900 dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-300 lg:mt-auto"
                >
                  {cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.2)] dark:border-slate-800 dark:bg-slate-900 sm:p-7">
              <div className="grid gap-7 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                <div>
                  <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-200">
                    Honest Positioning
                  </span>
                  <h2 className="mt-5 max-w-[18ch] text-balance text-3xl font-black leading-tight text-[#0f2242] dark:text-slate-50 sm:text-4xl">
                    Better preparation beats louder promises.
                  </h2>
                  <p className="mt-5 text-pretty text-base leading-8 text-[#5c6d84] dark:text-slate-300">
                    Strong career outcomes come from clarity, trust, and consistent
                    practice. That is why our placement support focuses on preparation
                    you can carry into real applications and interviews.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Portfolio strength matters more when you can explain what you built.",
                    "Resume quality improves when your bullets show contribution and impact.",
                    "Interview confidence improves when answers are practiced out loud, not only studied silently.",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 dark:border-slate-800 dark:bg-slate-950"
                    >
                      <UserCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0f2242] dark:text-sky-300" />
                      <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
              {faqs.map(({ question, answer }) => (
                <div
                  key={question}
                  className="flex h-full flex-col rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_-38px_rgba(15,23,42,0.22)] dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0f2242] text-white dark:bg-sky-500/12 dark:text-sky-200">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-slate-50">
                    {question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5b667a] dark:text-slate-300">
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-[#d8e0ec] bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] p-4 shadow-[0_28px_80px_rgba(8,22,44,0.14)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,#020617_0%,#0b1220_42%,#07152b_42%,#020617_100%)] sm:p-6">
            <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
              <div className="rounded-[1.7rem] border border-white/80 bg-white/94 p-6 shadow-[0_20px_50px_-36px_rgba(15,23,42,0.18)] dark:border-slate-800 dark:bg-slate-950/70 sm:p-8">
                <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-200">
                  Career Momentum
                </span>
                <h2 className="mt-5 max-w-[16ch] text-balance text-3xl font-black leading-tight text-[#0f2242] dark:text-white sm:text-4xl">
                  Take the next step with stronger career readiness.
                </h2>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-[#5c6d84] dark:text-slate-300">
                  If placement readiness is the reason people visit, the next step should
                  be obvious: get guidance, strengthen the profile, and connect into the
                  right training path.
                </p>
              </div>

              <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[1.7rem] bg-[linear-gradient(135deg,#102344_0%,#0a1730_100%)] p-5 shadow-[0_28px_70px_-38px_rgba(2,6,23,0.7)] dark:bg-[linear-gradient(135deg,#08101f_0%,#020617_100%)] sm:p-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.12),transparent_30%)]"
                />

                <div className="relative mx-auto flex w-full max-w-[38rem] flex-col justify-center">
                  <div className="mb-5 text-center sm:mb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
                      Quick Actions
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Pick the next action that helps you move from profile polish to interview readiness.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Link
                      href="/request-callback?service=Placement%20Support"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#c9a227] px-6 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#e0b93c]"
                    >
                      Request a Callback
                    </Link>
                    <Link
                      href="/training/professional-training"
                      className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/18 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/8"
                    >
                      Explore Training Paths
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/request-callback?service=Resume%20Preparation"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/18 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/8"
                    >
                      Resume Preparation
                    </Link>
                    <Link
                      href="/request-callback?service=Interview%20Preparation"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/18 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/8"
                    >
                      Interview Preparation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
