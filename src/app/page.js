// app/page.js
"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Globe, Users, Clock, UserCheck, Briefcase, CheckCircle, Star, BookOpen, FileText, ClipboardCheck,  Code2,
  ShoppingCart,
  ShieldCheck,
  Truck,
  HeartPulse,
  Hospital ,
  Plane,
  Factory, UserCircle2,Settings ,Database, Cloud, Brain, BarChart3, Layers, Smartphone, Server, Bug  } from 'lucide-react'

 import {
  FiArrowRight,
  FiUsers,
  FiCheckCircle,
  FiPhone,
  FiGitBranch,
  FiBarChart2,
  FiZap,
  FiStar,
  FiCpu,
  FiTool,

} from "react-icons/fi";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiReact, SiNextdotjs, SiAngular, SiSnowflake
} from "react-icons/si";

import { FaJava, FaAws } from "react-icons/fa";

import { useRouter } from 'next/navigation';

import AiDevelopBanner from "../../components/AiDevelopBanner";


import { HiSparkles as FiSparkles } from "react-icons/hi";
import { RiRobot2Line } from "react-icons/ri";
import { FaDatabase, FaChartBar } from "react-icons/fa";

function ProfessionalPage() {
  return (
    <>
      <main className="bg-white text-gray-900">
        <section className="bg-white py-5">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <AiDevelopBanner
              title="Develop with AI"
              subtitle="Learn modern development workflows with ChatGPT, Claude, and Copilot for prompting, coding, debugging, architecture, and project delivery."
            />
          </div>
        </section>

        {/* HERO */}
        <section className="relative overflow-hidden bg-black">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-28 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
            <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
          </div>

          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Professional Training • TINITIATE AI
            </span>

            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
              Professional Training
            </h1>

            <p className="mt-3 max-w-2xl text-slate-200">
              Deep-dive programs for working professionals and serious learners.
            </p>

            <Link
              href="/request-callback"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-white"
            >
              Schedule Call <FiPhone />
            </Link>
          </div>
        </section>

        {/* ================= STACK COURSES ================= */}
        <section className="bg-gray-50 py-12 px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-10">Full Stack Development</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {STACK_COURSES.map((course) => (
                <CourseCard
                  key={course.courseKey}
                  title={course.title}
                  description={course.description}
                  heroTech={course.heroTech}
                  href={`/training/professional-training/${course.courseKey}`}
                  aiIncluded={course.aiIncluded}
                  aiToolKeys={course.aiToolKeys}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= DATA ENGINEERING ================= */}
        <section className="bg-white py-16 px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-10">Data Engineering</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DATA_ENGINEERING_PACKAGES.map((pkg) => (
                <CourseCard
                  key={pkg.key}
                  title={pkg.title}
                  description={pkg.description}
                  heroTech={pkg.heroTech}
                  href={`/training/professional-training/${pkg.key}`}
                  aiIncluded={pkg.aiIncluded}
                  aiToolKeys={pkg.aiToolKeys}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= VISUALIZATION ================= */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-10">Visualization</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Visualization.map((pkg) => (
                <CourseCard
                  key={pkg.key}
                  title={pkg.title}
                  description={pkg.description}
                  heroTech={pkg.heroTech}
                  href={`/training/professional-training/${pkg.key}`}
                  aiIncluded={pkg.aiIncluded}
                  aiToolKeys={pkg.aiToolKeys}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-6">
          <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-blue-50 to-white p-8">
            <h4 className="text-lg font-bold">
              Want a personalized study plan?
            </h4>

            <p className="mt-2 text-gray-700">
              Tell us your goals and we’ll guide you.
            </p>

            <Link
              href="/request-callback"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-white"
            >
              Request Callback <FiPhone />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}


const STACK_COURSES = [
  {
    courseKey: "java-full-stack-development",
    name: "Java Full Stack Development",
    description: "Spring Boot + React + DB + CI/CD",
    Icon: FaJava,
    brandKey: "java",
    level: "Professional",
    duration: "12 Weeks",
    outcomes: [
      "Spring Boot APIs",
      "React Frontend",
      "Database Integration",
    ],
  },

  {
    courseKey: "react-web-development",
    name: "React Web Development",
    description: "React + TypeScript + Hosting",
    Icon: SiReact,
    brandKey: "react",
    level: "Professional",
    duration: "8 Weeks",
    outcomes: [
      "React Components",
      "Hooks & State",
      "Deployment",
    ],
  },

  {
    courseKey: "nextjs-web-development",
    name: "Next.js Web Development",
    description: "Next.js + React + TypeScript",
    Icon: SiNextdotjs,
    brandKey: "nextjs",
    level: "Professional",
    duration: "8 Weeks",
    outcomes: [
      "SSR & SEO",
      "Routing",
      "Deployment",
    ],
  },

  {
    courseKey: "angular-web-development",
    name: "Angular Web Development",
    description: "Angular + TypeScript + API",
    Icon: SiAngular,
    brandKey: "angular",
    level: "Professional",
    duration: "8 Weeks",
    outcomes: [
      "Angular Components",
      "REST APIs",
      "Deployment",
    ],
  },
];


const DATA_ENGINEERING_PACKAGES = [
  {
    courseKey: "aws-data-engineering",
    name: "AWS Data Engineering",
    description: "S3 • Glue • Athena • Redshift",
    Icon: FaAws,
    brandKey: "aws",
    level: "Professional",
    duration: "10 Weeks",
    outcomes: [
      "ETL Pipelines",
      "Data Lakes",
      "Cloud Analytics",
    ],
  },

  {
    courseKey: "snowflake-data-engineering",
    name: "Snowflake Data Engineering",
    description: "Snowpipe • Snowpark",
    Icon: SiSnowflake,
    brandKey: "snowflake",
    level: "Professional",
    duration: "8 Weeks",
    outcomes: [
      "Snowflake Pipelines",
      "Data Warehouse",
      "Analytics",
    ],
  },

  {
    courseKey: "azure-data-engineering",
    name: "Azure Data Engineering",
    description: "ADF • Databricks",
    Icon: FaDatabase,
    brandKey: "ai",
    level: "Professional",
    duration: "8 Weeks",
    outcomes: [
      "Azure Pipelines",
      "Data Factory",
      "ETL",
    ],
  },
];


const Visualization = [
  {
    courseKey: "visualization-course",
    name: "Data Visualization",
    description: "Power BI • QuickSight",
    Icon: FaChartBar,
    brandKey: "ai",
    level: "Professional",
    duration: "4 Weeks",
    outcomes: [
      "Dashboards",
      "Reports",
      "Business Insights",
    ],
  },
];


const services = [
  
  {
    title: 'Training program',
    href: '/training/personalized-training',
    image: '/images/services-training.png',
  },
  {
    title: 'Work Experience Program',
    href: '/work-experience-program',
    image: '/images/work-experience-program.jpg',
  },
  {
    title: 'Remote Consulting',
    href: '/remote-consulting',
    image: '/images/Remote-consulting-service.jpg',
  },
]

const programs = [
  {
    title: 'Python AWS Developer Program',
    duration: '3 Months',
    image: '/images/IT-training/Python-AWS-Developer-Program.png',
    href: '/courses/Python-AWS-Developer-Program',
    description: 'Master Python backend, AWS Lambda, API Gateway, and DynamoDB through hands-on projects.',
  },
  {
    title: 'Power BI Developer Program',
    duration: '2 Months',
    image: '/images/IT-training/Power-BI-Developer-Program.png',
    href: '/courses/power-bi-developer-program',
    description: 'Learn powerful BI reporting, data modeling, and dashboard creation using real-world business data.',
  },
  
    {
    title: 'SQL Database Program',
    duration: '3 Months',
    image: '/images/courses/sql.png',
    description: 'Understand data modeling, querying, and reporting using relational databases and SQL.',
    href: '/courses/sql-language-course',
  },
]


const itServices = [
  {
    title: "Cloud Services",
    icon: Cloud,
    image1: "/images/IT-development/cloud.jpg",
    href: "/it-development/cloud-services",
    description:
      "Seamless cloud migration, hosting, and managed services across AWS & Azure, ensuring scalability, security, and cost efficiency.",
    features: ["AWS & Azure expertise", "Scalable Hosting", "Cloud Cost Optimization"],
  },
  {
    title: "AI-Powered Development",
    icon: Brain,
    image1: "/images/IT-development/ai-powered.jpg",
    href: "/it-development/ai-powered-development",
    description:
      "Build intelligent applications with AI/ML models, natural language processing, and automation that deliver smarter business outcomes.",
    features: ["Custom AI Models", "Agentic & Chatbots","Azure AI & Aws AI Services","Predictive Analytics"],
  },
  {
    title: "Reporting Services",
    icon: BarChart3,
    image1: "/images/IT-development/reporting.jpg",
    href: "/it-development/reporting",
    description:
      "Transform raw data into actionable insights with BI dashboards, interactive reports, and real-time analytics tailored to business needs.",
    features: ["Power BI, Tableau", "Real-time Dashboards", "Interactive Reports"],
  },
  {
    title: "Full Stack Development",
    icon: Layers,
    image1: "/images/it-development-services.jpg",
    href: "/it-development/full-stack-development",
    description:
      "End-to-end web and application development from frontend to backend, integrating secure APIs, databases, and cloud infrastructure.",
    features: ["React, Next.js, Node.js", "Secure APIs", "Database Integration"],
  },
  {
    title: "App Development",
    icon: Smartphone,
    image1: "/images/IT-development/app-development-1.jpg",
    href: "/it-development/app-development",
    description:
      "Modern mobile & web apps with pixel-perfect UI/UX, scalable architecture, and secure APIs. From MVP to enterprise scale deployments.",
    features: ["React Native", "Flutter", "Android & iOS"],
  },
  {
    title: "Web & Backend Development",
    icon: Server,
    image1: "/images/IT-development/web-backend-1.jpg",
    href: "/it-development/web-backend",
    description:
      "Robust backend systems & dynamic web apps with REST/GraphQL APIs, authentication, and CI/CD pipelines.",
    features: ["Node.js, Django, Spring Boot", "REST & GraphQL APIs", "Role-based Access"],
  },
  {
    title: "Testing & Support",
    icon: Bug,
    image1: "/images/IT-development/testing-support-1.jpg",
    href: "/it-development/testing-support",
    description:
      "Ensure bug-free, stable software with automation, regression testing, and SLA-based support teams.",
    features: ["Selenium & Cypress", "Postman Testing", "24/7 Support"],
  },
  {
  title: "DevOps Services",
  icon: Settings, // you can replace with a suitable Lucide/FA icon
  image1: "/images/IT-development/DevOPs.jpg",
  href: "/it-development/devops",
  description:
    "Accelerate software delivery with automation, CI/CD pipelines, containerization, and reliable cloud-native infrastructure.",
  features: [
    "CI/CD Pipelines",
    "Kubernetes & Docker",
    "Infrastructure as Code",
    "Monitoring & Logging"
  ],
},
{
  title: "Database Services",
  icon: Database,
  image1: "/images/IT-development/database.jpg",
  href: "/it-development/database",
  description:
    "Design, optimize, and manage relational & NoSQL databases with high availability, scalability, and strong security.",
  features: [
    "SQL & NoSQL Databases",
    "Performance Tuning",
    "Backup & Disaster Recovery",
    "Data Migration & Replication"
  ],
},

];


const careerSupport = [
  {
    icon: Briefcase,
    title: 'IT Career Guidance',
    description: 'Personalized guidance from industry experts to align your goals with real-world roles in IT.',
    href:'/it-career-guidance',
  },
  {
    icon: BookOpen,
    title: 'Basics to Advanced Learning',
    description: 'Step-by-step learning paths from foundational concepts to advanced tech stacks and real use cases.',
    href:'/basics-to-advanced-learning'
  },
  {
    icon: Code2,
    title: 'Hands-On Coding Exercises',
    description: 'Daily challenges and practice labs to build strong coding logic and practical development skills.',
      href:'/hands-on-coding-exercises'
  },
  {
    icon: FileText,
    title: 'Live Projects',
    description: 'Build real-world applications with mentorship support to strengthen your portfolio and confidence.',
      href:'/live-projects'
  },
  {
    icon: UserCircle2,
    title: 'Resume Preparation',
    description: 'Get help crafting a standout, recruiter-friendly resume tailored for your desired job roles.',
      href:'/resume-preparation'
  },
  {
    icon: ClipboardCheck,
    title: 'Interview Preparation',
    description: 'Mock interviews, HR tips, and technical assessments to boost your readiness and confidence.',
      href:'/interview-preparation'
  },
]



function CourseCard({ course }) {

  const BRAND = {
  aws: "#FF9900",
  java: "#E76F00",
  python: "#3776AB",
  react: "#61DAFB",
  angular: "#DD0031",
  nextjs: "#000000",
  snowflake: "#29B5E8",
  ai: "#7C3AED",
};

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
          {Icon && (
  <Icon
    className="h-8 w-8"
    style={{ color: brandColor }}
  />
)}
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
        {course.outcomes?.map((item) => (
          <li key={item} className="flex gap-2">
            <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

     <div className="relative mt-5 flex items-center justify-between">
  <Link
    href={`/training/professional-training/${course.courseKey}`}
    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
  >
    View Course
    <FiArrowRight className="h-4 w-4" />
  </Link>
</div>

    </div>
  )
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



export default function HomePage() {

   const router = useRouter();


  return (
    <main className="text-gray-800">
    <section className="relative bg-black py-20 sm:py-10 md:py-20  ">
  <div className="max-w-7xl sm:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Text Section */}
   <div className="text-center md:text-left text-white">
  <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
    Trusted IT Experts
  </span>

  <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-white">
    Empowering Careers with Real Time Experience
  </h1>

  <p className="max-w-xl mx-auto text-lg text-white mb-8">
    TINITIATE AI provides job-ready IT training, hands-on coding, and real-world consulting services led by 15+ years of industry expertise.
  </p>
</div>
    
{/* Image Section */}
<div className="relative w-full h-64 p-2 sm:h-80 md:h-[22rem] rounded-lg overflow-hidden shadow-lg">
  <Image
    src="/images/banners/tinitiate.jpg"
    alt="IT Development Solutions"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
    fetchPriority="high"
 
  />
</div>

  </div>
  </section>

    

  {/* BEGINNER TRAINING SECTION */}
<section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
      Beginner Training
    </h2>

    <p className="text-center text-gray-600 mb-10">
      Start your IT journey with structured beginner-friendly courses
    </p>

    {/* COURSES GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {COURSES.map((course) => {
        const Icon = course.Icon;

        // 🎨 Color themes (matches your screenshot style)
        const colorStyles = {
          python: "bg-blue-50 border-blue-100",
          javascript: "bg-green-50 border-green-100",
          typescript: "bg-indigo-50 border-indigo-100",
          java: "bg-orange-50 border-orange-100",
          sql: "bg-teal-50 border-teal-100",
          ds: "bg-purple-50 border-purple-100",
        };

        const iconStyles = {
          python: "bg-blue-100 text-blue-600",
          javascript: "bg-green-100 text-green-600",
          typescript: "bg-indigo-100 text-indigo-600",
          java: "bg-orange-100 text-orange-600",
          sql: "bg-teal-100 text-teal-600",
          ds: "bg-purple-100 text-purple-600",
        };

        return (
          <div
            key={course.key}
            className={`rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border hover:-translate-y-1 ${colorStyles[course.key]}`}
          >

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl ${iconStyles[course.key]}`}>
                <Icon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {course.level} • {course.duration}
                </p>
              </div>
            </div>

            {/* Outcomes */}
            <ul className="space-y-2 mb-5">
              {course.outcomes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <FiCheckCircle className="text-green-500 mt-1 w-4 h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* View Course */}
            <Link
              href={course.href}
              className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition"
            >
              View syllabus
              <FiArrowRight className="w-4 h-4" />
            </Link>

          </div>
        );
      })}

    </div>

    {/* Button */}
    <div className="mt-10 flex justify-center">
      <Link
        href="/training/beginner-training"
        className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition shadow-sm hover:shadow-md"
      >
        View Beginner Training
        <FiArrowRight className="w-4 h-4" />
      </Link>
    </div>

  </div>
</section>



{/* PROFFESIONAL TRAINING SECTION */}
<section className="bg-gradient-to-b from-rose-50 via-white to-amber-50 py-16">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Professional Training
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Deep-dive programs for working professionals and serious learners.
      </p>
    </div>

    {/* Full Stack Development */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        Full Stack Development
      </h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STACK_COURSES.map((course) => (
  <div
    key={course.courseKey}
    className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition p-5"
  >
    <CourseCard course={course} />
  </div>
))}

      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-rose-100 my-12"></div>

    {/* Data Engineering */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        Data Engineering
      </h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {DATA_ENGINEERING_PACKAGES.map((course) => (
  <div
    key={course.courseKey}
    className="bg-white/80 backdrop-blur-sm border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition p-5"
  >
    <CourseCard course={course} />
  </div>
))}
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-amber-100 my-12"></div>

    {/* Data Visualization */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        Data Visualization
      </h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Visualization.map((course) => (
          <div className="bg-white/80 backdrop-blur-sm border border-cyan-100 rounded-2xl shadow-sm hover:shadow-md transition p-5">
            <CourseCard key={course.courseKey} course={course} />
          </div>
        ))}
      </div>
    </div>

    {/* Button */}
    <div className="mt-10 flex justify-center">
      <Link
        href="/training/professional-training"
        className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition shadow-sm hover:shadow-md"
      >
        View All Professional Training
        <FiArrowRight className="h-4 w-4" />
      </Link>
    </div>

  </div>
</section>

<section className="relative py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
  
  {/* subtle light accents */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/3 w-72 h-72 bg-rose-200/30 blur-3xl"></div>
    <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-amber-200/30 blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Explore More Training Programs
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Choose specialized programs tailored for different learning needs.
      </p>
    </div>

    {/* Row 1 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      {/* Corporate */}
      <Link
        href="/training/corporate-training"
        className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
      >
        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-rose-500">
          Corporate Training
        </h4>
        <p className="text-sm text-gray-600 mb-4">
          Upskill your workforce with industry-relevant corporate training programs.
        </p>
        <span className="inline-flex items-center gap-2 text-rose-500 font-medium text-sm">
          Explore <FiArrowRight className="w-4 h-4" />
        </span>
      </Link>

      {/* Campus */}
      <Link
        href="/training/campus-training"
        className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
      >
        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-500">
          Campus Training
        </h4>
        <p className="text-sm text-gray-600 mb-4">
          Specialized programs designed for students and colleges to build job-ready skills.
        </p>
        <span className="inline-flex items-center gap-2 text-amber-500 font-medium text-sm">
          Explore <FiArrowRight className="w-4 h-4" />
        </span>
      </Link>

    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      
      {/* Empty spacer */}
      <div className="hidden sm:block"></div>

      {/* OPT Training */}
      <Link
        href="/training/opt-training"
        className="group sm:col-span-2 lg:col-span-1 lg:col-start-1 
                   bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-100 
                   shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
      >
        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-cyan-600">
          OPT Training
        </h4>
        <p className="text-sm text-gray-600 mb-4">
          Tailored training for international students to gain practical IT experience.
        </p>
        <span className="inline-flex items-center gap-2 text-cyan-600 font-medium text-sm">
          Explore <FiArrowRight className="w-4 h-4" />
        </span>
      </Link>

    </div>

  </div>
</section>


{/**why choose tinitiate */}
<section id="about" className="py-10 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
      Why Choose TINITIATE AI?
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* Card 1 */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Industry-Driven Training
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          With <strong>15+ years of hands-on IT experience</strong>, our training isn&apos;t just theory — it's real-time knowledge paired with live projects and industry exposure.
        </p>

        <ul className="space-y-3">
          {[
            'Expert faculty with deep industry background',
            'Structured training from basics to advanced',
            'Business domain training included',
            'Extensive hands-on exercises',
            'Bonus technologies taught free-of-cost',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>


      {/* Card 2 */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Career-Focused Learning & Support
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          We don&apos;t just train — we prepare you for real-world careers with personalized mentorship, interview preparation, and practical experience.
        </p>

        <ul className="space-y-3">
          {[
            'Real-time project implementation',
            'Resume building & interview preparation',
            'One-on-one mentorship support',
            'Industry-level coding standards',
            'Placement guidance & career roadmap',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>

</section>

    <section className="py-10 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Career Support
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {careerSupport.map(({ icon: Icon, title, description,href }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="mb-4 bg-blue-100 p-3 rounded-full">
                <Icon className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-700">
                <button onClick={() => router.push(href)}>{title}</button>
                </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Final CTA Banner */}
     <section className="w-full py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="bg-white rounded-2xl shadow-md p-10 text-center border border-gray-200">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Ready to Start Your IT Career?
      </h2>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Join our expert-led IT training programs designed to make you job-ready 
        with real-time projects, hands-on coding, and industry-level guidance.
      </p>

      {/* CTA Button */}
      <Link 
        href="/request-callback" 
        className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Start Learning Now
        <FiArrowRight className="w-5 h-5" />
      </Link>

    </div>

  </div>
</section>
    </main>
  )
}

