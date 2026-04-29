"use client"

/*
  IMPORTANT — Add Roboto to your layout.js or _document.js:
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
*/

import Image from "next/image"
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
    primaryCta: { href: "/request-callback", label: "Get Started" },
    secondaryCta: { href: "/training/professional-training", label: "Explore Programs" },
    metrics: [
      { icon: GraduationCap, value: "20+", label: "career tracks" },
      { icon: LineChart, value: "Weekly", label: "mentor reviews" },
      { icon: Briefcase, value: "Live", label: "portfolio delivery" },
    ],
    storyline: [
      { number: "01", title: "Roadmap", detail: "Clear stages from fundamentals to confident delivery." },
      { number: "02", title: "Feedback", detail: "Frequent checkpoints that keep progress visible." },
      { number: "03", title: "Launch", detail: "Portfolio-ready work shaped for real hiring conversations." },
    ],
    bridgePanel: {
      label: "Momentum Loop",
      title: "What stays active each week",
      items: ["Roadmap clarity", "Mentor feedback", "Portfolio progress"],
    },
    image: "/images/hero/hero-launchpad-photo.jpg",
    imagePosition: "center center",
    mobileImagePosition: "center center",
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
    primaryCta: { href: "/work-experience-program", label: "See Work Experience" },
    secondaryCta: { href: "/request-callback", label: "Talk to an Expert" },
    metrics: [
      { icon: ClipboardCheck, value: "Sprint", label: "delivery rhythm" },
      { icon: Users, value: "Team-like", label: "workflow" },
      { icon: Briefcase, value: "Ready", label: "to showcase work" },
    ],
    storyline: [
      { number: "01", title: "Brief", detail: "Start with scope, constraints, and expected outcomes." },
      { number: "02", title: "Build", detail: "Practice implementation cycles instead of passive tutorials." },
      { number: "03", title: "Review", detail: "Improve quality through iteration, QA, and presentation." },
    ],
    bridgePanel: {
      label: "Delivery Flow",
      title: "How project practice feels real",
      items: ["Scope defined", "Build in cycles", "Review and demo"],
    },
    image: "/images/hero/hero-projects-photo.jpg",
    imagePosition: "center center",
    mobileImagePosition: "center center",
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
    primaryCta: { href: "/training/online-training", label: "View Online Training" },
    secondaryCta: { href: "/training/new-batches", label: "See New Batches" },
    metrics: [
      { icon: GraduationCap, value: "Live", label: "mentor classes" },
      { icon: LineChart, value: "Weekly", label: "learning rhythm" },
      { icon: Users, value: "Flexible", label: "batch timings" },
    ],
    storyline: [
      { number: "01", title: "Schedule", detail: "Choose a batch structure that fits freshers and working learners." },
      { number: "02", title: "Learn", detail: "Join live sessions that keep explanations, examples, and Q&A connected." },
      { number: "03", title: "Practice", detail: "Carry momentum between classes with guided assignments and feedback." },
    ],
    bridgePanel: {
      label: "Batch Cadence",
      title: "The weekly learning rhythm",
      items: ["Live session", "Guided assignment", "Support follow-up"],
    },
    image: "/images/hero/hero-batches-photo.jpg",
    imagePosition: "center center",
    mobileImagePosition: "center center",
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
    primaryCta: { href: "/training/beginner-training", label: "Start with Basics" },
    secondaryCta: { href: "/training/professional-training", label: "View Pro Tracks" },
    metrics: [
      { icon: GraduationCap, value: "Beginner", label: "friendly start" },
      { icon: LineChart, value: "Advanced", label: "specializations" },
      { icon: Briefcase, value: "Role-based", label: "outcomes" },
    ],
    storyline: [
      { number: "01", title: "Foundation", detail: "Build the core concepts before moving into deeper project work." },
      { number: "02", title: "Specialize", detail: "Choose focused tracks in the stacks and tools companies actually use." },
      { number: "03", title: "Deliver", detail: "Finish with stronger execution, clarity, and portfolio-ready direction." },
    ],
    bridgePanel: {
      label: "Skill Progression",
      title: "How tracks stay connected",
      items: ["Start with basics", "Specialize by role", "Finish with proof"],
    },
    image: "/images/hero/hero-pathways-photo.jpg",
    imagePosition: "center center",
    mobileImagePosition: "center center",
    theme: {
      overlay: "from-[#06111d]/94 via-[#091626]/58 to-[#091626]/18",
      mobileOverlay: "from-[#06111d]/89 via-[#091626]/36 to-[#091626]/08",
      accent: "from-sky-300 via-blue-300 to-amber-200",
      dot: "bg-sky-300",
      badge: "border-white/16 bg-white/8 text-white/92",
    },
  },
]

