// // // tinitiate_com-main/src/app/why-tinitiate/parents-nonstem/page.js
// // "use client";
// // import Image from "next/image";

// // export const metadata = {
// //   title: "Parents (Non-STEM) — Why TINITIATE",
// //   description:
// //     "A brochure-style guide for parents of non-STEM students: how TINITIATE makes IT careers possible with mentored, hands-on learning.",
// // };

// // const Content = {
// //   kicker: "TINITIATE • Parents’ Guide",
// //   title: "For Parents — Non-STEM Background",
// //   sub: "IT careers are possible without a CS degree. We make the journey structured, mentored, and practical.",
// //   intro:
// //     "Your child does not need to be from a STEM background to start a successful career in technology. With the right foundation, guided practice, and mentorship, non-STEM students can learn modern tools, build real projects, and become job-ready for roles in software, data, cloud, and automation.",
// //   whoIsThisFor: [
// //     "Students from Commerce, Arts, Management, Life-Sciences, or any non-CS background",
// //     "Graduates preparing for job-readiness with limited programming exposure",
// //     "Parents seeking structured, safe, and supportive online learning",
// //   ],
// //   whyItWorks: [
// //     "Start at zero — we teach fundamentals, assuming no coding background.",
// //     "Weekly milestones — concepts → guided exercises → mini-projects.",
// //     "Recorded classes — every session available for revision.",
// //     "1-to-1 mentorship — personal doubt resolution and feedback.",
// //     "Real-world capstones — portfolio projects mapped to job roles.",
// //   ],
// //   outcomes: [
// //     "Project portfolio on Git/GitHub to showcase real work",
// //     "Confidence with company tools (VS Code, Git, SQL, Cloud basics)",
// //     "Interview readiness: problem-solving, practical tasks, communication",
// //   ],
// //   safety: [
// //     "Recorded sessions; parents can review any time",
// //     "Structured timetable with reasonable screen time",
// //     "Professional code of conduct; moderated student communities",
// //   ],
// //   myths: [
// //     { myth: "You must be great at math to code.",
// //       fact: "Logical thinking grows with practice; we teach step-by-step with examples." },
// //     { myth: "Only CS degrees get IT jobs.",
// //       fact: "Skills + portfolio matter. Many roles need problem-solving and tool fluency, not a specific degree." },
// //     { myth: "Online learning isn’t disciplined.",
// //       fact: "We follow a fixed weekly plan, track progress, and mentor 1-to-1." },
// //   ],
// //   faqs: [
// //     { q: "My child is not from STEM. Can they cope?",
// //       a: "Yes. We begin from fundamentals, use analogies, and practice in small steps. Early modules require zero prior coding." },
// //     { q: "How much time per week is needed?",
// //       a: "Typically 6–8 hours (live + practice). We offer weekday/weekend options and exam-friendly pacing." },
// //     { q: "Do you give certificates?",
// //       a: "Yes, upon completion. More importantly, your child graduates with a project portfolio to show employers." },
// //     { q: "What laptop/configuration is required?",
// //       a: "Any modern laptop with 8GB RAM preferred. We share lightweight setup steps and cloud alternatives if needed." },
// //     { q: "Is this safe and supervised?",
// //       a: "Live sessions are recorded, communities are moderated, and parents can request progress updates." },
// //     { q: "Will you help with placements?",
// //       a: "We focus on job readiness: portfolio, mock interviews, referrals where possible, and guidance on applications." },
// //   ],
// //   cta: { label: "Talk to a Mentor", href: "/contact" },
// // };

// // export default function ParentsNonStemPage() {
// //   return (
// //     <main
// //       className={[
// //         "min-h-screen text-slate-100",
// //         // Full-bleed multi-layer gradient base (no white anywhere)
// //         "bg-[radial-gradient(1200px_600px_at_10%_0%,#0b1220,transparent_60%)]",
// //         "bg-slate-950",
// //       ].join(" ")}
// //     >
// //       {/* Global illusion layers (ink splash + grid) */}
// //       <div className="pointer-events-none fixed inset-0 -z-50">
// //         {/* Conic/radial blobs */}
// //         <div className="absolute -top-32 -right-24 h-[42rem] w-[42rem] rounded-full opacity-60 blur-3xl bg-[conic-gradient(at_top_left,_#1e3a8a_5%,_#0ea5e9_30%,_#1d4ed8_55%,_#0ea5e9_80%)]" />
// //         <div className="absolute top-64 -left-20 h-[30rem] w-[30rem] rounded-full opacity-50 blur-2xl bg-[radial-gradient(ellipse_at_bottom,_#0ea5e955,_transparent_60%)]" />
// //         {/* Subtle grid pattern overlay */}
// //         <div className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:28px_28px]" />
// //       </div>

// //       {/* HERO — brochure split: copy + framed illustration */}
// //       <section className="relative px-6 pt-16 pb-10">
// //         <div className="mx-auto max-w-6xl">
// //           <div className="grid items-center gap-8 md:grid-cols-2">
// //             {/* Left: glass copy block with folded corner */}
// //             <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-8 md:p-10 shadow-[0_10px_50px_-10px_rgba(2,6,23,0.55)]">
// //               {/* Folded corner */}
// //               <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
// //                 <div className="absolute right-[-24px] top-[-24px] h-20 w-20 rotate-45 bg-gradient-to-br from-sky-400/40 to-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]" />
// //               </div>

// //               <span className="inline-block rounded-full bg-sky-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-sky-300">
// //                 {Content.kicker}
// //               </span>
// //               <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
// //                 {Content.title}
// //               </h1>
// //               <p className="mt-2 text-lg text-slate-200/90">{Content.sub}</p>

// //               {/* Drop-cap intro on dark */}
// //               <p className="mt-6 text-[1.06rem] leading-7 text-slate-200/90">
// //                 <span className="float-left mr-2 inline-block text-6xl font-serif leading-[0.8] text-sky-300">Y</span>
// //                 {Content.intro}
// //               </p>

// //               {/* Ribbon CTA */}
// //               <a
// //                 href={Content.cta.href}
// //                 className="group mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-sky-500 to-indigo-500 px-5 py-2.5 font-semibold text-white shadow hover:from-sky-600 hover:to-indigo-600"
// //               >
// //                 {Content.cta.label}
// //                 <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none">
// //                   <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
// //                 </svg>
// //               </a>
// //             </div>

// //             {/* Right: framed illustration (glass frame, slight tilt) */}
// //             <div className="relative">
// //               <div className="relative mx-auto w-full max-w-[520px] rotate-1 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
// //                 <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/10">
// //                   <Image
// //                     src="/images/Illustration/parents_1.svg"  // NOTE: path is case-sensitive
// //                     alt="Parents encouraging non-STEM student in remote learning"
// //                     fill
// //                     className="object-contain"
// //                     priority
// //                     sizes="(max-width: 768px) 100vw, 520px"
// //                   />
// //                 </div>
// //               </div>
// //               {/* Soft shadow under the frame */}
// //               <div className="pointer-events-none absolute inset-0 -z-10 translate-y-4 blur-2xl opacity-40 bg-[radial-gradient(30rem_12rem_at_50%_80%,#0ea5e9,transparent_60%)]" />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* MAIN GRID — all glass/gradient, no white gaps */}
// //       <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-20 md:grid-cols-12">
// //         {/* Sticky rail (glass) */}
// //         <aside className="md:col-span-3">
// //           <div className="sticky top-6 space-y-4">
// //             <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
// //               <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">In this page</div>
// //               <ul className="mt-3 space-y-2 text-sm">
// //                 <li><a className="hover:text-sky-300" href="#who">Who is this for</a></li>
// //                 <li><a className="hover:text-sky-300" href="#why">Why it works</a></li>
// //                 <li><a className="hover:text-sky-300" href="#outcomes">Outcomes</a></li>
// //                 <li><a className="hover:text-sky-300" href="#safety">Safety</a></li>
// //                 <li><a className="hover:text-sky-300" href="#myths">Myths vs Facts</a></li>
// //                 <li><a className="hover:text-sky-300" href="#faqs">FAQs</a></li>
// //               </ul>
// //             </div>
// //             <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
// //               <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">Quick action</div>
// //               <a
// //                 href={Content.cta.href}
// //                 className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-sky-500/90 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
// //               >
// //                 {Content.cta.label}
// //               </a>
// //             </div>
// //           </div>
// //         </aside>

// //         {/* Article */}
// //         <article className="md:col-span-9 space-y-10">
// //           {/* Who is this for */}
// //           <section id="who" className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             <h2 className="text-2xl font-bold">Who is this for?</h2>
// //             <ul className="mt-4 grid gap-3 sm:grid-cols-2">
// //               {Content.whoIsThisFor.map((t, i) => (
// //                 <li key={i} className="flex gap-3 text-slate-200/90">
// //                   <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[11px] font-bold text-white">✓</span>
// //                   <span>{t}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </section>

// //           {/* Why it works (ribbon number badges + underline sweep) */}
// //           <section id="why" className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             <h2 className="text-2xl font-bold">Why it works</h2>
// //             <div className="mt-4 grid gap-4 md:grid-cols-2">
// //               {Content.whyItWorks.map((t, i) => (
// //                 <div key={i} className="relative rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
// //                   <div className="absolute -top-3 left-4 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 px-3 py-1 text-xs font-bold text-white shadow">
// //                     {i + 1}
// //                   </div>
// //                   <p className="mt-2 text-slate-200/90">{t}</p>
// //                   <div className="mt-3 h-[2px] w-12 bg-gradient-to-r from-sky-400 to-indigo-400" />
// //                 </div>
// //               ))}
// //             </div>
// //           </section>

// //           {/* Outcomes */}
// //           <section id="outcomes" className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             <h2 className="text-2xl font-bold">What outcomes can you expect?</h2>
// //             <ul className="mt-4 space-y-3">
// //               {Content.outcomes.map((t, i) => (
// //                 <li key={i} className="flex gap-3 text-slate-200/90">
// //                   <svg className="mt-1 h-5 w-5 text-sky-400" viewBox="0 0 24 24" aria-hidden="true">
// //                     <path d="M20 7L10 17l-6-6" fill="none" stroke="currentColor" strokeWidth="2" />
// //                   </svg>
// //                   <span>{t}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </section>

// //           {/* Safety */}
// //           <section id="safety" className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             <h2 className="text-2xl font-bold">Safety & Supervision</h2>
// //             <div className="mt-4 grid gap-4 sm:grid-cols-3">
// //               {Content.safety.map((t, i) => (
// //                 <div key={i} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
// //                   <div className="flex items-start gap-3">
// //                     <div className="h-9 w-9 rounded-xl bg-sky-500/15 text-sky-300 flex items-center justify-center">
// //                       {i === 0 && (
// //                         <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
// //                           <path d="M12 3l8 4v5a9 9 0 11-16 0V7l8-4z" fill="none" stroke="currentColor" strokeWidth="2" />
// //                         </svg>
// //                       )}
// //                       {i === 1 && (
// //                         <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
// //                           <path d="M3 12s4-7 9-7 9 7 9 7-4 7-9 7-9-7-9-7z" fill="none" stroke="currentColor" strokeWidth="2" />
// //                           <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
// //                         </svg>
// //                       )}
// //                       {i === 2 && (
// //                         <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
// //                           <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
// //                           <circle cx="12" cy="12" r="3" fill="currentColor" />
// //                         </svg>
// //                       )}
// //                     </div>
// //                     <p className="text-sm text-slate-200/90">{t}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>

// //           {/* Myths vs Facts */}
// //           <section id="myths" className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             <h2 className="text-2xl font-bold">Myths vs Facts</h2>
// //             <div className="mt-4 grid gap-4 md:grid-cols-3">
// //               {Content.myths.map((m, i) => (
// //                 <div key={i} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
// //                   <div className="text-[11px] font-semibold uppercase tracking-wider text-rose-300">Myth</div>
// //                   <p className="mt-1 text-slate-200/90">{m.myth}</p>
// //                   <div className="mt-3 h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
// //                   <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">Fact</div>
// //                   <p className="mt-1 font-medium text-slate-100">{m.fact}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>

// //           {/* FAQs (details/summary) + floating sticker illustration */}
// //           <section id="faqs" className="relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             {/* Floating sticker for brochure feel */}
// //             <div className="pointer-events-none absolute -top-6 -right-4 hidden md:block rotate-3">
// //               <div className="rounded-xl bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur-md">
// //                 <div className="relative h-16 w-24">
// //                   <Image
// //                     src="/images/Illustration/parents_1.svg"
// //                     alt="Parents sticker"
// //                     fill
// //                     className="object-contain"
// //                     sizes="96px"
// //                     priority={false}
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             <h2 className="text-2xl font-bold">Common Questions from Parents</h2>
// //             <div className="mt-4 divide-y divide-white/10">
// //               {Content.faqs.map((f, i) => (
// //                 <details key={i} className="group">
// //                   <summary className="flex cursor-pointer list-none items-center justify-between py-3">
// //                     <span className="font-medium text-slate-100">{f.q}</span>
// //                     <svg
// //                       className="h-4 w-4 text-slate-300 transition-transform group-open:rotate-180"
// //                       viewBox="0 0 24 24"
// //                       fill="none"
// //                     >
// //                       <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
// //                     </svg>
// //                   </summary>
// //                   <p className="pb-3 text-slate-200/90">{f.a}</p>
// //                 </details>
// //               ))}
// //             </div>
// //           </section>
// //         </article>
// //       </section>
// //     </main>
// //   );
// // }




















// // // tinitiate_com-main/src/app/why-tinitiate/parents-nonstem/page.js
// // import Image from "next/image";

