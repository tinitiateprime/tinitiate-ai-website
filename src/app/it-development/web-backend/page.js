"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faReact
} from '@fortawesome/free-brands-svg-icons'

import {
  faServer,
  faDatabase,
  faUserShield,
  faCloudUploadAlt,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons'


const serviceData = {
  title: 'Web & Backend Development Services',
  image: '/images/banners/web-backend.jpg', // 🔁 Replace with your actual image path
  duration: 'Project Based or Retainer Model',
  overview:
    'Develop robust, secure, and scalable backend systems and web applications using modern frameworks and APIs tailored to business needs.',
details: [
  {
    icon: faReact,
    title: 'Frontend Development',
    description: 'Beautiful UIs using React, Next.js, Angular for modern user experience.'
  },
  {
    icon: faServer,
    title: 'Backend Architecture',
    description: 'Robust APIs using Node.js, Django, Spring Boot with scalable design.'
  },
  {
    icon: faDatabase,
    title: 'Database Integration',
    description: 'PostgreSQL, MySQL, MongoDB database modeling and secure access.'
  },
  {
    icon: faUserShield,
    title: 'Security & Auth',
    description: 'Authentication, RBAC, and secure user management.'
  },
  // {
  //   icon: faCloudUploadAlt,
  //   title: 'DevOps & Cloud',
  //   description: 'CI/CD and deployment on AWS, Azure, and on-prem environments.'
  // },
  {
    icon: faProjectDiagram,
    title: 'API Development',
    description: 'REST and GraphQL APIs to power modern apps and services.'
  }
],

  benefits: [
    'High-performance and secure web platforms',
    'Custom workflows tailored to business logic',
    'Future-ready architecture for scalability',
    'Ongoing support and maintenance options'
  ]
}

export default function WebBackendDevelopmentPage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-6 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
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

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {serviceData.title}
            </h1>
            <p className="text-lg text-white mb-3">{serviceData.overview}</p>
            <p className="text-sm text-white mb-4">
              <strong>Timeline:</strong> {serviceData.duration}
            </p>
            {/* <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
              Request Consultation
            </button> */}
                   <Link
             href={`/request-callback/`}
            className="mt-7 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
          >
             Request Consultation
          </Link>
          </div>
        </div>
      </section>

      {/* Offerings */}
{/* <section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
    Service Offerings
  </h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    {serviceData.details.map((item, index) => (
      <div
        key={index}
        className="bg-white shadow-md border rounded-xl p-6 hover:shadow-lg transition"
      >
        <div className="flex items-center space-x-4 mb-4">
          <FontAwesomeIcon
            icon={item.icon}
            className="text-blue-600 w-6 h-6"
          />
          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    ))}
  </div>
</section> */}

<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
      Service Offerings
    </h2>

    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {serviceData.details.map((item, index) => (
        <div
          key={index}
          className="group bg-white border border-gray-200 shadow-md rounded-2xl p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center mb-4 space-x-4">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 transition group-hover:bg-blue-500 group-hover:text-white">
              <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Choose Us */}
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
