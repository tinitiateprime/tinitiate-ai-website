// "use client";

// import Image from "next/image";
// import Link from "next/link";
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
// import { color } from "framer-motion";
// // -------------------- HERO --------------------
// const HERO = {
//   title: "Professional Training",
//   subtitle:
//     "Deep-dive programs for working professionals and serious learners in Databases, Cloud, DevOps, Web, Data Engineering, Analytics, and AI.",
//   badge: "Professional Training • TINITIATE",
// };

// // =====================================================================================
// // TECH STACK REGISTRY (ICON FIRST + IMAGE FALLBACK)
// // =====================================================================================
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
//   snowflake: { name: "Snowflake", Icon: SiSnowflake, color: "text-sky-600", path:'/courses/snowflake-data-platform-course' },
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
//   adls: { name: "ADLS Gen2", Icon: FiLayers, color: "text-blue-700", path: "/courses/coming-soon" },
//   adf: { name: "Azure Data Factory", Icon: FiTool, color: "text-slate-800", path: "/courses/coming-soon"},
//   databricks: { name: "Azure Databricks", Icon: SiDatabricks, color: "text-red-600",path: "/courses/coming-soon" },
//   synapse: { name: "Azure Synapse", Icon: FiDatabase, color: "text-slate-800",path: "/courses/coming-soon" },
//   eventhubs: { name: "Azure Event Hubs", Icon: FiActivity, color: "text-slate-800",path: "/courses/coming-soon" },
//   streamanalytics: { name: "Azure Stream Analytics", Icon: FiBarChart2, color: "text-slate-800",path: "/courses/coming-soon" },
//   functions: { name: "Azure Functions", Icon: FiZap, color: "text-slate-800",path: "/courses/coming-soon"},
//   logicapps: { name: "Azure Logic Apps", Icon: FiGitBranch, color: "text-slate-800", path: "/courses/coming-soon" },
//   delta: { name: "Delta Lake", Icon: FiLayers, color: "text-slate-800",path: "/courses/coming-soon" },

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


// // --- normalize tech keys (NO UI change, only makes icons appear reliably)
// const TECH_KEY_ALIASES = {
//   SQL: "sql",
//   Parquet: "parquet",
//   "lambda functions": "lambda",
//   "Lambda Functions": "lambda",
//   "Step Functions": "stepfunctions",
//   "step functions": "stepfunctions",
// };

// function normalizeTechKey(k) {
//   const raw = String(k ?? "").trim();
//   if (!raw) return raw;

//   if (STACK_TECH[raw]) return raw;
//   if (TECH_KEY_ALIASES[raw]) return TECH_KEY_ALIASES[raw];

//   const lower = raw.toLowerCase();
//   if (STACK_TECH[lower]) return lower;

//   const noSpaces = lower.replace(/\s+/g, "");
//   if (STACK_TECH[noSpaces]) return noSpaces;

//   return raw;
// }

// // =====================================================================================
// // WEB / FULL STACK COURSE STACKS (existing)
// // =====================================================================================
// const COURSE_STACKS = {
//   "java-full-stack-development": {
//     frontend: ["html", "css", "js", "react", "bootstrap"],
//     backend: ["java", "spring", "springboot"],
//     database: ["postgres", "sqlserver", "mongo"],
//     cloud: ["aws", "azure", "gcp"],
//     cicd: ["git", "gha", "gitlab", "circleci", "azuredevops", "jenkins"],
//   },
//   "react-web-development": {
//     frontend: ["html", "css", "js", "ts", "react", "bootstrap"],
//     backend: ["node"],
//     database: ["postgres", "sqlserver", "mongo"],
//     cloud: ["amplify", "netlify", "vercel"],
//     cicd: ["git", "gha", "gitlab", "azuredevops", "bitbucket", "jenkins"],
//   },
//   "nextjs-web-development": {
//     frontend: ["html", "css", "js", "ts", "react", "next", "bootstrap"],
//     backend: ["node"],
//     database: ["postgres", "sqlserver", "mongo"],
//     cloud: ["amplify", "netlify", "vercel"],
//     cicd: ["git", "gha", "gitlab", "azuredevops", "bitbucket", "jenkins"],
//   },
//   "angular-web-development": {
//     frontend: ["html", "css", "ts", "angular", "bootstrap"],
//     backend: ["node"],
//     database: ["postgres", "sqlserver", "mongo"],
//     cloud: ["amplify", "netlify", "vercel"],
//     cicd: ["git", "gitlab", "circleci", "azuredevops", "bitbucket", "jenkins"],
//   },
// };

// // =====================================================================================
// // ✅ DATA ENGINEERING PACKAGES (icons-based blocks)
// // =====================================================================================
// const DATA_ENGINEERING_PACKAGES = [
//   {
//     key: "aws-data-engineering",
//     title: "AWS Data Engineering",
//     subtitle: "S3 • Glue • Athena • Kinesis • Redshift",
//     heroTech: "aws",
//     blocks: {
//       "Core Skills": ["python", "SQL", ],
//       "Data Format":["csv", "json", "xml", "Parquet"],
//       "Database":["redshift", "rds"],
//       "Data Lake": ["s3"],
//       "Batch ETL": ["glue", "emr", "pyspark", "athena", "lambda functions", "Step Functions"],
//       "Streaming and Orchestration": ["kinesis", "kafka", "airflow"],
//       "CI/CD": ["terraform", "git", "docker"],
//     },
//   }, 
//   {
//     key: "snowflake-data-engineering",
//     title: "Snowflake Data Engineering",
//     subtitle: "Snowpipe • Snowpark • Streams/Tasks • Marts",
//     heroTech: "snowflake",
//     blocks: {
//       "Core Skills": ["snowflake", "python"],
//       "Ingestion": ["snowpipe"],
//       "Transform": ["snowpark"],
//       "Streaming/Events": ["kafka"],
//       "Orchestration": ["airflow"],
//       "CI/CD": ["terraform", "git", "docker"],
//     },
//   },
//   {
//     key: "azure-data-engineering",
//     title: "Azure Data Engineering",
//     subtitle: "ADLS • ADF • Databricks (Delta) • Synapse",
//     heroTech: "azure",
//     blocks: {
//       "Core Skills": ["python", "sql"],
//        "Data Fomat":["csv", "json", "xml", "parquet"],
//       "Data Lake": ["adls"],
//       "Batch ETL": ["adf", "databricks", "pyspark", "delta", "synapse"],
//       "Streaming and Orchestration": ["eventhubs", "kafka", "streamanalytics"],
//       "Automation": ["functions", "logicapps"],
//       "CI/CD": ["terraform", "git", "azuredevops", "docker"],
//     },
//   },
//   {
//     key: "gcp-data-engineering",
//     title: "GCP Data Engineering",
//     subtitle: "GCS • Dataflow • BigQuery • Pub/Sub",
//     heroTech: "gcp",
//     blocks: {
//       "Core Skills": ["python", "sql"],
//        "Data Fomat":["csv", "json", "parquet"],
//       "Storage": ["gcs"],
//       "Processing": ["dataflow", "bigquery"],
//       "Streaming": ["pubsub"],
//       "Orchestration": ["airflow"],
//       "CI/CD": ["terraform", "docker", "git"],
//     },
//   },
//   {
//   key: "visualization-course",  // Unique key for the course
//   title: "Visualization",  // Title of the course
//   subtitle: "QuickSight • Power BI",  // Tools for visualization
//   heroTech: "visualization",  // Reference to the visualization tech (can be a custom icon or label)
//   blocks: {
 