// // export const metadata = {
// //   title: "Parents (Non-STEM) — Why TINITIATE",
// //   description:
// //     "A brochure-style guide for parents of non-STEM students: how TINITIATE makes IT careers possible with mentored, hands-on learning.",
// // };

// // const Content = {
// //   kicker: "TINITIATE • Parents’ Guide",
// //   title: "For Parents — Non-STEM Background",
// //   sub: "IT careers are possible without a CS degree. We make the journey structured, mentored, and practical.",
// //   intro:
// //     "Your child does not need to be from a STEM background to start a successful career in technology. With the right foundation, guided practice, and mentorship, non-STEM students can learn modern tools, build real projects, and become job-ready for roles in software, data, cloud, and automation.",
// //   whoIsThisFor: [
// //     "Students from Commerce, Arts, Management, Life-Sciences, or any non-CS background",
// //     "Graduates preparing for job-readiness with limited programming exposure",
// //     "Parents seeking structured, safe, and supportive online learning",
// //   ],
// //   whyItWorks: [
// //     "Start at zero — we teach fundamentals, assuming no coding background.",
// //     "Weekly milestones — concepts → guided exercises → mini-projects.",
// //     "Recorded classes — every session available for revision.",
// //     "1-to-1 mentorship — personal doubt resolution and feedback.",
// //     "Real-world capstones — portfolio projects mapped to job roles.",
// //   ],
// //   outcomes: [
// //     "Project portfolio on Git/GitHub to showcase real work",
// //     "Confidence with company tools (VS Code, Git, SQL, Cloud basics)",
// //     "Interview readiness: problem-solving, practical tasks, communication",
// //   ],
// //   safety: [
// //     "Recorded sessions; parents can review any time",
// //     "Structured timetable with reasonable screen time",
// //     "Professional code of conduct; moderated student communities",
// //   ],
// //   myths: [
// //     { myth: "You must be great at math to code.",
// //       fact: "Logical thinking grows with practice; we teach step-by-step with examples." },
// //     { myth: "Only CS degrees get IT jobs.",
// //       fact: "Skills + portfolio matter. Many roles need problem-solving and tool fluency, not a specific degree." },
// //     { myth: "Online learning isn’t disciplined.",
// //       fact: "We follow a fixed weekly plan, track progress, and mentor 1-to-1." },
// //   ],
// //   faqs: [
// //     { q: "My child is not from STEM. Can they cope?",
// //       a: "Yes. We begin from fundamentals, use analogies, and practice in small steps. Early modules require zero prior coding." },
// //     { q: "How much time per week is needed?",
// //       a: "Typically 6–8 hours (live + practice). We offer weekday/weekend options and exam-friendly pacing." },
// //     { q: "Do you give certificates?",
// //       a: "Yes, upon completion. More importantly, your child graduates with a project portfolio to show employers." },
// //     { q: "What laptop/configuration is required?",
// //       a: "Any modern laptop with 8GB RAM preferred. We share lightweight setup steps and cloud alternatives if needed." },
// //     { q: "Is this safe and supervised?",
// //       a: "Live sessions are recorded, communities are moderated, and parents can request progress updates." },
// //     { q: "Will you help with placements?",
// //       a: "We focus on job readiness: portfolio, mock interviews, referrals where possible, and guidance on applications." },
// //   ],
// //   cta: { label: "Talk to a Mentor", href: "/contact" },
// // };

// // export default function ParentsNonStemPage() {
// //   return (
// //     <main
// //       className={[
// //         "min-h-screen text-slate-100",
// //         "bg-[radial-gradient(1200px_600px_at_10%_0%,#0b1220,transparent_60%)]",
// //         "bg-slate-950",
// //       ].join(" ")}
// //     >
// //       {/* Global illusion layers (ink splash + grid) */}
// //       <div className="pointer-events-none fixed inset-0 -z-50">
// //         <div className="absolute -top-32 -right-24 h-[42rem] w-[42rem] rounded-full opacity-60 blur-3xl bg-[conic-gradient(at_top_left,_#1e3a8a_5%,_#0ea5e9_30%,_#1d4ed8_55%,_#0ea5e9_80%)]" />
// //         <div className="absolute top-64 -left-20 h-[30rem] w-[30rem] rounded-full opacity-50 blur-2xl bg-[radial-gradient(ellipse_at_bottom,_#0ea5e955,_transparent_60%)]" />
// //         <div className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:28px_28px]" />
// //       </div>

// //       {/* HERO — brochure split: copy + framed illustration */}
// //       <section className="relative px-6 pt-16 pb-10">
// //         <div className="mx-auto max-w-6xl">
// //           <div className="grid items-center gap-8 md:grid-cols-2">
// //             {/* Left: glass copy block with folded corner */}
// //             <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-8 md:p-10 shadow-[0_10px_50px_-10px_rgba(2,6,23,0.55)]">
// //               <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
// //                 <div className="absolute right-[-24px] top-[-24px] h-20 w-20 rotate-45 bg-gradient-to-br from-sky-400/40 to-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]" />
// //               </div>

// //               <span className="inline-block rounded-full bg-sky-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-sky-300">
// //                 {Content.kicker}
// //               </span>
// //               <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
// //                 {Content.title}
// //               </h1>
// //               <p className="mt-2 text-lg text-slate-200/90">{Content.sub}</p>

// //               <p className="mt-6 text-[1.06rem] leading-7 text-slate-200/90">
// //                 <span className="float-left mr-2 inline-block text-6xl font-serif leading-[0.8] text-sky-300">Y</span>
// //                 {Content.intro}
// //               </p>

// //               <a
// //                 href={Content.cta.href}
// //                 className="group mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-sky-500 to-indigo-500 px-5 py-2.5 font-semibold text-white shadow hover:from-sky-600 hover:to-indigo-600"
// //               >
// //                 {Content.cta.label}
// //                 <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none">
// //                   <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
// //                 </svg>
// //               </a>
// //             </div>

// //             {/* Right: framed illustration (glass frame, slight tilt) */}
// //             <div className="relative">
// //               <div className="relative mx-auto w-full max-w-[520px] rotate-1 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
// //                 <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/10">
// //                   <Image
// //                     src="/images/Illustration/parents_1.svg"
// //                     alt="Parents encouraging non-STEM student in remote learning"
// //                     fill
// //                     className="object-contain"
// //                     priority
// //                     sizes="(max-width: 768px) 100vw, 520px"
// //                   />
// //                 </div>
// //               </div>
// //               <div className="pointer-events-none absolute inset-0 -z-10 translate-y-4 blur-2xl opacity-40 bg-[radial-gradient(30rem_12rem_at_50%_80%,#0ea5e9,transparent_60%)]" />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* MAIN GRID — all glass/gradient, no white gaps */}
// //       <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-20 md:grid-cols-12">
// //         <aside className="md:col-span-3">
// //           <div className="sticky top-6 space-y-4">
// //             <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
// //               <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">In this page</div>
// //               <ul className="mt-3 space-y-2 text-sm">
// //                 <li><a className="hover:text-sky-300" href="#who">Who is this for</a></li>
// //                 <li><a className="hover:text-sky-300" href="#why">Why it works</a></li>
// //                 <li><a className="hover:text-sky-300" href="#outcomes">Outcomes</a></li>
// //                 <li><a className="hover:text-sky-300" href="#safety">Safety</a></li>
// //                 <li><a className="hover:text-sky-300" href="#myths">Myths vs Facts</a></li>
// //                 <li><a className="hover:text-sky-300" href="#faqs">FAQs</a></li>
// //               </ul>
// //             </div>
// //             <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
// //               <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">Quick action</div>
// //               <a
// //                 href={Content.cta.href}
// //                 className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-sky-500/90 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
// //               >
// //                 {Content.cta.label}
// //               </a>
// //             </div>
// //           </div>
// //         </aside>

// //         <article className="md:col-span-9 space-y-10">
// //           <section id="who" className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             <h2 className="text-2xl font-bold">Who is this for?</h2>
// //             <ul className="mt-4 grid gap-3 sm:grid-cols-2">
// //               {Content.whoIsThisFor.map((t, i) => (
// //                 <li key={i} className="flex gap-3 text-slate-200/90">
// //                   <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[11px] font-bold text-white">✓</span>
// //                   <span>{t}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </section>

// //           <section id="why" className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             <h2 className="text-2xl font-bold">Why it works</h2>
// //             <div className="mt-4 grid gap-4 md:grid-cols-2">
// //               {Content.whyItWorks.map((t, i) => (
// //                 <div key={i} className="relative rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
// //                   <div className="absolute -top-3 left-4 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 px-3 py-1 text-xs font-bold text-white shadow">
// //                     {i + 1}
// //                   </div>
// //                   <p className="mt-2 text-slate-200/90">{t}</p>
// //                   <div className="mt-3 h-[2px] w-12 bg-gradient-to-r from-sky-400 to-indigo-400" />
// //                 </div>
// //               ))}
// //             </div>
// //           </section>

// //           <section id="outcomes" className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             <h2 className="text-2xl font-bold">What outcomes can you expect?</h2>
// //             <ul className="mt-4 space-y-3">
// //               {Content.outcomes.map((t, i) => (
// //                 <li key={i} className="flex gap-3 text-slate-200/90">
// //                   <svg className="mt-1 h-5 w-5 text-sky-400" viewBox="0 0 24 24" aria-hidden="true">
// //                     <path d="M20 7L10 17l-6-6" fill="none" stroke="currentColor" strokeWidth="2" />
// //                   </svg>
// //                   <span>{t}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </section>

// //           <section id="safety" className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             <h2 className="text-2xl font-bold">Safety & Supervision</h2>
// //             <div className="mt-4 grid gap-4 sm:grid-cols-3">
// //               {Content.safety.map((t, i) => (
// //                 <div key={i} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
// //                   <div className="flex items-start gap-3">
// //                     <div className="h-9 w-9 rounded-xl bg-sky-500/15 text-sky-300 flex items-center justify-center">
// //                       {i === 0 && (
// //                         <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
// //                           <path d="M12 3l8 4v5a9 9 0 11-16 0V7l8-4z" fill="none" stroke="currentColor" strokeWidth="2" />
// //                         </svg>
// //                       )}
// //                       {i === 1 && (
// //                         <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
// //                           <path d="M3 12s4-7 9-7 9 7 9 7-4 7-9 7-9-7-9-7z" fill="none" stroke="currentColor" strokeWidth="2" />
// //                           <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
// //                         </svg>
// //                       )}
// //                       {i === 2 && (
// //                         <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
// //                           <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
// //                           <circle cx="12" cy="12" r="3" fill="currentColor" />
// //                         </svg>
// //                       )}
// //                     </div>
// //                     <p className="text-sm text-slate-200/90">{t}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>

// //           <section id="myths" className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             <h2 className="text-2xl font-bold">Myths vs Facts</h2>
// //             <div className="mt-4 grid gap-4 md:grid-cols-3">
// //               {Content.myths.map((m, i) => (
// //                 <div key={i} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
// //                   <div className="text-[11px] font-semibold uppercase tracking-wider text-rose-300">Myth</div>
// //                   <p className="mt-1 text-slate-200/90">{m.myth}</p>
// //                   <div className="mt-3 h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
// //                   <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">Fact</div>
// //                   <p className="mt-1 font-medium text-slate-100">{m.fact}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>

// //           <section id="faqs" className="relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
// //             <div className="pointer-events-none absolute -top-6 -right-4 hidden md:block rotate-3">
// //               <div className="rounded-xl bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur-md">
// //                 <div className="relative h-16 w-24">
// //                   <Image
// //                     src="/images/Illustration/parents_1.svg"
// //                     alt="Parents sticker"
// //                     fill
// //                     className="object-contain"
// //                     sizes="96px"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             <h2 className="text-2xl font-bold">Common Questions from Parents</h2>
// //             <div className="mt-4 divide-y divide-white/10">
// //               {Content.faqs.map((f, i) => (
// //                 <details key={i} className="group">
// //                   <summary className="flex cursor-pointer list-none items-center justify-between py-3">
// //                     <span className="font-medium text-slate-100">{f.q}</span>
// //                     <svg
// //                       className="h-4 w-4 text-slate-300 transition-transform group-open:rotate-180"
// //                       viewBox="0 0 24 24"
// //                       fill="none"
// //                     >
// //                       <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
// //                     </svg>
// //                   </summary>
// //                   <p className="pb-3 text-slate-200/90">{f.a}</p>
// //                 </details>
// //               ))}
// //             </div>
// //           </section>
// //         </article>
// //       </section>
// //     </main>
// //   );
// // }
















// // // tinitiate_com-main/src/app/why-tinitiate/parents-nonstem/page.js
// // import Image from "next/image";

// // export const metadata = {
// //   title: "Parents (Non-STEM) — Why TINITIATE",
// //   description:
// //     "A brochure-style guide for parents of non-STEM students: how TINITIATE makes IT careers possible with mentored, hands-on learning.",
// // };