const heroAtmospheres = {
  launchpad: {
    backgroundImage: [
      "radial-gradient(circle at 16% 18%, rgba(56, 189, 248, 0.22), transparent 24%)",
      "radial-gradient(circle at 72% 18%, rgba(45, 212, 191, 0.14), transparent 22%)",
      "radial-gradient(circle at 82% 74%, rgba(251, 191, 36, 0.1), transparent 18%)",
      "linear-gradient(135deg, #030b14 0%, #071524 48%, #040812 100%)",
    ].join(", "),
  },
  projects: {
    backgroundImage: [
      "radial-gradient(circle at 18% 20%, rgba(16, 185, 129, 0.18), transparent 24%)",
      "radial-gradient(circle at 72% 18%, rgba(45, 212, 191, 0.14), transparent 22%)",
      "radial-gradient(circle at 82% 72%, rgba(251, 191, 36, 0.1), transparent 18%)",
      "linear-gradient(135deg, #03120f 0%, #071917 50%, #040b0a 100%)",
    ].join(", "),
  },
  batches: {
    backgroundImage: [
      "radial-gradient(circle at 16% 18%, rgba(34, 211, 238, 0.18), transparent 24%)",
      "radial-gradient(circle at 74% 18%, rgba(59, 130, 246, 0.14), transparent 20%)",
      "radial-gradient(circle at 82% 74%, rgba(251, 191, 36, 0.1), transparent 18%)",
      "linear-gradient(135deg, #03101b 0%, #071829 48%, #040913 100%)",
    ].join(", "),
  },
  pathways: {
    backgroundImage: [
      "radial-gradient(circle at 16% 18%, rgba(56, 189, 248, 0.18), transparent 24%)",
      "radial-gradient(circle at 72% 18%, rgba(96, 165, 250, 0.14), transparent 20%)",
      "radial-gradient(circle at 82% 74%, rgba(251, 191, 36, 0.1), transparent 18%)",
      "linear-gradient(135deg, #04101a 0%, #081522 48%, #04080f 100%)",
    ].join(", "),
  },
}

function getHeroAtmosphereStyle(slide) {
  return heroAtmospheres[slide.id] ?? heroAtmospheres.launchpad
}

