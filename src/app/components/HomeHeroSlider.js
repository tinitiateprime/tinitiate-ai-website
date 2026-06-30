"use client"

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
    titleLines: ["AI training built for", "real career momentum"],
    mobileTitleLines: ["AI training built for", "career momentum"],
    description:
      "Structured mentoring and practical builds that turn learning into confident progress.",
    primaryCta: { href: "/request-callback", label: "Get Started" },
    secondaryCta: { href: "/training/professional-training", label: "Explore Programs" },
    metrics: [
      { icon: GraduationCap, value: "20+", label: "Career Tracks" },
      { icon: LineChart, value: "Weekly", label: "Mentor Reviews" },
      { icon: Briefcase, value: "Live", label: "Portfolio Delivery" },
    ],
    storyline: [
      { title: "Roadmap", detail: "Clear stages from fundamentals to confident delivery." },
      { title: "Feedback", detail: "Frequent checkpoints that keep progress visible." },
      { title: "Launch", detail: "Portfolio-ready work shaped for hiring conversations." },
    ],
    bridge: {
      label: "Momentum Loop",
      title: "What stays active each week",
      items: ["Roadmap clarity", "Mentor feedback", "Portfolio progress"],
    },
    image: "/images/hero/hero-launchpad-photo.jpg",
    dot: "bg-sky-300",
    accent: "from-sky-300 via-cyan-300 to-amber-200",
  },
  {
    id: "projects",
    eyebrow: "Project-First Experience",
    navLabel: "Real Projects",
    navDescription: "Hands-on delivery practice that feels like the job",
    titleLines: ["Learn through real", "project delivery"],
    mobileTitleLines: ["Learn through", "real project delivery"],
    description:
      "Scoped builds, review cycles, and showcase-ready work with a rhythm closer to real teams.",
    primaryCta: { href: "/work-experience-program", label: "See Work Experience" },
    secondaryCta: { href: "/request-callback", label: "Talk to an Expert" },
    metrics: [
      { icon: ClipboardCheck, value: "Sprint", label: "Delivery Rhythm" },
      { icon: Users, value: "Team-like", label: "Workflow" },
      { icon: Briefcase, value: "Ready", label: "Showcase Work" },
    ],
    storyline: [
      { title: "Brief", detail: "Start with scope, constraints, and expected outcomes." },
      { title: "Build", detail: "Practice implementation cycles instead of passive tutorials." },
      { title: "Review", detail: "Improve quality through iteration, QA, and presentation." },
    ],
    bridge: {
      label: "Delivery Flow",
      title: "How project practice feels real",
      items: ["Scope defined", "Build in cycles", "Review and demo"],
    },
    image: "/images/hero/hero-projects-photo.jpg",
    dot: "bg-emerald-300",
    accent: "from-emerald-300 via-teal-300 to-amber-200",
  },
  {
    id: "batches",
    eyebrow: "Live Batch Learning",
    navLabel: "Online Batches",
    navDescription: "Mentor-led classes with weekly structure and practice",
    titleLines: ["Live batches built for", "steady skill growth"],
    mobileTitleLines: ["Live batches for", "steady skill growth"],
    description:
      "Follow a consistent learning rhythm with live classes, guided practice, and support that works for freshers and working professionals.",
    primaryCta: { href: "/training/online-training", label: "View Online Training" },
    secondaryCta: { href: "/training/new-batches", label: "See New Batches" },
    metrics: [
      { icon: GraduationCap, value: "Live", label: "Mentor Classes" },
      { icon: LineChart, value: "Weekly", label: "Learning Rhythm" },
      { icon: Users, value: "Flexible", label: "Batch Timings" },
    ],
    storyline: [
      { title: "Schedule", detail: "Choose a batch structure that fits freshers and working learners." },
      { title: "Learn", detail: "Join live sessions that keep explanations, examples, and Q&A connected." },
      { title: "Practice", detail: "Carry momentum between classes with guided assignments and feedback." },
    ],
    bridge: {
      label: "Batch Cadence",
      title: "The weekly learning rhythm",
      items: ["Live session", "Guided assignment", "Support follow-up"],
    },
    image: "/images/hero/hero-batches-photo.jpg",
    dot: "bg-cyan-300",
    accent: "from-cyan-300 via-sky-300 to-amber-200",
  },
  {
    id: "pathways",
    eyebrow: "Training Paths",
    navLabel: "Training Paths",
    navDescription: "Beginner-to-advanced tracks across in-demand stacks",
    titleLines: ["Build skills from", "basics to advanced"],
    mobileTitleLines: ["Build skills", "from basics to advanced"],
    description:
      "Follow structured paths across web, data, cloud, reporting, and AI without jumping between disconnected topics.",
    primaryCta: { href: "/training/beginner-training", label: "Start with Basics" },
    secondaryCta: { href: "/training/professional-training", label: "View Pro Tracks" },
    metrics: [
      { icon: GraduationCap, value: "Beginner", label: "Start" },
      { icon: LineChart, value: "Advanced", label: "Tracks" },
      { icon: Briefcase, value: "Role-ready", label: "Outcomes" },
    ],
    storyline: [
      { title: "Foundation", detail: "Build the core concepts before moving into deeper project work." },
      { title: "Specialize", detail: "Choose focused tracks in the stacks companies use." },
      { title: "Deliver", detail: "Finish with stronger execution and portfolio-ready direction." },
    ],
    bridge: {
      label: "Skill Progression",
      title: "How tracks stay connected",
      items: ["Start with basics", "Specialize by role", "Finish with proof"],
    },
    image: "/images/hero/hero-pathways-photo.jpg",
    dot: "bg-sky-300",
    accent: "from-sky-300 via-blue-300 to-amber-200",
  },
]

