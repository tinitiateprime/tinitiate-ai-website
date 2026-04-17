// import Link from 'next/link'
// import Image from 'next/image'
// import {
//   FiArrowRight,
//   FiClock,
//   FiUsers,
//   FiCheckCircle
// } from 'react-icons/fi'
// import {
//   SiPython,
//   SiJavascript,
//   SiTypescript,
//   SiMysql,
//   SiHtml5,
//   SiCss3,
// } from 'react-icons/si'

// // -------------------- DATA --------------------
// const HERO = {
//   title: 'Beginner Training Program',
//   subtitle: 'Start your IT journey with the right foundations. Learn programming, web development, and databases from scratch.',
//   badge: 'No prior experience required',
//   image: '/images/banners/beginner-training.jpg', // 👉 change if needed
// }

// const TRACKS = [
//   {
//     key: 'python',
//     name: 'Python',
//     Icon: SiPython,
//     color: 'from-blue-500 to-cyan-400',
//     level: 'Absolute Beginner',
//     duration: '6–8 weeks',
//     outcomes: [
//       'Programming fundamentals',
//       'Problem-solving & logic building',
//       'Mini console projects',
//     ],
//     href: '/courses/python-language-course',
//   },
//   {
//     key: 'web',
//     name: 'JavaScript / HTML / CSS',
//     Icon: SiJavascript,
//     color: 'from-yellow-400 to-orange-500',
//     level: 'Beginner',
//     duration: '6–8 weeks',
//     outcomes: [
//       'Build responsive web pages',
//       'Understand DOM & events',
//       'Launch your first mini website',
//     ],
//     href: '/courses/javascript-language-course',
//     subIcons: [SiHtml5, SiCss3],
//   },
//   {
//     key: 'typescript',
//     name: 'TypeScript',
//     Icon: SiTypescript,
//     color: 'from-sky-500 to-indigo-500',
//     level: 'Beginner–Intermediate',
//     duration: '4–6 weeks',
//     outcomes: [
//       'Strong typing for JavaScript',
//       'Better code quality & safety',
//       'Prep for React/Next.js stack',
//     ],
//     href: '/courses/typescript-beginner-course',
//   },
//   {
//     key: 'java',
//     name: 'Java',
//     Icon: 'non',
//     color: 'from-red-500 to-amber-500',
//     level: 'Beginner',
//     duration: '8–10 weeks',
//     outcomes: [
//       'OOP concepts in depth',
//       'Console & basic project work',
//       'Foundation for backend & Android',
//     ],
//     href: '/courses/java-language-course',
//   },
//   {
//     key: 'sql',
//     name: 'SQL',
//     Icon: SiMysql,
//     color: 'from-emerald-500 to-teal-500',
//     level: 'Beginner',
//     duration: '4–6 weeks',
//     outcomes: [
//       'Querying databases confidently',
//       'Joins, filters, aggregations',
//       'Hands-on with real data models',
//     ],
//     href: '/courses/sql-server-beginner-course',
//   },
// ]

// const STEPS = [
//   {
//     title: 'Free Counselling Call',
//     text: 'We understand your background, goals, and timeline before suggesting a track.',
//   },
//   {
//     title: 'Personalized Beginner Plan',
//     text: 'We pick the right starting modules for you and define a realistic weekly schedule.',
//   },
//   {
//     title: 'Live Mentor-Led Sessions',
//     text: 'Hands-on training with practice, assignments, and guidance in every class.',
//   },
//   {
//     title: 'Projects & Next-Step Guidance',
//     text: 'Build portfolio-ready mini projects and decide your next stack or specialization.',
//   },
// ]

