import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Crown,
  FileText,
  GraduationCap,
  Layers3,
  LineChart,
  Plus,
  Rocket,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Pricing | Tinitiate AI Solutions",
  description:
    "Compare Tinitiate Spark, Prime, and Apex pathway fees, GST, project work, R&D phases, stipend/salary support, and completion proof.",
};

const RUPEE = "\u20b9";

const plans = [
  {
    name: "Tinitiate Spark",
    shortName: "Spark",
    stage: "Foundation",
    badgeLabel: "Start clear",
    tagline: "Learn \u00b7 Practice \u00b7 Build",
    price: "50K",
    priceSuffix: "+ GST",
    feeLabel: "One-time pathway fee",
    phasePay: "No stipend - skill-building track",
    href: "/request-callback?service=Tinitiate%20Spark%20Pricing",
    icon: BookOpenCheck,
    accent: "bg-[#2f80ed]",
    accentText: "text-[#2f80ed]",
    border: "border-[#2f80ed]",
    halo: "from-blue-500/18",
    button:
      "border-[#1a3c6e] text-[#1a3c6e] hover:bg-[#1a3c6e] hover:text-white",
    proof: "Starter project proof on completion",
    differentiator: "Foundation-first track",
    sectionLabel: "Tracks available",
    ideal: ["Beginner", "Foundation", "Guided"],
    visualTitle: "Foundation rhythm",
    visualLead: {
      icon: "calendar",
      title: "6 months",
      detail: "3 months R&D + 3 months project build",
      tone: "blue",
    },
    visualItems: [
      {
        icon: "calendar",
        title: "Corporate R&D",
        detail: "3 months in a guided work-style environment",
        tone: "blue",
      },
      {
        icon: "briefcase",
        title: "Real-time build",
        detail: "3 months project work with review checkpoints",
        tone: "navy",
      },
      {
        icon: "gift",
        title: "2 free sessions",
        detail: "Try the pathway before enrollment",
        tone: "soft",
      },
    ],
    features: [
      "Python Full Stack with Gen AI",
      "Java Full Stack with Gen AI",
      "Corporate R&D environment",
      "Real-time project build",
      "TINITIATE AI completion certificate",
    ],
  },
  {
    name: "Tinitiate Prime",
    shortName: "Prime",
    stage: "Momentum",
    badgeLabel: "Most picked",
    tagline: "Build \u00b7 Earn \u00b7 Experience",
    price: "99K",
    priceSuffix: "+ GST",
    feeLabel: "One-time pathway fee",
    phasePay: "Rs.10K / month when in R&D phase",
    href: "/request-callback?service=Tinitiate%20Prime%20Pricing",
    icon: Rocket,
    featured: true,
    accent: "bg-[#c9a227]",
    accentText: "text-[#9b7a10]",
    border: "border-[#c9a227]",
    halo: "from-[#c9a227]/22",
    button:
      "border-[#c9a227] bg-[#c9a227] text-[#171100] hover:bg-[#e8bc30]",
    proof: "Portfolio-ready work on completion",
    differentiator: "Paid R&D pathway",
    sectionLabel: "What you build",
    ideal: ["Knows basics", "Earns salary", "Interview"],
    visualTitle: "Earn while building",
    visualLead: {
      icon: "rupee",
      title: "Rs.10K/mo",
      detail: "Paid during the R&D phase",
      tone: "gold",
    },
    visualItems: [
      {
        icon: "calendar",
        title: "Online + R&D",
        detail: "3 months online + 3 months R&D",
        tone: "soft",
      },
      {
        icon: "rupee",
        title: "Paid R&D",
        detail: "Rs.10K/month paid to you",
        tone: "gold",
      },
      {
        icon: "gift",
        title: "2 free sessions",
        detail: "Try the pathway before enrollment",
        tone: "soft",
      },
    ],
    features: [
      "3 months online learning",
      "3 months paid R&D at Rs.10K/month",
      "Portfolio shaping for resume and LinkedIn",
      "Interview and communication preparation",
      "Mentor feedback on every project",
    ],
  },
  {
    name: "Tinitiate Apex",
    shortName: "Apex",
    stage: "Ownership",
    badgeLabel: "Ultimate career security",
    tagline: "Work \u00b7 Lead \u00b7 Succeed",
    price: "199K",
    priceSuffix: "+ GST",
    feeLabel: "One-time pathway fee",
    phasePay: "Rs.15K / month as Trainee Engineer",
    href: "/request-callback?service=Tinitiate%20Apex%20Pricing",
    icon: Crown,
    accent: "bg-[#ef2f2f]",
    accentText: "text-[#ef2f2f]",
    border: "border-[#ef2f2f]",
    halo: "from-[#ef2f2f]/22",
    button: "border-[#ef2f2f] bg-[#ef2f2f] text-white hover:bg-[#d91f1f]",
    proof: "Work-experience proof on completion",
    differentiator: "Job from Day 1",
    sectionLabel: "What you get",
    ideal: ["High-touch", "Profile polish", "Work proof"],
    apexSpotlight: true,
    visualTitle: "Ultimate career security",
    visualLead: {
      icon: "zap",
      title: "On-job training",
      detail: "Work-experience pathway with guided delivery",
      tone: "red",
    },
    visualItems: [
      {
        icon: "briefcase",
        title: "6 months on-job training",
        detail: "Work-style execution + 3 months R&D",
        tone: "navy",
      },
      {
        icon: "rupee",
        title: "Rs.15K/month salary",
        detail: "Trainee Engineer phase",
        tone: "red",
      },
      {
        icon: "gift",
        title: "2 free sessions",
        detail: "Try the pathway before enrollment",
        tone: "soft",
      },
    ],
    features: [
      "6 months on-job training",
      "3 months R&D execution",
      "Rs.15K/month Trainee Engineer salary",
      "Work-experience style project ownership",
      "Career storytelling and placement priority",
    ],
  },
];

