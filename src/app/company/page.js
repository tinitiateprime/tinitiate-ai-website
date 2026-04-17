// src/app/company/page.jsx
"use client"
import Image from "next/image"
export default function CompanyPage() {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-blue-100 to-white py-20 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900"> TINITIATE</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Empowering individuals and businesses through innovative IT training and development services.
        </p>
      </section> */}

            {/* <section className="relative px-4 py-16 sm:py-24 text-center overflow-hidden">               
                Background Image Container (with height)
                <div className="absolute inset-0 w-full h-full ">
                  <Image
                    src="/images/banners/company.jpg" // Replace with your actual image
                    alt="Remote Consulting Background"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                  />
                  Optional dark overlay to enhance text contrast
                  <div className="absolute inset-0 bg-black/60" />
                </div>
            
                Foreground Text Content
                <div className="relative z-10 max-w-4xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            TINITIATE
                  </h1>
                  <p className="text-base sm:text-lg text-white mb-6">
                  Empowering individuals and businesses through innovative IT training and development services.
                   
                  </p>
                </div>
              </section> */}

              <section className="relative bg-black py-20 sm:py-10 md:py-15 ">
  <div className="max-w-7xl sm:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Text Section */}
    <div className="text-center md:text-left">
      <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
        Trusted IT Experts
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
        TINITIATE Technologies 
      </h1>
      <p className="text-base sm:text-lg text-white mb-6 max-w-xl">
         Empowering individuals and businesses through innovative IT training and development services.
      </p>
    </div>

    {/* Image Section */}
    <div className="relative w-full h-64 p-2 sm:h-80 md:h-[22rem] rounded-lg overflow-hidden shadow-lg">
      <Image
        src="/images/banners/company.jpg" // Replace with a real high-quality hero image
        alt="IT Development Solutions"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  </div>
  </section>

      {/* Who We Are */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TINITIATE is a technology-driven organization committed to delivering high-quality IT training and development services. With over 15 years of industry experience, we bridge the gap between education and employment by equipping students and professionals with real-world skills.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team of experienced professionals, industry experts, and technologists ensure every engagement reflects our commitment to excellence, innovation, and learner success.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-20 px-6 ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To enable individuals, students, and corporate teams to thrive in the digital world by delivering hands-on, real-time IT education, software development, and cloud-based engineering solutions.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Empower through practical, live-project-based training</li>
            <li>Deliver full-cycle software development and support</li>
            <li>Support career growth with domain-oriented guidance</li>
          </ul>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-white py-20 px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you&apos;re an individual looking to upskill or an enterprise needing cutting-edge development services, TINITIATE is your trusted technology partner. Our commitment to personalized mentoring, project-oriented learning, and scalable engineering makes us stand out.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              'Proven industry experience across multiple domains',
              'Live project-based training with practical exposure',
              'Full-stack, cloud, and DevOps capabilities',
              'Support for corporate upskilling and transformation',
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
