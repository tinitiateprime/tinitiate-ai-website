// "use client"

// import { useRouter, usePathname } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const itDevelopmentServices = [
//   {
//     title: 'Data Engineering',
//     duration: 'Project Based',
//     image: '/images/it-development/data-engineering-1.png',
//     description: 'Design and build scalable data pipelines and warehousing solutions using AWS, Azure, and modern data tools.',
//     href: '/it-development/data-engineering',
//   },
//   {
//     title: 'App Development',
//     duration: 'Custom Timeline',
//     image: '/images/it-development/app-development-1.jpg',
//     description: 'Build cross-platform mobile and web apps tailored to client needs with seamless UX and secure APIs.',
//     href: '/it-development/app-development',
//   },
//   {
//     title: 'Web/Backend Development',
//     duration: 'Project Based',
//     image: '/images/it-development/web-backend-2.jpg',
//     description: 'Develop scalable, secure backend systems and responsive web applications using modern frameworks.',
//     href: '/it-development/web-backend',
//   },
//   {
//     title: 'Testing and Support',
//     duration: 'Ongoing',
//     image: '/images/it-development/testing-support-2.jpg',
//     description: 'Ensure quality through automated/manual testing, bug fixing, and continuous support for deployments.',
//     href: '/it-development/testing-support',
//   },
// ]

// const developmentOverview = [
//   "We provide a wide range of IT development services designed to meet the diverse needs of modern businesses. Our data engineering expertise allows us to transform raw data into valuable insights, utilizing cloud platforms like Azure and AWS to build robust data pipelines and integrate various data sources efficiently.",
//   "In app development, we create custom applications tailored to your business requirements, focusing on both Android and iOS platforms. Our team ensures a seamless development process, delivering high-quality, user-friendly apps.",
//   "Our backend development services are focused on creating scalable and secure backend systems that support your applications. We specialize in developing IoT backend systems with message queues and offer API development on AWS and Azure to ensure smooth communication between your applications and external services.",
//   "To ensure your software's quality and reliability, we offer comprehensive testing and support services. Our testing includes both automated and manual methods to identify and fix issues, while our ongoing support ensures your applications remain up-to-date and secure."
// ]

