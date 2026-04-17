"use client";

import Link from "next/link";
import { FiCheckCircle, FiUsers, FiClipboard, FiAward } from "react-icons/fi";
import {
  SiAwsamplify, SiSnowflake, SiPython, SiApacheairflow, SiApachekafka, SiApachespark, SiTerraform, SiDocker, SiKubernetes, SiGit, SiGithubactions,
  SiJenkins, SiSpring, SiHibernate, SiNextdotjs, SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiPostgresql, SiMysql, SiVercel, SiGooglecloud 
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FiArrowRight,FiPhone, FiCpu, FiDatabase, FiLayers, FiTool, FiSearch, FiActivity, FiBarChart2, FiZap, FiGitBranch, FiFileText } from "react-icons/fi";

import { SiDatabricks } from "react-icons/si";


const STACK_TECH = {
  // Frontend (Full Stack Web)
  html: { name: "HTML5", Icon: SiHtml5, color: "text-orange-600" },
  css: { name: "CSS3", Icon: SiCss3, color: "text-blue-600" },
  js: { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-500" },
  ts: { name: "TypeScript", Icon: SiTypescript, color: "text-sky-600" },
  react: { name: "React", Icon: SiReact, color: "text-cyan-600" },
  next: { name: "Next.js", Icon: SiNextdotjs, color: "text-gray-900" },

  // Backend (Web)
  node: { name: "Node.js", Icon: SiNodedotjs, color: "text-green-700" },

  // Full Stack Java
  java: { name: "Java", Icon: FiCpu, color: "text-red-600" },
  springboot: { name: "Spring Boot", Icon: SiSpring, color: "text-green-700" },
  hibernate: { name: "Hibernate / JPA", Icon: SiHibernate, color: "text-amber-700" },

  // Databases (used across tracks)
  postgres: { name: "PostgreSQL", Icon: SiPostgresql, color: "text-indigo-700" },
  mysql: { name: "MySQL", Icon: SiMysql, color: "text-blue-700" },
  sql: { name: "SQL", Icon: FiDatabase, color: "text-blue-400" },

  // Cloud (Tracks)
  aws: { name: "AWS", Icon: FaAws, color: "text-orange-600" },
  amplify: { name: "AWS Amplify", Icon: SiAwsamplify, color: "text-orange-600" },
  gcp: { name: "Google Cloud", Icon: "SiGooglecloud", img: "/images/courses/google-cloud.png" },

  // Azure as image (no icon import needed)
  azure: { name: "Azure", Icon: "none", img: "/images/courses/microsoftAzure.png" },

  // Hosting / Deployment (Full Stack Web)
  vercel: { name: "Vercel", Icon: SiVercel, color: "text-gray-900" },

  // DevOps / CI-CD (relevant to Cloud + Full Stack)
  git: { name: "Git", Icon: SiGit, color: "text-orange-600" },
  gha: { name: "GitHub Actions", Icon: SiGithubactions, color: "text-gray-900" },
  jenkins: { name: "Jenkins", Icon: SiJenkins, color: "text-red-700" },
  docker: { name: "Docker", Icon: SiDocker, color: "text-sky-600" },
  k8s: { name: "Kubernetes", Icon: SiKubernetes, color: "text-blue-600" },
  terraform: { name: "Terraform", Icon: SiTerraform, color: "text-purple-700" },

  // Data Engineering (On-Prem + Cloud)
  python: { name: "Python", Icon: SiPython, color: "text-yellow-500" },
  airflow: { name: "Apache Airflow", Icon: SiApacheairflow, color: "text-sky-600" },
  kafka: { name: "Apache Kafka", Icon: SiApachekafka, color: "text-gray-900" },
  spark: { name: "Apache Spark", Icon: SiApachespark, color: "text-orange-600" },
  pyspark: { name: "PySpark", Icon: SiApachespark, color: "text-orange-600" },

  // Snowflake track
  snowflake: { name: "Snowflake", Icon: SiSnowflake, color: "text-sky-600" },
  snowpark: { name: "Snowpark", Icon: "none", img: "/images/courses/snowpark.png" },
  snowpipe: { name: "Snowpipe", Icon: "none", img: "/images/courses/snowpipe.png" },

  // Formats (Data Engineering)
  csv: { name: "CSV", Icon: FiFileText, color: "text-slate-700" },
  json: { name: "JSON", Icon: FiFileText, color: "text-slate-700" },
  xml: { name: "XML", Icon: FiFileText, color: "text-slate-700" },
  parquet: { name: "Parquet", Icon: FiFileText, color: "text-slate-700" },
  avro: { name: "Avro", Icon: FiFileText, color: "text-slate-700" },

  // AWS Services (Cloud/Data Eng)
  s3: { name: "Amazon S3", Icon: FiLayers, color: "text-slate-800" },
  glue: { name: "AWS Glue", Icon: FiTool, color: "text-slate-800" },
  emr: { name: "AWS EMR", Icon: FiCpu, color: "text-slate-800" },
  athena: { name: "Amazon Athena", Icon: FiSearch, color: "text-slate-800" },
  kinesis: { name: "Amazon Kinesis", Icon: FiActivity, color: "text-slate-800" },
  redshift: { name: "Amazon Redshift", Icon: FiBarChart2, color: "text-slate-800" },
  rds: { name: "Amazon RDS", Icon: FiDatabase, color: "text-slate-800" },
  lambda: { name: "AWS Lambda", Icon: FiZap, color: "text-slate-800" },
  stepfunctions: { name: "Step Functions", Icon: FiGitBranch, color: "text-slate-800" },

  // Azure Data Engineering (Cloud/Data Eng)
  adls: { name: "ADLS Gen2", Icon: FiLayers, color: "text-slate-800" },
  adf: { name: "Azure Data Factory", Icon: FiTool, color: "text-slate-800" },
  databricks: { name: "Azure Databricks", Icon: SiDatabricks, color: "text-red-600" },
  synapse: { name: "Azure Synapse", Icon: FiDatabase, color: "text-slate-800" },
  eventhubs: { name: "Azure Event Hubs", Icon: FiActivity, color: "text-slate-800" },
  streamanalytics: { name: "Azure Stream Analytics", Icon: FiBarChart2, color: "text-slate-800" },
  functions: { name: "Azure Functions", Icon: FiZap, color: "text-slate-800" },
  logicapps: { name: "Azure Logic Apps", Icon: FiGitBranch, color: "text-slate-800" },
  delta: { name: "Delta Lake", Icon: FiLayers, color: "text-slate-800" },

  // Analytics track
  powerbi: { name: "Power BI", Icon: FiBarChart2, color: "text-yellow-500" },
};

// -------------------- HERO --------------------
const HERO = {
  title: "OPT Training Program for International Students",
  subtitle:
    "Job-ready training for F-1 OPT & STEM OPT students with real projects, mentorship, and interview prep.",
  badge: "F-1 / STEM OPT Friendly",
};

// -------------------- WHY OPT --------------------
const WHY_OPT = [
  "Job-role focused tracks (not generic tutorials)",
  "Hands-on projects + GitHub-ready portfolio",
  "Assignments with mentor feedback",
  "Resume & LinkedIn optimization",
  "Mock interviews (Technical + HR)",
  "OPT-friendly schedules (evenings / weekends)",
];

// -------------------- TRACKS --------------------
// const TRACKS = [
//   {
//     title: "Data Engineering (SQL + Python + ETL)",
//     href: "/courses/sql-server-beginner-course",
//     points: [
//       "Advanced SQL & Python for data",
//       "ETL pipelines & data modeling",
//       "Capstone data pipeline project",
//     ],
//   },
//   {
//     title: "Cloud Engineering (AWS + Azure)",
//     href: "/courses/aws-beginner-course",
//     points: [
//       "Cloud foundations & IAM security",
//       "Deploy, monitor & scale workloads",
//       "Real-world cloud project",
//     ],
//   },
//   {
//     title: "Snowflake (SQL + Python + ETL)",
//     href: "/courses/python-language-course",
//     points: [
//       "Snowflake architecture & performance tuning",
//       "Advanced SQL & Python integration",
//       "Enterprise-grade ETL pipelines",
//     ],
//   },
//   {
//     title: "Full Stack Web (Next.js + Postgres + Azure)",
//     href: "/courses/nextjs-beginner-course",
//     points: [
//       "Next.js full-stack applications",
//       "PostgreSQL schema & APIs",
//       "Azure deployment & scaling",
//     ],
//   },
//   {
//     title: "Full Stack (Java + React)",
//     href: "/courses/java-language-course",
//     points: [
//       "Spring Boot REST APIs",
//       "React frontend architecture",
//       "Authentication & deployment",
//     ],
//   },
//   {
//     title: "Analytics (Power BI + SQL)",
//     href: "/courses/powerbi-beginner-course", 
//     points: [
//       "SQL reporting & modeling",
//       "Power BI dashboards & DAX",
//       "Portfolio-ready analytics project",
//     ],
//   },
// ];


const TRACKS = [
  {
    title: "AWS Cloud Engineering",
    iconKey: "aws",
    href: "/courses/aws-beginner-course",
    points: [
      "Cloud foundations & IAM security",
      "Deploy, monitor & scale workloads",
      "Real-world cloud project",
    ],
  },
  {
    title: "Azure Cloud Engineering",
    iconKey: "azure",
    href: "/courses/microsoft-azure-beginner-course",
    points: [
      "Cloud foundations & IAM security",
      "Deploy, monitor & scale workloads",
      "Real-world cloud project",
    ],
  },
  {
    title: "Snowflake Cloud Engineering",
    iconKey: "snowflake",
    href: "/courses/snowflake-course",
    points: [
      "Snowflake Architecture, SQL Optimization & Python Integration",
      "Advanced SQL Queries & Python-Based Data Processing",
      "Enterprise-Scale ETL Pipelines & Dimensional Data Modeling",
    ],
  },
  {
    title: "GCP Cloud Engineering",
    iconKey: "gcp",
    href: "/courses/gcp-beginner-course",
    points: [
      "Cloud foundations & IAM security",
      "Deploy, monitor & scale workloads",
      "Real-world cloud project",
    ],
  },
  {
    title: "On-Prem Data Engineering (SQL + Python)",
    iconKey: "sql",
    href: "/courses/sql-server-beginner-course",
    points: [
      "Advanced SQL & Python for data",
      "ETL pipelines & data modeling",
      "Capstone data pipeline project",
    ],
  },
  {
    title: "Full Stack Web",
    iconKey: "next",
    href: "/courses/nextjs-beginner-course",
    points: [
      "Full-Stack Web Development (Next.js, PostgreSQL & Azure Cloud)",
      "Cloud Foundations & Identity / Access Management (IAM)",
      "Deploy, Monitor & Scale Cloud-Native Applications",
    ],
  },
  {
    title: "Full Stack Java",
    iconKey: "springboot",
    href: "/courses/java-language-course",
    points: [
      "Spring Boot APIs",
      "React / Next.js frontend",
      "Auth, integrations & deployment",
    ],
  },
  {
    title: "Power BI + SQL",
    iconKey: "powerbi",
    href: "/courses/powerbi-beginner-course",
    points: [
      "SQL-based reporting",
      "Dashboards & DAX basics",
      "Portfolio-ready analytics project",
    ],
  },
];


// -------------------- AI SECTION --------------------
const AI_POINTS = [
  "Faster learning with real-world examples",
  "Code scaffolding & refactoring",
  "Debugging & performance optimization",
  "Project design: schemas, APIs & pipelines",
  "Professional documentation (README & architecture)",
  "AI-powered mock interviews",
  "Responsible & industry-safe AI usage",
];

// -------------------- FLOW (INFOGRAPHIC DATA) --------------------
const FLOW = [
  { step: 1, title: "Foundation & Assessment", desc: "Skill refresh, tools setup & baseline assessment", duration: "Week 1–2", icon: <FiClipboard /> },
  { step: 2, title: "Track Training", desc: "Core skills, assignments & mini projects", duration: "Week 3–6", icon: <FiLayers /> },
  { step: 3, title: "Capstone Project", desc: "Real-world project & portfolio polish", duration: "Week 7–10", icon: <FiUsers /> },
  { step: 4, title: "Career Readiness", desc: "Resume, LinkedIn & mock interviews", duration: "Final Phase", icon: <FiAward /> },
];

// -------------------- FAQ --------------------
const FAQ = [
  { q: "Can I join if I am already on OPT and working?", a: "Yes. Our schedules are OPT-friendly and suitable for working professionals." },
  { q: "Do you guarantee a job?", a: "No job guarantees. We focus on skills, portfolio, and interview readiness." },
  { q: "Is the training remote?", a: "Yes. 100% online with mentor support." },
  { q: "Do you provide immigration or legal advice?", a: "No. Always consult your DSO or immigration attorney." },
];

// -------------------- TRACK CARD --------------------
function OptTrackCard({ track }) {
const tech = STACK_TECH[track.iconKey];

  return (
    // <Link
    // <div
    //   // href={track.href}   
    //   className="group block rounded-2xl border bg-gray-50 p-6 transition hover:bg-white hover:shadow-md"
    // >
    //   <h3 className="text-lg font-semibold group-hover:text-indigo-600">{track.title}</h3>
    //   <ul className="mt-3 space-y-2 text-sm text-gray-700">
    //     {track.points.map((p) => (
    //       <li key={p} className="flex gap-2">
    //         <FiCheckCircle className="mt-0.5 text-indigo-600" />
    //         {p}
    //       </li>
    //     ))}
    //   </ul>
    //   <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
    //     View curriculum <FiArrowRight />
    //   </div>
    // {/* </Link> */}
    // </div>

    <div className="group block rounded-2xl border bg-gray-50 p-6 transition hover:bg-white hover:shadow-md">
      <h3 className="text-lg font-semibold group-hover:text-indigo-600 inline-flex items-center gap-2">
  <span className="inline-flex h-7 w-7  items-center justify-center">
  {tech?.img ? (
    <img src={tech.img} alt={tech.name} className="h-8 w-8 object-contain" />
  ) : tech?.Icon ? (
    <tech.Icon className={`${tech.color} h-8 w-8`} />
  ) : null}
</span>

        <span>{track.title}</span>
      </h3>

      <ul className="mt-3 space-y-2 text-sm text-gray-700">
        {track.points.map((p) => (
          <li key={p} className="flex gap-2">
            <FiCheckCircle className="mt-0.5 text-indigo-600" />
            {p}
          </li>
        ))}
      </ul>
      <Link
        href={track.href || "/request-callback"}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
      >
        View curriculum <FiArrowRight />
      </Link>
    </div>
  );
}

// -------------------- PAGE --------------------
export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative bg-black px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-xs text-white">{HERO.badge}</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">{HERO.title}</h1>
          <p className="mt-4 max-w-2xl text-slate-300">{HERO.subtitle}</p>

          <div className="mt-8 flex gap-4">
            <Link href="/request-callback" className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700">Talk to a Mentor</Link>
            <Link href="/request-callback" className="rounded-full border border-indigo-400 px-6 py-3 text-sm text-indigo-200 hover:bg-indigo-600 hover:text-white">
              Request Callback <FiPhone className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY OPT */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">Why OPT students choose TINITIATE</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {WHY_OPT.map((item) => (
              <div key={item} className="flex gap-3 bg-white border p-4 rounded-xl">
                <FiCheckCircle className="text-emerald-500 mt-1" /> <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Choose your OPT Track</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TRACKS.map((track) => (
              <OptTrackCard
              // key={track.href} 
              key={track.title} 
              track={track} />
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">AI Support for OPT Students</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {AI_POINTS.map((p) => (
              <div key={p} className="flex gap-2 bg-white border p-4 rounded-xl">
                <FiCheckCircle className="text-emerald-500 mt-1" /> <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFOGRAPHIC FLOW */}
      <section id="flow" className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Program Flow</h2>
          <div className="grid md:grid-cols-4 gap-10">
            {FLOW.map((step, index) => (
              <div key={step.step} className="relative text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white text-xl">{step.icon}</div>
                <div className="text-sm font-semibold text-indigo-600">Step {step.step}</div>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
                <p className="mt-2 text-xs text-gray-500">{step.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="border rounded-2xl p-5 bg-white">
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-sm text-gray-700">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
