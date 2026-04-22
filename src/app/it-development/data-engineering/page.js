// // src/app/it-development/data-engineering/page.jsx
// "use client"

// import Image from 'next/image'
// import Link from 'next/link'

// const serviceData = {
//     title: 'Data Engineering Services',
//     image: '/images/it-development/data-engineering-2.jpg',
//     duration: 'Project Based',
//   overview:
//     'Design and build scalable data pipelines and warehousing solutions using AWS, Azure, and modern data tools.',
//   details: [
//     'Real-time and batch data pipelines with Spark, Glue, and Kafka',
//     'ETL/ELT workflows across AWS, Azure, Snowflake, and Redshift',
//     'Data lake and data warehouse design',
//     'Integration with third-party APIs and databases',
//     'Monitoring, logging, and alerting for pipeline health'
//   ],
//   benefits: [
//     'Scalable and efficient data processing',
//     'Faster business insights through data modeling',
//     'Cloud-native optimized architecture',
//     'Improved data governance and quality control'
//   ]
// }

// export default function DataEngineeringPage() {
//   return (
//     <main className="text-gray-800 bg-white">
//     {/* Hero Section */}
//       <section className="w-full bg-black to-white py-20 px-6">
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
//             {/* <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
//               Request Consultation
//             </button> */}

//                    <Link
//              href={`/request-callback/`}
//             className="mt-7 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//              Request Consultation
//           </Link>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 px-6 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-900">Service Offerings</h2>
//         <ul className="list-disc space-y-2 pl-5 text-gray-700">
//           {serviceData.details.map((d, i) => (
//             <li key={i}>{d}</li>
//           ))}
//         </ul>
//       </section>

//       <section className="py-12 px-6 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why Choose This Service</h2>
//         <ul className="list-disc space-y-2 pl-5 text-gray-700">
//           {serviceData.benefits.map((b, i) => (
//             <li key={i}>{b}</li>
//           ))}
//         </ul>
//       </section>
//     </main>
//   )
// }










"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faServer,
  faProjectDiagram,
  faDatabase,
  faCodeBranch,
  faChartLine,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

const serviceData = {
  title: 'Data Engineering Services',
  image: '/images/it-development/data-engineering-2.jpg',
  duration: 'Project Based',
  overview:
    'Design and build scalable data pipelines and warehousing solutions using AWS, Azure, and modern data tools.',
  details: [
    {
      icon: faCodeBranch,
      title: 'Real-time & Batch Pipelines',
      description: 'Process data efficiently with Spark, Glue, Kafka, and other distributed tools.'
    },
    {
      icon: faProjectDiagram,
      title: 'ETL/ELT Orchestration',
      description: 'Design and manage ETL/ELT workflows on AWS Glue, Azure Data Factory, and Snowflake.'
    },
    {
      icon: faDatabase,
      title: 'Data Lakes & Warehouses',
      description: 'Build scalable, query-optimized data lakes and warehouses on Redshift, Snowflake.'
    },
    {
      icon: faServer,
      title: 'API & DB Integrations',
      description: 'Integrate structured/unstructured data from third-party APIs and legacy systems.'
    },
    {
      icon: faChartLine,
      title: 'Monitoring & Alerting',
      description: 'Track pipeline health using tools like CloudWatch, Prometheus, and custom alerts.'
    }
  ],
  benefits: [
    'Scalable and efficient data processing',
    'Faster business insights through data modeling',
    'Cloud-native optimized architecture',
    'Improved data governance and quality control'
  ]
}

export default function DataEngineeringPage() {
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
              href={`/request-callback/`}
              className="mt-7 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
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
                    <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
          {/* Icon */}
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

          {/* Text */}
          <div className="">
            <p className="text-gray-800 text-base leading-relaxed">
              {benefit}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </main>
  )
}
