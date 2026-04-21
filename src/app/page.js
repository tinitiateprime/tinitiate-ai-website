"use client"
 
import Link from 'next/link'
import { useState, useEffect, useRef } from "react"
import {
  UserCheck, Briefcase, CheckCircle, BookOpen, FileText, ClipboardCheck, Code2,
  ShoppingCart, ShieldCheck, Truck, Hospital, Plane, Factory, UserCircle2,
  Brain, ChevronLeft, ChevronRight
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion, useInView, AnimatePresence } from "framer-motion"
 
/* ─── Scroll Reveal ──────────────────────────────────────────────────────────── */
function ScrollReveal({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-60px", amount: 0.08, once: false })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 24 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  )
}
 
/* ─── Course Slider Data ─────────────────────────────────────────────────────── */
const courses = [
  {
    id: "python", label: "PYTHON",
    heading: "Redefine Your Professional Trajectory with Python",
    bullets: ["Master Logic to Advanced Architecture","Exclusive Gateway to Premium Hiring","Build High-Stakes Industry Projects","Elite Mentorship to the Finish Line","Your Future, Engineered to Lead"],
    outcomes: ["Python Web Developer","Software Engineer","Fullstack Developer","Backend Developer","Frontend Developer","Web Developer"],
    fallbackText: "PY", color: "#3776AB",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-24 h-24">
        <defs>
          <linearGradient id="pyA" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/>
          </linearGradient>
          <linearGradient id="pyB" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/>
          </linearGradient>
        </defs>
        <path fill="url(#pyA)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
        <path fill="url(#pyB)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
      </svg>
    ),
  },
  {
    id: "java", label: "JAVA",
    heading: "Java: The Enterprise Engine",
    bullets: ["Command Core Logic & Advanced OOP","Fast-Track to High-Stability Tech Careers","Engineer Resilient, Multi-Threaded Apps","Master Professional Industry Standards","Your Entry into Corporate Engineering"],
    outcomes: ["Java Full Stack Developer","Web Developer","Software Engineer","Backend Developer","Frontend Developer","UI Developer"],
    fallbackText: "JV", color: "#5382A1",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-24 h-24">
        <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
        <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
        <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.386-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .001.359-.327 1.468-.617z"/>
        <path fill="#EA2D2E" d="M52.343 126.953c22.479 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
      </svg>
    ),
  },
  {
    id: "sql", label: "SQL",
    heading: "SQL: The Language of Data",
    bullets: ["Master T-SQL Logic & Relational Design","Direct Access to Data-Driven Careers","Engineer High-Performance Database Systems","Translate Raw Data into Business Value","The Foundation of Every Modern Tech Stack"],
    outcomes: ["Database Administrator","Data Engineer","Data Analyst","Data Architect","Data Scientist"],
    fallbackText: "SQL", color: "#00618A",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-24 h-24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#00618A" d="M2 2h124v124H2z"/>
        <path fill="#FFF" d="M116.1 99.5c-2.4-.1-4.2.1-5.8.8l-.7 1.5c.7 1.3 1.5 2.2 2.7 3 1.1.7 2.2 1.5 3.4 2.2l.1-.1c-.1.1-.1.1 0 0 2.2 1.4 4.8 2.2 6.9 3.6.9.6 1.9 1.3 2.7 2l.3.3v-.3c-.7-2.9-2.2-5.4-4.4-7.3-1.2-1-3.9-2.5-5.2-5.7zm-.7 6c.2-.5.4-.9.6-1.4-1.3.6-2.3 1.7-2.5 3.3.6-.7 1.3-1.3 1.9-1.9z"/>
        <ellipse cx="64" cy="34" rx="38" ry="12" fill="#F5AB13"/>
        <path fill="#E48E00" d="M26 34v10c0 6.6 17 12 38 12s38-5.4 38-12V34c0 6.6-17 12-38 12S26 40.6 26 34z"/>
        <path fill="#E48E00" d="M26 54v10c0 6.6 17 12 38 12s38-5.4 38-12V54c0 6.6-17 12-38 12S26 60.6 26 54z"/>
        <path fill="#E48E00" d="M26 74v10c0 6.6 17 12 38 12s38-5.4 38-12V74c0 6.6-17 12-38 12S26 80.6 26 74z"/>
        <path fill="#fff" d="M46 106c-.9 0-1.7-.1-2.5-.4-2.2-.7-2.8-2.3-2.8-3.3 0-.3 0-.6.1-.8h2.4c0 .1-.1.3-.1.5 0 .8.7 1.4 1.9 1.7.5.1.9.2 1.4.2 1.9 0 3-.8 3-1.7 0-.5-.4-1-1.2-1.3-.8-.3-1.8-.7-3-.9-1.3-.3-2.4-.6-3.2-1.2-.9-.7-1.3-1.6-1.3-2.6 0-2.1 2.1-3.6 5.3-3.6 2.8 0 4.8 1.3 5 3.3h-2.5c-.2-.8-1.2-1.4-2.6-1.4-1.6 0-2.6.7-2.6 1.5 0 .4.3.8.9 1.1.7.3 1.6.6 2.8.8 1.5.3 2.8.8 3.7 1.4.9.7 1.4 1.5 1.4 2.6 0 2.3-2.4 3.9-6.1 3.9zm16.2-.2L58 99.7v6.1H55.5V94.5h2.6l5.4 8.3v-8.3h2.5v11.3h-3.8zm12.9.2c-3.8 0-6.4-2.5-6.4-6.1s2.6-6.1 6.4-6.1c1.5 0 2.8.4 3.9 1.2l-1.4 1.8c-.7-.5-1.6-.8-2.5-.8-2.2 0-3.8 1.6-3.8 3.9s1.6 3.9 3.8 3.9c1 0 1.9-.3 2.7-.9l1.4 1.8c-1.2.9-2.6 1.3-4.1 1.3z"/>
      </svg>
    ),
  },
  {
    id: "react", label: "React",
    heading: "React: Modern UI Engineering",
    bullets: ["Master Component Logic & Advanced Hooks","Accelerated Path to Front-End Mastery","Build Lightning-Fast Interactive Apps","Scale Professional-Grade Web Products","The Gold Standard for Modern Developers"],
    outcomes: ["React Developer","Software Engineer","Frontend Developer","UI Developer","Web Developer"],
    fallbackText: "RE", color: "#61DAFB",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-24 h-24">
        <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
        <g fill="none" stroke="#61DAFB" strokeWidth="5.5">
          <ellipse cx="64" cy="64" rx="52" ry="20"/>
          <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(60 64 64)"/>
          <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(120 64 64)"/>
        </g>
      </svg>
    ),
  },
  {
    id: "azure", label: "Azure",
    heading: "Azure: Architect the Data Cloud",
    bullets: ["Master ADF Pipelines & Databricks Logic","Direct Entry into High-Scale Cloud Roles","Build Automated, Industrial Data Lakes","Command Enterprise-Level Big Data Tools","The Pinnacle of Modern Data Strategy"],
    outcomes: ["Cloud Architect","Cloud Administrator","Cloud Developer","Cloud DevOps Engineer","Cloud Security Engineer"],
    fallbackText: "AZ", color: "#0089D6",
    svgIcon: (
      <svg viewBox="0 0 96 96" className="w-24 h-24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="azSliderA" x1="-1032.172" y1="145.312" x2="-1059.213" y2="65.426" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#114a8b"/>
            <stop offset="1" stopColor="#0669bc"/>
          </linearGradient>
          <linearGradient id="azSliderB" x1="-1023.725" y1="108.083" x2="-1029.98" y2="105.968" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopOpacity=".3"/>
            <stop offset=".071" stopOpacity=".2"/>
            <stop offset=".321" stopOpacity=".1"/>
            <stop offset=".623" stopOpacity=".05"/>
            <stop offset="1" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="azSliderC" x1="-1027.165" y1="147.642" x2="-997.482" y2="68.561" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3ccbf4"/>
            <stop offset="1" stopColor="#2892df"/>
          </linearGradient>
        </defs>
        <path d="M33.338 6.544h26.038l-27.03 80.31a4.152 4.152 0 01-3.933 2.835H8.149a4.145 4.145 0 01-3.928-5.459L29.404 9.378a4.152 4.152 0 013.934-2.834z" fill="url(#azSliderA)"/>
        <path d="M71.175 60.261H41.404a1.911 1.911 0 00-1.3 3.309l19.316 18.053a4.171 4.171 0 002.85 1.126h25.328z" fill="#0078d4"/>
        <path d="M33.338 6.544a4.118 4.118 0 00-3.943 2.879L4.252 84.172a4.14 4.14 0 003.897 5.517h20.484a4.443 4.443 0 003.391-2.899l4.935-14.541 17.655 16.525a4.24 4.24 0 002.692.938h23.44l-10.26-29.35-29.916.007L51.7 6.544z" fill="url(#azSliderB)"/>
        <path d="M66.6 9.378a4.145 4.145 0 00-3.928-2.834H33.648a4.146 4.146 0 013.928 2.834l25.18 75.231a4.146 4.146 0 01-3.928 5.46h29.026a4.146 4.146 0 003.926-5.46z" fill="url(#azSliderC)"/>
      </svg>
    ),
  },
  {
    id: "powerbi", label: "Power BI",
    heading: "Power BI: Visualize the Future",
    bullets: ["Master KPI Dashboards & Data Modeling","Direct Route to Business Intelligence Roles","Build High-Impact Interactive Reports","Turn Raw Data into Strategic Decisions","The Ultimate Competitive Edge for Analysts"],
    outcomes: ["Data Analyst","Reporting Analyst","Business Analyst","Information Architect","Analytics Consultant"],
    fallbackText: "PBI", color: "#F2C811",
    svgIcon: (
      <svg viewBox="0 0 32 32" className="w-24 h-24" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#F2C811"/>
        <rect x="4" y="18" width="5" height="10" rx="1" fill="#1C1C1C"/>
        <rect x="13" y="11" width="5" height="17" rx="1" fill="#1C1C1C"/>
        <rect x="22" y="4" width="5" height="24" rx="1" fill="#1C1C1C" opacity="0.8"/>
      </svg>
    ),
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
 
  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
 
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative"
          >
            {/* Arrow — Left */}
            <button
              onClick={prev}
              className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
 
            {/* Arrow — Right */}
            <button
              onClick={next}
              className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
 
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left — Content */}
              <div className="p-14 pl-20 flex flex-col justify-center">
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">
                  {course.label} Training
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-snug">
                  {course.heading}
                </h3>
                <ul className="space-y-3 mb-10">
                  {course.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Career Outcomes</p>
                  <div className="flex flex-wrap gap-2">
                    {course.outcomes.map((o, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200">{o}</span>
                    ))}
                  </div>
                </div>
              </div>
 
              {/* Right — Logo Panel */}
              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-16 pr-20 min-h-[420px]">
                <div className="w-48 h-48 flex items-center justify-center [&>svg]:w-48 [&>svg]:h-48 drop-shadow-xl">{course.svgIcon}</div>
                <p className="mt-8 text-xl font-bold text-gray-800 tracking-wide">{course.label}</p>
 
                {/* Dots */}
                <div className="flex gap-2.5 mt-12">
                  {courses.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      className={`rounded-full transition-all duration-300 ${i === active ? "w-8 h-2.5 bg-black" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-500"}`}
                    />
                  ))}
                </div>
 
                {/* Timer bar */}
                <div className="w-full max-w-[220px] mt-5 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    key={`bar-${active}`}
                    className="h-full bg-black rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                </div>
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
      <svg viewBox="0 0 128 128" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <path fill="#00618A" d="M2 2h124v124H2z"/>
        <ellipse cx="64" cy="34" rx="38" ry="12" fill="#F5AB13"/>
        <path fill="#E48E00" d="M26 34v10c0 6.6 17 12 38 12s38-5.4 38-12V34c0 6.6-17 12-38 12S26 40.6 26 34z"/>
        <path fill="#E48E00" d="M26 54v10c0 6.6 17 12 38 12s38-5.4 38-12V54c0 6.6-17 12-38 12S26 60.6 26 54z"/>
        <path fill="#E48E00" d="M26 74v10c0 6.6 17 12 38 12s38-5.4 38-12V74c0 6.6-17 12-38 12S26 80.6 26 74z"/>
        <path fill="#fff" d="M44 105c-.8 0-1.5-.1-2.2-.3-1.9-.6-2.4-2-2.4-2.9 0-.2 0-.5.1-.7h2.1c0 .1-.1.2-.1.4 0 .7.6 1.2 1.7 1.5.4.1.8.1 1.2.1 1.7 0 2.7-.7 2.7-1.5 0-.4-.3-.8-1-1.1-.7-.3-1.6-.6-2.7-.8-1.1-.2-2.1-.5-2.8-1-.7-.6-1.1-1.3-1.1-2.1 0-1.9 1.9-3.2 4.7-3.2 2.5 0 4.3 1.2 4.5 2.9h-2.2c-.2-.7-1-1.2-2.3-1.2-1.4 0-2.3.6-2.3 1.3 0 .3.2.7.7.9.6.3 1.5.5 2.5.7 1.3.3 2.5.7 3.2 1.2.8.6 1.2 1.3 1.2 2.2 0 2.1-2.1 3.6-5.5 3.6zm13.9-.2L54 98.7v6.1H51.7V93.5h2.3l4.8 7.4v-7.4H61v11.3h-3.1z"/>
      </svg>
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
    name: "React Web Dev",
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
    name: "AWS Data Eng",
    href: "/courses/professionalCourses/dataEngineering/aws-s3",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="8" fill="#232F3E"/>
        <path fill="#FF9900" d="M42.9 74.4c0 .9.1 1.6.3 2.1.2.5.5 1.1.9 1.7.1.2.2.4.2.6 0 .3-.2.6-.5.9l-1.7 1.1c-.2.2-.5.2-.7.2-.3 0-.6-.1-.8-.4-.7-.7-1.2-1.6-1.6-2.6-.9 1.2-2.1 2.1-3.7 2.8-1.4.7-3.1 1.1-4.9 1.1-2.6 0-4.6-.7-6.1-2.2-1.5-1.5-2.2-3.4-2.2-5.8 0-2.6.9-4.7 2.8-6.4 1.9-1.7 4.3-2.5 7.5-2.5 1.1 0 2.1.1 3.2.3 1.1.2 2.2.5 3.3.8v-2.1c0-2.2-.5-3.7-1.4-4.6-.9-.9-2.4-1.3-4.6-1.3-1 0-2 .1-3.1.4-1.1.2-2.1.5-3.1 1-.4.2-.8.3-1 .3-.4 0-.5-.2-.5-.7v-1.9c0-.4.1-.6.2-.7.2-.2.4-.3.7-.4 1.3-.7 2.8-1.3 4.7-1.7 1.9-.5 3.8-.7 5.8-.7 4.4 0 7.6 1 9.5 3 1.9 2 2.9 4.9 2.9 8.9v11.8h.1zm-12.8 2.9c1 0 2.1-.2 3.2-.6 1.1-.4 2.1-1 3-1.9.6-.7 1-1.5 1.3-2.4.2-.9.4-2 .4-3.3v-1.6c-.9-.2-1.8-.4-2.7-.5-.9-.1-1.8-.2-2.7-.2-1.9 0-3.2.4-4.2 1.1-.9.7-1.4 1.8-1.4 3.2 0 1.3.3 2.3 1 3 .7.7 1.6 1.2 3.1 1.2zm22.7 3.1c-.4 0-.7-.1-.8-.2-.1-.2-.3-.4-.4-.8L45 51.6c-.1-.4-.2-.7-.2-.9 0-.3.1-.5.4-.5h2.8c.4 0 .6.1.8.2.2.2.3.4.4.8l4.6 18.2 4.3-18.2c.1-.4.2-.7.4-.8.2-.2.4-.2.7-.2h2.3c.4 0 .6.1.9.2.2.2.3.4.4.8l4.3 18.4 4.7-18.4c.1-.4.3-.7.4-.8.2-.2.4-.2.7-.2h2.6c.3 0 .5.1.5.5 0 .1 0 .2-.1.4 0 .1-.1.3-.2.5l-6.6 23.8c-.1.4-.3.7-.4.8-.2.2-.4.2-.8.2h-2.5c-.4 0-.6-.1-.9-.2-.2-.2-.3-.4-.4-.9l-4.2-17.5-4.2 17.4c-.1.4-.2.7-.4.9-.2.2-.4.2-.9.2h-2.4zm35.2.9c-1.6 0-3.1-.2-4.6-.6-1.5-.4-2.7-.7-3.5-1.2-.5-.3-.9-.6-.9-.9-.1-.3-.2-.5-.2-.9v-1.9c0-.4.1-.7.5-.7.1 0 .3 0 .4.1.1 0 .4.1.6.2.9.4 1.8.8 2.9 1 1.1.2 2.1.4 3.1.4 1.6 0 2.9-.3 3.8-.9.9-.5 1.4-1.4 1.4-2.4 0-.7-.2-1.3-.7-1.8-.5-.5-1.3-1-2.7-1.4l-3.8-1.2c-1.9-.6-3.3-1.5-4.2-2.7-.9-1.2-1.4-2.5-1.4-3.8 0-1.1.2-2.1.7-2.9.5-.8 1.1-1.6 1.9-2.2.8-.6 1.6-1.1 2.6-1.4 1-.3 2-.5 3.1-.5.5 0 1.1 0 1.7.1.6.1 1.1.2 1.6.3.5.1.9.2 1.4.4.5.2.8.3 1.1.5.4.2.6.4.8.7.1.2.2.5.2.9v1.8c0 .4-.1.7-.5.7-.2 0-.5-.1-.8-.3-1.3-.6-2.7-.9-4.4-.9-1.5 0-2.7.3-3.5.8-.8.5-1.2 1.3-1.2 2.3 0 .7.2 1.4.7 1.9.5.5 1.4 1 2.8 1.5l3.7 1.2c1.9.6 3.2 1.4 4.1 2.5.9 1.1 1.3 2.3 1.3 3.6 0 1.1-.2 2.2-.7 3-.5.9-1.1 1.6-2 2.2-.8.6-1.8 1.1-2.9 1.4-1.3.4-2.6.6-4 .6z"/>
        <path fill="#FF9900" d="M90.4 92.5c-10.8 7.3-26.4 11.2-39.8 11.2-18.8 0-35.8-7-48.6-18.6-1-.9-.1-2.2 1.1-1.5 13.8 8.1 30.9 12.9 48.5 12.9 11.9 0 25-2.5 37.1-7.6 1.8-.8 3.3 1.2 1.7 2.2z"/>
        <path fill="#FF9900" d="M94.7 87.3c-1.4-1.8-9.1-.8-12.6-.4-1 .1-1.2-.8-.3-1.5 6.1-4.3 16.2-3 17.4-1.6 1.2 1.5-.3 11.7-6.1 16.5-.9.7-1.7.3-1.3-.6 1.3-3.3 4.3-10.6 2.9-12.4z"/>
      </svg>
    ),
  },
  {
    name: "Snowflake",
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
    name: "Azure Data Eng",
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
    name: "GCP Data Eng",
    href: "/courses/professionalCourses/dataEngineering/gcp-gcs",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <path fill="#EA4335" d="M80.6 40.6l8.4-8.4-.6-3.2C75.2 16.3 60.3 10 44.8 10 20.2 10 0 30.2 0 54.8c.6-0.4 1.3-.8 2.1-.8l28.2-4.7s1.4-2.3 2.1-2.2c6.3-6.9 15.1-10.7 24.4-10.7 6.8 0 13.3 2.4 18.4 6.6l5.4-2.4z"/>
        <path fill="#4285F4" d="M89.7 32.2c-8.2-7.5-19.1-12.2-30.9-12.2-18.7 0-35 12.3-40.6 29.4l14.2 2.2c3.1-8.7 11.3-14.9 20.8-15.3l36.5-4.1z"/>
        <path fill="#34A853" d="M89 89.6c-6.8 6.3-16.1 10.4-26 10.4-15.4 0-28.7-9.5-34.4-23.2l-27.5 4.6C8.8 101.2 25.5 118 46.3 118c13.4 0 25.2-5.2 33.9-13.7l8.8-14.7z"/>
        <path fill="#FBBC05" d="M28.6 77.2c-1.9-5.6-3-11.5-3-17.7 0-5.8 1-11.4 2.8-16.7L3.8 40.5C1.4 46.2 0 52.4 0 58.9c0 7.2 1.7 14 4.6 20.1l24-1.8z"/>
        <path fill="#4285F4" d="M128 64c0-3.3-.3-6.5-.8-9.7H64v18.4h35.9c-1.5 8-6.3 14.8-13.3 19.3l20.9 16.3C119.4 97.9 128 82.1 128 64z"/>
      </svg>
    ),
  },
  {
    name: "Power BI",
    href: "/courses/powerbi-beginner-course",
    svgIcon: (
      <svg viewBox="0 0 32 32" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#F2C811"/>
        <rect x="4" y="18" width="5" height="10" rx="1" fill="#1C1C1C"/>
        <rect x="13" y="11" width="5" height="17" rx="1" fill="#1C1C1C"/>
        <rect x="22" y="4" width="5" height="24" rx="1" fill="#1C1C1C" opacity="0.8"/>
      </svg>
    ),
  },
]
 
