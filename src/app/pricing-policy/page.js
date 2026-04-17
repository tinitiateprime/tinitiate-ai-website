'use client'

import Link from 'next/link'
import {
  FaRupeeSign,
  FaDollarSign,
  FaCreditCard,
  FaLock,
  FaExchangeAlt,
  FaInfoCircle,
  FaSyncAlt,
  FaPhone,
  FaArrowLeft
} from 'react-icons/fa'

export default function PricingPolicy() {
  return (
    <main className="bg-white text-gray-800 min-h-screen py-12 px-6 sm:px-10 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">
          Pricing Policy
        </h1>

        <p className="text-lg text-center text-gray-600 mb-10">
          At <span className="font-semibold text-indigo-500">TINITIATE Technologies</span>, we believe in fair, clear, and competitive pricing for all our IT services and training programs. Below is our pricing policy.
        </p>

        {/* Pricing Structure */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Pricing Structure</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaRupeeSign className="mt-1 mr-2 text-green-500" />
              <span>
                All prices are listed in <strong>INR</strong> and <FaDollarSign className="inline text-blue-500" /> <strong>USD</strong>, excluding applicable taxes and fees.
              </span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-yellow-500" />
              <span>
                Pricing may vary with seasonal promotions, discounts, or special offers. Please visit our website for current updates.
              </span>
            </li>
          </ul>
        </section>

        {/* Secure Payment Methods */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Secure Payment Methods</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaCreditCard className="mt-1 mr-2 text-purple-500" />
              <span>
                We support payments through credit/debit cards, UPI, net banking, and verified digital gateways.
              </span>
            </li>
            <li className="flex items-start">
              <FaLock className="mt-1 mr-2 text-red-500" />
              <span>
                All transactions are encrypted and processed securely to protect your personal and financial information.
              </span>
            </li>
          </ul>
        </section>

        {/* Price Adjustments */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Price Adjustments and Updates</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaExchangeAlt className="mt-1 mr-2 text-green-500" />
              <span>
                Pricing may be updated based on market conditions, exchange rates, or industry trends. We will communicate major changes where possible.
              </span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-red-500" />
              <span>
                In case of pricing errors or discrepancies, TINITIATE reserves the right to cancel or modify affected orders with prior notice.
              </span>
            </li>
          </ul>
        </section>

        {/* Refund Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Refund and Return Policy</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaSyncAlt className="mt-1 mr-2 text-green-500" />
              <span>
                Refunds may be available on eligible purchases. Please review our refund policy for conditions and procedures.
              </span>
            </li>
            <li className="flex items-start">
              <FaInfoCircle className="mt-1 mr-2 text-blue-500" />
              <span>
                Visit our <Link href="/refund-policy" className="text-indigo-600 underline">Refund Policy</Link> page for full terms and instructions.
              </span>
            </li>
          </ul>
        </section>

        {/* Customer Support */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Customer Support and Assistance</h2>
          <p className="text-gray-700 flex items-start">
            <FaPhone className="mt-1 mr-2 text-blue-500" />
            For any pricing-related queries, please contact us at{' '}
            <a href="mailto:contact@tinitiate.com" className="text-indigo-600 underline ml-1">
              contact@tinitiate.com
            </a>
            .
          </p>
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
