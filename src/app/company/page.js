"use client"

import Image from "next/image"
import {
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Layers3,
  Target,
  Users,
} from "lucide-react"

const companyStats = [
  {
    value: "15+",
    label: "Years of industry experience",
    detail: "Built on practical delivery across training, engineering, and business problem-solving.",
  },
  {
    value: "Live",
    label: "Project-based learning approach",
    detail: "Programs are shaped around implementation, not passive theory alone.",
  },
  {
    value: "End-to-End",
    label: "Technology support capability",
    detail: "From learning journeys to engineering execution, we support both people and teams.",
  },
  {
    value: "Outcome-Focused",
    label: "Guidance that stays relevant",
    detail: "Every engagement is designed to improve readiness, confidence, and measurable progress.",
  },
]

const valuePillars = [
  {
    title: "Industry-grounded learning",
    description:
      "We design training around the realities of modern delivery, including workflows, tools, collaboration, and project execution.",
    icon: GraduationCap,
  },
  {
    title: "Professional mentorship",
    description:
      "Learners and teams benefit from guidance shaped by hands-on experience, not generic classroom instruction.",
    icon: Users,
  },
  {
    title: "Structured technology delivery",
    description:
      "Our approach blends clarity, discipline, and technical depth so engagements feel organized, scalable, and dependable.",
    icon: Layers3,
  },
]

const missionFocus = [
  {
    title: "Hands-on capability building",
    description: "Practical training built around live projects, implementation thinking, and real-world confidence.",
    icon: Target,
  },
  {
    title: "Technology execution support",
    description: "Reliable development and solution support across software, cloud, and engineering-focused initiatives.",
    icon: Briefcase,
  },
  {
    title: "Long-term growth orientation",
    description: "Learning and delivery models designed to improve outcomes for students, professionals, and organizations.",
    icon: CheckCircle2,
  },
]

const partnerPoints = [
  "Proven experience across training, software, cloud, and delivery-focused engagements",
  "Live project-based learning designed to improve confidence and practical readiness",
  "Capability across full-stack, cloud, automation, and engineering support initiatives",
  "A dependable partner for individual growth, team enablement, and business transformation",
]

export default function CompanyPage() {
  return (
    <main className="bg-white text-gray-800 dark:bg-slate-950 dark:text-slate-100">
      <section className="bg-black px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="text-center md:text-left">
            <span className="inline-flex rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Trusted IT Experts
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Tinitiate AI Solutions
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

      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_48%,#eef5ff_100%)] p-6 shadow-[0_28px_80px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,#020617_0%,#0b1220_55%,#0f1f3d_100%)] sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-200">
                  About Us
                </span>
                <h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
                  Built to connect ambition with real-world capability.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300">
                  Tinitiate AI Solutions is a technology-driven organization focused on
                  delivering high-quality IT training, practical mentoring, and
                  implementation-oriented development support. We help learners,
                  professionals, and teams move beyond theory by building the
                  technical confidence required in real working environments.
                </p>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300">
                  With deep industry exposure and a strong commitment to quality,
                  we bring together structured learning, relevant technology
                  guidance, and delivery discipline. Our goal is simple: create
                  meaningful progress for every individual or organization that
                  chooses to work with us.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {valuePillars.map(({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-sky-500/15 dark:text-sky-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  {companyStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                    >
                      <div className="text-2xl font-extrabold text-slate-900 dark:text-slate-50">
                        {stat.value}
                      </div>
                      <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(2,6,23,0.32)] dark:ring-1 dark:ring-sky-500/15">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
                    What You Can Expect
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">
                    Clear guidance, relevant skills, and dependable execution.
                  </h3>
                  <div className="mt-5 space-y-4">
                    {[
                      "A practical learning and delivery style shaped by current industry expectations.",
                      "Programs and services that prioritize clarity, accountability, and measurable value.",
                      "A partner that supports both immediate outcomes and long-term capability growth.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                        <p className="text-sm leading-7 text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-12 dark:bg-slate-900/40 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-50">Our Mission</h2>
            <p className="mt-6 leading-8 text-gray-700 dark:text-slate-300">
              To enable individuals, students, and corporate teams to thrive in the
              digital world by delivering hands-on, real-time IT education, software
              development, and cloud-based engineering solutions.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {missionFocus.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-sky-500/10 dark:text-sky-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-slate-50">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-slate-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-blue-100 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950 sm:p-8 lg:p-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-50">Why Partner With Us?</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-700 dark:text-slate-300">
              Whether you&apos;re an individual looking to upskill or an enterprise
              needing cutting-edge development services, Tinitiate AI Solutions is your trusted
              technology partner. Our commitment to personalized mentoring,
              project-oriented learning, and scalable engineering makes us stand
              out.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {partnerPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="mt-0.5 text-lg font-bold text-blue-600 dark:text-sky-300">+</span>
                <span className="text-gray-700 dark:text-slate-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
