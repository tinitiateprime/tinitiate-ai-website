"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function SQLServerServicePage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <Image
            src="/images/remote-consulting/sqlserver.png"
            alt="SQL Server Banner"
            fill
            className="object-cover opacity-30"
            loading="lazy"  // <-- lazy load
          />
        </div>
        <div className="relative z-10 text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Enterprise-Grade SQL Server Database Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empowering Businesses with Secure, Scalable, and High-Performance Data Solutions
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-blue-600">Why Choose Our SQL Server Services?</h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div>
            <p className="mb-4">
              <strong>Optimized Database Performance:</strong> Improve system efficiency and reduce query execution times through advanced tuning and indexing strategies.
            </p>
            <p className="mb-4">
              <strong>Enterprise-Grade Security:</strong> Protect your data with robust security features including Transparent Data Encryption (TDE), role-based access, and compliance-ready auditing.
            </p>
          </div>
          <div>
            <p className="mb-4">
              <strong>Scalable Cloud Solutions:</strong> Enable flexibility and cost-efficiency with seamless migration to Azure SQL or hybrid cloud environments.
            </p>
            <p className="mb-4">
              <strong>24/7 Monitoring & Support:</strong> Minimize downtime and ensure reliability with proactive health checks, performance tracking, and around-the-clock expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Data Architecture */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Data Architecture</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Custom database architecture designed to meet your business needs with scalability, performance, and security.</li>
            <li>Implement Always On Availability Groups, failover clustering, and well-structured schemas to ensure continuous uptime and operational resilience.</li>
            <li>Design efficient partitioning strategies (range, list, and filegroup-based) to manage large datasets and optimize query performance.</li>
            <li>Plan and execute migrations from legacy systems or other database platforms to SQL Server with minimal downtime and risk.</li>
            <li>Architect for hybrid or fully cloud-based environments using Azure SQL Database, SQL Managed Instance, or on-prem-to-cloud strategies.</li>
          </ul>
        </div>
      </section>

      {/* Data Modeling & Management */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Data Modeling & Management</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Strategic data design and governance to power reliable, high-performance enterprise systems.</li>
            <li>Design and refine relational schemas to improve data consistency, eliminate redundancy, and support scalability.</li>
            <li>Build high-performance, transaction-driven solutions using SQL Server for event data and real-time processing.</li>
            <li>Create SQL Server&#x2013;based data warehouses with robust ETL workflows and support for OLAP cubes to drive business insights.</li>
            <li>Implement schema structures that align with workload demands—balancing performance, complexity, and storage efficiency.</li>
          </ul>
        </div>
      </section>

      {/* Database Development */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Database Development</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Improve data consistency and eliminate redundancy through well-structured, scalable schema design.</li>
            <li>Develop robust SQL Server solutions for transactional systems, event-driven processes, and real-time data capture.</li>
            <li>Design and build data warehouses with ETL pipelines, staging environments, and OLAP cubes to support enterprise analytics.</li>
            <li>Master data management (MDM) strategies to ensure data quality and integrity across the enterprise.</li>
            <li>Create normalized or denormalized data models optimized for specific performance, reporting, or storage needs.</li>
          </ul>
        </div>
      </section>

      {/* Performance Tuning */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Performance Tuning</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Identify and resolve performance bottlenecks through execution plan analysis, query refactoring, and indexing improvements.</li>
            <li>Implement effective indexing, including clustered, non-clustered, filtered, and columnstore indexes for faster data retrieval.</li>
            <li>Manage large datasets efficiently with table and index partitioning strategies, including range and list-based partitions.</li>
            <li>Fine-tune memory usage, buffer pool, and cache settings to improve query execution and server performance.</li>
            <li>Leverage SQL Server&aposs automatic plan correction and implement proactive maintenance plans for sustained performance.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-500 text-white text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Transform Your SQL Server Infrastructure?
          </h2>
          <p className="mb-6 text-lg text-blue-100">
            Connect with our certified SQL Server consultants to unlock enterprise-grade performance, scalability, and reliability.
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