const stageGuide = [
  {
    title: "Starting out",
    plan: "Spark",
    detail:
      "Foundation training, corporate R&D exposure, real-time project work, and guided review.",
    icon: GraduationCap,
  },
  {
    title: "Earning in R&D",
    plan: "Prime",
    detail:
      "Online training plus R&D work, with Rs.10K/month during the paid R&D phase.",
    icon: Layers3,
  },
  {
    title: "Work-experience path",
    plan: "Apex",
    detail:
      "On-job training, R&D work, deep mentorship, and Rs.15K/month Trainee Engineer salary.",
    icon: BriefcaseBusiness,
  },
];

const included = [
  {
    title: "Full Stack Tracks",
    detail:
      "Python Full Stack with Gen AI and Java Full Stack with Gen AI are included in the pathway options.",
    icon: Target,
  },
  {
    title: "Real Project Work",
    detail:
      "Every pathway moves learners toward mentor-reviewed project output they can explain.",
    icon: ClipboardList,
  },
  {
    title: "R&D And Work Rhythm",
    detail:
      "Prime includes paid R&D time; Apex adds on-job training and Trainee Engineer salary support.",
    icon: BadgeCheck,
  },
  {
    title: "Career Proof",
    detail:
      "Completion proof, portfolio shaping, LinkedIn/resume storytelling, and referral support scale by tier.",
    icon: LineChart,
  },
];

