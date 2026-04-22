// // "use client"

// // import Image from 'next/image'
// // import Link from 'next/link'
// // import { Clock } from 'lucide-react'

// // const beginnerCourses = [
// //   {
// //     title: 'Python Language Course',
// //     duration: '1 Month',
// //     image: '/images/courses/python.png',
// //     description: 'Master the basics of Python for scripting, automation, and foundational backend development.',
// //     href: '/courses/python-basics',
// //   },
// //   {
// //     title: 'Java Language Course',
// //     duration: '1 Month',
// //     image: '/images/courses/java.png',
// //     description: 'Object-oriented programming with Java—ideal for Android development and backend systems.',
// //     href: '/courses/java-basics',
// //   },
// //   {
// //     title: 'SQL Database Course',
// //     duration: '3 Weeks',
// //     image: '/images/courses/sql.png',
// //     description: 'Understand data modeling, querying, and reporting using relational databases and SQL.',
// //     href: '/courses/sql-basics',
// //   },
// //   {
// //     title: 'JavaScript Course',
// //     duration: '1 Month',
// //     image: '/images/courses/js.png',
// //     description: 'Core scripting for the web—learn variables, DOM, events, and client-side interactions.',
// //     href: '/courses/javascript-basics',
// //   },
// //   {
// //     title: 'Data Structures & Algorithms Course',
// //     duration: '1.5 Months',
// //     image: '/images/courses/dsa.png',
// //     description: 'Crucial problem-solving patterns used in software engineering interviews and efficient coding.',
// //     href: '/courses/data-structures',
// //   },
// //   {
// //     title: 'PHP Language Course',
// //     duration: '3 Weeks',
// //     image: '/images/courses/php.png',
// //     description: 'Backend scripting with PHP for dynamic websites and CMS platforms like WordPress.',
// //     href: '/courses/php-basics',
// //   },
// //   {
// //     title: 'C Language Course',
// //     duration: '3 Weeks',
// //     image: '/images/courses/c.png',
// //     description: 'Foundational programming concepts in C—perfect for embedded systems and OS fundamentals.',
// //     href: '/courses/c-language',
// //   },
// //   {
// //     title: 'C++ Language Course',
// //     duration: '1 Month',
// //     image: '/images/courses/cpp.png',
// //     description: 'Object-oriented programming with C++—commonly used in game development and system software.',
// //     href: '/courses/cpp-basics',
// //   },
// //   {
// //     title: 'C# Language Course',
// //     duration: '1 Month',
// //     image: '/images/courses/csharp.png',
// //     description: 'C# with .NET—used in enterprise development, desktop apps, and game engines like Unity.',
// //     href: '/courses/csharp-basics',
// //   },
// //   {
// //     title: 'UNIX OS Course',
// //     duration: '2 Weeks',
// //     image: '/images/courses/unix.png',
// //     description: 'Command-line mastery, shell scripting, and working with file systems in UNIX/Linux.',
// //     href: '/courses/unix-basics',
// //   },
// // ]

