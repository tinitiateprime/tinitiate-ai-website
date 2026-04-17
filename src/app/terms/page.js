'use client'

import Link from 'next/link'
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaGavel,
  FaRocket,
  FaCopyright,
  FaTimesCircle,
  FaArrowLeft,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa'

export default function TermsAndConditions() {
  return (
    <main className="bg-white text-gray-800 min-h-screen py-12 px-6 sm:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Terms and Conditions
        </h1>

        <p className="text-lg mb-10 text-center text-gray-600">
          Welcome to <span className="font-semibold text-indigo-500">TINITIATE Technologies</span>. By using our website and services, you agree to the terms below.
        </p>

        {/* Acceptance of Terms */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Acceptance of Terms</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              <span>Using our services implies acceptance of these terms.</span>
            </li>
            <li className="flex items-start">
              <FaTimesCircle className="mt-1 mr-2 text-red-500" />
              <span>If you do not agree, please do not use our services.</span>
            </li>
          </ul>
        </section>

        {/* Changes to Terms */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Changes to Terms</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-yellow-500" />
              <span>We may revise these terms at any time. Changes will be posted on this page.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              <span>Continued use after updates implies acceptance of revised terms.</span>
            </li>
          </ul>
        </section>

        {/* Permitted Use */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Permitted Use of Our Website</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaRocket className="mt-1 mr-2 text-purple-500" />
              <span>Use our website responsibly and lawfully.</span>
            </li>
            <li className="flex items-start">
              <FaTimesCircle className="mt-1 mr-2 text-red-500" />
              <span>Do not engage in fraud, copyright infringement, or misuse.</span>
            </li>
            <li className="flex items-start">
              <FaGavel className="mt-1 mr-2 text-gray-500" />
              <span>Do not attempt unauthorized access or disruption.</span>
            </li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Intellectual Property Rights</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaCopyright className="mt-1 mr-2 text-blue-500" />
              <span>All content belongs to TINITIATE Technologies unless otherwise noted.</span>
            </li>
            <li className="flex items-start">
              <FaExclamationCircle className="mt-1 mr-2 text-red-500" />
              <span>Unauthorized reproduction or distribution is prohibited and may result in legal action.</span>
            </li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Limitation of Liability</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaExclamationCircle className="mt-1 mr-2 text-yellow-500" />
              <span>We are not liable for indirect or incidental damages arising from use of our services.</span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-blue-500" />
              <span>While we aim for accuracy, we do not guarantee that content is error-free or uninterrupted.</span>
            </li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Contact Information</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <FaEnvelope className="mt-1 mr-2 text-blue-500" />
              Email: <a href="mailto:info@tinitiate.com" className="text-indigo-600 underline">info@tinitiate.com</a>
            </li>
            <li className="flex items-start">
              <FaGlobe className="mt-1 mr-2 text-blue-500" />
              Website: <a href="https://www.tinitiate.com" target="_blank" className="text-indigo-600 underline">www.tinitiate.com</a>
            </li>
          </ul>
        </section>

        {/* Back Link */}
        {/* <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center text-indigo-700 hover:underline font-medium">
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div> */}
      </div>
    </main>
  )
}
