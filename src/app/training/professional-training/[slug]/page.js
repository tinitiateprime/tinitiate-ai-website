// import Link from "next/link";
// import path from "path";
// import { readFile } from "fs/promises";
// import { notFound } from "next/navigation";

// const BASE = "/training/professional-training";

// async function loadSyllabus() {
//   try {
//     const filePath = path.join(
//       process.cwd(),
//       "public",
//       "data",
//       "professional-training-syllabus.json"
//     );
//     const raw = await readFile(filePath, "utf8");
//     return JSON.parse(raw);
//   } catch {
//     return null;
//   }
// }

// export async function generateStaticParams() {
//   const data = await loadSyllabus();
//   return (data?.courses || []).map((c) => ({
//     slug: c.key, // ✅ must match [slug]
//   }));
// }

// export async function generateMetadata({ params }) {
//   // ✅ Next.js 16: params is Promise
//   const { slug } = await params;

//   const data = await loadSyllabus();
//   const key = decodeURIComponent(slug || "");
//   const course = (data?.courses || []).find((c) => c.key === key);

//   return {
//     title: course ? `${course.title} | TINITIATE` : "Course | TINITIATE",
//     description: course?.subtitle || "Professional Training course details",
//   };
// }

// export default async function Page({ params }) {
//   // ✅ Next.js 16: params is Promise
//   const { slug } = await params;

//   const data = await loadSyllabus();
//   if (!data) return notFound();

//   const key = decodeURIComponent(slug || "");
//   const course = (data.courses || []).find((c) => c.key === key);
//   if (!course) return notFound();

//   return (
//     <main className="bg-white text-gray-900">
//       {/* Header */}
//       <section className="border-b bg-gray-50 px-6 py-10">
//         <div className="mx-auto max-w-5xl">
//           <Link
//             href={BASE}
//             className="text-sm font-semibold text-indigo-600 hover:underline"
//           >
//             ← Back to Professional Training
//           </Link>

//           <div className="mt-4">
//             <div className="inline-flex flex-wrap items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold text-gray-700">
//               {course.category || "Professional Training"}
//               {course.level ? (
//                 <>
//                   <span className="h-3 w-px bg-gray-200" />
//                   {course.level}
//                 </>
//               ) : null}
//               {course.mode ? (
//                 <>
//                   <span className="h-3 w-px bg-gray-200" />
//                   {course.mode}
//                 </>
//               ) : null}
//             </div>

//             <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
//               {course.title}
//             </h1>

//             {course.subtitle ? (
//               <p className="mt-2 text-sm text-gray-600">{course.subtitle}</p>
//             ) : null}

//             <div className="mt-6 grid gap-3 sm:grid-cols-3">
//               <Stat label="Duration" value={course.duration || "—"} />
//               <Stat label="Projects" value={`${course.projects?.length || 0}+`} />
//               <Stat label="Capstone" value={course.capstone?.title || "Yes"} />
//             </div>

//             <div className="mt-6 flex flex-wrap gap-3">
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
//               >
//                 Schedule a counselling call
//               </Link>

//               {course.brochure_url ? (
//                 <a
//                   href={course.brochure_url}
//                   className="inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-semibold hover:bg-white"
//                 >
//                   Download brochure
//                 </a>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Body */}
//       <section className="px-6 py-12">
//         <div className="mx-auto grid max-w-5xl gap-10">
//           {/* Overview */}
//           <Card title="Overview">
//             {course.overview ? (
//               <p className="text-sm text-gray-700">{course.overview}</p>
//             ) : (
//               <p className="text-sm text-gray-700">Syllabus will be updated soon.</p>
//             )}

//             {course.prerequisites?.length ? (
//               <>
//                 <h3 className="mt-6 text-sm font-extrabold">Prerequisites</h3>
//                 <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//                   {course.prerequisites.map((p) => (
//                     <li key={p}>{p}</li>
//                   ))}
//                 </ul>
//               </>
//             ) : null}

//             {course.outcomes?.length ? (
//               <>
//                 <h3 className="mt-6 text-sm font-extrabold">What you’ll be able to do</h3>
//                 <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//                   {course.outcomes.map((o) => (
//                     <li key={o}>{o}</li>
//                   ))}
//                 </ul>
//               </>
//             ) : null}
//           </Card>

//           {/* Modules */}
//           {course.modules?.length ? (
//             <Card title="Detailed Syllabus">
//               <div className="space-y-3">
//                 {course.modules.map((m) => (
//                   <details
//                     key={`${m.module}-${m.title}`}
//                     className="rounded-2xl border bg-white p-4"
//                   >
//                     <summary className="cursor-pointer list-none text-sm font-extrabold">
//                       <span className="mr-2 text-gray-400">{m.module}</span>
//                       {m.title}
//                       <span className="ml-2 text-xs font-semibold text-gray-500">
//                         ({m.topics?.length || 0} topics)
//                       </span>
//                     </summary>

//                     <div className="mt-3 grid gap-4 sm:grid-cols-2">
//                       <div>
//                         <div className="text-xs font-extrabold text-gray-700">Topics</div>
//                         <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//                           {(m.topics || []).map((t) => (
//                             <li key={t}>{t}</li>
//                           ))}
//                         </ul>
//                       </div>

//                       {m.labs?.length ? (
//                         <div>
//                           <div className="text-xs font-extrabold text-gray-700">
//                             Hands-on / Labs
//                           </div>
//                           <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//                             {m.labs.map((l) => (
//                               <li key={l}>{l}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       ) : null}
//                     </div>
//                   </details>
//                 ))}
//               </div>
//             </Card>
//           ) : null}

//           {/* Projects */}
//           {course.projects?.length ? (
//             <Card title="Projects">
//               <div className="grid gap-4 sm:grid-cols-2">
//                 {course.projects.map((p) => (
//                   <div key={p.title} className="rounded-2xl border bg-white p-4">
//                     <div className="text-sm font-extrabold">{p.title}</div>
//                     {p.description ? (
//                       <p className="mt-1 text-sm text-gray-700">{p.description}</p>
//                     ) : null}

//                     {p.deliverables?.length ? (
//                       <>
//                         <div className="mt-3 text-xs font-extrabold text-gray-700">
//                           Deliverables
//                         </div>
//                         <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//                           {p.deliverables.map((d) => (
//                             <li key={d}>{d}</li>
//                           ))}
//                         </ul>
//                       </>
//                     ) : null}
//                   </div>
//                 ))}
//               </div>

//               {course.capstone ? (
//                 <div className="mt-6 rounded-2xl border bg-gray-50 p-4">
//                   <div className="text-sm font-extrabold">
//                     Capstone: {course.capstone.title}
//                   </div>
//                   {course.capstone.description ? (
//                     <p className="mt-1 text-sm text-gray-700">
//                       {course.capstone.description}
//                     </p>
//                   ) : null}
//                 </div>
//               ) : null}
//             </Card>
//           ) : null}

