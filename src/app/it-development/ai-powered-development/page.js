// "use client"

// import Link from "next/link"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faRobot,
//   faComments,
//   faVideo,
//   faShieldAlt,
//   faClipboardCheck,
//   faLightbulb,
//   faBolt,
//   faChartLine,
//   faCogs,
//   faSearch,
//   faLanguage,
//   faBrain,
//   faImage,
//   faUserAstronaut,
//   faWandMagic, // fallback for older FA (alias to magic)
//   faCheckCircle,
// } from "@fortawesome/free-solid-svg-icons"

// const hero = {
//   title: "AI Powered App Development Solutions",
//   intro:
//     "We build cutting-edge, AI-powered mobile and web apps using the latest in machine learning and modern engineering. Automate internal processes, personalize user experiences, and turn your data into decisions.",
//   ctaHref: "/request-callback/?service=ai-powered-development",
// }

// const caseStudies = [
//   {
//     key: "chat-better",
//     title: "Case Study 1: Chat Better",
//     icon: faComments,
//     challenge:
//       "An e-learning platform had low-quality user-generated content—grammar issues, unclear phrasing, and the need for translations for a global audience.",
//     solution:
//       "We built ChatBetter, a ChatGPT wrapper (GPT-3/4) for real-time grammar correction, paraphrasing, translation, and audio-to-text. It integrated directly into their content creation flow.",
//     results: [
//       "Significant improvement in content clarity and correctness",
//       "Localization streamlined via automated translation",
//       "30% increase in user engagement & satisfaction",
//       "Hours of manual editing eliminated for creators",
//     ],
//   },
//   {
//     key: "video-editor-copilot",
//     title: "Case Study 2: Video Editor Copilot",
//     icon: faVideo,
//     challenge:
//       "A digital marketing agency needed to produce more engaging videos faster—subtitles/CC, short-form edits, and optimized titles/descriptions for YouTube and social platforms.",
//     solution:
//       "We delivered an AI-powered video copilot: automatic subtitle/CC generation, short video creation, and smart title/description suggestions for higher CTR.",
//     results: [
//       "50% reduction in production time",
//       "Accessibility boosted with auto-generated CC",
//       "Higher YouTube views and engagement",
//       "20% lift in social media engagement",
//     ],
//   },
//   {
//     key: "healthcare-compliance",
//     title: "Case Study 3: Healthcare Compliance",
//     icon: faShieldAlt,
//     challenge:
//       "A healthcare provider needed HIPAA-grade compliance, visibility into tracking cookies, and monitoring of behavioral events to protect PHI.",
//     solution:
//       "We built a Compliance Analysis tool to scan digital assets, compute a compliance score, flag cookies/trackers, and surface risky behavioral events.",
//     results: [
//       "Compliance score improved by ~20%",
//       "Tracking cookies and potential breaches identified & mitigated",
//       "Strengthened patient data protection & privacy",
//       "Greater peace of mind for staff and patients",
//     ],
//   },
// ]

// // Services pulled from JSON (easy to add/reorder)
// const services = [
//   {
//     icon: faRobot,
//     title: "AI Chatbot Development & Integration",
//     desc:
//       "Intelligent assistants that understand natural language, automate interactions, and boost customer satisfaction.",
//   },
//   {
//     icon: faWandMagic, // generic "magic" icon for generative
//     title: "Generative AI Development",
//     desc:
//       "Text, image, and media generation to automate content workflows and enhance digital experiences.",
//   },
//   {
//     icon: faLightbulb,
//     title: "Prompt Engineering",
//     desc:
//       "Design, test, and optimize prompts to improve accuracy, tone, and safety for LLM-powered features.",
//   },
//   {
//     icon: faUserAstronaut,
//     title: "Intelligent Virtual Assistants",
//     desc:
//       "Personalized, conversational assistants embedded across your app to guide users end-to-end.",
//   },
//   {
//     icon: faChartLine,
//     title: "Predictive Analytics",
//     desc:
//       "Forecast demand, detect anomalies, and drive data-led decisions with ML models and interpretable insights.",
//   },
//   {
//     icon: faLanguage,
//     title: "Natural Language Processing (NLP)",
//     desc:
//       "Voice/text understanding, sentiment analysis, translation, entity extraction, and chatbot orchestration.",
//   },
//   {
//     icon: faSearch,
//     title: "AI-Powered Search",
//     desc:
//       "Semantic search that understands intent and improves relevance continuously with user feedback.",
//   },
//   {
//     icon: faImage,
//     title: "Computer Vision",
//     desc:
//       "Visual recognition, object detection, image processing, and AR features for next-gen user experiences.",
//   },
//   {
//     icon: faBrain,
//     title: "Cognitive Services",
//     desc:
//       "Add intelligence like emotion/facial recognition and text analytics to enrich your product.",
//   },
//   {
//     icon: faCogs,
//     title: "Recommendation Solutions",
//     desc:
//       "Personalized recommendations that increase engagement and conversions across products and content.",
//   },
// ]