// const FAQ = [
//   {
//     q: 'I am completely new to IT. Can I join?',
//     a: 'Yes. This beginner training is specifically designed for students and professionals with zero or very little coding background.',
//   },
//   {
//     q: 'Do I need a powerful laptop?',
//     a: 'No. A basic laptop with internet connection is enough. We help you set up all required tools step-by-step.',
//   },
//   {
//     q: 'Can I do this along with college or job?',
//     a: 'Yes. Sessions can be planned in evenings or weekends, and we share recordings and practice material.',
//   },
//   {
//     q: 'What happens after I finish?',
//     a: 'We suggest your next path—Full Stack, Data Engineering, Cloud, or AI—and help you transition smoothly.',
//   },
// ]

// // -------------------- COMPONENTS --------------------
// function TrackCard({ track }) {
//   const { Icon, subIcons = [] } = track
//   return (
//     <div
//       className="group relative overflow-hidden rounded-3xl border border-slate-800/40 bg-slate-900/60
//                  p-5 shadow-lg shadow-slate-900/40 transition hover:-translate-y-1 hover:border-indigo-400/80"
//     >
//       {/* Gradient glow */}
//       <div
//         className={`pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b ${track.color} opacity-40 blur-3xl`}
//       />

//       <div className="relative flex items-start gap-4">
//         <div
//           className="flex h-14 w-14 items-center justify-center rounded-2xl 
//                      bg-slate-950/80 ring-2 ring-slate-700 group-hover:ring-indigo-400 transition"
//         >
//           <Icon className="h-8 w-8 text-white" />
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-white">
//             {track.name}
//           </h3>
//           <p className="mt-1 text-xs text-slate-300">
//             {track.level} • {track.duration}
//           </p>

//           {subIcons.length > 0 && (
//             <div className="mt-2 flex flex-wrap items-center gap-2">
//               {subIcons.map((SubIcon, idx) => (
//                 <span
//                   key={idx}
//                   className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-200"
//                 >
//                   <SubIcon className="h-3 w-3" />
//                   HTML & CSS
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <ul className="relative mt-4 space-y-1.5 text-sm text-slate-200">
//         {track.outcomes.map((item) => (
//           <li key={item} className="flex gap-2">
//             <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
//             <span>{item}</span>
//           </li>
//         ))}
//       </ul>

//       <div className="relative mt-5 flex items-center justify-between">
//         <Link
//           href={track.href}
//           className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-white"
//         >
//           View syllabus
//           <FiArrowRight className="h-4 w-4" />
//         </Link>
//         <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-300">
//           Beginner Track
//         </span>
//       </div>
//     </div>
//   )
// }

// // -------------------- PAGE --------------------
// export default function Page() {
//   return (
//     <main className="bg-slate-950 text-slate-50">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-black px-6 py-20">
//         {/* background glow */}
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#4f46e5_0,_transparent_55%)] opacity-60" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_#ec4899_0,_transparent_55%)] opacity-40" />
//         <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center">
//           <div className="flex-1">
//             <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
//               <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
//               {HERO.badge}
//             </span>

//             <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
//               {HERO.title}
//             </h1>
//             <p className="mt-4 max-w-xl text-sm md:text-base text-slate-200">
//               We focus on the essentials first: Python, JavaScript/HTML/CSS, TypeScript, Java, and SQL.
//               Get the fundamentals clear so you can grow into Full Stack, Data, Cloud or AI roles with confidence.
//             </p>

