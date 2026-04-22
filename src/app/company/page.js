"use client"

import Image from "next/image"

const partnerPoints = [
  "Proven industry experience across multiple domains",
  "Live project-based training with practical exposure",
  "Full-stack, cloud, and DevOps capabilities",
  "Support for corporate upskilling and transformation",
]

export default function CompanyPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-black px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="text-center md:text-left">
            <span className="inline-flex rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Trusted IT Experts
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              TINITIATE Technologies
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
              Empowering individuals and businesses through innovative IT training
              and development services.
            </p>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-3xl shadow-2xl sm:min-h-[320px] md:min-h-[360px]">
            <Image
              src="/images/banners/company.jpg"
              alt="Company overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-6 leading-8 text-gray-700">
            TINITIATE is a technology-driven organization committed to delivering
            high-quality IT training and development services. With over 15 years
            of industry experience, we bridge the gap between education and
            employment by equipping students and professionals with real-world
            skills.
          </p>
          <p className="mt-4 leading-8 text-gray-700">
            Our team of experienced professionals, industry experts, and
            technologists ensures every engagement reflects our commitment to
            excellence, innovation, and learner success.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-6 leading-8 text-gray-700">
            To enable individuals, students, and corporate teams to thrive in the
            digital world by delivering hands-on, real-time IT education, software
            development, and cloud-based engineering solutions.
          </p>
          <ul className="mt-6 space-y-3 pl-5 text-gray-700">
            <li className="list-disc">Empower through practical, live-project-based training</li>
            <li className="list-disc">Deliver full-cycle software development and support</li>
            <li className="list-disc">Support career growth with domain-oriented guidance</li>
          </ul>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-blue-100 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Partner With Us?</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-700">
              Whether you&apos;re an individual looking to upskill or an enterprise
              needing cutting-edge development services, TINITIATE is your trusted
              technology partner. Our commitment to personalized mentoring,
              project-oriented learning, and scalable engineering makes us stand
              out.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {partnerPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4"
              >
                <span className="mt-0.5 text-lg font-bold text-blue-600">+</span>
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