// // const advancedCourses = [
// //   {
// //     title: 'Python AWS Developer Program',
// //     duration: '2 Months',
// //     image: '/images/courses/python-aws.png',
// //     description: 'End-to-end cloud development with Python and AWS services, focusing on real deployment scenarios.',
// //     href: '/courses/python-aws',
// //   },
// //   {
// //     title: 'Python Django Backend Developer Program',
// //     duration: '2 Months',
// //     image: '/images/courses/django.png',
// //     description: 'Learn backend web development using Django framework with APIs, models, and auth systems.',
// //     href: '/courses/django-backend',
// //   },
// //   {
// //     title: 'Power BI Developer Program',
// //     duration: '1.5 Months',
// //     image: '/images/courses/powerbi.png',
// //     description: 'Create powerful dashboards, DAX queries, and business intelligence workflows using Power BI.',
// //     href: '/courses/powerbi',
// //   },
// //   {
// //     title: 'Azure SQL Server Developer Program',
// //     duration: '1.5 Months',
// //     image: '/images/courses/azure-sql.png',
// //     description: 'Master T-SQL, stored procedures, performance tuning, and deployment on Azure SQL Database.',
// //     href: '/courses/azure-sql',
// //   },
// //   {
// //     title: 'Oracle PLSQL Developer Program',
// //     duration: '1.5 Months',
// //     image: '/images/courses/plsql.png',
// //     description: 'Develop secure and scalable applications using Oracle PL/SQL blocks, triggers, and procedures.',
// //     href: '/courses/plsql',
// //   },
// //   {
// //     title: 'AWS DevOps Program',
// //     duration: '2.5 Months',
// //     image: '/images/courses/aws-devops.png',
// //     description: 'CI/CD pipelines, Docker, Kubernetes, and AWS services for efficient software delivery.',
// //     href: '/courses/aws-devops',
// //   },
// //   {
// //     title: 'Snowflake Platform Program',
// //     duration: '1.5 Months',
// //     image: '/images/courses/snowflake.png',
// //     description: 'Cloud data warehouse design and performance optimization using Snowflake SQL and pipelines.',
// //     href: '/courses/snowflake',
// //   },
// // ]

// // function CourseGrid({ title, courses }) {
// //   return (
// //     <section className="py-16 px-6 bg-white">
// //     <div className="max-w-7xl mx-auto">
// //       <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
// //         {title}
// //       </h2>
// //       <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
// //     {beginnerCourses.map((prog) => (
// //       <div
// //         key={prog.title}
// //         className="rounded-xl shadow-sm bg-white overflow-hidden flex flex-col transition-all hover:shadow-md"
// //       >
// //         {/* Smaller, full-cover image */}
// //         <div className="relative w-2/3 h-40">
// //           <Image
// //             src={prog.image}
// //             alt={prog.title}
// //             fill
// //             className="w-auto"
// //           />
// //         </div>

// //         <div className="p-6 flex flex-col justify-between grow">
// //           <div className="mb-6">
// //             <h3 className="text-lg text-gray-900 font-semibold mb-2">
// //               {prog.title}
// //             </h3>
// //             {/* <p className="text-sm text-gray-600 mb-2">
// //               Duration: {prog.duration}
// //             </p> */}
// //              <p className="text-sm text-gray-700 mb-2">
// //               {prog.description}
// //             </p>
// //           </div>
// //           <Link
// //             href={`/courses/${prog.title.toLowerCase().replace(/\s+/g, '-')}`}
// //             className="inline-block px-4 py-2 bg-blue-400 text-white text-sm rounded-lg text-center hover:bg-blue-600 transition"
// //           >
// //             View Course
// //           </Link>
// //         </div>
// //       </div>
// //     ))}
// //   </div>
// //     </div>
// //   </section>
// // )
// // }

// // export default function ITTrainingPage() {
// // return (
// //   <main className="text-gray-800">
// //     <section className="bg-gradient-to-br from-blue-100 to-white py-20 text-center px-6">
// //       <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
// //         IT Training Programs
// //       </h1>
// //       <p className="max-w-2xl mx-auto text-lg text-gray-700">
// //         Explore our comprehensive beginner and advanced IT courses, crafted to build strong foundations and industry-ready skills.
// //       </p>
// //     </section>
// //     <CourseGrid title="Beginner IT Training Programs" courses={beginnerCourses} />
// //     <CourseGrid title="Advanced IT Training Programs" courses={advancedCourses} />
// //   </main>
// // )
// // }











// "use client"

// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// const beginnerCourses = [
//   {
//     title: 'Python Language Course',
//     duration: '1 Month',
//     image: '/images/courses/python.png',
//     description: 'Master the basics of Python for scripting, automation, and foundational backend development.',
//     href: '/courses/python-language-course',
//   },
//   {
//     title: 'Java Language Course',
//     duration: '1 Month',
//     image: '/images/courses/java.png',
//     description: 'Object-oriented programming with Java—ideal for Android development and backend systems.',
//     href: '/courses/java-language-course',
//   },
//   {
//     title: 'SQL Database Course',
//     duration: '3 Weeks',
//     image: '/images/courses/sql.png',
//     description: 'Understand data modeling, querying, and reporting using relational databases and SQL.',
//     href: '/courses/sql-language-course',
//   },
//   {
//     title: 'JavaScript Course',
//     duration: '1 Month',
//     image: '/images/courses/js.png',
//     description: 'Core scripting for the web—learn variables, DOM, events, and client-side interactions.',
//     href: '/courses/javascript-language-course',
//   },

// ]


// const advancedCourses = [
//   {
//     title: 'Python AWS Developer Program',
//     duration: '2 Months',
//     image: '/images/courses/python-aws.png',
//     description: 'End-to-end cloud development with Python and AWS services, focusing on real deployment scenarios.',
//     href: '/courses/Python-AWS-Developer-Program',
//   },
//   {
//     title: 'Python Django Backend Developer Program',
//     duration: '2 Months',
//     image: '/images/courses/django.png',
//     description: 'Learn backend web development using Django framework with APIs, models, and auth systems.',
//     href: '/courses/python-django-backend-developer',
//   },
//   {
//     title: 'Power BI Developer Program',
//     duration: '2/Months',
//     image: '/images/courses/powerbi.png',
//     description: 'Create powerful dashboards, DAX queries, and business intelligence workflows using Power BI.',
//     href: '/courses/power-bi-developer-program',
//   },
//   {
//     title: 'Azure SQL Server Developer Program',
//     duration: '3 Months',
//     image: '/images/courses/azure-sql.png',
//     description: 'Master T-SQL, stored procedures, performance tuning, and deployment on Azure SQL Database.',
//     href: '/courses/azure-sql-server-developer',
//   },
//   {
//     title: 'Oracle PLSQL Developer Program',
//     duration: '2 Months',
//     image: '/images/courses/plsql.png',
//     description: 'Develop secure and scalable applications using Oracle PL/SQL blocks, triggers, and procedures.',
//     href: '/courses/oracle-plsql-developer-program',
//   },
//   {
//     title: 'AWS DevOps Program',
//     duration: '2.5 Months',
//     image: '/images/courses/aws-devops.png',
//     description: 'CI/CD pipelines, Docker, Kubernetes, and AWS services for efficient software delivery.',
//     href: '/courses/aws-devops-program',
//   },
//   {
//     title: 'Snowflake Platform Program',
//     duration: '1.5 Months',
//     image: '/images/courses/snowflake.png',
//     description: 'Cloud data warehouse design and performance optimization using Snowflake SQL and pipelines.',
//     href: '/courses/snowflake-platform-program',
//   },
// ]

// const optServices = [
//   'IT Training',
//   'Interview Screening',
//   'Resume Enhancement',
//   'Interview Preparation',
//   'IT Development Services',
//   'IT Project Support',
// ]

// const optReasons = [
//   'Comprehensive Curriculum',
//   'Industry-Experienced Instructors',
//   'Hands-on Learning',
//   'Customized Training Solutions',
//   'Up-to-Date Content',
//   'Practical Application',
//   'Networking Opportunities',
//   'Continuous Support',
// ]

