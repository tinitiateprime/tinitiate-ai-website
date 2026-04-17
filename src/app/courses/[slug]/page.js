// "use client"

// import { useEffect, useState } from 'react'
// import { useParams, notFound } from 'next/navigation'
// import Image from 'next/image'
// import { FaChalkboardTeacher, FaCode, FaBriefcase, FaUserTie, FaProjectDiagram, FaTools } from 'react-icons/fa'

// export default function CourseDetailPage() {
//   const { slug } = useParams()
//   const [course, setCourse] = useState(null)

//   useEffect(() => {
//     fetch('/courses/courses.json')
//       .then(res => res.json())
//       .then(data => {
//         const found = data.find((item) => item.slug === slug)
//         if (!found) return notFound()
//         setCourse(found)
//       })
//   }, [slug])

//   if (!course) {
//     return (
//       <div className="flex justify-center items-center min-h-[50vh] text-gray-600 text-lg bg-white">
//         Loading course...
//       </div>
//     )
//   }

//   return (
//  <main className="text-gray-800 w-full bg-white px-2 sm:px-4 md:px-8">
//       {/* Hero Section */}
//  <section className="w-full bg-gradient-to-br from-blue-100 to-white min-h-[50vh] flex items-center px-6 ">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full py-16">
//           <div className="relative w-full h-60 md:h-64">
//             <Image
//               src={course.image}
//               alt={course.title}
//               fill
//               className="object-contain rounded-xl shadow-md"
//             />
//           </div>
//           <div>
//             <h1 className="text-4xl font-extrabold text-blue-600 mb-4">{course.title}</h1>
//             <p className="text-lg text-gray-700 mb-4">{course.description}</p>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><strong>📆 Duration:</strong> {course.duration}</li>
//               <li><strong>📊 Level:</strong> {course.level}</li>
//             </ul>
//             <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//               Enroll Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Learnings */}
//       <section className="py-14 px-6 max-w-6xl mx-auto bg-white ">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Learn</h2>
//         <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
//           {course.learnings.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//       </section>

//       {/* Outcomes */}
//       {/* <section className="py-14 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Outcomes</h2>
//           <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
//             {course.outcomes.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </section> */}

//       {/* Course Offerings */}
//       {/* <section className="py-14 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
//           <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
//             {course.offerings.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </section> */}

//       {/* Offerings - Static with FontAwesome */}
//       <section className="py-14 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-900 mb-10 ">What We Offer</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaCode className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Coding Tutorials</p>
//               <p className="text-sm text-gray-600 mt-2">Hands-on coding practices to build foundational and advanced programming skills.</p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaProjectDiagram className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Live Projects</p>
//               <p className="text-sm text-gray-600 mt-2">Work on real-world projects to showcase your expertise and enhance your portfolio.</p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaBriefcase className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Business Knowledge</p>
//               <p className="text-sm text-gray-600 mt-2">Understand real industry use-cases and domain-specific scenarios to gain business context.</p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaUserTie className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Interview Preparation</p>
//               <p className="text-sm text-gray-600 mt-2">Get mock interview sessions and tips to boost your confidence and success rate.</p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaChalkboardTeacher className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">1:1 Mentorship</p>
//               <p className="text-sm text-gray-600 mt-2">Personal guidance from industry experts to help shape your learning journey.</p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaTools className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Placement Assistance</p>
//               <p className="text-sm text-gray-600 mt-2">Support with resume building, job search, and application to relevant roles.</p>
//             </div>
//           </div>
//         </div>
//       </section>

      
//     </main>
//   )
// }








// "use client"

// import { useEffect, useState } from 'react'
// import { useParams, notFound } from 'next/navigation'
// import Image from 'next/image'
// import Link from 'next/link'

// import {
//   FaChalkboardTeacher,
//   FaCode,
//   FaBriefcase,
//   FaUserTie,
//   FaProjectDiagram,
//   FaTools,
  
// } from 'react-icons/fa'

// export default function CourseDetailPage() {
//   const { slug } = useParams()
//   const [course, setCourse] = useState(null)

//   useEffect(() => {
//     fetch('/courses/courses.json')
//       .then(res => res.json())
//       .then(data => {
//         const found = data.find((item) => item.slug === slug)
//         if (!found) return notFound()
//         setCourse(found)
//       })
//   }, [slug])

