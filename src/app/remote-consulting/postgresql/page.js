"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function PostgreSQLServicePage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <Image
            src="/images/remote-consulting/postgresql.png"
            alt="PostgreSQL Banner"
            fill
            className="object-cover opacity-30"
            loading="lazy"  // <-- lazy load
          />
        </div>
        <div className="relative z-10 text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Enterprise-Grade PostgreSQL Database Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empowering Businesses with Secure, Scalable, and High-Performance Data Solutions
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-blue-600">Why Choose Our PostgreSQL Services?</h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div>
            <p className="mb-4">
              <strong>Optimized Database Performance:</strong> Accelerate query execution and improve system efficiency through advanced tuning and indexing techniques.
            </p>
            <p className="mb-4">
              <strong>Enterprise-Grade Security:</strong> Protect your data with SSL encryption, role-based access controls, and compliance-driven auditing features.
            </p>
          </div>
          <div>
            <p className="mb-4">
              <strong>Scalable Cloud Solutions:</strong> Seamlessly migrate to PostgreSQL on AWS RDS, Azure Database for PostgreSQL, or fully managed cloud-native platforms.
            </p>
            <p className="mb-4">
              <strong>24/7 Monitoring & Support:</strong> Ensure high availability and minimal downtime with continuous monitoring, automated alerts, and expert support.
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
            <li>Implement resilient PostgreSQL architectures using replication, failover strategies, and schema optimization to ensure continuous uptime.</li>
            <li>Use range, list, and hash partitioning to manage large datasets effectively and boost performance.</li>
            <li>Plan and execute smooth transitions from legacy or proprietary systems to PostgreSQL with minimal disruption.</li>
            <li>Architect hybrid or fully cloud-native solutions with PostgreSQL on AWS, Azure, GCP, or private cloud platforms.</li>
          </ul>
        </div>
      </section>

      {/* Data Modeling & Management */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Data Modeling & Management</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Design and refine PostgreSQL schemas to reduce redundancy, enforce data integrity, and support future growth.</li>
            <li>Build high-performance, transaction-driven applications using PostgreSQL for real-time and event-based data processing.</li>
            <li>Implement data warehousing solutions for business intelligence, including ETL processes and OLAP cubes.</li>
            <li>Architect data warehouses with ETL pipelines and OLAP-style capabilities using PostgreSQL extensions like Citus or foreign data wrappers.</li>
            <li>Structure data models based on performance and reporting needs, balancing normalization with efficient access patterns.</li>
          </ul>
        </div>
      </section>

      {/* Database Development */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Database Development</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Enhance data consistency and minimize redundancy with expertly designed PostgreSQL schemas.</li>
            <li>Develop responsive, transaction-oriented systems leveraging PostgreSQL&apos;s reliability and ACID-compliance for real-time and event-driven data.</li>
            <li>Create efficient data warehousing architectures with support for ETL pipelines and analytics using PostgreSQL extensions and tools.</li>
            <li>Establish enterprise-wide MDM strategies to maintain consistent, accurate, and authoritative data across applications.</li>
            <li>Design database structures tailored to performance needs, balancing normalized models with denormalized structures for reporting efficiency.</li>
          </ul>
        </div>
      </section>

      {/* Performance Tuning */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Performance Tuning</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Detect and eliminate performance bottlenecks using EXPLAIN ANALYZE, query rewriting, and execution plan tuning.</li>
            <li>Improve query response times with B-tree, GiST, GIN, BRIN, and function-based indexing tailored to your data access patterns.</li>
            <li>Leverage PostgreSQL&apos;s native table partitioning (range, list, hash) to efficiently manage and query large datasets.</li>
            <li>Fine-tune buffer size, work memory, shared memory, and autovacuum settings for maximum throughput.</li>
            <li>Utilize PostgreSQL&apos;s auto-tuning tools, custom scripts, and maintenance routines to ensure continuous performance improvement.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sky-900 to-sky-600 text-white text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Elevate Your PostgreSQL Environment?
          </h2>
          <p className="mb-6 text-lg text-sky-100">
            Connect with our certified PostgreSQL experts to design, scale, and optimize your data infrastructure.
          </p>
          <Link
             href={`/request-callback/`}
            className="inline-block bg-white text-sky-900 px-6 py-3 rounded-lg font-semibold hover:bg-sky-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
