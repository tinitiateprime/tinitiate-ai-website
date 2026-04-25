"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Code2,
  FileText,
  GraduationCap,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

const HERO_SLIDE_DURATION = 7200

const heroSlides = [
  {
    id: "launchpad",
    eyebrow: "Career Launchpad",
    navLabel: "Career Launch",
    navDescription: "Mentor-led roadmap with measured progress",
    title: "Empowering Careers with AI + Real-Time Experience",
    description:
      "Job-ready learning pathways designed around real delivery habits, guided mentoring, and the kind of confidence employers notice in interviews.",
    primaryCta: {
      href: "/request-callback",
      label: "Get Started",
    },
    secondaryCta: {
      href: "/training/professional-training",
      label: "Explore Programs",
    },
    highlights: [
      {
        icon: GraduationCap,
        title: "Structured learning",
        text: "Clear progression from fundamentals to advanced project execution.",
      },
      {
        icon: Users,
        title: "Mentor-led reviews",
        text: "Frequent feedback loops keep every learner moving with direction.",
      },
      {
        icon: Briefcase,
        title: "Role-focused outcomes",
        text: "Training stays aligned with the roles companies actively hire for.",
      },
    ],
    metrics: [
      { value: "20+", label: "career-focused tracks" },
      { value: "Weekly", label: "mentor checkpoints" },
      { value: "Live", label: "portfolio delivery" },
    ],
    panel: {
      label: "Launch Blueprint",
      heading: "A professional path, not just a playlist",
      summary:
        "Each phase blends concept clarity, guided implementation, and accountability so the learning journey feels deliberate from day one.",
      stats: [
        { value: "4", label: "core phases" },
        { value: "1:1", label: "guidance moments" },
        { value: "Role", label: "aligned outcomes" },
      ],
      steps: [
        {
          title: "Foundation sprint",
          detail: "Core concepts, tooling, and workflow discipline.",
        },
        {
          title: "Guided build cycles",
          detail: "Hands-on labs reinforced with mentor checkpoints.",
        },
        {
          title: "Project delivery",
          detail: "Portfolio work shaped around practical standards.",
        },
        {
          title: "Interview readiness",
          detail: "Review loops that sharpen confidence and clarity.",
        },
      ],
      chips: ["Python", "Java", "React", "SQL", "Cloud", "AI workflows"],
      note: {
        label: "Momentum",
        value: "From learning to launch",
        caption: "Built to reduce confusion and keep progress visible.",
      },
    },
    theme: {
      shell: "from-sky-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/80",
      badge: "border-sky-200/80 bg-sky-500/10 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-100",
      dot: "bg-sky-500 dark:bg-sky-300",
      primaryGlow: "bg-sky-500/16 dark:bg-sky-400/18",
      secondaryGlow: "bg-amber-400/14 dark:bg-amber-300/12",
      accentBar: "from-sky-500 via-blue-500 to-amber-400 dark:from-sky-300 dark:via-blue-400 dark:to-amber-300",
      outline: "border-sky-200/70 dark:border-sky-400/20",
      soft: "bg-sky-500/10 text-sky-700 dark:bg-sky-400/10 dark:text-sky-100",
    },
  },
  {
    id: "projects",
    eyebrow: "Project-First Experience",
    navLabel: "Real Projects",
    navDescription: "Delivery-style practice with tangible outputs",
    title: "Learn through work that feels much closer to the real job",
    description:
      "Instead of isolated exercises, learners move through scoped builds, implementation checkpoints, documentation, and review cycles that mirror team delivery.",
    primaryCta: {
      href: "/work-experience-program",
      label: "See Work Experience",
    },
    secondaryCta: {
      href: "/request-callback",
      label: "Talk to an Expert",
    },
    highlights: [
      {
        icon: Code2,
        title: "Build with purpose",
        text: "Assignments are framed like deliverables instead of one-off demos.",
      },
      {
        icon: ClipboardCheck,
        title: "Review-driven quality",
        text: "Feedback is part of the workflow, not something added at the end.",
      },
      {
        icon: FileText,
        title: "Communication habits",
        text: "Documentation, reporting, and handoff thinking are trained early.",
      },
    ],
    metrics: [
      { value: "Sprint", label: "based delivery rhythm" },
      { value: "Versioned", label: "iteration mindset" },
      { value: "Ready", label: "to showcase work" },
    ],
    panel: {
      label: "Execution Studio",
      heading: "Every project teaches delivery, not just syntax",
      summary:
        "We bring structure into the build process so learners practice the habits that help them contribute faster on actual teams.",
      stats: [
        { value: "Scoped", label: "deliverables" },
        { value: "Review", label: "feedback loops" },
        { value: "Team-like", label: "work rhythm" },
      ],
      steps: [
        {
          title: "Sprint brief",
          detail: "Start with objectives, constraints, and expected outcomes.",
        },
        {
          title: "Implementation window",
          detail: "Build in focused cycles instead of passive note-taking.",
        },
        {
          title: "QA and refinement",
          detail: "Strengthen reliability through testing and iteration.",
        },
        {
          title: "Showcase and handoff",
          detail: "Present the result with clarity and professional context.",
        },
      ],
      chips: ["Git workflow", "Debugging", "Documentation", "Code review", "Testing mindset", "Demo readiness"],
      note: {
        label: "What changes",
        value: "Less tutorial mode",
        caption: "More ownership, iteration, and real decision-making.",
      },
    },
    theme: {
      shell: "from-emerald-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/75",
      badge: "border-emerald-200/80 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-100",
      dot: "bg-emerald-500 dark:bg-emerald-300",
      primaryGlow: "bg-emerald-500/16 dark:bg-emerald-400/18",
      secondaryGlow: "bg-amber-400/14 dark:bg-amber-300/12",
      accentBar: "from-emerald-500 via-teal-500 to-amber-400 dark:from-emerald-300 dark:via-teal-300 dark:to-amber-300",
      outline: "border-emerald-200/70 dark:border-emerald-400/20",
      soft: "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-100",
    },
  },
  {
    id: "consulting",
    eyebrow: "Consulting DNA",
    navLabel: "Enterprise Mindset",
    navDescription: "Business-ready execution with technical depth",
    title: "Train with the standards behind enterprise consulting and delivery",
    description:
      "Our consulting background shapes how we teach architecture, business context, communication, and ownership so technical growth translates into real professional readiness.",
    primaryCta: {
      href: "/remote-consulting",
      label: "View Consulting Services",
    },
    secondaryCta: {
      href: "/request-callback",
      label: "Plan My Path",
    },
    highlights: [
      {
        icon: ShieldCheck,
        title: "Production thinking",
        text: "Learners absorb habits that support cleaner, steadier decision-making.",
      },
      {
        icon: LineChart,
        title: "Business context",
        text: "Technical choices are connected to outcomes, stakeholders, and scale.",
      },
      {
        icon: Sparkles,
        title: "AI and cloud fluency",
        text: "Modern tooling is introduced as part of real workflows, not hype.",
      },
    ],
    metrics: [
      { value: "15+", label: "years of applied insight" },
      { value: "Enterprise", label: "delivery perspective" },
      { value: "Scalable", label: "systems mindset" },
    ],
    panel: {
      label: "Operating Standard",
      heading: "Technical depth connected to business impact",
      summary:
        "The goal is bigger than course completion: we help learners understand why decisions matter, how systems scale, and how professionals communicate outcomes.",
      stats: [
        { value: "15+", label: "years insight" },
        { value: "Cloud", label: "platform exposure" },
        { value: "AI", label: "workflow fluency" },
      ],
      steps: [
        {
          title: "Problem framing",
          detail: "Understand the requirement before reaching for implementation.",
        },
        {
          title: "Solution mapping",
          detail: "Choose approaches that fit architecture, scope, and tradeoffs.",
        },
        {
          title: "Execution ownership",
          detail: "Deliver with consistency, clarity, and professional judgment.",
        },
        {
          title: "Optimization mindset",
          detail: "Improve quality, efficiency, and long-term maintainability.",
        },
      ],
      chips: ["Architecture thinking", "Stakeholder clarity", "Cloud patterns", "Data workflows", "Consulting discipline", "Decision quality"],
      note: {
        label: "Professional edge",
        value: "Maturity in motion",
        caption: "The habits that make technical skill more valuable at work.",
      },
    },
    theme: {
      shell: "from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/75",
      badge: "border-blue-200/80 bg-blue-500/10 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-100",
      dot: "bg-blue-500 dark:bg-blue-300",
      primaryGlow: "bg-blue-500/16 dark:bg-blue-400/18",
      secondaryGlow: "bg-indigo-500/14 dark:bg-indigo-300/12",
      accentBar: "from-blue-500 via-indigo-500 to-sky-400 dark:from-blue-300 dark:via-indigo-300 dark:to-sky-300",
      outline: "border-blue-200/70 dark:border-blue-400/20",
      soft: "bg-blue-500/10 text-blue-700 dark:bg-blue-400/10 dark:text-blue-100",
    },
  },
]

