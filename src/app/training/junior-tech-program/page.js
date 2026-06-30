import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  CheckCircle2,
  Code2,
  Cpu,
  Layers3,
  Lightbulb,
  MessageSquareText,
  MonitorCheck,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Junior Tech Program | Tinitiate AI Solutions",
  description:
    "A project-led coding, AI, robotics, and software thinking program for Indian school students and teen learners.",
};

const introSignals = [
  {
    title: "Not a screen-time class",
    text: "Students use laptops and AI tools with purpose: logic, building, debugging, and explaining.",
    icon: ShieldCheck,
  },
  {
    title: "Project-led from week one",
    text: "Every stage includes visible mini-builds so parents can see progress, not just syllabus completion.",
    icon: Rocket,
  },
  {
    title: "Age-aware mentoring",
    text: "Younger learners get curiosity-led labs; teens get portfolio habits and engineering discipline.",
    icon: Users,
  },
];

const approachSteps = [
  {
    label: "Discover",
    title: "Start from curiosity",
    text: "Students first explore problems they understand: games, study tools, dashboards, robots, and apps.",
  },
  {
    label: "Think",
    title: "Convert ideas into logic",
    text: "Mentors help learners break work into steps, conditions, functions, data, and user decisions.",
  },
  {
    label: "Build",
    title: "Make working outputs",
    text: "Each concept becomes a usable artefact: a page, automation, quiz, chart, bot, or prototype.",
  },
  {
    label: "Showcase",
    title: "Explain with confidence",
    text: "Learners present what they built, what failed, what improved, and what they would do next.",
  },
];

const categories = [
  {
    title: "Coding Foundations",
    tag: "Python + logic",
    text: "Variables, conditions, loops, functions, debugging, problem solving, and clean code habits.",
    icon: Code2,
    accent: "text-blue-600 dark:text-blue-300",
  },
  {
    title: "Creative Web Apps",
    tag: "HTML, CSS, JS",
    text: "Interactive pages, forms, simple UI thinking, portfolio cards, and responsive layouts.",
    icon: MonitorCheck,
    accent: "text-sky-600 dark:text-sky-300",
  },
  {
    title: "AI and Data Thinking",
    tag: "Gen AI + charts",
    text: "Safe prompting, AI as a helper, data stories, charts, automation ideas, and model awareness.",
    icon: Brain,
    accent: "text-emerald-600 dark:text-emerald-300",
  },
  {
    title: "Robotics and Systems",
    tag: "Sensors + demos",
    text: "Robotics logic, inputs, outputs, APIs, cloud awareness, and simple engineering workflows.",
    icon: Cpu,
    accent: "text-[#9b7a10] dark:text-[#f2c94c]",
  },
];

const ageTracks = [
  {
    title: "Explorer",
    age: "Ages 8-10",
    image: "/images/junior-tech/junior-india-explorer.png",
    alt: "Indian school kids exploring robotics and logic cards in a classroom",
    headline: "Playful logic and first technology confidence",
    focus: ["Visual logic", "Robot instructions", "Simple Python ideas"],
    result: "Learners understand how instructions, sequence, and debugging work.",
    icon: Lightbulb,
  },
  {
    title: "Creator",
    age: "Ages 11-13",
    image: "/images/junior-tech/junior-india-builder.png",
    alt: "Indian pre-teen students building an app and data project with mentor guidance",
    headline: "Build apps, data stories, and AI-assisted projects",
    focus: ["Python projects", "Web pages", "AI and data labs"],
    result: "Learners build small usable products and explain their logic.",
    icon: Layers3,
  },
  {
    title: "Future Engineer",
    age: "Ages 14-17",
    image: "/images/junior-tech/junior-india-future.png",
    alt: "Indian teen students presenting a software and robotics project demo",
    headline: "Portfolio habits and demo-ready engineering practice",
    focus: ["Full-stack thinking", "Project demos", "Documentation habits"],
    result: "Learners create stronger portfolio proof and presentation confidence.",
    icon: Trophy,
  },
];

const showcaseProjects = [
  "Personal website with learning timeline",
  "Python game or quiz with scoring logic",
  "AI study assistant with safe prompt rules",
  "Data dashboard about a school or social topic",
  "Robotics or sensor logic demo",
  "Capstone presentation with mentor review",
];

const outcomes = [
  {
    title: "For Students",
    items: [
      "Coding confidence",
      "Better problem solving",
      "AI-safe learning habits",
      "Project presentation practice",
    ],
    icon: Rocket,
  },
  {
    title: "For Parents",
    items: [
      "Visible project progress",
      "Clear age-based roadmap",
      "Balanced screen-time purpose",
      "Honest next-step guidance",
    ],
    icon: ShieldCheck,
  },
  {
    title: "For Schools",
    items: [
      "Structured STEM enrichment",
      "Showcase-ready outcomes",
      "Mentor-led delivery",
      "Practical innovation culture",
    ],
    icon: BadgeCheck,
  },
];

