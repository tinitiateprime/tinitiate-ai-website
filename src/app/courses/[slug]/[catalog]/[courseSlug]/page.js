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
import * as BS from "react-icons/bs"

import {
  FaChalkboardTeacher,
  FaCode,
  FaBriefcase,
  FaUserTie,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa"

// --- Brand colors for icons (extend anytime) ---
const brandColors = {
  SiPython: "#3776AB",
  SiReact: "#61DAFB",
  SiNextdotjs: "#000000",
  SiExpress: "#000000",
  SiAmazonaws: "#FF9900",
  SiMicrosoft: "#0078D4",
  SiDocker: "#2496ED",
  SiKubernetes: "#326CE5",
  SiLinux: "#FCC624",
  SiGithub: "#181717",
  SiGit: "#F05032",
  SiAngular: "#DD0031",
  SiJavascript: "#F7DF1E",
  SiTypescript: "#3178C6",
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
  SiFlask: "#000000",
  SiGooglecloud: "#4285F4",
  SiFastapi: "#009688",
  SiLangchain: "#1C3C3C",
  SiHuggingface: "#FFCC4D",
  SiOpenai: "#412991",
  SiAmazonredshift:"#5828b0",

  // VSC (VS Code icon pack)
  VscAzureDevops: "#0078D7",
  FaAws:"#FF9900",
  FaJava:"#ec7607",
  SiAmazons3:"#0f692d",
  SiAwsamplify:"#18be2e"
}

// --- Aliases to tolerate friendly names / typos ---
const ICON_ALIASES = {
  // Cloud
  aws: "SiAmazonaws",
  amazon: "SiAmazonaws",
  "amazon-aws": "SiAmazonaws",
  azure: "SiMicrosoft",
  "microsoft-azure": "SiMicrosoft",
  gcp: "SiGooglecloud",
  "google-cloud": "SiGooglecloud",
  "google-cloud-platform": "SiGooglecloud",

  // Langs/FE
  js: "SiJavascript",
  javascript: "SiJavascript",
  ts: "SiTypescript",
  typescript: "SiTypescript",
  next: "SiNextdotjs",
  reactjs: "SiReact",
  react: "SiReact",
  angularjs: "SiAngular",
  angular: "SiAngular",
  html: "SiHtml5",
  css: "SiCss3",

  // Backend
  node: "SiNodedotjs",
  nodejs: "SiNodedotjs",
  "node-dot-js": "SiNodedotjs",
  express: "SiExpress",
  flask: "SiFlask",
  fastapi: "SiFastapi",
  django: "SiDjango",

  // Databases
  "mysql-server": "SiMysql",
  mysql: "SiMysql",
  postgres: "SiPostgresql",
  postgresql: "SiPostgresql",
  "sql-server": "SiMicrosoftsqlserver",
  mssql: "SiMicrosoftsqlserver",
  "oracle-db": "SiOracle",
  oracle: "SiOracle",

  // BI/Tools
  "power-bi": "SiPowerbi",
  powerbi: "SiPowerbi",
  "tableau-software": "SiTableau",
  tableau: "SiTableau",

  // AI / LLMs
  langchain: "SiLangchain",
  huggingface: "SiHuggingface",
  "hugging-face": "SiHuggingface",
  gpt: "SiOpenai",
  openai: "SiOpenai",

  // DevOps label -> icon
  "azure-devops": "VscAzureDevops",
  azuredevops: "VscAzureDevops",
}

function resolveIconName(name) {
  if (!name || typeof name !== "string") return null
  const lowered = name.toLowerCase()
  return ICON_ALIASES[lowered] || ICON_ALIASES[name] || name
}

function getIconData(name) {
  if (!name) return { Component: null, color: null }
  const resolved = resolveIconName(name)

  const Component =
    SI[resolved] || DI[resolved] || FA[resolved] || FI[resolved] || VSC[resolved] || BI[resolved] || BS[resolved] || null

  const color = brandColors[resolved] || "#2563EB"
  return { Component, color }
}

export default function CourseDetailPage() {
  const { catalog, courseSlug  } = useParams()
  const router = useRouter()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      try {
        // ✅ your JSON path: public/courses/professionalCourses/<catalog>.json
        const res = await fetch(`/courses/professionalCourses/${catalog}.json`, {
          cache: "no-store",
        })
        if (!res.ok) throw new Error(`Failed to load ${catalog}.json`)

        const data = await res.json()

        // Expecting the file to be an array of courses:
        // [ { slug: "...", ... }, ... ]
        const found = Array.isArray(data) ? data.find((c) => c.slug  === courseSlug ) : null

        if (!found) return router.replace("/courses/coming-soon")
        if (!cancelled) setCourse(found)
      } catch (e) {
        console.error(e)
       router.replace("/courses/coming-soon")
      }
    })()

    return () => {
      cancelled = true
    }
  }, [catalog, courseSlug , router])

  const { Component: CourseIcon, color: iconColor } = useMemo(
    () => getIconData(course?.icon),
    [course?.icon]
  )

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-gray-600 text-lg bg-white">
        Loading course...
      </div>
    )
  }

  return (
    <main className="text-gray-800 w-full bg-white">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-blue-100 to-white min-h-[50vh] flex items-center px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full py-16">
          <div className="relative w-full h-60 md:h-64 flex items-center justify-center">
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
              <li>
                <strong>📆 Duration:</strong> {course.duration}
              </li>
              <li>
                <strong>📊 Level:</strong> {course.level}
              </li>
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

      {/* Course Structure (Option A: section/module) */}
      {Array.isArray(course.courseStructure) && (
        <section className="py-14 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Structure</h2>

          <div className="space-y-6">
            {course.courseStructure.map((item, idx) => {
              if (item.type === "section") {
                return (
                  <div
                    key={idx}
                    className="rounded-xl px-4 py-3 bg-blue-50 border border-blue-100"
                  >
                    <h3 className="text-lg font-bold text-blue-900">{item.title}</h3>
                  </div>
                )
              }

              return (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.title}</h3>

                  <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                    {(item.topics || []).map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
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
                Understand real industry use-cases and domain-specific scenarios to gain business
                context.
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