//     "frontend": ["quickSight", "powerBI"], 
//     "backend": ["sql"]  
//   }
// }
// ];

// // =====================================================================================
// // COURSES DISPLAY (existing top section)
// // =====================================================================================
// const STACK_COURSES = [
//   {
//     courseKey: "java-full-stack-development",
//     title: "Java Full Stack Development",
//     subtitle: "Spring Boot + React + DB + CI/CD",
//     heroTech: "springboot",
//   },
//   {
//     courseKey: "react-web-development",
//     title: "React Web Development",
//     subtitle: "React + TypeScript + Hosting",
//     heroTech: "react",
//   },
//   {
//     courseKey: "nextjs-web-development",
//     title: "Next.js Web Development",
//     subtitle: "Next.js + React + TypeScript + Deployment",
//     heroTech: "next",
//   },
//   {
//     courseKey: "angular-web-development",
//     title: "Angular Web Development",
//     subtitle: "Angular + TypeScript + API + Deployment",
//     heroTech: "angular",
//   },
// ];

// // =====================================================================================
// // UI HELPERS
// // =====================================================================================
// function StackMark({ techKey, size = 18 }) {
//   const key = normalizeTechKey(techKey);
//   const t = STACK_TECH[key];
//   if (!t) return null;

//   const iconIsValid = typeof t.Icon === "function";
//   const iconIsNone = t.Icon === "none";

//   if (iconIsValid) {
//     const I = t.Icon;
//     return <I className={t.color || "text-slate-700"} style={{ width: size, height: size }} />;
//   }

//   if ((iconIsNone || !t.Icon) && t.img) {
//     return <Image src={t.img} alt={t.name} width={size} height={size} className="object-contain" />;
//   }

//   return (
//     <span
//       className="inline-flex items-center justify-center rounded bg-gray-200 text-[10px] text-gray-700"
//       style={{ width: 20, height: size }}
//       title={t.name}
//     >
//       ?
//     </span>
//   );
// }

// function TechItem({ techKey }) {
//   const key = normalizeTechKey(techKey);
//   const t = STACK_TECH[key];

//   if (!t) return null;
//   return (
//     <>
//       <Link href={`${t.path}`}>
//     <div
//       className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm"
//       title={t.name}
//     > 
//       <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
//         <StackMark techKey={key} size={36} />
//       </div>

//       <div className="min-w-0">
//         <div className="truncate text-[12px] font-semibold text-gray-900">{t.name}</div>
//       </div>
  
//     </div>
//         </Link>
//         </>
//   );
// }



// function MiniSection({ title, items }) {
//   if (!items?.length) return null;

//   return (
//     <div className="rounded-2xl border border-gray-200 bg-gray-50 p-3">
//       <div className="mb-2 text-[12px] font-semibold text-gray-800">{title}</div>
//       <div className="grid gap-2 [grid-template-columns:repeat(auto-fill,minmax(140px,1fr))]">
//         {items.map((k, idx) => (
//           <TechItem key={`${String(k)}-${idx}`} techKey={k} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function CourseHeader({ course }) {
//   return (
//     <div className="flex items-start justify-between gap-3">
//       <div className="min-w-0">
//         <div className="flex items-center gap-3">
//           <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50">
//             <StackMark techKey={course.heroTech} size={22} />
//           </div>

//           <div className="min-w-0">
//             <div className="text-[15px] font-semibold text-gray-900">{course.title}</div>
//             <div className="mt-0.5 text-xs text-gray-600">{course.subtitle}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CourseCardMini({ course }) {
//   const stack = COURSE_STACKS[course.courseKey] || {};

//   return (
//     <Link href={`/training/professional-training/${course.courseKey}`} className="block">
//       <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
//         <CourseHeader course={course} />

//         <div className="mt-4 grid gap-3 sm:grid-cols-2">
//           <MiniSection title="Frontend" items={stack.frontend || []} />
//           <MiniSection title="Backend" items={stack.backend || []} />
//           <MiniSection title="Database" items={stack.database || []} />
//           <MiniSection title="Cloud / Hosting" items={stack.cloud || []} />
//           <div className="sm:col-span-2">
//             <MiniSection title="CI/CD" items={stack.cicd || []} />
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// function DataEngCard({ pkg }) {
//   const entries = Object.entries(pkg.blocks || {});

//   return (
   
//       <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
//          <Link href={`/training/professional-training/${pkg.key}`} className="block">
//         <CourseHeader course={pkg} />
//     </Link>
//         <div className="mt-4 grid gap-3 sm:grid-cols-2">
//           {entries.map(([title, items]) => (
//             <div key={title} className="sm:col-span-2">
//               <MiniSection title={title} items={items} />
//             </div>
//           ))}
//         </div>
//       </div>
  
//   );
// }

// // =====================================================================================
// // PAGE (UI unchanged)
// // =====================================================================================
// export default function Page() {
//   return (
//     <main className="bg-white text-gray-900">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-black px-6 py-20">
//         <div className="pointer-events-none absolute inset-0 bg-black opacity-60" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-black opacity-40" />

//         <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center">
//           <div className="flex-1">
//             <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
//               <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
//               {HERO.badge}
//               <span className="mx-2 h-3 w-px bg-slate-600" />
//               <span className="font-semibold text-emerald-300">Online Training</span>
//             </span>

//             <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
//               {HERO.title}
//             </h1>

//             <p className="mt-4 max-w-xl text-sm md:text-base text-slate-200">
//               All professional programs are delivered as{" "}
//               <span className="font-semibold text-emerald-300">online classes</span>{" "}
//               with project-focused mentor guidance.
//             </p>

