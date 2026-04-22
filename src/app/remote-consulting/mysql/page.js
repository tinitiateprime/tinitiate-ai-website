// "use client"

// import Image from 'next/image'

// export default function MySQLServicePage() {
//   return (
//     <main className="text-gray-800 bg-white">
//       <section className="text-center py-20 bg-gradient-to-br from-gray-100 to-white px-4">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
//           Enterprise-Grade MySQL Database Services
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg text-gray-700">
//           Empowering Businesses with Flexible, Reliable, and High-Performance Data Solutions
//         </p>
//       </section>

//       {/* Why Choose */}
//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-blue-600">Why Choose Our MySQL Services?</h2>
//         <ul className="space-y-6 text-gray-700 text-lg list-disc list-inside">
//           <li>
//             <strong>Optimized Query Performance:</strong> Accelerate application speed with expertly tuned queries and indexing strategies.
//           </li>
//           <li>
//             <strong>Reliable Data Security:</strong> Protect your data with secure configurations, access controls, and compliance best practices.
//           </li>
//           <li>
//             <strong>Scalable Cloud Deployments:</strong> Migrate and manage MySQL on cloud platforms like AWS, Azure, or Google Cloud with confidence.
//           </li>
//           <li>
//             <strong>24/7 Monitoring & Support:</strong> Ensure high availability with real-time monitoring, automated alerts, and round-the-clock expert support.
//           </li>
//         </ul>
//       </section>

//       {/* Data Architecture */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-blue-600">Data Architecture</h2>
//           <ul className="space-y-6 text-gray-700 text-lg list-disc list-inside">
//             <li>Custom database design tailored to your business needs for scalable, efficient, and secure systems.</li>
//             <li>High-availability configurations, schema design, sharding, and replication to ensure continuous uptime and effective disaster recovery.</li>
//             <li>Comprehensive database migration planning and execution for seamless transitions from legacy or proprietary systems to MySQL.</li>
//             <li>Cloud-ready architecture design for hybrid or fully cloud-based deployments on platforms like AWS, Google Cloud, or Azure.</li>
//             <li>Data security architecture with advanced encryption, access control, and auditing to meet enterprise compliance standards.</li>
//           </ul>
//         </div>
//       </section>

//       {/* Data Modeling & Management */}
//       <section className="py-16 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-blue-600">Data Modeling & Management</h2>
//           <ul className="space-y-6 text-gray-700 text-lg list-disc list-inside">
//             <li>Design efficient, scalable schemas to improve data consistency and reduce redundancy.</li>
//             <li>Implement MySQL solutions for real-time event-driven systems and high-volume transactional data.</li>
//             <li>Design data warehousing architectures with ETL pipelines and OLAP-style reporting for deeper insights.</li>
//             <li>Establish governance and consistency with MDM strategies for unified, high-quality enterprise data.</li>
//             <li>Balance performance and flexibility by designing schemas tailored to specific query and workload requirements.</li>
//           </ul>
//         </div>
//       </section>

//       {/* Database Development */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-blue-600">Database Development</h2>
//           <ul className="space-y-6 text-gray-700 text-lg list-disc list-inside">
//             <li>Design efficient schemas to improve data consistency, eliminate redundancy, and support long-term scalability.</li>
//             <li>Develop MySQL-based solutions for online transaction processing, event handling, and high-frequency data operations.</li>
//             <li>Build data warehouses with robust ETL pipelines and OLAP capabilities to support analytics and reporting.</li>
//             <li>Ensure data integrity and consistency across systems with proven MDM strategies and governance practices.</li>
//             <li>Implement schema structures based on performance needs—balancing speed, storage efficiency, and query flexibility.</li>
//           </ul>
//         </div>
//       </section>
//     </main>
//   )
// }















"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function MySQLServicePage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
  <Image
    src="/images/remote-consulting/mysql.png"
    alt=""                  // if decorative; otherwise keep your alt text
    fill
    loading="lazy"
    sizes="100vw"           // tell the browser how wide it will render
    className="object-contain opacity-30 pointer-events-none -z-10" 
    /* lazy load */
  />
        </div>
        <div className="relative z-10 text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Enterprise-Grade MySQL Database Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empowering Businesses with Flexible, Reliable, and High-Performance Data Solutions
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-blue-600">Why Choose Our MySQL Services?</h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div>
            <p className="mb-4">
              <strong>Optimized Query Performance:</strong> Accelerate application speed with expertly tuned queries and indexing strategies.
            </p>
            <p className="mb-4">
              <strong>Reliable Data Security:</strong> Protect your data with secure configurations, access controls, and compliance best practices.
            </p>
          </div>
          <div>
            <p className="mb-4">
              <strong>Scalable Cloud Deployments:</strong> Migrate and manage MySQL on cloud platforms like AWS, Azure, or Google Cloud with confidence.
            </p>
            <p className="mb-4">
              <strong>24/7 Monitoring & Support:</strong> Ensure high availability with real-time monitoring, automated alerts, and round-the-clock expert support.
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
            <li>High-availability configurations, schema design, sharding, and replication to ensure continuous uptime and effective disaster recovery.</li>
            <li>Comprehensive database migration planning and execution for seamless transitions from legacy or proprietary systems to MySQL.</li>
            <li>Cloud-ready architecture design for hybrid or fully cloud-based deployments on platforms like AWS, Google Cloud, or Azure.</li>
            <li>Data security architecture with advanced encryption, access control, and auditing to meet enterprise compliance standards.</li>
          </ul>
        </div>
      </section>

      {/* Data Modeling & Management */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Data Modeling & Management</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Design efficient, scalable schemas to improve data consistency and reduce redundancy.</li>
            <li>Implement MySQL solutions for real-time event-driven systems and high-volume transactional data.</li>
            <li>Design data warehousing architectures with ETL pipelines and OLAP-style reporting for deeper insights.</li>
            <li>Establish governance and consistency with MDM strategies for unified, high-quality enterprise data.</li>
            <li>Balance performance and flexibility by designing schemas tailored to specific query and workload requirements.</li>
          </ul>
        </div>
      </section>

      {/* Database Development */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-600">Database Development</h2>
          <ul className="space-y-6 text-lg text-gray-700 list-disc pl-6">
            <li>Design efficient schemas to improve data consistency, eliminate redundancy, and support long-term scalability.</li>
            <li>Develop MySQL-based solutions for online transaction processing, event handling, and high-frequency data operations.</li>
            <li>Build data warehouses with robust ETL pipelines and OLAP capabilities to support analytics and reporting.</li>
            <li>Ensure data integrity and consistency across systems with proven MDM strategies and governance practices.</li>
            <li>Implement schema structures based on performance needs—balancing speed, storage efficiency, and query flexibility.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
<section className="bg-gradient-to-r from-blue-950 to-blue-500 text-white text-center py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      Ready to Transform Your MySQL Infrastructure?
    </h2>
    <p className="mb-6 text-lg text-blue-100">
      Connect with our certified MySQL architects for a tailored consultation that fits your enterprise goals.
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
