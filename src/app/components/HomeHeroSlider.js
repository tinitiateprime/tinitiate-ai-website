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
    image: "/images/hero/hero-launchpad-photo.webp",
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
    image: "/images/hero/hero-projects-photo.webp",
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
    image: "/images/hero/hero-batches-photo.webp",
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
    image: "/images/hero/hero-pathways-photo.webp",
    dot: "bg-sky-300",
    accent: "from-sky-300 via-blue-300 to-amber-200",
  },
]

const slideMotion = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 18 : -18 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -18 : 18 }),
}

function ArrowButton({ direction, onClick }) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="touch-target inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8e2ee] bg-white/95 text-[#12345f] shadow-[0_16px_38px_-28px_rgba(15,23,42,0.72)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#c9a227] hover:text-[#9b7a10] dark:border-white/12 dark:bg-slate-900/92 dark:text-white dark:hover:bg-slate-800"
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
          ? "mt-3 min-h-[4.35rem] text-[1.9rem] font-extrabold leading-[1.08] text-[#102642] dark:text-white min-[390px]:text-[2.08rem]"
          : "mt-3 shrink-0 pb-1 text-balance text-[2.15rem] font-extrabold leading-[1.08] text-[#102642] dark:text-white xl:text-[2.45rem] 2xl:text-[2.7rem]"
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