// // const Content = {
// //   kicker: "TINITIATE • Parents’ Guide",
// //   title: "For Parents — Non-STEM Background",
// //   sub: "IT careers are possible without a CS degree. We make the journey structured, mentored, and practical.",
// //   intro:
// //     "Your child does not need to be from a STEM background to start a successful career in technology. With the right foundation, guided practice, and mentorship, non-STEM students can learn modern tools, build real projects, and become job-ready for roles in software, data, cloud, and automation.",
// //   whoIsThisFor: [
// //     "Students from Commerce, Arts, Management, Life-Sciences, or any non-CS background",
// //     "Graduates preparing for job-readiness with limited programming exposure",
// //     "Parents seeking structured, safe, and supportive online learning",
// //   ],
// //   whyItWorks: [
// //     "Start at zero — we teach fundamentals, assuming no coding background.",
// //     "Weekly milestones — concepts → guided exercises → mini-projects.",
// //     "Recorded classes — every session available for revision.",
// //     "1-to-1 mentorship — personal doubt resolution and feedback.",
// //     "Real-world capstones — portfolio projects mapped to job roles.",
// //   ],
// //   outcomes: [
// //     "Project portfolio on Git/GitHub to showcase real work",
// //     "Confidence with company tools (VS Code, Git, SQL, Cloud basics)",
// //     "Interview readiness: problem-solving, practical tasks, communication",
// //   ],
// //   safety: [
// //     "Recorded sessions; parents can review any time",
// //     "Structured timetable with reasonable screen time",
// //     "Professional code of conduct; moderated student communities",
// //   ],
// //   myths: [
// //     {
// //       myth: "You must be great at math to code.",
// //       fact:
// //         "Logical thinking grows with practice; we teach step-by-step with examples.",
// //     },
// //     {
// //       myth: "Only CS degrees get IT jobs.",
// //       fact:
// //         "Skills + portfolio matter. Many roles need problem-solving and tool fluency, not a specific degree.",
// //     },
// //     {
// //       myth: "Online learning isn’t disciplined.",
// //       fact:
// //         "We follow a fixed weekly plan, track progress, and mentor 1-to-1.",
// //     },
// //   ],
// //   faqs: [
// //     {
// //       q: "My child is not from STEM. Can they cope?",
// //       a: "Yes. We begin from fundamentals, use analogies, and practice in small steps. Early modules require zero prior coding.",
// //     },
// //     {
// //       q: "How much time per week is needed?",
// //       a: "Typically 6–8 hours (live + practice). We offer weekday/weekend options and exam-friendly pacing.",
// //     },
// //     {
// //       q: "Do you give certificates?",
// //       a: "Yes, upon completion. More importantly, your child graduates with a project portfolio to show employers.",
// //     },
// //     {
// //       q: "What laptop/configuration is required?",
// //       a: "Any modern laptop with 8GB RAM preferred. We share lightweight setup steps and cloud alternatives if needed.",
// //     },
// //     {
// //       q: "Is this safe and supervised?",
// //       a: "Live sessions are recorded, communities are moderated, and parents can request progress updates.",
// //     },
// //     {
// //       q: "Will you help with placements?",
// //       a: "We focus on job readiness: portfolio, mock interviews, referrals where possible, and guidance on applications.",
// //     },
// //   ],
// //   cta: { label: "Talk to a Mentor", href: "/contact" },

// //   // Breaking Boundaries spread
// //   spotlight: {
// //     kicker: "Breaking Boundaries",
// //     title: "No restrictions to become a developer or IT professional",
// //     sub: "Background doesn’t limit potential. Curiosity, practice, and mentorship open the door.",
// //     story: [
// //       "Ravi came from a non-STEM background. He started with zero coding, learned step-by-step, built small practice projects, and asked questions fearlessly.",
// //       "Within months, he completed a capstone, contributed to an open-source issue, and presented a mini-demo to peers.",
// //       "Today, he’s a junior developer—proving that persistence beats pedigree. If one person can break the boundary, many can.",
// //     ],
// //     ctaLabel: "Start your path",
// //     ctaHref: "/contact",
// //   },
// // };

// // export default function ParentsNonStemPage() {
// //   return (
// //     <main
// //       className={[
// //         "min-h-screen text-slate-100",
// //         // Full-bleed base (no white anywhere)
// //         "bg-[radial-gradient(1200px_600px_at_10%_0%,#0b1220,transparent_60%)]",
// //         "bg-slate-950",
// //       ].join(" ")}
// //     >
// //       {/* Global illusion layers (ink splash + grid) */}
// //       <div className="pointer-events-none fixed inset-0 -z-50">
// //         {/* Conic/radial blobs */}
// //         <div className="absolute -top-32 -right-24 h-[42rem] w-[42rem] rounded-full opacity-60 blur-3xl bg-[conic-gradient(at_top_left,_#1e3a8a_5%,_#0ea5e9_30%,_#1d4ed8_55%,_#0ea5e9_80%)]" />
// //         <div className="absolute top-64 -left-20 h-[30rem] w-[30rem] rounded-full opacity-50 blur-2xl bg-[radial-gradient(ellipse_at_bottom,_#0ea5e955,_transparent_60%)]" />
// //         {/* Subtle grid pattern overlay */}
// //         <div className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:28px_28px]" />
// //       </div>

// //       {/* HERO — brochure split: copy + layered illustrations (BOTH images) */}
// //       <section className="relative px-6 pt-16 pb-10">
// //         <div className="mx-auto max-w-6xl">
// //           <div className="grid items-center gap-8 md:grid-cols-2">
// //             {/* Left: glass copy block with folded corner */}
// //             <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-8 md:p-10 shadow-[0_10px_50px_-10px_rgba(2,6,23,0.55)]">
// //               {/* Folded corner */}
// //               <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
// //                 <div className="absolute right-[-24px] top-[-24px] h-20 w-20 rotate-45 bg-gradient-to-br from-sky-400/40 to-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]" />
// //               </div>

// //               <span className="inline-block rounded-full bg-sky-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-sky-300">
// //                 {Content.kicker}
// //               </span>
// //               <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
// //                 {Content.title}
// //               </h1>
// //               <p className="mt-2 text-lg text-slate-200/90">{Content.sub}</p>

// //               {/* Drop-cap intro on dark */}
// //               <p className="mt-6 text-[1.06rem] leading-7 text-slate-200/90">
// //                 <span className="float-left mr-2 inline-block text-6xl font-serif leading-[0.8] text-sky-300">
// //                   Y
// //                 </span>
// //                 {Content.intro}
// //               </p>

// //               {/* Ribbon CTA */}
// //               <a
// //                 href={Content.cta.href}
// //                 className="group mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-sky-500 to-indigo-500 px-5 py-2.5 font-semibold text-white shadow hover:from-sky-600 hover:to-indigo-600"
// //               >
// //                 {Content.cta.label}
// //                 <svg
// //                   className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                 >
// //                   <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
// //                 </svg>
// //               </a>
// //             </div>

// //             {/* Right: layered brochure images (both illustrations) */}
// //             <div className="relative">
// //               {/* Base: parents illustration (slight tilt) */}
// //               <div className="relative mx-auto w-full max-w-[520px] -rotate-1 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
// //                 <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/10">
// //                   <Image
// //                     src="/images/Illustration/parents_1.svg"
// //                     alt="Parents supporting online learning"
// //                     fill
// //                     className="object-contain"
// //                     priority
// //                     sizes="(max-width: 768px) 100vw, 520px"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Overlay: non-STEM illustration (smaller card) */}
// //               <div className="absolute -bottom-6 -left-6 hidden md:block rotate-3 rounded-2xl bg-white/10 p-3 ring-1 ring-white/10 backdrop-blur">
// //                 <div className="relative aspect-[4/3] w-44 overflow-hidden rounded-xl bg-black/5">
// //                   <Image
// //                     src="/images/Illustration/nonSTEM.svg"
// //                     alt="Non-STEM students learning technology"
// //                     fill
// //                     className="object-contain"
// //                     sizes="176px"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Soft glow under the stack */}
// //               <div className="pointer-events-none absolute inset-0 -z-10 translate-y-4 blur-2xl opacity-40 bg-[radial-gradient(30rem_12rem_at_50%_80%,#0ea5e9,transparent_60%)]" />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* MAIN GRID — all glass/gradient, no white gaps */}
// //       <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-20 md:grid-cols-12">
// //         {/* Sticky rail (glass) */}
// //         <aside className="md:col-span-3">
// //           <div className="sticky top-6 space-y-4">
// //             <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
// //               <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
// //                 In this page
// //               </div>
// //               <ul className="mt-3 space-y-2 text-sm">
// //                 <li>
// //                   <a className="hover:text-sky-300" href="#who">
// //                     Who is this for
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a className="hover:text-sky-300" href="#why">
// //                     Why it works
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a className="hover:text-sky-300" href="#breaking-boundaries">
// //                     Breaking Boundaries
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a className="hover:text-sky-300" href="#outcomes">
// //                     Outcomes
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a className="hover:text-sky-300" href="#safety">
// //                     Safety
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a className="hover:text-sky-300" href="#myths">
// //                     Myths vs Facts
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a className="hover:text-sky-300" href="#faqs">
// //                     FAQs
// //                   </a>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
// //               <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
// //                 Quick action
// //               </div>
// //               <a
// //                 href={Content.cta.href}
// //                 className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-sky-500/90 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
// //               >
// //                 {Content.cta.label}
// //               </a>
// //             </div>
// //           </div>
// //         </aside>

// //         {/* Article */}
// //         <article className="md:col-span-9 space-y-10">
// //           {/* Who is this for */}
// //           <section
// //             id="who"
// //             className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
// //           >
// //             <h2 className="text-2xl font-bold">Who is this for?</h2>
// //             <ul className="mt-4 grid gap-3 sm:grid-cols-2">
// //               {Content.whoIsThisFor.map((t, i) => (
// //                 <li key={i} className="flex gap-3 text-slate-200/90">
// //                   <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[11px] font-bold text-white">
// //                     ✓
// //                   </span>
// //                   <span>{t}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </section>

// //           {/* Why it works */}
// //           <section
// //             id="why"
// //             className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
// //           >
// //             <h2 className="text-2xl font-bold">Why it works</h2>
// //             <div className="mt-4 grid gap-4 md:grid-cols-2">
// //               {Content.whyItWorks.map((t, i) => (
// //                 <div
// //                   key={i}
// //                   className="relative rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
// //                 >
// //                   <div className="absolute -top-3 left-4 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 px-3 py-1 text-xs font-bold text-white shadow">
// //                     {i + 1}
// //                   </div>
// //                   <p className="mt-2 text-slate-200/90">{t}</p>
// //                   <div className="mt-3 h-[2px] w-12 bg-gradient-to-r from-sky-400 to-indigo-400" />
// //                 </div>
// //               ))}
// //             </div>
// //           </section>

// //           {/* Breaking Boundaries — ribbon + story + CTA (keeps hero images; adds section emphasis) */}
// //           <section
// //             id="breaking-boundaries"
// //             className="relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur overflow-hidden"
// //           >
// //             {/* subtle conic glow */}
// //             <div className="pointer-events-none absolute -top-16 -right-20 h-72 w-72 rounded-full blur-3xl opacity-30 bg-[conic-gradient(at_top_left,_#38bdf8_0%,_#6366f1_40%,_#0ea5e9_80%)]" />

// //             {/* header ribbon */}
// //             <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-3 py-1 ring-1 ring-white/10">
// //               <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-300">
// //                 {Content.spotlight.kicker}
// //               </span>
// //               <svg
// //                 viewBox="0 0 24 24"
// //                 className="h-3.5 w-3.5 text-sky-300"
// //                 fill="currentColor"
// //                 aria-hidden="true"
// //               >
// //                 <path d="M12 2l2.39 4.84L20 7.27l-3.88 3.78.92 5.36L12 14.77l-4.04 1.64.92-5.36L5 7.27l5.61-.43L12 2z" />
// //               </svg>
// //             </div>

// //             <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-50">
// //               {Content.spotlight.title}
// //             </h2>
// //             <p className="mt-1 text-slate-200/90">{Content.spotlight.sub}</p>

// //             {/* story grid */}
// //             <div className="mt-5 grid gap-4 md:grid-cols-3">
// //               {Content.spotlight.story.map((p, i) => (
// //                 <div
// //                   key={i}
// //                   className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
// //                 >
// //                   <p className="text-slate-200/90">{p}</p>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* bold pull-quote bar */}
// //             <div className="mt-6 rounded-xl bg-gradient-to-r from-sky-500/25 to-indigo-500/25 p-4 ring-1 ring-white/10">
// //               <p className="text-sm font-semibold tracking-wide text-slate-100">
// //                 “If one person can cross the line, everyone can. Your journey can
// //                 start today.”
// //               </p>
// //             </div>

// //             {/* CTA */}
// //             <div className="mt-5">
// //               <a
// //                 href={Content.spotlight.ctaHref}
// //                 className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-sky-500 to-indigo-500 px-5 py-2.5 font-semibold text-white shadow hover:from-sky-600 hover:to-indigo-600"
// //               >
// //                 {Content.spotlight.ctaLabel}
// //                 <svg
// //                   className="h-4 w-4"
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   aria-hidden="true"
// //                 >
// //                   <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
// //                 </svg>
// //               </a>
// //             </div>
// //           </section>

// //           {/* Outcomes */}
// //           <section
// //             id="outcomes"
// //             className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
// //           >
// //             <h2 className="text-2xl font-bold">What outcomes can you expect?</h2>
// //             <ul className="mt-4 space-y-3">
// //               {Content.outcomes.map((t, i) => (
// //                 <li key={i} className="flex gap-3 text-slate-200/90">
// //                   <svg
// //                     className="mt-1 h-5 w-5 text-sky-400"
// //                     viewBox="0 0 24 24"
// //                     aria-hidden="true"
// //                   >
// //                     <path
// //                       d="M20 7L10 17l-6-6"
// //                       fill="none"
// //                       stroke="currentColor"
// //                       strokeWidth="2"
// //                     />
// //                   </svg>
// //                   <span>{t}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </section>

