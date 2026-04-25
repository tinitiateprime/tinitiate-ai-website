"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import ThemeLogo from "./ThemeLogo";

const companyLinks = [
  { href: "/company", label: "About Us" },
  { href: "/pricing-policy", label: "Pricing Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

const trainingLinks = [
  { href: "/training/beginner-training", label: "Beginner Training" },
  { href: "/training/professional-training", label: "Professional Training" },
  { href: "/training/corporate-training", label: "Corporate Training" },
  { href: "/training/campus-training", label: "Campus Training" },
  { href: "/work-experience-program", label: "Work Experience Program" },
];

const footerHighlights = [
  {
    title: "Live Project Learning",
    description: "Practical, real-world experience built into the training journey.",
    icon: BookOpen,
  },
  {
    title: "Career-Focused Mentorship",
    description: "Guidance shaped around hiring outcomes and role readiness.",
    icon: Briefcase,
  },
  {
    title: "Trusted Training Support",
    description: "Structured pathways with mentorship, flexibility, and clarity.",
    icon: ShieldCheck,
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/tinitiate/",
    label: "LinkedIn",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <image
          href="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          width="24"
          height="24"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/channel/UCXVm8lbVkHOxEJ4XzggTeJw",
    label: "YouTube",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="6"
          width="20"
          height="12"
          rx="4"
          fill="#FF0000"
        />
        <path
          d="M10 9L15 12L10 15V9Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    href: "https://x.com/TinitiateAI",
    label: "X",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
  >
      <path
        d="M18.244 2H21.5l-7.51 8.57L22.5 22h-5.97l-4.67-5.51L6.5 22H3.244l8.04-9.17L1.5 2h6.09l4.22 5.02L18.244 2Zm-2.1 18h2.07L7.93 4H5.79l10.354 12.02Z"
        fill="white"
        />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=61568820188151",
    label: "Facebook",
    icon: (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
  >
    <image
      href="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
      width="24"
      height="24"
      preserveAspectRatio="xMidYMid meet"
    />
  </svg>
),
  },
  {
    href: "https://www.instagram.com/tinitiate.ai/",
    label: "Instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
      >
      <image
        href="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        width="24"
        height="24"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
),
  },
  {
    href: "https://www.reddit.com/user/tinitiate_ai/",
    label: "Reddit",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
      >
      <image
        href="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/250px-Reddit_Logo_Icon.svg.png"
        width="24"
        height="24"
        preserveAspectRatio="xMidYMid meet"
      />  
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#d8e0ec] bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_34%,#102344_34%,#07172d_100%)] transition-colors duration-300 dark:border-slate-800 dark:bg-[linear-gradient(180deg,#020617_0%,#0b1220_32%,#081228_32%,#020617_100%)]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-5 shadow-[0_28px_80px_rgba(8,22,44,0.14)] transition-colors duration-300 dark:border-slate-700/80 dark:bg-slate-900 dark:shadow-[0_28px_80px_rgba(2,6,23,0.42)] sm:p-8 lg:p-10">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.18),transparent_58%)] lg:block" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1a3c6e] transition-colors duration-300 dark:bg-slate-800 dark:text-sky-200">
                <GraduationCap className="h-4 w-4" />
                Built for Career Growth
              </div>
              <h2 className="mt-5 max-w-2xl text-balance text-3xl font-black leading-tight text-[#0f2242] transition-colors duration-300 dark:text-slate-50 sm:text-4xl">
                Learn practical tech skills with real guidance, real projects, and real outcomes.
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-[#5b667a] transition-colors duration-300 dark:text-slate-300 sm:text-base">
                Tinitiate AI Solutions helps learners move from fundamentals to job-ready confidence through structured training, mentorship, and hands-on industry exposure.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
              {footerHighlights.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#e8edf7] bg-[#f8faff] p-4 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-950/70"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0f2242] text-white transition-colors duration-300 dark:bg-slate-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 max-w-[16ch] text-balance text-sm font-bold text-[#0f2242] transition-colors duration-300 dark:text-slate-50">{title}</h3>
                  <p className="mt-2 max-w-[28ch] text-pretty text-xs leading-6 text-[#607089] transition-colors duration-300 dark:text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 flex flex-col gap-4 rounded-[1.75rem] bg-[#0f2242] p-5 text-white transition-colors duration-300 dark:bg-slate-950 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a227]">
                Ready to Start
              </p>
              <p className="mt-2 max-w-[24ch] text-balance text-lg font-bold sm:text-xl">
                Explore the right training path for your next career move.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link
                href="/request-callback"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#c9a227] px-5 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#e0b93c] sm:w-auto"
              >
                Request a Callback
              </Link>
              <Link
                href="/training/professional-training"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/8 sm:w-auto"
              >
                View Programs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 pb-8 text-sm text-[#c7d1df] sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1.2fr] lg:gap-10">
        <div className="sm:col-span-2 lg:col-span-1 lg:pr-4">
          <Link
            href="/"
            className="inline-flex"
          >
            <ThemeLogo
              mode="dark"
              wrapperClassName="w-[148px] sm:w-[182px] lg:w-[224px]"
              sizes="(max-width: 640px) 148px, (max-width: 1024px) 182px, 224px"
            />
          </Link>

          <h4 className="mt-5 text-base font-semibold text-white">
            Tinitiate AI Solutions
          </h4>
          <div className="mt-3 max-w-md space-y-4 text-pretty leading-8 text-[#aab6c8]">
            <p>
              Tinitiate AI Solutions empowers learners with industry-relevant skills through hands-on training and real-time project experience. Specializing in AI, Data Engineering, and Cloud technologies, we focus on transforming knowledge into practical expertise.
            </p>
            <p>
              Our mission is to create job-ready professionals by providing real-world exposure, mentorship, and structured learning aligned with current industry demands.
            </p>
          </div>

          <div className="mt-6">
            <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f93b0]">
              Follow Us
            </h5>
            <div className="mt-3 flex max-w-none flex-nowrap items-center gap-2 text-[#c7d1df] sm:gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Tinitiate AI Solutions on ${item.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 dark:bg-white/[0.07] dark:hover:bg-white/[0.12] sm:h-10 sm:w-10"
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <h4 className="text-base font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-3">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-pretty text-[#c7d1df] transition hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c9a227]" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <h4 className="text-base font-semibold text-white">Trainings</h4>
          <ul className="mt-4 space-y-3">
            {trainingLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-pretty text-[#c7d1df] transition hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c9a227]" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-base font-semibold text-white">Contact & Office</h4>

          <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 dark:bg-white/[0.07]">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a227]" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f93b0]">
                    Email
                  </p>
                  <a
                    href="mailto:contact@tinitiateai.com"
                    className="mt-2 block break-all text-white transition hover:text-[#f3d472]"
                  >
                    contact@tinitiateai.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 dark:bg-white/[0.07]">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a227]" />
                <div className="min-w-0 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f93b0]">
                    Call Us
                  </p>
                  <div className="flex items-start gap-2 leading-6 text-[#d9e1ec]">
                    <span className="font-semibold text-white">USA:</span>
                    <div className="flex min-w-0 flex-col">
                      <a href="tel:+19736536870" className="transition hover:text-[#f3d472]">
                        +1 (973) 653-6870
                      </a>
                      <a href="tel:+12068024102" className="transition hover:text-[#f3d472]">
                        +1 (206) 802-4102
                      </a>
                    </div>
                  </div>
                  <p className="leading-6 text-[#d9e1ec]">
                    <span className="font-semibold text-white">India:</span>{" "}
                    <a href="tel:+919553495553" className="transition hover:text-[#f3d472]">
                      +91 95534 95553
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 dark:bg-white/[0.07]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a227]" />
                <div className="min-w-0 space-y-3 text-[#d9e1ec]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f93b0]">
                    Office
                  </p>
                  <address className="not-italic leading-6">
                    <span className="font-semibold text-white">Corporate Office:</span>
                    <br />
                    1-2/10 SBH Colony Mohan Nagar, SBH Colony, Kothapet, 500036, Telangana, India
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 pt-5 pb-20 text-xs leading-6 text-[#93a3ba] sm:px-6 sm:pb-5 lg:px-8">
        <p className="mx-auto max-w-[18rem] px-14 text-center sm:max-w-none sm:px-0">
          Copyright {new Date().getFullYear()} Tinitiate AI Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