//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
//               >
//                 Schedule a counselling call
//                 <FiArrowRight className="h-4 w-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* STACK SECTION */}
//       <section className="bg-gray-50 px-6 py-16">
//         <div className="mx-auto grid max-w-7xl gap-10">
//           <div>
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
//               Professional training you can choose
//             </h2>

//             <div className="mt-6 grid gap-5 md:grid-cols-2">
//               {STACK_COURSES.map((c) => (
//                 <CourseCardMini key={c.courseKey} course={c} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* DATA ENGINEERING SECTION */}
//       <section className="bg-white px-6 py-16">
//         <div className="mx-auto max-w-7xl">
//           <div>
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
//               Data Engineering
//             </h2>
//             <p className="mt-2 text-sm text-gray-600">
//               Choose your track based on the target platform: AWS, Snowflake, Azure, or GCP.
//             </p>
//           </div>

//           <div className="mt-8 grid gap-5 md:grid-cols-2">
//             {DATA_ENGINEERING_PACKAGES.map((pkg) => (
//               <DataEngCard key={pkg.key} pkg={pkg} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 py-12">
//         <div className="mx-auto max-w-7xl">
//           <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
//             <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//               <div>
//                 <h4 className="text-lg font-bold text-gray-900">Want a personalized study plan?</h4>
//                 <p className="text-sm text-gray-700">
//                   Tell us your goals—career switch, upskilling, or interview prep—and we’ll map the
//                   path.
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 <Link
//                   href="/request-callback"
//                   className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
//                 >
//                   <FiPhone className="h-4 w-4" />
//                   Request a Callback
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }









// "use client"

// import Image from "next/image"
// import Link from "next/link"

// import { SiSpring, SiReact, SiNextdotjs, SiAngular, SiSnowflake } from "react-icons/si"
// import { FaAws, FaJava } from "react-icons/fa6"
// import { FiArrowRight, FiPhone, FiBarChart2 } from "react-icons/fi"

// // -------------------- HERO --------------------
// const HERO = {
//   title: "Professional Training",
//   subtitle:
//     "Deep-dive programs for working professionals and serious learners in Databases, Cloud, DevOps, Web, Data Engineering, Analytics, and AI.",
//   badge: "Professional Training • TINITIATE",
// }

// // -------------------- Safe href helper --------------------
// function safeHref(href, fallback = "/training/professional-training") {
//   if (typeof href !== "string") return fallback
//   const h = href.trim()
//   if (!h) return fallback
//   if (h.includes("undefined") || h.includes("null")) return fallback
//   return h
// }

// // -------------------- HERO TECH (icon/logo shown in card image area) --------------------
// const HERO_TECH = {
//   Java: { name: "Java", Icon: FaJava, color: "text-green-700" },
//   react: { name: "React", Icon: SiReact, color: "text-cyan-600" },
//   next: { name: "Next.js", Icon: SiNextdotjs, color: "text-gray-900" },
//   angular: { name: "Angular", Icon: SiAngular, color: "text-red-600" },

//   aws: { name: "AWS", Icon: FaAws, color: "text-orange-600" },
//   snowflake: { name: "Snowflake", Icon: SiSnowflake, color: "text-sky-600" },

//   // If you want logo images for these:
//   azure: { name: "Azure", Icon: "none", img: "/images/courses/microsoftAzure.png" },
//   gcp: { name: "Google Cloud", Icon: "none", img: "/images/courses/google-cloud.png" },

//   // Visualization package heading icon
//   visualization: { name: "Visualization", Icon: FiBarChart2, color: "text-blue-600" },
// }

// function HeroMark({ techKey, size = 64 }) {
//   const t = HERO_TECH[techKey]
//   if (!t) return null

//   const iconIsValid = typeof t.Icon === "function"
//   const iconIsNone = t.Icon === "none"

//   if (iconIsValid) {
//     const I = t.Icon
//     return <I className={t.color || "text-slate-700"} style={{ width: size, height: size }} />
//   }

//   if ((iconIsNone || !t.Icon) && t.img) {
//     return (
//       <Image
//         src={t.img}
//         alt={t.name}
//         width={size}
//         height={size}
//         className="object-contain"
//       />
//     )
//   }

//   return (
//     <div
//       className="flex items-center justify-center rounded-lg bg-gray-200 text-xs text-gray-700"
//       style={{ width: size, height: size }}
//       title={t.name}
//     >
//       ?
//     </div>
//   )
// }

// // -------------------- MAIN PROGRAMS (navigation unchanged) --------------------
// const STACK_COURSES = [
//   {
//     courseKey: "java-full-stack-development",
//     title: "Java Full Stack Development",
//     description: "Spring Boot + React + DB + CI/CD",
//     heroTech: "Java",
//   },
//   {
//     courseKey: "react-web-development",
//     title: "React Web Development",
//     description: "React + TypeScript + Hosting",
//     heroTech: "react",
//   },
//   {
//     courseKey: "nextjs-web-development",
//     title: "Next.js Web Development",
//     description: "Next.js + React + TypeScript + Deployment",
//     heroTech: "next",
//   },
//   {
//     courseKey: "angular-web-development",
//     title: "Angular Web Development",
//     description: "Angular + TypeScript + API + Deployment",
//     heroTech: "angular",
//   },
// ]

// // -------------------- DATA ENGINEERING PACKAGES (navigation unchanged) --------------------
// const DATA_ENGINEERING_PACKAGES = [
//   {
//     key: "aws-data-engineering",
//     title: "AWS Data Engineering",
//     description: "S3 • Glue • Athena • Kinesis • Redshift",
//     heroTech: "aws",
//   },
//   {
//     key: "snowflake-data-engineering",
//     title: "Snowflake Data Engineering",
//     description: "Snowpipe • Snowpark • Streams/Tasks • Marts",
//     heroTech: "snowflake",
//   },
//   {
//     key: "azure-data-engineering",
//     title: "Azure Data Engineering",
//     description: "ADLS • ADF • Databricks (Delta) • Synapse",
//     heroTech: "azure",
//   },
//   {
//     key: "gcp-data-engineering",
//     title: "GCP Data Engineering",
//     description: "GCS • Dataflow • BigQuery • Pub/Sub",
//     heroTech: "gcp",
//   },
//   {
//     key: "visualization-course",
//     title: "Visualization",
//     description: "QuickSight • Power BI",
//     heroTech: "visualization",
//   },
// ]