const comparisonRows = [
  {
    focus: "Pathway Fee",
    spark: "Rs.50K + GST",
    prime: "Rs.99K + GST",
    apex: "Rs.199K + GST",
  },
  {
    focus: "Learning Format",
    spark: "Corporate R&D environment plus project build",
    prime: "Online learning plus paid R&D",
    apex: "On-job training plus R&D execution",
  },
  {
    focus: "Timeline",
    spark: "6 months",
    prime: "6 months",
    apex: "9 months",
  },
  {
    focus: "Full Stack Tracks",
    spark: "Python and Java with Gen AI",
    prime: "Python and Java with Gen AI",
    apex: "Prime tracks with advanced ownership",
  },
  {
    focus: "Earning Support",
    spark: "Skill-building track",
    prime: "Rs.10K/month during R&D",
    apex: "Rs.15K/month Trainee Engineer salary",
  },
  {
    focus: "Project Proof",
    spark: "Starter project proof",
    prime: "Portfolio-ready project work",
    apex: "Work-experience proof",
  },
  {
    focus: "Mentor Review",
    spark: "Guided checkpoints",
    prime: "Feedback on every project",
    apex: "Deep mentorship and profile polish",
  },
  {
    focus: "Career Preparation",
    spark: "Completion certificate",
    prime: "Resume, LinkedIn, and interview prep",
    apex: "Career storytelling and placement priority",
  },
  {
    focus: "Free Sessions",
    spark: "2 sessions",
    prime: "2 sessions",
    apex: "2 sessions",
  },
];

const processSteps = [
  {
    title: "Tell us your goal",
    detail:
      "Share your background, target role, available time, and current skill level.",
  },
  {
    title: "Get a fit recommendation",
    detail:
      "The team explains whether Spark, Prime, or Apex is the right pathway for your stage.",
  },
  {
    title: "Attend free sessions",
    detail:
      "Use the 2 free sessions included on all plans before you commit.",
  },
  {
    title: "Confirm fee and start",
    detail:
      "Batch timing, one-time pathway fee, GST, and plan scope are confirmed before enrollment.",
  },
];

const faqs = [
  {
    question: "Which pricing plan is best for beginners?",
    answer:
      "Spark is built for beginners, career-switchers, and students who need a solid foundation before advanced project work.",
  },
  {
    question: "Does Prime include paid R&D time?",
    answer:
      "Yes. Prime includes 3 months online plus 3 months R&D, with Rs.10K/month earned during the R&D phase and paid to you.",
  },
  {
    question: "What makes Apex different?",
    answer:
      "Apex adds 6 months on-job training, 3 months R&D, Rs.15K/month salary as a Trainee Engineer, deep mentorship, and work-experience proof.",
  },
  {
    question: "Are these prices final?",
    answer:
      "The PDF lists one-time pathway fees as Rs.50K, Rs.99K, and Rs.199K, each plus GST. Batch timing, payment schedule, and scope are confirmed before enrollment.",
  },
  {
    question: "Do all plans include free sessions?",
    answer:
      "Yes. The pricing PDF lists 2 free sessions before you commit on Spark, Prime, and Apex.",
  },
  {
    question: "Which tracks are listed in the PDF?",
    answer:
      "Spark and Prime list Python Full Stack with Gen AI and Java Full Stack with Gen AI. Apex adds on-job training, R&D execution, and work-experience ownership.",
  },
];

