"use client";

import Link from "next/link";
import Image from "next/image";
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
    hoverClass: "hover:text-[#0A66C2]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.38 0-2.74 1.86-2.74 3.76V24h-4V8z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@tinitiate",
    label: "YouTube",
    hoverClass: "hover:text-red-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.6-.8-2-1C17.6 2.4 12 2.4 12 2.4h0s-5.6 0-8.6.4c-.4.1-1.3.1-2 1-.6.7-.8 2.4-.8 2.4S0 8.2 0 10.2v1.6c0 2 .2 4 .2 4s.2 1.7.8 2.4c.8.8 1.8.8 2.2.9 1.6.2 6.8.4 6.8.4s5.6 0 8.6-.4c.4-.1 1.3-.1 2.1-.9.6-.7.8-2.4.8-2.4s.2-2 .2-4V10.2c0-2-.2-4-.2-4zM9.6 14.8V7.9l6.4 3.5-6.4 3.4z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/tinitiateprime/",
    label: "X",
    hoverClass: "hover:text-white",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2H21.5l-7.51 8.57L22.5 22h-5.97l-4.67-5.51L6.5 22H3.244l8.04-9.17L1.5 2h6.09l4.22 5.02L18.244 2Zm-2.1 18h2.07L7.93 4H5.79l10.354 12.02Z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/tinitiateprime",
    label: "Facebook",
    hoverClass: "hover:text-[#0866FF]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.1 5.66 21.24 10.44 22v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.24 22 17.1 22 12.07z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/tinitiateprime/",
    label: "Instagram",
    hoverClass: "hover:text-[#C13584]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11.001 5.5 5.5 0 0 1 0-11zM18.5 6a1.5 1.5 0 1 1-3.001.001A1.5 1.5 0 0 1 18.5 6z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#d8e0ec] bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_34%,#102344_34%,#07172d_100%)]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_28px_80px_rgba(8,22,44,0.14)] sm:p-8 lg:p-10">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.18),transparent_58%)] lg:block" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1a3c6e]">
                <GraduationCap className="h-4 w-4" />
                Built for Career Growth
              </div>
              <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight text-[#0f2242] sm:text-4xl">
                Learn practical tech skills with real guidance, real projects, and real outcomes.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5b667a] sm:text-base">
                TINITIATE AI helps learners move from fundamentals to job-ready confidence through structured training, mentorship, and hands-on industry exposure.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {footerHighlights.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#e8edf7] bg-[#f8faff] p-4 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0f2242] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-[#0f2242]">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-[#607089]">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 flex flex-col gap-4 rounded-[1.75rem] bg-[#0f2242] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a227]">
                Ready to Start
              </p>
              <p className="mt-2 text-lg font-bold sm:text-xl">
                Explore the right training path for your next career move.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/request-callback"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#c9a227] px-5 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#e0b93c]"
              >
                Request a Callback
              </Link>
              <Link
                href="/training/professional-training"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/8"
              >
                View Programs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-8 px-4 pb-8 text-sm text-[#c7d1df] sm:px-6 lg:grid-cols-[1.2fr_0.85fr_0.95fr_1.25fr] lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex rounded-2xl border border-white/10 bg-white px-4 py-3 shadow-[0_14px_32px_rgba(0,0,0,0.16)]"
          >
            <span className="block w-[160px] sm:w-[190px]">
              <Image
                src="/images/tinitiatelogo.png"
                alt="TINITIATE Logo"
                width={594}
                height={82}
                className="h-auto w-full object-contain"
              />
            </span>
          </Link>

          <h4 className="mt-5 text-base font-semibold text-white">
            TECHNICAL INITIATE Technologies Pvt Ltd
          </h4>
          <p className="mt-3 max-w-md leading-7 text-[#aab6c8]">
            A training, consulting, and technology partner focused on helping learners and businesses grow with practical, real-world skill development.
          </p>

          <div className="mt-6">
            <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f93b0]">
              Follow Us
            </h5>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-[#c7d1df]">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`TINITIATE on ${item.label}`}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-white/20 ${item.hoverClass}`}
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-3">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-[#c7d1df] transition hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c9a227]" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold text-white">Training</h4>
          <ul className="mt-4 space-y-3">
            {trainingLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-[#c7d1df] transition hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c9a227]" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold text-white">Contact & Offices</h4>

          <div className="mt-4 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a227]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f93b0]">
                    Email
                  </p>
                  <a
                    href="mailto:contact@tinitiate.com"
                    className="mt-2 block break-all text-white transition hover:text-[#f3d472]"
                  >
                    contact@tinitiate.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a227]" />
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f93b0]">
                    Call Us
                  </p>
                  <p className="leading-6 text-[#d9e1ec]">
                    <span className="font-semibold text-white">USA:</span>{" "}
                    <a href="tel:+19736536870" className="transition hover:text-[#f3d472]">
                      +1 (973) 653-6870
                    </a>
                    {", "}
                    <a href="tel:+12068024102" className="transition hover:text-[#f3d472]">
                      +1 (206) 802-4102
                    </a>
                  </p>
                  <p className="leading-6 text-[#d9e1ec]">
                    <span className="font-semibold text-white">India:</span>{" "}
                    <a href="tel:+919553495553" className="transition hover:text-[#f3d472]">
                      +91 95534 95553
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a227]" />
                <div className="space-y-3 text-[#d9e1ec]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f93b0]">
                    Offices
                  </p>
                  <address className="not-italic leading-6">
                    <span className="font-semibold text-white">Head Office:</span>
                    <br />
                    Plot No. B 503, Ace Ajanta, Beside Indu Aranya, Nagole, Hayathnagar, R.R. - 500068, Telangana, India
                  </address>
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

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-[#93a3ba] sm:px-6 lg:px-8">
        Copyright {new Date().getFullYear()} TINITIATE Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
