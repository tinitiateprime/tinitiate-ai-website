// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import ServiceCards from '../../components/ServiceCard'
// import { CheckCircle } from 'lucide-react'

// export default function StartupConsultingPage() {
//   return (
//     <main className="bg-white text-gray-800 font-sans">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-28 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
//               🚀 Remote Startup Consulting
//             </h1>
//             <p className="text-lg md:text-xl mb-4 text-gray-300">
//               <strong className="text-white">Empowering Startups to Scale Smarter, Not Just Faster.</strong>
//             </p>
//             <p className="text-base md:text-lg text-gray-400 leading-relaxed">
//               We are battle-tested startup architects who've lived the early-stage grind and turned chaos into scalable, repeatable success. Let us help you execute with clarity, speed, and strategy.
//             </p>
//           </div>
//           <div className="relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
//             <Image
//               src="/images/banners/startup-consulting.jpg"
//               alt="Startup Consulting"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//        {/* Capabilities */}
// <section className="py-24 px-6 bg-white border-t border-gray-100">
//   <div className="max-w-7xl mx-auto">
//     <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">🧠 How We Help Startups Win</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {[
//         {
//           title: '🔗 Multi-Domain Experience',
//           content:
//             'From EdTech to FinTech, SaaS to Retail — we tailor proven frameworks to your context, not the other way around.',
//         },
//         {
//           title: '🧭 Workflow Design & Implementation',
//           content:
//             'We build and optimize lead-to-cash flows, support systems, and internal automation suited for rapid scaling.',
//         },
//         {
//           title: '🔍 Team & Tooling Audits',
//           content:
//             'We review your org structure, tooling stack, automation, and communication loops to deliver optimization plans.',
//         },
//         {
//           title: '👥 Staff Planning & Role Clarity',
//           content:
//             'We help define ownership-driven roles, build hiring roadmaps, and align your team structure with your goals.',
//         },
//         {
//           title: '💰 Burn & Cost Optimization',
//           content:
//             'Most early-stage teams overspend unknowingly. We cut inefficiencies, reduce burn, and sustain growth velocity.',
//         },
//         {
//           title: '👨‍💻 Fractional CTO & Architecture',
//           content:
//             'From infra design to codebase health, we bring in top-tier CTO and architectural support at a fraction of the cost.',
//         },
//         {
//           title: '🛠️ Your Execution Partner',
//           content:
//             'We embed like your in-house team — executing ops, hiring, and systems while you focus on Product-Market Fit.',
//         },
//       ].map(({ title, content }, index) => (
//         <div
//           key={index}
//           className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-md transition duration-300"
//         >
//           <div className="text-3xl mb-4">{title.split(' ')[0]}</div>
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">
//             {title.replace(/^[^\w]+/, '')}
//           </h3>
//           <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* What You Get (3 Pillars) */}
//       <section className="bg-gray-50 py-20 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-12">🔑 What You Get with Us</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "💼 Strategic Leadership",
//                 desc: "From roadmap design to scaling ops — we think like CTOs, not just consultants.",
//               },
//               {
//                 title: "⚙️ Embedded Execution",
//                 desc: "We join your Slack, standups, and tools — delivering like your internal team.",
//               },
//               {
//                 title: "📉 Lean, Effective Cost",
//                 desc: "Our fractional model gives you expert guidance without full-time cost.",
//               },
//             ].map(({ title, desc }, i) => (
//               <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//                 <p className="text-gray-600 text-base">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       {/* <section className="bg-blue-900 text-white py-20 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-12">🚀 Our Startup Impact</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
//             {[
//               { stat: "25+", label: "Startups Coached" },
//               { stat: "$50M+", label: "Funding Supported" },
//               { stat: "10+", label: "Industries Covered" },
//               { stat: "100%", label: "Remote-First Teams" },
//             ].map(({ stat, label }, i) => (
//               <div key={i}>
//                 <p className="text-4xl font-extrabold">{stat}</p>
//                 <p className="text-gray-300 mt-2">{label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Let’s Build Together */}
//       <section className="py-10 px-6 bg-white text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6">📈 Let&apos;s Build Together</h2>
//           <p className="text-gray-700 text-lg leading-relaxed mb-3">
//             Transitioning from MVP chaos to Series A structure? Bootstrapped and need senior guidance without burning capital?
//           </p>
//           <p className="text-blue-600 font-semibold text-xl">We don&apos;t just consult. We co-build.</p>
//         </div>
//       </section>

