'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TrainingTabContent({ tab, data }) {
  if (!data) return null

  const courseData = tab === 'beginner' ? data.beginner : data.advanced

  if (tab === 'opt') {
    return (
      <>
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">OPT Student Training Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-16">
          {data.optServices.map((service, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md">
              <p className="text-blue-800 font-semibold">{service}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Discover Your IT Career Path</h3>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6">
          In today&apos;s rapidly evolving technology landscape, staying up-to-date with the latest IT skills is crucial. Our IT training services are designed to equip individuals and organizations with the necessary expertise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {data.optReasons.map((reason, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md">
              <p className="text-gray-800 font-medium">{reason}</p>
            </div>
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        {tab.charAt(0).toUpperCase() + tab.slice(1)} IT Training Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {courseData.map((course) => (
          <div key={course.title} className="rounded-xl shadow bg-white flex flex-col transition hover:shadow-md">
            <div className="relative h-40 w-full">
              <Image src={course.image} alt={course.title} fill className="object-contain p-4" />
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
    </>
  )
}
