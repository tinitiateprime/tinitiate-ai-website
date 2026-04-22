

"use client"

import { useEffect, useState, useRef, } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'  // ✅ required for tab parsing

// ... (beginnerCourses, advancedCourses, optServices, optReasons remain unchanged)
const beginnerCourses = [
  {
    title: 'Python Language Course',
    duration: '1 Month',
    image: '/images/courses/python.png',
    description: 'Master the basics of Python for scripting, automation, and foundational backend development.',
    href: '/courses/python-language-course',
  },
  {
    title: 'Java Language Course',
    duration: '1 Month',
    image: '/images/courses/java.png',
    description: 'Object-oriented programming with Java—ideal for Android development and backend systems.',
    href: '/courses/java-language-course',
  },
  {
    title: 'SQL Database Course',
    duration: '3 Weeks',
    image: '/images/courses/sql.png',
    description: 'Understand data modeling, querying, and reporting using relational databases and SQL.',
    href: '/courses/sql-language-course',
  },
  {
    title: 'JavaScript Course',
    duration: '1 Month',
    image: '/images/courses/js.png',
    description: 'Core scripting for the web—learn variables, DOM, events, and client-side interactions.',
    href: '/courses/javascript-language-course',
  },

]


const advancedCourses = [
  {
    title: 'Python AWS Developer Program',
    duration: '2 Months',
    image: '/images/courses/python-aws.png',
    description: 'End-to-end cloud development with Python and AWS services, focusing on real deployment scenarios.',
    href: '/courses/Python-AWS-Developer-Program',
  },
  {
    title: 'Python Django Backend Developer Program',
    duration: '2 Months',
    image: '/images/courses/django.png',
    description: 'Learn backend web development using Django framework with APIs, models, and auth systems.',
    href: '/courses/python-django-backend-developer',
  },
  {
    title: 'Power BI Developer Program',
    duration: '2/Months',
    image: '/images/courses/powerbi.png',
    description: 'Create powerful dashboards, DAX queries, and business intelligence workflows using Power BI.',
    href: '/courses/power-bi-developer-program',
  },
  {
    title: 'Azure SQL Server Developer Program',
    duration: '3 Months',
    image: '/images/courses/azure-sql.png',
    description: 'Master T-SQL, stored procedures, performance tuning, and deployment on Azure SQL Database.',
    href: '/courses/azure-sql-server-developer',
  },
  {
    title: 'Oracle PLSQL Developer Program',
    duration: '2 Months',
    image: '/images/courses/plsql.png',
    description: 'Develop secure and scalable applications using Oracle PL/SQL blocks, triggers, and procedures.',
    href: '/courses/oracle-plsql-developer-program',
  },
  {
    title: 'AWS DevOps Program',
    duration: '2.5 Months',
    image: '/images/courses/aws-devops.png',
    description: 'CI/CD pipelines, Docker, Kubernetes, and AWS services for efficient software delivery.',
    href: '/courses/aws-devops-program',
  },
  {
    title: 'Snowflake Platform Program',
    duration: '1.5 Months',
    image: '/images/courses/snowflake.png',
    description: 'Cloud data warehouse design and performance optimization using Snowflake SQL and pipelines.',
    href: '/courses/snowflake-platform-program',
  },
]

const optServices = [
  'IT Training',
  'Interview Screening',
  'Resume Enhancement',
  'Interview Preparation',
  'IT Development Services',
  'IT Project Support',
]

const optReasons = [
  'Comprehensive Curriculum',
  'Industry-Experienced Instructors',
  'Hands-on Learning',
  'Customized Training Solutions',
  'Up-to-Date Content',
  'Practical Application',
  'Networking Opportunities',
  'Continuous Support',
]

function CourseGrid({ courses }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {courses.map((course) => (
        <div
          key={course.title}
          className="rounded-xl shadow bg-white flex flex-col transition hover:shadow-md"
        >
          <div className="relative h-40 w-full">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-6 flex flex-col justify-between grow">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.description}</p>
            </div>
            <Link
              href={course.href}
              className="mt-4 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition"
            >
              View Course
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ITTrainingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState(null)
  const sectionRef = useRef(null)

  // Set tab from URL query
  useEffect(() => {
    const tabFromQuery = searchParams.get('tab')
    if (tabFromQuery === 'Beginner' || tabFromQuery === 'Advanced' || tabFromQuery === 'OPT') {
      setActiveTab(tabFromQuery)
    } else {
      setActiveTab('Beginner')
    }
  }, [searchParams])

  // Scroll to top or section on tab switch
  const handleTabClick = (tab) => {
    setActiveTab(tab)
    router.push(`/it-training?tab=${tab}`, { scroll: false, shallow: true })
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!activeTab) return null // prevent flicker

  return (
    <main className="text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-black py-20 sm:py-10 md:py-15 min-h-[500px]">
        <div className="max-w-7xl sm:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              IT Training Programs
            </h1>
            <p className="text-base sm:text-lg text-white mb-6 max-w-xl">
              Kickstart and propel your IT career with team TINITIATE. Explore our beginner and advanced IT courses to boost your tech career.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-64 sm:h-80 md:h-[22rem] min-h-[22rem] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/banners/it-training-2.jpg"
              alt="IT Development Solutions"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div ref={sectionRef} className="bg-white pt-20 pb-10">
        <div className="flex justify-center gap-8">
          {['Beginner', 'Advanced', 'OPT'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Section */}
      <section  className=" md:py-1  sm: py-1 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {activeTab !== 'OPT' ? (
            <>
              <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                {activeTab} IT Training Courses
              </h2>
              <CourseGrid courses={activeTab === 'Beginner' ? beginnerCourses : advancedCourses} />
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                OPT Student Training Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-16">
  {optServices.map((service, idx) => {
    const isItTraining = service === 'IT Training'
    const href = '/it-training'

    return (
      <div key={idx} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md">
        {isItTraining ? (
          <Link href={href} className="text-blue-800 font-semibold hover:underline">
            {service}
          </Link>
        ) : (
          <p className="text-blue-800 font-semibold">{service}</p>
        )}
      </div>
    )
  })}
</div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Discover Your IT Career Path
              </h3>
              <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6">
                In today&apos;s rapidly evolving technology landscape, staying up-to-date with the latest IT skills and knowledge is crucial for professional growth and success. Our IT training services are designed to equip individuals and organizations with the necessary expertise to thrive in the digital age.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {optReasons.map((reason, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md">
                    <p className="text-gray-800 font-medium">{reason}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}