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

const HERO_SLIDE_DURATION = 9500

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
      shell:
        "from-sky-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/80",
      badge:
        "border-sky-200/80 bg-sky-500/10 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-100",
      dot: "bg-sky-500 dark:bg-sky-300",
      primaryGlow: "bg-sky-500/16 dark:bg-sky-400/18",
      secondaryGlow: "bg-amber-400/14 dark:bg-amber-300/12",
      accentBar:
        "from-sky-500 via-blue-500 to-amber-400 dark:from-sky-300 dark:via-blue-400 dark:to-amber-300",
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
      chips: [
        "Git workflow",
        "Debugging",
        "Documentation",
        "Code review",
        "Testing mindset",
        "Demo readiness",
      ],
      note: {
        label: "What changes",
        value: "Less tutorial mode",
        caption: "More ownership, iteration, and real decision-making.",
      },
    },
    theme: {
      shell:
        "from-emerald-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/75",
      badge:
        "border-emerald-200/80 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-100",
      dot: "bg-emerald-500 dark:bg-emerald-300",
      primaryGlow: "bg-emerald-500/16 dark:bg-emerald-400/18",
      secondaryGlow: "bg-amber-400/14 dark:bg-amber-300/12",
      accentBar:
        "from-emerald-500 via-teal-500 to-amber-400 dark:from-emerald-300 dark:via-teal-300 dark:to-amber-300",
      outline: "border-emerald-200/70 dark:border-emerald-400/20",
      soft: "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-100",
    },
  },
]

const slideMotionVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 42 : -42,
    y: 14,
  }),
  center: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -42 : 42,
    y: -14,
  }),
}

function ArrowButton({ direction, onClick, className = "" }) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight
  const label = direction === "prev" ? "Show previous slide" : "Show next slide"

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`touch-target inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/85 text-gray-900 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur transition hover:-translate-y-[1px] hover:bg-white dark:border-white/10 dark:bg-slate-950/75 dark:text-slate-100 dark:shadow-[0_18px_45px_rgba(2,6,23,0.42)] dark:hover:bg-slate-900 ${className}`}
    >
      <Icon className="h-5 w-5" />
    </button>
  )
}