// // -------------------- Card component (your UI pattern) --------------------
// function CourseCard({ title, description, href, heroTech }) {
//   const finalHref = safeHref(href)

//   return (
//     <div className="rounded-xl shadow bg-white flex flex-col transition hover:shadow-md border border-gray-100">
//       {/* Image/Icon Area */}
//       <div className="relative h-40 w-full flex items-center justify-center bg-gray-50 rounded-t-xl">
//         <HeroMark techKey={heroTech} size={72} />
//       </div>

//       <div className="p-6 flex flex-col justify-between grow">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
//           <p className="text-sm text-gray-600">{description}</p>
//         </div>

//         <Link
//           href={finalHref}
//           prefetch={false}
//           className="mt-4 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition inline-flex items-center justify-center gap-2"
//         >
//           View Course <FiArrowRight className="h-4 w-4" />
//         </Link>
//       </div>
//     </div>
//   )
// }

// // =====================================================================================
// // PAGE
// // =====================================================================================
// export default function Page() {
//   return (
//     <main className="bg-white text-gray-900">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-black px-6 py-20">
//         <div className="pointer-events-none absolute inset-0 bg-black opacity-60" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-black opacity-40" />

//         <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8">
//           <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
//             <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
//             {HERO.badge}
//             <span className="mx-2 h-3 w-px bg-slate-600" />
//             <span className="font-semibold text-emerald-300">Online Training</span>
//           </span>

//           <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
//             {HERO.title}
//           </h1>

//           <p className="max-w-2xl text-sm md:text-base text-slate-200">{HERO.subtitle}</p>

//           <div className="mt-2 flex flex-wrap items-center gap-4">
//             <Link
//               href="/request-callback"
//               className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
//             >
//               Schedule a counselling call <FiPhone className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* MAIN PROGRAMS as Cards */}
//       <section className="bg-gray-50 px-6 py-16">
//         <div className="mx-auto max-w-7xl">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
//             Professional training you can choose
//           </h2>

//           <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
//             {STACK_COURSES.map((course) => (
//               <CourseCard
//                 key={course.courseKey}
//                 title={course.title}
//                 description={course.description}
//                 heroTech={course.heroTech}
//                 href={`/training/professional-training/${course.courseKey}`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* DATA ENGINEERING as Cards */}
//       <section className="bg-white px-6 py-16">
//         <div className="mx-auto max-w-7xl">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
//             Data Engineering
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Choose your track based on the target platform: AWS, Snowflake, Azure, or GCP.
//           </p>

//           <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
//             {DATA_ENGINEERING_PACKAGES.map((pkg) => (
//               <CourseCard
//                 key={pkg.key}
//                 title={pkg.title}
//                 description={pkg.description}
//                 heroTech={pkg.heroTech}
//                 href={`/training/professional-training/${pkg.key}`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 py-12">
//         <div className="mx-auto max-w-7xl">
//           <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
//             <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//               <div>
//                 <h4 className="text-lg font-bold text-gray-900">Want a personalized study plan?</h4>
//                 <p className="text-sm text-gray-700">
//                   Tell us your goals—career switch, upskilling, or interview prep—and we’ll map the
//                   path.
//                 </p>
//               </div>

//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
//               >
//                 <FiPhone className="h-4 w-4" />
//                 Request a Callback
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

















// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { SiReact, SiNextdotjs, SiAngular, SiSnowflake } from "react-icons/si";
// import { FaAws, FaJava } from "react-icons/fa6";
// import { FiArrowRight, FiPhone, FiBarChart2, FiCheckCircle, FiZap, FiStar, FiCpu, FiTool  } from "react-icons/fi";
// import { HiSparkles as FiSparkles } from "react-icons/hi";

// // -------------------- HERO --------------------
// const HERO = {
//   title: "Professional Training",
//   subtitle:
//     "Deep-dive programs for working professionals and serious learners in Databases, Cloud, DevOps, Web, Data Engineering, Analytics, and AI.",
//   badge: "Professional Training • TINITIATE",
// };
  

// const includedItems = [
//   { icon: FiZap, label: "Prompt Engineering", iconClass: "text-indigo-600" },
//   { icon: FiCpu, label: "Generative AI", iconClass: "text-violet-600" },
//   { icon: FiTool, label: "Agentic AI", iconClass: "text-sky-600" },
//   { icon: FiCheckCircle, label: "Hands-on Projects", iconClass: "text-emerald-600" },
// ];


// // -------------------- Safe href helper --------------------
// function safeHref(href, fallback = "/training/professional-training") {
//   if (typeof href !== "string") return fallback;
//   const h = href.trim();
//   if (!h) return fallback;
//   if (h.includes("undefined") || h.includes("null")) return fallback;
//   return h;
// }

// // -------------------- HERO TECH --------------------
// const HERO_TECH = {
//   Java: { name: "Java", Icon: FaJava, color: "text-red-500" },
//   react: { name: "React", Icon: SiReact, color: "text-cyan-500" },
//   next: { name: "Next.js", Icon: SiNextdotjs, color: "text-slate-900" },
//   angular: { name: "Angular", Icon: SiAngular, color: "text-red-500" },

//   aws: { name: "AWS", Icon: FaAws, color: "text-amber-400" },
//   snowflake: { name: "Snowflake", Icon: SiSnowflake, color: "text-sky-500" },

//   azure: { name: "Azure", Icon: "none", img: "/images/courses/microsoftAzure.png" },
//   gcp: { name: "Google Cloud", Icon: "none", img: "/images/courses/google-cloud.png" },

//   visualization: { name: "Visualization", Icon: FiBarChart2, color: "text-blue-600" },
// };


// function HeroMark({ techKey, size = 64 }) {
//   const t = HERO_TECH[techKey];
//   if (!t) return null;

//   const iconIsValid = typeof t.Icon === "function";
//   const iconIsNone = t.Icon === "none";

//   if (iconIsValid) {
//     const I = t.Icon;
//     return <I className={t.color || "text-slate-700"} style={{ width: size, height: size }} />;
//   }

//   if ((iconIsNone || !t.Icon) && t.img) {
//     return <Image src={t.img} alt={t.name} width={size} height={size} className="object-contain" />;
//   }

//   return (
//     <div
//       className="flex items-center justify-center rounded-2xl bg-gray-200 text-xs text-gray-700"
//       style={{ width: size, height: size }}
//       title={t.name}
//     >
//       ?
//     </div>
//   );
// }