const slideMotionVariants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 46 : -46, y: 10 }),
  center: { opacity: 1, x: 0, y: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -46 : 46, y: -10 }),
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
      {/* Mobile */}
      <div className="mt-7 grid grid-cols-3 gap-2 sm:hidden">
        {slide.metrics.map(({ icon: Icon, value, label }) => (
          <div key={label} className="rounded-[18px] border border-white/12 bg-black/22 px-3 py-3 text-center backdrop-blur-md">
            <span className="mx-auto inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-white/8">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <p className="mt-2.5 text-[0.9rem] font-bold tracking-[-0.02em] text-white">{value}</p>
            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/56">{label}</p>
          </div>
        ))}
      </div>
      {/* Desktop */}
      <div className="mt-8 hidden border-t border-white/12 pt-4 sm:block">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {slide.metrics.map(({ icon: Icon, value, label }) => (
            <div key={label} className="min-w-0 inline-flex items-center gap-2.5 text-white">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div className="min-w-0 leading-none">
                <p className="text-base font-bold tracking-[-0.02em]">{value}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/56">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function SlidePanelShell({ children, className = "" }) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(7,18,30,0.88),rgba(4,10,18,0.78))] p-7 shadow-[0_28px_80px_rgba(2,6,23,0.34)] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  )
}

function SlideBridge({ slide, direction, prefersReducedMotion, className = "" }) {
  if (!slide.bridgePanel) return null
  const slideNumber = String(heroSlides.findIndex((item) => item.id === slide.id) + 1).padStart(2, "0")

  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        key={`${slide.id}-bridge`}
        custom={direction}
        variants={prefersReducedMotion ? undefined : slideMotionVariants}
        initial={prefersReducedMotion ? false : "enter"}
        animate="center"
        exit={prefersReducedMotion ? undefined : "exit"}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        <SlidePanelShell className="h-full p-0">
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={`${slide.navLabel} program visual`}
              fill
              sizes="(min-width: 1536px) 17vw, (min-width: 1280px) 21vw, 0vw"
              className="object-cover"
              style={{ objectPosition: slide.imagePosition ?? "center center" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,18,0.12),rgba(4,10,18,0.18)_34%,rgba(4,10,18,0.78)_70%,rgba(4,10,18,0.94)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.08),transparent_24%)]" />
          </div>
          <div className="relative flex h-full flex-col justify-between p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-[14rem]">
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${slide.theme.accent}`} />
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
                  {slide.bridgePanel.label}
                </p>
              </div>
              <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/18 bg-black/18 px-3 text-[10px] font-bold tracking-[0.22em] text-white/78 backdrop-blur-sm">
                {slideNumber}
              </span>
            </div>
            <div>
              <p className="max-w-[14ch] text-[1.72rem] font-bold leading-[1.12] tracking-[-0.03em] text-white">
                {slide.bridgePanel.title}
              </p>
              <div className="mt-5 grid gap-3">
                {slide.bridgePanel.items.map((item, index) => (
                  <div
                    key={item}
                    className="flex min-h-[58px] items-center gap-3 rounded-[18px] border border-white/12 bg-[#08121e]/70 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/[0.08] text-[10px] font-bold text-white/84">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[13.5px] font-medium leading-5 text-white/84">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SlidePanelShell>
      </motion.div>
    </AnimatePresence>
  )
}

/**
 * SlideTitle — uses ONLY inline styles so nothing from Tailwind's utility
 * classes (font-extrabold, text-5xl, etc.) can bleed in from the cascade.
 *
 * Target look: Roboto SemiBold (600), fluid ~26px → 42px, clean & readable.
 */
function SlideTitle({ slide, isMobile }) {
  const lines = isMobile
    ? (slide.titleMobileLines ?? [slide.title])
    : (slide.titleLines ?? [slide.title])

  return (
    <h1
      style={{
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 800,
        fontSize: "clamp(1.875rem, 4vw, 3rem)",
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
        color: "#ffffff",
        marginTop: "1.1rem",
        marginBottom: 0,
        padding: 0,
        textShadow: "0 1px 16px rgba(0,0,0,0.20)",
      }}
    >
      {lines.map((line) => (
        <span key={line} style={{ display: "block" }}>
          {line}
        </span>
      ))}
    </h1>
  )
}

function SlideNarrative({ slide, direction, prefersReducedMotion, className = "" }) {
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
        className={`relative ${className}`}
      >
        <div className="pointer-events-none absolute -right-4 -top-8 text-[6rem] font-black leading-none tracking-[-0.08em] text-white/[0.05]">
          {String(heroSlides.findIndex((item) => item.id === slide.id) + 1).padStart(2, "0")}
        </div>
        <SlidePanelShell className="flex h-full flex-col">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/62">Execution pattern</p>
          <div className="relative mt-6 flex flex-1 flex-col justify-center pl-8">
            <div className="absolute left-[6px] top-4 bottom-4 w-px bg-gradient-to-b from-white/16 via-white/22 to-white/10" />
            <div className="flex flex-col justify-center gap-7">
              {slide.storyline.map((item) => (
                <div key={item.number} className="relative">
                  <span className={`absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border border-white/20 ${slide.theme.dot} shadow-[0_0_14px_rgba(255,255,255,0.1)]`} />
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-xs font-bold leading-none tracking-[-0.02em] text-white/40">{item.number}</span>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/90">{item.title}</p>
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-6 text-white/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SlidePanelShell>
      </motion.div>
    </AnimatePresence>
  )
}

function SlideSupportPanels({ slide, direction, prefersReducedMotion }) {
  return (
    <>
      <div className="hidden h-[360px] items-stretch gap-5 xl:grid xl:grid-cols-2 2xl:h-[376px]">
        <SlideBridge
          slide={slide}
          direction={direction}
          prefersReducedMotion={prefersReducedMotion}
          className="h-full"
        />
        <SlideNarrative
          slide={slide}
          direction={direction}
          prefersReducedMotion={prefersReducedMotion}
          className="h-full"
        />
      </div>

      <div className="hidden h-[360px] lg:block xl:hidden 2xl:h-[376px]">
        <SlideNarrative
          slide={slide}
          direction={direction}
          prefersReducedMotion={prefersReducedMotion}
          className="h-full"
        />
      </div>
    </>
  )
}

function SlideTabs({ activeIndex, goTo, prefersReducedMotion }) {
  return (
    <>
      {/* Mobile tabs */}
      <div className="rounded-[22px] border border-white/12 bg-black/20 p-3 backdrop-blur-md lg:hidden">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/48">Browse slides</p>
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
                className={`rounded-[18px] border p-3 text-left transition ${isActive ? "border-white/18 bg-white/10 text-white" : "border-white/8 bg-black/10 text-white/58"}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${item.theme.dot}`} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-2.5 text-[0.95rem] font-semibold tracking-[-0.01em]">{item.navLabel}</p>
                <div className="mt-3 h-[2px] overflow-hidden rounded-full bg-white/10">
                  {isActive ? (
                    <span
                      key={`${item.id}-mobile-${activeIndex}`}
                      className={`hero-slider-progress block h-full rounded-full bg-gradient-to-r ${item.theme.accent}`}
                      style={{ animationDuration: `${HERO_SLIDE_DURATION}ms`, animationPlayState: prefersReducedMotion ? "paused" : "running" }}
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

      {/* Desktop tabs */}
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
                    <span className={`h-2 w-2 rounded-full ${item.theme.dot}`} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-current/70">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-2.5 text-[0.95rem] font-semibold tracking-[-0.01em] sm:text-base">{item.navLabel}</p>
                  <p className={`mt-1 hidden text-[13px] leading-5 lg:block ${isActive ? "text-white/68" : "text-white/40"}`}>{item.navDescription}</p>
                  <div className="mt-3.5 h-[2px] overflow-hidden rounded-full bg-white/10">
                    {isActive ? (
                      <span
                        key={`${item.id}-${activeIndex}`}
                        className={`hero-slider-progress block h-full rounded-full bg-gradient-to-r ${item.theme.accent}`}
                        style={{ animationDuration: `${HERO_SLIDE_DURATION}ms`, animationPlayState: prefersReducedMotion ? "paused" : "running" }}
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/42">Featured slide</p>
            <p className="mt-1.5 text-xl font-bold tracking-[-0.04em] text-white">
              {String(activeIndex + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

function MobileHero({ activeIndex, goTo, next, prev, prefersReducedMotion }) {
  const slide = heroSlides[activeIndex]

  return (
    <div className="relative overflow-hidden bg-[#050d18] px-4 pb-6 pt-6 sm:px-5 lg:hidden">
      <div className="absolute inset-0" style={getHeroAtmosphereStyle(slide)} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.44)_50%,rgba(2,6,23,0.14)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_128px)] opacity-20" />

      <div className="relative z-10 mx-auto flex min-h-[748px] max-w-[31rem] flex-col sm:min-h-[796px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            className="flex flex-1 flex-col"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="relative h-[248px] overflow-hidden rounded-[30px] border border-white/12 shadow-[0_28px_70px_rgba(2,6,23,0.3)] sm:h-[290px]">
              <Image
                src={slide.image}
                alt={`${slide.navLabel} hero visual`}
                fill
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: slide.mobileImagePosition ?? "center center" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.10),rgba(2,6,23,0.16)_34%,rgba(2,6,23,0.78)_76%,rgba(2,6,23,0.94)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.08),transparent_22%)]" />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] ${slide.theme.badge}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${slide.theme.dot}`} />
                  {slide.eyebrow}
                </span>
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-white/18 bg-black/18 px-3 text-[10px] font-bold tracking-[0.22em] text-white/80 backdrop-blur-sm">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className={`h-1 w-14 rounded-full bg-gradient-to-r ${slide.theme.accent}`} />
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/72">
                  {slide.bridgePanel.label}
                </p>
                <p className="mt-1 max-w-[16ch] text-[1.12rem] font-bold leading-[1.18] tracking-[-0.02em] text-white">
                  {slide.bridgePanel.title}
                </p>
              </div>
            </div>

            <div className="mt-4 flex min-h-[452px] flex-1 flex-col rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(7,18,30,0.9),rgba(4,10,18,0.8))] p-5 shadow-[0_24px_65px_rgba(2,6,23,0.26)] backdrop-blur-md sm:min-h-[474px] sm:p-6">
              <div className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${slide.theme.dot}`} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/62">
                  {slide.navLabel}
                </span>
              </div>

              <SlideTitle slide={slide} isMobile />

              <p className="mt-3 text-[0.88rem] leading-6 text-white/72 sm:text-[0.95rem]">
                {slide.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {slide.bridgePanel.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium leading-none text-white/78"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2.5">
                {slide.metrics.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-[18px] border border-white/10 bg-white/[0.03] px-3 py-3 text-center"
                  >
                    <span className="mx-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.06]">
                      <Icon className="h-3.5 w-3.5 text-white" />
                    </span>
                    <p className="mt-2 text-[0.82rem] font-bold tracking-[-0.02em] text-white">{value}</p>
                    <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/54">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-5">
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <Link
                    href={slide.primaryCta.href}
                    className="flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-3 text-[0.84rem] font-semibold text-slate-950 transition active:scale-95"
                  >
                    {slide.primaryCta.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href={slide.secondaryCta.href}
                    className="flex items-center justify-center rounded-full border border-white/18 bg-white/[0.06] px-4 py-3 text-[0.84rem] font-semibold text-white transition active:scale-95"
                  >
                    {slide.secondaryCta.label}
                  </Link>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Show previous slide"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <div className="flex items-center gap-1.5">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`Show slide ${i + 1}`}
                        className="flex h-4 w-4 items-center justify-center"
                      >
                        <span className={`block rounded-full transition-all duration-300 ${
                          i === activeIndex
                            ? `h-2 w-5 bg-gradient-to-r ${heroSlides[activeIndex].theme.accent}`
                            : "h-2 w-2 bg-white/25"
                        }`} />
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Show next slide"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={`mobile-progress-${activeIndex}`}
                    className={`h-full rounded-full bg-gradient-to-r ${slide.theme.accent}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: HERO_SLIDE_DURATION / 1000, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
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

  const next = () => { setDirection(1); setActiveIndex((c) => (c + 1) % heroSlides.length) }
  const prev = () => { setDirection(-1); setActiveIndex((c) => (c - 1 + heroSlides.length) % heroSlides.length) }

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0]?.clientX ?? null }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = (e.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current
    if (Math.abs(delta) > 56) delta > 0 ? prev() : next()
    touchStartX.current = null
  }

