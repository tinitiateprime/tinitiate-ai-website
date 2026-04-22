
import Link from 'next/link'
import {
  FiArrowRight,
  FiUsers,
  FiCheckCircle,
  FiPhone,
  FiGitBranch 
} from 'react-icons/fi'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

// -------------------- BRAND COLORS --------------------
const BRAND = {
  python: '#3776AB',
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  java: '#007396',
  mysql: '#4479A1',
  datastructures: '#8B5CF6', // purple for DS
}

// -------------------- DATA --------------------
const HERO = {
  title: 'Beginner Online Training Program',
  subtitle: 'Live online IT training with strong foundations in programming, web development, and databases.',
  badge: 'No prior experience required',
  // ...
}


const COURSES = [
  {
    key: 'python',
    name: 'Python',
    Icon: SiPython,
    color: 'from-blue-500 to-cyan-400',
    brandKey: 'python',
    level: 'Absolute Beginner',
    duration: '6–8 weeks',
    outcomes: [
      'Programming fundamentals',
      'Problem-solving & logic building',
      'Mini console projects',
    ],
    href: '/courses/python-language-course',
  },
  {
    key: 'web',
    name: 'JavaScript / HTML / CSS',
    Icon: SiJavascript,
    color: 'from-emerald-500 to-teal-500',
    brandKey: 'javascript',
    level: 'Beginner',
    duration: '6–8 weeks',
    outcomes: [
      'Build responsive web pages',
      'Understand DOM & events',
      'Launch your first mini website',
    ],
    href: '/courses/javascript-language-course',
  },
  {
    key: 'typescript',
    name: 'TypeScript',
    Icon: SiTypescript,
    color: 'from-sky-500 to-indigo-500',
    brandKey: 'typescript',
    level: 'Beginner–Intermediate',
    duration: '4–6 weeks',
    outcomes: [
      'Strong typing for JavaScript',
      'Better code quality & safety',
      'Prep for React/Next.js stack',
    ],
    href: '/courses/typescript-beginner-course',
  },
{
  key: 'java',
  name: 'Java',
  Icon: FaJava,
  color: 'from-red-500 to-amber-500',
  brandKey: 'java',
  level: 'Beginner',
  duration: '8–10 weeks',
  outcomes: [
    'OOP concepts in depth',
    'Console & basic project work',
    'Strong foundation for advanced Java',
  ],
  href: '/courses/java-language-course',
}, 
  {
    key: 'sql',
    name: 'SQL',
    Icon: SiMysql,
    color: 'from-emerald-500 to-teal-500',
    brandKey: 'mysql',
    level: 'Beginner',
    duration: '4–6 weeks',
    outcomes: [
      'Querying databases confidently',
      'Joins, filters, aggregations',
      'Hands-on with real data models',
    ],
    href: '/courses/sql-server-beginner-course',
  },
  {
  key: 'data-structures',
  name: 'Data Structures',
  Icon: FiGitBranch,
  color: 'from-violet-500 to-fuchsia-500',
  brandKey: 'datastructures', // optional – add in BRAND if you want a custom color
  level: 'Beginner–Intermediate',
  duration: '6–8 weeks',
  outcomes: [
    'Arrays, linked lists, stacks, queues',
    'Trees, graphs, hashing basics',
    'Time & space complexity intuition',
  ],
  href: '/courses/data-structures-beginner-course',
},

]

const STEPS = [
  {
    title: 'Free Counselling Call',
    text: 'We understand your background, goals, and timeline before suggesting a course.',
  },
  {
    title: 'Personalized Beginner Plan',
    text: 'We pick the right starting modules for you and define a realistic weekly schedule.',
  },
  {
    title: 'Live Mentor-Led Sessions',
    text: 'Hands-on training with practice, assignments, and guidance in every class.',
  },
  {
    title: 'Projects & Next-Step Guidance',
    text: 'Build portfolio-ready mini projects and decide your next stack or specialization.',
  },
]