// export default function AIPoweredDevelopmentPage() {
//   return (
//     <main className="bg-white text-gray-800">
//       {/* HERO */}
//       <section className="w-full bg-gradient-to-br from-gray-950 to-gray-800 text-white">
//         <div className="mx-auto max-w-7xl px-6 py-20 md:py-24 grid md:grid-cols-12 gap-10 items-center">
//           <div className="md:col-span-7">
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//               {hero.title}
//             </h1>
//             <p className="mt-4 text-base md:text-lg text-white/90 max-w-3xl">
//               {hero.intro}
//             </p>
//             <div className="mt-6">
//               <Link
//                 href={hero.ctaHref}
//                 className="inline-flex items-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
//               >
//               Request Consultation
//               </Link>
//             </div>
//           </div>
//           <div className="md:col-span-5">
//             <ul className="grid grid-cols-2 gap-3">
//               {[
//                 { t: "On-device AI", i: faBolt },
//                 { t: "LLM Apps", i: faRobot },
//                 { t: "NLP & Vision", i: faLanguage },
//                 { t: "MLOps", i: faCogs },
//               ].map(({ t, i }, idx) => (
//                 <li
//                   key={idx}
//                   className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
//                 >
//                   <FontAwesomeIcon icon={i} className="text-xl text-blue-300" />
//                   <span className="text-sm text-white/90">{t}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* CASE STUDIES */}
//       <section className="px-6 py-14 md:py-16">
//         <div className="mx-auto max-w-7xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
//             Case Studies
//           </h2>

//           <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {caseStudies.map(({ key, title, icon, challenge, solution, results }) => (
//               <article
//                 key={key}
//                 className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
//                     <FontAwesomeIcon icon={icon} className="text-2xl text-blue-600" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 leading-tight">
//                     {title}
//                   </h3>
//                 </div>

//                 <div className="mt-5 space-y-4 text-sm">
//                   <div>
//                     <div className="font-semibold text-gray-900">Challenge</div>
//                     <p className="text-gray-700 mt-1">{challenge}</p>
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900">Solution</div>
//                     <p className="text-gray-700 mt-1">{solution}</p>
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900">Results</div>
//                     <ul className="mt-1 space-y-1">
//                       {results.map((r, i) => (
//                         <li key={i} className="flex items-start gap-2 text-gray-700">
//                           <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 text-green-600 text-[16px]" />
//                           <span>{r}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

// {/* 
// <section className="px-6 py-14 md:py-16">
//   <div className="mx-auto max-w-7xl">
//     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
//       Case Studies
//     </h2>
//     <p className="mt-2 text-center text-sm text-gray-600">
//       Real projects, real outcomes—challenge, solution, and results at a glance.
//     </p>

//     <div className="relative mt-10">
     
//       <div className="pointer-events-none absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200" />

//       <ol className="space-y-8">
//         {caseStudies.map(({ key, title, icon, challenge, solution, results }) => (
//           <li key={key} className="relative flex gap-6">
         
//             <div className="relative z-10 shrink-0">
//               <div className="grid h-12 w-12 place-items-center rounded-full bg-white ring-2 ring-blue-500 shadow-md">
//                 <FontAwesomeIcon icon={icon} className="text-blue-600 text-2xl md:text-3xl" />
//               </div>
//             </div>

//             <div className="flex-1">
//               <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
//                 <div className="flex items-start justify-between gap-4">
//                   <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
//                     {title}
//                   </h3>
                  
//                   <span className="hidden sm:block h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
//                 </div>

             
//                 <div className="mt-4 grid gap-5 sm:grid-cols-3">
               
//                   <div>
//                     <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-100">
//                       Challenge
//                     </div>
//                     <p className="mt-2 text-sm text-gray-700 leading-relaxed">
//                       {challenge}
//                     </p>
//                   </div>

            
//                   <div>
//                     <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
//                       Solution
//                     </div>
//                     <p className="mt-2 text-sm text-gray-700 leading-relaxed">
//                       {solution}
//                     </p>
//                   </div>