// // -------------------- MAIN PROGRAMS --------------------
// const STACK_COURSES = [
//   {
//     courseKey: "java-full-stack-development",
//     title: "Java Full Stack Development",
//     description: "Spring Boot + React + DB + CI/CD",
//     heroTech: "Java",
//     tag: "Most Popular",
//   },
//   {
//     courseKey: "react-web-development",
//     title: "React Web Development",
//     description: "React + TypeScript + Hosting",
//     heroTech: "react",
//     tag: "Frontend",
//   },
//   {
//     courseKey: "nextjs-web-development",
//     title: "Next.js Web Development",
//     description: "Next.js + React + TypeScript + Deployment",
//     heroTech: "next",
//     tag: "Full Stack",
//   },
//   {
//     courseKey: "angular-web-development",
//     title: "Angular Web Development",
//     description: "Angular + TypeScript + API + Deployment",
//     heroTech: "angular",
//     tag: "Frontend",
//   },
// ];

// // -------------------- DATA ENGINEERING PACKAGES --------------------
// const DATA_ENGINEERING_PACKAGES = [
//   {
//     key: "aws-data-engineering",
//     title: "AWS Data Engineering",
//     description: "S3 • Glue • Athena • Kinesis • Redshift",
//     heroTech: "aws",
//     tag: "Cloud",
//   },
//   {
//     key: "snowflake-data-engineering",
//     title: "Snowflake Data Engineering",
//     description: "Snowpipe • Snowpark • Streams/Tasks • Marts",
//     heroTech: "snowflake",
//     tag: "Data Platform",
//   },
//   {
//     key: "azure-data-engineering",
//     title: "Azure Data Engineering",
//     description: "ADLS • ADF • Databricks (Delta) • Synapse",
//     heroTech: "azure",
//     tag: "Cloud",
//   },
//   {
//     key: "gcp-data-engineering",
//     title: "GCP Data Engineering",
//     description: "GCS • Dataflow • BigQuery • Pub/Sub",
//     heroTech: "gcp",
//     tag: "Cloud",
//   },
// ];

// const Visualization = [
//   {
//     key: "visualization-course",
//     title: "Visualization",
//     description: "QuickSight • Power BI",
//     heroTech: "visualization",
//     tag: "Analytics",
//   },
// ];

// // -------------------- UI HELPERS --------------------
// function Container({ children }) {
//   return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
// }

// function SectionHeader({ title, subtitle, kicker }) {
//   return (
//     <div className="flex flex-col gap-2">
//       {kicker ? (
//         <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
//           <span className="h-2 w-2 rounded-full bg-indigo-500" />
//           {kicker}
//         </div>
//       ) : null}

//       <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">{title}</h2>
//       {subtitle ? <p className="text-sm text-gray-600 md:text-base">{subtitle}</p> : null}
//     </div>
//   );
// }

// // -------------------- Card component (fixed CTA alignment) --------------------
// function CourseCard({ title, description, href, heroTech, tag }) {
//   const finalHref = safeHref(href);

//   return (
// <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-indigo-200 bg-white shadow-sm ring-1 ring-indigo-100 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
//   {/* subtle premium glow layer */}
//   <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//     <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo-100/40 to-transparent" />
//     <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-indigo-200/40 blur-2xl" />
//     <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-sky-200/30 blur-2xl" />
//   </div>

//   {/* BIG ICON / IMAGE AREA */}
//   <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-50">
//     {/* ✅ top badges row (no overlap) */}
//     <div className="absolute inset-x-3 top-3 z-20 flex items-center justify-between gap-2">
//       <div className="inline-flex min-w-0 items-center gap-1 rounded-full border border-indigo-200 bg-white/90 px-3 py-1 text-[11px] font-semibold text-indigo-700 shadow-sm backdrop-blur">
//         <FiSparkles  className="h-3.5 w-3.5 shrink-0" />
//         <span className="truncate">AI Included</span>
//       </div>

//       <div className="inline-flex min-w-0 items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700 shadow-sm">
//         <FiStar className="h-3.5 w-3.5 shrink-0" />
//         <span className="truncate">Premium</span>
//       </div>
//     </div>

//     {/* center icon */}
//     <div className="relative mt-4 flex h-28 w-28 items-center justify-center rounded-3xl border border-indigo-200 bg-white shadow-sm ring-1 ring-white">
//       <HeroMark techKey={heroTech} size={74} />
//     </div>
//   </div>

//   {/* Content */}
//   <div className="flex grow flex-col p-6">
//     <div className="min-h-[76px]">
//       <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
//       <p className="mt-2 text-sm leading-5 text-gray-600">{description}</p>
//     </div>

//     {/* Included section */}
//     <div className="mt-2 rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 to-white p-3">
//       <div className="mb-3 flex items-center gap-2">
//         <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
//           <FiStar className="h-3.5 w-3.5 text-indigo-700" />
//         </div>
//         <p className="text-xs font-semibold uppercase tracking-wide text-indigo-800">
//           Included in this course
//         </p>
//       </div>

//       <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
//         {includedItems.map((item) => {
//           const Icon = item.icon;
//           return (
//             <li
//               key={item.label}
//               className="flex items-center gap-2 rounded-lg border border-white bg-white px-2.5 py-2 text-xs font-medium text-gray-700 shadow-sm"
//             >
//               <Icon className={`h-4 w-4 shrink-0 ${item.iconClass}`} />
//               <span className="truncate">{item.label}</span>
//             </li>
//           );
//         })}
//       </ul>
//     </div>

//     {/* CTA pinned bottom */}
//     <div className="mt-auto pt-5">
//       <Link
//         href={finalHref}
//         prefetch={false}
//         className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
//       >
//         View Course
//         <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
//       </Link>
//     </div>
//   </div>
// </div>
//   );
// }

// // =====================================================================================
// // PAGE
// // =====================================================================================
// export default function Page() {
//   return (
//     <main className="bg-white text-gray-900">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-black">
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute -top-28 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
//           <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.18),transparent_35%)]" />
//           <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
//         </div>

//         <Container>
//           <div className="relative py-16 sm:py-20">
//             <div className="flex flex-col items-start gap-6">
//               <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
//                 <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
//                 {HERO.badge}
//                 <span className="mx-2 h-3 w-px bg-slate-600" />
//                 <span className="font-semibold text-emerald-300">Online Training</span>
//               </span>

//               <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
//                 <span className="bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-transparent">
//                   {HERO.title}
//                 </span>
//               </h1>

//               <p className="max-w-2xl text-sm text-slate-200 md:text-base">{HERO.subtitle}</p>

