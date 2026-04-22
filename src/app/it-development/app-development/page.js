// "use client"

// import Image from 'next/image'
// import Link from 'next/link'
// const serviceData = {
//   title: 'App Development Services',
//   image: '/images/banners/app-development.jpg', // 🔁 Use your actual image path
//   duration: 'Custom Timeline',
//   overview:
//     'Build cross-platform mobile and web apps tailored to client needs with seamless UX, secure APIs, and scalable architecture.',
//   details: [
//     'Custom app design and architecture planning',
//     'Development using React Native, Flutter, and modern web stacks',
//     'API integration with backend services and third-party platforms',
//     'CI/CD setup and deployment to App Store/Play Store',
//     'End-to-end testing, performance tuning, and versioning'
//   ],
//   benefits: [
//     'Faster time to market with agile iterations',
//     'Rich user experiences across devices',
//     'Secure and scalable infrastructure',
//     'Long-term maintenance and support'
//   ]
// }

// export default function AppDevelopmentPage() {
//   return (
//     <main className="text-gray-800 bg-white">
//       {/* Hero Section with dark background */}
//       <section className="relative w-full py-20 px-6 overflow-hidden bg-black">
//         {/* Optional background image theme or overlay can go here if needed */}

//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           {/* Image */}
//           <div className="relative w-full h-64 md:h-80">
//             <Image
//               src={serviceData.image}
//               alt={serviceData.title}
//               fill
//               className="object-contain rounded-lg"
//               priority
//             />
//           </div>

//           {/* Text Content */}
//           <div>
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
//               {serviceData.title}
//             </h1>
//             <p className="text-lg text-white mb-3">{serviceData.overview}</p>
//             <p className="text-sm text-white mb-4">
//               <strong>Timeline:</strong> {serviceData.duration}
//             </p>
//             {/* <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
//               Request Consultation
//             </button> */}
//               <Link
//              href={`/request-callback/`}
//             className="mt-7 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//              Request Consultation
//           </Link>
//           </div>
//         </div>
//       </section>

//       {/* Details Section */}
//       <section className="py-12 px-6 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-900">Service Offerings</h2>
//         <ul className="list-disc space-y-2 pl-5 text-gray-700">
//           {serviceData.details.map((d, i) => (
//             <li key={i}>{d}</li>
//           ))}
//         </ul>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-12 px-6 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why Choose This Service</h2>
//         <ul className="list-disc space-y-2 pl-5 text-gray-700">
//           {serviceData.benefits.map((b, i) => (
//             <li key={i}>{b}</li>
//           ))}
//         </ul>
//       </section>
//     </main>
//   )
// }





"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMobileAlt,
  faCogs,
  faCloudUploadAlt,
  faCodeBranch,
  faPlug,
  faShieldAlt,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

const serviceData = {
  title: 'App Development Services',
  image: '/images/banners/app-development.jpg',
  duration: 'Custom Timeline',
  overview:
    'Build cross-platform mobile and web apps tailored to client needs with seamless UX, secure APIs, and scalable architecture.',
  details: [
    {
      icon: faMobileAlt,
      title: 'Custom App Design',
      description: 'Design intuitive, user-friendly interfaces with strong UX focus for mobile/web.'
    },
    {
      icon: faCogs,
      title: 'Cross-platform Development',
      description: 'React Native, Flutter, and full-stack web development tailored to your stack.'
    },
    {
      icon: faPlug,
      title: 'API Integration',
      description: 'Connect to backend systems, third-party APIs, and cloud platforms seamlessly.'
    },
    // {
    //   icon: faCloudUploadAlt,
    //   title: 'CI/CD & App Store Deployment',
    //   description: 'Automated delivery pipelines with Play Store / App Store deployments.'
    // },
    {
      icon: faCodeBranch,
      title: 'Versioning & Maintenance',
      description: 'Robust version control, OTA updates, and long-term support strategies.'
    },
    {
      icon: faShieldAlt,
      title: 'Testing & Security',
      description: 'Thorough QA, device testing, and protection against common vulnerabilities.'
    }
  ],
  benefits: [
    'Faster time to market with agile iterations',
    'Rich user experiences across devices',
    'Secure and scalable infrastructure',
    'Long-term maintenance and support'
  ]
}

export default function AppDevelopmentPage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-6 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={serviceData.image}
              alt={serviceData.title}
              fill
              className="object-contain rounded-lg"
              priority
              fetchPriority="high"
 
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {serviceData.title}
            </h1>
            <p className="text-lg text-white mb-3">{serviceData.overview}</p>
            <p className="text-sm text-white mb-4">
              <strong>Timeline:</strong> {serviceData.duration}
            </p>
            <Link
              href={`/request-callback/`}
              className="mt-7 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Service Offerings
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {serviceData.details.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-3 group-hover:bg-blue-500 group-hover:text-white transition">
                    <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
      Why Choose This Service
    </h2>

    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
      {serviceData.benefits.map((benefit, i) => (
        <div
          key={i}
          className="flex items-center bg-white border border-gray-200 shadow-md rounded-2xl p-3 hover:shadow-xl hover:border-blue-500 transition"
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className=" text-blue-600 rounded-full p-3 flex items-center justify-center">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="">
            <p className="text-gray-800 text-base leading-relaxed">
              {benefit}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  )
}