//                   <div>
//                     <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
//                       Results
//                     </div>
//                     <ul className="mt-2 space-y-1">
//                       {results.map((r, i) => (
//                         <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
//                           <FontAwesomeIcon
//                             icon={faCheckCircle}
//                             className="mt-0.5 text-[18px] text-emerald-600"
//                           />
//                           <span>{r}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ol>
//     </div>
//   </div>
// </section> */}



//       {/* SERVICES (from JSON) */}
//       <section className="bg-gray-50 px-6 py-16 md:py-20">
//         <div className="mx-auto max-w-7xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
//             AI-powered App Development Services
//           </h2>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {services.map(({ icon, title, desc }) => (
//               <div
//                 key={title}
//                 className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
//                     <FontAwesomeIcon icon={icon} className="text-2xl md:text-3xl text-blue-600" />
//                   </div>
//                   <h3 className="text-base md:text-lg font-semibold text-gray-900">
//                     {title}
//                   </h3>
//                 </div>
//                 <p className="mt-3 text-sm text-gray-700 leading-relaxed">{desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* <div className="mt-10 text-center">
//             <Link
//               href="/request-callback/?service=ai-powered-development"
//               className="inline-flex items-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
//             >
//               Discuss Your Use Case
//             </Link>
//           </div> */}
//         </div>
//       </section>
//     </main>
//   )
// }














"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faRobot,
  faComments,
  faVideo,
  faShieldAlt,
  faClipboardCheck,
  faLightbulb,
  faBolt,
  faChartLine,
  faCogs,
  faSearch,
  faLanguage,
  faBrain,
  faImage,
  faUserAstronaut,
  faWandMagic, // fallback for older FA (alias to magic)
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons"

const hero = {
  title: "AI Powered App Development Solutions",
  intro:
    "We build cutting-edge, AI-powered mobile and web apps using the latest in machine learning and modern engineering. Automate internal processes, personalize user experiences, and turn your data into decisions.",
  ctaHref: "/request-callback/?service=ai-powered-development",
}

const caseStudies = [
  {
    key: "chat-better",
    title: "Case Study 1: Chat Better",
    icon: faComments,
    challenge:
      "An e-learning platform had low-quality user-generated content—grammar issues, unclear phrasing, and the need for translations for a global audience.",
    solution:
      "We built ChatBetter, a ChatGPT wrapper (GPT-3/4) for real-time grammar correction, paraphrasing, translation, and audio-to-text. It integrated directly into their content creation flow.",
    results: [
      "Significant improvement in content clarity and correctness",
      "Localization streamlined via automated translation",
      "30% increase in user engagement & satisfaction",
      "Hours of manual editing eliminated for creators",
    ],
  },
  {
    key: "video-editor-copilot",
    title: "Case Study 2: Video Editor Copilot",
    icon: faVideo,
    challenge:
      "A digital marketing agency needed to produce more engaging videos faster—subtitles/CC, short-form edits, and optimized titles/descriptions for YouTube and social platforms.",
    solution:
      "We delivered an AI-powered video copilot: automatic subtitle/CC generation, short video creation, and smart title/description suggestions for higher CTR.",
    results: [
      "50% reduction in production time",
      "Accessibility boosted with auto-generated CC",
      "Higher YouTube views and engagement",
      "20% lift in social media engagement",
    ],
  },
  {
    key: "healthcare-compliance",
    title: "Case Study 3: Healthcare Compliance",
    icon: faShieldAlt,
    challenge:
      "A healthcare provider needed HIPAA-grade compliance, visibility into tracking cookies, and monitoring of behavioral events to protect PHI.",
    solution:
      "We built a Compliance Analysis tool to scan digital assets, compute a compliance score, flag cookies/trackers, and surface risky behavioral events.",
    results: [
      "Compliance score improved by ~20%",
      "Tracking cookies and potential breaches identified & mitigated",
      "Strengthened patient data protection & privacy",
      "Greater peace of mind for staff and patients",
    ],
  },
]

