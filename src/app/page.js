"use client"

/* eslint-disable react/no-unescaped-entities */
 
import Link from 'next/link'
import { useState, useEffect, useRef } from "react"
import {
  ShoppingCart,
  Truck,
  Hospital,
  Plane,
  Factory,
  Banknote,
  GraduationCap,
  ShieldCheck,
  FlaskConical,
  Users,
  LineChart,
  ShoppingBag, BookOpen, Briefcase, Code2, FileText, UserCircle2, ClipboardCheck, CheckCircle, ChevronLeft, ChevronRight, ArrowRight
} from 'lucide-react'
import { motion, useScroll, useSpring, useTransform, useReducedMotion, AnimatePresence } from "framer-motion"
 
/* ─── Scroll Reveal ──────────────────────────────────────────────────────────── */
function ScrollReveal({ children }) {
  const ref = useRef(null)
  const themeTimerRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const [isThemeSwitching, setIsThemeSwitching] = useState(false)

  useEffect(() => {
    if (typeof document === "undefined") return undefined

    const root = document.documentElement
    const handleThemeMutation = () => {
      window.clearTimeout(themeTimerRef.current)
      setIsThemeSwitching(true)
      themeTimerRef.current = window.setTimeout(() => {
        setIsThemeSwitching(false)
      }, 260)
    }

    const observer = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.attributeName === "data-theme" || mutation.attributeName === "class")) {
        handleThemeMutation()
      }
    })

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    })

    return () => {
      observer.disconnect()
      window.clearTimeout(themeTimerRef.current)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.96", "start 0.7", "end 0.32", "end 0.04"],
  })

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.18, 0.5, 0.82, 1], [0.92, 0.97, 1, 0.97, 0.92]),
    { stiffness: 180, damping: 28, mass: 0.7 }
  )

  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [18, 6, 0, 6, 18]),
    { stiffness: 170, damping: 26, mass: 0.75 }
  )

  return (
    <motion.div
      ref={ref}
      initial={false}
      className="transform-gpu"
      style={
        prefersReducedMotion || isThemeSwitching
          ? { opacity: 1, y: 0, willChange: "auto" }
          : { opacity, y, willChange: "opacity, transform" }
      }
    >
      {children}
    </motion.div>
  )
}
 
/* ─── Course Slider Data ─────────────────────────────────────────────────────── */
function PythonCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  const gradientA = `pyA-${idSuffix}`
  const gradientB = `pyB-${idSuffix}`

  return (
    <svg viewBox="0 0 128 128" className={className}>
      <defs>
        <linearGradient id={gradientA} x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/>
        </linearGradient>
        <linearGradient id={gradientB} x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/>
        </linearGradient>
      </defs>
      <path fill={`url(#${gradientA})`} d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
      <path fill={`url(#${gradientB})`} d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
    </svg>
  )
}

function JavaCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
      <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
      <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.386-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .001.359-.327 1.468-.617z"/>
      <path fill="#EA2D2E" d="M52.343 126.953c22.479 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
    </svg>
  )
}

function SqlCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  return (
    <img
      src="/images/courses/sql.png"
      alt="SQL logo"
      className={`${className} object-contain`}
      loading="lazy"
    />
  )
}

function ReactCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
      <g fill="none" stroke="#61DAFB" strokeWidth="5.5">
        <ellipse cx="64" cy="64" rx="52" ry="20"/>
        <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(60 64 64)"/>
        <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(120 64 64)"/>
      </g>
    </svg>
  )
}

function AzureCourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  const gradientA = `azSliderA-${idSuffix}`
  const gradientB = `azSliderB-${idSuffix}`
  const gradientC = `azSliderC-${idSuffix}`

  return (
    <svg viewBox="0 0 96 96" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientA} x1="-1032.172" y1="145.312" x2="-1059.213" y2="65.426" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#114a8b"/>
          <stop offset="1" stopColor="#0669bc"/>
        </linearGradient>
        <linearGradient id={gradientB} x1="-1023.725" y1="108.083" x2="-1029.98" y2="105.968" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopOpacity=".3"/>
          <stop offset=".071" stopOpacity=".2"/>
          <stop offset=".321" stopOpacity=".1"/>
          <stop offset=".623" stopOpacity=".05"/>
          <stop offset="1" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id={gradientC} x1="-1027.165" y1="147.642" x2="-997.482" y2="68.561" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3ccbf4"/>
          <stop offset="1" stopColor="#2892df"/>
        </linearGradient>
      </defs>
      <path d="M33.338 6.544h26.038l-27.03 80.31a4.152 4.152 0 01-3.933 2.835H8.149a4.145 4.145 0 01-3.928-5.459L29.404 9.378a4.152 4.152 0 013.934-2.834z" fill={`url(#${gradientA})`}/>
      <path d="M71.175 60.261H41.404a1.911 1.911 0 00-1.3 3.309l19.316 18.053a4.171 4.171 0 002.85 1.126h25.328z" fill="#0078d4"/>
      <path d="M33.338 6.544a4.118 4.118 0 00-3.943 2.879L4.252 84.172a4.14 4.14 0 003.897 5.517h20.484a4.443 4.443 0 003.391-2.899l4.935-14.541 17.655 16.525a4.24 4.24 0 002.692.938h23.44l-10.26-29.35-29.916.007L51.7 6.544z" fill={`url(#${gradientB})`}/>
      <path d="M66.6 9.378a4.145 4.145 0 00-3.928-2.834H33.648a4.146 4.146 0 013.928 2.834l25.18 75.231a4.146 4.146 0 01-3.928 5.46h29.026a4.146 4.146 0 003.926-5.46z" fill={`url(#${gradientC})`}/>
    </svg>
  )
}