return (
    <>
      <MobileHero
        activeIndex={activeIndex}
        goTo={goTo}
        next={next}
        prev={prev}
        prefersReducedMotion={prefersReducedMotion}
      />
      <section
        className="relative isolate hidden overflow-hidden bg-[#050d18] text-white lg:block lg:min-h-[700px] 2xl:min-h-[720px]"
        aria-label="Homepage hero slider"
        aria-roledescription="carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); next() }
          if (e.key === "ArrowLeft") { e.preventDefault(); prev() }
        }}
        tabIndex={0}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${activeSlide.id}-atmosphere`}
            className="absolute inset-0"
            style={getHeroAtmosphereStyle(activeSlide)}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.02 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${activeSlide.id}-ambient-photo`}
            className="pointer-events-none absolute inset-y-0 right-[-2%] w-[54%] overflow-hidden"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 24, scale: 1.04 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, x: 18, scale: 1.02 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={activeSlide.image}
              alt=""
              fill
              sizes="(min-width: 1536px) 48vw, 54vw"
              className="object-cover scale-[1.03]"
              style={{ objectPosition: activeSlide.imagePosition ?? "center center" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,18,0.98)_0%,rgba(3,10,18,0.78)_24%,rgba(3,10,18,0.28)_56%,rgba(3,10,18,0.72)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,18,0.14),rgba(3,10,18,0.04)_34%,rgba(3,10,18,0.58)_100%)]" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_28%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_160px)] opacity-15" />
        <div className="pointer-events-none absolute inset-y-0 right-[38%] w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-5">
          <ArrowButton direction="prev" onClick={prev} className="pointer-events-auto" />
          <ArrowButton direction="next" onClick={next} className="pointer-events-auto" />
        </div>

        <div className="relative z-10 flex min-h-[700px] w-full flex-col justify-between px-16 py-12 xl:px-20 2xl:min-h-[720px]">
          <div className="grid flex-1 items-stretch gap-8 pb-6 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,0.92fr)_minmax(620px,1fr)] xl:gap-6 2xl:gap-8">
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
                className="flex h-full max-w-[38rem] flex-col justify-center self-stretch"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] ${activeSlide.theme.badge}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${activeSlide.theme.dot}`} />
                    {activeSlide.eyebrow}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/42">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                  </span>
                </div>

                <SlideTitle slide={activeSlide} isMobile={false} />

                <p className="mt-4 max-w-[36rem] text-pretty text-[0.95rem] leading-7 text-white/70 sm:text-base">
                  {activeSlide.description}
                </p>

                <div className="mt-7 flex flex-row flex-wrap gap-3">
                  <Link
                    href={activeSlide.primaryCta.href}
                    className="touch-target inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    {activeSlide.primaryCta.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href={activeSlide.secondaryCta.href}
                    className="touch-target inline-flex items-center justify-center rounded-full border border-white/16 bg-white/8 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/14"
                  >
                    {activeSlide.secondaryCta.label}
                  </Link>
                </div>

                <SlideMetrics slide={activeSlide} />
              </motion.div>
            </AnimatePresence>

            <SlideSupportPanels slide={activeSlide} direction={direction} prefersReducedMotion={prefersReducedMotion} />
          </div>

          <div className="mt-4">
            <SlideTabs activeIndex={activeIndex} goTo={goTo} prefersReducedMotion={prefersReducedMotion} />
          </div>
        </div>
      </section>
    </>
  )
}
