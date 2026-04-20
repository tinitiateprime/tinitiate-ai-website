"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function RedshiftServicePage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <Image
            src="/images/remote-consulting/redshift.png"
            alt="Amazon Redshift Banner"
            fill
            className="object-cover opacity-30"
            loading="lazy"  // <-- lazy load
          />
        </div>
        <div className="relative z-10 text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Enterprise-Grade Amazon Redshift Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empowering Businesses with Secure, Scalable, and High-Performance Data Solutions
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-blue-600">Why Choose Our Amazon Redshift Services?</h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div>
            <p className="mb-4">
              <strong>Optimized Database Performance:</strong> Accelerate complex analytics with performance tuning, workload management, and Redshift Spectrum integration.
            </p>
            <p className="mb-4">
              <strong>Enterprise-Grade Security:</strong> Safeguard your data using VPC isolation, encryption at rest and in transit, IAM integration, and detailed access auditing.
            </p>
          </div>
          <div>
            <p className="mb-4">
              <strong>Scalable Cloud Solutions:</strong> Seamlessly scale compute and storage with Redshift RA3 nodes, concurrency scaling, and native integration with AWS services.
            </p>
            <p className="mb-4">
              <strong>24/7 Monitoring & Support:</strong> Ensure high availability and performance with proactive monitoring, performance dashboards, and expert support around the clock.
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
            <li>Build resilient Redshift environments optimized for large-scale analytics with support for columnar storage, massively parallel processing (MPP), and workload management.</li>
            <li>Use distribution styles, sort keys, and table design best practices to handle massive datasets and accelerate query performance.</li>
            <li>Plan and execute smooth transitions from on-premises or legacy data warehouses to Amazon Redshift with minimal disruption and downtime.</li>
            <li>Architect fully cloud-native solutions on AWS, leveraging Redshift RA3 instances, Redshift Spectrum, and tight integration with the AWS ecosystem.</li>
          </ul>
        </div>
      </section>

      {/* Data Modeling & Management */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Data Modeling & Management</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Model your Redshift tables using best practices for columnar storage, compression encoding, and sort/distribution keys to enhance performance and storage efficiency.</li>
            <li>Support both real-time and scheduled data ingestion via Amazon Kinesis, AWS Glue, or third-party ETL tools for robust transactional and event-driven pipelines.</li>
            <li>Architect scalable Redshift data warehouses to support large-scale analytics, dashboards, and data-driven decision-making.</li>
            <li>Implement efficient data transformation pipelines using Redshift-compatible tools like dbt, AWS Glue, or custom scripts.</li>
            <li>Design star and snowflake schemas tailored to workload patterns, balancing denormalization for speed with structured normalization for maintainability.</li>
          </ul>
        </div>
      </section>

      {/* Database Development */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Database Development</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Develop well-structured Redshift schemas using appropriate distribution styles, sort keys, and compression to reduce redundancy and maximize query performance.</li>
            <li>Design data pipelines for real-time and batch ingestion using services like Kinesis, AWS Glue, and Lambda for event-based and transactional workloads.</li>
            <li>Architect robust data warehouse solutions leveraging Redshiftframer-motion&aposs MPP engine to support complex analytical queries and large-scale data processing.</li>
            <li>Implement MDM frameworks to ensure accuracy, consistency, and a single source of truth across all enterprise data systems.</li>
            <li>Balance normalized and denormalized data models—using star and snowflake schemas—to support high-speed reporting and BI workloads.</li>
          </ul>
        </div>
      </section>

      {/* Performance Tuning */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Performance Tuning</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Detect and resolve performance bottlenecks using Redshift&aposs EXPLAIN, STL_QUERY, and SVL_QLOG views to analyze and refine execution plans.</li>
            <li>Improve performance using sort keys, distribution styles, and compression encodings instead of traditional indexing for columnar optimization.</li>
            <li>Optimize large datasets by selecting the right distribution keys and styles (KEY, EVEN, ALL) to reduce data movement and improve query efficiency.</li>
            <li>Fine-tune concurrency scaling, workload management (WLM), and query queue configurations for optimal resource allocation and throughput.</li>
            <li>Set up VACUUM and ANALYZE routines, enable automated table optimization, and monitor performance with CloudWatch and Redshift console insights.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Accelerate Your Data with Amazon Redshift?
          </h2>
          <p className="mb-6 text-lg text-blue-100">
            Partner with our AWS-certified Redshift specialists to scale your data architecture and boost analytic performance.
          </p>
          <Link
             href={`/request-callback/`}
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