// //           {/* Safety */}
// //           <section
// //             id="safety"
// //             className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
// //           >
// //             <h2 className="text-2xl font-bold">Safety & Supervision</h2>
// //             <div className="mt-4 grid gap-4 sm:grid-cols-3">
// //               {Content.safety.map((t, i) => (
// //                 <div
// //                   key={i}
// //                   className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
// //                 >
// //                   <div className="flex items-start gap-3">
// //                     <div className="h-9 w-9 rounded-xl bg-sky-500/15 text-sky-300 flex items-center justify-center">
// //                       {i === 0 && (
// //                         <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
// //                           <path
// //                             d="M12 3l8 4v5a9 9 0 11-16 0V7l8-4z"
// //                             fill="none"
// //                             stroke="currentColor"
// //                             strokeWidth="2"
// //                           />
// //                         </svg>
// //                       )}
// //                       {i === 1 && (
// //                         <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
// //                           <path
// //                             d="M3 12s4-7 9-7 9 7 9 7-4 7-9 7-9-7-9-7z"
// //                             fill="none"
// //                             stroke="currentColor"
// //                             strokeWidth="2"
// //                           />
// //                           <circle
// //                             cx="12"
// //                             cy="12"
// //                             r="3"
// //                             fill="none"
// //                             stroke="currentColor"
// //                             strokeWidth="2"
// //                           />
// //                         </svg>
// //                       )}
// //                       {i === 2 && (
// //                         <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
// //                           <rect
// //                             x="6"
// //                             y="6"
// //                             width="12"
// //                             height="12"
// //                             rx="2"
// //                             stroke="currentColor"
// //                             strokeWidth="2"
// //                             fill="none"
// //                           />
// //                           <circle cx="12" cy="12" r="3" fill="currentColor" />
// //                         </svg>
// //                       )}
// //                     </div>
// //                     <p className="text-sm text-slate-200/90">{t}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>

// //           {/* Myths vs Facts */}
// //           <section
// //             id="myths"
// //             className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
// //           >
// //             <h2 className="text-2xl font-bold">Myths vs Facts</h2>
// //             <div className="mt-4 grid gap-4 md:grid-cols-3">
// //               {Content.myths.map((m, i) => (
// //                 <div
// //                   key={i}
// //                   className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
// //                 >
// //                   <div className="text-[11px] font-semibold uppercase tracking-wider text-rose-300">
// //                     Myth
// //                   </div>
// //                   <p className="mt-1 text-slate-200/90">{m.myth}</p>
// //                   <div className="mt-3 h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
// //                   <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
// //                     Fact
// //                   </div>
// //                   <p className="mt-1 font-medium text-slate-100">{m.fact}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>

// //           {/* FAQs (details/summary) + floating sticker illustration */}
// //           <section
// //             id="faqs"
// //             className="relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
// //           >
// //             {/* Floating sticker for brochure feel (uses nonSTEM) */}
// //             <div className="pointer-events-none absolute -top-6 -right-4 hidden md:block rotate-3">
// //               <div className="rounded-xl bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur-md">
// //                 <div className="relative h-16 w-24">
// //                   <Image
// //                     src="/images/Illustration/nonSTEM.svg"
// //                     alt="Sticker"
// //                     fill
// //                     className="object-contain"
// //                     sizes="96px"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             <h2 className="text-2xl font-bold">Common Questions from Parents</h2>
// //             <div className="mt-4 divide-y divide-white/10">
// //               {Content.faqs.map((f, i) => (
// //                 <details key={i} className="group">
// //                   <summary className="flex cursor-pointer list-none items-center justify-between py-3">
// //                     <span className="font-medium text-slate-100">{f.q}</span>
// //                     <svg
// //                       className="h-4 w-4 text-slate-300 transition-transform group-open:rotate-180"
// //                       viewBox="0 0 24 24"
// //                       fill="none"
// //                     >
// //                       <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
// //                     </svg>
// //                   </summary>
// //                   <p className="pb-3 text-slate-200/90">{f.a}</p>
// //                 </details>
// //               ))}
// //             </div>
// //           </section>
// //         </article>
// //       </section>
// //     </main>
// //   );
// // }



















// // // tinitiate_com-main/src/app/why-tinitiate/parents-nonstem/page.js
// // import Image from "next/image";

// // export const metadata = {
// //   title: "TINITIATE Magazine — Breaking Barriers Edition",
// //   description:
// //     "Magazine-style cover page + editorial spread: Non-STEM to IT Career, built as a print-like layout with top-level infographics.",
// // };

// // export default function ParentsNonStemMagazineCover() {
// //   return (
// //     <main
// //       className={[
// //         "min-h-screen text-slate-100",
// //         "bg-slate-950 overflow-hidden relative",
// //         "bg-[radial-gradient(circle_at_22%_28%,#0ea5e9_0%,#0b1220_52%,#020617_100%)]",
// //       ].join(" ")}
// //     >
// //       {/* Background ambient lights */}
// //       <div className="pointer-events-none absolute inset-0 -z-10">
// //         <div className="absolute -top-40 -right-20 h-[50rem] w-[50rem] rounded-full blur-3xl opacity-50 bg-[conic-gradient(at_top_left,_#1e3a8a_5%,_#0ea5e9_30%,_#1d4ed8_60%,_#0ea5e9_80%)]" />
// //         <div className="absolute bottom-0 left-0 h-[35rem] w-[35rem] rounded-full blur-2xl opacity-30 bg-[radial-gradient(circle_at_bottom_left,_#0ea5e955,_transparent_70%)]" />
// //         <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:30px_30px]" />
// //       </div>

// //       {/* ===== COVER ===== */}
// //       <section className="relative flex min-h-[92vh] flex-col items-center justify-center">
// //         {/* Top Magazine Masthead */}
// //         <header className="absolute top-10 text-center w-full">
// //           <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-indigo-400 drop-shadow-[0_4px_10px_rgba(14,165,233,0.3)]">
// //             TINITIATE
// //           </h1>
// //           <p className="uppercase tracking-[0.3em] text-sky-400 text-xs sm:text-sm font-semibold">
// //             Breaking Barriers Edition • Issue 2025
// //           </p>
// //         </header>

// //         {/* Central Feature Illustration */}
// //         <div className="relative mt-28 md:mt-40 w-[92%] max-w-[780px] aspect-[4/3] overflow-hidden">
// //           <Image
// //             src="/images/Illustration/nonSTEM.svg"
// //             alt="Breaking Barriers — Non-STEM Students in Tech"
// //             fill
// //             className="object-contain p-6"
// //             priority
// //           />
// //           {/* Decorative angled sheen */}
// //           <div className="pointer-events-none absolute -top-10 -left-24 w-[160%] h-24 rotate-[-8deg] bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-transparent" />
// //         </div>

// //         {/* Cover Tagline */}
// //         <div className="relative mt-10 text-center px-6 max-w-3xl">
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
// //             ANY DEGREE <span className="text-sky-400">→</span> IT CAREER
// //           </h2>
// //           <p className="mt-3 text-lg sm:text-xl text-slate-200/90 font-medium leading-relaxed">
// //             You don’t need a Computer Science degree to become a developer. Curiosity, consistency, and mentorship are enough.
// //           </p>
// //           <div className="mt-8 inline-block rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/20 px-5 py-2 text-sm tracking-wide uppercase">
// //             “Breaking boundaries, one learner at a time.”
// //           </div>
// //         </div>

// //         {/* Separator → next page feel */}
// //         <div className="mt-12 h-[3px] w-[92%] max-w-6xl rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400" />
// //       </section>

// //       {/* ===== EDITORIAL SPREAD (Magazine — NOT cards) ===== */}
// //       <section className="relative mx-auto w-[92%] max-w-[1200px] py-12 md:py-16">
// //         {/* Kicker • Hed • Dek */}
// //         <div className="text-center">
// //           <div className="inline-flex items-center gap-3 rounded-full px-3 py-1 bg-sky-500/15">
// //             <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
// //               Parents’ Insight
// //             </span>
// //             <span className="h-1 w-1 rounded-full bg-sky-300" />
// //             <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-300">
// //               Feature
// //             </span>
// //           </div>
// //         </div>
// //         <div className="mt-6 text-center px-2">
// //           <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
// //             Why should my child learn technology{" "}
// //             <span className="text-sky-400">if they’re not from an IT background?</span>
// //           </h3>
// //           <p className="mx-auto mt-4 max-w-4xl text-lg sm:text-xl text-slate-200/90">
// //             Every career now touches technology — from marketing to finance, design to business. The right foundation builds digital fluency, problem-solving, and data literacy.
// //           </p>
// //         </div>

// //         {/* Hairline rule */}
// //         <div className="mx-auto mt-8 h-px w-full max-w-5xl bg-white/10" />

// //         {/* — Spread 1: Left editorial copy • Right hero illustration — */}
// //         <article className="mt-10 grid items-center gap-10 md:grid-cols-12">
// //           {/* Left editorial column (drop cap, magazine spacing) */}
// //           <div className="md:col-span-7 md:pr-10">
// //             <p className="text-[1.06rem] leading-8 text-slate-200/90">
// //               <span className="float-left mr-3 inline-block text-6xl leading-[0.8] font-serif text-sky-300">B</span>
// //               ecause every career now touches technology. From marketing to finance, design to business — success today
// //               requires comfort with digital tools, clear problem-solving, and the ability to read and reason with data.
// //             </p>
// //             <p className="mt-5 text-[1.06rem] leading-8 text-slate-200/90">
// //               At TINITIATE, we translate theory into momentum: fewer buzzwords, more practice. Your child learns by doing —
// //               paced, mentored, and built for non-STEM backgrounds.
// //             </p>

// //             {/* Pull-quote like a magazine rule */}
// //             <div className="mt-8 border-y border-white/10 py-5">
// //               <blockquote className="text-center text-lg sm:text-xl font-semibold tracking-wide text-slate-100">
// //                 “No background required — only curiosity and consistency.”
// //               </blockquote>
// //             </div>
// //           </div>

// //           {/* Right image (parent-nonStem) */}
// //           <div className="md:col-span-5">
// //             <div className="relative aspect-[4/3] w-full">
// //               <Image
// //                 src="/images/Illustration/parent-nonStem.svg"
// //                 alt="Parents and non-STEM students embracing technology"
// //                 fill
// //                 className="object-contain"
// //                 sizes="(max-width: 1200px) 100vw, 520px"
// //               />
// //             </div>
// //           </div>
// //         </article>

// //         {/* Hairline rule */}
// //         <div className="mx-auto my-12 h-px w-full bg-white/10" />

// //         {/* — Spread 2: Left image • Right dek & short paragraphs — */}
// //         <article className="grid items-center gap-10 md:grid-cols-12">
// //           {/* Left image */}
// //           <div className="md:col-span-6">
// //             <div className="relative aspect-[16/10] w-full">
// //               <Image
// //                 src="/images/Illustration/confident-nonStem.svg"
// //                 alt="Build confidence with technology"
// //                 fill
// //                 className="object-contain"
// //                 sizes="(max-width: 1200px) 100vw, 600px"
// //               />
// //             </div>
// //           </div>

// //           {/* Right text (dek + one paragraph) */}
// //           <div className="md:col-span-6 md:pl-10">
// //             <h4 className="text-2xl sm:text-3xl font-extrabold leading-tight">
// //               Build confidence with technology
// //             </h4>
// //             <p className="mt-4 text-lg leading-8 text-slate-200/90">
// //               Start from zero with clear steps, weekly momentum, and mentor feedback that celebrates small wins.
// //               Confidence grows when progress is visible.
// //             </p>
// //           </div>
// //         </article>

// //         {/* Hairline rule */}
// //         <div className="mx-auto my-12 h-px w-full bg-white/10" />

// //         {/* — Spread 3: Right image • Left dek & short paragraphs — */}
// //         <article className="grid items-center gap-10 md:grid-cols-12">
// //           {/* Left text */}
// //           <div className="md:col-span-6 md:pr-10 order-2 md:order-1">
// //             <h4 className="text-2xl sm:text-3xl font-extrabold leading-tight">
// //               Develop logical thinking and analytical skills
// //             </h4>
// //             <p className="mt-4 text-lg leading-8 text-slate-200/90">
// //               From puzzles to mini-projects, your child learns to break problems into simple, testable steps —
// //               the core habit behind every tech role.
// //             </p>
// //           </div>

// //           {/* Right image */}
// //           <div className="md:col-span-6 order-1 md:order-2">
// //             <div className="relative aspect-[16/10] w-full">
// //               <Image
// //                 src="/images/Illustration/analytical-skills.svg"
// //                 alt="Develop logical thinking and analytical skills"
// //                 fill
// //                 className="object-contain"
// //                 sizes="(max-width: 1200px) 100vw, 600px"
// //               />
// //             </div>
// //           </div>
// //         </article>

// //         {/* Hairline rule */}
// //         <div className="mx-auto my-12 h-px w-full bg-white/10" />

// //         {/* — Spread 4: Left image • Right dek & short paragraphs — */}
// //         <article className="grid items-center gap-10 md:grid-cols-12">
// //           {/* Left image */}
// //           <div className="md:col-span-6">
// //             <div className="relative aspect-[16/10] w-full">
// //               <Image
// //                 src="/images/Illustration/multiple-career-doors.svg"
// //                 alt="Open multiple career doors — not just one"
// //                 fill
// //                 className="object-contain"
// //                 sizes="(max-width: 1200px) 100vw, 600px"
// //               />
// //             </div>
// //           </div>

// //           {/* Right text */}
// //           <div className="md:col-span-6 md:pl-10">
// //             <h4 className="text-2xl sm:text-3xl font-extrabold leading-tight">
// //               Open multiple career doors — not just one
// //             </h4>
// //             <p className="mt-4 text-lg leading-8 text-slate-200/90">
// //               Technology fluency unlocks roles across operations, product, data, QA, support, and automation.
// //               Skills create options — not dead ends.
// //             </p>
// //           </div>
// //         </article>

