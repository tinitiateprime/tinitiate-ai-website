"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function OracleServicePage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 h-auto">
          <Image
            src="/images/remote-consulting/oracle.png"
            alt="Oracle Banner"
            fill
            className=" opacity-30"
            loading="lazy"  // <-- lazy load
          />
        </div>
        <div className="relative z-10 text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Enterprise-Grade Oracle Database Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empowering Businesses with Secure, Scalable, and High-Performance Data Solutions
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-blue-600">Why Choose Our Oracle Services?</h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div>
            <p className="mb-4">
              <strong>Optimized Database Performance:</strong> Reduce query execution time and improve system efficiency.
            </p>
            <p className="mb-4">
              <strong>Enterprise-Grade Security:</strong> Safeguard your data with advanced encryption and compliance.
            </p>
          </div>
          <div>
            <p className="mb-4">
              <strong>Scalable Cloud Solutions:</strong> Seamless migration to Oracle Cloud for better agility and cost savings.
            </p>
            <p className="mb-4">
              <strong>24/7 Monitoring & Support:</strong> Minimize downtime with proactive database health checks.
            </p>
          </div>
        </div>
      </section>

      {/* Data Architecture */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Data Architecture</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Custom database design tailored to your business needs for scalable, efficient, and secure systems.</li>
            <li>High-availability configurations, DB, Schema design, Partitioning, RAC and Data Guard to ensure uninterrupted operations and disaster recovery.</li>
            <li>Database migration planning and execution for seamless transitions from legacy systems.</li>
            <li>Cloud-ready architecture design for hybrid or fully cloud-based environments.</li>
            <li>Data security architecture with encryption, access control, and auditing for compliance.</li>
          </ul>
        </div>
      </section>

      {/* Data Modeling & Management */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Data Modeling & Management</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Optimize relational models and schema designs to improve data consistency and reduce redundancy.</li>
            <li>Implement database solutions for OLTP systems and processes, event data and transactional data.</li>
            <li>Implement data warehousing solutions for business intelligence, including ETL processes and OLAP cubes.</li>
            <li>Master data management (MDM) strategies to ensure data quality and integrity across the enterprise.</li>
            <li>Design and implement normalized and denormalized schemas based on performance needs.</li>
          </ul>
        </div>
      </section>

      {/* Database Development */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Database Development</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Design and implement efficient schemas to improve data consistency and support long-term scalability.</li>
            <li>Develop Oracle-based solutions for online transaction processing and high-frequency data operations.</li>
            <li>Build data warehouses with robust ETL pipelines and OLAP capabilities for analytics and reporting.</li>
            <li>Ensure data integrity and consistency across systems with MDM strategies and governance practices.</li>
            <li>Implement schema structures optimized for speed, flexibility, and workload-specific demands.</li>
          </ul>
        </div>
      </section>

      {/* Performance Tuning */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Performance Tuning</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Identify and eliminate slow-performing queries through detailed query analysis and optimization techniques.</li>
            <li>Advanced indexing strategies, including bitmap, function-based, and composite indexes for improved performance.</li>
            <li>Partitioning techniques to handle large datasets efficiently, including range, list, and hash partitioning.</li>
            <li>Memory optimization through proper buffer cache management and query execution plan analysis.</li>
            <li>Database auto-tuning and automated maintenance tasks for ongoing performance improvements.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Optimize Your Oracle Infrastructure?
          </h2>
          <p className="mb-6 text-lg text-white-100">
            Connect with our certified Oracle specialists to architect, scale, and secure your enterprise database solutions.
          </p>
          <Link
             href={`/request-callback/`}
            className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
