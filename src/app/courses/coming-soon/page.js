"use client"

import Link from "next/link"
import { FaBookOpen, FaArrowLeft, FaCalendarAlt, FaEnvelope } from "react-icons/fa"

export default function ComingSoonCoursePage() {
  return (
    <main className="min-h-[75vh] w-full bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="mt-1 text-blue-600">
            <FaBookOpen className="text-3xl" />
          </div>

          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              Course Syllabus Coming Soon
            </h1>

            <p className="mt-3 text-gray-700 text-sm leading-6">
              We’re actively preparing the complete syllabus, hands-on labs, and project roadmap.
              This course page will be updated shortly with the full learning plan.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3">
                <FaCalendarAlt className="text-gray-600" />
                <span className="text-gray-700">
                  Updated syllabus will be published soon
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3">
                <FaEnvelope className="text-gray-600" />
                <span className="text-gray-700">
                  Request callback for early access
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/training/professional-training"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <FaArrowLeft />
                Back to Professional Training
              </Link>

              <Link
                href="/request-callback"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition"
              >
                Request Callback
              </Link>
            </div>

            <p className="mt-6 text-xs text-gray-500">
              Tip: If you think this page is shown by mistake, check your course slug and catalog mapping.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
