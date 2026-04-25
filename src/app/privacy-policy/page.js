import {
  FaCheckCircle,
  FaDatabase,
  FaEdit,
  FaEnvelope,
  FaExclamationTriangle,
  FaGlobe,
  FaLock,
  FaSync,
  FaTrash,
  FaUserShield,
} from 'react-icons/fa'
import PolicyPageShell, {
  policyInlineLinkClassName,
} from '../components/PolicyPageShell'

export const metadata = {
  title: 'Privacy Policy | Tinitiate AI Solutions',
  description:
    'Read how Tinitiate AI Solutions collects, uses, secures, and updates personal information through its privacy policy.',
}

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    icon: FaDatabase,
    items: [
      {
        icon: FaUserShield,
        iconClassName:
          'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200',
        content: (
          <>
            <strong>Personal Information:</strong> name, email, phone number,
            company details, etc.
          </>
        ),
      },
      {
        icon: FaDatabase,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content: (
          <>
            <strong>Usage Data:</strong> IP address, browser type, device info,
            and pages visited &mdash; used for analytics and improvement.
          </>
        ),
      },
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    icon: FaCheckCircle,
    items: [
      {
        icon: FaCheckCircle,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content: 'Manage your transactions and accounts.',
      },
      {
        icon: FaCheckCircle,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content: 'Improve website performance and services.',
      },
      {
        icon: FaCheckCircle,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content: 'Send updates and offers (only if you opt in).',
      },
      {
        icon: FaCheckCircle,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content: 'Respond to support or inquiry requests.',
      },
    ],
  },
  {
    id: 'sharing-your-information',
    title: 'Sharing Your Information',
    icon: FaLock,
    items: [
      {
        icon: FaLock,
        iconClassName:
          'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200',
        content: 'We do not sell, trade, or share your data without your consent.',
      },
      {
        icon: FaUserShield,
        iconClassName:
          'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200',
        content:
          'We only share data with trusted providers under strict confidentiality agreements for operations like payments or technical support.',
      },
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security and Protection',
    icon: FaLock,
    items: [
      {
        icon: FaLock,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content:
          'We implement industry-standard security measures to protect your information.',
      },
      {
        icon: FaExclamationTriangle,
        iconClassName:
          'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200',
        content:
          'While we strive to safeguard your data, no system can guarantee 100% protection. Please avoid sharing highly sensitive information unnecessarily.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights and Choices',
    icon: FaEdit,
    items: [
      {
        icon: FaDatabase,
        iconClassName:
          'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200',
        content:
          'Request access to the personal data we hold about you.',
      },
      {
        icon: FaEdit,
        iconClassName:
          'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200',
        content:
          'Request corrections if your information is inaccurate or incomplete.',
      },
      {
        icon: FaTrash,
        iconClassName:
          'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200',
        content:
          'Request deletion of your data (subject to legal obligations).',
      },
    ],
  },
  {
    id: 'policy-updates',
    title: 'Updates to This Privacy Policy',
    icon: FaSync,
    items: [
      {
        icon: FaSync,
        iconClassName:
          'bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-200',
        content:
          'We may update this policy to reflect changes in our operations, technology, or legal requirements. Any updates will be posted on this page.',
      },
    ],
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    icon: FaEnvelope,
    items: [
      {
        icon: FaEnvelope,
        iconClassName:
          'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200',
        content: (
          <>
            Email:{' '}
            <a
              href="mailto:contact@tinitiateai.com"
              className={policyInlineLinkClassName}
            >
              contact@tinitiateai.com
            </a>
          </>
        ),
      },
      {
        icon: FaGlobe,
        iconClassName:
          'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200',
        content: (
          <>
            Website:{' '}
            <a
              href="https://www.tinitiateai.com"
              target="_blank"
              rel="noopener noreferrer"
              className={policyInlineLinkClassName}
            >
              www.tinitiateai.com
            </a>
          </>
        ),
      },
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <PolicyPageShell
      currentHref="/privacy-policy"
      eyebrow="Privacy & Data Handling"
      title="Privacy Policy"
      intro={
        <>
          At{' '}
          <span className="font-semibold text-[#1a3c6e] dark:text-sky-200">
            Tinitiate AI Solutions
          </span>
          , we prioritize your privacy and are committed to protecting your
          personal information. Here&apos;s how we handle your data:
        </>
      }
      highlights={[
        {
          title: 'Clear data categories',
          detail: 'We explain the personal information and usage data that may be collected.',
        },
        {
          title: 'No sale of data',
          detail: 'Your information is not sold, traded, or shared without consent.',
        },
        {
          title: 'User rights supported',
          detail: 'Access, correction, and deletion requests are recognized within applicable limits.',
        },
      ]}
      sections={sections}
      theme="emerald"
      supportTitle="Privacy Requests"
      supportDescription={
        <>
          Questions about privacy, data access, or corrections can be sent to{' '}
          <a href="mailto:contact@tinitiateai.com" className="font-semibold text-white underline decoration-white/30 underline-offset-4">
            contact@tinitiateai.com
          </a>
          .
        </>
      }
      contactEmail="contact@tinitiateai.com"
      website="https://www.tinitiateai.com"
    />
  )
}
