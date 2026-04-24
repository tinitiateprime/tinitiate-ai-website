'use client'

import Image from 'next/image'

const highlights = [
  {
    title: 'Industry-Aligned Training',
    desc: 'Learn and apply skills that top companies demand.',
  },
  {
    title: 'Hands-on Project Work',
    desc: 'Gain experience in real-world projects that enhance your portfolio.',
  },
  {
    title: 'Expert Mentorship',
    desc: 'Guidance from professionals in Database, Middleware, and UI/UX.',
  },
  {
    title: 'Hiring Pathway',
    desc: 'Stand out to recruiters with practical experience and skills.',
  },
  {
    title: 'Onsite & Remote Options',
    desc: 'Participate from anywhere or join us in person.',
  },
]

const audiences = [
  {
    title: 'For Companies',
    intro: 'Why hire from our program?',
    items: [
      'Pre-vetted, job-ready candidates who can contribute from day one',
      'Domain-specific exposure across Database, Middleware, and UI/UX',
      'Lower onboarding effort with practical project experience',
    ],
  },
  {
    title: 'For Students / Individuals',
    intro: 'Why opt for the 6-month Work Experience Program?',
    items: [
      'Corporate projects with guided execution',
      'Offshore-onshore working model exposure',
      'Stable, long-term job-oriented learning path',
    ],
  },
  {
    title: 'For Parents',
    intro: 'Why is this program valuable for your child?',
    items: [
      'Structured daily routine and discipline',
      'Corporate project experience with accountability',
      'Safer long-term career direction with practical outcomes',
    ],
  },
  {
    title: 'For Colleges',
    intro: 'Why collaborate with our program?',
    items: [
      'Final-year project support',
      'Training and certifications',
      'Experience certificate for students',
      'Placement collaboration',
      'Structured program support for management teams',
    ],
  },
]

const timeline = [
  {
    title: 'Month 1: Beginner Training',
    desc: 'Foundation-level training covering basic technical skills, tools, and workflow essentials.',
  },
  {
    title: 'Month 2: Intermediate Training',
    desc: 'Deeper focus on core concepts, intermediate project work, and structured assignments.',
  },
  {
    title: 'Month 3: Advanced Training & Project Onboarding',
    desc: 'Hands-on exposure to advanced tools, live project onboarding, and mentorship sessions.',
  },
  {
    title: 'Month 4: Corporate Project Kickoff',
    desc: 'Join a real project squad, understand requirements, plan sprints, and start feature development with daily standups.',
  },
  {
    title: 'Month 5: Iteration & Delivery',
    desc: 'Ship features in sprint cycles, write tests, handle code reviews, and present stakeholder demos.',
  },
  {
    title: 'Month 6: Placement Prep & Handover',
    desc: 'Polish resume and LinkedIn, complete mock interviews, finalize documentation, and receive your experience certificate.',
  },
]

export default function WorkExperienceProgramPage() {
  return (
    <main className="bg-gray-100 text-gray-800">
      <section className="bg-black px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Work Experience Training Program
            </h1>
            <p className="text-base leading-7 text-white/85 sm:text-lg">
              Build career-ready IT skills through real projects, mentorship,
              and hands-on guidance, whether you join remotely or onsite.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/banners/work-experience.jpg"
              alt="Work Experience banner"
              width={600}
              height={400}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid items-center gap-8 rounded-[2rem] bg-white p-5 shadow-md sm:p-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-indigo-600 sm:text-4xl">About the Program</h2>
            <p className="mt-4 leading-8 text-gray-700">
              The Tinitiate AI Solutions Work Experience Program is a structured 5-month
              training and project-based journey designed to equip aspiring tech
              professionals with industry-ready skills in:
            </p>
            <ul className="mt-5 space-y-2 pl-5 text-gray-700">
              <li className="list-disc">Database Management</li>
              <li className="list-disc">Middleware Technologies</li>
              <li className="list-disc">UI/UX Design</li>
            </ul>
            <p className="mt-4 leading-8 text-gray-700">
              Participants gain hands-on experience by working on real-world
              projects guided by experienced mentors from the industry.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/work-experience-program.jpg"
              alt="Work Experience Program"
              width={960}
              height={720}
              className="h-full w-full object-cover"
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div>
          <h2 className="text-center text-3xl font-extrabold text-indigo-700 sm:text-4xl">
            Why This Program?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-indigo-700">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold text-indigo-700 sm:text-4xl">
            Who Should Join?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {audiences.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold text-indigo-700">{group.title}</h3>
                <p className="mt-2 text-gray-700">{group.intro}</p>
                <ul className="mt-4 space-y-2 pl-5 text-sm text-gray-800">
                  {group.items.map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 overflow-hidden rounded-3xl bg-white p-2 shadow-lg">
            <Image
              src="/images/Work-experience-timeline-v3.png"
              alt="Six-step work experience program journey"
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl"
              loading="eager"
              sizes="100vw"
            />
          </div>

          <h2 className="mb-8 text-center text-3xl font-bold text-indigo-600 sm:text-4xl lg:text-5xl">
            Training Timeline
          </h2>

          <div className="space-y-4">
            {timeline.map((phase, index) => (
              <div
                key={phase.title}
                className="flex items-start rounded-2xl bg-white p-4 shadow"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500 font-bold text-white">
                  {index + 1}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{phase.title}</p>
                  <p className="mt-1 text-sm text-gray-700">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-md sm:p-8">
          <h2 className="text-2xl font-bold text-indigo-600">Technical Objectives</h2>
          <ul className="mt-4 space-y-2 pl-5 text-gray-700">
            <li className="list-disc">GitHub Code Contributions</li>
            <li className="list-disc">LinkedIn Validations & Reviews</li>
            <li className="list-disc">Design, Development, Deployment</li>
            <li className="list-disc">Peer & Mentor Feedback</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md sm:p-8">
          <h2 className="text-2xl font-bold text-indigo-600">Soft Skill Outcomes</h2>
          <ul className="mt-4 space-y-2 pl-5 text-gray-700">
            <li className="list-disc">Workplace Communication</li>
            <li className="list-disc">Agile & Team Collaboration</li>
            <li className="list-disc">Client Interaction Practice</li>
            <li className="list-disc">Self-paced Speaking Skills</li>
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-tr from-blue-900 to-blue-700 px-4 py-14 text-center text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold sm:text-4xl">How to Join?</h2>
          <p className="mt-4 text-base leading-7 text-blue-100 sm:text-lg">
            Apply online with a small fee covering your training, resources,
            certification, and project facilitation.
          </p>
          <a
            href="/request-callback?service=work-experience"
            className="touch-target mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-indigo-800 shadow-lg transition hover:bg-gray-100"
          >
            Enquire Now
          </a>
        </div>
      </section>
    </main>
  )
}
