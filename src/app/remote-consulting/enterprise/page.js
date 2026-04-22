'use client'

import Image from 'next/image'
import Link from 'next/link'
import ServiceCards from '@/app/components/ServiceCard'
import { CheckCircle, Shield, CloudCog, Cpu, Database, FileLock, MoveRight, ClipboardList, Users  } from 'lucide-react'

export default function EnterpriseConsultingPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
             Enterprise Remote Consulting
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Strategic Technology Leadership. Delivered Remotely. Executed Precisely.
            </p>
            <p className="text-sm text-gray-400">
              In today&apos;s digital landscape, we help you modernize, scale, and transform without adding on-site overhead — through secure, high-impact remote execution.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/banners/enterprise.jpg"
              alt="Enterprise Consulting"
              fill
              className="object-cover"
              loading="lazy"  // <-- lazy load
            />
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">🧠 What We Help You With</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: <Cpu className="w-6 h-6 text-blue-600" />,
                title: 'Architecture Reviews & Modernization',
                points: [
                  'Microservices and event-driven systems',
                  'Legacy-to-cloud refactor strategies',
                  'Resilience and DR patterns',
                ],
              },
              {
                icon: <CloudCog className="w-6 h-6 text-indigo-600" />,
                title: 'DevOps & Infra Optimization',
                points: [
                  'CI/CD redesign and audits',
                  'Serverless & Kubernetes patterns',
                  'IaC using Terraform, CDK, or CloudFormation',
                ],
              },
              {
                icon: <Database className="w-6 h-6 text-purple-600" />,
                title: 'Data Platform Strategy',
                points: [
                  'Modern data lakes and warehouse solutions',
                  'Snowflake, Redshift, BigQuery implementations',
                  'Data governance and lineage tooling',
                ],
              },
              {
                icon: <ClipboardList className="w-6 h-6 text-orange-600" />,
                title: 'Engineering Process Improvement',
                points: [
                  'Agile diagnostic and sprint effectiveness',
                  'Internal developer platform strategy',
                  'Code review and release hygiene audits',
                ],
              },
            ].map(({ title, icon, points }, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">{icon}<h3 className="text-lg font-semibold">{title}</h3></div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-15 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">🚀 Why Enterprise Teams Choose Us</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              'Enterprise-Grade Thinking, Startup-Level Agility',
              'Fractional Expertise, Full Commitment',
              'Remote-Native Engagement with async delivery culture',
              'Secure. Scalable. Strategic. Compliant with SOC 2, GDPR',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Security Commitment */}
      <section className="py-10 px-6 bg-gray-50 ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">🔒 Secure Remote Engagement, Trusted by Enterprises</h2>
          <p className="text-gray-600 mb-6">
            We work under signed NDAs, use strict access protocols, and deliver clear timelines and ownership across engagements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-blue-600" /> Signed NDAs</div>
            <div className="flex items-center gap-2"><Users className="w-5 h-5 text-purple-600" /> Team Extensions or Embedded Roles</div>
            <div className="flex items-center gap-2"><FileLock className="w-5 h-5 text-green-600" /> Secure Delivery and Reporting</div>
          </div>
        </div>
      </section>

            <section className="py-15 px-6 bg-white  border-gray-300 mb-10">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Our Expertise</h2>
                <ServiceCards />
              </div>
            </section>

      {/* CTA */}
   <section className="py-15 px-6 bg-gradient-to-tr from-blue-900 to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4"> Ready to Unlock Strategic Velocity?</h2>
          <p className="text-white-700 mb-6">
            Whether you need a fresh tech perspective or embedded execution support — we&apos;re ready to deliver high-impact outcomes.
          </p>
          <Link
            href="/request-callback?service=enterprise-consulting"
           className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-blue-700 hover:bg-blue-50 transition font-semibold"
          >
            
            Talk to Us
          </Link>
        </div>
      </section>
    </main>
  )
}