const faqs = [
  {
    q: "Can a complete beginner join?",
    a: "Yes. The Explorer and Creator tracks start with guided logic and beginner-friendly projects before moving into code-heavy tasks.",
  },
  {
    q: "Is AI used responsibly?",
    a: "Yes. Students learn AI as a helper for thinking, drafting, and debugging. They still learn the logic behind the work.",
  },
  {
    q: "Will students build real projects?",
    a: "Yes. Each track has mini-projects, demos, and milestone reviews so learning becomes visible.",
  },
  {
    q: "Can this be run for schools or batches?",
    a: "Yes. It can be delivered as small-group training, school enrichment, holiday batches, or guided online sessions based on availability.",
  },
];

function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] ${
        light
          ? "border-white/20 bg-white/10 text-white"
          : "border-[#c9a227]/30 bg-[#fff8dc] text-[#7a5d00] dark:border-[#f2c94c]/30 dark:bg-[#f2c94c]/10 dark:text-[#f2c94c]"
      }`}
    >
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

export default function JuniorTechProgramPage() {
  return (
    <main className="bg-white text-gray-900 dark:bg-slate-950 dark:text-white">
      <section className="relative isolate min-h-[700px] overflow-hidden bg-[#071126] text-white sm:min-h-[720px] lg:min-h-[calc(100vh-120px)]">
        <Image
          src="/images/junior-tech/junior-india-hero.png"
          alt="Indian students learning coding, AI, and robotics with mentor guidance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,38,0.99)_0%,rgba(7,17,38,0.9)_40%,rgba(7,17,38,0.25)_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:54px_54px]" />

        <Container className="relative flex min-h-[700px] items-center py-14 sm:min-h-[720px] sm:py-16 lg:min-h-[calc(100vh-120px)] lg:py-20">
          <div className="max-w-3xl">
            <Eyebrow light>Junior tech program</Eyebrow>
            <h1 className="mt-5 max-w-[13ch] text-balance text-4xl font-black leading-[1.02] tracking-normal sm:text-5xl lg:text-7xl">
              Future-ready coding for Indian school learners.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-200 sm:text-lg">
              A structured junior pathway where kids learn coding, AI, web
              apps, data, and robotics through guided projects they can proudly
              explain.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-callback?service=Junior%20Tech%20Program"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c9a227] to-[#f2c94c] px-6 py-3 text-sm font-black text-[#171100] shadow-lg transition hover:scale-[1.02]"
              >
                Request Program Guidance
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#age-paths"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:border-white/40 hover:bg-white/15"
              >
                View Age Paths
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 border-t border-white/15 pt-6">
              {[
                ["8-17", "Age range"],
                ["3", "Learning stages"],
                ["6+", "Demo projects"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-white/10 pr-3 last:border-r-0 last:pl-3 sm:px-5 first:pl-0"
                >
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white px-4 py-14 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <Eyebrow>Intro</Eyebrow>
              <h2 className="mt-4 max-w-xl text-balance text-3xl font-black leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                A tech foundation that feels practical, safe, and exciting.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#5b667a] dark:text-slate-300 sm:text-base">
                This is designed for parents and schools who want meaningful
                technology learning, not random tutorials. Students move from
                curiosity to structured thinking, then into projects that prove
                understanding.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {introSignals.map(({ title, text, icon: Icon }) => (
                <article
                  key={title}
                  className="min-h-[230px] rounded-[1.25rem] border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#123f87] dark:bg-slate-800 dark:text-[#f2c94c]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-gray-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5b667a] dark:text-slate-300">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#071126] px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-10">
        <Container>
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow light>Our approach</Eyebrow>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                We teach children to think, build, and communicate.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-8 text-slate-300 sm:text-base lg:text-right">
              The method is intentionally different from passive video
              learning. Every session has a thinking goal, a build goal, and a
              short explanation goal.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {approachSteps.map((item, index) => (
              <article
                key={item.label}
                className="border-t border-white/15 pt-5"
              >
                <p className="text-4xl font-black text-[#f2c94c]">
                  0{index + 1}
                </p>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="curriculum" className="bg-[#f8fbff] px-4 py-14 dark:bg-slate-900 sm:px-6 sm:py-16 lg:px-10">
        <Container>
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow>Learning categories</Eyebrow>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-black leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                A balanced mix of coding, AI, creativity, and systems.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-8 text-[#5b667a] dark:text-slate-300 sm:text-base lg:text-right">
              Students do not need to choose one narrow track too early. The
              program gives them a foundation across the skills that modern
              technology actually uses.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {categories.map(({ title, tag, text, icon: Icon, accent }, index) => (
              <article
                key={title}
                className="relative min-h-[286px] overflow-hidden rounded-[1.35rem] border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950"
              >
                <p className="text-5xl font-black leading-none text-gray-100 dark:text-slate-800">
                  0{index + 1}
                </p>
                <div
                  className={`mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 ${accent}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-[11px] font-black uppercase tracking-[0.16em] text-[#9b7a10] dark:text-[#f2c94c]">
                  {tag}
                </p>
                <h3 className="mt-2 text-xl font-black text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5b667a] dark:text-slate-300">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="age-paths" className="bg-white px-4 py-14 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-10">
        <Container>
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <Eyebrow>Age-based learning showcase</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              The learning style changes as the child grows.
            </h2>
            <p className="mt-4 text-sm leading-8 text-[#5b667a] dark:text-slate-300 sm:text-base">
              Younger students need discovery and confidence. Older students
              need stronger project ownership and communication practice.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {ageTracks.map(({ title, age, image, alt, headline, focus, result, icon: Icon }, index) => (
              <article
                key={title}
                className={`overflow-hidden rounded-[1.5rem] border bg-white shadow-[0_24px_70px_-48px_rgba(15,23,42,0.6)] dark:bg-slate-950 ${
                  index === 1
                    ? "border-[#c9a227] dark:border-[#f2c94c]/50"
                    : "border-gray-200 dark:border-slate-800"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071126]/80 to-transparent" />
                  <p className="absolute bottom-4 left-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#7a5d00]">
                    {age}
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9b7a10] dark:text-[#f2c94c]">
                        {title}
                      </p>
                      <h3 className="mt-2 text-2xl font-black leading-tight text-gray-900 dark:text-white">
                        {headline}
                      </h3>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#123f87] dark:bg-slate-800 dark:text-[#f2c94c]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-bold text-[#5b667a] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 border-t border-gray-200 pt-4 text-sm font-semibold leading-7 text-gray-900 dark:border-slate-800 dark:text-slate-100">
                    {result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f8fbff] px-4 py-14 dark:bg-slate-900 sm:px-6 sm:py-16 lg:px-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <Eyebrow>Project showcase</Eyebrow>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-black leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                Projects are selected so kids can explain what they made.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#5b667a] dark:text-slate-300 sm:text-base">
                The showcase is not about memorizing code. It is about helping
                students connect an idea, a build process, a demo, and a clear
                explanation.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {showcaseProjects.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-gray-200 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-950/60"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <p className="text-sm font-bold leading-6 text-gray-900 dark:text-slate-100">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white px-4 py-14 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-10">
        <Container>
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow>Expected outcomes</Eyebrow>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-black leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                Outcomes should be visible to the student, parent, and school.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-8 text-[#5b667a] dark:text-slate-300 sm:text-base lg:text-right">
              Each learner leaves with stronger confidence, clearer thinking,
              and a practical record of what they can build and explain.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {outcomes.map(({ title, items, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.35rem] border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#123f87] dark:bg-slate-800 dark:text-[#f2c94c]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-black text-gray-900 dark:text-white">
                  {title}
                </h3>
                <div className="mt-5 grid gap-3">
                  {items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#c9a227]" />
                      <p className="text-sm font-bold leading-6 text-[#5b667a] dark:text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f8fbff] px-4 py-14 dark:bg-slate-900 sm:px-6 sm:py-16 lg:px-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="rounded-[1.5rem] bg-[#0f2242] p-6 text-white shadow-xl dark:bg-slate-950 sm:p-8">
              <MessageSquareText className="h-10 w-10 text-[#f2c94c]" />
              <h2 className="mt-5 text-3xl font-black leading-tight">
                Start with a fit conversation.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Share the learner age, current coding level, schedule, and goal.
                We will recommend the right track and batch format.
              </p>
              <Link
                href="/request-callback?service=Junior%20Tech%20Program"
                className="mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#f2c94c] px-6 py-3 text-sm font-black text-[#171100] transition hover:bg-[#ffe082]"
              >
                Request Callback
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <div className="border-b border-gray-300 pb-5 dark:border-slate-700">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9b7a10] dark:text-[#f2c94c]">
                  FAQ
                </p>
                <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-gray-900 dark:text-white sm:text-4xl">
                  Questions before enrolling.
                </h2>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-slate-700">
                {faqs.map((item) => (
                  <details key={item.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-base font-black text-gray-900 dark:text-white">
                      <span>{item.q}</span>
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff8dc] text-sm font-black text-[#9b7a10] transition group-open:rotate-45 dark:bg-[#f2c94c]/10 dark:text-[#f2c94c]">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5b667a] dark:text-slate-300">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