function VisualPanels({ slide, activeIndex }) {
  return (
    <div className="hidden items-center gap-4 text-[#102642] dark:text-white lg:grid lg:grid-cols-1 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="relative h-[268px] overflow-hidden rounded-[1.15rem] border border-[#d8e2ee] bg-white shadow-[0_26px_64px_-48px_rgba(15,23,42,0.68)] dark:border-white/12 dark:bg-slate-900">
        <Image
          src={slide.image}
          alt={`${slide.navLabel} visual`}
          fill
          sizes="(min-width: 1280px) 26vw, 40vw"
          priority={activeIndex === 0}
          unoptimized
          className="object-cover transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.52))]" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/18 bg-black/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/86 backdrop-blur">
          <span className={`h-1.5 w-1.5 rounded-full ${slide.dot}`} />
          {slide.navLabel}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {slide.metrics.map(({ icon: Icon, value, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-[#08121e]/68 px-3 py-2 text-xs font-bold text-white/88 backdrop-blur"
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{value}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="hidden h-[268px] overflow-hidden rounded-[1.15rem] border border-[#d8e2ee] bg-white p-5 shadow-[0_24px_62px_-52px_rgba(15,23,42,0.58)] dark:border-white/12 dark:bg-slate-900 xl:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7f93b0] dark:text-white/52">
          Execution Pattern
        </p>
        <div className="mt-4 space-y-2.5">
          {slide.storyline.map((item, index) => (
            <div key={item.title} className="flex gap-3.5">
              <span className={`mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full ${slide.dot}`} />
              <div className="min-w-0">
                <p className="text-[13px] font-extrabold uppercase tracking-[0.14em]">
                  <span className="mr-2 text-[#9aa9bb] dark:text-white/36">{String(index + 1).padStart(2, "0")}</span>
                  {item.title}
                </p>
                <p className="mt-1 text-[12.5px] leading-[1.45] text-[#53677d] dark:text-slate-300">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileHero({
  slide,
  activeIndex,
  direction,
  goTo,
  onTouchStart,
  onTouchEnd,
  prefersReducedMotion,
}) {
  return (
    <section
      className="relative h-[552px] overflow-hidden bg-white px-3 py-3 text-[#102642] dark:bg-slate-950 dark:text-white lg:hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: "pan-y" }}
    >
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={prefersReducedMotion ? undefined : slideMotion}
          initial={prefersReducedMotion ? false : "enter"}
          animate="center"
          exit={prefersReducedMotion ? undefined : "exit"}
          transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-full min-h-0 flex-col rounded-[1.15rem] border border-[#d8e2ee] bg-white p-4 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.72)] dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8e2ee] bg-[#f8fbff] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#53677d] dark:border-white/16 dark:bg-white/8 dark:text-white">
              <span className={`h-1.5 w-1.5 rounded-full ${slide.dot}`} />
              {slide.eyebrow}
            </span>
            <span className="rounded-full border border-[#d8e2ee] px-3 py-2 text-[10px] font-bold text-[#7f93b0] dark:border-white/16 dark:text-white/72">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>
          <SlideTitle slide={slide} mobile />
          <p className="mt-2 min-h-[3.6rem] text-[13px] leading-6 text-[#53677d] dark:text-white/72 min-[390px]:text-sm">{slide.description}</p>
          <div className="relative mt-3 h-[128px] overflow-hidden rounded-2xl border border-[#d8e2ee] dark:border-white/12 min-[390px]:h-[138px]">
            <Image
              src={slide.image}
              alt={`${slide.navLabel} visual`}
              fill
              sizes="100vw"
              priority={activeIndex === 0}
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link href={slide.primaryCta.href} className="inline-flex h-12 min-w-0 items-center justify-center gap-1.5 rounded-full bg-[#102642] px-2.5 text-center text-xs font-bold leading-tight text-white shadow-[0_16px_36px_-26px_rgba(15,23,42,0.9)] dark:!bg-white dark:!text-[#06111f] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-sm">
              {slide.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={slide.secondaryCta.href} className="inline-flex h-12 min-w-0 items-center justify-center rounded-full border border-[#d8e2ee] bg-white px-2.5 text-center text-xs font-bold leading-tight text-[#102642] dark:border-white/16 dark:bg-white/8 dark:text-white min-[390px]:px-3 min-[390px]:text-sm">
              {slide.secondaryCta.label}
            </Link>
          </div>
          <div className="mt-4 flex justify-center gap-2 pt-1">
            {heroSlides.map((item, i) => (
              <button key={item.id} type="button" onClick={() => goTo(i)} className="h-4 w-4" aria-label={`Show ${item.navLabel}`}>
                <span className={i === activeIndex ? `block h-2 w-5 rounded-full bg-gradient-to-r ${item.accent}` : "block h-2 w-2 rounded-full bg-slate-300 dark:bg-white/28"} />
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const prefersReducedMotion = useReducedMotion()
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)
  const preloadedImagesRef = useRef([])
  const slide = heroSlides[activeIndex]

  useEffect(() => {
    if (typeof window === "undefined") return
    preloadedImagesRef.current = heroSlides.map((item) => {
      const img = new window.Image()
      img.decoding = "async"
      img.src = item.image
      return img
    })
  }, [])

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
    touchStartY.current = event.touches[0]?.clientY ?? null
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return
    const delta = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current
    const verticalDelta =
      touchStartY.current === null
        ? 0
        : (event.changedTouches[0]?.clientY ?? touchStartY.current) - touchStartY.current

    if (Math.abs(delta) > 52 && Math.abs(delta) > Math.abs(verticalDelta) * 1.25) {
      delta > 0 ? prev() : next()
    }

    touchStartX.current = null
    touchStartY.current = null
  }

  return (
    <>
      <MobileHero
        slide={slide}
        activeIndex={activeIndex}
        direction={direction}
        goTo={goTo}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        prefersReducedMotion={prefersReducedMotion}
      />
      <section
        className="relative isolate hidden h-[456px] overflow-hidden border-b border-[#d8e2ee] bg-white text-[#102642] dark:border-slate-800 dark:bg-slate-950 dark:text-white lg:block"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-3 xl:px-5">
          <div className="pointer-events-auto"><ArrowButton direction="prev" onClick={prev} /></div>
          <div className="pointer-events-auto"><ArrowButton direction="next" onClick={next} /></div>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-between px-16 py-4 xl:px-20">
          <div className="grid min-h-0 flex-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] xl:gap-7 xl:grid-cols-[minmax(0,0.95fr)_minmax(560px,1fr)] 2xl:grid-cols-[minmax(0,0.9fr)_minmax(620px,1fr)]">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={`${slide.id}-content`}
                custom={direction}
                variants={prefersReducedMotion ? undefined : slideMotion}
                initial={prefersReducedMotion ? false : "enter"}
                animate="center"
                exit={prefersReducedMotion ? undefined : "exit"}
                transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex max-w-[40rem] flex-col justify-center"
              >
                <span className="inline-flex w-fit max-w-full self-start items-center gap-2 rounded-full border border-[#d8e2ee] bg-[#f8fbff] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#53677d] shadow-sm dark:border-white/16 dark:bg-white/8 dark:text-white">
                  <span className={`h-1.5 w-1.5 rounded-full ${slide.dot}`} />
                  <span className="truncate">{slide.eyebrow}</span>
                  <span className="ml-2 shrink-0 text-[#94a3b8] dark:text-white/42">
                    {String(activeIndex + 1).padStart(2, "0")} / 04
                  </span>
                </span>
                <SlideTitle slide={slide} />
                <p className="mt-2 max-w-[36rem] text-[15px] leading-7 text-[#53677d] dark:text-slate-300 xl:text-base">
                  {slide.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href={slide.primaryCta.href} className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#102642] px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_18px_42px_-28px_rgba(15,23,42,0.86)] transition hover:-translate-y-0.5 hover:bg-[#1b3e66] dark:!bg-white dark:!text-[#06111f]">
                    {slide.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={slide.secondaryCta.href} className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d8e2ee] bg-white px-5 py-2.5 text-sm font-bold text-[#102642] transition hover:-translate-y-0.5 hover:border-[#c9a227] hover:text-[#9b7a10] dark:border-white/18 dark:bg-white/8 dark:text-white">
                    {slide.secondaryCta.label}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={`${slide.id}-visual`}
                custom={direction}
                variants={prefersReducedMotion ? undefined : slideMotion}
                initial={prefersReducedMotion ? false : "enter"}
                animate="center"
                exit={prefersReducedMotion ? undefined : "exit"}
                transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <VisualPanels slide={slide} activeIndex={activeIndex} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-2 h-[98px] shrink-0 border-t border-[#d8e2ee] pt-3 dark:border-white/14">
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_110px]">
              <div className="grid min-w-0 grid-cols-4 gap-5 xl:gap-6">
                {heroSlides.map((item, index) => {
                  const isActive = index === activeIndex
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goTo(index)}
                      aria-current={isActive ? "true" : undefined}
                      className={`group flex h-full min-w-0 flex-col rounded-lg text-left transition ${
                        isActive ? "text-[#102642] dark:text-white" : "text-[#7890aa] hover:text-[#102642] dark:text-white/48 dark:hover:text-white/76"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-2 truncate text-[15px] font-extrabold leading-5">{item.navLabel}</p>
                      <p className="mt-1 h-8 overflow-hidden text-pretty text-[12px] leading-4">
                        {item.navDescription}
                      </p>
                      <div
                        data-hero-progress-track="true"
                        className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-slate-300 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)] transition-colors group-hover:bg-slate-400/70 dark:bg-white/28 dark:shadow-none dark:group-hover:bg-white/36"
                      >
                        {isActive ? (
                          <motion.span
                            key={`${item.id}-${activeIndex}`}
                            data-hero-progress="true"
                            className={`block h-full rounded-full bg-gradient-to-r ${item.accent}`}
                            initial={prefersReducedMotion ? { width: "100%" } : { width: "10%" }}
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
              <div className="hidden translate-y-[-8px] text-right lg:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7f93b0] dark:text-white/40">
                  Featured Slide
                </p>
                <p className="mt-2 text-2xl font-extrabold text-[#102642] dark:text-white">
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