//             {/* Quick list of what is covered */}
//             <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
//               {['Python', 'JavaScript / HTML / CSS', 'TypeScript', 'Java', 'SQL'].map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-100"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
//               >
//                 Talk to a Mentor
//                 <FiArrowRight className="h-4 w-4" />
//               </Link>
//               <div className="flex items-center gap-3 text-xs text-slate-300 md:text-sm">
//                 <div className="flex items-center gap-1.5">
//                   <FiClock className="h-4 w-4" />
//                   Flexible timings
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <FiUsers className="h-4 w-4" />
//                   1:1 or small batches
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Side illustration */}
//           <div className="relative mt-8 flex-1 md:mt-0">
//             <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-xl shadow-black/60">
//               <div className="flex items-center justify-between text-xs text-slate-300">
//                 <span className="rounded-full bg-slate-900/80 px-3 py-1">
//                   Beginner Roadmap
//                 </span>
//                 <span>Guided by TINITIATE</span>
//               </div>
//               <div className="mt-4 space-y-2 text-xs text-slate-100">
//                 {[
//                   'Start with Python basics',
//                   'Move to Web (HTML/CSS/JS)',
//                   'Add TypeScript for clean code',
//                   'Pick Java for strong OOP',
//                   'Master SQL for data',
//                 ].map((step, i) => (
//                   <div
//                     key={step}
//                     className="flex items-center gap-2 rounded-xl bg-slate-900/80 px-3 py-2"
//                   >
//                     <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-[11px] font-bold">
//                       {i + 1}
//                     </span>
//                     <span>{step}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TRACKS + HOW IT WORKS */}
//       <section className="bg-slate-950 px-6 py-16">
//         <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[3fr,2fr]">
//           <div>
//             <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
//               Choose your beginner track
//             </h2>
//             <p className="mt-2 text-sm text-slate-300 md:text-base">
//               Start with one track or combine two based on your goal—development, data, or cloud.
//               We help you prioritize what to learn first.
//             </p>

//             <div className="mt-6 grid gap-5 md:grid-cols-2">
//               {TRACKS.map((track) => (
//                 <TrackCard key={track.key} track={track} />
//               ))}
//             </div>
//           </div>

//           {/* How it works */}
//           <aside className="lg:pl-4">
//             <h3 className="text-xl font-semibold text-white">
//               How Beginner Training works
//             </h3>
//             <p className="mt-2 text-sm text-slate-300">
//               A simple 4-step process to take you from confusion to clarity.
//             </p>

//             <ol className="mt-5 space-y-4">
//               {STEPS.map((step, idx) => (
//                 <li key={step.title} className="flex gap-3">
//                   <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold">
//                     {idx + 1}
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-slate-50">
//                       {step.title}
//                     </h4>
//                     <p className="text-xs text-slate-300 md:text-sm">
//                       {step.text}
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ol>

//             <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-200 md:text-sm">
//               <p className="font-semibold text-slate-100">
//                 Not sure which one to start with?
//               </p>
//               <p className="mt-1">
//                 Many students begin with <span className="font-semibold">Python + SQL</span> or
//                 <span className="font-semibold"> Web (HTML/CSS/JS)</span> and then move into
//                 specialized tracks. We&apos;ll help you pick what fits your current stage.
//               </p>
//             </div>
//           </aside>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="bg-slate-950 px-6 pb-16">
//         <div className="mx-auto max-w-7xl border-t border-slate-800 pt-12">
//           <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
//             <div>
//               <h2 className="text-2xl font-bold text-white md:text-3xl">
//                 Beginner doubts, answered
//               </h2>
//               <p className="mt-2 text-sm text-slate-300 md:text-base">
//                 If you still have questions, we&apos;re just a call away.
//               </p>
//             </div>
//             <Link
//               href="/request-callback"
//               className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-slate-900/70 px-5 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-500 hover:text-white transition"
//             >
//               Request a Callback
//               <FiArrowRight className="h-4 w-4" />
//             </Link>
//           </div>

//           <div className="mt-8 grid gap-5 md:grid-cols-2">
//             {FAQ.map(({ q, a }) => (
//               <div
//                 key={q}
//                 className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200"
//               >
//                 <div className="mb-2 flex items-center gap-2">
//                   <FiCheckCircle className="h-4 w-4 text-emerald-400" />
//                   <h3 className="font-semibold text-slate-50">{q}</h3>
//                 </div>
//                 <p className="text-xs text-slate-300 md:text-sm">{a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
























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

          {/* How it works */}
          {/* <aside className="lg:pl-4">
            <h3 className="text-xl font-semibold text-gray-900">
              How Beginner Training works
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              A simple 4-step process to take you from confusion to clarity.
            </p>

            <ol className="mt-5 space-y-4">
              {STEPS.map((step, idx) => (
                <li key={step.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-700 md:text-sm">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 text-xs text-gray-700 md:text-sm">
              <p className="font-semibold text-gray-900">
                Not sure which one to start with?
              </p>
              <p className="mt-1">
                Many students begin with <span className="font-semibold">Python + SQL</span> or
                <span className="font-semibold"> Web (HTML/CSS/JS)</span> and then move into
                specialized stacks. We&apos;ll help you pick what fits your current stage.
              </p>
            </div>
          </aside> */}
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






