// //         {/* Closing ornament line */}
// //         <div className="mx-auto mt-14 mb-4 h-[3px] w-40 rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400" />
// //       </section>
// //       {/* (No footer — magazine flow ends cleanly) */}
// //     </main>
// //   );
// // }








// // tinitiate_com-main/src/app/why-tinitiate/parents-nonstem/page.js
// import Image from "next/image";

// export const metadata = {
//   title: "TINITIATE — Parents (Non-STEM) • Single-Page Brochure",
//   description:
//     "A single-page, magazine-style brochure for parents of non-STEM students: cover + editorial spread with strong typography & alternating illustrations.",
// };

// export default function ParentsNonStemSinglePage() {
//   return (
//     <main
//       className={[
//         "min-h-screen text-slate-100",
//         "bg-slate-950 overflow-hidden relative",
//         "bg-[radial-gradient(circle_at_22%_28%,#0ea5e9_0%,#0b1220_52%,#020617_100%)]",
//       ].join(" ")}
//     >
//       {/* Background ambience */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -top-40 -right-16 h-[48rem] w-[48rem] rounded-full blur-3xl opacity-45 bg-[conic-gradient(at_top_left,_#1e3a8a_5%,_#0ea5e9_30%,_#1d4ed8_60%,_#0ea5e9_80%)]" />
//         <div className="absolute bottom-0 left-0 h-[32rem] w-[32rem] rounded-full blur-2xl opacity-30 bg-[radial-gradient(circle_at_bottom_left,_#0ea5e955,_transparent_70%)]" />
//         <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:26px_26px]" />
//       </div>

//       {/* ===================== SECTION 1: COVER ===================== */}
//       <section className="relative flex min-h-[92vh] flex-col items-center justify-center">
//         {/* Masthead */}
//         <header className="absolute top-10 w-full text-center">
//           <h1 className="text-[3.2rem] sm:text-[4.8rem] md:text-[6rem] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-indigo-400 drop-shadow-[0_4px_10px_rgba(14,165,233,0.3)]">
//             TINITIATE
//           </h1>
//           <p className="uppercase tracking-[0.3em] text-sky-300/90 text-[11px] sm:text-xs font-semibold">
//             Parents • Non-STEM • Brochure Edition
//           </p>
//         </header>

//         {/* Feature Illustration */}
//         <div className="relative mt-28 md:mt-40 w-[92%] max-w-[780px] aspect-[4/3] overflow-hidden rounded-[28px] ring-1 ring-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_80px_-10px_rgba(14,165,233,0.4)]">
//           <Image
//             src="/images/Illustration/nonSTEM.svg"
//             alt="Breaking Barriers — Non-STEM Students in Tech"
//             fill
//             className="object-contain p-6"
//             priority
//           />
//           <div className="pointer-events-none absolute -top-10 -left-24 w-[160%] h-24 rotate-[-8deg] bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-transparent" />
//         </div>

//         {/* Cover copy */}
//         <div className="relative mt-10 text-center px-6 max-w-3xl">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
//             ANY DEGREE <span className="text-sky-400">→</span> IT CAREER
//           </h2>
//           <p className="mt-3 text-lg sm:text-xl text-slate-200/90 font-medium leading-relaxed">
//             You don’t need a Computer Science degree to become a developer. Curiosity, consistency, and mentorship are enough.
//           </p>
//           <div className="mt-8 inline-block rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/20 px-5 py-2 text-[11px] tracking-[0.2em] uppercase ring-1 ring-white/10">
//             “Breaking boundaries, one learner at a time.”
//           </div>
//         </div>

//         {/* Separator to next section */}
//         <div className="mt-12 h-[3px] w-[92%] max-w-6xl rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400" />
//       </section>

//       {/* ================= SECTION 2: PARENTS’ INSIGHT ================= */}
//       <section className="relative mx-auto w-[92%] max-w-[1200px] py-12 md:py-16">
//         {/* Kicker Row */}
//         <div className="flex items-center justify-center gap-3">
//           <span className="h-[1px] w-16 bg-white/15" />
//           <span className="rounded-full bg-sky-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300 ring-1 ring-white/10">
//             Parents’ Insight
//           </span>
//           <span className="h-[1px] w-16 bg-white/15" />
//         </div>

//         {/* Hed + Dek */}
//         <div className="mt-6 text-center px-2">
//           <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
//             Why should my child learn technology{" "}
//             <span className="text-sky-400">if they’re not from an IT background?</span>
//           </h3>
//           <p className="mx-auto mt-4 max-w-4xl text-lg sm:text-xl text-slate-200/90">
//             Every career now touches technology — from marketing to finance, design to business. The right foundation builds
//             digital fluency, problem-solving, and data literacy.
//           </p>
//         </div>

//         {/* Rule */}
//         <div className="mx-auto mt-8 h-px w-full max-w-5xl bg-white/10" />

//         {/* Editorial lead row: left copy, right image */}
//         <article className="mt-12 grid items-start gap-10 md:grid-cols-12">
//           {/* Left copy */}
//           <div className="relative md:col-span-6 md:pr-10">
//             <span className="pointer-events-none absolute -left-6 top-0 hidden h-full w-px bg-white/10 md:block" />
//             <p className="text-[1.06rem] leading-8 text-slate-200/90">
//               <span className="float-left mr-3 inline-block text-6xl leading-[0.8] font-serif text-sky-300">B</span>
//               ecause every career now touches technology. From marketing to finance, design to business — success today requires
//               comfort with digital tools, clear problem-solving, and the ability to read and reason with data.
//             </p>
//             <p className="mt-5 text-[1.06rem] leading-8 text-slate-200/90">
//               At TINITIATE, we translate theory into momentum: fewer buzzwords, more practice. Your child learns by doing —
//               paced, mentored, and built for non-STEM backgrounds.
//             </p>
//             <div className="mt-8 rounded-[14px] bg-gradient-to-r from-sky-500/15 to-indigo-500/15 px-5 py-4 ring-1 ring-white/10">
//               <blockquote className="text-center text-lg sm:text-xl font-semibold tracking-wide text-slate-100">
//                 “No background required — only curiosity and consistency.”
//               </blockquote>
//             </div>
//           </div>

//           {/* Right image: Parents + non-STEM */}
//           <div className="md:col-span-6">
//             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] ring-1 ring-white/10 bg-white/5">
//               <Image
//                 src="/images/Illustration/parent-nonStem.svg"
//                 alt="Parents and non-STEM students embracing technology"
//                 fill
//                 className="object-contain p-5"
//                 sizes="(max-width: 1200px) 100vw, 600px"
//               />
//             </div>
//           </div>
//         </article>

//         {/* Inside Feature Divider */}
//         <div className="mx-auto my-12 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.18em] text-slate-400">
//           <span className="h-px w-16 bg-white/10" />
//           <span>Inside Feature</span>
//           <span className="h-px w-16 bg-white/10" />
//         </div>

//         {/* Feature 1: Build confidence with technology */}
//         <article className="grid items-center gap-10 md:grid-cols-12">
//           {/* Left image */}
//           <div className="md:col-span-6">
//             <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] ring-1 ring-white/10 bg-white/5">
//               <Image
//                 src="/images/Illustration/confident-nonStem.svg"
//                 alt="Build confidence with technology"
//                 fill
//                 className="object-contain p-4"
//                 sizes="(max-width: 1200px) 100vw, 600px"
//               />
//             </div>
//           </div>
//           {/* Right text */}
//           <div className="md:col-span-6 md:pl-10">
//             <h4 className="text-2xl sm:text-3xl font-extrabold leading-tight">
//               Build confidence with technology
//             </h4>
//             <p className="mt-4 text-lg leading-8 text-slate-200/90">
//               Start from zero with clear steps, weekly momentum, and mentor feedback that celebrates small wins. Confidence
//               grows when progress is visible.
//             </p>
//           </div>
//         </article>

//         {/* Rule */}
//         <div className="mx-auto my-10 h-px w-full bg-white/10" />

//         {/* Feature 2: Develop logical thinking and analytical skills */}
//         <article className="grid items-center gap-10 md:grid-cols-12">
//           {/* Left text */}
//           <div className="md:col-span-6 md:pr-10 order-2 md:order-1">
//             <h4 className="text-2xl sm:text-3xl font-extrabold leading-tight">
//               Develop logical thinking and analytical skills
//             </h4>
//             <p className="mt-4 text-lg leading-8 text-slate-200/90">
//               From puzzles to mini-projects, your child learns to break problems into simple, testable steps — the core habit
//               behind every tech role.
//             </p>
//           </div>
//           {/* Right image */}
//           <div className="md:col-span-6 order-1 md:order-2">
//             <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] ring-1 ring-white/10 bg-white/5">
//               <Image
//                 src="/images/Illustration/analytical-skills.svg"
//                 alt="Develop logical thinking and analytical skills"
//                 fill
//                 className="object-contain p-4"
//                 sizes="(max-width: 1200px) 100vw, 600px"
//               />
//             </div>
//           </div>
//         </article>

//         {/* Rule */}
//         <div className="mx-auto my-10 h-px w-full bg-white/10" />

//         {/* Feature 3: Open multiple career doors — not just one */}
//         <article className="grid items-center gap-10 md:grid-cols-12">
//           {/* Left image */}
//           <div className="md:col-span-6">
//             <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] ring-1 ring-white/10 bg-white/5">
//               <Image
//                 src="/images/Illustration/multiple-career-doors.svg"
//                 alt="Open multiple career doors — not just one"
//                 fill
//                 className="object-contain p-4"
//                 sizes="(max-width: 1200px) 100vw, 600px"
//               />
//             </div>
//           </div>
//           {/* Right text */}
//           <div className="md:col-span-6 md:pl-10">
//             <h4 className="text-2xl sm:text-3xl font-extrabold leading-tight">
//               Open multiple career doors — not just one
//             </h4>
//             <p className="mt-4 text-lg leading-8 text-slate-200/90">
//               Technology fluency unlocks roles across operations, product, data, QA, support, and automation. Skills create
//               options — not dead ends.
//             </p>
//           </div>
//         </article>
//       </section>

// {/* ================= SECTION 3: WHAT EXACTLY WE TEACH (Magazine style) ================ */}
// <section className="relative mx-auto w-[92%] max-w-[1200px] py-14 md:py-18">
 
//   {/* Headline row: EXACTLY (left with info below) + image (right) */}
//   <div className="grid gap-10 md:grid-cols-12 items-start">
//     {/* LEFT — Big magazine wordmark + info text below it */}
//     <div className="md:col-span-6 relative">
//       {/* angled kicker (rubric) */}
//       <div className="mb-4 inline-block -rotate-1 rounded-sm bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300 ring-1 ring-white/10">
//         What exactly does TINITIATE teach?
//       </div>

//       {/* Layered headline */}
//       <div className="relative leading-none">
//         {/* soft shadow layer */}
//         <div className="absolute inset-0 translate-y-1 blur-[2px] opacity-40 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-indigo-300 select-none pointer-events-none text-[9vw] md:text-[6rem] font-black">
//           EXACTLY
//         </div>
//         {/* foreground */}
//         <h3 className="relative text-[9vw] md:text-[6rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-indigo-300 drop-shadow-[0_2px_10px_rgba(14,165,233,0.35)]">
//           EXACTLY
//         </h3>
//       </div>

//       {/* (Removed the underline accent below the heading) */}

//       {/* Info text under the EXACTLY heading — magazine paragraph styling */}
//       <div className="mt-7 max-w-xl space-y-4 text-justify">
//         {/* Para 1 with Drop Cap */}
//         <p className="text-[1.1rem] md:text-[1.22rem] leading-8 tracking-[0.01em]">
//           <span className="float-left mr-2 inline-block font-serif text-6xl leading-[0.78] text-sky-300 drop-shadow-[0_2px_8px_rgba(56,189,248,0.35)] select-none">T</span>
//           INITIATE provides <span className="font-semibold">practical</span>, project-based training in modern STEM &amp; IT skills, designed for beginners from any stream.
//         </p>

//         {/* Para 2 with Drop Cap */}
//         <p className="text-[1.08rem] md:text-[1.2rem] leading-8 tracking-[0.01em]">
//           <span className="float-left mr-2 inline-block font-serif text-6xl leading-[0.78] text-indigo-300 drop-shadow-[0_2px_8px_rgba(99,102,241,0.35)] select-none">S</span>
//           tudents learn <span className="font-semibold">step-by-step</span>, guided by experienced <span className="font-semibold">mentors</span> from industry.
//         </p>

//         {/* Pull-strap */}
//         <div className="pt-2">
//           <span className="inline-block rounded-full bg-gradient-to-r from-sky-500/15 to-indigo-500/15 px-4 py-1.5 text-[12px] tracking-[0.18em] uppercase ring-1 ring-white/10">
//             Practice • Portfolio • Mentorship
//           </span>
//         </div>
//       </div>
//     </div>

//     {/* RIGHT — Illustration image */}
//     <div className="md:col-span-6">
//       <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] ring-1 ring-white/10 bg-white/5">
//         <Image
//           src="/images/Illustration/exactly.svg"
//           alt="Illustration showing practical, project-based learning at TINITIATE"
//           fill
//           className="object-contain p-4"
//           sizes="(max-width: 1200px) 100vw, 680px"
//         />
//       </div>
//     </div>
//   </div>

//   {/* Hairline */}
//   <div className="mx-auto my-10 h-px w-full bg-white/10" />

