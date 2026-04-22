"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faServer,
  faProjectDiagram,
  faDatabase,
  faCodeBranch,
  faChartLine
} from '@fortawesome/free-solid-svg-icons'

const devopsServiceData = {
  title: 'DevOps Services',
  image: '/images/banners/devops.jpg',
  duration: 'Ongoing / Project-Based',
  overview:
    'Accelerate your software delivery lifecycle through CI/CD automation, infrastructure as code, containerization, and cloud-native operations.',
  details: [
    {
      icon: faProjectDiagram,
      title: 'CI/CD Automation',
      description: 'Implement reliable, fast deployment pipelines using Jenkins, GitHub Actions, GitLab CI/CD, or AWS CodePipeline.'
    },
    {
      icon: faServer,
      title: 'Infrastructure as Code',
      description: 'Provision and manage infrastructure using tools like Terraform, CloudFormation, or Pulumi.'
    },
    {
      icon: faCodeBranch,
      title: 'Containerization & Orchestration',
      description: 'Containerize apps using Docker and orchestrate with Kubernetes, ECS, or EKS.'
    },
    {
      icon: faChartLine,
      title: 'Monitoring & Observability',
      description: 'Track system health using Prometheus, Grafana, ELK, CloudWatch, and custom alerts.'
    },
    {
      icon: faDatabase,
      title: 'Environment Management',
      description: 'Manage dev/stage/prod environments for seamless integration and rollback support.'
    }
  ],
  benefits: [
    'Faster and safer deployments',
    'Scalable infrastructure with automation',
    'Reduced downtime and higher system reliability',
    'Centralized monitoring and faster recovery'
  ]
}

export default function DevOpsPage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="w-full bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={devopsServiceData.image}
              alt={devopsServiceData.title}
              fill
              className="object-contain rounded-lg"
              priority
              fetchPriority="high"
 
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {devopsServiceData.title}
            </h1>
            <p className="text-lg text-white mb-3">{devopsServiceData.overview}</p>
            <p className="text-sm text-white mb-4">
              <strong>Timeline:</strong> {devopsServiceData.duration}
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
            {devopsServiceData.details.map((item, index) => (
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
            {devopsServiceData.benefits.map((benefit, i) => (
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