// import Link from 'next/link'
// import {
//   FiArrowRight,
//   FiUsers,
//   FiCheckCircle,
//   FiPhone 
// } from 'react-icons/fi'
// import {
//   SiPython,
//   SiJavascript,
//   SiTypescript,
//   SiMysql,
//   SiJava,
// } from 'react-icons/si'
// import { FaJava } from 'react-icons/fa'
// // -------------------- DATA --------------------
// const HERO = {
//   title: 'Beginner Training Program',
//   subtitle: 'Start your IT journey with the right foundations. Learn programming, web development, and databases from scratch.',
//   badge: 'No prior experience required',
//   image: '/images/banners/beginner-training.jpg',
// }

// const COURSES = [
//   {
//     key: 'python',
//     name: 'Python',
//     Icon: SiPython,
//     color: 'from-blue-500 to-cyan-400',
//     level: 'Absolute Beginner',
//     duration: '6–8 weeks',
//     outcomes: [
//       'Programming fundamentals',
//       'Problem-solving & logic building',
//       'Mini console projects',
//     ],
//     href: '/courses/python-language-course',
//   },
//   {
//     key: 'web',
//     name: 'JavaScript / HTML / CSS',
//     Icon: SiJavascript,
//     color: 'from-emerald-500 to-teal-500',
//     level: 'Beginner',
//     duration: '6–8 weeks',
//     outcomes: [
//       'Build responsive web pages',
//       'Understand DOM & events',
//       'Launch your first mini website',
//     ],
//     href: '/courses/javascript-language-course',
//   },
//   {
//     key: 'typescript',
//     name: 'TypeScript',
//     Icon: SiTypescript,
//     color: 'from-sky-500 to-indigo-500',
//     level: 'Beginner–Intermediate',
//     duration: '4–6 weeks',
//     outcomes: [
//       'Strong typing for JavaScript',
//       'Better code quality & safety',
//       'Prep for React/Next.js stack',
//     ],
//     href: '/courses/typescript-beginner-course',
//   },
//   {
//     key: 'java',
//     name: 'Java',
//     Icon: FaJava,
//     color: 'from-red-500 to-amber-500',
//     level: 'Beginner',
//     duration: '8–10 weeks',
//     outcomes: [
//       'OOP concepts in depth',
//       'Console & basic project work',
//       'Foundation for backend & Android',
//     ],
//     href: '/courses/java-language-course',
//   },
//   {
//     key: 'sql',
//     name: 'SQL',
//     Icon: SiMysql,
//     color: 'from-emerald-500 to-teal-500',
//     level: 'Beginner',
//     duration: '4–6 weeks',
//     outcomes: [
//       'Querying databases confidently',
//       'Joins, filters, aggregations',
//       'Hands-on with real data models',
//     ],
//     href: '/courses/sql-server-beginner-course',
//   },
// ]

// const STEPS = [
//   {
//     title: 'Free Counselling Call',
//     text: 'We understand your background, goals, and timeline before suggesting a course.',
//   },
//   {
//     title: 'Personalized Beginner Plan',
//     text: 'We pick the right starting modules for you and define a realistic weekly schedule.',
//   },
//   {
//     title: 'Live Mentor-Led Sessions',
//     text: 'Hands-on training with practice, assignments, and guidance in every class.',
//   },
//   {
//     title: 'Projects & Next-Step Guidance',
//     text: 'Build portfolio-ready mini projects and decide your next stack or specialization.',
//   },
// ]

