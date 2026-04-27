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
  GraduationCap,
  LineChart,
  Users,
} from "lucide-react"

const HERO_SLIDE_DURATION = 8200

const heroSlides = [
  {
    id: "launchpad",
    eyebrow: "Career Launchpad",
    navLabel: "Career Launch",
    navDescription: "Mentor-led roadmap and role-ready confidence",
    title: "AI training built for real career momentum",
    titleLines: ["AI training built for", "real career momentum"],
    titleMobileLines: ["AI training", "built for real", "career momentum"],
    description:
      "Structured mentoring and practical builds that turn learning into confident progress.",
    primaryCta: {
      href: "/request-callback",
      label: "Get Started",
    },
    secondaryCta: {
      href: "/training/professional-training",
      label: "Explore Programs",
    },
    metrics: [
      { icon: GraduationCap, value: "20+", label: "career tracks" },
      { icon: LineChart, value: "Weekly", label: "mentor reviews" },
      { icon: Briefcase, value: "Live", label: "portfolio delivery" },
    ],
    storyline: [
      {
        number: "01",
        title: "Roadmap",
        detail: "Clear stages from fundamentals to confident delivery.",
      },
      {
        number: "02",
        title: "Feedback",
        detail: "Frequent checkpoints that keep progress visible.",
      },
      {
        number: "03",
        title: "Launch",
        detail: "Portfolio-ready work shaped for real hiring conversations.",
      },
    ],
    image: "/images/hero/hero-learning-v1.png",
    imagePosition: "center right",
    mobileImagePosition: "76% center",
    theme: {
      overlay: "from-[#05111f]/95 via-[#071423]/64 to-[#071423]/24",
      mobileOverlay: "from-[#05111f]/92 via-[#071423]/46 to-[#071423]/14",
      accent: "from-sky-300 via-cyan-300 to-amber-200",
      dot: "bg-sky-300",
      badge: "border-white/16 bg-white/8 text-white/92",
    },
  },
  {
    id: "projects",
    eyebrow: "Project-First Experience",
    navLabel: "Real Projects",
    navDescription: "Hands-on delivery practice that feels like the job",
    title: "Learn through real project delivery",
    titleLines: ["Learn through real", "project delivery"],
    titleMobileLines: ["Learn through", "real project", "delivery"],
    description:
      "Scoped builds, review cycles, and showcase-ready work with a rhythm closer to real teams.",
    primaryCta: {
      href: "/work-experience-program",
      label: "See Work Experience",
    },
    secondaryCta: {
      href: "/request-callback",
      label: "Talk to an Expert",
    },
    metrics: [
      { icon: ClipboardCheck, value: "Sprint", label: "delivery rhythm" },
      { icon: Users, value: "Team-like", label: "workflow" },
      { icon: Briefcase, value: "Ready", label: "to showcase work" },
    ],
    storyline: [
      {
        number: "01",
        title: "Brief",
        detail: "Start with scope, constraints, and expected outcomes.",
      },
      {
        number: "02",
        title: "Build",
        detail: "Practice implementation cycles instead of passive tutorials.",
      },
      {
        number: "03",
        title: "Review",
        detail: "Improve quality through iteration, QA, and presentation.",
      },
    ],
    image: "/images/hero/hero-projects-v2.png",
    imagePosition: "center right",
    mobileImagePosition: "92% center",
    theme: {
      overlay: "from-[#07110e]/95 via-[#0a1716]/64 to-[#0a1716]/24",
      mobileOverlay: "from-[#07110e]/88 via-[#0a1716]/36 to-[#0a1716]/08",
      accent: "from-emerald-300 via-teal-300 to-amber-200",
      dot: "bg-emerald-300",
      badge: "border-white/16 bg-white/8 text-white/92",
    },
  },
  {
    id: "batches",
    eyebrow: "Live Batch Learning",
    navLabel: "Online Batches",
    navDescription: "Mentor-led classes with weekly structure and practice",
    title: "Live batches built for steady skill growth",
    titleLines: ["Live batches built for", "steady skill growth"],
    titleMobileLines: ["Live batches", "built for steady", "skill growth"],
    description:
      "Follow a consistent learning rhythm with live classes, guided practice, and support that works for freshers and working professionals.",
    primaryCta: {
      href: "/training/online-training",
      label: "View Online Training",
    },
    secondaryCta: {
      href: "/training/new-batches",
      label: "See New Batches",
    },
    metrics: [
      { icon: GraduationCap, value: "Live", label: "mentor classes" },
      { icon: LineChart, value: "Weekly", label: "learning rhythm" },
      { icon: Users, value: "Flexible", label: "batch timings" },
    ],
    storyline: [
      {
        number: "01",
        title: "Schedule",
        detail: "Choose a batch structure that fits freshers and working learners.",
      },
      {
        number: "02",
        title: "Learn",
        detail: "Join live sessions that keep explanations, examples, and Q&A connected.",
      },
      {
        number: "03",
        title: "Practice",
        detail: "Carry momentum between classes with guided assignments and feedback.",
      },
    ],
    image: "/images/hero/hero-batches-v1.png",
    imagePosition: "center right",
    mobileImagePosition: "78% center",
    theme: {
      overlay: "from-[#05111f]/94 via-[#081729]/60 to-[#081729]/22",
      mobileOverlay: "from-[#05111f]/90 via-[#081729]/42 to-[#081729]/12",
      accent: "from-cyan-300 via-sky-300 to-amber-200",
      dot: "bg-cyan-300",
      badge: "border-white/16 bg-white/8 text-white/92",
    },
  },
  {
    id: "pathways",
    eyebrow: "Role-Focused Programs",
    navLabel: "Training Paths",
    navDescription: "Beginner-to-advanced tracks across in-demand stacks",
    title: "Progress from basics to specialized tech tracks",
    titleLines: ["Progress from basics to", "specialized tech tracks"],
    titleMobileLines: ["Progress from", "basics to", "specialized tracks"],
    description:
      "Progress through structured paths in web, data, cloud, reporting, and AI without jumping between disconnected topics.",
    primaryCta: {
      href: "/training/beginner-training",
      label: "Start with Basics",
    },
    secondaryCta: {
      href: "/training/professional-training",
      label: "View Pro Tracks",
    },
    metrics: [
      { icon: GraduationCap, value: "Beginner", label: "friendly start" },
      { icon: LineChart, value: "Advanced", label: "specializations" },
      { icon: Briefcase, value: "Role-based", label: "outcomes" },
    ],
    storyline: [
      {
        number: "01",
        title: "Foundation",
        detail: "Build the core concepts before moving into deeper project work.",
      },
      {
        number: "02",
        title: "Specialize",
        detail: "Choose focused tracks in the stacks and tools companies actually use.",
      },
      {
        number: "03",
        title: "Deliver",
        detail: "Finish with stronger execution, clarity, and portfolio-ready direction.",
      },
    ],
    image: "/images/hero/hero-pathways-v1.png",
    imagePosition: "center right",
    mobileImagePosition: "84% center",
    theme: {
      overlay: "from-[#06111d]/94 via-[#091626]/58 to-[#091626]/18",
      mobileOverlay: "from-[#06111d]/89 via-[#091626]/36 to-[#091626]/08",
      accent: "from-sky-300 via-blue-300 to-amber-200",
      dot: "bg-sky-300",
      badge: "border-white/16 bg-white/8 text-white/92",
    },
  },
]

const slideMotionVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 46 : -46,
    y: 10,
  }),
  center: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -46 : 46,
    y: -10,
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
      className={`touch-target inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-black/30 text-white shadow-[0_18px_45px_rgba(2,6,23,0.3)] backdrop-blur-md transition hover:bg-black/40 ${className}`}
    >
      <Icon className="h-5 w-5" />
    </button>
  )
}

function SlideMetrics({ slide }) {
  return (
    <>
      <div className="mt-7 grid grid-cols-3 gap-2 sm:hidden">
        {slide.metrics.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="rounded-[18px] border border-white/12 bg-black/22 px-3 py-3 text-center backdrop-blur-md"
          >
            <span className="mx-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/8">
              <Icon className="h-4 w-4" />
            </span>
            <p className="mt-3 text-[1rem] font-black tracking-[-0.03em] text-white">{value}</p>
            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/56">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 hidden border-t border-white/12 pt-4 sm:block">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
        {slide.metrics.map(({ icon: Icon, value, label }) => (
            <div key={label} className="min-w-0 inline-flex items-center gap-3 text-white">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8">
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 leading-none">
                <p className="text-lg font-black tracking-[-0.03em]">{value}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/56">
                {label}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}

function SlideTitle({ slide }) {
  return (
    <h1 className="mt-6 max-w-none text-balance text-[2.45rem] font-extrabold leading-[0.94] tracking-[-0.055em] text-white sm:max-w-[13ch] sm:text-[3.65rem] lg:max-w-[20ch] lg:text-[4.55rem] xl:max-w-[20ch] xl:text-[4.85rem]">
      <span className="lg:hidden">
        {slide.titleMobileLines ? (
          slide.titleMobileLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))
        ) : (
          slide.title
        )}
      </span>
      <span className="hidden lg:block">
        {slide.titleLines ? (
          slide.titleLines.map((line) => (
            <span key={line} className="block whitespace-nowrap">
              {line}
            </span>
          ))
        ) : (
          slide.title
        )}
      </span>
    </h1>
  )
}

function SlideNarrative({ slide, direction, prefersReducedMotion }) {
  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        key={`${slide.id}-narrative`}
        custom={direction}
        variants={prefersReducedMotion ? undefined : slideMotionVariants}
        initial={prefersReducedMotion ? false : "enter"}
        animate="center"
        exit={prefersReducedMotion ? undefined : "exit"}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative hidden self-center lg:block xl:-ml-6"
      >
        <div className="pointer-events-none absolute -right-4 -top-8 text-[7rem] font-black leading-none tracking-[-0.08em] text-white/[0.06]">
          {String(heroSlides.findIndex((item) => item.id === slide.id) + 1).padStart(2, "0")}
        </div>

        <div className="relative max-w-[430px] rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(6,14,24,0.78),rgba(6,14,24,0.58))] p-8 shadow-[0_28px_70px_rgba(2,6,23,0.28)] backdrop-blur-md">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/62">
            Execution pattern
          </p>

          <div className="relative mt-7 pl-9">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-white/16 via-white/22 to-white/10" />

            <div className="space-y-7">
              {slide.storyline.map((item) => (
                <div key={item.number} className="relative">
                  <span className={`absolute -left-9 top-1.5 h-4 w-4 rounded-full border border-white/20 ${slide.theme.dot} shadow-[0_0_18px_rgba(255,255,255,0.12)]`} />

                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-black leading-none tracking-[-0.04em] text-white/42">
                      {item.number}
                    </span>
                    <p className="text-[15px] font-semibold uppercase tracking-[0.16em] text-white/92">
                      {item.title}
                    </p>
                  </div>

                  <p className="mt-2 text-[15px] leading-7 text-white/74">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

function SlideTabs({ activeIndex, goTo, prefersReducedMotion }) {
  return (
    <>
      <div className="rounded-[22px] border border-white/12 bg-black/20 p-3 backdrop-blur-md lg:hidden">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/48">
            Browse slides
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/48">
            {String(activeIndex + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {heroSlides.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show ${item.navLabel} slide`}
                aria-pressed={isActive}
                className={`rounded-[18px] border p-3 text-left transition ${
                  isActive
                    ? "border-white/18 bg-white/10 text-white"
                    : "border-white/8 bg-black/10 text-white/58"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.theme.dot}`} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-lg font-semibold tracking-[-0.02em]">{item.navLabel}</p>
                <div className="mt-3 h-[2px] overflow-hidden rounded-full bg-white/10">
                  {isActive ? (
                    <span
                      key={`${item.id}-mobile-${activeIndex}`}
                      className={`hero-slider-progress block h-full rounded-full bg-gradient-to-r ${item.theme.accent}`}
                      style={{
                        animationDuration: `${HERO_SLIDE_DURATION}ms`,
                        animationPlayState: prefersReducedMotion ? "paused" : "running",
                      }}
                    />
                  ) : (
                    <span className="block h-full w-full rounded-full bg-transparent" />
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="hidden border-t border-white/12 pt-5 lg:block">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-6">
          {heroSlides.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show ${item.navLabel} slide`}
                aria-pressed={isActive}
                className={`group pb-1 text-left transition ${isActive ? "text-white" : "text-white/48 hover:text-white/74"}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.theme.dot}`} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-current/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 text-base font-semibold tracking-[-0.02em] sm:text-lg">{item.navLabel}</p>
                <p className={`mt-1 hidden text-sm leading-6 lg:block ${isActive ? "text-white/72" : "text-white/44"}`}>
                  {item.navDescription}
                </p>

                <div className="mt-4 h-[2px] overflow-hidden rounded-full bg-white/10">
                  {isActive ? (
                    <span
                      key={`${item.id}-${activeIndex}`}
                      className={`hero-slider-progress block h-full rounded-full bg-gradient-to-r ${item.theme.accent}`}
                      style={{
                        animationDuration: `${HERO_SLIDE_DURATION}ms`,
                        animationPlayState: prefersReducedMotion ? "paused" : "running",
                      }}
                    />
                  ) : (
                    <span className="block h-full w-full rounded-full bg-transparent" />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        <div className="hidden text-left xl:block xl:text-right">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/42">
            Featured slide
          </p>
          <p className="mt-2 text-2xl font-black tracking-[-0.05em] text-white">
            {String(activeIndex + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
          </p>
        </div>
      </div>
      </div>
    </>
  )
}

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isMobileLayout, setIsMobileLayout] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const touchStartX = useRef(null)

  const activeSlide = heroSlides[activeIndex]

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    const timeoutId = window.setTimeout(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, HERO_SLIDE_DURATION)

    return () => window.clearTimeout(timeoutId)
  }, [activeIndex, prefersReducedMotion])

  useEffect(() => {
    if (typeof window === "undefined") return undefined

    const mediaQuery = window.matchMedia("(max-width: 1023px)")
    const syncLayout = () => setIsMobileLayout(mediaQuery.matches)

    syncLayout()

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncLayout)
      return () => mediaQuery.removeEventListener("change", syncLayout)
    }

    mediaQuery.addListener(syncLayout)
    return () => mediaQuery.removeListener(syncLayout)
  }, [])

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

  return (
    <section
      className="relative isolate overflow-hidden bg-[#050d18] text-white"
      aria-label="Homepage hero slider"
      aria-roledescription="carousel"
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeSlide.id}
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${activeSlide.image})`,
            backgroundPosition: isMobileLayout
              ? activeSlide.mobileImagePosition ?? activeSlide.imagePosition
              : activeSlide.imagePosition,
          }}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.02 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>

      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          isMobileLayout && activeSlide.theme.mobileOverlay
            ? activeSlide.theme.mobileOverlay
            : activeSlide.theme.overlay
        } transition-all duration-700`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,10,20,0.14),rgba(4,10,20,0.66))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,rgba(40,176,255,0.12),transparent_18%),radial-gradient(circle_at_76%_52%,rgba(255,194,120,0.1),transparent_20%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] bg-gradient-to-l from-[#050d18]/66 via-[#050d18]/26 to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-y-0 left-[42%] hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden items-center justify-between px-3 sm:px-4 lg:flex lg:px-5">
        <ArrowButton direction="prev" onClick={prev} className="pointer-events-auto" />
        <ArrowButton direction="next" onClick={next} className="pointer-events-auto" />
      </div>

      <div className="relative z-10 w-full px-5 py-14 pb-28 sm:px-8 sm:py-20 sm:pb-24 lg:min-h-[600px] lg:px-16 lg:py-14 xl:px-20">
        <div className="grid items-center gap-8 lg:min-h-[450px] lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,460px)] lg:gap-10 xl:gap-12">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={`${activeSlide.id}-content`}
              custom={direction}
              variants={prefersReducedMotion ? undefined : slideMotionVariants}
              initial={prefersReducedMotion ? false : "enter"}
              animate="center"
              exit={prefersReducedMotion ? undefined : "exit"}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              aria-live="polite"
              className="max-w-[860px]"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${activeSlide.theme.badge}`}
                >
                  <span className={`h-2 w-2 rounded-full ${activeSlide.theme.dot}`} />
                  {activeSlide.eyebrow}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                </span>
              </div>

              <SlideTitle slide={activeSlide} />

              <p className="mt-5 max-w-[38rem] text-pretty text-base leading-8 text-white/74 sm:text-lg">
                {activeSlide.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={activeSlide.primaryCta.href}
                  className="touch-target inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto"
                >
                  {activeSlide.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={activeSlide.secondaryCta.href}
                  className="touch-target inline-flex w-full items-center justify-center rounded-full border border-white/16 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/14 sm:w-auto"
                >
                  {activeSlide.secondaryCta.label}
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-full border border-white/12 bg-black/16 px-3 py-2 backdrop-blur-md lg:hidden">
                <ArrowButton direction="prev" onClick={prev} className="h-10 w-10" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/52">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                </span>
                <ArrowButton direction="next" onClick={next} className="h-10 w-10" />
              </div>

              <SlideMetrics slide={activeSlide} />
            </motion.div>
          </AnimatePresence>

          <SlideNarrative
            slide={activeSlide}
            direction={direction}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>

        <div className="mt-6 lg:mt-4">
          <SlideTabs
            activeIndex={activeIndex}
            goTo={goTo}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>
      </div>
    </section>
  )
}