//           {/* CTA */}
//           <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
//             <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//               <div>
//                 <div className="text-lg font-extrabold">Want a personalized study plan?</div>
//                 <div className="mt-1 text-sm text-gray-700">
//                   We’ll map the best path based on your experience + target role.
//                 </div>
//               </div>
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
//               >
//                 Request a Callback
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function Stat({ label, value }) {
//   return (
//     <div className="rounded-2xl border bg-white p-4">
//       <div className="text-xs font-semibold text-gray-500">{label}</div>
//       <div className="mt-1 font-bold">{value}</div>
//     </div>
//   );
// }

// function Card({ title, children }) {
//   return (
//     <div className="rounded-3xl border p-6">
//       <h2 className="text-lg font-extrabold">{title}</h2>
//       <div className="mt-3">{children}</div>
//     </div>
//   );
// }





























// // src/app/training/professional-training/[slug]/page.js

// import Link from "next/link";
// import Image from "next/image";
// import path from "path";
// import { readFile } from "fs/promises";
// import { notFound } from "next/navigation";
// import { FiCheckCircle } from "react-icons/fi";
// import { VscAzureDevops } from "react-icons/vsc";
// import {
//   SiDocker,
//   SiApacheparquet,
//   SiKubernetes,
//   SiGit,
//   SiSpring,
//   SiHibernate,
//   SiReact,
//   SiNextdotjs,
//   SiAngular,
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiTypescript,
//   SiMysql,
//   SiPostgresql,
//   SiMongodb,
//   SiJenkins,
//   SiGithubactions,
//   SiBootstrap,
//   SiNodedotjs,
//   SiGitlab,
//   SiCircleci,
//   SiBitbucket,
//   SiNetlify,
//   SiVercel,
//   SiAwsamplify,
//   SiGooglecloud,
//   SiSnowflake,
//   SiPython,
//   SiApacheairflow,
//   SiApachekafka,
//   SiTerraform,
//   SiApachespark,
//   SiAmazonredshift,
//   SiAmazonrds, SiAmazons3, SiGoogledataflow, SiGooglebigquery 
// } from "react-icons/si";
// import { FaAws, FaJava  } from "react-icons/fa6";
// import { FaFileCsv } from "react-icons/fa";
// import { BiSolidFileJson } from "react-icons/bi";
// import { BsFiletypeXml } from "react-icons/bs";
// import {
//   FiArrowRight,
//   FiPhone,
//   FiCpu,
//   FiDatabase,
//   FiLayers,
//   FiTool,
//   FiSearch,
//   FiActivity,
//   FiBarChart2,
//   FiZap,
//   FiGitBranch,
//   FiFileText,
// } from "react-icons/fi";

// import { SiDatabricks } from "react-icons/si";

// import { DiMsqlServer } from "react-icons/di";
// const BASE = "/training/professional-training";

// export const dynamic = "force-static";
// export const revalidate = 86400; // 24h

// // ✅ Compatibility helper (works whether params is plain object or Promise)
// async function unwrapParams(params) {
//   return typeof params?.then === "function" ? await params : params;
// }

// async function loadSyllabus() {
//   try {
//     const filePath = path.join(
//       process.cwd(),
//       "public",
//       "courses",
//       "professional-training-syllabus.json"
//     );
//     const raw = await readFile(filePath, "utf8");
//     return JSON.parse(raw);
//   } catch {
//     return null;
//   }
// }

// export async function generateStaticParams() {
//   const data = await loadSyllabus();
//   return (data?.courses || []).map((c) => ({ slug: c.key }));
// }

// export async function generateMetadata({ params }) {
//   const p = await unwrapParams(params);
//   const slug = decodeURIComponent(p?.slug || "");

//   const data = await loadSyllabus();
//   const course = (data?.courses || []).find((c) => c.key === slug);

//   return {
//     title: course ? `${course.title} | TINITIATE` : "Course | TINITIATE",
//     description: course?.subtitle || "Professional Training course details",
//   };
// }

// /* =====================================================================================
//   TECH STACK ICON REGISTRY (same keys you use in stack arrays)
// ===================================================================================== */
// const STACK_TECH = {
//   // Frontend
//   html: { name: "HTML5", Icon: SiHtml5, color: "text-orange-600", path:'/courses/html-course'},
//   css: { name: "CSS3", Icon: SiCss3, color: "text-blue-600", path:'/courses/css-course'},
//   js: { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-500", path:'/courses/javascript-language-course'},
//   ts: { name: "TypeScript", Icon: SiTypescript, color: "text-sky-600", path:'/courses/typescript-course'},
//   react: { name: "React", Icon: SiReact, color: "text-cyan-600", path:'/courses/react-beginner-course'},
//   next: { name: "Next.js", Icon: SiNextdotjs, color: "text-gray-900", path:'/courses/nextjs-course' },
//   angular: { name: "Angular", Icon: SiAngular, color: "text-red-600" },
//   bootstrap: { name: "Bootstrap", Icon: SiBootstrap, color: "text-violet-700",path:'/courses/bootstrap-course' },

//   // Backend (Web)
//   node: { name: "Node.js", Icon: SiNodedotjs, color: "text-green-700", path: "/courses/professionalCourses/backend/nodejs-course" },

//   // Backend (Java Full Stack)
//   java: { name: "Java", Icon: FaJava , color: "text-red-600", path: "/courses/professionalCourses/backend/core-java"},
//   springboot: { name: "Spring Boot", Icon: SiSpring, color: "text-green-700", path: "/courses/professionalCourses/backend/spring-boot-beginner-to-professional" },
//   spring: { name: "Spring", Icon: SiSpring, color: "text-green-700",path: "/courses/professionalCourses/backend/spring-framework-core"},
//   hibernate: { name: "Hibernate / JPA", Icon: SiHibernate, color: "text-amber-700" },

//   // Database
//   postgres: { name: "PostgreSQL", Icon: SiPostgresql, color: "text-indigo-700", path:'/courses/postgresql-course' },
//   // mysql: { name: "MySQL Server", Icon: SiMysql, color: "text-blue-700" },
//   mongo: { name: "MongoDB", Icon: SiMongodb, color: "text-green-700", path:'/courses/mongodb-course'},
//   sqlserver: { name: "SQL Server", Icon: DiMsqlServer, color: "text-red-700",path:'/courses/sql-server-beginner-course' },

//   // Cloud / Hosting
//   aws: { name: "AWS", Icon: FaAws, color: "text-orange-600",  path: "/courses/professionalCourses/cloud/aws-cloud-data-engineering-course" },
//   gcp: { name: "Google Cloud", Icon: 'none', color: "text-blue-600", img: "/images/courses/google-cloud.png"},

//   // Azure as image
//   azure: { name: "Azure", Icon: "none", img: "/images/courses/microsoftAzure.png", path:'/courses/microsoft-azure-beginner-course' },

//   amplify: { name: "AWS Amplify", Icon: SiAwsamplify, color: "text-orange-600", path:'/courses/aws-amplify-course' },
//   netlify: { name: "Netlify", Icon: SiNetlify, color: "text-cyan-700", path:'/courses/netlify-course' },
//   vercel: { name: "Vercel", Icon: SiVercel, color: "text-gray-900", path:'/courses/vercel-course' },

//   // CI/CD
//   git: { name: "Git", Icon: SiGit, color: "text-orange-600",path:'/courses/git-course' },
//   gha: { name: "GitHub Actions", Icon: SiGithubactions, color: "text-gray-900",path:'/courses/github-actions-course' },
//   gitlab: { name: "GitLab CI/CD", Icon: SiGitlab, color: "text-orange-600",path:'/courses/gitlab-ci-course' },
//   circleci: { name: "CircleCI", Icon: SiCircleci, color: "text-gray-900",path:'/courses/circleci-course' },

//   azuredevops: { name: "Azure DevOps", Icon: VscAzureDevops, img: "/images/courses/azureDevOps.png", path:'/courses/azure-devops-course' },

//   bitbucket: { name: "Bitbucket Pipelines", Icon: SiBitbucket, color: "text-blue-700", path:'/courses/bitbucket-course'},
//   jenkins: { name: "Jenkins", Icon: SiJenkins, color: "text-red-700", path:'/courses/jenkins-course'},
//   docker: { name: "Docker", Icon: SiDocker, color: "text-sky-600", path:'/courses/docker-beginner-course' },
//   k8s: { name: "Kubernetes", Icon: SiKubernetes, color: "text-blue-600" },

//   // Data Eng
//   snowflake: { name: "Snowflake", Icon: SiSnowflake, color: "text-sky-600", path:'/courses/professionalCourses/dataEngineering/snowflake-data-platform-course' },
//   python: { name: "Python", Icon: SiPython, color: "text-yellow-500", path:'/courses/python-language-course'},
//   airflow: { name: "Apache Airflow", Icon: SiApacheairflow, color: "text-sky-600", path:'/courses/apache-airflow-workflow-orchestration-course'},
//   kafka: { name: "Apache Kafka", Icon: SiApachekafka, color: "text-gray-900", path:'/courses/apache-kafka-streaming-course'},
//   terraform: { name: "Terraform", Icon: SiTerraform, color: "text-purple-700", path:'/courses/terraform-infrastructure-as-code-course' },
//   spark: { name: "Apache Spark", Icon: SiApachespark, color: "text-orange-600" },
//   pyspark: { name: "PySpark", Icon: SiApachespark, color: "text-orange-600",path: "/courses/professionalCourses/dataEngineering/pyspark-for-batch-etl"},

//   // Formats
//   csv: { name: "CSV", Icon: FaFileCsv, color: "text-green-600", path: "/courses/professionalCourses/dataEngineering/csv-data-format" },
//   json: { name: "JSON", Icon: BiSolidFileJson, color: "text-blue-400", path: "/courses/professionalCourses/dataEngineering/json-data-format" },
//   xml: { name: "XML", Icon: BsFiletypeXml, color: "text-orange-700", path: "/courses/professionalCourses/dataEngineering/xml-data-format" },
//   parquet: { name: "Parquet", Icon: SiApacheparquet, color: "text-blue-500", path: "/courses/professionalCourses/dataEngineering/parquet-data-format" },
//   avro: { name: "Avro", Icon: FiFileText, color: "text-slate-700", path: "/courses/professionalCourses/dataEngineering/csv-data-format"},

//   // AWS services
//   s3: { name: "Amazon S3", Icon: SiAmazons3 , color: "text-green-800" , path: "/courses/professionalCourses/dataEngineering/aws-s3"},
//   glue: { name: "AWS Glue", Icon: FiTool, color: "text-slate-800",path: "/courses/professionalCourses/dataEngineering/aws-glue" },
//   emr: { name: "AWS EMR", Icon: FiCpu, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/aws-emr" },
//   athena: { name: "Amazon Athena", Icon: FiSearch, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/aws-athena"},
//   kinesis: { name: "Amazon Kinesis", Icon: FiActivity, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/aws-kinesis" },
//   redshift: { name: "Amazon Redshift", Icon: SiAmazonredshift , color: "text-[#5828b0]", path: "/courses/professionalCourses/dataEngineering/aws-redshift" },

//   // Extras
//   sql: { name: "SQL", Icon: FiDatabase, color: "text-blue-600", path:'/courses/' },
//   rds: { name: "Amazon RDS", Icon: SiAmazonrds , color: "text-[#285ab0]", path: "/courses/professionalCourses/dataEngineering/aws-rds" },
//   lambda: { name: "AWS Lambda", Icon: FiZap, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/aws-lambda" },
//   stepfunctions: { name: "Step Functions", Icon: FiGitBranch, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/aws-step-functions" },

//   snowpark: { name: "Snowpark", Icon: "none", img: "/images/courses/snowpark.png", path:'/courses/snowpark-data-engineering-course'},
//   snowpipe: { name: "Snowpipe", Icon: "none", img: "/images/courses/snowpipe.png", path:'/courses/snowpipe-continuous-data-ingestion-course'},
//   // Azure DE
//   adls: { name: "ADLS Gen2", Icon: FiLayers, color: "text-blue-700", path: "/courses/professionalCourses/dataEngineering/azure-adls-gen2" },
//   adf: { name: "Azure Data Factory", Icon: FiTool, color: "text-slate-800", path:"/courses/professionalCourses/dataEngineering/azure-adf"},
//   databricks: { name: "Azure Databricks", Icon: SiDatabricks, color: "text-red-600",path: "/courses/professionalCourses/dataEngineering/azure-databricks" },
//   synapse: { name: "Azure Synapse", Icon: FiDatabase, color: "text-slate-800",path:  "/courses/professionalCourses/dataEngineering/azure-synapse" },
//   eventhubs: { name: "Azure Event Hubs", Icon: FiActivity, color: "text-slate-800",path: "/courses/professionalCourses/dataEngineering/azure-event-hubs" },
//   streamanalytics: { name: "Azure Stream Analytics", Icon: FiBarChart2, color: "text-slate-800",path: "/courses/professionalCourses/dataEngineering/azure-stream-analytics" },
//   functions: { name: "Azure Functions", Icon: FiZap, color: "text-slate-800",path: "/courses/professionalCourses/dataEngineering/azure-functions"},
//   logicapps: { name: "Azure Logic Apps", Icon: FiGitBranch, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/azure-logic-apps" },
//   delta: { name: "Delta Lake", Icon: FiLayers, color: "text-slate-800",path: "/courses/professionalCourses/dataEngineering/delta-lake" },

//   // GCP DE
//   gcs: { name: "Google Cloud Storage (GCS)", Icon: FiLayers, color: "text-orange-500",path: "/courses/professionalCourses/dataEngineering/gcp-gcs"  },
//   dataflow: { name: "Dataflow", Icon: SiGoogledataflow , color: "text-[#5375b0]",path: "/courses/professionalCourses/dataEngineering/gcp-dataflow" },
//   bigquery: { name: "BigQuery", Icon: SiGooglebigquery , color: "text-blue-400", path: "/courses/professionalCourses/dataEngineering/gcp-bigquery"},
//   pubsub: { name: "Pub/Sub", Icon: FiActivity, color: "text-slate-800",path: "/courses/professionalCourses/dataEngineering/gcp-pubsub" },

//   // extra
//   partitioning: { name: "Partitioning", Icon: "none", img: "/images/courses/partitioning.png" },
//   Visualization:{name:"Visualization", Icon:"FiBarChart2", color:"text-blue-600", path: "/courses/coming-soon"},
//   powerbi: { name: "Power BI", Icon: "none",img: "/images/courses/powerbi.png", path:'/courses/powerbi-beginner-course' },
//   quicksight: { name: "QuickSight", Icon: SiAwsamplify, color: "text-green-500", path: "/courses/professionalCourses/reporting/aws-quicksight" },  // Using AWS Amplify icon for QuickSight
// };


// const TECH_KEY_ALIASES = {
//   // If your JSON sometimes contains "Spring Boot" etc.
//   "spring boot": "springboot",
//   "springboot": "springboot",
//   "github actions": "gha",
//   "git hub actions": "gha",
//   "sql server": "sqlserver",
//   "postgresql": "postgres",
// };

// function normalizeTechKey(k) {
//   const raw = String(k ?? "").trim();
//   if (!raw) return "";

//   const lower = raw.toLowerCase();

//   if (STACK_TECH[raw]) return raw;
//   if (STACK_TECH[lower]) return lower;
//   if (TECH_KEY_ALIASES[lower]) return TECH_KEY_ALIASES[lower];

//   // remove spaces (ex: "spring boot" -> "springboot")
//   const noSpaces = lower.replace(/\s+/g, "");
//   if (STACK_TECH[noSpaces]) return noSpaces;

//   return lower;
// }

// function StackMark({ techKey, size = 22 }) {
//   const key = normalizeTechKey(techKey);
//   const t = STACK_TECH[key];

//   if (!t) {
//     return (
//       <span
//         className="inline-flex items-center justify-center rounded bg-gray-200 text-[10px] text-gray-700"
//         style={{ width: size, height: size }}
//         title={String(techKey)}
//       >
//         ?
//       </span>
//     );
//   }

//   if (typeof t.Icon === "function") {
//     const I = t.Icon;
//     return <I className={t.color || "text-slate-700"} style={{ width: size, height: size }} />;
//   }

//   if (t.img) {
//     return <Image src={t.img} alt={t.name} width={size} height={size} className="object-contain" />;
//   }

//   return (
//     <span
//       className="inline-flex items-center justify-center rounded bg-gray-200 text-[10px] text-gray-700"
//       style={{ width: size, height: size }}
//       title={t.name}
//     >
//       ?
//     </span>
//   );
// }

// function TechChip({ techKey }) {
//   const key = normalizeTechKey(techKey);
//   const t = STACK_TECH[key];

//   const content = (
//     <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
//       <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
//         <StackMark techKey={techKey} size={26} />
//       </div>
//       <div className="min-w-0">
//         <div className="truncate text-[12px] font-semibold text-gray-900">
//           {t?.name || String(techKey)}
//         </div>
//       </div>
//     </div>
//   );

//   if (t?.path) return <Link href={t.path} className="block">{content}</Link>;
//   return content;
// }

// function TechStackCard({ stack }) {
//   if (!stack || typeof stack !== "object") return null;
//   const entries = Object.entries(stack);
//   if (!entries.length) return null;

//   return (
//     <Card id="tech-stack" title="Tech Stack" subtitle="Tools & technologies covered">
//       <div className="space-y-4">
//         {entries.map(([sectionTitle, items]) => (
//           <div key={sectionTitle} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
//             <div className="mb-3 text-[12px] font-semibold text-gray-800">{sectionTitle}</div>
//             <div className="grid gap-2 [grid-template-columns:repeat(auto-fill,minmax(180px,1fr))]">
//               {(Array.isArray(items) ? items : []).map((tech, idx) => (
//                 <TechChip key={`${sectionTitle}-${String(tech)}-${idx}`} techKey={tech} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </Card>
//   );
// }

// /* ===================================================================================== */

// export default async function Page({ params }) {
//   const p = await unwrapParams(params);
//   const slug = decodeURIComponent(p?.slug || "");

//   const data = await loadSyllabus();
//   if (!data) return notFound();

//   const course = (data.courses || []).find((c) => c.key === slug);
//   if (!course) return notFound();

//   const hasModules = Array.isArray(course.modules) && course.modules.length > 0;
//   const hasProjects = Array.isArray(course.projects) && course.projects.length > 0;
//   const hasStack = course.stack && typeof course.stack === "object" && Object.keys(course.stack).length > 0;

//   return (
//     <main className="bg-white text-gray-900">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-black">
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute -top-28 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
//           <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.18),transparent_35%)]" />
//         </div>

//         <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//           <div className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
//             <div>
//               <div className="flex flex-wrap items-center gap-2">
//                 <Pill tone="primary">{course.category || "Professional Training"}</Pill>
//                 {course.level ? <Pill tone="muted">{course.level}</Pill> : null}
//                 {course.mode ? <Pill tone="muted">{course.mode}</Pill> : null}
//               </div>

//               <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
//                 {course.title}
//               </h1>

//               {course.subtitle ? (
//                 <p className="mt-3 max-w-2xl text-sm text-white/75 sm:text-base">
//                   {course.subtitle}
//                 </p>
//               ) : null}

//               <div className="mt-7 flex flex-wrap gap-3">
//                 <Link
//                   href="/request-callback"
//                   className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600"
//                 >
//                   Schedule a counselling call
//                   <FiArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>

//               <div className="mt-8 flex flex-wrap gap-2">
//                 <HeroAnchor href="#overview">Overview</HeroAnchor>
//                 <HeroAnchor href="#syllabus">Syllabus</HeroAnchor>
//                 {hasStack ? <HeroAnchor href="#tech-stack">Tech Stack</HeroAnchor> : null}
//                 {hasProjects ? <HeroAnchor href="#projects">Projects</HeroAnchor> : null}
//               </div>
//             </div>

//             <div className="rounded-3xl bg-white/10 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md ring-1 ring-white/10">
//               <div className="text-xs font-semibold text-white/70">Quick facts</div>

//               <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
//                 <MiniStat label="Duration" value={course.duration || "—"} />
//                 <MiniStat label="Projects" value={`${course.projects?.length || 0}+`} />
//                 <MiniStat label="Capstone" value={course.capstone?.title || "Yes"} />
//               </div>

//               <div className="mt-4 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
//                 <div className="text-xs font-semibold text-white/80">Includes</div>
//                 <ul className="mt-3 space-y-2 text-sm text-white/75">
//                   <li className="flex gap-2">
//                     <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
//                     Mentor-led sessions + labs
//                   </li>
//                   <li className="flex gap-2">
//                     <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
//                     Real-time project guidance
//                   </li>
//                   <li className="flex gap-2">
//                     <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
//                     Interview prep roadmap
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* BODY */}
//       <section className="bg-gray-50">
//         <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
//           <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
//             {/* LEFT */}
//             <div className="space-y-8">
//               <Card id="overview" title="Overview" subtitle="About this program">
//                 <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
//                   {course.overview || "Syllabus will be updated soon."}
//                 </p>