//   {/* Program matrix — clean magazine stripes */}
//   <div aria-label="Program Matrix" className="text-slate-100">
//     {/* Header row */}
//     <div className="grid grid-cols-12 items-end">
//       <div className="col-span-12 sm:col-span-4 pr-4">
//         <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Program Type</div>
//         {/* (Removed the tiny line/dash under header) */}
//       </div>
//       <div className="col-span-12 sm:col-span-4 pr-4 mt-4 sm:mt-0">
//         <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Focus Area</div>
//         {/* (Removed the tiny line/dash under header) */}
//       </div>
//       <div className="col-span-12 sm:col-span-4 mt-4 sm:mt-0">
//         <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Ideal For</div>
//         {/* (Removed the tiny line/dash under header) */}
//       </div>
//     </div>

//     {/* Row 1 — Foundation */}
//     <div className="relative mt-4 grid grid-cols-12 items-center py-5 before:absolute before:inset-0 before:-z-10 before:bg-white/5 before:rounded-lg before:backdrop-blur-sm before:ring-1 before:ring-white/10">
//       <div className="col-span-12 sm:col-span-4 pr-4">
//         <div className="inline-block -rotate-1 bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300 ring-1 ring-white/10">
//           Foundation
//         </div>
//       </div>
//       <div className="col-span-12 sm:col-span-4 pr-4 mt-3 sm:mt-0">
//         <span className="font-medium">
//           <span className="font-semibold text-sky-300/95">Basic programming</span>, <span className="font-semibold text-sky-300/95">data</span> &amp; <span className="font-semibold text-sky-300/95">logic</span>
//         </span>
//       </div>
//       <div className="col-span-12 sm:col-span-4 mt-3 sm:mt-0">
//         <span className="inline-flex items-center gap-2">
//           <span className="rounded-full bg-white/10 px-2 py-0.5 text-sm">Non-IT beginners</span>
//         </span>
//       </div>
//     </div>

//     {/* Row 2 — Professional */}
//     <div className="relative mt-3 grid grid-cols-12 items-center py-5 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:rounded-lg before:ring-1 before:ring-white/10">
//       <div className="col-span-12 sm:col-span-4 pr-4">
//         <div className="inline-block rotate-1 bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-300 ring-1 ring-white/10">
//           Professional
//         </div>
//       </div>
//       <div className="col-span-12 sm:col-span-4 pr-4 mt-3 sm:mt-0">
//         <span className="font-medium">
//           <span className="font-semibold text-indigo-300/95">Software</span>, <span className="font-semibold text-indigo-300/95">Cloud</span>, <span className="font-semibold text-indigo-300/95">Data</span> skills
//         </span>
//       </div>
//       <div className="col-span-12 sm:col-span-4 mt-3 sm:mt-0">
//         <span className="inline-flex items-center gap-2">
//           <span className="rounded-full bg-white/10 px-2 py-0.5 text-sm">Graduates exploring tech jobs</span>
//         </span>
//       </div>
//     </div>

//     {/* Row 3 — Work Experience */}
//     <div className="relative mt-3 grid grid-cols-12 items-center py-5 before:absolute before:inset-0 before:-z-10 before:bg-white/5 before:rounded-lg before:backdrop-blur-sm before:ring-1 before:ring-white/10">
//       <div className="col-span-12 sm:col-span-4 pr-4">
//         <div className="inline-block -rotate-1 bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300 ring-1 ring-white/10">
//           Work Experience
//         </div>
//       </div>
//       <div className="col-span-12 sm:col-span-4 pr-4 mt-3 sm:mt-0">
//         <span className="font-medium">
//           <span className="font-semibold text-emerald-300/95">Real project simulation</span>
//         </span>
//       </div>
//       <div className="col-span-12 sm:col-span-4 mt-3 sm:mt-0">
//         <span className="inline-flex flex-wrap items-center gap-2">
//           <span className="rounded-full bg-white/10 px-2 py-0.5 text-sm">Job seekers</span>
//           <span className="rounded-full bg-white/10 px-2 py-0.5 text-sm">Final-year students</span>
//         </span>
//       </div>
//     </div>
//   </div>

// </section>

// {/* ================= SECTION 4: SKILLS THEY'LL LEARN (Magazine style) ================ */}
// <section
//   className=
//     "relative mx-auto w-[92%] max-w-[1200px] py-14 md:py-18 my-6 "
// >
//   {/* Kicker */}
//   <div className="flex items-center justify-center gap-3">
//     <span className="h-[1px] w-16 bg-white/15" />
//     <span className="rounded-full bg-sky-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-200 ring-1 ring-white/10">
//       Skills Overview
//     </span>
//     <span className="h-[1px] w-16 bg-white/15" />
//   </div>

//   {/* Hed row: SKILLS (left, info below) + optional illustration (right) */}
//   <div className="mt-8 grid gap-10 md:grid-cols-12 items-start">
//     {/* LEFT — Big word + intro */}
//     <div className="md:col-span-6 relative">
//       {/* Section label */}
//       <div className="mb-4 inline-block -rotate-1 rounded-sm bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200 ring-1 ring-white/10">
//         What kind of skills will they learn?
//       </div>

//       {/* Layered headline */}
//       <div className="relative leading-none">
//         <div className="absolute inset-0 translate-y-1 blur-[2px] opacity-40 text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-indigo-200 select-none pointer-events-none text-[9vw] md:text-[6rem] font-black">
//           SKILLS
//         </div>
//         <h3 className="relative text-[9vw] md:text-[6rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-indigo-200 drop-shadow-[0_2px_10px_rgba(56,189,248,0.35)]">
//           SKILLS
//         </h3>
//       </div>

//       {/* Intro deck with drop cap */}
//       <div className="mt-7 max-w-xl space-y-4 text-justify">
//         <p className="text-[1.08rem] md:text-[1.2rem] leading-8 tracking-[0.01em]">
//           <span className="float-left mr-2 inline-block font-serif text-6xl leading-[0.78] text-sky-200 drop-shadow-[0_2px_8px_rgba(56,189,248,0.35)] select-none">D</span>
//           epending on their <span className="font-semibold">track</span>, learners build a toolkit across{" "}
//           <span className="font-semibold">programming</span>, <span className="font-semibold">data</span>,{" "}
//           <span className="font-semibold">web &amp; cloud</span>, <span className="font-semibold">automation &amp; AI</span>, and{" "}
//           <span className="font-semibold">soft skills</span>.
//         </p>
//         <p className="text-[1.02rem] md:text-[1.12rem] leading-8">
//           These are the <span className="font-semibold">same skills companies look for</span> — regardless of degree.
//         </p>
//       </div>
//     </div>

//     {/* RIGHT — Optional illustration (replace image if available) */}
//     <div className="md:col-span-6">
//       <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] ring-1 ring-white/10 bg-white/5">
//         <Image
//           src="/images/Illustration/skills.png" // ← provide this illustration
//           alt="Magazine-style collage of programming, data, web, cloud, AI, and soft skills"
//           fill
//           className="object-contain p-4"
//           sizes="(max-width: 1200px) 100vw, 680px"
//         />
//       </div>
//     </div>
//   </div>

//   {/* Hairline */}
//   <div className="mx-auto my-10 h-px w-full bg-white/10" />

//   {/* Matrix — Magazine stripes (no cards) */}
//   <div aria-label="Skills Matrix" className="text-slate-100">
//     {/* Header row */}
//     <div className="grid grid-cols-12 items-end">
//       <div className="col-span-12 sm:col-span-4 pr-4">
//         <div className="text-[11px] uppercase tracking-[0.22em] text-slate-300">Skill Area</div>
//       </div>
//       <div className="col-span-12 sm:col-span-8 mt-4 sm:mt-0">
//         <div className="text-[11px] uppercase tracking-[0.22em] text-slate-300">Examples</div>
//       </div>
//     </div>

//     {/* Row — Programming */}
//     <div className="relative mt-4 grid grid-cols-12 items-center py-5 before:absolute before:inset-0 before:-z-10 before:bg-white/5 before:rounded-lg before:backdrop-blur-sm before:ring-1 before:ring-white/10">
//       <div className="col-span-12 sm:col-span-4 pr-4">
//         <span className="inline-block -rotate-1 bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200 ring-1 ring-white/10">
//           Programming
//         </span>
//       </div>
//       <div className="col-span-12 sm:col-span-8">
//         <span className="font-medium">
//           <span className="font-semibold text-sky-200/95">Python</span> or{" "}
//           <span className="font-semibold text-sky-200/95">Java</span> basics
//         </span>
//       </div>
//     </div>

//     {/* Row — Data Skills */}
//     <div className="relative mt-3 grid grid-cols-12 items-center py-5 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:rounded-lg before:ring-1 before:ring-white/10">
//       <div className="col-span-12 sm:col-span-4 pr-4">
//         <span className="inline-block rotate-1 bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200 ring-1 ring-white/10">
//           Data Skills
//         </span>
//       </div>
//       <div className="col-span-12 sm:col-span-8">
//         <span className="font-medium">
//           <span className="font-semibold text-cyan-200/95">Excel</span>,{" "}
//           <span className="font-semibold text-cyan-200/95">SQL</span>,{" "}
//           <span className="font-semibold text-cyan-200/95">Power BI</span>,{" "}
//           <span className="font-semibold text-cyan-200/95">Python Data</span>
//         </span>
//       </div>
//     </div>

//     {/* Row — Web & Cloud */}
//     <div className="relative mt-3 grid grid-cols-12 items-center py-5 before:absolute before:inset-0 before:-z-10 before:bg-white/5 before:rounded-lg before:backdrop-blur-sm before:ring-1 before:ring-white/10">
//       <div className="col-span-12 sm:col-span-4 pr-4">
//         <span className="inline-block -rotate-1 bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-200 ring-1 ring-white/10">
//           Web &amp; Cloud
//         </span>
//       </div>
//       <div className="col-span-12 sm:col-span-8">
//         <span className="font-medium">
//           <span className="font-semibold text-indigo-200/95">Simple websites</span>,{" "}
//           <span className="font-semibold text-indigo-200/95">hosting</span>,{" "}
//           <span className="font-semibold text-indigo-200/95">cloud tools</span>
//         </span>
//       </div>
//     </div>

//     {/* Row — Automation & AI */}
//     <div className="relative mt-3 grid grid-cols-12 items-center py-5 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:rounded-lg before:ring-1 before:ring-white/10">
//       <div className="col-span-12 sm:col-span-4 pr-4">
//         <span className="inline-block rotate-1 bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-fuchsia-200 ring-1 ring-white/10">
//           Automation &amp; AI
//         </span>
//       </div>
//       <div className="col-span-12 sm:col-span-8">
//         <span className="font-medium">
//           Real-world use of <span className="font-semibold text-fuchsia-200/95">ChatGPT</span>,{" "}
//           <span className="font-semibold text-fuchsia-200/95">AI workflows</span>
//         </span>
//       </div>
//     </div>

//     {/* Row — Soft Skills */}
//     <div className="relative mt-3 grid grid-cols-12 items-center py-5 before:absolute before:inset-0 before:-z-10 before:bg-white/5 before:rounded-lg before:backdrop-blur-sm before:ring-1 before:ring-white/10">
//       <div className="col-span-12 sm:col-span-4 pr-4">
//         <span className="inline-block -rotate-1 bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200 ring-1 ring-white/10">
//           Soft Skills
//         </span>
//       </div>
//       <div className="col-span-12 sm:col-span-8">
//         <span className="font-medium">
//           <span className="font-semibold text-emerald-200/95">Logical reasoning</span>,{" "}
//           <span className="font-semibold text-emerald-200/95">teamwork</span>,{" "}
//           <span className="font-semibold text-emerald-200/95">communication</span>
//         </span>
//       </div>
//     </div>
//   </div>

//   {/* Closing strapline */}
//   <div className="mt-10 text-center">
//     <span className="inline-block rounded-full bg-gradient-to-r from-sky-500/15 to-indigo-500/15 px-4 py-1.5 text-[12px] tracking-[0.18em] uppercase ring-1 ring-white/10">
//       Industry-relevant • Portfolio-ready • Degree-agnostic
//     </span>
//   </div>
// </section>
    

//     {/* =================== EDITORIAL: ZERO EXPERIENCE (Fixed margin note) =================== */}
// <section className="relative mx-auto w-[92%] max-w-[1200px] py-14 md:py-20">
  
//   {/* Section kicker */}
//   <div className="flex items-center gap-3 mb-8">
//     <span className="h-[1px] w-14 bg-white/15" />
//     <span className="text-[10px] uppercase tracking-[0.28em] text-sky-300/80">
//       Beginner Friendly
//     </span>
//     <span className="h-[1px] w-14 bg-white/15" />
//   </div>

//   <div className="grid gap-10 md:grid-cols-12 items-start">
    
//     {/* Left editorial text */}
//     <div className="relative md:col-span-7 md:pr-10">

//       {/* Margin note — visible only on LG screens */}
//       <span className="hidden lg:block absolute -left-14 top-3 rotate-[-90deg] text-[10px] tracking-[0.25em] text-slate-400 whitespace-nowrap">
//         Zero Coding Required
//       </span>

//       {/* For mobile/tablet — inline ribbon instead */}
//       <span className="lg:hidden inline-block mb-2 text-[10px] uppercase tracking-[0.28em] text-sky-300/80 bg-white/5 px-3 py-1 rounded-full ring-1 ring-white/10">
//         Zero Coding Required
//       </span>

//       <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-2">
//         Do they need <span className="text-sky-400">prior coding experience</span>?
//       </h3>

//       {/* Underline */}
//       <div className="h-[3px] w-24 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mb-6" />

//       <p className="text-[1.15rem] leading-[1.9rem] text-slate-200/95">
//         <span className="float-left mr-3 text-6xl font-serif text-sky-300 leading-[0.8] select-none">
//           N
//         </span>
//         ot at all. We assume <span className="font-semibold text-sky-300/90">zero technical background</span> and 
//         help students learn from the very basics. Everything starts with 
//         <span className="font-semibold text-indigo-300/90"> real-life examples</span> — no intimidation, no rush.
//       </p>