//               <div className="mt-1 flex flex-wrap items-center gap-4">
//                 <Link
//                   href="/request-callback"
//                   className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
//                 >
//                   Schedule a counselling call <FiPhone className="h-4 w-4" />
//                 </Link>
//               </div>

//               {/* ✅ Removed "Job-ready Roadmap" */}
//               <div className="mt-2 flex flex-wrap gap-2">
//                 <HeroBenefit text="Mentor-led" />
//                 <HeroBenefit text="Hands-on Projects" />
//                 <HeroBenefit text="Interview Prep" />
//               </div>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* MAIN PROGRAMS */}
//       <section className="bg-gray-50 py-16">
//         <Container>
//           <SectionHeader
//             kicker="Web & Full-Stack"
//             title="Full-Stack Development"
//             subtitle="Pick a track and start building production-ready skills with guided projects."
//           />

//           <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {STACK_COURSES.map((course) => (
//               <CourseCard
//                 key={course.courseKey}
//                 title={course.title}
//                 description={course.description}
//                 heroTech={course.heroTech}
//                 href={`/training/professional-training/${course.courseKey}`}
//                 tag={course.tag}
//               />
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* DATA ENGINEERING */}
//       <section className="bg-white py-16">
//         <Container>
//           <SectionHeader
//             kicker="Data Engineering"
//             title="Data Engineering"
//             subtitle="Choose your track based on the target platform: AWS, Snowflake, Azure, or GCP."
//           />

//           <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {DATA_ENGINEERING_PACKAGES.map((pkg) => (
//               <CourseCard
//                 key={pkg.key}
//                 title={pkg.title}
//                 description={pkg.description}
//                 heroTech={pkg.heroTech}
//                 href={`/training/professional-training/${pkg.key}`}
//                 tag={pkg.tag}
//               />
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* Visualization */}
//       <section className="bg-white py-16">
//   <Container>
//     <SectionHeader
//       kicker="Visualization"
//       title="Visualization"
//       subtitle="Build dashboarding & BI skills with QuickSight and Power BI—turn data into clear, decision-ready insights."
//     />

//     <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//       {Visualization.map((pkg) => (
//         <CourseCard
//           key={pkg.key}
//           title={pkg.title}
//           description={pkg.description}
//           heroTech={pkg.heroTech}
//           href={`/training/professional-training/${pkg.key}`}
//           tag={pkg.tag}
//         />
//       ))}
//     </div>
//   </Container>
// </section>


//       {/* CTA */}
//       <section className="py-14">
//         <Container>
//           <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 sm:p-8">
//             <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl" />
//             <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />

//             <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//               <div>
//                 <h4 className="text-lg font-extrabold text-gray-900">
//                   Want a personalized study plan?
//                 </h4>
//                 <p className="mt-1 text-sm text-gray-700">
//                   Tell us your goals—career switch, upskilling, or interview prep—and we’ll map the path.
//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {/* <CtaChip icon={<FiCheckCircle className="h-4 w-4" />} text="Free counselling call" />
//                   <CtaChip icon={<FiZap className="h-4 w-4" />} text="Track recommendation" />
//                   <CtaChip icon={<FiBarChart2 className="h-4 w-4" />} text="Roadmap + milestones" /> */}
//                 </div>
//               </div>

//               <Link
//                 href="/request-callback"
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
//               >
//                 <FiPhone className="h-4 w-4" />
//                 Request a Callback
//               </Link>
//             </div>
//           </div>
//         </Container>
//       </section>
//     </main>
//   );
// }

// // -------------------- tiny UI atoms --------------------
// function HeroBenefit({ text }) {
//   return (
//     <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
//       {text}
//     </span>
//   );
// }

// function CtaChip({ icon, text }) {
//   return (
//     <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm">
//       <span className="text-indigo-600">{icon}</span>
//       {text}
//     </span>
//   );
// }













"use client";

import Image from "next/image";
import Link from "next/link";
import AiDevelopBanner from "../../components/AiDevelopBanner";
import { SiReact, SiNextdotjs, SiAngular, SiSnowflake } from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa6";
import {
  FiArrowRight,
  FiPhone,
  FiBarChart2,
  FiCheckCircle,
  FiZap,
  FiStar,
  FiCpu,
  FiTool,
} from "react-icons/fi";
import { HiSparkles as FiSparkles } from "react-icons/hi";
import { RiRobot2Line } from "react-icons/ri"
// -------------------- HERO --------------------
const HERO = {
  title: "Professional Training",
  subtitle:
    "Deep-dive programs for working professionals and serious learners in Databases, Cloud, DevOps, Web, Data Engineering, Analytics, and AI.",
  badge: "Professional Training • TINITIATE",
};

// -------------------- Safe href helper --------------------
function safeHref(href, fallback = "/training/professional-training") {
  if (typeof href !== "string") return fallback;
  const h = href.trim();
  if (!h) return fallback;
  if (h.includes("undefined") || h.includes("null")) return fallback;
  return h;
}

// -------------------- tiny helper --------------------
function makeMapByKey(items) {
  return items.reduce((acc, item) => {
    acc[item.key] = item;
    return acc;
  }, {});
}

// -------------------- HERO TECH REGISTRY (array -> map) --------------------
const HERO_TECH_REGISTRY = [
  { key: "Java", name: "Java", Icon: FaJava, color: "text-red-500" },
  { key: "react", name: "React", Icon: SiReact, color: "text-cyan-500" },
  { key: "next", name: "Next.js", Icon: SiNextdotjs, color: "text-slate-900" },
  { key: "angular", name: "Angular", Icon: SiAngular, color: "text-red-500" },

  { key: "aws", name: "AWS", Icon: FaAws, color: "text-amber-400" },
  { key: "snowflake", name: "Snowflake", Icon: SiSnowflake, color: "text-sky-500" },

  { key: "azure", name: "Azure", Icon: null, img: "/images/courses/microsoftAzure.png" },
  { key: "gcp", name: "Google Cloud", Icon: null, img: "/images/courses/google-cloud.png" },

  { key: "visualization", name: "Visualization", Icon: FiBarChart2, color: "text-blue-600" },
];

const HERO_TECH_MAP = makeMapByKey(HERO_TECH_REGISTRY);

// -------------------- FEATURE ICON REGISTRY (array -> map) --------------------
const FEATURE_ICON_REGISTRY = [
  { key: "zap", Icon: FiZap },
  { key: "cpu", Icon: FiCpu },
  { key: "tool", Icon: FiTool },
  { key: "check", Icon: FiCheckCircle },
  { key: "barChart", Icon: FiBarChart2 },
  { key: "robot", Icon: RiRobot2Line  },
];

