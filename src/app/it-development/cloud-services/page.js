// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faCloud,

//   faShieldAlt,
//   faServer,
//   faDatabase,
//   faSitemap,
//   faCogs,
//   faSyncAlt,
//   faChartLine,
//   faCheckCircle,
//   faCodeBranch,
  
// } from "@fortawesome/free-solid-svg-icons"
// import { faAws, faMicrosoft, faGoogle, } from "@fortawesome/free-brands-svg-icons" // brand icons

// const serviceData = {
//   title: "Cloud Computing Services & Security Development",
//   image: "/images/it-development/cloud.jpg", // change if needed
//   duration: "Project Based",
//   overview:
//     "Fully-managed cloud services across Azure and AWS to modernize applications, secure workloads, and scale with confidence.",
//   details: [
//     {
//       icon: faSitemap,
//       title: "Cloud Strategy & Architecture",
//       description:
//         "Design landing zones, reference architectures, and guardrails aligned to your roadmap and governance."
//     },
//     {
//       icon: faCogs,
//       title: "Azure Landing Zones & Foundations",
//       description:
//         "Implement subscription design, networking, identity, policies, and automation for secure-by-default environments."
//     },
//     {
//       icon: faShieldAlt,
//       title: "Security & Compliance",
//       description:
//         "Shift-left security, identity & access, encryption, and continuous compliance with policy-as-code."
//     },
//     {
//       icon: faSyncAlt,
//       title: "Migration & Modernization",
//       description:
//         "Migrate from on-prem/VMs to PaaS/serverless; containerize, refactor, and optimize for cloud-native."
//     },
//     {
//       icon: faChartLine,
//       title: "Observability & Cost",
//       description:
//         "Dashboards, log analytics, alerts, SLOs, and cost governance to keep performance high and spend in check."
//     },
//     {
//       icon: faDatabase,
//       title: "Data Platforms",
//       description:
//         "Build secure data lakes and warehouses; integrate ETL/ELT, streaming, and analytics across cloud services."
//     },
//     {
//       icon: faServer,
//       title: "API & Integration",
//       description:
//         "Design resilient APIs, event-driven integrations, and service meshes for scalable, decoupled systems."
//     },
//     {
//       icon: faCodeBranch,
//       title: "DevOps & Automation",
//       description:
//         "IaC, CI/CD, GitOps, and automated governance to accelerate delivery with consistency."
//     }
//   ],
//   benefits: [
//     "Lower TCO with elastic, pay-as-you-go capacity",
//     "Scale on demand and improve reliability",
//     "Stronger security posture and compliance",
//     "Faster delivery with automation and managed services"
//   ]
// }