//   if (!course) {
//     return (
//       <div className="flex justify-center items-center min-h-[50vh] text-gray-600 text-lg bg-white">
//         Loading course...
//       </div>
//     )
//   }

//   return (
//     <main className="text-gray-800 w-full bg-white px-2 sm:px-4 md:px-8">
//       {/* Hero Section */}
//       <section className="w-full bg-gradient-to-br from-blue-100 to-white min-h-[50vh] flex items-center px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full py-16">
//           <div className="relative w-full h-60 md:h-64">
//             <Image
//               src={course.image}
//               alt={course.title}
//               fill
//               className="object-contain rounded-xl shadow-md"
//             />
//           </div>
//           <div>
//             <h1 className="text-4xl font-extrabold text-blue-600 mb-4">{course.title}</h1>
//             <p className="text-lg text-gray-700 mb-4">{course.description}</p>
//             <ul className="space-y-2 text-sm text-gray-600 mb-4">
//               <li><strong>📆 Duration:</strong> {course.duration}</li>
//               <li><strong>📊 Level:</strong> {course.level}</li>
//             </ul>
//             {/* <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//               Enroll Now
//             </button> */}

//     <Link
//   href={`/request-callback?course=${encodeURIComponent(course.title)}`}
//   className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//   Enroll Now
// </Link>
//           </div>
//         </div>
//       </section>

//       {/* Learnings */}
//       {/* <section className="py-14 px-6 max-w-6xl mx-auto bg-white">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Learn</h2>
//         <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
//           {course.learnings.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//       </section> */}

//       {/* Course Structure */}
//       {course.courseStructure && (
//         <section className="py-14 px-6 max-w-6xl mx-auto bg-white">
//           <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Structure</h2>
//           <div className="space-y-6">
//             {course.courseStructure.map((section, idx) => (
//               <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
//                 <h3 className="text-lg font-semibold text-blue-700 mb-2">{section.title}</h3>
//                 <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
//                   {section.topics.map((topic, index) => (
//                     <li key={index}>{topic}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Offerings - Static with FontAwesome */}
//       <section className="py-14 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-900 mb-10">What We Offer</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaCode className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Coding Tutorials</p>
//               <p className="text-sm text-gray-600 mt-2">
//                 Hands-on coding practices to build foundational and advanced programming skills.
//               </p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaProjectDiagram className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Live Projects</p>
//               <p className="text-sm text-gray-600 mt-2">
//                 Work on real-world projects to showcase your expertise and enhance your portfolio.
//               </p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaBriefcase className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Business Knowledge</p>
//               <p className="text-sm text-gray-600 mt-2">
//                 Understand real industry use-cases and domain-specific scenarios to gain business context.
//               </p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaUserTie className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Interview Preparation</p>
//               <p className="text-sm text-gray-600 mt-2">
//                 Get mock interview sessions and tips to boost your confidence and success rate.
//               </p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaChalkboardTeacher className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">1:1 Mentorship</p>
//               <p className="text-sm text-gray-600 mt-2">
//                 Personal guidance from industry experts to help shape your learning journey.
//               </p>
//             </div>
//             <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-md">
//               <FaTools className="text-3xl text-blue-600 mb-3" />
//               <p className="text-gray-800 font-semibold">Placement Assistance</p>
//               <p className="text-sm text-gray-600 mt-2">
//                 Support with resume building, job search, and application to relevant roles.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }








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
  SiMicrosoft: "#0078D4",        // ✅ fixed Azure (no SiMicrosoftazure)
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
  SiFlask: "#000000",            // ✅ added Flask
  SiGooglecloud: "#4285F4",      // ✅ added GCP
  SiFastapi: "#009688",          // ✅ added FastAPI
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
  "azure": "SiMicrosoft",        // ✅ No SiMicrosoftazure, use SiMicrosoft
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

export default function CourseDetailPage() {
  const { slug } = useParams()
  const router = useRouter()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
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
              <li><strong>📆 Duration:</strong> {course.duration}</li>
              <li><strong>📊 Level:</strong> {course.level}</li>
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