const FEATURE_ICON_MAP = FEATURE_ICON_REGISTRY.reduce((acc, item) => {
  acc[item.key] = item.Icon;
  return acc;
}, {});

// -------------------- AI TOOL REGISTRY (data-driven feature definitions) --------------------
const AI_TOOL_REGISTRY = [
  {
    key: "prompt-engineering",
    label: "Prompt Engineering",
    iconKey: "zap",
    iconClass: "text-indigo-600",
  },
  {
    key: "generative-ai",
    label: "Generative AI",
    iconKey: "cpu",
    iconClass: "text-violet-600",
  },
  {
    key: "agentic-ai",
    label: "Agentic AI",
    iconKey: "robot",
    iconClass: "text-sky-600",
  },
  {
    key: "hands-on-projects",
    label: "Hands-on Projects",
    iconKey: "check",
    iconClass: "text-emerald-600",
  },
  {
    key: "machine-learning",
    label: "Machine Learning",
    iconKey: "barChart",
    iconClass: "text-rose-600",
  },
  {
    key: "llm-evaluation",
    label: "LLM Evaluation",
    iconKey: "check",
    iconClass: "text-amber-600",
  },
];

const AI_TOOL_MAP = makeMapByKey(AI_TOOL_REGISTRY);

function resolveAiTools(aiToolKeys) {
  if (!Array.isArray(aiToolKeys)) return [];
  return aiToolKeys.map((k) => AI_TOOL_MAP[k]).filter(Boolean);
}

function HeroMark({ techKey, size = 64 }) {
  const t = HERO_TECH_MAP[techKey];
  if (!t) return null;

  if (typeof t.Icon === "function") {
    const I = t.Icon;
    return <I className={t.color || "text-slate-700"} style={{ width: size, height: size }} />;
  }

  if (t.img) {
    return <Image src={t.img} alt={t.name} width={size} height={size} className="object-contain" />;
  }

  return (
    <div
      className="flex items-center justify-center rounded-2xl bg-gray-200 text-xs text-gray-700"
      style={{ width: size, height: size }}
      title={t.name}
    >
      ?
    </div>
  );
}

// -------------------- MAIN PROGRAMS --------------------
const STACK_COURSES = [
  {
    courseKey: "java-full-stack-development",
    title: "Java Full Stack Development",
    description: "Spring Boot + React + DB + CI/CD",
    heroTech: "Java",
    tag: "Most Popular",

    premium: true,
    aiIncluded: true,
    aiToolKeys: [
      "prompt-engineering",
      "generative-ai",
      "agentic-ai",
      "hands-on-projects",
    ],
  },
  {
    courseKey: "react-web-development",
    title: "React Web Development",
    description: "React + TypeScript + Hosting",
    heroTech: "react",
    tag: "Frontend",

    premium: true,
    aiIncluded: true,
    aiToolKeys: ["prompt-engineering", "generative-ai", "agentic-ai","hands-on-projects"],
  },
  {
    courseKey: "nextjs-web-development",
    title: "Next.js Web Development",
    description: "Next.js + React + TypeScript + Deployment",
    heroTech: "next",
    tag: "Full Stack",

    premium: true,
    aiIncluded: true,
    aiToolKeys: [
      "prompt-engineering",
      "generative-ai",
      "agentic-ai",
      "hands-on-projects",
    ],
  },
  {
    courseKey: "angular-web-development",
    title: "Angular Web Development",
    description: "Angular + TypeScript + API + Deployment",
    heroTech: "angular",
    tag: "Frontend",

    premium: true,
    aiIncluded: true,
    aiToolKeys: ["prompt-engineering", "generative-ai", "agentic-ai","hands-on-projects"],
  },
];

// -------------------- DATA ENGINEERING PACKAGES --------------------
const DATA_ENGINEERING_PACKAGES = [
  {
    key: "aws-data-engineering",
    title: "AWS Data Engineering",
    description: "S3 • Glue • Athena • Kinesis • Redshift",
    heroTech: "aws",
    tag: "Cloud",

    premium: true,
    aiIncluded: true,
    aiToolKeys: [
      "prompt-engineering",
      "generative-ai",
      "agentic-ai",
      "machine-learning", // extra for data engineering
      "hands-on-projects",
    ],
  },
  {
    key: "snowflake-data-engineering",
    title: "Snowflake Data Engineering",
    description: "Snowpipe • Snowpark • Streams/Tasks • Marts",
    heroTech: "snowflake",
    tag: "Data Platform",

    premium: true,
    aiIncluded: true,
    aiToolKeys: [
      "prompt-engineering",
      "generative-ai",
      "machine-learning", // extra for data engineering
      "hands-on-projects",
    ],
  },
  {
    key: "azure-data-engineering",
    title: "Azure Data Engineering",
    description: "ADLS • ADF • Databricks (Delta) • Synapse",
    heroTech: "azure",
    tag: "Cloud",

    premium: true,
    aiIncluded: true,
    aiToolKeys: [
      "prompt-engineering",
      "generative-ai",
      "agentic-ai",
      "machine-learning", // extra for data engineering
      "hands-on-projects",
    ],
  },
  {
    key: "gcp-data-engineering",
    title: "GCP Data Engineering",
    description: "GCS • Dataflow • BigQuery • Pub/Sub",
    heroTech: "gcp",
    tag: "Cloud",

    premium: true,
    aiIncluded: true,
    aiToolKeys: [
      "prompt-engineering",
      "generative-ai",
      "machine-learning", // extra for data engineering
      "hands-on-projects",
    ],
  },
];

const Visualization = [
  {
    key: "visualization-course",
    title: "Visualization",
    description: "QuickSight • Power BI",
    heroTech: "visualization",
    tag: "Analytics",

    premium: true,
    aiIncluded: true,
    aiToolKeys: ["prompt-engineering", "generative-ai", "hands-on-projects"],
  },
];

// -------------------- UI HELPERS --------------------
function Container({ children }) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function SectionHeader({ title, subtitle, kicker }) {
  return (
    <div className="flex flex-col gap-2">
      {kicker ? (
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          {kicker}
        </div>
      ) : null}

      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">{title}</h2>
      {subtitle ? <p className="text-sm text-gray-600 md:text-base">{subtitle}</p> : null}
    </div>
  );
}

