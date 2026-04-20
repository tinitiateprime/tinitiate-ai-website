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
  const isInView = useInView(ref, { margin: "-80px", amount: 0.15, once: false })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
      <svg viewBox="0 0 128 128" className="w-24 h-24">
        <rect width="128" height="128" rx="8" fill="#00618A"/>
        <path fill="#E48E00" d="M64 22c-22 0-38 5.5-38 12.5v9C26 50.5 42 56 64 56s38-5.5 38-12.5v-9C102 27.5 86 22 64 22z"/>
        <ellipse cx="64" cy="34.5" rx="38" ry="12.5" fill="#F5AB14"/>
        <path fill="#E48E00" d="M26 43.5v9C26 59.5 42 65 64 65s38-5.5 38-12.5v-9C102 50.5 86 56 64 56S26 50.5 26 43.5z"/>
        <path fill="#E48E00" d="M26 62.5v9C26 78.5 42 84 64 84s38-5.5 38-12.5v-9C102 69.5 86 75 64 75S26 69.5 26 62.5z"/>
        <path fill="#E48E00" d="M26 81.5v9C26 97.5 42 103 64 103s38-5.5 38-12.5v-9C102 88.5 86 94 64 94S26 88.5 26 81.5z"/>
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
      <svg viewBox="0 0 128 128" className="w-24 h-24">
        <defs>
          <linearGradient id="azSlider" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0072C6"/><stop offset="100%" stopColor="#00BCF2"/>
          </linearGradient>
        </defs>
        <rect width="128" height="128" rx="12" fill="url(#azSlider)"/>
        <path fill="white" d="M54 20L26 80h20l-10 32 52-68H62z"/>
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
      <svg viewBox="0 0 128 128" className="w-24 h-24">
        <rect width="128" height="128" rx="12" fill="#F2C811"/>
        <rect x="16" y="54" width="24" height="54" rx="5" fill="#2D2D2D" opacity="0.85"/>
        <rect x="52" y="34" width="24" height="74" rx="5" fill="#2D2D2D"/>
        <rect x="88" y="16" width="24" height="92" rx="5" fill="#2D2D2D" opacity="0.65"/>
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
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative"
          >
            {/* Fixed Arrow — Left */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Fixed Arrow — Right */}
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left — Content */}
              <div className="p-12 pl-16 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                  {course.label} Training
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 leading-snug">
                  {course.heading}
                </h3>
                <ul className="space-y-2 mb-8">
                  {course.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Career Outcomes</p>
                  <div className="flex flex-wrap gap-2">
                    {course.outcomes.map((o, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200">{o}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Logo Panel */}
              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-14 pr-16 min-h-[320px]">
                {course.svgIcon}
                <p className="mt-6 text-base font-bold text-gray-800 tracking-wide">{course.label}</p>
                <p className="text-xs text-gray-500 mt-1">Professional Training</p>

                {/* Dots */}
                <div className="flex gap-2 mt-10">
                  {courses.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-black" : "w-2 h-2 bg-gray-300 hover:bg-gray-500"}`}
                    />
                  ))}
                </div>

                {/* Timer bar */}
                <div className="w-full max-w-[180px] mt-4 h-0.5 bg-gray-200 rounded-full overflow-hidden">
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
    name: "SQL / MySQL",
    href: "/courses/sql-server-beginner-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="6" fill="#00618A"/>
        <ellipse cx="64" cy="32" rx="36" ry="11" fill="#F5AB14"/>
        <path fill="#E48E00" d="M28 32v10c0 6 16 11 36 11s36-5 36-11V32c0 6-16 11-36 11S28 38 28 32z"/>
        <path fill="#E48E00" d="M28 52v10c0 6 16 11 36 11s36-5 36-11V52c0 6-16 11-36 11S28 58 28 52z"/>
        <path fill="#E48E00" d="M28 72v10c0 6 16 11 36 11s36-5 36-11V72c0 6-16 11-36 11S28 78 28 72z"/>
        <path fill="#E48E00" d="M28 92v10c0 6 16 11 36 11s36-5 36-11V92c0 6-16 11-36 11S28 98 28 92z"/>
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
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#000"/>
        <path fill="white" d="M64 16C37.49 16 16 37.49 16 64s21.49 48 48 48c26.51 0 48-21.49 48-48S90.51 16 64 16zm23.27 68.12L47.35 48H40v32h7.41V56.29L82.95 88c-5.77 4.28-12.96 6.83-20.95 6.83-19.33 0-35-15.67-35-35s15.67-35 35-35 35 15.67 35 35c0 8-2.68 15.36-7.18 21.17l-2.55-5.88zM87.4 80h-7.37V48H87.4v32z"/>
      </svg>
    ),
  },
  {
    name: "Angular",
    href: "/courses/angular-beginner-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#B3B3B3" d="M63.81 1.468L8.986 21.17l8.277 72.34L63.81 119.73l46.547-26.22 8.277-72.34z"/>
        <path fill="#E0E0E0" d="M63.81 1.468v118.262l46.547-26.22 8.277-72.34z"/>
        <path fill="#DD0031" d="M63.81 22.958L28.963 107.42h12.997l6.957-17.374h29.906l6.957 17.374h12.997L63.81 22.958z"/>
        <path fill="#C3002F" d="M63.81 22.958v20.571l14.953 41.919H63.81v21.972h15.013l6.957 17.374h12.997L63.81 22.958z"/>
        <path fill="#fff" d="M63.81 57.752l-10.95 28.32h21.899z"/>
      </svg>
    ),
  },
  {
    name: "AWS Data Eng",
    href: "/courses/professionalCourses/dataEngineering/aws-s3",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="8" fill="#232F3E"/>
        <path fill="#FF9900" d="M40.6 75.8c0 1.2.1 2.2.4 2.9.3.7.7 1.5 1.2 2.3.2.3.3.6.3.9 0 .4-.2.8-.7 1.2l-2.4 1.6c-.3.2-.7.3-1 .3-.4 0-.8-.2-1.1-.5-1-1-1.7-2.2-2.3-3.6-1.3 1.6-3 2.9-5.1 3.9-2 1-4.3 1.5-6.8 1.5-3.6 0-6.4-1-8.5-3.1-2.1-2-3.1-4.7-3.1-8.1 0-3.6 1.3-6.6 3.9-8.9 2.6-2.3 6-3.4 10.4-3.4 1.5 0 2.9.1 4.4.4 1.5.3 3 .6 4.6 1v-2.9c0-3-.6-5.2-1.9-6.5-1.3-1.2-3.4-1.8-6.4-1.8-1.4 0-2.8.2-4.3.5-1.5.3-2.9.8-4.3 1.3-.6.3-1.1.4-1.4.4-.5 0-.7-.3-.7-1v-2.7c0-.5.1-.8.3-1 .2-.2.5-.4 1-.6 1.8-1 3.9-1.8 6.5-2.4 2.6-.7 5.3-1 8-1 6.1 0 10.5 1.4 13.2 4.1 2.7 2.7 4.1 6.9 4.1 12.5v16.5h.1zm-17.8 4c1.4 0 2.9-.3 4.4-.8 1.6-.5 3-1.4 4.1-2.6.8-1 1.4-2.1 1.8-3.4.3-1.3.5-2.8.5-4.6v-2.2c-1.2-.3-2.5-.5-3.8-.7-1.2-.2-2.5-.3-3.7-.3-2.6 0-4.5.5-5.8 1.5-1.3 1-1.9 2.5-1.9 4.5 0 1.8.5 3.2 1.4 4.1.9 1 2.2 1.5 4 1.5zM70 79.2c-.5 0-.9-.1-1.1-.3-.2-.2-.4-.6-.6-1.1L57.7 39.6c-.2-.6-.3-.9-.3-1.2 0-.4.2-.7.6-.7h3.9c.5 0 .9.1 1.1.3.2.2.4.6.6 1.1l6.4 25.2 5.9-25.2c.1-.6.3-.9.6-1.1.2-.2.6-.3 1-.3h3.2c.5 0 .9.1 1.2.3.2.2.4.6.5 1.1l6 25.5 6.5-25.5c.2-.6.4-.9.6-1.1.2-.2.5-.3 1-.3h3.6c.4 0 .6.2.6.7 0 .1 0 .3-.1.5-.1.2-.1.4-.2.7l-9.1 33c-.2.5-.4.9-.6 1.1-.2.2-.6.3-1.1.3h-3.4c-.5 0-.9-.1-1.2-.3-.2-.2-.4-.6-.5-1.2l-5.8-24.3-5.8 24.2c-.2.6-.3 1-.5 1.2-.2.2-.6.3-1.2.3H70zM109.2 82c-2.2 0-4.3-.3-6.4-.8-2.1-.5-3.7-1-4.9-1.7-.7-.4-1.2-.8-1.3-1.2-.2-.4-.3-.8-.3-1.2v-2.7c0-.6.2-.9.7-.9.2 0 .4 0 .6.1.2.1.5.2.8.3 1.2.6 2.5 1.1 4 1.4 1.5.3 2.9.5 4.3.5 2.3 0 4-.4 5.3-1.2 1.2-.8 1.9-1.9 1.9-3.3 0-1-.3-1.9-.9-2.6-.6-.7-1.8-1.3-3.7-2l-5.2-1.6c-2.6-.8-4.6-2.1-5.8-3.7-1.3-1.6-1.9-3.4-1.9-5.3 0-1.5.3-2.9 1-4 .7-1.2 1.5-2.2 2.6-3 1.1-.9 2.3-1.5 3.6-2 1.4-.4 2.8-.6 4.3-.6.8 0 1.5 0 2.3.1.8.1 1.5.2 2.2.4.7.2 1.3.3 1.9.6.6.2 1.2.4 1.5.6.5.3.9.6 1.1.9.2.3.3.7.3 1.2v2.5c0 .6-.2.9-.7.9-.3 0-.6-.1-1.1-.4-1.8-.8-3.8-1.2-6.1-1.2-2.1 0-3.7.4-4.8 1.1-1.2.7-1.7 1.8-1.7 3.2 0 1 .3 1.9 1 2.6.7.7 2 1.4 3.9 2.1l5.1 1.6c2.6.8 4.5 2 5.7 3.5 1.2 1.5 1.8 3.2 1.8 5 0 1.6-.3 3-1 4.2-.7 1.2-1.6 2.2-2.7 3.1-1.2.9-2.5 1.5-4.1 2-1.6.4-3.3.7-5.1.7z"/>
        <path fill="#FF9900" d="M117 95c-14.8 10-36.3 15.3-54.8 15.3-25.9 0-49.3-9.6-67-25.5-1.4-1.3-.2-3 1.5-2 19.1 11.1 42.6 17.8 66.9 17.8 16.4 0 34.5-3.4 51.1-10.5 2.5-1.1 4.6 1.6 2.3 3z"/>
        <path fill="#FF9900" d="M123 88c-1.9-2.4-12.5-1.1-17.3-.6-1.4.2-1.7-1.1-.4-2 8.4-5.9 22.3-4.2 23.9-2.2 1.6 2-.4 16-8.4 22.7-1.2 1-2.4.5-1.9-.9 1.9-4.5 6-14.6 4.1-17z"/>
      </svg>
    ),
  },
  {
    name: "Snowflake",
    href: "/courses/professionalCourses/dataEngineering/snowflake-data-platform-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12" fill="none">
        <rect width="128" height="128" rx="10" fill="#29B5E8"/>
        <path d="M64 14v100M14 64h100M27.5 27.5l73 73M100.5 27.5l-73 73" stroke="white" strokeWidth="9" strokeLinecap="round"/>
        <circle cx="64" cy="64" r="10" fill="white"/>
        <circle cx="64" cy="14" r="7" fill="white"/>
        <circle cx="64" cy="114" r="7" fill="white"/>
        <circle cx="14" cy="64" r="7" fill="white"/>
        <circle cx="114" cy="64" r="7" fill="white"/>
        <circle cx="27.5" cy="27.5" r="7" fill="white"/>
        <circle cx="100.5" cy="100.5" r="7" fill="white"/>
        <circle cx="100.5" cy="27.5" r="7" fill="white"/>
        <circle cx="27.5" cy="100.5" r="7" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Azure Data Eng",
    href: "/courses/professionalCourses/dataEngineering/azure-adls-gen2",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <defs>
          <linearGradient id="azDE" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0072C6"/><stop offset="100%" stopColor="#00BCF2"/>
          </linearGradient>
        </defs>
        <rect width="128" height="128" rx="10" fill="url(#azDE)"/>
        <path fill="white" d="M54 20L26 80h20l-10 32 52-68H76z"/>
      </svg>
    ),
  },
  {
    name: "GCP Data Eng",
    href: "/courses/professionalCourses/dataEngineering/gcp-gcs",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#fff"/>
        <path fill="#EA4335" d="M74.4 34.6L86.8 22.2C74.1 10.6 56.8 4.2 38 5.8 17.6 7.8 2.2 22 .4 42.4l15.3 2.3C17.7 28.6 30 18.3 44.5 16.7c11.2-1.2 21.6 2.3 29.9 9.9z"/>
        <path fill="#4285F4" d="M115.7 46h-15.3c1.8 7.7.8 15.9-2.9 23.1L109 80.7c8.5-12.1 11.3-27.7 6.7-34.7z"/>
        <path fill="#34A853" d="M38.5 103.3c11.2 1.2 22.1-1.8 30.8-8.1l-11.5-11.5c-5.1 3.5-11.5 5.3-18.1 4.6-14.5-1.6-26.8-11.9-28.8-28l-15.3 2.3C-1.6 85.4 13.8 100.8 38.5 103.3z"/>
        <path fill="#FBBC05" d="M97.6 69.1L86 57.5c-3.5 6.3-9.3 11-16.5 13l3.5 16c12.7-3.5 22.4-11.8 24.6-17.4z"/>
        <circle fill="#4285F4" cx="64" cy="60" r="18"/>
        <circle fill="white" cx="64" cy="60" r="10"/>
      </svg>
    ),
  },
  {
    name: "Power BI",
    href: "/courses/powerbi-beginner-course",
    svgIcon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#F2C811"/>
        <rect x="18" y="56" width="24" height="52" rx="5" fill="#2D2D2D" opacity="0.85"/>
        <rect x="52" y="36" width="24" height="72" rx="5" fill="#2D2D2D"/>
        <rect x="86" y="18" width="24" height="90" rx="5" fill="#2D2D2D" opacity="0.65"/>
      </svg>
    ),
  },
]

