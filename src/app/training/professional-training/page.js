"use client";

import Image from "next/image";
import Link from "next/link";
import AiDevelopBanner from "../../components/AiDevelopBanner";
import { SiReact, SiNextdotjs } from "react-icons/si";
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

const ANGULAR_DOTNET_LOGO = "/images/courses/angular-dotnet.png";
const SNOWFLAKE_LOGO = "/images/courses/snowflake.png";

// -------------------- HERO --------------------
const HERO = {
  title: "Professional Training",
  subtitle:
    "Deep-dive programs for working professionals and serious learners in Databases, Cloud, DevOps, Web, Data Engineering, Analytics, and AI.",
  badge: "Professional Training • Tinitiate AI Solutions",
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
  {
    key: "angularDotnet",
    name: "Angular + .NET",
    Icon: null,
    img: ANGULAR_DOTNET_LOGO,
    aspectRatio: 1,
    markSize: 74,
    scale: "scale-[1.25]",
  },

  { key: "aws", name: "AWS", Icon: FaAws, color: "text-amber-400" },
  {
    key: "snowflake",
    name: "Snowflake",
    Icon: null,
    img: SNOWFLAKE_LOGO,
    aspectRatio: 300 / 168,
    markSize: 62,
  },

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

// -------------------- COURSE FEATURE REGISTRY (data-driven feature definitions) --------------------
const AI_TOOL_REGISTRY = [
  {
    key: "core-java",
    label: "Core Java",
    iconKey: "zap",
    iconClass: "text-red-600",
  },
  {
    key: "spring-boot",
    label: "Spring Boot",
    iconKey: "cpu",
    iconClass: "text-green-600",
  },
  {
    key: "react-ui",
    label: "React UI",
    iconKey: "robot",
    iconClass: "text-cyan-600",
  },
  {
    key: "db-cicd",
    label: "DB + CI/CD",
    iconKey: "check",
    iconClass: "text-emerald-600",
  },
  {
    key: "react-components",
    label: "React Components",
    iconKey: "cpu",
    iconClass: "text-cyan-600",
  },
  {
    key: "typescript",
    label: "TypeScript",
    iconKey: "zap",
    iconClass: "text-sky-600",
  },
  {
    key: "api-integration",
    label: "API Integration",
    iconKey: "tool",
    iconClass: "text-indigo-600",
  },
  {
    key: "dotnet-web-api",
    label: ".NET Web API",
    iconKey: "cpu",
    iconClass: "text-violet-600",
  },
  {
    key: "csharp",
    label: "C#",
    iconKey: "zap",
    iconClass: "text-purple-600",
  },
  {
    key: "hosting",
    label: "Hosting",
    iconKey: "check",
    iconClass: "text-emerald-600",
  },
  {
    key: "nextjs-routing",
    label: "Next.js Routing",
    iconKey: "cpu",
    iconClass: "text-slate-700",
  },
  {
    key: "ssr-apis",
    label: "SSR & APIs",
    iconKey: "tool",
    iconClass: "text-indigo-600",
  },
  {
    key: "deployment",
    label: "Deployment",
    iconKey: "check",
    iconClass: "text-emerald-600",
  },
  {
    key: "angular-components",
    label: "Angular Components",
    iconKey: "cpu",
    iconClass: "text-red-600",
  },
  {
    key: "rxjs-services",
    label: "RxJS & Services",
    iconKey: "tool",
    iconClass: "text-indigo-600",
  },
  {
    key: "s3-data-lake",
    label: "S3 Data Lake",
    iconKey: "cpu",
    iconClass: "text-amber-600",
  },
  {
    key: "glue-etl",
    label: "Glue ETL",
    iconKey: "tool",
    iconClass: "text-slate-700",
  },
  {
    key: "athena-redshift",
    label: "Athena & Redshift",
    iconKey: "barChart",
    iconClass: "text-rose-600",
  },
  {
    key: "kinesis-airflow",
    label: "Kinesis & Airflow",
    iconKey: "check",
    iconClass: "text-emerald-600",
  },
  {
    key: "snowflake-sql",
    label: "Snowflake SQL",
    iconKey: "cpu",
    iconClass: "text-sky-600",
  },
  {
    key: "snowpipe",
    label: "Snowpipe",
    iconKey: "tool",
    iconClass: "text-blue-600",
  },
  {
    key: "snowpark",
    label: "Snowpark",
    iconKey: "robot",
    iconClass: "text-indigo-600",
  },
  {
    key: "streams-tasks",
    label: "Streams & Tasks",
    iconKey: "check",
    iconClass: "text-amber-600",
  },
  {
    key: "adls-gen2",
    label: "ADLS Gen2",
    iconKey: "cpu",
    iconClass: "text-blue-700",
  },
  {
    key: "azure-data-factory",
    label: "Azure Data Factory",
    iconKey: "tool",
    iconClass: "text-sky-700",
  },
  {
    key: "databricks-delta",
    label: "Databricks Delta",
    iconKey: "robot",
    iconClass: "text-red-600",
  },
  {
    key: "synapse",
    label: "Synapse",
    iconKey: "barChart",
    iconClass: "text-indigo-600",
  },
  {
    key: "gcs",
    label: "GCS",
    iconKey: "cpu",
    iconClass: "text-orange-600",
  },
  {
    key: "dataflow",
    label: "Dataflow",
    iconKey: "tool",
    iconClass: "text-blue-600",
  },
  {
    key: "bigquery",
    label: "BigQuery",
    iconKey: "barChart",
    iconClass: "text-sky-600",
  },
  {
    key: "pubsub",
    label: "Pub/Sub",
    iconKey: "check",
    iconClass: "text-emerald-600",
  },
  {
    key: "power-bi",
    label: "Power BI",
    iconKey: "barChart",
    iconClass: "text-amber-600",
  },
  {
    key: "quicksight",
    label: "QuickSight",
    iconKey: "cpu",
    iconClass: "text-green-600",
  },
  {
    key: "data-modeling",
    label: "Data Modeling",
    iconKey: "tool",
    iconClass: "text-indigo-600",
  },
  {
    key: "business-insights",
    label: "Business Insights",
    iconKey: "check",
    iconClass: "text-emerald-600",
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
    const imageWidth = Math.round(size * (t.aspectRatio || 1));
    return (
      <Image
        src={t.img}
        alt={t.name}
        width={imageWidth}
        height={size}
        className={`object-contain ${t.scale || ""}`}
        style={{ width: imageWidth, height: "auto" }}
      />
    );
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
    aiToolKeys: ["core-java", "spring-boot", "react-ui", "db-cicd"],
  },
  {
    courseKey: "react-web-development",
    title: "React Web Development",
    description: "React + TypeScript + Hosting",
    heroTech: "react",
    tag: "Frontend",

    premium: true,
    aiIncluded: true,
    aiToolKeys: ["react-components", "typescript", "api-integration", "hosting"],
  },
  {
    courseKey: "nextjs-web-development",
    title: "Next.js Web Development",
    description: "Next.js + React + TypeScript + Deployment",
    heroTech: "next",
    tag: "Full Stack",

    premium: true,
    aiIncluded: true,
    aiToolKeys: ["nextjs-routing", "ssr-apis", "typescript", "deployment"],
  },
  {
    courseKey: "angular-web-development",
    title: "Full Stack Angular + .NET",
    description: "Angular + .NET 8 + C# + Web API + SQL Server",
    heroTech: "angularDotnet",
    tag: "Full Stack",

    premium: true,
    aiIncluded: true,
    aiToolKeys: ["angular-components", "dotnet-web-api", "csharp", "api-integration"],
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
    aiToolKeys: ["s3-data-lake", "glue-etl", "athena-redshift", "kinesis-airflow"],
  },
  {
    key: "snowflake-data-engineering",
    title: "Snowflake Data Engineering",
    description: "Snowpipe • Snowpark • Streams/Tasks • Marts",
    heroTech: "snowflake",
    tag: "Data Platform",

    premium: true,
    aiIncluded: true,
    aiToolKeys: ["snowflake-sql", "snowpipe", "snowpark", "streams-tasks"],
  },
  {
    key: "azure-data-engineering",
    title: "Azure Data Engineering",
    description: "ADLS • ADF • Databricks (Delta) • Synapse",
    heroTech: "azure",
    tag: "Cloud",

    premium: true,
    aiIncluded: true,
    aiToolKeys: ["adls-gen2", "azure-data-factory", "databricks-delta", "synapse"],
  },
  {
    key: "gcp-data-engineering",
    title: "GCP Data Engineering",
    description: "GCS • Dataflow • BigQuery • Pub/Sub",
    heroTech: "gcp",
    tag: "Cloud",

    premium: true,
    aiIncluded: true,
    aiToolKeys: ["gcs", "dataflow", "bigquery", "pubsub"],
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
    aiToolKeys: ["power-bi", "quicksight", "data-modeling", "business-insights"],
  },
];

const COURSE_CARD_DESCRIPTIONS = {
  "java-full-stack-development":
    "Build end-to-end applications with Java, Spring Boot, and React. Learn APIs, databases, authentication, and deployment through real project workflows.",
  "react-web-development":
    "Master React with reusable components, TypeScript, and modern UI patterns. Build responsive applications that connect smoothly with APIs and hosting platforms.",
  "nextjs-web-development":
    "Create fast, SEO-friendly web apps with Next.js, React, and TypeScript. Learn routing, server rendering, API integration, and production deployment.",
  "angular-web-development":
    "Build a full stack application with Angular, .NET 8, C#, ASP.NET Core Web API, SQL Server, JWT auth, SignalR, testing, and deployment.",
  "aws-data-engineering":
    "Design AWS data pipelines with S3, Glue, Athena, Kinesis, and Redshift. Learn batch and streaming workflows for scalable analytics platforms.",
  "snowflake-data-engineering":
    "Build modern Snowflake workflows with Snowpipe, Snowpark, and automated warehouse operations. Learn ingestion, transformation, optimization, and analytics-ready modeling.",
  "azure-data-engineering":
    "Create enterprise data solutions with ADLS, Data Factory, Databricks, and Synapse. Learn ingestion, transformation, orchestration, and reporting-ready workflows.",
  "gcp-data-engineering":
    "Build scalable data pipelines with GCS, Dataflow, BigQuery, and Pub/Sub. Learn processing, warehousing, and real-time analytics delivery on Google Cloud.",
  "visualization-course":
    "Turn raw data into business-ready dashboards with Power BI and QuickSight. Learn modeling, report design, and insight-driven storytelling for better decisions.",
};

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
  const heroTechItem = HERO_TECH_MAP[heroTech];
  const heroMarkSize = heroTechItem?.markSize || (heroTechItem?.wide ? 96 : 74);

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
          <span className="truncate">Skills Covered</span>
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
    <div
      className={`relative mt-4 flex ${
        heroTechItem?.wide ? "h-32 w-60" : "h-28 w-28"
      } items-center justify-center rounded-3xl border border-indigo-200 bg-white shadow-sm ring-1 ring-white`}
    >
      <HeroMark techKey={heroTech} size={heroMarkSize} />
    </div>
  </div>

  {/* Content */}
  <div className="flex grow flex-col p-6">
    <div className="min-h-[9rem] lg:min-h-[9.5rem]">
      <h3 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
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
                description={COURSE_CARD_DESCRIPTIONS[course.courseKey] || course.description}
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
                description={COURSE_CARD_DESCRIPTIONS[pkg.key] || pkg.description}
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
                description={COURSE_CARD_DESCRIPTIONS[pkg.key] || pkg.description}
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