// export default function CloudServicesPage() {
//   return (
//     <main className="text-gray-800 bg-white">
//       {/* Hero Section */}
//       <section className="w-full bg-black py-20 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <div className="relative w-full h-64 md:h-80">
//             <Image
//               src={serviceData.image}
//               alt={serviceData.title}
//               fill
//               className="object-contain rounded-lg"
//               priority
//             />
//           </div>
//           <div>
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
//               {serviceData.title}
//             </h1>
//             <p className="text-lg text-white mb-3">{serviceData.overview}</p>
//             <p className="text-sm text-white mb-4">
//               <strong>Timeline:</strong> {serviceData.duration}
//             </p>
//             <Link
//               href="/request-callback/"
//               className="mt-7 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
//             >
//               Request Consultation
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Why Cloud (industry adoption) */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center gap-3 mb-4">
//             <FontAwesomeIcon icon={faCloud} className="text-3xl md:text-4xl text-blue-600" />
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Why are industries choosing the cloud?
//             </h2>
//           </div>
//           <p className="text-gray-700 max-w-7xl">
//             Cloud services meet modern compute and data needs with SaaS, IaaS, and PaaS options. Compared to on-prem,
//             organizations gain cost efficiency, speed, scalability, resilience, and a stronger security posture—without
//             heavy upfront investment.
//           </p>
//         </div>
//       </section>
      
      
//         {/* Azure Focus */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               {/* Microsoft brand icon sized up + Azure blue */}
//               <FontAwesomeIcon
//                 icon={faMicrosoft}
//                 className="text-[36px] md:text-[42px] lg:text-[48px]"
//                 style={{ color: "#0078D4" }}
//               />
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                 Cloud Service — Microsoft Azure
//               </h2>
//             </div>
//             <p className="text-gray-700 mb-4">
//               We specialize in Azure to build customized solutions for your industry. From identity and networking to
//               data platforms and serverless, Azure&apos;s breadth lets us deliver secure, high-performance systems that
//               evolve with your business.
//             </p>
//             <p className="text-gray-700">
//               Whether private, public, or hybrid, we align architecture to your compliance and performance needs so you
//               can move faster on a secure foundation.
//             </p>
//           </div>
//           <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
//             <ul className="space-y-3">
//               {[
//                 "Landing zones, policy, and identity baselines",
//                 "Modern app platforms: AKS, Functions, App Service",
//                 "Secure data: Azure SQL, Cosmos DB, Synapse",
//                 "Observability: Log Analytics, Grafana, alerts",
//                 "Cost governance and automated guardrails",
//               ].map((item, i) => (
//                 <li key={i} className="flex items-start gap-3">
//                   <FontAwesomeIcon icon={faCheckCircle} className="text-[18px] md:text-[20px] text-green-600 mt-0.5" />
//                   <span className="text-gray-700 text-sm">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//         {/* AWS Section */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
//           <div className="rounded-2xl border border-gray-200 p-6 bg-white order-2 md:order-1">
//             <ul className="space-y-3">
//               {[
//                 "On-demand, pay-as-you-go compute and managed services",
//                 "Secure VPC design, IAM, encryption, and guardrails",
//                 "Containers and serverless: ECS, EKS, Lambda",
//                 "Data on AWS: RDS, Aurora, Redshift, streaming",
//                 "IaC, CI/CD, and cost optimization best practices",
//               ].map((item, i) => (
//                 <li key={i} className="flex items-start gap-3">
//                   <FontAwesomeIcon icon={faCheckCircle} className="text-[18px] md:text-[20px] text-green-600 mt-0.5" />
//                   <span className="text-gray-700 text-sm">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="order-1 md:order-2">
//             <div className="flex items-center gap-3 mb-4">
//               {/* AWS brand icon sized up + AWS orange */}
//               <FontAwesomeIcon
//                 icon={faAws}
//                 className="text-[38px] md:text-[44px] lg:text-[50px]"
//                 style={{ color: "#FF9900" }}
//               />
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Amazon Web Services</h2>
//             </div>
//             <p className="text-gray-700 mb-4">
//               AWS provides a rich set of building blocks for deploying modern applications. We help you select the right
//               services, adopt the best patterns, and implement automation so teams can deliver reliably and securely.
//             </p>
//             <p className="text-gray-700">
//               Whether you&apos;re new to cloud or looking to mature your practice, our enablement model upskills teams while
//               moving critical workloads into production.
//             </p>
//           </div>
//         </div>
//       </section>

// {/* Google Cloud Focus (multicolor 'G' badge) */}
// <section className="py-16 px-6 bg-gray-50">
//   <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
//     <div>
//       <div className="flex items-center gap-3 mb-4">
//         {/* Multicolor Google 'G' badge (conic gradient) */}
//         <div className="relative h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14">
//           <span
//             className="absolute inset-0 rounded-full
//                        [background:conic-gradient(#EA4335_0deg_90deg,#FBBC05_90deg_180deg,#34A853_180deg_270deg,#4285F4_270deg_360deg)]"
//             aria-hidden
//           />
//           <span className="absolute inset-0 grid place-items-center text-white">
//             <FontAwesomeIcon
//               icon={faGoogle}
//               className="text-[22px] md:text-[26px] lg:text-[30px]"
//             />
//           </span>
//         </div>

//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Cloud Service — Google Cloud
//         </h2>
//       </div>

//       <p className="text-gray-700 mb-4">
//         We architect and operate on Google Cloud with secure foundations, modern
//         networking, and managed services—unlocking serverless, containers, data,
//         and AI/ML to accelerate delivery.
//       </p>
//       <p className="text-gray-700">
//         From single-project startups to multi-project enterprises, we align
//         architecture, security, and cost controls to your compliance and
//         performance needs.
//       </p>
//     </div>

