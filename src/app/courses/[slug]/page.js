"use client"

import { useEffect, useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

// Simple Icons + fallbacks
import * as SI from "react-icons/si"
import * as DI from "react-icons/di"
import * as FA from "react-icons/fa"
import * as FI from "react-icons/fi"
import * as VSC from "react-icons/vsc"
import * as BI from "react-icons/bi"

import {
  FaChalkboardTeacher, FaCode, FaBriefcase, FaUserTie, FaProjectDiagram, FaTools,
} from "react-icons/fa"

// --- Brand colors for icons (extend anytime) ---
const brandColors = {
  SiPython: "#3776AB",
  SiReact: "#61DAFB",
  SiNextdotjs: "#000000",
  SiExpress: "#000000",
  SiAmazonaws: "#FF9900",
  SiMicrosoft: "#0078D4",        // fixed Azure (no SiMicrosoftazure)
  SiDocker: "#2496ED",
  SiKubernetes: "#326CE5",
  SiLinux: "#FCC624",
  SiGithub: "#181717",
  SiGit: "#F05032",
  SiAngular: "#DD0031",
  SiJavascript: "#F7DF1E",
  SiHtml5: "#E34F26",
  SiCss3: "#1572B6",
  SiJava: "#007396",
  SiSpring: "#6DB33F",
  SiDotnet: "#512BD4",
  SiNodedotjs: "#339933",
  SiMysql: "#4479A1",
  SiPostgresql: "#4169E1",
  SiMicrosoftsqlserver: "#CC2927",
  SiOracle: "#F80000",
  SiDjango: "#092E20",
  SiApachespark: "#E25A1C",
  SiApachekafka: "#231F20",
  SiPowerbi: "#F2C811",
  SiTableau: "#E97627",
  SiFlask: "#000000",            // added Flask
  SiGooglecloud: "#4285F4",      // added GCP
  SiFastapi: "#009688",          // added FastAPI
  SiLangchain: "#1C3C3C",   // dark green from LangChain brand
SiHuggingface: "#FFCC4D", // hugging face yellow
SiOpenai: "#412991",      // OpenAI purple
VscAzureDevops:"#000000"

}


// --- Aliases to tolerate friendly names / typos ---
const ICON_ALIASES = {
  // Cloud
  "aws": "SiAmazonaws",
  "amazon": "SiAmazonaws",
  "amazon-aws": "SiAmazonaws",
  "azure": "SiMicrosoft",        // No SiMicrosoftazure, use SiMicrosoft
  "microsoft-azure": "SiMicrosoft",
  "gcp": "SiGooglecloud",
  "google-cloud": "SiGooglecloud",
  "google-cloud-platform": "SiGooglecloud",

  // Langs/FE
  "js": "SiJavascript",
  "javascript": "SiJavascript",
  "ts": "SiTypescript",
  "typescript": "SiTypescript",
  "next": "SiNextdotjs",
  "reactjs": "SiReact",
  "react": "SiReact",
  "angularjs": "SiAngular",
  "angular": "SiAngular",
  "html": "SiHtml5",
  "css": "SiCss3",

  // Backend
  "node": "SiNodedotjs",
  "nodejs": "SiNodedotjs",
  "node-dot-js": "SiNodedotjs",
  "express": "SiExpress",
  "flask": "SiFlask",
  "fastapi": "SiFastapi",
  "django": "SiDjango",

  // Databases
  "mysql-server": "SiMysql",
  "mysql": "SiMysql",
  "postgres": "SiPostgresql",
  "postgresql": "SiPostgresql",
  "sql-server": "SiMicrosoftsqlserver",
  "mssql": "SiMicrosoftsqlserver",
  "oracle-db": "SiOracle",
  "oracle": "SiOracle",

  // BI/Tools
  "power-bi": "SiPowerbi",
  "powerbi": "SiPowerbi",
  "tableau-software": "SiTableau",
  "tableau": "SiTableau",

  // AI / LLMs
"langchain": "SiLangchain",
"huggingface": "SiHuggingface",
"hugging-face": "SiHuggingface",
"gpt": "SiOpenai",
"openai": "SiOpenai",
"Azure":"VscAzureDevops"
};


function resolveIconName(name) {
  if (!name || typeof name !== "string") return null
  const exact = ICON_ALIASES[name] || name
  const lowered = name.toLowerCase()
  return ICON_ALIASES[lowered] || exact
}

function getIconData(name) {
  if (!name) return { Component: null, color: null }
  const resolved = resolveIconName(name)
  const Component = SI[resolved] || DI[resolved] || FA[resolved] || FI[resolved] ||  VSC[resolved] ||
    BI[resolved] || null
  const color = brandColors[resolved] || "#3668d4" // Tailwind blue-600 fallback
  return { Component, color }
}

const COURSE_FEATURE_SECTIONS = {
  "artificial-intelligence-beginner-course": {
    eyebrow: "Program highlights",
    title: "Build Your AI Stack Layer by Layer",
    description:
      "A Voxr-inspired feature grid that turns this beginner course into a clear six-part roadmap, from core AI thinking to portfolio-ready implementation.",
    cards: [
      {
        badge: "Module 01",
        title: "AI Fundamentals",
        description:
          "Start with what AI is, how it evolved, and where intelligent systems create real value across products, automation, and decision-making.",
        icon: "FiCpu",
        tint: "#7dd3fc",
        note: "Concepts + use cases",
      },
      {
        badge: "Module 02",
        title: "Python + Math Core",
        description:
          "Use Python, NumPy, probability, and linear algebra as the practical base for model building instead of learning theory in isolation.",
        icon: "FiCode",
        tint: "#fbbf24",
        note: "Code-first foundation",
      },
      {
        badge: "Module 03",
        title: "Search and Reasoning",
        description:
          "Learn classical AI thinking with search trees, heuristics, constraint solving, and rule-based reasoning that still matter today.",
        icon: "FiGitBranch",
        tint: "#38bdf8",
        note: "Logic + problem solving",
      },
      {
        badge: "Module 04",
        title: "ML and Neural Networks",
        description:
          "Train your first models, understand evaluation, and move into neural network basics with guided deep learning exercises.",
        icon: "FiActivity",
        tint: "#60a5fa",
        note: "Hands-on model work",
      },
      {
        badge: "Module 05",
        title: "NLP, Vision, and Agents",
        description:
          "Explore language models, computer vision, generative AI, and agent-style systems so the course feels current and job-relevant.",
        icon: "FiMessageSquare",
        tint: "#34d399",
        note: "Modern AI workflows",
      },
      {
        badge: "Module 06",
        title: "Responsible AI Capstone",
        description:
          "Wrap with ethics, explainability, deployment basics, and a capstone project that gives you something credible to showcase.",
        icon: "FiShield",
        tint: "#f472b6",
        note: "Portfolio-ready finish",
      },
    ],
  },
}

const PROFESSIONAL_COURSE_REDIRECTS = {
  "react-beginner-course": "/training/professional-training/react-web-development",
  "nextjs-course": "/training/professional-training/nextjs-web-development",
  "angular-beginner-course": "/training/professional-training/angular-web-development",
  "powerbi-beginner-course": "/training/professional-training/visualization-course",
}

export default function CourseDetailPage() {
  const { slug } = useParams()
  const router = useRouter()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const redirectedHref = PROFESSIONAL_COURSE_REDIRECTS[slug]
        if (redirectedHref) {
          router.replace(redirectedHref)
          return
        }

        const res = await fetch("/courses/courses.json", { cache: "no-store" })
        if (!res.ok) throw new Error("Failed to load courses.json")
        const data = await res.json()
        const found = Array.isArray(data) ? data.find((c) => c.slug === slug) : null
        if (!found) return router.replace("/courses/coming-soon")
        if (!cancelled) setCourse(found)
      } catch (e) {
        console.error(e)
        router.replace("/courses/coming-soon")
      }
    })()
    return () => { cancelled = true }
  }, [slug, router])

  const { Component: CourseIcon, color: iconColor } = useMemo(
    () => getIconData(course?.icon),
    [course?.icon]
  )
  const featureSection = COURSE_FEATURE_SECTIONS[course?.slug] || null

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-gray-600 text-lg bg-white">
        Loading course...
      </div>
    )
  }

  return (
    <main className="text-gray-800 w-full bg-white ">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-blue-100 to-white min-h-[50vh] flex items-center px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full py-16">
          <div className="relative w-full h-60 md:h-64 flex items-center justify-center">
            {/* Uniform outer layer for icon/image */}
            <div className="flex items-center justify-center w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-white shadow-md">
              {CourseIcon ? (
                <CourseIcon
                  className="w-28 h-28 md:w-32 md:h-32 drop-shadow-sm"
                  style={{ color: iconColor }}
                  aria-hidden
                />
              ) : (
                <Image
                  src={course.image}
                  alt={course.title}
                  width={180}
                  height={180}
                  className="object-contain rounded-xl"
                />
              )}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-extrabold text-blue-600 mb-4">{course.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{course.description}</p>
            <ul className="space-y-2 text-sm text-gray-600 mb-4">
              <li><strong>Duration:</strong> {course.duration}</li>
              <li><strong>Level:</strong> {course.level}</li>
            </ul>

            <Link
              href={`/request-callback?course=${encodeURIComponent(course.title)}`}
              className="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {featureSection && (
        <section className="bg-[#08050f] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.16),transparent_28%),linear-gradient(180deg,#090611_0%,#0d0817_48%,#090611_100%)] p-8 shadow-[0_32px_90px_rgba(8,5,15,0.45)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-100/80 backdrop-blur">
                {featureSection.eyebrow}
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {featureSection.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {featureSection.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featureSection.cards.map((card) => {
                const { Component: CardIcon, color: fallbackColor } = getIconData(card.icon)
                const cardIconColor = card.tint || fallbackColor

                return (
                  <article
                    key={card.title}
                    className="group rounded-[1.75rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.44)_0%,rgba(255,255,255,0.08)_38%,rgba(125,211,252,0.18)_72%,rgba(244,114,182,0.28)_100%)] p-px transition duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-full overflow-hidden rounded-[calc(1.75rem-1px)] border border-white/8 bg-[linear-gradient(180deg,rgba(12,10,20,0.96)_0%,rgba(18,16,28,0.9)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
                      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_70%)] opacity-50" />

                      <div className="relative flex items-start justify-between gap-4">
                        <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-200/80">
                          {card.badge}
                        </span>
                        {CardIcon && (
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                            <CardIcon
                              className="h-5 w-5"
                              style={{ color: cardIconColor }}
                              aria-hidden
                            />
                          </div>
                        )}
                      </div>

                      <h3 className="relative mt-8 text-xl font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="relative mt-3 text-sm leading-7 text-slate-300">
                        {card.description}
                      </p>
                      <p className="relative mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-100/70">
                        {card.note}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Course Structure */}
      {course.courseStructure && (
        <section className="py-14 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Structure</h2>
          <div className="space-y-6">
            {course.courseStructure.map((section, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{section.title}</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  {section.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Offerings */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaCode className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">Coding Tutorials</p>
              <p className="text-sm text-gray-600 mt-2">
                Hands-on coding practices to build foundational and advanced programming skills.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaProjectDiagram className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">Live Projects</p>
              <p className="text-sm text-gray-600 mt-2">
                Work on real-world projects to showcase your expertise and enhance your portfolio.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaBriefcase className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">Business Knowledge</p>
              <p className="text-sm text-gray-600 mt-2">
                Understand real industry use-cases and domain-specific scenarios to gain business context.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaUserTie className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">Interview Preparation</p>
              <p className="text-sm text-gray-600 mt-2">
                Get mock interview sessions and tips to boost your confidence and success rate.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaChalkboardTeacher className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">1:1 Mentorship</p>
              <p className="text-sm text-gray-600 mt-2">
                Personal guidance from industry experts to help shape your learning journey.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
              <FaTools className="text-3xl text-blue-600 mb-3" />
              <p className="text-gray-800 font-semibold">Placement Assistance</p>
              <p className="text-sm text-gray-600 mt-2">
                Support with resume building, job search, and application to relevant roles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
