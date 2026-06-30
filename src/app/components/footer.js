"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ThemeLogo from "./ThemeLogo";

const companyLinks = [
  { href: "/company", label: "About Us" },
  { href: "/pricing", label: "Program Pricing" },
  { href: "/pricing-policy", label: "Pricing Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

const trainingLinks = [
  { href: "/training/junior-tech-program", label: "Junior Tech Program" },
  { href: "/training/beginner-training", label: "Beginner Training" },
  { href: "/training/professional-training", label: "Professional Training" },
  { href: "/training/corporate-training", label: "Corporate Training" },
  { href: "/training/campus-training", label: "Campus Training" },
  { href: "/work-experience-program", label: "Work Experience Program" },
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
    href: "https://www.facebook.com/profile.php?id=61589182754060",
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
    <footer className="mt-16 border-t border-[#d8e0ec] bg-[#07172d] transition-colors duration-300 dark:border-slate-800 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 text-sm text-[#c7d1df] sm:px-6 sm:pt-14 lg:px-8">
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
                    <a href="tel:+916309123485" className="transition hover:text-[#f3d472]">
                      +91 6309123485
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
                  <address className="not-italic leading-6">
                    <span className="font-semibold text-white">US Office:</span>
                    <br />
                    1420 Valley Trl, Irving, TX 75063, USA
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