function HeroContent({ slide, activeIndex, isPaused, prefersReducedMotion, goTo, next, prev }) {
  return (
    <>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${slide.theme.badge}`}>
          <span className={`h-2 w-2 rounded-full ${slide.theme.dot}`} />
          {slide.eyebrow}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400 dark:text-slate-500">
          {String(activeIndex + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.id}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -18 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-live="polite"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 dark:text-slate-500">
            {slide.navDescription}
          </p>

          <h1 className="mt-4 max-w-3xl text-balance text-[2.55rem] font-black leading-[0.96] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-[3.7rem] lg:max-w-[1100px] lg:text-[3.85rem] xl:max-w-[1180px] xl:text-[4rem]">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-gray-600 dark:text-slate-300 sm:text-lg">
            {slide.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={slide.primaryCta.href}
              className="touch-target inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-gray-900 dark:bg-[#c9a227] dark:text-[#111827] dark:hover:bg-[#e0b93c]"
            >
              {slide.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={slide.secondaryCta.href}
              className="touch-target inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:border-white/20 dark:hover:bg-slate-900"
            >
              {slide.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            {slide.metrics.map((metric) => (
              <div
                key={metric.label}
                className="inline-flex items-center gap-2 text-gray-600 dark:text-slate-300"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${slide.theme.dot}`} />
                <span className="text-lg font-black text-gray-950 dark:text-white">
                  {metric.value}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-slate-400">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-7 border-t border-black/10 pt-5 dark:border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="touch-target inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-gray-900 transition hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:border-white/20"
              aria-label="Show previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="touch-target inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-gray-900 transition hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:border-white/20"
              aria-label="Show next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-slate-500">
            Swipe or use arrows
          </p>
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${slide.id}-focus`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -16 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400 dark:text-slate-500">
                {slide.panel.label}
              </p>
              <p className="mt-3 text-2xl font-black leading-tight text-gray-950 dark:text-white sm:text-[2rem]">
                {slide.panel.heading}
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-slate-300">
                {slide.panel.summary}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="space-y-3">
            {heroSlides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                className="group block w-full text-left"
                aria-label={`Show ${item.navLabel} slide`}
                aria-pressed={index === activeIndex}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] ${
                      index === activeIndex
                        ? slide.theme.soft
                        : "bg-black/5 text-gray-500 dark:bg-white/10 dark:text-slate-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1 border-b border-black/10 pb-3 dark:border-white/10">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-gray-900 transition group-hover:text-black dark:text-slate-100 dark:group-hover:text-white">
                        {item.navLabel}
                      </p>
                      {index === activeIndex ? (
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 dark:text-slate-500">
                          Active
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-slate-400">
                      {item.navDescription}
                    </p>
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-black/8 dark:bg-white/10">
                      {index === activeIndex ? (
                        <span
                          key={`${item.id}-${activeIndex}`}
                          className={`hero-slider-progress block h-full rounded-full bg-gradient-to-r ${slide.theme.accentBar}`}
                          style={{
                            animationDuration: `${HERO_SLIDE_DURATION}ms`,
                            animationPlayState: prefersReducedMotion || isPaused ? "paused" : "running",
                          }}
                        />
                      ) : (
                        <span className="block h-full w-full rounded-full bg-transparent" />
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const touchStartX = useRef(null)

  const activeSlide = heroSlides[activeIndex]

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return undefined

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, HERO_SLIDE_DURATION)

    return () => window.clearTimeout(timeoutId)
  }, [activeIndex, isPaused, prefersReducedMotion])

  const goTo = (index) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length)
  }

  const next = () => {
    setActiveIndex((current) => (current + 1) % heroSlides.length)
  }

  const prev = () => {
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return

    const delta = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current

    if (Math.abs(delta) > 56) {
      if (delta > 0) {
        prev()
      } else {
        next()
      }
    }

    touchStartX.current = null
  }

  const handleBlurCapture = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false)
    }
  }

  return (
    <section className="bg-white px-4 py-4 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <div className="mx-auto max-w-[1400px]">
        <section
          className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white/90 shadow-[0_32px_90px_rgba(15,23,42,0.09)] transition-colors duration-500 dark:border-white/8 dark:bg-slate-950/88 dark:shadow-[0_32px_90px_rgba(2,6,23,0.5)]"
          aria-label="Featured hero slider"
          aria-roledescription="carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={handleBlurCapture}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault()
              next()
            }

            if (event.key === "ArrowLeft") {
              event.preventDefault()
              prev()
            }
          }}
          tabIndex={0}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${activeSlide.theme.shell} transition-all duration-700`} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:120px_120px] opacity-60 dark:bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
          <motion.div
            aria-hidden="true"
            className={`absolute left-[-8%] top-[-14%] h-72 w-72 rounded-full blur-3xl ${activeSlide.theme.primaryGlow}`}
            animate={prefersReducedMotion ? undefined : { y: [0, 16, 0], x: [0, 10, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className={`absolute bottom-[-18%] right-[-6%] h-80 w-80 rounded-full blur-3xl ${activeSlide.theme.secondaryGlow}`}
            animate={prefersReducedMotion ? undefined : { y: [0, -14, 0], x: [0, -8, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 11.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <div className="relative z-10 px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-9 xl:px-12">
            <div className="flex min-w-0 flex-col">
              <HeroContent
                slide={activeSlide}
                activeIndex={activeIndex}
                isPaused={isPaused}
                prefersReducedMotion={prefersReducedMotion}
                goTo={goTo}
                next={next}
                prev={prev}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