// function CourseGrid({ courses }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//       {courses.map((course) => (
//         <div
//           key={course.title}
//           className="rounded-xl shadow bg-white flex flex-col transition hover:shadow-md"
//         >
//           <div className="relative h-40 w-full">
//             <Image
//               src={course.image}
//               alt={course.title}
//               fill
//               className="object-contain p-4"
//             />
//           </div>
//           <div className="p-6 flex flex-col justify-between grow">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
//               <p className="text-sm text-gray-600">{course.description}</p>
//             </div>
//             <Link
//               href={course.href}
//               className="mt-4 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition"
//             >
//               View Course
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default function ITTrainingPage() {
//   const [activeTab, setActiveTab] = useState('Beginner')

//   const handleTabClick = (tab) => setActiveTab(tab)

//   return (
//     <main className="text-gray-800">
//       {/* <section className="bg-gradient-to-br from-blue-100 to-white py-20 text-center px-6">
//         <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
//           IT Training Programs
//         </h1>
//         <p className="max-w-2xl mx-auto text-lg text-gray-700">
//           Explore our beginner and advanced IT courses to boost your tech career.
//           Kickstart and propel your IT career with team TINITIATE
//         </p>
//       </section> */}


//            {/* Hero Section */}
//       {/* <section className="relative px-4 py-16 sm:py-24 text-center overflow-hidden">
          
          
//           Background Image Container (with height)
//           <div className="absolute inset-0 w-full h-full ">
//             <Image
//               src="/images/banners/it-training.jpg" // Replace with your actual image
//               alt="Remote Consulting Background"
//               fill
//               className="object-cover"
//               priority
//               sizes="100vw"
//             />
//             Optional dark overlay to enhance text contrast
//             <div className="absolute inset-0 bg-black/60" />
//           </div>
      
//           Foreground Text Content
//           <div className="relative z-10 max-w-4xl mx-auto">
//             <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
//           IT Training Programs
//             </h1>
//             <p className="text-base sm:text-lg text-white mb-6">
//              Kickstart and propel your IT career with team TINITIATE. Explore our beginner and advanced IT courses to boost your tech career.
             
//             </p>
//           </div>
//         </section> */}




//         <section className="relative bg-black py-20 sm:py-10 md:py-15 ">
//   <div className="max-w-7xl sm:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
//     {/* Text Section */}
//     <div className="text-center md:text-left">
//       <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
//      IT Training Programs
//       </h1>
//       <p className="text-base sm:text-lg text-white mb-6 max-w-xl">
//         Kickstart and propel your IT career with team TINITIATE. Explore our beginner and advanced IT courses to boost your tech career.
//       </p>
//     </div>

//     {/* Image Section */}
//     <div className="relative w-full h-64 p-2 sm:h-80 md:h-[22rem] rounded-lg overflow-hidden shadow-lg">
//       <Image
//         src="/images/banners/it-training-2.jpg" // Replace with a real high-quality hero image
//         alt="IT Development Solutions"
//         fill
//         className="object-cover"
//         sizes="(max-width: 768px) 100vw, 50vw"
//         priority
//       />
//     </div>
//   </div>
//   </section>

   
//       {/* Tabs */}
//       <div className="bg-white py-10 ">
//         <div className="flex justify-center gap-8">
//           {['Beginner', 'Advanced', 'OPT'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => handleTabClick(tab)}
//               className={`text-sm font-medium px-4 py-2 rounded-full transition ${
//                 activeTab === tab
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
//               }`}
//             >
//               {tab} 
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Grid or OPT Section */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           {activeTab !== 'OPT' ? (
//             <>
//               <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
//                 {activeTab} IT Training Courses
//               </h2>
//               <CourseGrid courses={activeTab === 'Beginner' ? beginnerCourses : advancedCourses} />
//             </>
//           ) : (
//             <>
//               <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
//                 OPT Student Training Services
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-16">
//                 {optServices.map((service, idx) => (
//                   <div key={idx} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md">
//                     <p className="text-blue-800 font-semibold">{service}</p>
//                   </div>
//                 ))}
//               </div>
//               <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
//                 Discover Your IT Career Path
//               </h3>
//               <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6">
//                 In today&apos;s rapidly evolving technology landscape, staying up-to-date with the latest IT skills and knowledge is crucial for professional growth and success. Our IT training services are designed to equip individuals and organizations with the necessary expertise to thrive in the digital age. Here are the compelling reasons why you need our IT training services:
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
//                 {optReasons.map((reason, idx) => (
//                   <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md">
//                     <p className="text-gray-800 font-medium">{reason}</p>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </section>
//     </main>
//   )
// }


import { Suspense } from 'react'

import ITTrainingPage  from './ITTrainingClient.js'

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading IT Training...</div>}>
      <ITTrainingPage />
    </Suspense>
  )
}








