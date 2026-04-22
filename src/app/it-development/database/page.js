"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DatabaseServices from '@/app/components/DatabaseServices'
import {
  faCogs,
  faDatabase,
  faProjectDiagram,
  faLock,
  faChartBar
} from '@fortawesome/free-solid-svg-icons'

const databaseServiceData = {
  title: 'Database Services',
  image: '/images/banners/database.jpg',
  duration: 'Ongoing / Project-Based',
  overview:
    'Design, optimize, and manage high-performance databases for your applications. Our database services focus on reliability, scalability, and security across SQL and NoSQL systems.',
  details: [
    {
      icon: faDatabase,
      title: 'Database Design & Architecture',
      description: 'Build scalable and normalized schemas for OLTP and OLAP systems, tailored to your business logic.'
    },
    {
      icon: faCogs,
      title: 'Performance Tuning',
      description: 'Optimize queries, indexes, and configurations to improve database throughput and reduce latency.'
    },
    {
      icon: faLock,
      title: 'Security & Compliance',
      description: 'Implement encryption, RBAC, auditing, and compliance strategies for secure data handling.'
    },
    {
      icon: faProjectDiagram,
      title: 'Data Migration',
      description: 'Seamlessly migrate data across platforms (on-prem ↔ cloud, MySQL ↔ PostgreSQL, etc.) with minimal downtime.'
    },
    {
      icon: faChartBar,
      title: 'Backup & Monitoring',
      description: 'Set up automated backups, high availability, and real-time monitoring using native tools or external platforms.'
    }
  ],
  benefits: [
    'High-performing and reliable database systems',
    'Secure data with access control and encryption',
    'Seamless integration with your application stack',
    'Reduced downtime and faster performance',
    'Ongoing maintenance and real-time monitoring'
  ]
}

export default function DatabaseServicesPage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="w-full bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={databaseServiceData.image}
              alt={databaseServiceData.title}
              fill
              className="object-contain rounded-lg"
              loading="lazy"  // <-- lazy load
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {databaseServiceData.title}
            </h1>
            <p className="text-lg text-white mb-3">{databaseServiceData.overview}</p>
            <p className="text-sm text-white mb-4">
              <strong>Timeline:</strong> {databaseServiceData.duration}
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
            {databaseServiceData.details.map((item, index) => (
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
      <DatabaseServices />

      {/* Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose This Service
          </h2>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            {databaseServiceData.benefits.map((benefit, i) => (
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