//                 {course.prerequisites?.length ? (
//                   <div className="mt-6">
//                     <h3 className="text-sm font-extrabold text-gray-900">Prerequisites</h3>
//                     <div className="mt-3 grid gap-3 sm:grid-cols-2">
//                       {course.prerequisites.map((p) => (
//                         <ListChip key={p}>{p}</ListChip>
//                       ))}
//                     </div>
//                   </div>
//                 ) : null}

//                 {course.outcomes?.length ? (
//                   <div className="mt-6">
//                     <h3 className="text-sm font-extrabold text-gray-900">
//                       What you’ll be able to do
//                     </h3>
//                     <ul className="mt-3 space-y-2">
//                       {course.outcomes.map((o) => (
//                         <li key={o} className="flex gap-2 text-sm text-gray-700">
//                           <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
//                           <span>{o}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ) : null}
//               </Card>

//               {/* Detailed syllabus */}
//               {/* <Card id="syllabus" title="Detailed Syllabus" subtitle="Module-by-module breakdown">
//                 {hasModules ? (
//                   <div className="space-y-3">
//                     {course.modules.map((m) => (
//                       <details
//                         key={`${m.module}-${m.title}`}
//                         className="group rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5"
//                       >
//                         <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
//                           <div className="min-w-0">
//                             <div className="flex items-center gap-2">
//                               <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-extrabold text-indigo-700">
//                                 {m.module}
//                               </span>
//                               <span className="truncate text-sm font-extrabold text-gray-900">
//                                 {m.title}
//                               </span>
//                             </div>
//                             <div className="mt-1 text-xs text-gray-500">
//                               {m.topics?.length || 0} topics
//                               {m.labs?.length ? ` • ${m.labs.length} labs` : ""}
//                             </div>
//                           </div>

