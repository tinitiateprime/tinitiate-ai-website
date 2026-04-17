'use client'

import Link from 'next/link'
import {
  FaUserShield,
  FaDatabase,
  FaCheckCircle,
  FaEnvelope,
  FaGlobe,
  FaLock,
  FaTrash,
  FaEdit,
  FaSync,
  FaArrowLeft,
  FaExclamationTriangle,
} from 'react-icons/fa'

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-gray-800 min-h-screen py-12 px-6 sm:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Privacy Policy
        </h1>

        <p className="text-lg mb-10 text-center text-gray-600">
          At <span className="font-semibold text-indigo-500">TINITIATE Technologies</span>, we prioritize your privacy and are committed to protecting your personal information. Here&apos;s how we handle your data:
        </p>

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Information We Collect</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaUserShield className="mt-1 mr-2 text-blue-500" />
              <span>
                <strong>Personal Information:</strong> name, email, phone number, company details, etc.
              </span>
            </li>
            <li className="flex items-start">
              <FaDatabase className="mt-1 mr-2 text-green-500" />
              <span>
                <strong>Usage Data:</strong> IP address, browser type, device info, and pages visited &mdash; used for analytics and improvement.
              </span>
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">How We Use Your Information</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start"><FaCheckCircle className="mt-1 mr-2 text-green-500" /> Manage your transactions and accounts.</li>
            <li className="flex items-start"><FaCheckCircle className="mt-1 mr-2 text-green-500" /> Improve website performance and services.</li>
            <li className="flex items-start"><FaCheckCircle className="mt-1 mr-2 text-green-500" /> Send updates and offers (only if you opt in).</li>
            <li className="flex items-start"><FaCheckCircle className="mt-1 mr-2 text-green-500" /> Respond to support or inquiry requests.</li>
          </ul>
        </section>

        {/* Sharing Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Sharing Your Information</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaLock className="mt-1 mr-2 text-red-500" />
              <span>We do not sell, trade, or share your data without your consent.</span>
            </li>
            <li className="flex items-start">
              <FaUserShield className="mt-1 mr-2 text-yellow-500" />
              <span>We only share data with trusted providers under strict confidentiality agreements for operations like payments or technical support.</span>
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Data Security and Protection</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaLock className="mt-1 mr-2 text-green-500" />
              <span>We implement industry-standard security measures to protect your information.</span>
            </li>
            <li className="flex items-start">
              <FaExclamationTriangle className="mt-1 mr-2 text-red-500" />
              <span>While we strive to safeguard your data, no system can guarantee 100% protection. Please avoid sharing highly sensitive information unnecessarily.</span>
            </li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Your Rights and Choices</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start"><FaDatabase className="mt-1 mr-2 text-blue-500" /> Request access to the personal data we hold about you.</li>
            <li className="flex items-start"><FaEdit className="mt-1 mr-2 text-yellow-500" /> Request corrections if your information is inaccurate or incomplete.</li>
            <li className="flex items-start"><FaTrash className="mt-1 mr-2 text-red-500" /> Request deletion of your data (subject to legal obligations).</li>
          </ul>
        </section>

        {/* Updates to Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Updates to This Privacy Policy</h2>
          <p className="text-gray-700 flex items-start">
            <FaSync className="mt-1 mr-2 text-purple-500" />
            We may update this policy to reflect changes in our operations, technology, or legal requirements. Any updates will be posted on this page.
          </p>
        </section>

        {/* Contact Info */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Contact Us</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <FaEnvelope className="mt-1 mr-2 text-blue-500" />
              Email: <a href="mailto:contact@tinitiate.com" className="text-indigo-600 underline">contact@tinitiate.com</a>
            </li>
            <li className="flex items-start">
              <FaGlobe className="mt-1 mr-2 text-blue-500" />
              Website: <a href="https://www.tinitiate.com" className="text-indigo-600 underline" target="_blank">www.tinitiate.com</a>
            </li>
          </ul>
        </section>

        {/* Back to Home */}
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