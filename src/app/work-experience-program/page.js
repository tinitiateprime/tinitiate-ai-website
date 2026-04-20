// 'use client'

// import Image from 'next/image'

// export default function WorkExperienceProgramPage() {
//   return (
//     <main className="text-gray-800 bg-white">
//       {/* 🏁 Hero Section */}
//       <section className="relative w-full py-19 px-6 overflow-hidden bg-black">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           {/* Text */}
//           <div className="text-white">
//             <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
//               Work Experience Training Program
//             </h1>
//             <p className="text-lg mb-6">
//               Designed to equip individuals with universal IT skills and hands-on experience to secure and sustain employment in today&apos;s competitive environment.
//             </p>
//             <p className="text-sm opacity-80">
//               Conducted both onsite and remotely, this program builds your confidence, professionalism, and technical capabilities through structured guidance and real projects.
//             </p>
//           </div>

//           {/* Image */}
//           <div className="relative w-full h-64 md:h-80">
//             <Image
//               src="/images/banners/work-experience.jpg" // 🔁 Replace with actual image path
//               alt="Work Experience Banner"
//               fill
//               className="object-contain md:object-cover rounded-lg"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       {/* 🗓️ Program Overview */}
//       <section className="py-12 px-6 max-w-6xl mx-auto space-y-8">
//         <h2 className="text-3xl font-bold text-gray-900">6-Month Work Experience Program</h2>

//         <div className="grid gap-10">
//           {[
//             {
//               month: '📅 Month 1 & 2: Training Phase',
//               objective: 'Equip participants with the necessary technical skills and knowledge.',
//               items: [
//                 'Technical Skill Development',
//                 'Workshops & Lectures',
//                 'Soft Skills Development'
//               ]
//             },
//             {
//               month: '🚀 Month 3: Project Onboarding',
//               objective: 'Transition from training to real-world project work.',
//               items: [
//                 'Project Introduction',
//                 'Technology Stack Selection',
//                 'Team Meetings & Planning'
//               ]
//             },
//             {
//               month: '🔧 Month 4: Project Development',
//               objective: 'Contribute to core functionality of the project.',
//               items: [
//                 'Core Development',
//                 'Version Control (Git)',
//                 'Cross-Team Collaboration'
//               ]
//             },
//             {
//               month: '🔍 Month 5: Development & Testing',
//               objective: 'Finalize code and conduct complete testing.',
//               items: [
//                 'Code Optimization & Cleanup',
//                 'Testing & Debugging',
//                 'Mentor Feedback Sessions'
//               ]
//             },
//             {
//               month: '🚀 Month 6: Deployment & Enhancements',
//               objective: 'Deploy and maintain your project in a live environment.',
//               items: [
//                 'Deployment to Production',
//                 'Monitoring & Bug Fixes',
//                 'Post-deployment Improvements'
//               ]
//             }
//           ].map((phase, i) => (
//             <div key={i}>
//               <h3 className="text-xl font-semibold text-blue-700">{phase.month}</h3>
//               <p className="text-gray-700 mb-2">{phase.objective}</p>
//               <ul className="list-disc pl-6 text-gray-600 space-y-1">
//                 {phase.items.map((item, j) => (
//                   <li key={j}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🎁 Benefits */}
//       <section className="py-12 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold mb-4 text-gray-900">💼 Program Benefits</h2>
//           <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700">
//             <li>Hands-on Experience with real-world projects</li>
//             <li>Mentorship from seasoned professionals</li>
//             <li>Networking with industry experts and peers</li>
//             <li>3 Months Payroll from Tinitiate</li>
//             <li>Certification upon successful completion</li>
//           </ul>
//         </div>
//       </section>