// const FAQ = [
//   {
//     q: 'I am completely new to IT. Can I join?',
//     a: 'Yes. This beginner training is specifically designed for students and professionals with zero or very little coding background.',
//   },
//   {
//     q: 'Do I need a powerful laptop?',
//     a: 'No. A basic laptop with internet connection is enough. We help you set up all required tools step-by-step.',
//   },
//   {
//     q: 'Can I do this along with college or job?',
//     a: 'Yes. Sessions can be planned in evenings or weekends, and we share recordings and practice material.',
//   },
//   {
//     q: 'What happens after I finish?',
//     a: 'We suggest your next path—Full Stack, Data Engineering, Cloud, or AI—and help you transition smoothly.',
//   },
// ]

// // -------------------- COMPONENTS --------------------
// function CourseCard({ course }) {
//   const { Icon } = course
//   return (
//     <div
//       className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white
//                  p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-indigo-300"
//     >
//       {/* Gradient glow */}
//       <div
//         className={`pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b ${course.color} opacity-25 blur-3xl`}
//       />

//       <div className="relative flex items-start gap-4">
//         <div
//           className="flex h-14 w-14 items-center justify-center rounded-2xl 
//                      bg-indigo-50 ring-2 ring-indigo-100 group-hover:ring-indigo-400 transition"
//         >
//           <Icon className="h-8 w-8 text-indigo-700" />
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-gray-900">
//             {course.name}
//           </h3>
//           <p className="mt-1 text-xs text-gray-600">
//             {course.level} • {course.duration}
//           </p>
//         </div>
//       </div>

//       <ul className="relative mt-4 space-y-1.5 text-sm text-gray-700">
//         {course.outcomes.map((item) => (
//           <li key={item} className="flex gap-2">
//             <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
//             <span>{item}</span>
//           </li>
//         ))}
//       </ul>

//       <div className="relative mt-5 flex items-center justify-between">
//         <Link
//           href={course.href}
//           className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
//         >
//           View syllabus
//           <FiArrowRight className="h-4 w-4" />
//         </Link>
//       </div>
//     </div>
//   )
// }

// // -------------------- PAGE --------------------
// export default function Page() {
//   return (
//     <main className="bg-white text-gray-900">
//       {/* HERO (black) */}
//       <section className="relative overflow-hidden bg-black px-6 py-20">
//         <div className="pointer-events-none absolute inset-0 bg-black opacity-60" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-black opacity-40" />
//         <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center">
//           <div className="flex-1">
//             <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
//               <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
//               {HERO.badge}
//             </span>

//             <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
//               {HERO.title}
//             </h1>
//             <p className="mt-4 max-w-xl text-sm md:text-base text-slate-200">
//               We focus on the essentials first: Python, JavaScript/HTML/CSS, TypeScript, Java, and SQL.
//               Get the fundamentals clear so you can grow into Full Stack, Data, Cloud or AI roles with confidence.
//             </p>

//             {/* Quick list of what is covered */}
//             <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
//               {['Python', 'JavaScript / HTML / CSS', 'TypeScript', 'Java', 'SQL'].map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-100"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
//               >
//                 Talk to a Mentor
//                 <FiArrowRight className="h-4 w-4" />
//               </Link>
//               <div className="flex items-center gap-3 text-xs text-slate-300 md:text-sm">
//                 <div className="flex items-center gap-1.5">
//                   <FiUsers className="h-4 w-4" />
//                   1:1 or small batches
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

  
//       <section className="bg-gray-50 px-6 py-16">
//         <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[3fr,2fr]">
//           <div>
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
//               Choose your beginner course
//             </h2>

//             <div className="mt-6 grid gap-5 md:grid-cols-2">
//               {COURSES.map((course) => (
//                 <CourseCard key={course.key} course={course} />
//               ))}
//             </div>
//           </div>

//      {/* <aside className="lg:pl-4">
//               <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

//                 <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" />