function Highlights({ slide, direction, prefersReducedMotion }) {
  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        key={`${slide.id}-highlights`}
        custom={direction}
        variants={prefersReducedMotion ? undefined : slideMotionVariants}
        initial={prefersReducedMotion ? false : "enter"}
        animate="center"
        exit={prefersReducedMotion ? undefined : "exit"}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="hidden gap-4 border-t border-black/10 pt-6 dark:border-white/10 md:grid md:grid-cols-3"
      >
        {slide.highlights.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3">
            <div className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${slide.theme.soft}`}>
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-950 dark:text-white">{title}</p>
              <p className="mt-1 text-[13px] leading-6 text-gray-600 dark:text-slate-300">{text}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

function SlideRail({ slide, activeIndex, goTo, isPaused, prefersReducedMotion }) {
  return (
    <div className="border-t border-black/10 pt-6 dark:border-white/10">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400 dark:text-slate-500">
          Browse Slides
        </p>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 dark:text-slate-500">
          {String(activeIndex + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 sm:hidden">
        {heroSlides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(index)}
            className={`rounded-full border px-3 py-2 text-left text-xs font-semibold uppercase tracking-[0.16em] transition ${
              index === activeIndex
                ? `${slide.theme.outline} ${slide.theme.soft}`
                : "border-black/10 bg-white/70 text-gray-600 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300"
            }`}
            aria-label={`Show ${item.navLabel} slide`}
            aria-pressed={index === activeIndex}
          >
            {String(index + 1).padStart(2, "0")} {item.navLabel}
          </button>
        ))}
      </div>

      <div className="hidden space-y-3 sm:block">
        {heroSlides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(index)}
            className="group block w-full text-left"
            aria-label={`Show ${item.navLabel} slide`}
            aria-pressed={index === activeIndex}
          >
            <div className="flex items-start gap-3">
              <span
                className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] ${
                  index === activeIndex
                    ? slide.theme.soft
                    : "bg-black/5 text-gray-500 dark:bg-white/10 dark:text-slate-400"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1 border-b border-black/10 pb-3 dark:border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-gray-950 transition group-hover:text-black dark:text-white dark:group-hover:text-white">
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

                <div className="mt-2 h-1 overflow-hidden rounded-full bg-black/8 dark:bg-white/10">
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
  )
}

function SlidePanel({ slide, direction, prefersReducedMotion, activeIndex, goTo, isPaused }) {
  return (
    <div className="flex h-full min-w-0 flex-col justify-between gap-8 lg:pl-8 lg:border-l lg:border-black/10 dark:lg:border-white/10">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={`${slide.id}-panel`}
          custom={direction}
          variants={prefersReducedMotion ? undefined : slideMotionVariants}
          initial={prefersReducedMotion ? false : "enter"}
          animate="center"
          exit={prefersReducedMotion ? undefined : "exit"}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div>
            <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${slide.theme.badge}`}>
              <span className={`h-2 w-2 rounded-full ${slide.theme.dot}`} />
              {slide.panel.label}
            </span>

            <h2 className="mt-4 max-w-[16ch] text-balance text-[1.9rem] font-black leading-[1.02] tracking-[-0.04em] text-gray-950 dark:text-white sm:text-[2.2rem]">
              {slide.panel.heading}
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-sm leading-7 text-gray-600 dark:text-slate-300 sm:text-[15px]">
              {slide.panel.summary}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {slide.panel.stats.map((stat) => (
              <div key={stat.label} className="border-t border-black/10 pt-3 dark:border-white/10">
                <p className="text-xl font-black leading-none text-gray-950 dark:text-white sm:text-2xl">{stat.value}</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-black/10 pt-5 dark:border-white/10">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${slide.theme.soft}`}>
              {slide.panel.note.label}
            </span>
            <p className="mt-3 text-lg font-black text-gray-950 dark:text-white sm:text-xl">{slide.panel.note.value}</p>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-slate-300">{slide.panel.note.caption}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <SlideRail
        slide={slide}
        activeIndex={activeIndex}
        goTo={goTo}
        isPaused={isPaused}
        prefersReducedMotion={prefersReducedMotion}
      />
    </div>
  )
}

function SlideTitle({ slide }) {
  const desktopTitleClassName =
    slide.titleDesktopClassName ?? "lg:text-[3.85rem] xl:max-w-[12ch] xl:text-[4.2rem]"

  if (!slide.titleLines) {
    return (
      <h1
        className={`mt-4 max-w-4xl text-balance text-[2.65rem] font-black leading-[0.95] tracking-[-0.05em] text-gray-950 dark:text-white sm:text-[3.4rem] ${desktopTitleClassName}`}
      >
        {slide.title}
      </h1>
    )
  }

  return (
    <h1
      className={`mt-4 max-w-4xl text-balance text-[2.65rem] font-black leading-[0.95] tracking-[-0.05em] text-gray-950 dark:text-white sm:text-[3.4rem] ${desktopTitleClassName}`}
    >
      <span className="lg:hidden">{slide.title}</span>
      <span className="hidden lg:block">
        {slide.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    </h1>
  )
}

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const touchStartX = useRef(null)

  const activeSlide = heroSlides[activeIndex]

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return undefined

    const timeoutId = window.setTimeout(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, HERO_SLIDE_DURATION)

    return () => window.clearTimeout(timeoutId)
  }, [activeIndex, isPaused, prefersReducedMotion])

  const goTo = (index) => {
    const nextIndex = (index + heroSlides.length) % heroSlides.length
    if (nextIndex === activeIndex) return

    const forwardDistance = (nextIndex - activeIndex + heroSlides.length) % heroSlides.length
    const backwardDistance = (activeIndex - nextIndex + heroSlides.length) % heroSlides.length

    setDirection(forwardDistance <= backwardDistance ? 1 : -1)
    setActiveIndex(nextIndex)
  }

  const next = () => {
    setDirection(1)
    setActiveIndex((current) => (current + 1) % heroSlides.length)
  }

  const prev = () => {
    setDirection(-1)
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
    <section
      className="relative overflow-hidden bg-white transition-colors duration-500 dark:bg-slate-950"
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:110px_110px] opacity-70 dark:bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/70 to-transparent dark:from-slate-950/60" />

      <motion.div
        aria-hidden="true"
        className={`absolute left-[-8%] top-[-14%] h-72 w-72 rounded-full blur-3xl ${activeSlide.theme.primaryGlow}`}
        animate={prefersReducedMotion ? undefined : { y: [0, 16, 0], x: [0, 10, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
        }
      />
      <motion.div
        aria-hidden="true"
        className={`absolute bottom-[-18%] right-[-6%] h-80 w-80 rounded-full blur-3xl ${activeSlide.theme.secondaryGlow}`}
        animate={prefersReducedMotion ? undefined : { y: [0, -14, 0], x: [0, -8, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 11.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
        }
      />

      <div className="relative mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14 xl:py-16">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 justify-between lg:flex">
          <ArrowButton direction="prev" onClick={prev} className="pointer-events-auto -translate-x-1/2" />
          <ArrowButton direction="next" onClick={next} className="pointer-events-auto translate-x-1/2" />
        </div>

        <div className="grid gap-10 lg:min-h-[600px] lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.85fr)] lg:items-start xl:gap-14">
          <div className="min-w-0 lg:pr-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${activeSlide.theme.badge}`}>
                <span className={`h-2 w-2 rounded-full ${activeSlide.theme.dot}`} />
                {activeSlide.eyebrow}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400 dark:text-slate-500">
                {String(activeIndex + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={activeSlide.id}
                custom={direction}
                variants={prefersReducedMotion ? undefined : slideMotionVariants}
                initial={prefersReducedMotion ? false : "enter"}
                animate="center"
                exit={prefersReducedMotion ? undefined : "exit"}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                aria-live="polite"
                className="lg:min-h-[420px]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 dark:text-slate-500">
                  {activeSlide.navDescription}
                </p>

                <SlideTitle slide={activeSlide} />

                <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-gray-600 dark:text-slate-300 sm:text-lg">
                  {activeSlide.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={activeSlide.primaryCta.href}
                    className="touch-target inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-gray-900 dark:bg-[#c9a227] dark:text-[#111827] dark:hover:bg-[#e0b93c]"
                  >
                    {activeSlide.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href={activeSlide.secondaryCta.href}
                    className="touch-target inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:border-white/20 dark:hover:bg-slate-900"
                  >
                    {activeSlide.secondaryCta.label}
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                  {activeSlide.metrics.map((metric) => (
                    <div key={metric.label} className="inline-flex items-center gap-2 text-gray-600 dark:text-slate-300">
                      <span className={`h-2.5 w-2.5 rounded-full ${activeSlide.theme.dot}`} />
                      <span className="text-lg font-black text-gray-950 dark:text-white">{metric.value}</span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-slate-400">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between gap-4 lg:hidden">
              <div className="flex items-center gap-2">
                <ArrowButton direction="prev" onClick={prev} />
                <ArrowButton direction="next" onClick={next} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 dark:text-slate-500">
                Swipe to browse
              </p>
            </div>

            <div className="mt-6">
              <Highlights
                slide={activeSlide}
                direction={direction}
                prefersReducedMotion={prefersReducedMotion}
              />
            </div>
          </div>

          <div className="min-w-0">
            <SlidePanel
              slide={activeSlide}
              direction={direction}
              prefersReducedMotion={prefersReducedMotion}
              activeIndex={activeIndex}
              goTo={goTo}
              isPaused={isPaused}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