//       {/* 💳 Fee Structure */}
//       <section className="py-12 px-6 max-w-6xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4 text-gray-900">💳 Program Fee</h2>
//         <p className="text-gray-700 mb-2">
//           The fee covers:
//         </p>
//         <ul className="list-disc pl-6 text-gray-600 space-y-1">
//           <li>Technical and soft skills training during Month 1 & 2</li>
//           <li>All project-related resources</li>
//           <li>Alumni access & job placement assistance</li>
//         </ul>
//       </section>
//     </main>
//   )
// }









'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function WorkExperienceProgramPageV2() {
  return (
    <main className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">Work Experience Training Program</h1>
            <p className="text-lg opacity-90">
              Build career-ready IT skills through real projects, mentorship, and hands-on guidance—remote or onsite.
            </p>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/banners/work-experience.jpg"
              alt="Work Experience Banner"
              width={600}
              height={400}
              loading="lazy"  // <-- lazy load
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* Program Intro & Details */}
<section className="py-16 px-6 max-w-6xl mx-auto space-y-16">
  {/* About the Program */}
  <div className="bg-white p-8 rounded-xl shadow-md grid md:grid-cols-2 gap-6 items-center">
    <div>
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">About the Program</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The TINITIATE Work Experience Program is a structured 5-month training and project-based journey designed to equip aspiring tech professionals with industry-ready skills in:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
        <li>Database Management</li>
        <li>Middleware Technologies</li>
        <li>UI/UX Design</li>
      </ul>
      <p className="text-gray-700 leading-relaxed">
        Participants will gain hands-on experience by working on real-world projects, guided by experienced mentors from the industry.
      </p>
    </div>
    <div>
      <img src="/images/work-experience-program.jpg" 
      alt="Work Experience Program" 
      loading="lazy"  // <-- lazy load
      className="rounded-lg shadow-md w-full object-cover" />
    </div>
  </div>

 {/* Why This Program */}

  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-12">
      Why This Program?
    </h2>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { title: "Industry-Aligned Training", desc: "Learn and apply skills that top companies demand." },
        { title: "Hands-on Project Work", desc: "Gain experience in real-world projects that enhance your portfolio." },
        { title: "Expert Mentorship", desc: "Guidance from professionals in Database, Middleware, and UI/UX." },
        { title: "Hiring Pathway", desc: "Stand out to recruiters with practical experience and skills." },
        { title: "Onsite & Remote Options", desc: "Participate from anywhere or join us in person." },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition transform hover:scale-[1.02]"
        >
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Who Should Join (Enhanced) */}
<section className="bg-white py-10 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-12">
      Who Should Join?
    </h2>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
      {[
        {
          title: "For Companies",
          intro: "Why hire from our program?",
          items: [
            "Pre-Vetted, Job-Ready Candidates – Ready to contribute from Day 1.",
            "Domain-Specific Skills – Expertise in Database, Middleware, and UI/UX.",
            "Cost-Effective Hiring – Reduce onboarding & training costs.",
          ],
        },
        {
          title: "For Students / Individuals",
          intro: "Why opt for the 6-month Work Experience Program (Fee-based)?",
          items: [
            "Corporate Projects",
            "Offshore-Onshore Working Model",
            "Stable and Safe, Long-Term Job-Oriented Courses",
          ],
        },
        {
          title: "For Parents",
          intro: "Why opt for the 6-month Work Experience Program (Fee-based)?",
          items: [
            "Discipline (9 to 5 Job)",
            "Mandatory Attendance",
            "Corporate Projects",
            "Offshore-Onshore Working Model",
            "Stable and Safe, Long-Term Job-Oriented Courses",
          ],
        },
        {
          title: "For Colleges",
          intro: "Why collaborate with our program?",
          items: [
            "Final Year Project Support",
            "Training & Certifications",
            "Experience Certificate for Students",
            "Placement Collaboration",
            "Convincing Management with Structured Program",
          ],
        },
      ].map((group, index) => (
        <div
          key={index}
          className="bg-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-[1.02] border border-indigo-100"
        >
          <h3 className="text-2xl font-bold text-indigo-700 mb-2">{group.title}</h3>
          <p className="text-gray-700 mb-4">{group.intro}</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm">
            {group.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


   {/* Training Timeline */}
  {/* Training Timeline */}
<section className="py-6 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">

    {/* 📷 Image: Work Experience Timeline */}
    <div className="mb-8 text-center">
      <img
        src="/images/Work-experience-timeline.jpg"
        alt="Work Experience Timeline"
        loading="lazy"  // <-- lazy load
        className="rounded-xl shadow-lg mx-auto max-w-full"
      />
    </div>

    {/* Heading */}
    <h2 className="text-5xl font-bold text-indigo-600 mb-8 text-center">
      Training Timeline
    </h2>

    {/* Timeline Items */}
    <div className="space-y-6">
 {[
        {
          title: "Month 1: Beginner Training",
          desc: "Foundation-level training covering basic technical skills, tools, and workflow essentials."
        },
        {
          title: "Month 2: Intermediate Training",
          desc: "Deeper focus on core concepts, intermediate project work, and structured assignments."
        },
        {
          title: "Month 3: Advanced Training & Project Onboarding",
          desc: "Hands-on exposure to advanced tools, live project onboarding, and mentorship sessions."
        },
        {
          title: "Month 4: Corporate Project Kickoff",
          desc: "Join a real project squad, set up environments, understand requirements, plan sprints, and start feature development with daily standups."
        },
        {
          title: "Month 5: Iteration & Delivery",
          desc: "Ship features in sprint cycles, write tests, handle code reviews, track issues, and present stakeholder demos with clear communication."
        },
        {
          title: "Month 6: Placement Prep & Handover",
          desc: "Polish resume/LinkedIn, mock interviews, finalize project documentation, handover, and receive experience certificate & stipend (if applicable)."
        }
      ].map((phase, idx) => (
        <div
          key={idx}
          className="flex items-start bg-white p-4 rounded-lg shadow"
        >
          <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center bg-indigo-500 text-white rounded-full font-bold">
            {idx + 1}
          </div>
          <div className="ml-4">
            <p className="text-gray-900 font-semibold">{phase.title}</p>
            <p className="text-gray-700 text-sm mt-1">{phase.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* 📷 Image: HR Onboarding Roadmap */}
 {/* <section className="py-15 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
   
    <img
      src="/images/HR-Onboarding-Roadmap.jpg"
      alt="HR Onboarding Roadmap"
      className="rounded-xl shadow-lg mx-auto max-w-full"
    />
  </div>
</section> */}

{/* Program Objectives */}
<section className="py-15 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
  <div className="bg-white p-8 rounded-xl shadow-md">
    <h2 className="text-2xl font-bold mb-4 text-indigo-600">Technical Objectives</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>GitHub Code Contributions</li>
      <li>LinkedIn Validations & Reviews</li>
      <li>Design, Development, Deployment</li>
      <li>Peer & Mentor Feedback</li>
    </ul>
  </div>
  <div className="bg-white p-8 rounded-xl shadow-md">
    <h2 className="text-2xl font-bold mb-4 text-indigo-600">Soft Skill Outcomes</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Workplace Communication</li>
      <li>Agile & Team Collaboration</li>
      <li>Client Interaction Practice</li>
      <li>Self-paced Speaking Skills</li>
    </ul>
  </div>
</section>


{/* Join & Fee CTA */}
<section className="py-16 px-6 bg-gradient-to-tr from-blue-900 to-blue-700 text-white text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-4">How to Join?</h2>
    <p className="text-lg mb-8">
      Apply online with a small fee covering your training, resources, certification, and project facilitation.
    </p>
    <a
      href="/request-callback?service=work-experience"
      className="inline-block px-8 py-3 rounded-full bg-white text-indigo-800 hover:bg-gray-100 font-semibold shadow-lg transition duration-300"
    >
      Enquire Now
    </a>
  </div>
</section>

    </main>
  )
}