//       <p className="mt-5 text-[1.15rem] leading-[1.9rem] text-slate-200/95">
//         We focus on <span className="font-semibold">building confidence first</span>.
//         Students learn by doing — like learning a language by speaking daily.
//       </p>

//       {/* Strapline */}
//       <div className="mt-8 inline-flex gap-4 flex-wrap text-[11px] uppercase tracking-[0.22em]">
//         <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Start at Zero</span>
//         <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Real Examples</span>
//         <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Guided Practice</span>
//       </div>
//     </div>

//     {/* Right “poster style” type — no box, no BG */}
//     <div className="md:col-span-5 flex items-center justify-center">
//       <div className="text-center px-4">
//         <div className="uppercase text-[12px] tracking-[0.28em] text-slate-400 mb-2">
//           Myth
//         </div>
        
//         <div className="relative leading-none inline-block">
//           <div className="absolute inset-0 blur-[2px] opacity-40 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-indigo-300 text-[16vw] md:text-[8rem] font-black">
//             No
//           </div>
//           <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-indigo-300 text-[16vw] md:text-[8rem] font-black">
//             No
//           </div>
//         </div>

//         <h4 className="mt-2 text-xl md:text-2xl font-bold text-slate-200">
//           Coding Experience Needed
//         </h4>
//         <p className="mt-3 text-slate-300/90 text-sm md:text-base">
//           We teach from scratch — slowly, clearly, practically.
//         </p>
//       </div>
//     </div>
//   </div>

//   <div className="mt-14 h-[2px] w-full bg-white/5" />
// </section>


//        {/* =================== EDITORIAL: ONLINE OR OFFLINE =================== */}
// <section className="relative mx-auto w-[92%] max-w-[1200px] py-14 md:py-20">
//   {/* Kicker */}
//   <div className="flex items-center gap-3 mb-8">
//     <span className="h-[1px] w-14 bg-white/15" />
//     <span className="text-[10px] uppercase tracking-[0.28em] text-sky-300/80">
//       Delivery Mode
//     </span>
//     <span className="h-[1px] w-14 bg-white/15" />
//   </div>

//   <div className="grid gap-10 md:grid-cols-12 items-start">
//     {/* LEFT — Editorial copy */}
//     <div className="relative md:col-span-7 md:pr-10">
//       {/* Mobile/Tablet ribbon (replaces margin note) */}
//       <span className="lg:hidden inline-block mb-2 text-[10px] uppercase tracking-[0.28em] text-emerald-300/90 bg-white/5 px-3 py-1 rounded-full ring-1 ring-white/10">
//         100% Online
//       </span>

//       {/* Desktop margin note */}
//       <span className="hidden lg:block absolute -left-16 top-2 rotate-[-90deg] text-[10px] tracking-[0.25em] text-slate-400 whitespace-nowrap">
//         100% ONLINE
//       </span>

//       <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
//         Is this course <span className="text-sky-400">online</span> or offline?
//       </h3>

//       {/* Underline */}
//       <div className="mt-3 h-[3px] w-24 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" />

//       {/* Dek + lead paragraph with dropcap */}
//       <p className="mt-6 text-[1.1rem] leading-8 text-slate-200/95">
//         <span className="float-left mr-3 text-6xl font-serif text-sky-300 leading-[0.8] select-none">T</span>
//         he course is <span className="font-semibold text-emerald-300/95">fully online</span> and interactive,
//         designed for busy students who need structure without losing flexibility.
//       </p>

//       {/* Benefits list — magazine ticks, not cards */}
//       <ul className="mt-6 space-y-3 text-[1.05rem] leading-7 text-slate-200/95">
//         <li className="pl-7 relative">
//           <span className="absolute left-0 top-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/15">
//             <span className="text-[11px]">✓</span>
//           </span>
//           Live sessions with mentors
//         </li>
//         <li className="pl-7 relative">
//           <span className="absolute left-0 top-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/15">
//             <span className="text-[11px]">✓</span>
//           </span>
//           Recorded videos for revision
//         </li>
//         <li className="pl-7 relative">
//           <span className="absolute left-0 top-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/15">
//             <span className="text-[11px]">✓</span>
//           </span>
//           Flexible schedules to suit college calendars
//         </li>
//         <li className="pl-7 relative">
//           <span className="absolute left-0 top-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/15">
//             <span className="text-[11px]">✓</span>
//           </span>
//           Catch-up support for missed classes
//         </li>
//       </ul>

//       {/* Strapline */}
//       <div className="mt-7 inline-flex gap-4 flex-wrap text-[11px] uppercase tracking-[0.22em]">
//         <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Interactive</span>
//         <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Live + Recorded</span>
//         <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Flexible</span>
//       </div>
//     </div>

//     {/* RIGHT — Poster-style type (no card/bg panel) */}
//     <div className="md:col-span-5 flex items-center justify-center">
//       <div className="text-center px-4">
//         <div className="uppercase text-[12px] tracking-[0.28em] text-slate-400 mb-3">
//           Format
//         </div>

//         {/* Big “ONLINE” wordmark with soft shadow layer */}
//         <div className="relative inline-block leading-none">
//           <div className="absolute inset-0 blur-[2px] opacity-40 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-sky-300 text-[16vw] md:text-[8rem] font-black">
//             ONLINE
//           </div>
//           <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-sky-300 text-[16vw] md:text-[8rem] font-black drop-shadow-[0_3px_12px_rgba(56,189,248,0.25)]">
//             ONLINE
//           </div>
//         </div>

//         <p className="mt-3 text-slate-300/90 text-sm md:text-base">
//           Learn anywhere. Stay consistent. Get mentor support.
//         </p>
//          </div>
//         </div>
//       </div>

//       {/* Bottom hairline to blend with next section */}
//       <div className="mt-14 h-[2px] w-full bg-white/5" />
//     </section>

//     {/* =================== EDITORIAL: CERTIFICATION (High-Impact Infographic) =================== */}
// <section className="relative mx-auto w-[92%] max-w-[1200px] py-16 md:py-20">
//   {/* Kicker */}
//   <div className="flex items-center gap-3 mb-6">
//     <span className="h-[1px] w-14 bg-white/15" />
//     <span className="text-[10px] uppercase tracking-[0.28em] text-amber-300/90">
//       Certification
//     </span>
//     <span className="h-[1px] w-14 bg-white/15" />
//   </div>

//   <div className="grid gap-10 md:grid-cols-12 items-start">
//     {/* LEFT — Large headline + YES wordmark */}
//     <div className="md:col-span-6 md:pr-10">
//       <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
//         Will they get a <span className="text-amber-300">certificate</span>?
//       </h3>

//       {/* YES wordmark as a typographic poster (great for presentations) */}
//       <div className="relative mt-4 inline-block">
//         {/* soft shadow layer */}
//         <div className="absolute inset-0 translate-y-1 blur-[2px] opacity-40 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-emerald-300 text-[18vw] md:text-[9rem] font-black leading-none select-none">
//           YES
//         </div>
//         {/* foreground */}
//         <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-emerald-300 text-[18vw] md:text-[9rem] font-black leading-none drop-shadow-[0_4px_16px_rgba(251,191,36,0.22)]">
//           YES
//         </div>
//       </div>

//       {/* Dek */}
//       <p className="mt-6 text-[1.08rem] md:text-[1.18rem] leading-8 text-slate-200/95">
//         They’ll receive a <span className="font-semibold text-amber-300/95">TINITIATE Certified STEM Completion Certificate</span> — 
//         detailing the <span className="font-semibold">topics</span>, <span className="font-semibold">duration</span>, and <span className="font-semibold">projects</span> completed.
//       </p>

//       {/* “Adds real weight to” — inline infographic lanes (not cards) */}
//       <div className="mt-8 space-y-4 text-slate-100">
//         <div className="flex items-center gap-3">
//           <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white/15">
//             <span className="text-[11px]">✓</span>
//           </span>
//           <div className="text-lg">
//             <span className="font-semibold">Resumes</span>
//             <span className="mx-2 text-white/30">•</span>
//             ATS-friendly credential line
//           </div>
//         </div>
//         <div className="flex items-center gap-3">
//           <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white/15">
//             <span className="text-[11px]">✓</span>
//           </span>
//           <div className="text-lg">
//             <span className="font-semibold">LinkedIn profiles</span>
//             <span className="mx-2 text-white/30">•</span>
//             Shareable certificate link & badge
//           </div>
//         </div>
//         <div className="flex items-center gap-3">
//           <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white/15">
//             <span className="text-[11px]">✓</span>
//           </span>
//           <div className="text-lg">
//             <span className="font-semibold">Graduate applications</span>
//             <span className="mx-2 text-white/30">•</span>
//             Verifiable project portfolio
//           </div>
//         </div>
//       </div>

//       {/* Horizontal “spec bar” (topics • duration • projects) */}
//       <div className="mt-8">
//         <div className="h-[2px] w-full bg-white/10" />
//         <div className="grid grid-cols-3 gap-6 pt-4 text-center text-sm md:text-base">
//           <div className="space-y-1">
//             <div className="uppercase tracking-[0.22em] text-slate-400 text-[10px]">Topics</div>
//             <div className="font-semibold">Detailed coverage</div>
//           </div>
//           <div className="space-y-1">
//             <div className="uppercase tracking-[0.22em] text-slate-400 text-[10px]">Duration</div>
//             <div className="font-semibold">Course timeline</div>
//           </div>
//           <div className="space-y-1">
//             <div className="uppercase tracking-[0.22em] text-slate-400 text-[10px]">Projects</div>
//             <div className="font-semibold">Hands-on builds</div>
//           </div>
//         </div>
//       </div>

//       {/* Strapline */}
//       <div className="mt-7 inline-flex gap-3 flex-wrap text-[11px] uppercase tracking-[0.22em]">
//         <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Share-Ready</span>
//         <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Verifiable</span>
//         <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Portfolio-Aligned</span>
//       </div>
//     </div>

//     {/* RIGHT — “Certificate mock” infographic (pure CSS/SVG shapes, no card panel) */}
//     <div className="md:col-span-6">
//       <div className="relative mx-auto max-w-[560px] w-full">
//         {/* Ribbon */}
//         <div className="absolute -top-6 left-4 rotate-[-3deg]">
//           <span className="inline-block bg-gradient-to-r from-amber-400/90 to-rose-400/90 text-slate-900 font-bold px-3 py-1 rounded">
//             Official Certificate
//           </span>
//         </div>

//         {/* Paper frame */}
//         <div className="relative">
//           {/* outer border (engraved feel) */}
//           <div className="rounded-[22px] p-[2px] bg-gradient-to-r from-white/40 via-white/10 to-white/40">
//             <div className="rounded-[20px] p-6 md:p-8 bg-slate-900/40 ring-1 ring-white/10">
//               {/* inner border */}
//               <div className="rounded-[16px] p-5 md:p-6 bg-white/5 ring-1 ring-white/10">
//                 {/* header row */}
//                 <div className="flex items-center justify-between">
//                   <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-indigo-300 text-xl md:text-2xl font-extrabold tracking-tight">
//                     TINITIATE
//                   </div>
//                   {/* seal */}
//                   <div className="relative">
//                     <div className="h-14 w-14 rounded-full bg-gradient-to-br from-emerald-300 to-amber-300 opacity-90" />
//                     <div className="absolute inset-0 m-auto h-14 w-14 rounded-full ring-2 ring-white/50" />
//                     <div className="absolute inset-0 flex items-center justify-center text-slate-900 text-xs font-extrabold">
//                       ✓ CERT
//                     </div>
//                   </div>
//                 </div>

//                 {/* title */}
//                 <h4 className="mt-5 text-2xl md:text-3xl font-black tracking-tight">
//                   Certificate of <span className="text-amber-300">Completion</span>
//                 </h4>

//                 {/* recipient line (placeholder) */}
//                 <div className="mt-4 text-base md:text-lg">
//                   This certifies that
//                   <span className="mx-2 inline-block min-w-[8ch] border-b border-white/30 align-baseline" />
//                   has successfully completed the program.
//                 </div>

//                 {/* detail lanes (topics • duration • projects) */}
//                 <div className="mt-6 grid grid-cols-3 gap-4 text-xs md:text-sm">
//                   <div className="space-y-1">
//                     <div className="uppercase tracking-[0.22em] text-slate-400">Topics</div>
//                     <div className="font-semibold">Attached sheet</div>
//                   </div>
//                   <div className="space-y-1">
//                     <div className="uppercase tracking-[0.22em] text-slate-400">Duration</div>
//                     <div className="font-semibold">MM YYYY – MM YYYY</div>
//                   </div>
//                   <div className="space-y-1">
//                     <div className="uppercase tracking-[0.22em] text-slate-400">Projects</div>
//                     <div className="font-semibold">Portfolio links</div>
//                   </div>
//                 </div>

//                 {/* sign + QR row */}
//                 <div className="mt-8 flex items-end justify-between">
//                   <div>
//                     <div className="h-[1px] w-40 bg-white/30" />
//                     <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
//                       Program Director
//                     </div>
//                   </div>
//                   {/* QR placeholder box (replace with an actual Image if you have it) */}
//                   <div className="h-16 w-16 ring-1 ring-white/20 bg-white/5 grid place-items-center text-[10px] text-slate-400">
//                     QR
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* corner accents */}
//           <div className="pointer-events-none absolute -top-3 -left-3 h-6 w-6 rotate-45 bg-amber-300/30 blur-[2px]" />
//           <div className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 rotate-45 bg-emerald-300/30 blur-[2px]" />
//         </div>