//       {/* Why Us */}
//       <section className="py-15 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">💡 Why Choose Us?</h2>
//           <ul className="space-y-5 md:space-y-6 text-gray-700 text-lg md:text-base max-w-4xl mx-auto">
//             {[
//               "We’ve built startups ourselves — not just consultants, but doers. We’ve hired, fired, pitched, built MVPs, and raised rounds.",
//               "Process-first thinking — great startups aren’t chaotic. We bring structure without slowing innovation.",
//               "Domain-flexible, execution-focused — we embed with your team and co-own delivery.",
//               "Cost-effective for startups — expert execution at a fraction of full-time CTO cost.",
//               "100% Remote, 100% Integrated — into your tools, culture, and timezone.",
//             ].map((item, i) => (
//               <li key={i} className="flex items-start gap-3">
//                 <CheckCircle className="text-green-600 w-5 h-5 mt-1 shrink-0" />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="px-6 py-10 bg-white  border-gray-300 mb-10">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">Our Expertise</h2>
//           <ServiceCards />
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 px-6 bg-gradient-to-tr from-blue-900 to-blue-700 text-white text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold mb-4">Let&apos;s Build a Lean, Scalable Future 🚀</h2>
//           <Link
//             href="/request-callback?service=startup-consulting"
//             className="inline-block px-8 py-3 rounded-full bg-white text-blue-800 hover:bg-blue-100 font-semibold shadow-lg transition duration-300"
//           >
//             Talk to Us
//           </Link>
//         </div>
//       </section>
//     </main>
//   )
// }




'use client'

import Image from 'next/image'
import Link from 'next/link'
import ServiceCards from '../../components/ServiceCard'
import { CheckCircle } from 'lucide-react'

export default function StartupConsultingPage() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-28 px-6"> */}
       <section className="bg-black text-white py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Startup Acceleration & Architecture
            </h1>
            <p className="text-lg md:text-xl mb-4 text-gray-300">
              <strong className="text-white">Empowering Startups to Scale Smarter, Not Just Faster.</strong>
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              At the heart of every successful startup lies a clear process, a focused team, and a well-defined technology roadmap.
              We are a collective of startup veterans and technology architects who have lived through the chaos of early-stage ventures and turned it into structured success. 
              Now, we bring that battle-tested expertise to help startups accelerate execution with clarity, precision, and strategic foresight.
            </p>
          </div>
          <div className="relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
    <Image
  src="/images/banners/startup.png"
  alt="Startup Consulting"
  fill
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>

          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mt-10 mb-5 px-6 bg-white ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">🧠 How We Help Startups Win</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '🔗 Multi-Domain Experience',
                content:
                  'From EdTech to FinTech, SaaS to Retail — we tailor proven frameworks to your market, tech stack, and growth journey.',
              },
              {
                title: '🧭 Workflow Design & Implementation',
                content:
                  'Lead-to-cash systems, support workflows, process automation — we implement scalable flows or optimize what you already have.',
              },
              {
                title: '🔍 Workflow & Process Audit',
                content:
                  'We assess team structure, tooling, automation, and decision-making loops — and deliver actionable, scalable improvements.',
              },
              {
                title: '👥 Staff Planning',
                content:
                  'Define clear, ownership-driven roles and plan headcount aligned to your product phases and technical milestones.',
              },
              {
                title: '💰 Business Process Cost Optimization',
                content:
                  'We identify inefficiencies, reduce burn, and implement lean practices — without slowing your momentum.',
              },
              {
                title: '👨‍💻 Remote CTO / Architect Services',
                content:
                  'Fractional CTOs help you choose the right stack, design systems, document architecture, and mentor your tech team.',
              },
              {
                title: '🛠️ Your Parallel Execution Team',
                content:
                  'While you focus on PMF and product, we drive ops, hiring, tooling, systems, documentation, and team velocity.',
              },
            ].map(({ title, content }, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-md transition duration-300"
              >
                <div className="text-3xl mb-4">{title.split(' ')[0]}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {title.replace(/^[^\w]+/, '')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-gray-50 py-15 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">🔑 What You Get with Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "💼 Strategic Leadership",
                desc: "From roadmap design to scaling ops — we think like CTOs, not just consultants.",
              },
              {
                title: "⚙️ Embedded Execution",
                desc: "We join your Slack, standups, and tools — delivering like your internal team.",
              },
              {
                title: "📉 Lean, Effective Cost",
                desc: "Fractional model gives you senior execution without full-time overhead.",
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Build Together */}
      <section className="py-10 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">📈 Let&apos;s Build Together</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-3">
            If you&apos;re transitioning from MVP chaos to Series A discipline, or a bootstrapped team seeking enterprise-grade guidance — we&apos;re here to help.
          </p>
          <p className="text-blue-600 font-semibold text-xl">We don&apos;t just consult. We co-build.</p>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-15 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">💡 Why Choose Us?</h2>
          <ul className="space-y-5 md:space-y-6 text-gray-700 text-lg md:text-base max-w-4xl mx-auto">
            {[
              "✅ We’ve built startups ourselves — we’ve hired, fired, pitched, built MVPs, and raised funds.",
              "✅ Process-first thinking — agile without chaos. We bring discipline without slowing you down.",
              "✅ Domain-flexible, execution-focused — we co-own your roadmap and embed in your team.",
              "✅ Cost-effective — you get senior-level execution without the in-house cost.",
              "✅ 100% Remote — we align with your time zone, tools, and team workflows.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-10 bg-white border-gray-300 mb-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">Our Expertise</h2>
          <ServiceCards />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-tr from-blue-900 to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Build a Lean, Scalable Future 🚀</h2>
          <Link
            href="/request-callback?service=startup-consulting"
            className="inline-block px-8 py-3 rounded-full bg-white text-blue-800 hover:bg-blue-100 font-semibold shadow-lg transition duration-300"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </main>
  )
}