// -------------------- Card component (fixed CTA alignment) --------------------
function CourseCard({
  title,
  description,
  href,
  heroTech,
  tag,
  premium = false,
  aiIncluded = false,
  aiToolKeys = [],
}) {
  const finalHref = safeHref(href);
  const includedItems = resolveAiTools(aiToolKeys);

  return (
<div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-indigo-200 bg-white shadow-sm ring-1 ring-indigo-100 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
  {/* subtle premium glow layer */}
  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo-100/40 to-transparent" />
    <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-indigo-200/40 blur-2xl" />
    <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-sky-200/30 blur-2xl" />
  </div>

  {/* BIG ICON / IMAGE AREA */}
  <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-50">
    {/* ✅ top badges row (no overlap) */}
    <div className="absolute inset-x-3 top-3 z-20 flex items-center justify-between gap-2">
      {aiIncluded ? (
        <div className="inline-flex min-w-0 items-center gap-1 rounded-full border border-indigo-200 bg-white/90 px-3 py-1 text-[11px] font-semibold text-indigo-700 shadow-sm backdrop-blur">
          <FiSparkles className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">AI Included</span>
        </div>
      ) : (
        <div />
      )}

      {premium ? (
        <div className="inline-flex min-w-0 items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700 shadow-sm">
          <FiStar className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">Premium</span>
        </div>
      ) : null}
    </div>

    {/* center icon */}
    <div className="relative mt-4 flex h-28 w-28 items-center justify-center rounded-3xl border border-indigo-200 bg-white shadow-sm ring-1 ring-white">
      <HeroMark techKey={heroTech} size={74} />
    </div>
  </div>

  {/* Content */}
  <div className="flex grow flex-col p-6">
    <div className="min-h-[76px]">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-5 text-gray-600">{description}</p>
    </div>

    {/* Included section */}
    <div className="mt-2 rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 to-white p-3">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
          <FiStar className="h-3.5 w-3.5 text-indigo-700" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-800">
          Included in this course
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {includedItems.map((item) => {
          const Icon = FEATURE_ICON_MAP[item.iconKey] || FiCheckCircle;
          return (
            <li
              key={`${title}-${item.key}`}
              className="flex items-center gap-2 rounded-lg border border-white bg-white px-2.5 py-2 text-xs font-medium text-gray-700 shadow-sm"
            >
              <Icon className={`h-4 w-4 shrink-0 ${item.iconClass}`} />
              <span className="truncate">{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>

    {/* CTA pinned bottom */}
    <div className="mt-auto pt-5">
      <Link
        href={finalHref}
        prefetch={false}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
      >
        View Course
        <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </div>
  </div>
</div>
  );
}

// =====================================================================================
// PAGE
// =====================================================================================
export default function Page() {
  return (
    <main className="bg-white text-gray-900">
            <section className="bg-white py-5">
        <Container>
          <AiDevelopBanner
            title="Develop with AI"
            subtitle="Learn modern development workflows with ChatGPT, Claude, and Copilot for prompting, coding, debugging, architecture, and project delivery."
          />
        </Container>
      </section>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.18),transparent_35%)]" />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
        </div>

        <Container>
          <div className="relative py-16 sm:py-20">
            <div className="flex flex-col items-start gap-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
                {HERO.badge}
                <span className="mx-2 h-3 w-px bg-slate-600" />
                <span className="font-semibold text-emerald-300">Online Training</span>
              </span>

              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-transparent">
                  {HERO.title}
                </span>
              </h1>

              <p className="max-w-2xl text-sm text-slate-200 md:text-base">{HERO.subtitle}</p>

              <div className="mt-1 flex flex-wrap items-center gap-4">
                <Link
                  href="/request-callback"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
                >
                  Schedule a counselling call <FiPhone className="h-4 w-4" />
                </Link>
              </div>

              {/* ✅ Removed "Job-ready Roadmap" */}
              <div className="mt-2 flex flex-wrap gap-2">
                <HeroBenefit text="Mentor-led" />
                <HeroBenefit text="Hands-on Projects" />
                <HeroBenefit text="Interview Prep" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MAIN PROGRAMS */}
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeader
            kicker=""
            title="Full-Stack Development"
            subtitle="Pick a track and start building production-ready skills with guided projects."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STACK_COURSES.map((course) => (
              <CourseCard
                key={course.courseKey}
                title={course.title}
                description={course.description}
                heroTech={course.heroTech}
                href={`/training/professional-training/${course.courseKey}`}
                tag={course.tag}
                premium={course.premium}
                aiIncluded={course.aiIncluded}
                aiToolKeys={course.aiToolKeys}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* DATA ENGINEERING */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeader
            kicker=""
            title="Data Engineering"
            subtitle="Choose your track based on the target platform: AWS, Snowflake, Azure, or GCP."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DATA_ENGINEERING_PACKAGES.map((pkg) => (
              <CourseCard
                key={pkg.key}
                title={pkg.title}
                description={pkg.description}
                heroTech={pkg.heroTech}
                href={`/training/professional-training/${pkg.key}`}
                tag={pkg.tag}
                premium={pkg.premium}
                aiIncluded={pkg.aiIncluded}
                aiToolKeys={pkg.aiToolKeys}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Visualization */}
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeader
            kicker=""
            title="Visualization"
            subtitle="Build dashboarding & BI skills with QuickSight and Power BI—turn data into clear, decision-ready insights."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Visualization.map((pkg) => (
              <CourseCard
                key={pkg.key}
                title={pkg.title}
                description={pkg.description}
                heroTech={pkg.heroTech}
                href={`/training/professional-training/${pkg.key}`}
                tag={pkg.tag}
                premium={pkg.premium}
                aiIncluded={pkg.aiIncluded}
                aiToolKeys={pkg.aiToolKeys}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-14">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 sm:p-8">
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-extrabold text-gray-900">
                  Want a personalized study plan?
                </h4>
                <p className="mt-1 text-sm text-gray-700">
                  Tell us your goals—career switch, upskilling, or interview prep—and we’ll map the path.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {/* <CtaChip icon={<FiCheckCircle className="h-4 w-4" />} text="Free counselling call" />
                  <CtaChip icon={<FiZap className="h-4 w-4" />} text="Track recommendation" />
                  <CtaChip icon={<FiBarChart2 className="h-4 w-4" />} text="Roadmap + milestones" /> */}
                </div>
              </div>

              <Link
                href="/request-callback"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
              >
                <FiPhone className="h-4 w-4" />
                Request a Callback
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

// -------------------- tiny UI atoms --------------------
function HeroBenefit({ text }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
      {text}
    </span>
  );
}

function CtaChip({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm">
      <span className="text-indigo-600">{icon}</span>
      {text}
    </span>
  );
}