// Services pulled from JSON (easy to add/reorder)
const services = [
  {
    icon: faRobot,
    title: "AI Chatbot Development & Integration",
    desc:
      "Intelligent assistants that understand natural language, automate interactions, and boost customer satisfaction.",
  },
  {
    icon: faWandMagic, // generic "magic" icon for generative
    title: "Generative AI Development",
    desc:
      "Text, image, and media generation to automate content workflows and enhance digital experiences.",
  },
  {
    icon: faLightbulb,
    title: "Prompt Engineering",
    desc:
      "Design, test, and optimize prompts to improve accuracy, tone, and safety for LLM-powered features.",
  },
  {
    icon: faUserAstronaut,
    title: "Intelligent Virtual Assistants",
    desc:
      "Personalized, conversational assistants embedded across your app to guide users end-to-end.",
  },
  {
    icon: faChartLine,
    title: "Predictive Analytics",
    desc:
      "Forecast demand, detect anomalies, and drive data-led decisions with ML models and interpretable insights.",
  },
  {
    icon: faLanguage,
    title: "Natural Language Processing (NLP)",
    desc:
      "Voice/text understanding, sentiment analysis, translation, entity extraction, and chatbot orchestration.",
  },
  {
    icon: faSearch,
    title: "AI-Powered Search",
    desc:
      "Semantic search that understands intent and improves relevance continuously with user feedback.",
  },
  {
    icon: faImage,
    title: "Computer Vision",
    desc:
      "Visual recognition, object detection, image processing, and AR features for next-gen user experiences.",
  },
  {
    icon: faBrain,
    title: "Cognitive Services",
    desc:
      "Add intelligence like emotion/facial recognition and text analytics to enrich your product.",
  },
  {
    icon: faCogs,
    title: "Recommendation Solutions",
    desc:
      "Personalized recommendations that increase engagement and conversions across products and content.",
  },
]

// NEW: AI-specific benefits for “Why Choose This Service”
const benefits = [
  "Production-grade MLOps & CI/CD for safe, rapid releases",
  "Security & compliance by design (PII, HIPAA, GDPR) with audit trails",
  "Model-neutral builds: OpenAI/Azure OpenAI, Anthropic, and open-source",
  "Seamless integration with your stack (Next.js/React, Node/Python, AWS/Azure/GCP)",
  "Fast experimentation with offline evals and A/B testing tied to KPIs",
  "Observability & cost control (token usage, rate limits, budgets, tracing)",
  "Human-in-the-loop review flows and policy guardrails for quality",
  "Post-launch SLOs, runbooks, and clear documentation for teams",
]

export default function AIPoweredDevelopmentPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="w-full bg-gradient-to-br from-gray-950 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {hero.title}
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/90 max-w-3xl">
              {hero.intro}
            </p>
            <div className="mt-6">
              <Link
                href={hero.ctaHref}
                className="inline-flex items-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
              >
                Request Consultation
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <ul className="grid grid-cols-2 gap-3">
              {[
                { t: "On-device AI", i: faBolt },
                { t: "LLM Apps", i: faRobot },
                { t: "NLP & Vision", i: faLanguage },
                { t: "MLOps", i: faCogs },
              ].map(({ t, i }, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <FontAwesomeIcon icon={i} className="text-xl text-blue-300" />
                  <span className="text-sm text-white/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Case Studies
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map(({ key, title, icon, challenge, solution, results }) => (
              <article
                key={key}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
                    <FontAwesomeIcon icon={icon} className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {title}
                  </h3>
                </div>

                <div className="mt-5 space-y-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-900">Challenge</div>
                    <p className="text-gray-700 mt-1">{challenge}</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Solution</div>
                    <p className="text-gray-700 mt-1">{solution}</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Results</div>
                    <ul className="mt-1 space-y-1">
                      {results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <FontAwesomeIcon icon={faCheckCircle} className="mt-0.5 text-green-600 text-[16px]" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES (from JSON) */}
      <section className="bg-gray-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            AI-powered App Development Services
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
                    <FontAwesomeIcon icon={icon} className="text-2xl md:text-3xl text-blue-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* <div className="mt-10 text-center">
            <Link
              href="/request-callback/?service=ai-powered-development"
              className="inline-flex items-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Discuss Your Use Case
            </Link>
          </div> */}
        </div>
      </section>

      {/* WHY CHOOSE THIS SERVICE (Benefits) — Cloud-page style */}
       <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose This Service
          </h2>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center bg-white border border-gray-200 shadow-md rounded-2xl p-3 hover:shadow-xl hover:border-blue-500 transition"
              >
                <div className="flex-shrink-0">
                  <div className=" text-blue-600 rounded-full p-3 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="">
                  <p className="text-gray-800 text-base leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