/* ─── Skills Switcher ─────────────────────────────────────────────────────────── */
function SkillsSwitcher() {
  const [tab, setTab] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('skillsTab') || 'beginner'
    }
    return 'beginner'
  })
  const skills = tab === "beginner" ? beginnerSkills : professionalSkills
 
  const handleTabChange = (t) => {
    setTab(t)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('skillsTab', t)
    }
  }
 
  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-10 md:p-14">
          <h2 className="text-5xl font-bold text-center mb-3 text-gray-900">Explore Our Courses</h2>
          <p className="text-center text-gray-500 mb-6 text-base">Choose your level and start learning today</p>
 
          {/* Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-full p-2 gap-1">
              {["beginner","professional"].map(t => (
                <button
                  key={t}
                  onClick={() => handleTabChange(t)}
                  className={`px-10 py-3 rounded-full text-base font-semibold transition-all duration-300 capitalize ${tab === t ? "bg-black text-white shadow-md" : "text-gray-600 hover:text-black"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
 
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
            >
              {skills.map((skill) => (
                <Link
                  key={skill.name}
                  href={skill.href}
                  className="group flex flex-col items-center justify-center p-7 rounded-2xl bg-white border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110 w-16 h-16 flex items-center justify-center [&>svg]:w-16 [&>svg]:h-16 [&>img]:w-16 [&>img]:h-16 [&>img]:object-contain">
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
const careerSupport = [
  { icon: Briefcase, title: 'IT Career Guidance', description: 'Personalized guidance from industry experts to align your goals with real-world roles in IT.', href: '/it-career-guidance' },
  { icon: BookOpen, title: 'Basics to Advanced Learning', description: 'Step-by-step learning paths from foundational concepts to advanced tech stacks and real use cases.', href: '/basics-to-advanced-learning' },
  { icon: Code2, title: 'Hands-On Coding Exercises', description: 'Daily challenges and practice labs to build strong coding logic and practical development skills.', href: '/hands-on-coding-exercises' },
  { icon: FileText, title: 'Live Projects', description: 'Build real-world applications with mentorship support to strengthen your portfolio and confidence.', href: '/live-projects' },
  { icon: UserCircle2, title: 'Resume Preparation', description: 'Get help crafting a standout, recruiter-friendly resume tailored for your desired job roles.', href: '/resume-preparation' },
  { icon: ClipboardCheck, title: 'Interview Preparation', description: 'Mock interviews, HR tips, and technical assessments to boost your readiness and confidence.', href: '/interview-preparation' },
]
 
/* ─── Main Page ──────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const router = useRouter()
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
    <main className="text-gray-800">
 
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
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
            >
              <div className="bg-gradient-to-r from-[#1a3c6e] to-[#0e2a50] px-8 py-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-5 text-white/70 hover:text-white text-3xl font-light leading-none"
                >×</button>
                <h3 className="text-white text-xl font-bold">Request a Call Back</h3>
                <p className="text-blue-200 text-sm mt-1">Our expert will reach out within 24 hours</p>
              </div>
 
              <div className="px-8 py-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h4>
                    <p className="text-gray-500 text-sm">We'll be in touch shortly. Thank you for reaching out.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Full Name</label>
                      <input
                        type="text" placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData(p => ({...p, name: e.target.value}))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
                      <input
                        type="email" placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData(p => ({...p, email: e.target.value}))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number</label>
                      <input
                        type="tel" placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData(p => ({...p, phone: e.target.value}))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Message (Optional)</label>
                      <textarea
                        placeholder="Tell us what you're looking for..."
                        value={formData.message}
                        onChange={e => setFormData(p => ({...p, message: e.target.value}))}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all resize-none"
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="w-full py-3.5 bg-gradient-to-r from-[#c9a227] to-[#e8bc30] text-[#1a1a00] font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-sm"
                    >
                      Request My Call Back →
                    </button>
                    <p className="text-center text-xs text-gray-400">No spam, ever. We respect your privacy.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* ── Hero ── */}
      <ScrollReveal>
        <section className="relative flex items-center justify-center overflow-hidden bg-white text-black min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-white" />
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 900" fill="none">
            <line x1="200" y1="200" x2="500" y2="350" stroke="#000" strokeWidth="0.5" />
            <line x1="500" y1="350" x2="800" y2="200" stroke="#000" strokeWidth="0.5" />
            <line x1="800" y1="200" x2="1100" y2="350" stroke="#000" strokeWidth="0.5" />
            <line x1="200" y1="200" x2="500" y2="600" stroke="#000" strokeWidth="0.5" />
            <line x1="500" y1="350" x2="800" y2="600" stroke="#000" strokeWidth="0.5" />
            <line x1="800" y1="200" x2="1100" y2="600" stroke="#000" strokeWidth="0.5" />
            {[[200,200],[500,350],[800,200],[1100,350],[500,600],[800,700],[1100,600],[300,500],[1000,500]].map(([cx,cy],i)=>(
              <circle key={i} cx={cx} cy={cy} r="4" fill="#000" opacity="0.3"/>
            ))}
          </svg>
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-black">
              Empowering Careers with AI + Real-Time Experience
            </h1>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
              TINITIATE provides job-ready IT training, AI development, cloud solutions & real-world consulting.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              Get Started
            </button>
          </div>
        </section>
      </ScrollReveal>
 
      {/* ── Welcome to Tinitiate + Callback Card ── */}
      <ScrollReveal>
        <section className="py-12 px-4 md:px-10 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-start">
 
              {/* Left — Welcome Text */}
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">About Us</span>
                <h2 className="text-5xl font-extrabold text-gray-900 mb-10 leading-tight">
                  Welcome to <span className="text-[#1a3c6e]">Tinitiate Trainings</span>
                </h2>
                <div className="space-y-6 text-gray-600 text-[16px] leading-relaxed">
                  <p>
                    <strong className="text-gray-900">TINITIATE</strong> is a leading IT consulting, development and training company, dedicated to empowering businesses with cutting-edge technology solutions and high-quality professional training. Our vision is to bridge the gap between industry demands and individual potential — helping learners and enterprises grow together.
                  </p>
                  <p>
                    With a highly experienced team carrying years of deep expertise in IT services, database management, and cloud computing, we craft tailored solutions that meet the evolving demands of enterprises worldwide — from ambitious startups to established global corporations. Every engagement is backed by real-world experience and a passion for measurable outcomes.
                  </p>
                  <p>
                    Our commitment goes beyond training. We partner with our learners through every step of their journey — delivering real-world skills, actionable insights, and the career momentum needed to thrive in today's rapidly changing digital landscape. With TINITIATE, your next career breakthrough starts here.
                  </p>
                </div>
              </div>
 
              {/* Right — Expert Card */}
              <div className="bg-gradient-to-br from-[#1a3c6e] to-[#0e2a50] rounded-3xl p-10 text-white shadow-2xl">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
                    Available Now
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Talk to an Expert</h3>
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
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full py-5 bg-gradient-to-r from-[#c9a227] to-[#e8bc30] text-[#1a1a00] font-bold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-200 text-lg"
                >
                  Get Started — Request a Call Back
                </button>
                <p className="text-center text-blue-300 text-sm mt-4">Our team responds within 24 hours</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
 
      {/* ── Course Slider ── */}
      <ScrollReveal>
        <CourseSlider />
      </ScrollReveal>

      {/* ── Why Choose TINITIATE ── */}
      <ScrollReveal>
        <section className="py-12 px-6 md:px-16 bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto">

            {/* Top label */}
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227] mb-4">Why Choose Us</span>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="text-5xl md:text-6xl font-black text-[#0e2a50] leading-[1.05] max-w-2xl">
                  Where Real Expertise<br />Meets Your Ambition
                </h2>
                <p className="text-gray-500 text-lg max-w-sm leading-relaxed md:text-right">
                  Not just a training institute — a launchpad engineered for career breakthroughs.
                </p>
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-[#c9a227] via-gray-200 to-transparent" />
            </div>

            {/* Two-column layout */}
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Left — bold callout */}
              <div>
                <div className="relative">
                  <div className="absolute -left-6 top-0 w-1.5 h-full bg-[#c9a227] rounded-full" />
                  <p className="text-2xl font-bold text-gray-900 leading-snug pl-4">
                    With <span className="text-[#0e2a50]">15+ years of hands-on IT experience</span>, our training isn't just theory — it's real-time knowledge paired with live projects, bonus technologies, and business domain immersion.
                  </p>
                </div>

                <div className="mt-14 space-y-10">
                  {[
                    { label: "Expert Faculty", detail: "Deep industry background, not just classroom instructors — our mentors have shipped real products." },
                    { label: "Structured Path", detail: "From fundamentals to advanced architecture, every step is deliberate and career-mapped." },
                    { label: "Business Domain Training", detail: "Go beyond code. Understand the industry you'll work in — banking, logistics, healthcare, and more." },
                    { label: "Bonus Technologies", detail: "We don't stop at the syllabus. Get exposure to adjacent tools that give you an edge in interviews." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group">
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
              <div className="bg-[#0e2a50] rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
                <div className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-[#c9a227]/10" />

                <div className="relative z-10">
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#c9a227] mb-4">Development Services</span>
                  <h3 className="text-3xl font-black leading-snug mb-4">
                    Full-Spectrum Tech Solutions
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed mb-10">
                    From scalable backend systems to robust data pipelines and mobile apps, TINITIATE offers development services tailored to modern business needs.
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
        <section className="py-12 px-4 md:px-10 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-white" />
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="xMidYMid slice">
            <line x1="100" y1="100" x2="400" y2="250" stroke="#000" strokeWidth="0.6" />
            <line x1="400" y1="250" x2="700" y2="100" stroke="#000" strokeWidth="0.6" />
            <line x1="700" y1="100" x2="1000" y2="250" stroke="#000" strokeWidth="0.6" />
            <line x1="1000" y1="250" x2="1340" y2="100" stroke="#000" strokeWidth="0.6" />
            <line x1="100" y1="100" x2="400" y2="500" stroke="#000" strokeWidth="0.6" />
            <line x1="400" y1="250" x2="700" y2="500" stroke="#000" strokeWidth="0.6" />
            <line x1="700" y1="100" x2="1000" y2="500" stroke="#000" strokeWidth="0.6" />
            <line x1="1000" y1="250" x2="1340" y2="500" stroke="#000" strokeWidth="0.6" />
            {[[100,100],[400,250],[700,100],[1000,250],[1340,100],[400,500],[700,400],[1000,500],[1340,400],[250,380],[850,300]].map(([cx,cy],i)=>(
              <circle key={i} cx={cx} cy={cy} r="4" fill="#000" opacity="0.25"/>
            ))}
          </svg>
 
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                What Sets Us Apart
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                Engineered for Career Transformation
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mt-5 rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
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
                <div key={i} className="group relative bg-white/70 backdrop-blur-sm hover:bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-xl rounded-2xl p-10 transition-all duration-300">
                  <div className="text-8xl font-black text-black/5 absolute top-4 right-6 select-none group-hover:text-yellow-400/20 transition-all leading-none">{card.num}</div>
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
 
      {/* ── Industries ── */}
      <ScrollReveal>
        <section className="py-12 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-semibold text-gray-900">Business Domains and Industries We Serve</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">We train students understand the business problems and help build scalable solutions across multiple industries with innovation and precision</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {name:"Retail",icon:Code2},{name:"E-Commerce",icon:ShoppingCart},
                {name:"Insurance",icon:ShieldCheck},{name:"Logistics",icon:Truck},
                {name:"Travel",icon:Plane},{name:"Edu Tech",icon:BookOpen},
                {name:"Health Care",icon:Hospital},{name:"Pharmaceutical",icon:Factory},
                {name:"CRM",icon:Hospital},{name:"Manufacturing",icon:Factory},
                {name:"Finance",icon:Hospital}, {name:"Wealth management",icon:Hospital}, 
              ].map(({name,icon:Icon})=>(
                <div key={name} className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 mb-4 group-hover:bg-blue-50 transition">
                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition"/>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">{name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
 
      {/* ── Career Support ── */}
      <ScrollReveal>
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Career Support</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {careerSupport.map(({icon:Icon,title,description,href})=>(
                <div key={title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center text-center">
                  <div className="mb-4 bg-blue-100 p-3 rounded-full">
                    <Icon className="w-8 h-8 text-blue-700"/>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-700">
                    <button onClick={()=>router.push(href)}>{title}</button>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
 
      {/* ── CTA / Talk to Expert ── */}
      <section className="py-12 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-white" />
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="xMidYMid slice">
          <line x1="100" y1="100" x2="400" y2="250" stroke="#000" strokeWidth="0.6" />
          <line x1="400" y1="250" x2="700" y2="100" stroke="#000" strokeWidth="0.6" />
          <line x1="700" y1="100" x2="1000" y2="250" stroke="#000" strokeWidth="0.6" />
          <line x1="1000" y1="250" x2="1340" y2="100" stroke="#000" strokeWidth="0.6" />
          <line x1="100" y1="100" x2="400" y2="500" stroke="#000" strokeWidth="0.6" />
          <line x1="400" y1="250" x2="700" y2="500" stroke="#000" strokeWidth="0.6" />
          <line x1="700" y1="100" x2="1000" y2="500" stroke="#000" strokeWidth="0.6" />
          <line x1="1000" y1="250" x2="1340" y2="500" stroke="#000" strokeWidth="0.6" />
          {[[100,100],[400,250],[700,100],[1000,250],[1340,100],[400,500],[700,400],[1000,500],[1340,400],[250,380],[850,300]].map(([cx,cy],i)=>(
            <circle key={i} cx={cx} cy={cy} r="4" fill="#000" opacity="0.25"/>
          ))}
        </svg>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Got questions about how the training works? We're here to help.
          </h2>
          <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Join our training programs or consult with us for IT development and cloud solutions tailored for startups and enterprises.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Talk to our Expert
          </button>
        </div>
      </section>
 
    </main>
  )
}