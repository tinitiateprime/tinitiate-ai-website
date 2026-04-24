"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

function buildServiceHref(serviceTitle) {
  return `/request-callback?service=${encodeURIComponent(serviceTitle)}`
}

export default function ServiceCards() {
  const itDevelopmentServices = [
    {
      title: 'Cloud Services',
      duration: 'Project Based',
      image: '/images/it-development/cloud.jpg',
      description: 'Architect, migrate, and manage workloads on AWS, Azure, and GCP-IaC, containers, serverless, CI/CD, observability, security, and cost optimization.',
      href: buildServiceHref('Cloud Services'),
    },
    {
      title: 'AI-Powered Development',
      duration: 'Project Based',
      image: '/images/it-development/ai-powered.jpg',
      description: 'Design and ship LLM apps, RAG search, agents, and AI copilots. Integrate OpenAI, Azure OpenAI, or Bedrock with secure data pipelines and responsible AI patterns.',
      href: buildServiceHref('AI-Powered Development'),
    },
    {
      title: 'App Development',
      duration: 'Custom Timeline',
      image: '/images/it-development/app-development-1.jpg',
      description: 'Build cross-platform mobile and web apps tailored to client needs with seamless UX and secure APIs.',
      href: buildServiceHref('App Development'),
    },
    {
      title: 'Web/Backend Development',
      duration: 'Project Based',
      image: '/images/it-development/web-backend-2.jpg',
      description: 'Develop scalable, secure backend systems and responsive web applications using modern frameworks.',
      href: buildServiceHref('Web/Backend Development'),
    },
    {
      title: 'Testing and Support',
      duration: 'Ongoing',
      image: '/images/it-development/testing-support-2.jpg',
      description: 'Ensure quality through automated and manual testing, bug fixing, and continuous deployment support.',
      href: buildServiceHref('Testing and Support'),
    },
    {
      title: 'Reporting Services',
      duration: 'Monthly / On-Demand',
      image: '/images/it-development/reporting.jpg',
      description: 'Build interactive dashboards, automated reports, and business intelligence systems for actionable insights.',
      href: buildServiceHref('Reporting Services'),
    },
    {
      title: 'DevOps Services',
      duration: 'Ongoing / Project-Based',
      image: '/images/it-development/devops.jpg',
      description: 'Streamline development and deployment with CI/CD pipelines, containerization, and infrastructure automation.',
      href: buildServiceHref('DevOps Services'),
    },
    {
      title: 'Database Services',
      duration: 'Project / Ongoing',
      image: '/images/it-development/database.jpg',
      description: 'Design, optimize, and manage relational and NoSQL databases with high availability, replication, and backup strategies.',
      href: buildServiceHref('Database Services'),
    },
    {
      title: 'Full Stack Development',
      duration: 'Custom Timeline',
      image: '/images/it-development-services.jpg',
      description: 'End-to-end development using modern frontend and backend technologies, delivering complete web and mobile solutions.',
      href: buildServiceHref('Full Stack Development'),
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {itDevelopmentServices.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          className="block h-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          <motion.article
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-48 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                {service.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">Timeline: {service.duration}</p>
              <p className="mt-2 line-clamp-3 text-sm text-gray-700">{service.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">
                Discuss This Service {'->'}
              </span>
            </div>
          </motion.article>
        </Link>
      ))}
    </div>
  )
}