//                 <h3 className="mt-2 text-lg font-semibold text-gray-900 md:text-xl">
//                   How Beginner Training works
//                 </h3>
//                 <p className="mt-2 text-sm text-gray-600">
//                   A simple, guided flow that takes you from confusion to clarity and consistent practice.
//                 </p>

//                 <ol className="mt-5 space-y-4">
//                   {STEPS.map((step, idx) => (
//                     <li key={step.title} className="flex gap-3">
//                       <div className="flex flex-col items-center">
//                         <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white shadow-sm">
//                           {idx + 1}
//                         </div>
//                         {idx !== STEPS.length - 1 && (
//                           <div className="mt-1 h-8 w-px bg-gradient-to-b from-indigo-400 to-gray-200" />
//                         )}
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-semibold text-gray-900">
//                           {step.title}
//                         </h4>
//                         <p className="text-xs text-gray-700 md:text-sm">
//                           {step.text}
//                         </p>
//                       </div>
//                     </li>
//                   ))}
//                 </ol>

//                 <div className="mt-6 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/70 p-4 text-xs text-gray-800 md:text-sm">
//                   <p className="font-semibold text-gray-900">
//                     Not sure where to begin?
//                   </p>
//                   <p className="mt-1">
//                     Most beginners start with{' '}
//                     <span className="font-semibold text-indigo-700">Python + SQL</span> or{' '}
//                     <span className="font-semibold text-indigo-700">JavaScript / HTML / CSS</span>
//                     {' '}and then move toward their dream role—Full-Stack, Data, Cloud, or AI.
//                   </p>
//                 </div>
//               </div>
//             </aside> */}
//         </div>
//       </section>

//       {/* FAQ (LIGHT THEME) */}
//       {/* <section className="bg-white px-6 pb-16">
//         <div className="mx-auto max-w-7xl border-t border-gray-200 pt-12">
//           <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
//                 Beginner doubts, answered
//               </h2>
//               <p className="mt-2 text-sm text-gray-600 md:text-base">
//                 If you still have questions, we&apos;re just a call away.
//               </p>
//             </div>
//             <Link
//               href="/request-callback"
//               className="inline-flex items-center gap-2 rounded-full border border-indigo-500/60 bg-white px-5 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-500 hover:text-white transition"
//             >
//               Request a Callback
//               <FiArrowRight className="h-4 w-4" />
//             </Link>
//           </div>

//           <div className="mt-8 grid gap-5 md:grid-cols-2">
//             {FAQ.map(({ q, a }) => (
//               <div
//                 key={q}
//                 className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800"
//               >
//                 <div className="mb-2 flex items-center gap-2">
//                   <FiCheckCircle className="h-4 w-4 text-emerald-500" />
//                   <h3 className="font-semibold text-gray-900">{q}</h3>
//                 </div>
//                 <p className="text-xs text-gray-700 md:text-sm">{a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

       
//       {/* FAQS */}
//       <section className="px-6 py-12 bg-white">
//         <div className="mx-auto max-w-7xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-start mb-6">
//             FAQs
//           </h2>
      
//           <div className="grid gap-6 md:grid-cols-2">
//             {(Array.isArray(FAQ) ? FAQ : []).map(({ q, a }, i) => (
//               <div
//                 key={q ?? i}
//                 className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-2 mb-3">
//                   <FiCheckCircle className="h-5 w-5 text-indigo-600 opacity-80" />
//                   <h3 className="text-base font-semibold text-gray-900">{q}</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//             {/* CTA */}
//       <section className="px-6 py-12">
//         <div className="mx-auto max-w-7xl">
//           <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
//             <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//               <div>
//                 <h4 className="text-lg font-bold text-gray-900">Want a personalized study plan?</h4>
//                 <p className="text-sm text-gray-700">
//                   Tell us your goals—career switch, upskilling, or interview prep—and we’ll map the path.
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 <Link
//                   href="/request-callback"
//                   className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
//                 >
//                   <FiPhone className="h-4 w-4" />
//                   Request a Callback
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   )
// }
