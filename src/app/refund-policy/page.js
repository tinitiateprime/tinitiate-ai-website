'use client'

import Link from 'next/link'
import {
  FaEnvelope,
  FaTimesCircle,
  FaCheckCircle,
  FaClock,
  FaSyncAlt,
  FaArrowLeft
} from 'react-icons/fa'

export default function CancellationRefundPolicy() {
  return (
    <main className="bg-white text-gray-800 min-h-screen py-12 px-6 sm:px-10 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Cancellation & Refund Policy
        </h1>

        <p className="text-lg text-center text-gray-600 mb-10">
          At <span className="font-semibold text-indigo-500">TINITIATE Technologies</span>, we are committed to delivering high-quality IT training and services. We understand that plans may change, so here is our transparent policy regarding cancellations and refunds.
        </p>

        {/* Cancellation Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Cancellation Policy</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaEnvelope className="mt-1 mr-2 text-blue-500" />
              Contact us at <a href="mailto:info@tinitiate.com" className="text-indigo-500 underline">info@tinitiate.com</a> to initiate a cancellation.
            </li>
            <li className="flex items-start">
              <FaTimesCircle className="mt-1 mr-2 text-red-500" />
              A non-refundable administrative fee of <strong>15% </strong> applies to all cancellations.
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              If you cancel before the course begins, you are eligible for a refund minus the 15% fee.
            </li>
          </ul>
        </section>

        {/* Refund Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Refund Policy</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              If a batch is canceled by TINITIATE, students may opt for a full refund or join a different batch.
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-2 text-green-500" />
              If a student cancels before class begins, they will receive a refund minus the 15% administrative fee.
            </li>
            <li className="flex items-start">
              <FaTimesCircle className="mt-1 mr-2 text-red-500" />
              No refunds are issued after class has started and the refund window has closed.
            </li>
            <li className="flex items-start">
              <FaClock className="mt-1 mr-2 text-yellow-500" />
              Refund requests must be made within <strong>7 days</strong> or before completing <strong>5 hours</strong> of training, whichever comes first.
            </li>
          </ul>
        </section>

        {/* Non-Refundable Items */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Non-Refundable Items</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaTimesCircle className="mt-1 mr-2 text-red-500" />
              Refund requests made after the specified refund window.
            </li>
            <li className="flex items-start">
              <FaTimesCircle className="mt-1 mr-2 text-red-500" />
              Accessed downloadable digital content or course materials.
            </li>
            <li className="flex items-start">
              <FaTimesCircle className="mt-1 mr-2 text-red-500" />
              Custom corporate training sessions once scheduled.
            </li>
          </ul>
        </section>

        {/* Refund Processing */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Refund Processing</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaEnvelope className="mt-1 mr-2 text-blue-500" />
              You will be notified of approval or rejection after your refund request is reviewed.
            </li>
            <li className="flex items-start">
              <FaSyncAlt className="mt-1 mr-2 text-green-500" />
              Approved refunds are processed within <strong>7 to 10 business days</strong> to the original payment method.
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