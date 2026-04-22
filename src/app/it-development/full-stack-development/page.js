"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaptopCode,
  faDatabase,
  faCogs,
  faMobileAlt,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons'

const fullStackServiceData = {
  title: 'Full Stack Development',
  image: '/images/it-development-services.jpg', 
  duration: 'Ongoing / Project-Based',
  overview:
    'Build end-to-end web and mobile applications with modern full stack technologies — from frontend design to backend APIs, databases, and deployment.',
  details: [
    {
      icon: faLaptopCode,
      title: 'Frontend Development',
      description: 'Develop responsive UIs using React, Next.js, Vue, or Angular with optimized performance and accessibility.'
    },
    {
      icon: faDatabase,
      title: 'Backend API Development',
      description: 'Build scalable backend APIs using Node.js, Express, Spring Boot, Django, or .NET Core with secure endpoints.'
    },
    {
      icon: faCogs,
      title: 'Integration & Middleware',
      description: 'Integrate third-party APIs, messaging queues, and business logic middleware to connect frontend and backend seamlessly.'
    },
    {
      icon: faMobileAlt,
      title: 'Mobile App Support',
      description: 'Extend full stack architecture to mobile using React Native or Flutter for iOS & Android development.'
    },
    {
      icon: faCodeBranch,
      title: 'CI/CD & Deployment',
      description: 'Automate code builds, testing, and deployment pipelines with GitHub Actions, Docker, and cloud services.'
    }
  ],
  benefits: [
    'Faster time to market with unified development',
    'Seamless frontend-backend integration',
    'Reusable components across web and mobile',
    'Robust backend with secure APIs and DB layers',
    'Scalable architecture ready for production'
  ]
}

export default function FullStackDevelopmentPage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="w-full bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={fullStackServiceData.image}
              alt={fullStackServiceData.title}
              fill
              className="object-contain rounded-lg"
              priority
              fetchPriority="high"
 
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {fullStackServiceData.title}
            </h1>
            <p className="text-lg text-white mb-3">{fullStackServiceData.overview}</p>
            <p className="text-sm text-white mb-4">
              <strong>Timeline:</strong> {fullStackServiceData.duration}
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
            {fullStackServiceData.details.map((item, index) => (
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
            {fullStackServiceData.benefits.map((benefit, i) => (
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