const FAQ = [
  {
    q: 'I am completely new to IT. Can I join?',
    a: 'Yes. This beginner training is specifically designed for students and professionals with zero or very little coding background.',
  },
  {
    q: 'Do I need a powerful laptop?',
    a: 'No. A basic laptop with internet connection is enough. We help you set up all required tools step-by-step.',
  },
  {
    q: 'Can I do this along with college or job?',
    a: 'Yes. Sessions can be planned in evenings or weekends, and we share recordings and practice material.',
  },
  {
    q: 'What happens after I finish?',
    a: 'We suggest your next path—Full Stack, Data Engineering, Cloud, or AI—and help you transition smoothly.',
  },
]

// -------------------- COMPONENTS --------------------
function CourseCard({ course }) {
  const { Icon } = course
  const brandColor = BRAND[course.brandKey] || '#4B5563' // fallback gray

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white
                 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-indigo-300"
    >
      {/* Gradient glow */}
      <div
        className={`pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b ${course.color} opacity-25 blur-3xl`}
      />

      <div className="relative flex items-start gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl 
                     bg-indigo-50 ring-2 ring-indigo-100 group-hover:ring-indigo-400 transition"
        >
          <Icon
            className="h-8 w-8"
            style={{ color: brandColor }}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {course.name}
          </h3>
          <p className="mt-1 text-xs text-gray-600">
            {course.level} • {course.duration}
          </p>
        </div>
      </div>

      <ul className="relative mt-4 space-y-1.5 text-sm text-gray-700">
        {course.outcomes.map((item) => (
          <li key={item} className="flex gap-2">
            <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-5 flex items-center justify-between">
        <Link
          href={course.href}
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
        >
          View syllabus
          <FiArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

// -------------------- PAGE --------------------
export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO (black) */}
<section className="relative overflow-hidden bg-black px-6 py-20">
  <div className="pointer-events-none absolute inset-0 bg-black opacity-60" />
  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-black opacity-40" />
  <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center">
    <div className="flex-1">
      <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
        {/* You can also change HERO.badge text if you want */}
        {HERO.badge}
        <span className="mx-2 h-3 w-px bg-slate-600" />
        <span className="font-semibold text-emerald-300">
          Online Training
        </span>
      </span>

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
        {HERO.title}
      </h1>

      <p className="mt-4 max-w-xl text-sm md:text-base text-slate-200">
        {/* All sessions are delivered as{' '}
        <span className="font-semibold text-emerald-300">
        online classes
        </span>{' '}
        with mentor support. */}
        We focus on the essentials first:
        Python, JavaScript/HTML/CSS, TypeScript, Java, and SQL.
        Get the fundamentals clear so you can grow into Full Stack,
        Data, Cloud or AI roles with confidence — from anywhere.
      </p>

      {/* Quick list of what is covered */}
      <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
        {['Python', 'JavaScript / HTML / CSS', 'TypeScript', 'Java', 'SQL'].map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-100"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/request-callback"
          className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
        >
          Talk to a Mentor
          <FiArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* COURSES + HOW IT WORKS (LIGHT THEME) */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[3fr,2fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Choose your beginner course
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {COURSES.map((course) => (
                <CourseCard key={course.key} course={course} />
              ))}
            </div>
          </div>

  
        </div>
      </section>

      {/* FAQ (LIGHT THEME) */}
          
      {/* FAQS */}
      <section className="px-6 py-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-start mb-6">
            FAQs
          </h2>
      
          <div className="grid gap-6 md:grid-cols-2">
            {(Array.isArray(FAQ) ? FAQ : []).map(({ q, a }, i) => (
              <div
                key={q ?? i}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FiCheckCircle className="h-5 w-5 text-indigo-600 opacity-80" />
                  <h3 className="text-base font-semibold text-gray-900">{q}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* CTA */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-bold text-gray-900">Want a personalized study plan?</h4>
                <p className="text-sm text-gray-700">
                  Tell us your goals—career switch, upskilling, or interview prep—and we’ll map the path.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-callback"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  <FiPhone className="h-4 w-4" />
                  Request a Callback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}













