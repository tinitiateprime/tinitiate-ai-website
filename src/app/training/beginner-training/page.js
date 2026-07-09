import Link from 'next/link'
import {
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiGitBranch,
  FiPhone,
} from 'react-icons/fi'
import {
  SiJavascript,
  SiMysql,
  SiPython,
  SiTypescript,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const BRAND = {
  ai: '#3776AB',
  python: '#3776AB',
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  java: '#007396',
  mysql: '#4479A1',
  datastructures: '#8B5CF6',
}

const HERO = {
  title: 'Beginner Online Training Program',
  subtitle:
    'Live online IT training with strong foundations in programming, web development, databases, AI, and problem solving.',
  badge: 'No prior experience required',
}

const COURSES = [
  {
    key: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    Icon: FiCpu,
    color: 'from-blue-500 to-indigo-500',
    brandKey: 'ai',
    level: 'Beginner',
    duration: '6-8 weeks',
    outcomes: [
      'AI fundamentals and real use cases',
      'Prompting and workflow thinking',
      'Foundation for modern AI tools',
    ],
    href: '/courses/artificial-intelligence-beginner-course',
  },
  {
    key: 'python',
    name: 'Python',
    Icon: SiPython,
    color: 'from-blue-500 to-cyan-400',
    brandKey: 'python',
    level: 'Absolute Beginner',
    duration: '6-8 weeks',
    outcomes: [
      'Programming fundamentals',
      'Problem-solving and logic building',
      'Mini console projects',
    ],
    href: '/courses/python-language-course',
  },
  {
    key: 'javascript',
    name: 'JavaScript',
    Icon: SiJavascript,
    color: 'from-emerald-500 to-teal-500',
    brandKey: 'javascript',
    level: 'Beginner',
    duration: '6-8 weeks',
    outcomes: [
      'JavaScript language foundations',
      'Understand DOM and events',
      'Prepare for frontend frameworks',
    ],
    href: '/courses/javascript-language-course',
  },
  {
    key: 'typescript',
    name: 'TypeScript',
    Icon: SiTypescript,
    color: 'from-sky-500 to-indigo-500',
    brandKey: 'typescript',
    level: 'Beginner-Intermediate',
    duration: '4-6 weeks',
    outcomes: [
      'Strong typing for JavaScript',
      'Better code quality and safety',
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
    duration: '8-10 weeks',
    outcomes: [
      'OOP concepts in depth',
      'Console and basic project work',
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
    duration: '4-6 weeks',
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
    brandKey: 'datastructures',
    level: 'Beginner-Intermediate',
    duration: '6-8 weeks',
    outcomes: [
      'Arrays, linked lists, stacks, queues',
      'Trees, graphs, hashing basics',
      'Time and space complexity intuition',
    ],
    href: '/courses/data-structures-beginner-course',
  },
]

const FAQ = [
  {
    q: 'I am completely new to IT. Can I join?',
    a: 'Yes. This beginner training is specifically designed for students and professionals with zero or very little coding background.',
  },
  {
    q: 'Do I need a powerful laptop?',
    a: 'No. A basic laptop with internet connection is enough. We help you set up all required tools step by step.',
  },
  {
    q: 'Can I do this along with college or job?',
    a: 'Yes. Sessions can be planned in evenings or weekends, and we share recordings and practice material.',
  },
  {
    q: 'What happens after I finish?',
    a: 'We suggest your next path, such as Full Stack, Data Engineering, Cloud, or AI, and help you transition smoothly.',
  },
]

function CourseCard({ course }) {
  const { Icon } = course
  const brandColor = BRAND[course.brandKey] || '#4B5563'

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-indigo-200 bg-white shadow-sm ring-1 ring-indigo-100 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${course.color} opacity-20`} />
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-indigo-200/40 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-sky-200/30 blur-2xl" />
      </div>

      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-50">
        <div className="absolute inset-x-3 top-3 z-20 flex items-center justify-between gap-2">
          <div className="inline-flex min-w-0 items-center gap-1 rounded-full border border-indigo-200 bg-white/90 px-3 py-1 text-[11px] font-semibold text-indigo-700 shadow-sm backdrop-blur">
            <FiCheckCircle className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">Skills Covered</span>
          </div>

          <div className="inline-flex min-w-0 items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700 shadow-sm">
            <span className="truncate">{course.level}</span>
          </div>
        </div>

        <div className="relative mt-4 flex h-28 w-28 items-center justify-center rounded-3xl border border-indigo-200 bg-white shadow-sm ring-1 ring-white">
          <Icon className="h-16 w-16" style={{ color: brandColor }} />
        </div>
      </div>

      <div className="relative flex grow flex-col p-6">
        <div className="min-h-[6.4rem]">
          <h3 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
            {course.name}
          </h3>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            {course.level} path with {course.duration} of mentor-led beginner practice.
          </p>
        </div>

        <div className="mt-2 rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 to-white p-3">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
              <FiCheckCircle className="h-3.5 w-3.5 text-indigo-700" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-800">
              Included in this course
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {course.outcomes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg border border-white bg-white px-2.5 py-2 text-xs font-medium text-gray-700 shadow-sm"
              >
                <FiCheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-5">
          <Link
            href={course.href}
            prefetch={false}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
          >
            View syllabus
            <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-black opacity-60" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-black opacity-40" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              {HERO.badge}
              <span className="mx-2 h-3 w-px bg-slate-600" />
              <span className="font-semibold text-emerald-300">
                Online Training
              </span>
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {HERO.title}
            </h1>

            <p className="mt-4 max-w-xl text-sm text-slate-200 md:text-base">
              {HERO.subtitle}{' '}
              Get the fundamentals clear so you can grow into Full Stack,
              Data, Cloud, or AI roles with confidence from anywhere.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
              {COURSES.map((course) => (
                <span
                  key={course.key}
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-100"
                >
                  {course.name}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-callback"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
              >
                Talk to a Mentor
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Choose your beginner course
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course) => (
              <CourseCard key={course.key} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-start text-2xl font-bold text-gray-900 md:text-3xl">
            FAQs
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {FAQ.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2">
                  <FiCheckCircle className="h-5 w-5 text-indigo-600 opacity-80" />
                  <h3 className="text-base font-semibold text-gray-900">{q}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Want a personalized study plan?
                </h4>
                <p className="text-sm text-gray-700">
                  Tell us your goals and we will map the right beginner path.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-callback"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
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