//         {/* Caption */}
//         <p className="mt-4 text-center text-sm text-slate-300/80">
//           Share-ready digital certificate • Printable with unique verification
//         </p>
//       </div>
//     </div>
//   </div>

//   {/* Bottom hairline */}
//   <div className="mt-14 h-[2px] w-full bg-white/5" />
// </section>
  

//        {/* =================== SECTION: CAREER CONFUSION (Fashion Editorial Style) =================== */}
// <section className="relative mx-auto w-[92%] max-w-[1200px] py-20 md:py-28">

//   {/* Soft luxury vignette glow */}
//   <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/5 via-transparent to-white/5 opacity-30" />

//   {/* Header Kicker */}
//   <div className="flex items-center gap-3 mb-10">
//     <span className="h-px w-10 bg-white/20" />
//     <span className="text-[10px] tracking-[0.3em] uppercase text-pink-300 font-semibold">Future Direction</span>
//     <span className="h-px w-10 bg-white/20" />
//   </div>

//   <div className="grid md:grid-cols-12 gap-10 items-center">

//     {/* Left — Fashion headline + Paragraph */}
//     <div className="md:col-span-6 space-y-8">
      
//       {/* Fashion Magazine Wordmark */}
//       <div className="relative">
//         {/* Shadow */}
//         <h2 className="absolute -top-1 left-0 text-[18vw] md:text-[10rem] opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-200 to-indigo-200 font-black tracking-tight leading-none blur-[3px] select-none">
//           UNSURE?
//         </h2>
//         {/* Foreground */}
//         <h2 className="relative text-[18vw] md:text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-white to-fuchsia-200 font-black tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(255,100,200,0.35)]">
//           UNSURE?
//         </h2>
//       </div>

//       {/* Editorial Copy */}
//       <p className="text-[1.2rem] md:text-[1.35rem] leading-[2rem] text-slate-200/95 font-light italic">
//         Not knowing your path is not a weakness —it&apos;s the beginning of discovery.
//       </p>

//       <p className="text-[1.08rem] md:text-[1.18rem] leading-8 text-slate-200/90">
//         Our mentors help students uncover strengths, explore interests,
//         and select the right direction — not force one.
//       </p>

//       {/* Fashion quote */}
//       <blockquote className="text-lg md:text-xl tracking-wide text-fuchsia-200 font-semibold border-l-2 border-pink-300 pl-4 italic">
//         “Confidence is a journey — not a starting point.”
//       </blockquote>
//     </div>

//     {/* Right — Vertical Fancy Keywords (like runway fashion text) */}
//     <div className="md:col-span-6">
//       <div className="relative flex flex-col gap-8 pt- md:pt-0">

//         {/* runway line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-fuchsia-400/50 to-indigo-400/30"></div>

//         {/* Paths */}
//         {[
//           "Web & App Development",
//           "Data Analysis",
//           "Cloud / Automation",
//           "Business Analytics"
//         ].map((item, idx) => (
//           <div key={idx} className="relative flex items-center justify-center">
//             <span className="text-xl md:text-2xl font-semibold tracking-wide uppercase bg-gradient-to-r from-pink-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
//               {item}
//             </span>
//           </div>
//         ))}

//         {/* bottom style marker */}
//         <div className="mt-4 text-center">
//           <span className="inline-block px-6 py-1 rounded-full text-[11px] tracking-[0.22em] uppercase bg-white/10 ring-1 ring-white/20 text-pink-200 backdrop-blur-sm">
//             Find Their Fit
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//    {/* =================== SECTION: BREAKS & SUPPORT (Calm Editorial) =================== */}
// <section className="relative mx-auto w-[92%] max-w-[1200px] py-20 md:py-28">

//   {/* soft warm vignette */}
//   <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,200,150,0.08),transparent_70%)]"></div>

//   {/* section kicker */}
//   <div className="flex items-center gap-3 mb-10">
//     <span className="h-px w-10 bg-white/15"></span>
//     <span className="text-[10px] tracking-[0.3em] uppercase text-amber-300 font-semibold">
//       Student Support
//     </span>
//     <span className="h-px w-10 bg-white/15"></span>
//   </div>

//   <div className="grid md:grid-cols-12 gap-10 items-center">

//     {/* Left — text */}
//     <div className="md:col-span-6 space-y-7">

//       {/* Big emotional headline */}
//       <div className="relative mb-6">
//         {/* shimmer shadow */}
//         <div className="absolute inset-0 translate-y-1 blur-sm text-[15vw] md:text-[8rem] font-black opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-yellow-200 select-none leading-none">
//           LIFE
//         </div>
//         {/* foreground */}
//         <h2 className="relative text-[15vw] md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-yellow-200 leading-none tracking-tight drop-shadow-[0_4px_10px_rgba(255,200,150,0.35)]">
//           LIFE
//         </h2>
//       </div>

//       {/* Sub-heading */}
//       <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
//         How do you handle breaks for exams or family reasons?
//       </h3>

//       {/* Editorial paragraphs */}
//       <p className="text-[1.15rem] leading-8 text-slate-200/90">
//         We understand student life — exams, festivals, health, family moments.  
//         Learning should support life, not stress it.
//       </p>

//       <p className="text-[1.1rem] leading-8 text-slate-200/90">
//         Your child can pause when needed and come back without losing pace.
//         We stand with them, not against their schedule.
//       </p>

//       {/* bullet but editorial style */}
//       <ul className="mt-4 space-y-3 text-lg text-slate-200/90">
//         <li className="flex gap-3">
//           <span className="text-amber-300 font-bold">—</span> Pause & rejoin later
//         </li>
//         <li className="flex gap-3">
//           <span className="text-amber-300 font-bold">—</span> Access recordings to catch up
//         </li>
//         <li className="flex gap-3">
//           <span className="text-amber-300 font-bold">—</span> Personal mentor guidance to ease back in
//         </li>
//       </ul>

//       {/* pull quote */}
//       <blockquote className="pt-6 text-lg italic text-amber-200 font-semibold border-l-2 border-amber-300 pl-4">
//         “Life happens. Education should adapt — not punish.”
//       </blockquote>
//     </div>

//     {/* Right — soft illustration placement */}
//     <div className="md:col-span-6">
//       <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
//         <Image
//           src="/images/Illustration/breaks-support.svg"
//           alt="Students resting and balancing life & learning"
//           fill
//           className="object-contain p-6"
//         />
//       </div>
//     </div>
//   </div>
// </section>


//       {/* =================== END SINGLE PAGE =================== */}
//     </main>
//   );
// }













// File: src/app/faq/why-tinitiate/parents-nonstem/page.jsx
import Link from "next/link";
import Script from "next/script";
import FAQList from "../../components/FAQList";
import faqData from "../../../../public/data/faq/parentsFaqNonStem.json";

export const metadata = {
  title: "Parent FAQ — Why Tech Skills Matter for Non-STEM Students | TINITIATE",
  description:
    "Clear answers for parents of non-IT/non-STEM students: why tech skills matter in every career, what TINITIATE teaches, and how beginners succeed with hands-on projects.",
  openGraph: {
    title: "Parent FAQ — Why Tech Skills Matter for Non-STEM Students",
    description:
      "Why tech matters beyond Computer Science, what we teach, career benefits, and how beginners succeed.",
    url: "https://www.tinitiate.com/faq/why-tinitiate/parents-nonstem",
    siteName: "TINITIATE",
    type: "article",
  },
};

// Helper to flatten blocks for JSON-LD
function flattenBlocksToText(blocks) {
  if (!Array.isArray(blocks)) return "";
  const parts = [];
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;

    if (b.type === "p" && typeof b.text === "string") parts.push(b.text);

    if (b.type === "ul" && Array.isArray(b.items)) {
      parts.push(b.items.filter((x) => typeof x === "string").join("; "));
    }

    if (b.type === "table" && Array.isArray(b.rows)) {
      const header = Array.isArray(b.headers) ? b.headers : [];
      parts.push(
        b.rows
          .map((row) =>
            Array.isArray(row)
              ? row
                  .map((cell, i) =>
                    header[i] ? `${header[i]}: ${cell}` : String(cell ?? "")
                  )
                  .join(" | ")
              : ""
          )
          .join("; ")
      );
    }
  }
  return parts.join(" ");
}

export default function Page() {
  const { updatedAt, faqs } = faqData;

  // Normalize: ensure blocks is always an array
  const normalizedFaqs = (Array.isArray(faqs) ? faqs : []).map((f) => ({
    ...f,
    blocks: Array.isArray(f?.blocks) ? f.blocks : [],
  }));

  // Optional label if you want to show "Updated:" somewhere
  const updatedAtLabel = new Date(`${updatedAt}T00:00:00+05:30`).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Kolkata" }
  );

  // Top explainer (shown + included in JSON-LD)
  const topTitle = "Why should Non-STEM students learn technology?";
  const topAnswerText =
    "Because every career today runs on technology — from finance and marketing to design, HR, and operations. You don’t have to become a programmer: understanding digital tools and thinking logically makes you more effective in ANY field. TINITIATE focuses on beginner-friendly, hands-on learning: small projects that build confidence (Excel→Python automation, data analysis, simple apps, or IoT demos), then larger, resume-ready work. This approach improves problem-solving, creates a portfolio for internships, and prepares students to contribute on Day 1.";

  // JSON-LD
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: topTitle,
        acceptedAnswer: { "@type": "Answer", text: topAnswerText },
      },
      ...normalizedFaqs.map((f) => ({
        "@type": "Question",
        name: f.title,
        acceptedAnswer: { "@type": "Answer", text: flattenBlocksToText(f.blocks) },
      })),
    ],
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-16 md:pt-16">
      {/* ===== Hero ===== */}
      <section className="mx-auto w-[92%] max-w-[1200px] pb-6">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-sky-50 to-white p-7 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              For Parents (Non-IT / Non-STEM)
            </p>
            {/* <p className="text-xs text-gray-500">Updated: {updatedAtLabel} (IST)</p> */}
          </div>

          <h1 className="mt-2 text-2xl font-extrabold leading-tight md:text-4xl">
            Parent FAQ — Why Tech Skills Matter for Non-STEM Students
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Why technology skills matter in every career, what we teach at TINITIATE,
            and how beginners from any stream can build confidence through projects.
          </p>

          {/* Quick value chips */}
          <ul className="mt-5 flex flex-wrap gap-2">
            {[
              "Beginner-friendly (Zero coding required)",
              "Live + Recordings • Hands-on projects",
              "Mentor-led • 1-to-1 Doubt Clearing",
            ].map((t) => (
              <li
                key={t}
                className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-800 shadow-sm"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* CTA Row */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/request-callback"
              className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Talk to a Mentor
            </Link>
            <Link
              href="/work-experience-program"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              Explore Work Experience Program
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Layout ===== */}
      <div className="mx-auto grid w-[92%] max-w-[1200px] gap-8 md:grid-cols-12 ">
        
        {/* ===== ToC ===== */}
        <aside className="hidden md:col-span-3 md:block mb-6">
          <div className="sticky top-20">
            <nav
              aria-label="On this page"
              className="rounded-2xl border border-gray-200 p-4"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
                On this page
              </p>

              <ul
                className="
                  mt-2 text-sm border border-gray-200 rounded-xl
                  overflow-x-hidden md:overflow-y-auto
                  md:max-h-[calc(100vh-10rem)]
                  overscroll-contain
                "
              >
                {/* Top explainer first */}
                <li className="border-b">
                  <a
                    className="block px-3 py-2 hover:bg-gray-50 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                    href="#why-nonstem-tech"
                  >
                    {topTitle}
                  </a>
                </li>

                {/* Then the rest of the FAQs */}
                {normalizedFaqs.map((f) => (
                  <li key={`toc-${f.id}`} className="border-b last:border-b-0">
                    <a
                      className="block px-3 py-2 hover:bg-gray-50 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                      href={`#${f.id}`}
                    >
                      {f.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* ===== Main column ===== */}
        <section className="md:col-span-9 space-y-8 ">
          
          {/* --- Top Explainer Card ---
          <article
            id="why-nonstem-tech"
            aria-labelledby="nonstem-title"
            className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6"
          >
            <h2 id="nonstem-title" className="text-xl font-bold md:text-2xl">
              Tech skills make non-STEM students more effective in any career
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Non-STEM students don’t need to become programmers. Learning{" "}
              <strong>digital tools and project-based problem-solving</strong> helps in
              every role — marketing, finance, design, HR, operations. We begin with{" "}
              <strong>small, confidence-building projects</strong> (Excel→Python automation,
              data analysis dashboards, simple apps/IoT demos), then guide students to{" "}
              <strong>portfolio-ready work</strong> useful for internships and interviews.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-sm font-semibold text-gray-900">Examples we build</h3>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li>• Automate attendance or reports (Excel → Python).</li>
                    <li>• Create a mini website or simple app.</li>
                    <li>• Analyse cricket/finance data with visual dashboards.</li>
                    <li>• Try a tiny IoT sensor demo (optional).</li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <h3 className="text-sm font-semibold text-gray-900">Why this helps</h3>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li>• Stronger problem-solving & logical thinking.</li>
                    <li>• A practical portfolio for internships.</li>
                    <li>• Confidence for interviews & on-the-job tasks.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article> */}

          {/* --- FAQ List --- */}
          <FAQList faqs={normalizedFaqs} />

          {/* --- Bottom CTA --- */}
          <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-5 md:p-6 mb-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Still have a question?</h3>
                <p className="text-sm text-gray-600">
                  We’ll match your child’s background with the right path — without pressure.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/request-callback"
                  className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                >
                  Talk to a Mentor
                </Link>
                <Link
                  href="/work-experience-program"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
                >
                  Explore WEP
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <Script
        id="faq-jsonld-nonstem"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </main>
  );
}