function PowerBICourseIcon({ className = "w-24 h-24", idSuffix = "course" }) {
  return (
    <img
      src="/images/courses/powerbi.png"
      alt="Power BI logo"
      className={`${className} object-contain`}
      loading="lazy"
    />
  )
}

function LocalSkillIcon({ src, alt, className = "w-12 h-12", idSuffix = "course" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain`}
    />
  )
}

const courses = [
  {
    id: "python", label: "PYTHON",
    heading: "Redefine Your Professional Trajectory with Python",
    bullets: ["Master Logic to Advanced Architecture","Exclusive Gateway to Premium Hiring","Build High-Stakes Industry Projects","Elite Mentorship to the Finish Line","Your Future, Engineered to Lead"],
    outcomes: ["Python Web Developer","Software Engineer","Fullstack Developer","Backend Developer","Frontend Developer","Web Developer"],
    fallbackText: "PY", color: "#3776AB",
    icon: PythonCourseIcon,
  },
  {
    id: "java", label: "JAVA",
    heading: "Java: The Enterprise Engine",
    bullets: ["Command Core Logic & Advanced OOP","Fast-Track to High-Stability Tech Careers","Engineer Resilient, Multi-Threaded Apps","Master Professional Industry Standards","Your Entry into Corporate Engineering"],
    outcomes: ["Java Full Stack Developer","Web Developer","Software Engineer","Backend Developer","Frontend Developer","UI Developer"],
    fallbackText: "JV", color: "#5382A1",
    icon: JavaCourseIcon,
  },
  {
    id: "sql", label: "SQL",
    heading: "SQL: The Language of Data",
    bullets: ["Master T-SQL Logic & Relational Design","Direct Access to Data-Driven Careers","Engineer High-Performance Database Systems","Translate Raw Data into Business Value","The Foundation of Every Modern Tech Stack"],
    outcomes: ["Database Administrator","Data Engineer","Data Analyst","Data Architect","Data Scientist"],
    fallbackText: "SQL", color: "#00618A",
    icon: SqlCourseIcon,
  },
  {
    id: "react", label: "React",
    heading: "React: Modern UI Engineering",
    bullets: ["Master Component Logic & Advanced Hooks","Accelerated Path to Front-End Mastery","Build Lightning-Fast Interactive Apps","Scale Professional-Grade Web Products","The Gold Standard for Modern Developers"],
    outcomes: ["React Developer","Software Engineer","Frontend Developer","UI Developer","Web Developer"],
    fallbackText: "RE", color: "#61DAFB",
    icon: ReactCourseIcon,
  },
  {
    id: "azure", label: "Azure",
    heading: "Azure: Architect the Data Cloud",
    bullets: ["Master ADF Pipelines & Databricks Logic","Direct Entry into High-Scale Cloud Roles","Build Automated, Industrial Data Lakes","Command Enterprise-Level Big Data Tools","The Pinnacle of Modern Data Strategy"],
    outcomes: ["Cloud Architect","Cloud Administrator","Cloud Developer","Cloud DevOps Engineer","Cloud Security Engineer"],
    fallbackText: "AZ", color: "#0089D6",
    icon: AzureCourseIcon,
  },
  {
    id: "powerbi", label: "Power BI",
    heading: "Power BI: Visualize the Future",
    bullets: ["Master KPI Dashboards & Data Modeling","Direct Route to Business Intelligence Roles","Build High-Impact Interactive Reports","Turn Raw Data into Strategic Decisions","The Ultimate Competitive Edge for Analysts"],
    outcomes: ["Data Analyst","Reporting Analyst","Business Analyst","Information Architect","Analytics Consultant"],
    fallbackText: "PBI", color: "#F2C811",
    icon: PowerBICourseIcon,
  },
]
 
/* ─── Course Slider ──────────────────────────────────────────────────────────── */
function CourseSlider() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)
  const DURATION = 5000
 
  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(cur => (cur + 1) % courses.length)
    }, DURATION)
  }
 
  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current) }, [])
 
  const go = (idx) => { setActive(idx); startTimer() }
  const prev = () => go((active - 1 + courses.length) % courses.length)
  const next = () => go((active + 1) % courses.length)
 
  const course = courses[active]
  const CourseIcon = course.icon
 
  return (
    <section className="bg-white px-3 py-8 transition-colors duration-300 dark:bg-slate-950 sm:px-4 sm:py-10 md:px-10 md:py-12">
      <div className="max-w-[1400px] mx-auto">
 
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:shadow-[0_24px_70px_rgba(2,6,23,0.55)] sm:rounded-3xl sm:shadow-2xl lg:min-h-[620px]"
          >
            {/* Arrow — Left */}
            <button
              onClick={prev}
              className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:border-black hover:bg-black hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:bg-blue-500 lg:flex"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
 
            {/* Arrow — Right */}
            <button
              onClick={next}
              className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:border-black hover:bg-black hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:bg-blue-500 lg:flex"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
 
            <div className="grid gap-0 lg:min-h-[620px] lg:grid-cols-2">
              {/* Left — Content */}
              <div className="flex flex-col justify-center p-6 sm:p-10 md:p-14 lg:min-h-[620px] lg:pl-20">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 sm:mb-4">
                  {course.label} Training
                </span>
                <h3 className="mb-6 text-2xl font-extrabold leading-snug text-gray-900 dark:text-slate-50 sm:mb-8 sm:text-3xl md:text-4xl">
                  {course.heading}
                </h3>
                <div className="lg:hidden mb-6 flex items-center justify-center">
                  <CourseIcon
                    className="h-24 w-24"
                    idSuffix={`mobile-${course.id}`}
                  />
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
                  {course.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300 sm:gap-3 sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-slate-400 sm:mb-4">Career Outcomes</p>
                  <div className="flex flex-wrap gap-2">
                    {course.outcomes.map((o, i) => (
                      <span key={i} className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:px-4 sm:py-1.5 sm:text-sm">{o}</span>
                    ))}
                  </div>
                </div>
              </div>
 
              {/* Right — Logo Panel */}
              <div className="hidden min-h-[620px] flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-10 transition-colors duration-300 dark:from-slate-950 dark:to-slate-900 lg:flex lg:p-16 lg:pr-20">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
                  <CourseIcon
                    className="h-full w-full"
                    idSuffix={`desktop-${course.id}`}
                  />
                </div>
                <p className="mt-6 text-lg font-bold tracking-wide text-gray-800 dark:text-slate-100 sm:text-xl">{course.label}</p>
 
                {/* Dots */}
                <div className="mt-8 flex gap-2 sm:mt-12 sm:gap-2.5">
                  {courses.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      className="flex h-5 w-5 items-center justify-center"
                    >
                      <span
                        className={`block rounded-full transition-all duration-300 ${i === active ? "h-2.5 w-5 bg-black dark:bg-blue-400" : "h-2.5 w-2.5 bg-gray-300 dark:bg-slate-700"}`}
                      />
                    </button>
                  ))}
                </div>
 
                {/* Timer bar */}
                <div className="mt-4 h-0.5 w-full max-w-[180px] overflow-hidden rounded-full bg-gray-200 transition-colors duration-300 dark:bg-slate-800 sm:mt-5 sm:max-w-[220px]">
                  <motion.div
                    key={`bar-${active}`}
                    className="h-full rounded-full bg-black dark:bg-blue-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="border-t border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-5 transition-colors duration-300 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900 lg:hidden">
              <div className="mx-auto h-0.5 w-full max-w-[180px] overflow-hidden rounded-full bg-gray-200 transition-colors duration-300 dark:bg-slate-800">
                <motion.div
                  key={`mobile-bar-${active}`}
                  className="h-full rounded-full bg-black dark:bg-blue-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: DURATION / 1000, ease: "linear" }}
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-2">
                <button
                  onClick={prev}
                  className="touch-target flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-black hover:bg-black hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:bg-blue-500"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex flex-1 justify-center gap-1.5">
                  {courses.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      className="flex h-5 w-5 items-center justify-center"
                    >
                      <span
                        className={`block rounded-full transition-all duration-300 ${i === active ? "h-2 w-5 bg-black dark:bg-blue-400" : "h-2 w-2 bg-gray-300 dark:bg-slate-700"}`}
                      />
                    </button>
                  ))}
                </div>
                <button
                  onClick={next}
                  className="touch-target flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-black hover:bg-black hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:bg-blue-500"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
 
      </div>
    </section>
  )
}
 
/* ─── Skills Data ─────────────────────────────────────────────────────────────── */
const beginnerSkills = [
  {
    name: "Python",
    href: "/courses/python-language-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <defs>
          <linearGradient id="pyBeg1" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/>
          </linearGradient>
          <linearGradient id="pyBeg2" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/>
          </linearGradient>
        </defs>
        <path fill="url(#pyBeg1)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
        <path fill="url(#pyBeg2)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    href: "/courses/javascript-language-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" fill="#F7DF1E" rx="6"/>
        <path d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    href: "/courses/typescript-beginner-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" fill="#3178C6" rx="6"/>
        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/>
        <path d="M1.5 63.91v62.5h125V1.41h-125zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.13v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z" fill="#3178C6"/>
      </svg>
    ),
  },
  {
    name: "Java",
    href: "/courses/java-language-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
        <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
        <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.386-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .001.359-.327 1.468-.617z"/>
        <path fill="#EA2D2E" d="M52.343 126.953c22.479 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
      </svg>
    ),
  },
  {
    name: "SQL",
    href: "/courses/sql-server-beginner-course",
    svgIcon: (
      <LocalSkillIcon
        src="/images/courses/sql.png"
        alt="SQL logo"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "Data Structures",
    href: "/courses/data-structures-beginner-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12" fill="none">
        <rect width="128" height="128" rx="8" fill="#6366F1"/>
        <rect x="8" y="52" width="14" height="24" rx="3" fill="white" opacity="0.9"/>
        <rect x="27" y="40" width="14" height="48" rx="3" fill="white" opacity="0.75"/>
        <rect x="46" y="32" width="14" height="64" rx="3" fill="white" opacity="0.6"/>
        <rect x="65" y="44" width="14" height="40" rx="3" fill="white" opacity="0.75"/>
        <rect x="84" y="36" width="14" height="56" rx="3" fill="white" opacity="0.65"/>
        <rect x="103" y="48" width="14" height="32" rx="3" fill="white" opacity="0.5"/>
        <circle cx="28" cy="24" r="6" fill="white"/>
        <circle cx="57" cy="16" r="6" fill="white"/>
        <circle cx="86" cy="20" r="6" fill="white"/>
        <line x1="28" y1="24" x2="57" y2="16" stroke="white" strokeWidth="2.5"/>
        <line x1="57" y1="16" x2="86" y2="20" stroke="white" strokeWidth="2.5"/>
      </svg>
    ),
  },
]
 
const professionalSkills = [
  {
    name: "Java Full Stack",
    href: "/courses/professionalCourses/backend/core-java",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
        <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
        <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.386-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .001.359-.327 1.468-.617z"/>
        <path fill="#EA2D2E" d="M52.343 126.953c22.479 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
      </svg>
    ),
  },
  {
    name: "React Web Development",
    href: "/courses/react-beginner-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
        <g fill="none" stroke="#61DAFB" strokeWidth="5">
          <ellipse cx="64" cy="64" rx="50" ry="20"/>
          <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(60 64 64)"/>
          <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(120 64 64)"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    href: "/courses/nextjs-course",
    svgIcon: (
      <svg viewBox="0 0 180 180" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <mask id="nxMask" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black"/>
        </mask>
        <g mask="url(#nxMask)">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1846V69.3836L139.999 164.845C143.291 162.485 146.441 159.94 149.508 157.52Z" fill="url(#nxGrad1)"/>
          <rect x="115" y="54" width="12" height="72" fill="url(#nxGrad2)"/>
        </g>
        <defs>
          <linearGradient id="nxGrad1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="nxGrad2" x1="115" y1="54" x2="115.5" y2="106.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Angular",
    href: "/courses/angular-beginner-course",
    svgIcon: (
      <svg viewBox="0 0 250 250" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <path fill="#DD0031" d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z"/>
        <path fill="#C3002F" d="M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z"/>
        <path fill="#fff" d="M125 52.1L66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z"/>
      </svg>
    ),
  },
  {
    name: "AWS Data Engineering",
    href: "/courses/professionalCourses/dataEngineering/aws-s3",
    svgIcon: (
      <LocalSkillIcon
        src="/images/courses/aws-devops.png"
        alt="AWS logo"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "Snowflake Data Engineering",
    href: "/courses/professionalCourses/dataEngineering/snowflake-data-platform-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="10" fill="#29B5E8"/>
        <rect x="60" y="8" width="8" height="112" rx="4" fill="white"/>
        <rect x="8" y="60" width="112" height="8" rx="4" fill="white"/>
        <rect x="60" y="60" width="8" height="56" rx="4" fill="white" transform="rotate(45 64 64)"/>
        <rect x="60" y="60" width="8" height="56" rx="4" fill="white" transform="rotate(-45 64 64)"/>
        <rect x="46" y="26" width="16" height="7" rx="3" fill="white"/>
        <rect x="66" y="26" width="16" height="7" rx="3" fill="white"/>
        <rect x="46" y="95" width="16" height="7" rx="3" fill="white"/>
        <rect x="66" y="95" width="16" height="7" rx="3" fill="white"/>
        <rect x="26" y="46" width="7" height="16" rx="3" fill="white"/>
        <rect x="26" y="66" width="7" height="16" rx="3" fill="white"/>
        <rect x="95" y="46" width="7" height="16" rx="3" fill="white"/>
        <rect x="95" y="66" width="7" height="16" rx="3" fill="white"/>
        <circle cx="64" cy="64" r="9" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Azure Data Engineering",
    href: "/courses/professionalCourses/dataEngineering/azure-adls-gen2",
    svgIcon: (
      <svg viewBox="0 0 96 96" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="azDEA" x1="-1032.172" y1="145.312" x2="-1059.213" y2="65.426" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#114a8b"/>
            <stop offset="1" stopColor="#0669bc"/>
          </linearGradient>
          <linearGradient id="azDEB" x1="-1027.165" y1="147.642" x2="-997.482" y2="68.561" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3ccbf4"/>
            <stop offset="1" stopColor="#2892df"/>
          </linearGradient>
        </defs>
        <path d="M33.338 6.544h26.038l-27.03 80.31a4.152 4.152 0 01-3.933 2.835H8.149a4.145 4.145 0 01-3.928-5.459L29.404 9.378a4.152 4.152 0 013.934-2.834z" fill="url(#azDEA)"/>
        <path d="M71.175 60.261H41.404a1.911 1.911 0 00-1.3 3.309l19.316 18.053a4.171 4.171 0 002.85 1.126h25.328z" fill="#0078d4"/>
        <path d="M66.6 9.378a4.145 4.145 0 00-3.928-2.834H33.648a4.146 4.146 0 013.928 2.834l25.18 75.231a4.146 4.146 0 01-3.928 5.46h29.026a4.146 4.146 0 003.926-5.46z" fill="url(#azDEB)"/>
      </svg>
    ),
  },
  {
    name: "GCP Data Engineering",
    href: "/courses/professionalCourses/dataEngineering/gcp-gcs",
    svgIcon: (
      <LocalSkillIcon
        src="/images/courses/google-cloud.png"
        alt="Google Cloud logo"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "Power BI",
    href: "/courses/powerbi-beginner-course",
    svgIcon: (
      <LocalSkillIcon
        src="/images/courses/powerbi.png"
        alt="Power BI logo"
        className="w-12 h-12"
      />
    ),
  },
]
 
/* ─── Skills Switcher ─────────────────────────────────────────────────────────── */
function SkillsSwitcher() {
  const [tab, setTab] = useState('beginner')
  const skills = tab === "beginner" ? beginnerSkills : professionalSkills

  useEffect(() => {
    if (typeof window === 'undefined') return
    const savedTab = sessionStorage.getItem('skillsTab')
    if (savedTab !== 'beginner' && savedTab !== 'professional') return

    const frame = window.requestAnimationFrame(() => {
      setTab(savedTab)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])
 
  const handleTabChange = (t) => {
    setTab(t)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('skillsTab', t)
    }
  }
 
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 md:p-12">
          <h2 className="mb-3 text-center text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Explore Our Courses</h2>
          <p className="mb-6 text-center text-sm text-gray-500 sm:text-base">Choose your level and start learning today</p>
 
          {/* Switcher */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-[1.5rem] bg-gray-100 p-2">
              {["beginner","professional"].map(t => (
                <button
                  key={t}
                  onClick={() => handleTabChange(t)}
                  className={`touch-target rounded-full px-6 py-3 text-sm font-semibold capitalize transition-all duration-300 sm:px-8 sm:text-base ${tab === t ? "bg-black text-white shadow-md" : "text-gray-600 hover:text-black"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
 
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6"
            >
              {skills.map((skill) => (
                <Link
                  key={skill.name}
                  href={skill.href}
                  className="group flex min-h-[132px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-xl sm:min-h-[148px] sm:p-6"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 [&>svg]:h-14 [&>svg]:w-14 [&>img]:h-14 [&>img]:w-14 [&>img]:object-contain sm:h-16 sm:w-16 sm:[&>svg]:h-16 sm:[&>svg]:w-16 sm:[&>img]:h-16 sm:[&>img]:w-16">
                    {skill.svgIcon}
                  </div>
                  <span className="text-sm font-semibold text-gray-800 text-center leading-tight group-hover:text-black">
                    {skill.name}
                  </span>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
 
/* ─── Career Support ─────────────────────────────────────────────────────────── */
const trainingPrograms = [
  {
    title: "Corporate Training",
    eyebrow: "For Teams & Enterprises",
    description: "Upskill your workforce with practitioner-led programs shaped around your tech stack, delivery goals, and team schedules.",
    href: "/training/corporate-training",
    icon: Briefcase,
    cardGlow: "bg-teal-400/18",
    cardGradient: "from-teal-100/80 via-white to-cyan-50/70",
    darkCardGlow: "dark:bg-teal-400/18",
    darkCardGradient: "dark:from-[#081a1a] dark:via-[#0d2626] dark:to-[#0b1220]",
    iconClass: "bg-teal-600 text-white",
    eyebrowClass: "bg-teal-500/12 text-teal-700",
    darkEyebrowClass: "dark:bg-teal-400/14 dark:text-teal-200",
    linkClass: "text-teal-700",
    darkLinkClass: "dark:text-teal-300",
    highlights: ["Custom curriculum", "Team-based outcomes"],
  },
  {
    title: "Campus Training",
    eyebrow: "For Colleges & Students",
    description: "Bridge classroom learning with job-ready execution through guided labs, project work, and structured mentoring on campus.",
    href: "/training/campus-training",
    icon: GraduationCap,
    cardGlow: "bg-[#c9a227]/16",
    cardGradient: "from-[#c9a227]/14 via-white to-amber-50/60",
    darkCardGlow: "dark:bg-amber-400/12",
    darkCardGradient: "dark:from-[#1c1710] dark:via-[#261f12] dark:to-[#0b1220]",
    iconClass: "bg-[#c9a227] text-[#1a1a00]",
    eyebrowClass: "bg-[#c9a227]/15 text-[#8a6712]",
    darkEyebrowClass: "dark:bg-amber-400/12 dark:text-amber-200",
    linkClass: "text-[#a67c12]",
    darkLinkClass: "dark:text-amber-300",
    highlights: ["Industry-aligned delivery", "Placement-focused practice"],
  },
  {
    title: "OPT Training",
    eyebrow: "For International Students",
    description: "Follow a job-role-focused path with real projects, interview prep, and mentorship designed for F-1 OPT and STEM OPT learners.",
    href: "/training/opt-training",
    icon: ShieldCheck,
    cardGlow: "bg-sky-200/40",
    cardGradient: "from-sky-100 via-white to-[#c9a227]/8",
    darkCardGlow: "dark:bg-sky-400/12",
    darkCardGradient: "dark:from-[#081826] dark:via-[#0f2740] dark:to-[#0b1220]",
    iconClass: "bg-sky-500 text-white",
    eyebrowClass: "bg-sky-100 text-sky-700",
    darkEyebrowClass: "dark:bg-sky-400/12 dark:text-sky-200",
    linkClass: "text-sky-700",
    darkLinkClass: "dark:text-sky-300",
    highlights: ["Portfolio-driven training", "OPT-friendly schedules"],
  },
]

function MoreTrainingPrograms() {
  return (
    <section className="bg-white px-4 pb-12 dark:bg-slate-950 sm:px-6 sm:pb-16 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white px-6 py-8 shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:shadow-[0_32px_90px_-50px_rgba(0,0,0,0.75)] sm:px-8 sm:py-10 lg:px-10">
          <div className="absolute left-1/3 top-0 h-44 w-44 -translate-x-1/2 rounded-full bg-[#f3d7a0]/25 blur-3xl dark:bg-amber-300/10" />
          <div className="absolute right-8 top-20 h-52 w-52 rounded-full bg-sky-100/70 blur-3xl dark:bg-sky-400/10" />
          <div className="absolute bottom-0 left-10 h-44 w-44 rounded-full bg-rose-100/60 blur-3xl dark:bg-fuchsia-400/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.14),transparent_42%)] opacity-0 dark:opacity-100" />

          <div className="relative z-10">
            <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
              <span className="inline-flex rounded-full border border-gray-200 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
                More Training Programs
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-slate-100 sm:text-4xl lg:text-5xl">
                Explore More Training Programs
              </h2>
              <p className="mt-3 text-sm text-gray-500 dark:text-slate-400 sm:text-base">
                Choose a specialized training path built for enterprise teams, campuses, and international learners.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
              {trainingPrograms.map((program, index) => {
                const Icon = program.icon
                const cardSpan =
                  index === 2 ? "md:col-span-2 lg:col-span-8 lg:col-start-3" : "lg:col-span-6"

                return (
                  <Link
                    key={program.title}
                    href={program.href}
                    className={`group relative overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-white/90 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-[0_32px_70px_-35px_rgba(15,23,42,0.4)] dark:border-slate-700/80 dark:bg-slate-900/80 dark:shadow-[0_28px_70px_-40px_rgba(2,6,23,0.9)] dark:hover:border-slate-500 dark:hover:shadow-[0_32px_80px_-38px_rgba(15,23,42,0.95)] sm:p-8 ${cardSpan}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.cardGradient} ${program.darkCardGradient} opacity-90 dark:opacity-100`} />
                    <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full ${program.cardGlow} ${program.darkCardGlow} blur-3xl`} />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-slate-400/30" />

                    <div className="relative z-10 flex h-full flex-col gap-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${program.eyebrowClass} ${program.darkEyebrowClass}`}>
                            {program.eyebrow}
                          </span>
                          <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-slate-100 sm:text-[1.75rem]">
                            {program.title}
                          </h3>
                          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-slate-300 sm:text-base">
                            {program.description}
                          </p>
                        </div>

                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-sm ${program.iconClass}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {program.highlights.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-gray-200/80 bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className={`inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1 ${program.linkClass} ${program.darkLinkClass}`}>
                        <span>Explore program</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const careerSupport = [
  { icon: Briefcase, title: 'IT Career Guidance', description: 'Personalized guidance from industry experts to align your goals with real-world roles in IT.', href: '/request-callback?service=IT%20Career%20Guidance' },
  { icon: BookOpen, title: 'Basics to Advanced Learning', description: 'Step-by-step learning paths from foundational concepts to advanced tech stacks and real use cases.', href: '/training/beginner-training' },
  { icon: Code2, title: 'Hands-On Coding Exercises', description: 'Daily challenges and practice labs to build strong coding logic and practical development skills.', href: '/work-experience-program' },
  { icon: FileText, title: 'Live Projects', description: 'Build real-world applications with mentorship support to strengthen your portfolio and confidence.', href: '/work-experience-program' },
  { icon: UserCircle2, title: 'Resume Preparation', description: 'Get help crafting a standout, recruiter-friendly resume tailored for your desired job roles.', href: '/request-callback?service=Resume%20Preparation' },
  { icon: ClipboardCheck, title: 'Interview Preparation', description: 'Mock interviews, HR tips, and technical assessments to boost your readiness and confidence.', href: '/request-callback?service=Interview%20Preparation' },
]
 
/* ─── Main Page ──────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
 
  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => {
      setShowModal(false)
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 2500)
  }
 
  return (
    <main className="bg-white text-gray-800 transition-colors duration-300 dark:bg-slate-950">
 
      {/* ── Request Callback Modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false) }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl transition-colors duration-300 dark:bg-slate-950"
            >
              <div className="bg-gradient-to-r from-[#1a3c6e] to-[#0e2a50] px-6 py-5 sm:px-8 sm:py-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute right-5 top-4 text-2xl font-light leading-none text-white/70 hover:text-white"
                >×</button>
                <h3 className="text-white text-xl font-bold">Request a Call Back</h3>
                <p className="text-blue-200 text-sm mt-1">Our expert will reach out within 24 hours</p>
              </div>
 
              <div className="px-6 py-6 dark:bg-slate-950 sm:px-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-emerald-950/80">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-100">Request Received!</h4>
                    <p className="text-sm text-gray-500 dark:text-slate-400">We&apos;ll be in touch shortly. Thank you for reaching out.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">Full Name</label>
                      <input
                        type="text" placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData(p => ({...p, name: e.target.value}))}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">Email Address</label>
                      <input
                        type="email" placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData(p => ({...p, email: e.target.value}))}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">Phone Number</label>
                      <input
                        type="tel" placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData(p => ({...p, phone: e.target.value}))}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">Message (Optional)</label>
                      <textarea
                        placeholder="Tell us what you're looking for..."
                        value={formData.message}
                        onChange={e => setFormData(p => ({...p, message: e.target.value}))}
                        rows={3}
                        className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="w-full py-3.5 bg-gradient-to-r from-[#c9a227] to-[#e8bc30] text-[#1a1a00] font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-sm"
                    >
                      Request My Call Back →
                    </button>
                    <p className="text-center text-xs text-gray-400 dark:text-slate-500">No spam, ever. We respect your privacy.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* ── Hero ── */}
      <ScrollReveal>
        <section className="relative flex min-h-[72svh] items-center justify-center overflow-hidden bg-white px-4 py-16 text-black transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:min-h-[78svh] sm:px-6 sm:py-20 lg:min-h-[calc(100svh-84px)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
          <svg className="pointer-events-none absolute inset-0 h-full w-full text-black opacity-10 dark:text-slate-400" viewBox="0 0 1440 900" fill="none">
            <line x1="200" y1="200" x2="500" y2="350" stroke="currentColor" strokeWidth="0.5" />
            <line x1="500" y1="350" x2="800" y2="200" stroke="currentColor" strokeWidth="0.5" />
            <line x1="800" y1="200" x2="1100" y2="350" stroke="currentColor" strokeWidth="0.5" />
            <line x1="200" y1="200" x2="500" y2="600" stroke="currentColor" strokeWidth="0.5" />
            <line x1="500" y1="350" x2="800" y2="600" stroke="currentColor" strokeWidth="0.5" />
            <line x1="800" y1="200" x2="1100" y2="600" stroke="currentColor" strokeWidth="0.5" />
            {[[200,200],[500,350],[800,200],[1100,350],[500,600],[800,700],[1100,600],[300,500],[1000,500]].map(([cx,cy],i)=>(
              <circle key={i} cx={cx} cy={cy} r="4" fill="currentColor" opacity="0.3"/>
            ))}
          </svg>
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl lg:text-6xl">
              Empowering Careers with AI + Real-Time Experience
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-700 dark:text-slate-300 sm:mb-10 sm:text-lg">
              Tinitiate AI Solutions provides job-ready IT training, AI development, cloud solutions & real-world consulting.
            </p>
            <Link
              href="/request-callback"
              className="touch-target inline-flex items-center justify-center rounded-full bg-black px-8 py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black dark:bg-[#c9a227] dark:text-[#111827] dark:hover:bg-[#e0b93c]"
            >
              Get Started
            </Link>
          </div>
        </section>
      </ScrollReveal>
 
      {/* ── Welcome to Tinitiate AI Solutions + Callback Card ── */}
      <ScrollReveal>
        <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-20">
 
              {/* Left — Welcome Text */}
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">About Us</span>
                <h2 className="mb-8 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Welcome to <span className="text-[#1a3c6e]">Tinitiate AI Solutions Trainings</span>
                </h2>
                <div className="space-y-6 text-gray-600 text-[16px] leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Tinitiate AI Solutions</strong> is a leading IT consulting, development and training company, dedicated to empowering businesses with cutting-edge technology solutions and high-quality professional training. Our vision is to bridge the gap between industry demands and individual potential — helping learners and enterprises grow together.
                  </p>
                  <p>
                    With a highly experienced team carrying years of deep expertise in IT services, database management, and cloud computing, we craft tailored solutions that meet the evolving demands of enterprises worldwide — from ambitious startups to established global corporations. Every engagement is backed by real-world experience and a passion for measurable outcomes.
                  </p>
                  <p>
                    Our commitment goes beyond training. We partner with our learners through every step of their journey — delivering real-world skills, actionable insights, and the career momentum needed to thrive in today's rapidly changing digital landscape. With Tinitiate AI Solutions, your next career breakthrough starts here.
                  </p>
                </div>
              </div>
 
              {/* Right — Expert Card */}
              <div className="lg:mt-9 lg:self-stretch">
                <div className="rounded-3xl bg-gradient-to-br from-[#1a3c6e] to-[#0e2a50] p-6 text-white shadow-2xl sm:p-8 lg:h-[calc(100%-9px)] lg:p-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
                    Available Now
                  </div>
                  <h3 className="mb-3 text-2xl font-bold sm:text-3xl">Talk to an Expert</h3>
                  <p className="text-blue-200 leading-relaxed">
                    Get personalized guidance on the right course for your career goals. No pressure — just honest, expert advice.
                  </p>
                </div>
                <ul className="space-y-4 mb-10">
                  {[
                    "Free 1-on-1 Career Counseling",
                    "Course Roadmap Tailored for You",
                    "Job Market Insights & Salary Benchmarks",
                    "Flexible Batch Schedules to Suit You", 
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-blue-100">
                      <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-300"/>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/request-callback"
                  className="touch-target mx-auto flex w-fit max-w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#c9a227] to-[#e8bc30] px-8 py-4 text-center text-base font-bold text-[#1a1a00] transition-all duration-200 hover:scale-[1.02] hover:shadow-xl sm:px-10 sm:py-5 sm:text-lg"
                >
                  Get Started — Request a Call Back
                </Link>
                <p className="text-center text-blue-300 text-sm mt-4">Our team responds within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
 
      {/* ── Course Slider ── */}
      <ScrollReveal>
        <CourseSlider />
      </ScrollReveal>

      {/* ── Why Choose Tinitiate AI Solutions ── */}
      <ScrollReveal>
        <section className="overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10 lg:px-16">
          <div className="max-w-[1400px] mx-auto">

            {/* Top label */}
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227] mb-4">Why Choose Us</span>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <h2 className="max-w-2xl text-3xl font-black leading-[1.05] text-[#0e2a50] sm:text-4xl md:text-5xl lg:text-6xl">
                  Where Real Expertise<br />Meets Your Ambition
                </h2>
                <p className="max-w-sm text-base leading-relaxed text-gray-500 sm:text-lg lg:text-right">
                  Not just a training institute — a launchpad engineered for career breakthroughs.
                </p>
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-[#c9a227] via-gray-200 to-transparent" />
            </div>

            {/* Two-column layout */}
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

              {/* Left — bold callout */}
              <div>
                <div className="relative">
                  <div className="absolute left-0 top-0 h-full w-1.5 rounded-full bg-[#c9a227]" />
                  <p className="pl-4 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                    With <span className="text-[#0e2a50]">15+ years of hands-on IT experience</span>, our training isn't just theory — it's real-time knowledge paired with live projects, bonus technologies, and business domain immersion.
                  </p>
                </div>

                <div className="mt-10 space-y-8 sm:mt-14 sm:space-y-10">
                  {[
                    { label: "Expert Faculty", detail: "Deep industry background, not just classroom instructors — our mentors have shipped real products." },
                    { label: "Structured Path", detail: "From fundamentals to advanced architecture, every step is deliberate and career-mapped." },
                    { label: "Business Domain Training", detail: "Go beyond code. Understand the industry you'll work in — banking, logistics, healthcare, and more." },
                    { label: "Bonus Technologies", detail: "We don't stop at the syllabus. Get exposure to adjacent tools that give you an edge in interviews." },
                  ].map((item, i) => (
                    <div key={i} className="group flex gap-4 sm:gap-5">
                      <div className="shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-[#0e2a50]/5 border border-[#0e2a50]/10 flex items-center justify-center group-hover:bg-[#c9a227] group-hover:border-[#c9a227] transition-all duration-300">
                          <svg className="w-4 h-4 text-[#0e2a50] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-base">{item.label}</p>
                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Development Services block */}
              <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl bg-[#0e2a50] p-6 text-white sm:p-8 lg:max-w-none lg:p-10">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
                <div className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-[#c9a227]/10" />

                <div className="relative z-10">
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#c9a227] mb-4">Development Services</span>
                  <h3 className="text-3xl font-black leading-snug mb-4">
                    Full-Spectrum Tech Solutions
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed mb-10">
                    From scalable backend systems to robust data pipelines and mobile apps, Tinitiate AI Solutions offers development services tailored to modern business needs.
                  </p>

                  <div className="space-y-5">
                    {[
                      "Custom application development (Android, Web)",
                      "Data engineering using AWS & Azure",
                      "API integrations and backend systems",
                      "IoT backend and message queue handling",
                      "Comprehensive testing & deployment support",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="shrink-0 w-5 h-5 rounded-full border border-[#c9a227]/50 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#c9a227]" />
                        </div>
                        <span className="text-blue-100 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>


                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Motivational Ribbon ── */}
      <ScrollReveal>
        <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
          <svg className="pointer-events-none absolute inset-0 h-full w-full text-black opacity-10 dark:text-slate-400" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="xMidYMid slice">
            <line x1="100" y1="100" x2="400" y2="250" stroke="currentColor" strokeWidth="0.6" />
            <line x1="400" y1="250" x2="700" y2="100" stroke="currentColor" strokeWidth="0.6" />
            <line x1="700" y1="100" x2="1000" y2="250" stroke="currentColor" strokeWidth="0.6" />
            <line x1="1000" y1="250" x2="1340" y2="100" stroke="currentColor" strokeWidth="0.6" />
            <line x1="100" y1="100" x2="400" y2="500" stroke="currentColor" strokeWidth="0.6" />
            <line x1="400" y1="250" x2="700" y2="500" stroke="currentColor" strokeWidth="0.6" />
            <line x1="700" y1="100" x2="1000" y2="500" stroke="currentColor" strokeWidth="0.6" />
            <line x1="1000" y1="250" x2="1340" y2="500" stroke="currentColor" strokeWidth="0.6" />
            {[[100,100],[400,250],[700,100],[1000,250],[1340,100],[400,500],[700,400],[1000,500],[1340,400],[250,380],[850,300]].map(([cx,cy],i)=>(
              <circle key={i} cx={cx} cy={cy} r="4" fill="currentColor" opacity="0.25"/>
            ))}
          </svg>
 
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                What Sets Us Apart
              </span>
              <h2 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl md:text-5xl">
                Engineered for Career Transformation
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mt-5 rounded-full" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {[
                {
                  num: "01",
                  heading: "Industry-Aligned Specialization",
                  subtext: "Master high-demand competencies through a curriculum engineered by active practitioners to meet current market requirements."
                },
                {
                  num: "02",
                  heading: "Evidence-Based Skill Acquisition",
                  subtext: "Develop a high-impact professional portfolio by executing complex, real-world projects that demonstrate technical proficiency to recruiters."
                },
                {
                  num: "03",
                  heading: "Curated Expert Mentorship",
                  subtext: "Gain a competitive edge through direct engagement with a specialized cohort and personalized feedback from subject matter experts."
                },
              ].map((card, i) => (
                <div key={i} className="group relative h-full rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400 hover:bg-white hover:shadow-xl sm:p-8 md:p-10">
                  <div className="absolute top-4 right-6 select-none text-7xl font-black leading-none text-black/5 transition-all group-hover:text-yellow-400/20 dark:text-white/10 dark:group-hover:text-yellow-300/30 sm:text-8xl">{card.num}</div>
                  <div className="w-12 h-1 bg-yellow-400 mb-6 rounded-full" />
                  <h3 className="text-xl font-bold text-black mb-4 leading-snug">{card.heading}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
 
      {/* ── Skills Switcher ── */}
      <ScrollReveal>
        <SkillsSwitcher />
      </ScrollReveal>

      <ScrollReveal>
        <MoreTrainingPrograms />
      </ScrollReveal>
 
      {/* ── Career Support ── */}
      <ScrollReveal>
        <section className="bg-gray-50 px-4 py-12 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Career Support</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {careerSupport.map(({icon:Icon,title,description,href})=>(
                <Link
                  key={title}
                  href={href}
                  className="group flex h-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 bg-blue-100 p-3 rounded-full">
                    <Icon className="w-8 h-8 text-blue-700"/>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 transition-colors group-hover:text-blue-700">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
 
    </main>
  )
}