//     <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
//       <ul className="space-y-3">
//         {[
//           "Foundations: org/folders/projects, IAM, policies",
//           "Compute: GKE, Cloud Run, Compute Engine, App Engine",
//           "Data & ML: BigQuery, Cloud Storage, Pub/Sub, Dataflow",
//           "Security: VPC Service Controls, Cloud Armor, Secret Manager",
//           "Ops & Cost: Cloud Monitoring/Logging, Budgets, Recommender",
//         ].map((item, i) => (
//           <li key={i} className="flex items-start gap-3">
//             <FontAwesomeIcon
//               icon={faCheckCircle}
//               className="text-[18px] md:text-[20px] text-green-600 mt-0.5"
//             />
//             <span className="text-gray-700 text-sm">{item}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </section>



//       {/* Service Offerings */}
//       <section className="py-10 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//             Service Offerings
//           </h2>
//           <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//             {serviceData.details.map((item, index) => (
//               <div
//                 key={index}
//                 className="group bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition-transform hover:-translate-y-1"
//               >
//                 <div className="flex items-center mb-4 space-x-4">
//                   <div className="bg-blue-100 text-blue-600 rounded-full p-3 group-hover:bg-blue-500 group-hover:text-white transition">
//                     <FontAwesomeIcon icon={item.icon} className="text-2xl md:text-3xl" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

      

//       {/* How Do We Help?  (moved here for better flow) */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Do We Help?</h2>
//           <p className="text-gray-700 mb-8 max-w-7xl">
//             We design on-demand cloud solutions that reduce operational load and increase agility. Our approach blends
//             architecture, automation, and enablement—so your teams can sustain momentum after go-live.
//           </p>

//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
//             {[
//               {
//                 icon: faSitemap,
//                 title: "Discovery & Planning",
//                 desc: "Assess goals, constraints, security and compliance; define a roadmap with clear outcomes."
//               },
//               {
//                 icon: faCogs,
//                 title: "Build & Integrate",
//                 desc: "Implement platforms, data services, and automation; integrate with existing systems."
//               },
//               {
//                 icon: faSyncAlt,
//                 title: "Migrate & Modernize",
//                 desc: "Prioritize workloads, choose refactor vs. rehost, and cutover with minimal downtime."
//               },
//               {
//                 icon: faChartLine,
//                 title: "Operate & Optimize",
//                 desc: "Set SLOs, observability, and cost controls; continuous improvement through feedback."
//               }
//             ].map(({ icon, title, desc }, i) => (
//               <div
//                 key={i}
//                 className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="bg-blue-100 text-blue-600 rounded-full p-3">
//                     <FontAwesomeIcon icon={icon} className="text-xl md:text-2xl" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
    
//       {/* Why Choose This Service (Benefits) */}
//       <section className="py-10 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//             Why Choose This Service
//           </h2>

//           <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
//             {serviceData.benefits.map((benefit, i) => (
//               <div
//                 key={i}
//                 className="flex items-center bg-white border border-gray-200 shadow-md rounded-2xl p-3 hover:shadow-xl hover:border-blue-500 transition"
//               >
//                 <div className="flex-shrink-0">
//                   <div className="text-blue-600 rounded-full p-3 flex items-center justify-center">
//                     {/* slightly larger check icon */}
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-gray-800 text-base leading-relaxed">{benefit}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Cloud Solutions */}
//       <section className="py-10 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
//             Our Cloud Solutions
//           </h2>

//           <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
//             Our cloud services and support reduce network and server noise while improving reliability and delivery
//             speed. Expert teams are available to help you modernize and operate with confidence.
//           </p>

//           <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//             {[
//               "Cloud-native App Development",
//               "Custom Application Modernization",
//               "Multicloud Strategies",
//               "Cloud Backup",
//               "Industry Cloud Solutions",
//               "Data Migration, and more."
//             ].map((item, i) => (
//               <li
//                 key={i}
//                 className="flex items-center gap-3 bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-md transition"
//               >
//                 <FontAwesomeIcon icon={faCheckCircle} className="text-[18px] md:text-[20px] text-green-600" />
//                 <span className="text-gray-800 text-sm">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//     </main>
//   )
// }