/* ─── Skills Switcher ─────────────────────────────────────────────────────────── */
function SkillsSwitcher() {
  const [tab, setTab] = useState("beginner")
  const skills = tab === "beginner" ? beginnerSkills : professionalSkills

  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">Explore Our Courses</h2>
        <p className="text-center text-gray-500 mb-10 text-sm">Choose your level and start learning today</p>

        {/* Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1.5 gap-1">
            {["beginner","professional"].map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 capitalize ${tab === t ? "bg-black text-white shadow-md" : "text-gray-600 hover:text-black"}`}
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          >
            {skills.map((skill) => (
              <Link
                key={skill.name}
                href={skill.href}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
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

  return (
    <main className="text-gray-800">

      {/* Hero */}
      <ScrollReveal>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-black pt-20">
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
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24 pt-10 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-black">
              Empowering Careers with AI + Real-Time Experience
            </h1>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
              TINITIATE provides job-ready IT training, AI development, cloud solutions & real-world consulting.
            </p>
            <Link href="/request-callback" className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-yellow-500 hover:text-black transition">
              Get Started
            </Link>n
          </div>
        </section>
      </ScrollReveal>

      {/* Why Choose TINITIATE */}
      <ScrollReveal>
        <section className="py-20 px-6 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose TINITIATE?</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon:Briefcase,title:"Industry Expert Trainers",desc:"Learn from professionals with real-time experience in top IT companies."},
              {icon:Code2,title:"Hands-On Project Learning",desc:"Build real-world projects that make your portfolio job-ready."},
              {icon:Brain,title:"AI Powered Learning",desc:"Smart learning system with AI-based feedback and tracking."},
              {icon:BookOpen,title:"Career Guidance",desc:"Personal mentorship and step-by-step career roadmap support."},
              {icon:ClipboardCheck,title:"Mock Interviews",desc:"Real interview practice sessions to improve confidence and performance."},
              {icon:UserCheck,title:"Placement Assistance",desc:"Resume building, referrals, and end-to-end job support."},
            ].map((item,i)=>{
              const Icon=item.icon
              return (
                <div key={i} className="group bg-gray-50 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 rounded-2xl p-6">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6"/>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* Course Slider */}
      <ScrollReveal>
        <CourseSlider />
      </ScrollReveal>

      {/* Skills Switcher */}
      <ScrollReveal>
        <SkillsSwitcher />
      </ScrollReveal>

      {/* Industries */}
      <ScrollReveal>
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900">Industries We Serve</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">We build scalable solutions across multiple industries with innovation and precision</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {name:"Technology",icon:Code2},{name:"E-Commerce",icon:ShoppingCart},
                {name:"Insurance",icon:ShieldCheck},{name:"Logistics",icon:Truck},
                {name:"Travel",icon:Plane},{name:"Education",icon:BookOpen},
                {name:"Hospital",icon:Hospital},{name:"Manufacturing",icon:Factory},
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

      {/* Career Support */}
      <ScrollReveal>
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Career Support</h2>
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

      {/* CTA */}
      <section className="py-20 px-6 bg-white border-t border-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Got questions about how the training works? We're here to help.
        </h2>
        <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
          Join our training programs or consult with us for IT development and cloud solutions tailored for startups and enterprises.
        </p>
        <Link href="/request-callback" className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
          Talk to our Expert
        </Link>
      </section>

    </main>
  )
}