function Container({ children, className = "" }) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function SectionHeading({ title, text, align = "left" }) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-6xl text-center" : "max-w-3xl"
      }
    >
      <h2 className="text-balance text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:whitespace-nowrap lg:text-[3rem] xl:text-5xl">
        {title}
      </h2>
      {align === "center" ? (
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#c9a227]" />
      ) : null}
      {text ? (
        <p className="mt-4 text-pretty text-[15px] leading-8 text-[#5b667a] dark:text-slate-300 sm:text-base">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function PriceCard({ plan }) {
  const Icon = plan.icon;
  const isPrime = plan.shortName === "Prime";
  const isApex = plan.shortName === "Apex";
  const CalloutIcon = isApex
    ? BriefcaseBusiness
    : isPrime
      ? LineChart
      : GraduationCap;

  return (
    <article
      className={[
        "relative flex h-full min-h-[760px] flex-col overflow-hidden rounded-[1.35rem] border bg-white p-6 transition duration-300 hover:-translate-y-1 dark:bg-slate-900 sm:p-7",
        isApex
          ? "border-[#ef2f2f]/75 shadow-[0_34px_90px_-48px_rgba(239,47,47,0.58)] ring-1 ring-[#ef2f2f]/20"
          : isPrime
            ? "border-[#c9a227]/75 shadow-[0_28px_76px_-46px_rgba(201,162,39,0.52)] ring-1 ring-[#c9a227]/16"
            : "border-[#dde6f0] shadow-[0_24px_65px_-46px_rgba(15,23,42,0.55)] hover:border-[#c9a227]/70 hover:shadow-[0_34px_80px_-48px_rgba(15,23,42,0.7)]",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(201,162,39,0.12),transparent_34%),radial-gradient(circle_at_100%_18%,rgba(18,52,95,0.08),transparent_32%)]" />
      <div className={["absolute inset-x-0 top-0 h-1", plan.accent].join(" ")} />

      <div className="relative flex flex-1 flex-col">
        <div className="min-h-[132px]">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-4 flex min-h-7 flex-wrap items-center gap-2">
                <span
                  className={[
                    "rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em]",
                    isApex
                      ? "bg-[#fff1f1] text-[#ef2f2f]"
                      : isPrime
                        ? "bg-[#fff8dc] text-[#7a5d00]"
                        : "bg-[#eef6ff] text-[#1a3c6e]",
                  ].join(" ")}
                >
                  {plan.differentiator}
                </span>
                {isPrime ? (
                  <span className="rounded-full border border-[#c9a227]/40 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#7a5d00] dark:bg-slate-950">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#93a3ba]">
                {plan.stage} pathway
              </p>
              <h3 className="mt-2 text-2xl font-extrabold leading-tight text-[#13233a] dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#607089] dark:text-slate-300">
                {plan.tagline}
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#13233a] text-[#f2cf5b] shadow-[0_16px_32px_-22px_rgba(18,35,58,0.9)] dark:bg-slate-950">
              <Icon className="h-5 w-5" />
            </span>
          </div>
        </div>

        <div
          className={[
            "mt-5 flex min-h-[112px] items-center gap-4 rounded-[1.15rem] px-4 py-3",
            isApex
              ? "apex-day-one text-white"
              : isPrime
                ? "border border-[#c9a227]/30 bg-[#fffaf0] text-[#13233a] dark:border-[#c9a227]/35 dark:bg-[#1f2937]"
                : "border border-[#cfe0f3] bg-[#f3f8ff] text-[#13233a] dark:border-slate-700 dark:bg-slate-950",
          ].join(" ")}
        >
          <span
            className={[
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
              isApex
                ? "apex-day-one__pulse bg-white text-[#ef2f2f]"
                : isPrime
                  ? "bg-[#c9a227] text-[#171100]"
                  : "bg-[#1a3c6e] text-white",
            ].join(" ")}
          >
            <CalloutIcon className="h-5 w-5" />
          </span>
          <div>
            <p
              className={[
                "text-[10px] font-black uppercase tracking-[0.16em]",
                isApex ? "text-white/76" : "text-[#7f93b0] dark:text-slate-400",
              ].join(" ")}
            >
              {isApex ? "Apex advantage" : plan.badgeLabel}
            </p>
            <p
              className={[
                "mt-1 text-xl font-black leading-tight",
                isApex ? "text-white" : "text-[#13233a] dark:text-white",
              ].join(" ")}
            >
              {isApex
                ? "Job from Day 1"
                : isPrime
                  ? "Earn while building"
                  : "Build the foundation"}
            </p>
            <p
              className={[
                "mt-1 text-xs font-semibold leading-5",
                isApex ? "text-white/82" : "text-[#607089] dark:text-slate-300",
              ].join(" ")}
            >
              {isApex
                ? "On-job training with salary-backed execution."
                : isPrime
                  ? "Paid R&D support while your portfolio takes shape."
                  : "Guided R&D exposure with real project review."}
            </p>
          </div>
        </div>

        <div className="mt-7 min-h-[132px]">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#93a3ba]">
            {plan.feeLabel}
          </p>
          <p className="mt-3 text-4xl font-black text-[#13233a] dark:text-white">
            {RUPEE}
            {plan.price}
            <span className="ml-2 align-middle text-sm font-extrabold tracking-normal text-[#7f93b0]">
              {plan.priceSuffix}
            </span>
          </p>
          <p className="mt-3 max-w-[20rem] text-sm font-medium leading-6 text-[#607089] dark:text-slate-300">
            {plan.proof}
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-[1rem] border border-[#e6edf5] dark:border-slate-700">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="grid min-h-[64px] grid-cols-[1.25rem_1fr] items-center gap-3 border-b border-[#e6edf5] px-4 py-3 last:border-b-0 dark:border-slate-700"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#13233a] dark:text-[#f2cf5b]" />
              <p className="text-sm font-semibold leading-6 text-[#26364d] dark:text-slate-200">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 flex min-h-[76px] items-center rounded-2xl bg-[#f7fafc] px-4 py-3 text-sm font-extrabold leading-6 text-[#53677d] dark:bg-slate-950 dark:text-slate-300">
          {plan.phasePay}
        </p>

        <Link
          href={plan.href}
          className="mt-auto inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#13233a] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1f4773] dark:bg-[#f2cf5b] dark:text-[#13233a]"
        >
          Discuss {plan.shortName}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function PricingComparisonTable() {
  return (
    <div className="mt-12">
      <div className="mb-5 lg:hidden">
        <h3 className="text-2xl font-black text-[#13233a]">Compare plans</h3>
        <p className="mt-2 text-sm font-medium leading-6 text-[#607089]">
          The same board details, formatted for mobile reading.
        </p>
      </div>

      <div className="overflow-hidden rounded-[1.1rem] border border-[#d8e2ee] bg-white shadow-[0_18px_46px_-38px_rgba(15,23,42,0.65)] lg:hidden">
        <table className="w-full table-fixed border-collapse">
          <colgroup>
            <col className="w-[28%]" />
            <col className="w-[24%]" />
            <col className="w-[24%]" />
            <col className="w-[24%]" />
          </colgroup>
          <thead>
            <tr className="bg-[#f7fafc]">
              <th className="border-b border-r border-[#e3ebf4] px-2 py-3 text-left text-[9px] font-black uppercase tracking-[0.12em] text-[#7f93b0]">
                Focus
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.shortName}
                  className="border-b border-r border-[#e3ebf4] px-1.5 py-3 text-center text-[9px] font-black uppercase tracking-[0.1em] text-[#13233a] last:border-r-0"
                >
                  {plan.shortName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.focus} className="align-top">
                <th
                  scope="row"
                  className="border-b border-r border-[#edf2f7] px-2 py-3 text-left text-[10px] font-black leading-4 text-[#13233a] last:border-b-0"
                >
                  {row.focus}
                </th>
                {[row.spark, row.prime, row.apex].map((value, index) => (
                  <td
                    key={`${row.focus}-${index}`}
                    className="border-b border-r border-[#edf2f7] px-1.5 py-3 text-center text-[10px] font-semibold leading-4 text-[#53677d] last:border-r-0"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="hidden overflow-hidden rounded-[1.35rem] border border-[#d8e2ee] bg-white shadow-[0_28px_80px_-62px_rgba(15,23,42,0.72)] lg:block">
        <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] border-b border-[#e3ebf4]">
          <div className="p-6">
            <h3 className="text-2xl font-black text-[#13233a]">
              Compare plans
            </h3>
            <p className="mt-2 text-sm font-medium leading-6 text-[#607089]">
              Find the pathway that fits your current level and next outcome.
            </p>
          </div>
          {plans.map((plan) => (
            <div key={plan.shortName} className="border-l border-[#e3ebf4] p-6">
              <div className="flex items-center gap-2">
                <h4 className="text-xl font-black text-[#13233a]">
                  {plan.shortName}
                </h4>
                {plan.featured ? (
                  <span className="rounded-full bg-[#fff8dc] px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-[#7a5d00]">
                    Popular
                  </span>
                ) : null}
              </div>
              <Link
                href={plan.href}
                className="mt-4 inline-flex min-h-9 w-full items-center justify-center rounded-full bg-[#13233a] px-4 py-2 text-xs font-black text-white"
              >
                Discuss {plan.shortName}
              </Link>
            </div>
          ))}
        </div>

        {comparisonRows.map((row) => (
          <div
            key={row.focus}
            className="grid grid-cols-[1.5fr_repeat(3,1fr)] border-b border-[#edf2f7] last:border-b-0"
          >
            <div className="px-6 py-4 text-sm font-black text-[#13233a]">
              {row.focus}
            </div>
            {[row.spark, row.prime, row.apex].map((value, index) => (
              <div
                key={`${row.focus}-${index}`}
                className="flex items-center border-l border-[#edf2f7] px-6 py-4 text-center text-sm font-semibold leading-6 text-[#53677d]"
              >
                <span className="mx-auto max-w-[13rem]">{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-white text-gray-900 dark:bg-slate-950 dark:text-white">
      <section className="relative isolate overflow-hidden bg-[#071126] text-white">
        <Image
          src="/images/banners/personalized-training.jpg"
          alt="Tinitiate learners reviewing technology work together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,17,38,0.98)_0%,rgba(7,17,38,0.92)_44%,rgba(7,17,38,0.66)_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:54px_54px]" />

        <Container className="relative flex min-h-[430px] items-center py-10 sm:min-h-[460px] sm:py-12 lg:min-h-[500px] lg:py-14">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(360px,0.62fr)]">
            <div className="max-w-3xl">
              <h1 className="max-w-[15ch] text-balance text-4xl font-extrabold leading-[1.05] tracking-normal text-white sm:text-5xl lg:text-[3.9rem]">
                Real work. Real salary. Real career.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-200 sm:text-lg">
                Compare the pathway fee, project proof, R&D support, and
                trainee salary options before you choose your commitment.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/request-callback?service=Pricing%20Guidance"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c9a227] to-[#e8bc30] px-6 py-3 text-sm font-bold text-[#1a1a00] shadow-lg transition hover:scale-[1.02]"
                >
                  Get Plan Guidance
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#plans"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/15"
                >
                  Compare Plans
                </a>
              </div>
            </div>

            <div className="relative hidden overflow-hidden rounded-[1.45rem] border border-white/14 bg-white/[0.07] p-3 shadow-[0_26px_76px_-42px_rgba(2,6,23,0.9)] backdrop-blur-xl lg:block">
              <div className="relative h-[270px] overflow-hidden rounded-[1.15rem]">
                <Image
                  src="/images/banners/personalized-training.jpg"
                  alt="Mentor-led pricing discussion"
                  fill
                  priority
                  sizes="420px"
                  className="object-cover opacity-78"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,38,0.12)_0%,rgba(7,17,38,0.84)_100%)]" />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/14 bg-[#071126]/78 p-4 backdrop-blur">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f2c94c]">
                    Pricing clarity
                  </p>
                  <div className="mt-3 grid gap-2">
                    {[
                      ["Fee + GST clarity", BadgeCheck],
                      ["R&D and salary support", BriefcaseBusiness],
                      ["Project proof outcome", LineChart],
                    ].map(([label, Icon]) => (
                      <div key={label} className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#f2c94c]">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-gray-200 bg-white px-4 py-7 sm:px-6 lg:px-10 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
          <div>
            <h2 className="text-balance text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl dark:text-white">
              Match the pathway to your stage.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#5b667a] dark:text-slate-300">
              Start with your current confidence, then compare the pathway that
              gives you the right structure and support.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.35rem] border border-gray-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:shadow-[0_22px_60px_rgba(2,6,23,0.35)]">
            <div className="grid divide-y divide-gray-200 dark:divide-slate-700 md:grid-cols-3 md:divide-x md:divide-y-0">
              {stageGuide.map(({ title, plan, detail, icon: Icon }, index) => (
                <div
                  key={title}
                  className={[
                    "flex gap-4 p-5 transition-colors",
                    index === 1
                      ? "bg-[#fffaf0] dark:bg-[#172033]"
                      : "bg-white dark:bg-slate-950",
                  ].join(" ")}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#1a3c6e] dark:bg-slate-800 dark:text-[#f2c94c]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-gray-900 dark:text-white">
                      {title}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#9b7a10] dark:text-[#f2c94c]">
                      Look at {plan}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#5b667a] dark:text-slate-200">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
            <SectionHeading
              align="center"
              title="Pick the pathway that fits your career stage"
              text="A simple view of the pathway fee, included support, project outcome, and earning support for each plan."
            />
            <Link
              href="/pricing-policy"
              className="inline-flex min-h-[44px] w-fit items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-bold text-gray-900 shadow-sm transition hover:border-[#c9a227] hover:text-[#7a5d00] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            >
              Pricing policy
              <FileText className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-9 grid items-stretch gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <PriceCard key={plan.name} plan={plan} />
            ))}
          </div>

          <PricingComparisonTable />
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 dark:bg-[linear-gradient(180deg,#071126_0%,#0f172a_100%)]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Decision system
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#c9a227]" />
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-8 text-[#5b667a] sm:text-base dark:text-slate-300">
              Pricing is only one part of the decision. The team checks fit,
              confirms GST and scope, and helps you use the free sessions before
              you commit.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {included.map(({ title, detail, icon: Icon }) => (
              <article
                key={title}
                className="flex min-h-[235px] flex-col rounded-[1.25rem] border border-[#d8e2ee] bg-white p-5 shadow-[0_22px_58px_-44px_rgba(15,23,42,0.62)] dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#13233a] text-[#f2cf5b] dark:bg-slate-950">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold leading-tight text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5b667a] dark:text-slate-300">
                  {detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-4">
            {processSteps.map(({ title, detail }, index) => (
              <article
                key={title}
                className="relative flex min-h-[220px] flex-col rounded-[1.25rem] border border-[#d8e2ee] bg-[#fbfdff] p-5 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.62)] dark:border-slate-700 dark:bg-slate-950"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c9a227] text-sm font-black text-[#171100]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#9b7a10] dark:text-[#f2c94c]">
                    Step
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#4d5b73] dark:text-slate-200">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 dark:bg-slate-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="border-l-4 border-[#c9a227] pl-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7a10] dark:text-[#f2c94c]">
                Next step
              </p>
              <h2 className="mt-4 max-w-[15ch] text-balance text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
                Choose with clarity before you enroll.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-8 text-[#5b667a] sm:text-base dark:text-slate-300">
                Share your background, target role, and weekly availability.
                The team will recommend Spark, Prime, or Apex, explain the fee
                plus GST, and help you start with the right commitment level.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/request-callback?service=Pricing%20Guidance"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c9a227] to-[#e8bc30] px-6 py-3 text-sm font-bold text-[#1a1a00] shadow-lg transition hover:scale-[1.02]"
                >
                  Request Pricing Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/training/professional-training"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-900 transition hover:border-[#c9a227] hover:text-[#7a5d00] dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-[#f2c94c] dark:hover:text-[#f2c94c]"
                >
                  View Training Paths
                </Link>
              </div>
            </div>

            <div>
              <div className="border-b border-gray-300 pb-5 dark:border-slate-700">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7a10] dark:text-[#f2c94c]">
                  FAQ
                </p>
                <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                  Questions before choosing a plan.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5b667a] dark:text-slate-300">
                  Straight answers for pricing, upgrades, outcomes, and plan
                  fit.
                </p>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-slate-700">
                {faqs.map((item) => (
                  <details key={item.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-base font-extrabold text-gray-900 dark:text-white">
                      <span>{item.question}</span>
                      <Plus className="mt-1 h-5 w-5 shrink-0 text-[#9b7a10] transition group-open:rotate-45 dark:text-[#f2c94c]" />
                    </summary>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5b667a] dark:text-slate-300">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