"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Solid icons (Font Awesome v6-safe names)
import {
  faCloud,
  faShieldHalved,   // v6 name (replaces faShieldAlt)
  faServer,
  faDatabase,
  faSitemap,
  faGears,           // v6 name (replaces faCogs)
  faRotateRight,     // v6 name (replaces faSyncAlt)
  faChartLine,
  faCircleCheck,     // v6 name (replaces faCheckCircle)
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

// Brand icons
import { faAws, faMicrosoft, faGoogle } from "@fortawesome/free-brands-svg-icons";

const serviceData = {
  title: "Cloud Computing Services & Security Development",
  image: "/images/it-development/cloud.jpg",
  duration: "Project Based",
  overview:
    "Fully-managed cloud services across Azure and AWS to modernize applications, secure workloads, and scale with confidence.",
  details: [
    {
      icon: faSitemap,
      title: "Cloud Strategy & Architecture",
      description:
        "Design landing zones, reference architectures, and guardrails aligned to your roadmap and governance.",
    },
    {
      icon: faGears,
      title: "Azure Landing Zones & Foundations",
      description:
        "Implement subscription design, networking, identity, policies, and automation for secure-by-default environments.",
    },
    {
      icon: faShieldHalved,
      title: "Security & Compliance",
      description:
        "Shift-left security, identity & access, encryption, and continuous compliance with policy-as-code.",
    },
    {
      icon: faRotateRight,
      title: "Migration & Modernization",
      description:
        "Migrate from on-prem/VMs to PaaS/serverless; containerize, refactor, and optimize for cloud-native.",
    },
    {
      icon: faChartLine,
      title: "Observability & Cost",
      description:
        "Dashboards, log analytics, alerts, SLOs, and cost governance to keep performance high and spend in check.",
    },
    {
      icon: faDatabase,
      title: "Data Platforms",
      description:
        "Build secure data lakes and warehouses; integrate ETL/ELT, streaming, and analytics across cloud services.",
    },
    {
      icon: faServer,
      title: "API & Integration",
      description:
        "Design resilient APIs, event-driven integrations, and service meshes for scalable, decoupled systems.",
    },
    {
      icon: faCodeBranch,
      title: "DevOps & Automation",
      description:
        "IaC, CI/CD, GitOps, and automated governance to accelerate delivery with consistency.",
    },
  ],
  benefits: [
    "Lower TCO with elastic, pay-as-you-go capacity",
    "Scale on demand and improve reliability",
    "Stronger security posture and compliance",
    "Faster delivery with automation and managed services",
  ],
};

export default function CloudServicesPage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="w-full bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={serviceData.image}
              alt={serviceData.title}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
              className="object-contain rounded-lg"
              priority
              fetchPriority="high"
 
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {serviceData.title}
            </h1>
            <p className="text-lg text-white mb-3">{serviceData.overview}</p>
            <p className="text-sm text-white mb-4">
              <strong>Timeline:</strong> {serviceData.duration}
            </p>
            <Link
              href="/request-callback/"
              className="mt-7 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Cloud (industry adoption) */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <FontAwesomeIcon
              icon={faCloud}
              className="text-3xl md:text-4xl text-blue-600"
              aria-hidden
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why industries choose the cloud
            </h2>
          </div>
          <p className="text-gray-700 max-w-7xl">
            Cloud services meet modern compute and data needs with SaaS, IaaS, and PaaS options. Compared to on-prem,
            organizations gain cost efficiency, speed, scalability, resilience, and a stronger security posture—without
            heavy upfront investment.
          </p>
        </div>
      </section>

      {/* Azure Focus */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Microsoft brand icon sized up + Azure blue via class */}
              <FontAwesomeIcon
                icon={faMicrosoft}
                className="text-[36px] md:text-[42px] lg:text-[48px] text-[#0078D4]"
                aria-label="Microsoft Azure"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Microsoft Azure
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              We specialize in Azure to build customized solutions for your industry. From identity and networking to
              data platforms and serverless, Azure&apos;s breadth lets us deliver secure, high-performance systems that
              evolve with your business.
            </p>
            <p className="text-gray-700">
              Whether private, public, or hybrid, we align architecture to your compliance and performance needs so you
              can move faster on a secure foundation.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
            <ul className="space-y-3">
              {[
                "Landing zones, policy, and identity baselines",
                "Modern app platforms: AKS, Functions, App Service",
                "Secure data: Azure SQL, Cosmos DB, Synapse",
                "Observability: Log Analytics, Grafana, alerts",
                "Cost governance and automated guardrails",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[18px] md:text-[20px] text-green-600 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AWS Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white order-2 md:order-1">
            <ul className="space-y-3">
              {[
                "On-demand, pay-as-you-go compute and managed services",
                "Secure VPC design, IAM, encryption, and guardrails",
                "Containers and serverless: ECS, EKS, Lambda",
                "Data on AWS: RDS, Aurora, Redshift, streaming",
                "IaC, CI/CD, and cost optimization best practices",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[18px] md:text-[20px] text-green-600 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              {/* AWS brand icon sized up + AWS orange via class */}
              <FontAwesomeIcon
                icon={faAws}
                className="text-[38px] md:text-[44px] lg:text-[50px] text-[#FF9900]"
                aria-label="Amazon Web Services"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Amazon Web Services</h2>
            </div>
            <p className="text-gray-700 mb-4">
              AWS provides a rich set of building blocks for deploying modern applications. We help you select the right
              services, adopt the best patterns, and implement automation so teams can deliver reliably and securely.
            </p>
            <p className="text-gray-700">
              Whether you&apos;re new to cloud or looking to mature your practice, our enablement model upskills teams while
              moving critical workloads into production.
            </p>
          </div>
        </div>
      </section>

      {/* Google Cloud Focus — Multicolor "G" letter */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Multicolor Google 'G' LETTER inside a white badge */}
              <div className="grid place-items-center h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full border border-gray-200 bg-white">
                <span
                  className="
                    font-extrabold leading-none
                    text-[22px] md:text-[26px] lg:text-[30px]
                    bg-[conic-gradient(#EA4335_0deg_90deg,#FBBC05_90deg_180deg,#34A853_180deg_270deg,#4285F4_270deg_360deg)]
                    bg-clip-text text-transparent
                  "
                  aria-label="Google Cloud"
                >
                  G
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Google Cloud Platform
              </h2>
            </div>

            <p className="text-gray-700 mb-4">
              We architect and operate on Google Cloud with secure foundations, modern networking, and managed
              services—unlocking serverless, containers, data, and AI/ML to accelerate delivery.
            </p>
            <p className="text-gray-700">
              From single-project startups to multi-project enterprises, we align architecture, security, and cost
              controls to your compliance and performance needs.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
            <ul className="space-y-3">
              {[
                "Foundations: org/folders/projects, IAM, policies",
                "Compute: GKE, Cloud Run, Compute Engine, App Engine",
                "Data & ML: BigQuery, Cloud Storage, Pub/Sub, Dataflow",
                "Security: VPC Service Controls, Cloud Armor, Secret Manager",
                "Ops & Cost: Cloud Monitoring/Logging, Budgets, Recommender",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[18px] md:text-[20px] text-green-600 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-10 mb-2 px-6 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Service Offerings
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {serviceData.details.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-3 group-hover:bg-blue-500 group-hover:text-white transition">
                    <FontAwesomeIcon icon={item.icon} className="text-2xl md:text-3xl" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Do We Help? */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">How Do We Help?</h2>
          <p className="text-gray-700 mb-8 max-w-7xl">
            We design on-demand cloud solutions that reduce operational load and increase agility. Our approach blends
            architecture, automation, and enablement—so your teams can sustain momentum after go-live.
          </p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {[
              {
                icon: faSitemap,
                title: "Discovery & Planning",
                desc: "Assess goals, constraints, security and compliance; define a roadmap with clear outcomes.",
              },
              {
                icon: faGears,
                title: "Build & Integrate",
                desc: "Implement platforms, data services, and automation; integrate with existing systems.",
              },
              {
                icon: faRotateRight,
                title: "Migrate & Modernize",
                desc: "Prioritize workloads, choose refactor vs. rehost, and cutover with minimal downtime.",
              },
              {
                icon: faChartLine,
                title: "Operate & Optimize",
                desc: "Set SLOs, observability, and cost controls; continuous improvement through feedback.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                    <FontAwesomeIcon icon={icon} className="text-xl md:text-2xl" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
         
      {/* WHY CHOOSE THIS SERVICE (Benefits) — Cloud-page style */}
       <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose This Service
          </h2>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            {serviceData.benefits.map((benefit, i) => (
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

      {/* Our Cloud Solutions */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Our Cloud Solutions
          </h2>

          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
            Our cloud services and support reduce network and server noise while improving reliability and delivery
            speed. Expert teams are available to help you modernize and operate with confidence.
          </p>

          <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Cloud-native App Development",
              "Custom Application Modernization",
              "Multicloud Strategies",
              "Cloud Backup",
              "Industry Cloud Solutions",
              "Site Reliability & FinOps",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-white border border-gray-200 shadow-sm rounded-xl p-3 hover:shadow-md transition"
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
                <span className="text-gray-800 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