//                           <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 group-open:bg-gray-200">
//                             View
//                           </span>
//                         </summary>

//                         <div className="mt-5 grid gap-4 sm:grid-cols-2">
//                           <SoftBox title="Topics">
//                             <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
//                               {(m.topics || []).map((t) => (
//                                 <li key={t}>{t}</li>
//                               ))}
//                             </ul>
//                           </SoftBox>

//                           {m.labs?.length ? (
//                             <SoftBox title="Hands-on / Labs">
//                               <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
//                                 {m.labs.map((l) => (
//                                   <li key={l}>{l}</li>
//                                 ))}
//                               </ul>
//                             </SoftBox>
//                           ) : null}
//                         </div>
//                       </details>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-sm text-gray-700">Syllabus coming soon.</p>
//                 )}
//               </Card> */}

//               {/* ✅ ICONS BELOW DETAILED SYLLABUS */}
//               {hasStack ? <TechStackCard stack={course.stack} /> : null}

//               {hasProjects ? (
//                 <Card id="projects" title="Projects" subtitle="Portfolio-ready work">
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     {course.projects.map((p) => (
//                       <div
//                         key={p.title}
//                         className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5"
//                       >
//                         <div className="text-sm font-extrabold text-gray-900">{p.title}</div>
//                         {p.description ? (
//                           <p className="mt-2 text-sm text-gray-700">{p.description}</p>
//                         ) : null}

//                         {p.deliverables?.length ? (
//                           <>
//                             <div className="mt-4 text-xs font-extrabold text-gray-700">
//                               Deliverables
//                             </div>
//                             <ul className="mt-2 space-y-2">
//                               {p.deliverables.map((d) => (
//                                 <li key={d} className="flex gap-2 text-sm text-gray-700">
//                                   <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
//                                   <span>{d}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </>
//                         ) : null}
//                       </div>
//                     ))}
//                   </div>

//                   {course.capstone ? (
//                     <div className="mt-6 rounded-3xl bg-gradient-to-br from-indigo-50 to-white p-5 shadow-sm ring-1 ring-black/5">
//                       <div className="text-sm font-extrabold text-gray-900">
//                         Capstone: {course.capstone.title}
//                       </div>
//                       {course.capstone.description ? (
//                         <p className="mt-2 text-sm text-gray-700">{course.capstone.description}</p>
//                       ) : null}
//                     </div>
//                   ) : null}
//                 </Card>
//               ) : null}
//             </div>

//             {/* RIGHT */}
//             <aside className="lg:sticky lg:top-6 lg:self-start">
//               <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5">
//                 <div className="text-xs font-semibold text-gray-500">Next step</div>
//                 <div className="mt-2 text-lg font-extrabold text-gray-900">
//                   Want a personalized study plan?
//                 </div>
//                 <p className="mt-2 text-sm text-gray-700">
//                   Tell us your goal—career switch, upskilling, or interview prep—and we’ll map the best track.
//                 </p>

//                 <div className="mt-5 grid gap-3">
//                   <Link
//                     href="/request-callback"
//                     className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
//                   >
//                     Request a Callback
//                     <FiArrowRight className="h-4 w-4" />
//                   </Link>

//                   <Link
//                     href={BASE}
//                     className="inline-flex items-center justify-center rounded-full bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-200"
//                   >
//                     Explore other courses
//                   </Link>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// /* -------------------- UI Bits -------------------- */

// function Pill({ children, tone = "muted" }) {
//   const cls =
//     tone === "primary"
//       ? "bg-indigo-500/15 text-indigo-200 ring-1 ring-indigo-400/25"
//       : "bg-white/10 text-white/80 ring-1 ring-white/10";
//   return (
//     <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${cls}`}>
//       {children}
//     </span>
//   );
// }

// function HeroAnchor({ href, children }) {
//   return (
//     <a
//       href={href}
//       className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 hover:bg-white/15 ring-1 ring-white/10"
//     >
//       {children}
//     </a>
//   );
// }

// function MiniStat({ label, value }) {
//   return (
//     <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
//       <div className="text-xs font-semibold text-white/65">{label}</div>
//       <div className="mt-1 text-sm font-extrabold text-white">{value}</div>
//     </div>
//   );
// }

// function Card({ id, title, subtitle, children }) {
//   return (
//     <section id={id} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
//       {subtitle ? <div className="text-xs font-semibold text-gray-500">{subtitle}</div> : null}
//       <h2 className="mt-1 text-lg font-extrabold text-gray-900">{title}</h2>
//       <div className="mt-4">{children}</div>
//     </section>
//   );
// }

// function ListChip({ children }) {
//   return (
//     <div className="flex items-start gap-2 rounded-2xl bg-gray-50 p-3 ring-1 ring-black/5">
//       <FiCheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
//       <span className="text-sm text-gray-700">{children}</span>
//     </div>
//   );
// }

// function SoftBox({ title, children }) {
//   return (
//     <div className="rounded-2xl bg-gray-50 p-4 ring-1 ring-black/5">
//       <div className="text-xs font-extrabold text-gray-700">{title}</div>
//       {children}
//     </div>
//   );
// }













// src/app/training/professional-training/[slug]/page.js

import Link from "next/link";
import Image from "next/image";
import path from "path";
import { readFile } from "fs/promises";
import { notFound } from "next/navigation";
import { FiCheckCircle } from "react-icons/fi";
import { VscAzureDevops } from "react-icons/vsc";
import {
  SiDocker,
  SiApacheparquet,
  SiKubernetes,
  SiGit,
  SiSpring,
  SiHibernate,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiJenkins,
  SiGithubactions,
  SiBootstrap,
  SiNodedotjs,
  SiGitlab,
  SiCircleci,
  SiBitbucket,
  SiNetlify,
  SiVercel,
  SiAwsamplify,
  SiGooglecloud,
  SiSnowflake,
  SiPython,
  SiApacheairflow,
  SiApachekafka,
  SiTerraform,
  SiApachespark,
  SiAmazonredshift,
  SiAmazonrds,
  SiAmazons3,
  SiGoogledataflow,
  SiGooglebigquery,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa6";
import { FaFileCsv } from "react-icons/fa";
import { BiSolidFileJson } from "react-icons/bi";
import { BsFiletypeXml } from "react-icons/bs";
import {
  FiArrowRight,
  FiPhone,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiTool,
  FiSearch,
  FiActivity,
  FiBarChart2,
  FiZap,
  FiGitBranch,
  FiFileText,
} from "react-icons/fi";

import { SiDatabricks } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

const BASE = "/training/professional-training";

export const dynamic = "force-static";
export const revalidate = 86400; // 24h

// ✅ Compatibility helper (works whether params is plain object or Promise)
async function unwrapParams(params) {
  return typeof params?.then === "function" ? await params : params;
}

async function loadSyllabus() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "courses",
      "professional-training-syllabus.json"
    );
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const data = await loadSyllabus();
  return (data?.courses || []).map((c) => ({ slug: c.key }));
}

export async function generateMetadata({ params }) {
  const p = await unwrapParams(params);
  const slug = decodeURIComponent(p?.slug || "");

  const data = await loadSyllabus();
  const course = (data?.courses || []).find((c) => c.key === slug);

  return {
    title: course ? `${course.title} | TINITIATE` : "Course | TINITIATE",
    description: course?.subtitle || "Professional Training course details",
  };
}

/* =====================================================================================
  TECH STACK ICON REGISTRY (same keys you use in stack arrays)
===================================================================================== */
const STACK_TECH = {
  // Frontend
  html: { name: "HTML5", Icon: SiHtml5, color: "text-orange-600", path: "/courses/html-course" },
  css: { name: "CSS3", Icon: SiCss3, color: "text-blue-600", path: "/courses/css-course" },
  js: { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-500", path: "/courses/javascript-language-course" },
  ts: { name: "TypeScript", Icon: SiTypescript, color: "text-sky-600", path: "/courses/typescript-course" },
  react: { name: "React", Icon: SiReact, color: "text-cyan-600", path: "/courses/react-beginner-course" },
  next: { name: "Next.js", Icon: SiNextdotjs, color: "text-gray-900", path: "/courses/nextjs-course" },
  angular: { name: "Angular", Icon: SiAngular, color: "text-red-600" },
  bootstrap: { name: "Bootstrap", Icon: SiBootstrap, color: "text-violet-700", path: "/courses/bootstrap-course" },

  // Backend (Web)
  node: { name: "Node.js", Icon: SiNodedotjs, color: "text-green-700", path: "/courses/professionalCourses/backend/nodejs-course" },

  // Backend (Java Full Stack)
  java: { name: "Java", Icon: FaJava, color: "text-red-600", path: "/courses/professionalCourses/backend/core-java" },
  springboot: { name: "Spring Boot", Icon: SiSpring, color: "text-green-700", path: "/courses/professionalCourses/backend/spring-boot-beginner-to-professional" },
  spring: { name: "Spring", Icon: SiSpring, color: "text-green-700", path: "/courses/professionalCourses/backend/spring-framework-core" },
  hibernate: { name: "Hibernate / JPA", Icon: SiHibernate, color: "text-amber-700" },

  // Database
  postgres: { name: "PostgreSQL", Icon: SiPostgresql, color: "text-indigo-700", path: "/courses/postgresql-course" },
  mongo: { name: "MongoDB", Icon: SiMongodb, color: "text-green-700", path: "/courses/mongodb-course" },
  sqlserver: { name: "SQL Server", Icon: DiMsqlServer, color: "text-red-700", path: "/courses/sql-server-beginner-course" },

  // Cloud / Hosting
  aws: { name: "AWS", Icon: FaAws, color: "text-orange-600", path: "/courses/professionalCourses/cloud/aws-cloud-data-engineering-course" },
  gcp: { name: "Google Cloud", Icon: "none", color: "text-blue-600", img: "/images/courses/google-cloud.png" },

  // Azure as image
  azure: { name: "Azure", Icon: "none", img: "/images/courses/microsoftAzure.png", path: "/courses/microsoft-azure-beginner-course" },

  amplify: { name: "AWS Amplify", Icon: SiAwsamplify, color: "text-orange-600", path: "/courses/aws-amplify-course" },
  netlify: { name: "Netlify", Icon: SiNetlify, color: "text-cyan-700", path: "/courses/netlify-course" },
  vercel: { name: "Vercel", Icon: SiVercel, color: "text-gray-900", path: "/courses/vercel-course" },

  // CI/CD
  git: { name: "Git", Icon: SiGit, color: "text-orange-600", path: "/courses/git-course" },
  gha: { name: "GitHub Actions", Icon: SiGithubactions, color: "text-gray-900", path: "/courses/github-actions-course" },
  gitlab: { name: "GitLab CI/CD", Icon: SiGitlab, color: "text-orange-600", path: "/courses/gitlab-ci-course" },
  circleci: { name: "CircleCI", Icon: SiCircleci, color: "text-gray-900", path: "/courses/circleci-course" },

  azuredevops: { name: "Azure DevOps", Icon: VscAzureDevops, img: "/images/courses/azureDevOps.png", path: "/courses/azure-devops-course" },

  bitbucket: { name: "Bitbucket Pipelines", Icon: SiBitbucket, color: "text-blue-700", path: "/courses/bitbucket-course" },
  jenkins: { name: "Jenkins", Icon: SiJenkins, color: "text-red-700", path: "/courses/jenkins-course" },
  docker: { name: "Docker", Icon: SiDocker, color: "text-sky-600", path: "/courses/docker-beginner-course" },
  k8s: { name: "Kubernetes", Icon: SiKubernetes, color: "text-blue-600" },

  // Data Eng
  snowflake: { name: "Snowflake", Icon: SiSnowflake, color: "text-sky-600", path: "/courses/professionalCourses/dataEngineering/snowflake-data-platform-course" },
  python: { name: "Python", Icon: SiPython, color: "text-yellow-500", path: "/courses/python-language-course" },
  airflow: { name: "Apache Airflow", Icon: SiApacheairflow, color: "text-sky-600", path: "/courses/apache-airflow-workflow-orchestration-course" },
  kafka: { name: "Apache Kafka", Icon: SiApachekafka, color: "text-gray-900", path: "/courses/apache-kafka-streaming-course" },
  terraform: { name: "Terraform", Icon: SiTerraform, color: "text-purple-700", path: "/courses/terraform-infrastructure-as-code-course" },
  spark: { name: "Apache Spark", Icon: SiApachespark, color: "text-orange-600" },
  pyspark: { name: "PySpark", Icon: SiApachespark, color: "text-orange-600", path: "/courses/professionalCourses/dataEngineering/pyspark-for-batch-etl" },

  // Formats
  csv: { name: "CSV", Icon: FaFileCsv, color: "text-green-600", path: "/courses/professionalCourses/dataEngineering/csv-data-format" },
  json: { name: "JSON", Icon: BiSolidFileJson, color: "text-blue-400", path: "/courses/professionalCourses/dataEngineering/json-data-format" },
  xml: { name: "XML", Icon: BsFiletypeXml, color: "text-orange-700", path: "/courses/professionalCourses/dataEngineering/xml-data-format" },
  parquet: { name: "Parquet", Icon: SiApacheparquet, color: "text-blue-500", path: "/courses/professionalCourses/dataEngineering/parquet-data-format" },
  avro: { name: "Avro", Icon: FiFileText, color: "text-slate-700", path: "/courses/professionalCourses/dataEngineering/csv-data-format" },

  // AWS services
  s3: { name: "Amazon S3", Icon: SiAmazons3, color: "text-green-800", path: "/courses/professionalCourses/dataEngineering/aws-s3" },
  glue: { name: "AWS Glue", Icon: FiTool, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/aws-glue" },
  emr: { name: "AWS EMR", Icon: FiCpu, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/aws-emr" },
  athena: { name: "Amazon Athena", Icon: FiSearch, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/aws-athena" },
  kinesis: { name: "Amazon Kinesis", Icon: FiActivity, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/aws-kinesis" },
  redshift: { name: "Amazon Redshift", Icon: SiAmazonredshift, color: "text-[#5828b0]", path: "/courses/professionalCourses/dataEngineering/aws-redshift" },

  // Extras
  sql: { name: "SQL", Icon: FiDatabase, color: "text-blue-600", path: "/courses/" },
  rds: { name: "Amazon RDS", Icon: SiAmazonrds, color: "text-[#285ab0]", path: "/courses/professionalCourses/dataEngineering/aws-rds" },
  lambda: { name: "AWS Lambda", Icon: FiZap, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/aws-lambda" },
  stepfunctions: { name: "Step Functions", Icon: FiGitBranch, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/aws-step-functions" },

  snowpark: { name: "Snowpark", Icon: "none", img: "/images/courses/snowpark.png", path: "/courses/snowpark-data-engineering-course" },
  snowpipe: { name: "Snowpipe", Icon: "none", img: "/images/courses/snowpipe.png", path: "/courses/snowpipe-continuous-data-ingestion-course" },

  // Azure DE
  adls: { name: "ADLS Gen2", Icon: FiLayers, color: "text-blue-700", path: "/courses/professionalCourses/dataEngineering/azure-adls-gen2" },
  adf: { name: "Azure Data Factory", Icon: FiTool, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/azure-adf" },
  databricks: { name: "Azure Databricks", Icon: SiDatabricks, color: "text-red-600", path: "/courses/professionalCourses/dataEngineering/azure-databricks" },
  synapse: { name: "Azure Synapse", Icon: FiDatabase, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/azure-synapse" },
  eventhubs: { name: "Azure Event Hubs", Icon: FiActivity, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/azure-event-hubs" },
  streamanalytics: { name: "Azure Stream Analytics", Icon: FiBarChart2, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/azure-stream-analytics" },
  functions: { name: "Azure Functions", Icon: FiZap, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/azure-functions" },
  logicapps: { name: "Azure Logic Apps", Icon: FiGitBranch, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/azure-logic-apps" },
  delta: { name: "Delta Lake", Icon: FiLayers, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/delta-lake" },

  // GCP DE
  gcs: { name: "Google Cloud Storage (GCS)", Icon: FiLayers, color: "text-orange-500", path: "/courses/professionalCourses/dataEngineering/gcp-gcs" },
  dataflow: { name: "Dataflow", Icon: SiGoogledataflow, color: "text-[#5375b0]", path: "/courses/professionalCourses/dataEngineering/gcp-dataflow" },
  bigquery: { name: "BigQuery", Icon: SiGooglebigquery, color: "text-blue-400", path: "/courses/professionalCourses/dataEngineering/gcp-bigquery" },
  pubsub: { name: "Pub/Sub", Icon: FiActivity, color: "text-slate-800", path: "/courses/professionalCourses/dataEngineering/gcp-pubsub" },

  // extra
  partitioning: { name: "Partitioning", Icon: "none", img: "/images/courses/partitioning.png" },
  Visualization: { name: "Visualization", Icon: "FiBarChart2", color: "text-blue-600", path: "/courses/coming-soon" },
  powerbi: { name: "Power BI", Icon: "none", img: "/images/courses/powerbi.png", path: "/courses/powerbi-beginner-course" },
  quicksight: { name: "QuickSight", Icon: SiAwsamplify, color: "text-green-500", path: "/courses/professionalCourses/reporting/aws-quicksight" },
};

const TECH_KEY_ALIASES = {
  "spring boot": "springboot",
  springboot: "springboot",
  "github actions": "gha",
  "git hub actions": "gha",
  "sql server": "sqlserver",
  postgresql: "postgres",
};

function normalizeTechKey(k) {
  const raw = String(k ?? "").trim();
  if (!raw) return "";
  const lower = raw.toLowerCase();

  if (STACK_TECH[raw]) return raw;
  if (STACK_TECH[lower]) return lower;
  if (TECH_KEY_ALIASES[lower]) return TECH_KEY_ALIASES[lower];

  const noSpaces = lower.replace(/\s+/g, "");
  if (STACK_TECH[noSpaces]) return noSpaces;

  return lower;
}

function StackMark({ techKey, size = 22 }) {
  const key = normalizeTechKey(techKey);
  const t = STACK_TECH[key];

  if (!t) {
    return (
      <span
        className="inline-flex items-center justify-center rounded bg-gray-200 text-[10px] text-gray-700"
        style={{ width: size, height: size }}
        title={String(techKey)}
      >
        ?
      </span>
    );
  }

  if (typeof t.Icon === "function") {
    const I = t.Icon;
    return <I className={t.color || "text-slate-700"} style={{ width: size, height: size }} />;
  }

  if (t.img) {
    return <Image src={t.img} alt={t.name} width={size} height={size} className="object-contain" />;
  }

  return (
    <span
      className="inline-flex items-center justify-center rounded bg-gray-200 text-[10px] text-gray-700"
      style={{ width: size, height: size }}
      title={t.name}
    >
      ?
    </span>
  );
}

function TechChip({ techKey }) {
  const key = normalizeTechKey(techKey);
  const t = STACK_TECH[key];

  const content = (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
        <StackMark techKey={techKey} size={26} />
      </div>
      <div className="min-w-0">
        <div className="truncate text-[12px] font-semibold text-gray-900">
          {t?.name || String(techKey)}
        </div>
      </div>
    </div>
  );

  if (t?.path) return <Link href={t.path} className="block">{content}</Link>;
  return content;
}

function TechStackCard({ stack }) {
  if (!stack || typeof stack !== "object") return null;
  const entries = Object.entries(stack);
  if (!entries.length) return null;

  return (
    <Card id="tech-stack" title="Tech Stack" subtitle="Tools & technologies covered">
      <div className="space-y-4">
        {entries.map(([sectionTitle, items]) => (
          <div key={sectionTitle} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <div className="mb-3 text-[12px] font-semibold text-gray-800">{sectionTitle}</div>
            <div className="grid gap-2 [grid-template-columns:repeat(auto-fill,minmax(180px,1fr))]">
              {(Array.isArray(items) ? items : []).map((tech, idx) => (
                <TechChip key={`${sectionTitle}-${String(tech)}-${idx}`} techKey={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ===================================================================================== */

export default async function Page({ params }) {
  const p = await unwrapParams(params);
  const slug = decodeURIComponent(p?.slug || "");

  const data = await loadSyllabus();
  if (!data) return notFound();

  const course = (data.courses || []).find((c) => c.key === slug);
  if (!course) return notFound();

  const hasModules = Array.isArray(course.modules) && course.modules.length > 0;
  const hasProjects = Array.isArray(course.projects) && course.projects.length > 0;
  const hasStack = course.stack && typeof course.stack === "object" && Object.keys(course.stack).length > 0;

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.18),transparent_35%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          {/* ✅ Single column hero (no empty side) */}
          <div className="mt-6 max-w-4xl">
            {/* <div className="flex flex-wrap items-center gap-2">
              <Pill tone="primary">{course.category || "Professional Training"}</Pill>
              {course.level ? <Pill tone="muted">{course.level}</Pill> : null}
              {course.mode ? <Pill tone="muted">{course.mode}</Pill> : null}
            </div> */}

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {course.title}
            </h1>

            {course.subtitle ? (
              <p className="mt-3 max-w-2xl text-sm text-white/75 sm:text-base">
                {course.subtitle}
              </p>
            ) : null}

            {/* ✅ CTA button only */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/request-callback"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600"
              >
                Schedule a counselling call
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* ✅ Duration / Projects / Capstone BELOW button */}
            <div className="mt-4 flex flex-wrap gap-3">
              <HeroStat label="Duration" value={course.duration || "—"} />
              <HeroStat label="Projects" value={`${course.projects?.length || 0}+`} />
              {/* <HeroStat label="Capstone" value={course.capstone?.title || "Yes"} /> */}
            </div>

            {/* ❌ Includes removed completely (as requested) */}
          </div>

          {/* ✅ Original right-side quick facts card kept (disabled) */}
          {/*
          <div className="rounded-3xl bg-white/10 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md ring-1 ring-white/10">
            ...
          </div>
          */}
        </div>
      </section>

      {/* ✅ Engaging tabs below hero */}
      <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/ backdrop-blur-md">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <SectionTab href="#overview" Icon={FiFileText}>Overview</SectionTab>
            {hasStack ? <SectionTab href="#tech-stack" Icon={FiCpu}>Tech Stack</SectionTab> : null}
            {/* <SectionTab href="#syllabus" Icon={FiLayers}>Syllabus</SectionTab>
            {hasProjects ? <SectionTab href="#projects" Icon={FiCheckCircle}>Projects</SectionTab> : null} */}
          </div>
        </div>
      </nav>

      {/* BODY */}
      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            {/* LEFT */}
            <div className="space-y-8">
              <Card id="overview" title="Overview" subtitle="About this program">
                <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  {course.overview || "Syllabus will be updated soon."}
                </p>

                {course.prerequisites?.length ? (
                  <div className="mt-6">
                    <h3 className="text-sm font-extrabold text-gray-900">Prerequisites</h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {course.prerequisites.map((p) => (
                        <ListChip key={p}>{p}</ListChip>
                      ))}
                    </div>
                  </div>
                ) : null}

                {course.outcomes?.length ? (
                  <div className="mt-6">
                    <h3 className="text-sm font-extrabold text-gray-900">
                      What you’ll be able to do
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {course.outcomes.map((o) => (
                        <li key={o} className="flex gap-2 text-sm text-gray-700">
                          <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Card>

              {/* ✅ Syllabus section so tab works */}
              {/* <Card id="syllabus" title="Syllabus" subtitle="Module-by-module breakdown">
                {hasModules ? (
                  <div className="space-y-3">
                    {course.modules.map((m) => (
                      <details
                        key={`${m.module}-${m.title}`}
                        className="group rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-extrabold text-indigo-700">
                                {m.module}
                              </span>
                              <span className="truncate text-sm font-extrabold text-gray-900">
                                {m.title}
                              </span>
                            </div>
                            <div className="mt-1 text-xs text-gray-500">
                              {m.topics?.length || 0} topics
                              {m.labs?.length ? ` • ${m.labs.length} labs` : ""}
                            </div>
                          </div>

                          <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 group-open:bg-gray-200">
                            View
                          </span>
                        </summary>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                          <SoftBox title="Topics">
                            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                              {(m.topics || []).map((t) => (
                                <li key={t}>{t}</li>
                              ))}
                            </ul>
                          </SoftBox>

                          {m.labs?.length ? (
                            <SoftBox title="Hands-on / Labs">
                              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                                {m.labs.map((l) => (
                                  <li key={l}>{l}</li>
                                ))}
                              </ul>
                            </SoftBox>
                          ) : null}
                        </div>
                      </details>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-700">Syllabus coming soon.</p>
                )}
              </Card> */}

              {/* ✅ Tech Stack */}
              {hasStack ? <TechStackCard stack={course.stack} /> : null}

              {/* ✅ Projects */}
              {/* {hasProjects ? (
                <Card id="projects" title="Projects" subtitle="Portfolio-ready work">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {course.projects.map((p) => (
                      <div
                        key={p.title}
                        className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                      >
                        <div className="text-sm font-extrabold text-gray-900">{p.title}</div>
                        {p.description ? (
                          <p className="mt-2 text-sm text-gray-700">{p.description}</p>
                        ) : null}

                        {p.deliverables?.length ? (
                          <>
                            <div className="mt-4 text-xs font-extrabold text-gray-700">
                              Deliverables
                            </div>
                            <ul className="mt-2 space-y-2">
                              {p.deliverables.map((d) => (
                                <li key={d} className="flex gap-2 text-sm text-gray-700">
                                  <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : null}
                      </div>
                    ))}
                  </div>

                </Card>
              ) : null} */}
            </div>

            {/* RIGHT */}
            <aside className="lg:sticky lg:top-20 lg:self-start">
              <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <div className="text-xs font-semibold text-gray-500">Next step</div>
                <div className="mt-2 text-lg font-extrabold text-gray-900">
                  Want a personalized study plan?
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  Tell us your goal—career switch, upskilling, or interview prep—and we’ll map the best track.
                </p>

                <div className="mt-5 grid gap-3">
                  <Link
                    href="/request-callback"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Request a Callback
                    <FiArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href={BASE}
                    className="inline-flex items-center justify-center rounded-full bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-200"
                  >
                    Explore other courses
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------- UI Bits -------------------- */

function Pill({ children, tone = "muted" }) {
  const cls =
    tone === "primary"
      ? "bg-indigo-500/15 text-indigo-200 ring-1 ring-indigo-400/25"
      : "bg-white/10 text-white/80 ring-1 ring-white/10";
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${cls}`}>
      {children}
    </span>
  );
}

/* ✅ Compact stat pill (below CTA) */
function HeroStat({ label, value }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
      <span className="text-[11px] font-semibold text-white/70">{label}</span>
      <span className="text-xs font-extrabold text-white">{value}</span>
    </div>
  );
}

/* ✅ Engaging tabs */
function SectionTab({ href, Icon, children }) {
  const I = Icon;
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow-sm hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
    >
      <I className="h-4 w-4 text-gray-500 group-hover:text-indigo-700" />
      <span className="whitespace-nowrap">{children}</span>
    </a>
  );
}

function Card({ id, title, subtitle, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
    >
      {subtitle ? <div className="text-xs font-semibold text-gray-500">{subtitle}</div> : null}
      <h2 className="mt-1 text-lg font-extrabold text-gray-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ListChip({ children }) {
  return (
    <div className="flex items-start gap-2 rounded-2xl bg-gray-50 p-3 ring-1 ring-black/5">
      <FiCheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
      <span className="text-sm text-gray-700">{children}</span>
    </div>
  );
}

function SoftBox({ title, children }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-4 ring-1 ring-black/5">
      <div className="text-xs font-extrabold text-gray-700">{title}</div>
      {children}
    </div>
  );
}

/* (kept) */
function HeroAnchor({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 hover:bg-white/15 ring-1 ring-white/10"
    >
      {children}
    </a>
  );
}