// function ServiceGrid({ title, services, onCardClick }) {
//   return (
//     <section className="py-20 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900 tracking-tight">
//           {title}
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {services.map(({ title, image, duration, description, href }, i) => (
//             <motion.div
//               key={title}
//               onClick={() => onCardClick(href)}
//               className="bg-white shadow hover:shadow-xl rounded-2xl p-6 cursor-pointer transition-all border border-blue-100"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//             >
//               <div className="relative w-full h-40 mb-4 rounded overflow-hidden shadow-sm">
//                 <Image src={image} alt={title} fill className="object-cover rounded" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
//               <p className="text-xs text-gray-500 mb-2">Timeline: {duration}</p>
//               <p className="text-sm text-gray-700 mb-4 line-clamp-3">{description}</p>
//               <span className="text-sm font-semibold inline-block px-5 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-700 transition text-center">
//                 Explore Service
//               </span>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-24 border-t pt-12">
//           <h3 className="text-3xl font-bold text-center mb-6 text-gray-900">
//             Why Choose Our Development Services?
//           </h3>
//           <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-base leading-relaxed text-center">
//             {developmentOverview.map((para, idx) => (
//               <motion.p
//                 key={idx}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.2 }}
//               >
//                 {para}
//               </motion.p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default function ITDevelopmentPage() {
//   const router = useRouter()
//   const pathname = usePathname()
//   const [selectedService, setSelectedService] = useState(null)

//   useEffect(() => {
//     const match = itDevelopmentServices.find(service =>
//       pathname === service.href
//     )
//     setSelectedService(match || null)
//   }, [pathname])

//   const handleNavigate = (href) => {
//     router.push(href)
//   }

//   return (
//     <main className="text-gray-800">
//       <motion.section
//         className="bg-gradient-to-br from-blue-100 to-white py-20 text-center px-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900">IT Development Services</h1>
//         <p className="max-w-2xl mx-auto text-lg text-gray-700">
//           Explore our professional development services, offering end-to-end solutions in engineering, applications, backend systems, and deployment support.
//         </p>
//       </motion.section>

//       {selectedService ? (
//         <div className="max-w-4xl mx-auto py-16 px-6">
//           <button
//             onClick={() => router.push('/it-development')}
//             className="text-sm text-blue-500 hover:underline mb-6"
//           >
//             ← Back to All Services
//           </button>
//           <motion.div
//             className="bg-white rounded-xl shadow-md p-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="relative w-full h-60 mb-4">
//               <Image src={selectedService.image} alt={selectedService.title} fill className="object-cover rounded" />
//             </div>
//             <h2 className="text-3xl font-bold mb-2">{selectedService.title}</h2>
//             <p className="text-sm text-gray-500 mb-4">Timeline: {selectedService.duration}</p>
//             <p className="text-base text-gray-700">{selectedService.description}</p>
//           </motion.div>
//         </div>
//       ) : (
//         <ServiceGrid
//           title="Explore Our Expertise"
//           services={itDevelopmentServices}
//           onCardClick={handleNavigate}
//         />
//       )}
//     </main>
//   )
// }










//  new Code

"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ServiceCards from '../components/ServiceCard'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

// const itDevelopmentServices = [
//   {
//     title: 'Data Engineering',
//     duration: 'Project Based',
//     image: '/images/it-development/data-engineering-1.png',
//     description: 'Design and build scalable data pipelines and warehousing solutions using AWS, Azure, and modern data tools.',
//     href: '/it-development/data-engineering',
//   },
//   {
//     title: 'App Development',
//     duration: 'Custom Timeline',
//     image: '/images/it-development/app-development-1.jpg',
//     description: 'Build cross-platform mobile and web apps tailored to client needs with seamless UX and secure APIs.',
//     href: '/it-development/app-development',
//   },
//   {
//     title: 'Web/Backend Development',
//     duration: 'Project Based',
//     image: '/images/it-development/web-backend-2.jpg',
//     description: 'Develop scalable, secure backend systems and responsive web applications using modern frameworks.',
//     href: '/it-development/web-backend',
//   },
//   {
//     title: 'Testing and Support',
//     duration: 'Ongoing',
//     image: '/images/it-development/testing-support-2.jpg',
//     description: 'Ensure quality through automated/manual testing, bug fixing, and continuous support for deployments.',
//     href: '/it-development/testing-support',
//   },
//   {
//   title: 'IT Reporting Services',
//   duration: 'Monthly / On-Demand',
//   image: '/images/it-development/reporting.jpg',
//   description: 'Build interactive dashboards, automated reports, and business intelligence systems for actionable insights.',
//   href: '/it-development/reporting'
// },
// {
//   title: 'DevOps Services',
//   duration: 'Ongoing / Project-Based',
//   image: '/images/it-development/devops.jpg',
//   description: 'Streamline development and deployment with CI/CD pipelines, containerization, and infrastructure automation.',
//   href: '/it-development/devops'
// },
// {
//   title: 'Database Services',
//   duration: 'Project / Ongoing',
//   image: '/images/it-development/database.jpg', 
//   description: 'Design, optimize, and manage relational and NoSQL databases with high availability, replication, and backup strategies.',
//   href: '/it-development/database'
// },
// {
//   title: 'Full Stack Development',
//   duration: 'Custom Timeline',
//   image: '/images/it-development-services.jpg', 
//   description: 'End-to-end development using modern frontend and backend technologies, delivering complete web and mobile solutions.',
//   href: '/it-development/full-stack-development'
// }



// ]

// const ServiceCard = ({ title, duration, image, description, href, onClick }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.98 }}
//     className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
//     onClick={() => onClick(href)}
//   >
//     <div className="relative w-full h-48">
//       <Image src={image} alt={title} fill className="object-cover" />
//     </div>
//     <div className="p-5">
//       <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{title}</h3>
//       <p className="text-sm text-gray-500 mt-1">Timeline: {duration}</p>
//       <p className="text-sm text-gray-700 mt-2 line-clamp-3">{description}</p>
//       <span className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">Learn More →</span>
//     </div>
//   </motion.div>
// )

export default function ITDevelopmentPage() {
  const router = useRouter()

  const handleCardClick = (href) => {
    router.push(href)
  }

  return (
    <main className="text-gray-800">
      {/* Hero Section */}
  {/* <section className="relative px-4 py-16 sm:py-24 text-center overflow-hidden">
    <div className="absolute inset-0 w-full h-full -z-10">
      <Image
        src="/images/banners/it-development.jpg" // 🔁 Replace with your image path
        alt="IT Development Banner"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" /> 
    </div>

    Foreground Text
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
        IT Development Services
      </h1>
      <p className="text-base sm:text-lg text-white mb-6">
        Scalable, secure, and modern solutions across engineering, application development, backend architecture, and testing support.
      </p>

      Optional CTA
      <Link
        href="/services/it-development"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Explore IT Development
      </Link>
    </div>
  </section> */}



  <section className="relative bg-black py-20 sm:py-10 md:py-15 ">
  <div className="max-w-7xl sm:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Text Section */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
      Development Services
      </h1>
      <p className="text-base sm:text-lg text-white mb-6 max-w-xl">
         Scalable, secure, and modern solutions across engineering, application development, backend architecture, and testing support.
      </p>
    </div>

    {/* Image Section */}
    <div className="relative w-full h-64 p-2 sm:h-80 md:h-[22rem] rounded-lg overflow-hidden shadow-lg">
      {/* <Image
        src="/images/banners/it-development-1.webp" // Replace with a real high-quality hero image
        alt="IT Development Solutions"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />  */}

      <picture className="block">
      
      <Image
        src="/images/banners/it-development-1.png"
        width={1600}
        height={900}
        priority
        fetchPriority="high"
        alt="IT Development banner"
        style={{ width: "100%", height: "auto", display: "block" }}
        sizes="(max-width: 768px) 100vw, 1600px"
      />
    </picture>  
    </div>
  </div>
  </section>

      {/* Service Cards Grid */}
      {/* <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Our Expertise
          </h2>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {itDevelopmentServices.map((service, i) => (
              <ServiceCard key={i} {...service} onClick={handleCardClick} />
            ))}
          </div>
        </div>
      </section> */}
      
        <section className="py-10 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
      Our Expertise
    </h2>
    
    {/* Grid and cards are handled inside ServiceCards */}
    <ServiceCards />
  </div>
</section>



      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-20 px-6 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Need Custom IT Solutions?</h2>
          <p className="mb-6 text-blue-100">
            Connect with our senior consultants to explore tailored strategies for digital transformation and operational growth.
          </p>
          {/* <button className="bg-white text-blue-900 px-6 py-3 font-semibold rounded-xl hover:bg-blue-100 transition">
            Book Consultation
          </button> */}
            <Link
             href={`/request-callback/`}
           className="bg-white text-blue-900 px-6 py-3 font-semibold rounded-xl hover:bg-blue-100 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