const slideMotion = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 38 : -38 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -38 : 38 }),
}

function ArrowButton({ direction, onClick }) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="touch-target inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/35"
    >
      <Icon className="h-5 w-5" />
    </button>
  )
}

function SlideTitle({ slide, mobile = false }) {
  const lines = mobile ? slide.mobileTitleLines : slide.titleLines
  return (
    <h1
      className={
        mobile
          ? "mt-3 min-h-[5.35rem] text-[2rem] font-extrabold leading-[1.08] text-white min-[390px]:text-[2.2rem]"
          : "mt-5 shrink-0 pb-2 text-balance text-[2.35rem] font-extrabold leading-[1.12] text-white xl:text-[2.75rem] 2xl:text-[3.05rem]"
      }
    >
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </h1>
  )
}

function Metrics({ slide }) {
  return (
    <div className="mt-5 shrink-0 border-t border-white/12 pt-4">
      <div className="flex flex-wrap gap-x-5 gap-y-3 2xl:gap-x-7">
        {slide.metrics.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/8">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <p className="font-extrabold leading-none">{value}</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/52 2xl:text-[10px] 2xl:tracking-[0.18em]">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function VisualPanels({ slide, activeIndex }) {
  return (
    <div className="hidden items-center gap-5 lg:grid lg:grid-cols-1 xl:grid-cols-2">
      <div className="relative h-[330px] overflow-hidden rounded-[1.55rem] border border-white/12 bg-white/8">
        <Image
          src={slide.image}
          alt={`${slide.navLabel} visual`}
          fill
          sizes="(min-width: 1280px) 26vw, 40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06),rgba(2,6,23,0.9))]" />
        <div className="relative flex h-full flex-col justify-between p-5">
          <div className="flex items-start justify-between">
            <div>
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${slide.accent}`} />
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/68">
                {slide.bridge.label}
              </p>
            </div>
            <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/18 bg-black/20 px-3 text-[10px] font-bold text-white/78">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>
          <div>
            <h2 className="max-w-[12ch] text-2xl font-extrabold leading-tight">
              {slide.bridge.title}
            </h2>
            <div className="mt-4 grid gap-2.5">
              {slide.bridge.items.map((item, index) => (
                <div key={item} className="flex min-h-[42px] items-center gap-3 rounded-2xl border border-white/12 bg-[#08121e]/75 px-4">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/14 bg-white/8 text-[10px] font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold text-white/84">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden h-[330px] overflow-hidden rounded-[1.55rem] border border-white/12 bg-[#06111f]/86 p-5 xl:block 2xl:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/52">
          Execution Pattern
        </p>
        <div className="mt-5 space-y-3.5 2xl:mt-6 2xl:space-y-4">
          {slide.storyline.map((item, index) => (
            <div key={item.title} className="flex gap-3.5 2xl:gap-4">
              <span className={`mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full ${slide.dot}`} />
              <div className="min-w-0">
                <p className="text-[13px] font-extrabold uppercase tracking-[0.14em]">
                  <span className="mr-2 text-white/36">{String(index + 1).padStart(2, "0")}</span>
                  {item.title}
                </p>
                <p className="mt-1 text-[12.5px] leading-[1.48] text-slate-300 2xl:text-[13px] 2xl:leading-5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileHero({ slide, activeIndex, goTo }) {
  return (
    <section className="relative overflow-hidden bg-[#06111f] px-3 py-3 text-white lg:hidden">
      <Image src={slide.image} alt="" fill sizes="100vw" className="object-cover opacity-24" />
      <div className="absolute inset-0 bg-[#06111f]/86" />
      <div className="relative flex flex-col rounded-[1.15rem] border border-white/12 bg-[#06111f]/80 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em]">
            <span className={`h-1.5 w-1.5 rounded-full ${slide.dot}`} />
            {slide.eyebrow}
          </span>
          <span className="rounded-full border border-white/16 px-3 py-2 text-[10px] font-bold text-white/72">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>
        <SlideTitle slide={slide} mobile />
        <p className="mt-3 min-h-[4.75rem] text-[13px] leading-6 text-white/72 min-[390px]:text-sm">{slide.description}</p>
        <div className="relative mt-4 h-[145px] overflow-hidden rounded-2xl border border-white/12 min-[390px]:h-[155px]">
          <Image src={slide.image} alt={`${slide.navLabel} visual`} fill sizes="100vw" className="object-cover" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link href={slide.primaryCta.href} className="inline-flex h-12 min-w-0 items-center justify-center gap-1.5 rounded-full bg-white px-2.5 text-center text-xs font-bold leading-tight text-[#06111f] dark:!bg-white dark:!text-[#06111f] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-sm">
            {slide.primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href={slide.secondaryCta.href} className="inline-flex h-12 min-w-0 items-center justify-center rounded-full border border-white/16 bg-white/8 px-2.5 text-center text-xs font-bold leading-tight text-white min-[390px]:px-3 min-[390px]:text-sm">
            {slide.secondaryCta.label}
          </Link>
        </div>
        <div className="mt-5 flex justify-center gap-2 pt-1">
          {heroSlides.map((item, i) => (
            <button key={item.id} type="button" onClick={() => goTo(i)} className="h-4 w-4" aria-label={`Show ${item.navLabel}`}>
              <span className={i === activeIndex ? `block h-2 w-5 rounded-full bg-gradient-to-r ${item.accent}` : "block h-2 w-2 rounded-full bg-white/28"} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const prefersReducedMotion = useReducedMotion()
  const touchStartX = useRef(null)
  const slide = heroSlides[activeIndex]

  useEffect(() => {
    if (prefersReducedMotion) return undefined
    const timer = window.setTimeout(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, HERO_SLIDE_DURATION)
    return () => window.clearTimeout(timer)
  }, [activeIndex, prefersReducedMotion])

  const goTo = (index) => {
    if (index === activeIndex) return
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
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
    if (Math.abs(delta) > 56) delta > 0 ? prev() : next()
    touchStartX.current = null
  }

  return (
    <>
      <MobileHero slide={slide} activeIndex={activeIndex} goTo={goTo} />
      <section
        className="relative isolate hidden h-[640px] overflow-hidden bg-[#06111f] text-white lg:block"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${slide.id}-bg`}
            className="absolute inset-y-0 right-0 w-[56%]"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Image src={slide.image} alt="" fill priority sizes="56vw" className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,17,31,1)_0%,rgba(6,17,31,0.8)_28%,rgba(6,17,31,0.44)_64%,rgba(6,17,31,0.72)_100%)]" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06),rgba(2,6,23,0.26))]" />

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-2">
          <div className="pointer-events-auto"><ArrowButton direction="prev" onClick={prev} /></div>
          <div className="pointer-events-auto"><ArrowButton direction="next" onClick={next} /></div>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-between px-20 py-8">
          <div className="grid min-h-0 flex-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] xl:gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(560px,1fr)] 2xl:grid-cols-[minmax(0,0.9fr)_minmax(620px,1fr)]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={`${slide.id}-content`}
                custom={direction}
                variants={prefersReducedMotion ? undefined : slideMotion}
                initial={prefersReducedMotion ? false : "enter"}
                animate="center"
                exit={prefersReducedMotion ? undefined : "exit"}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
                className="flex max-w-[40rem] flex-col justify-center"
              >
                <span className="inline-flex w-fit max-w-full self-start items-center gap-2 rounded-full border border-white/16 bg-white/8 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                  <span className={`h-1.5 w-1.5 rounded-full ${slide.dot}`} />
                  <span className="truncate">{slide.eyebrow}</span>
                  <span className="ml-2 shrink-0 text-white/42">
                    {String(activeIndex + 1).padStart(2, "0")} / 04
                  </span>
                </span>
                <SlideTitle slide={slide} />
                <p className="mt-4 max-w-[36rem] text-[15px] leading-7 text-slate-200 xl:text-base">
                  {slide.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href={slide.primaryCta.href} className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-[#06111f] dark:!bg-white dark:!text-[#06111f]">
                    {slide.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={slide.secondaryCta.href} className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/18 bg-white/8 px-5 py-2.5 text-sm font-bold text-white">
                    {slide.secondaryCta.label}
                  </Link>
                </div>
                <Metrics slide={slide} />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={`${slide.id}-visual`}
                custom={direction}
                variants={prefersReducedMotion ? undefined : slideMotion}
                initial={prefersReducedMotion ? false : "enter"}
                animate="center"
                exit={prefersReducedMotion ? undefined : "exit"}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
              >
                <VisualPanels slide={slide} activeIndex={activeIndex} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 h-[116px] shrink-0 border-t border-white/14 pt-4 xl:h-[106px]">
            <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_110px]">
              <div className="grid min-w-0 grid-cols-4 gap-5 xl:gap-6">
                {heroSlides.map((item, index) => {
                  const isActive = index === activeIndex
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goTo(index)}
                      aria-current={isActive ? "true" : undefined}
                      className={`min-w-0 rounded-lg pb-1 text-left transition ${
                        isActive ? "text-white" : "text-white/48 hover:text-white/76"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-2 truncate font-extrabold">{item.navLabel}</p>
                      <p className="mt-1 min-h-10 overflow-hidden text-pretty text-[13px] leading-5">
                        {item.navDescription}
                      </p>
                      <div className="mt-3 h-[2px] overflow-hidden bg-white/12">
                        {isActive ? (
                          <motion.span
                            key={`${item.id}-${activeIndex}`}
                            data-hero-progress="true"
                            className={`block h-full bg-gradient-to-r ${item.accent}`}
                            initial={prefersReducedMotion ? { width: "100%" } : { width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                              duration: prefersReducedMotion ? 0 : HERO_SLIDE_DURATION / 1000,
                              ease: "linear",
                            }}
                          />
                        ) : null}
                      </div>
                    </button>
                  )
                })}
              </div>
              <div className="hidden text-right lg:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                  Featured Slide
                </p>
                <p className="mt-2 text-2xl font-extrabold text-white">
                  {String(activeIndex + 1).padStart(2, "0")} / 04
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
