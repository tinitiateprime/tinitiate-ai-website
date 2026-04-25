import {
  FaCheckCircle,
  FaCopyright,
  FaEnvelope,
  FaExclamationCircle,
  FaGavel,
  FaGlobe,
  FaInfoCircle,
  FaRocket,
  FaTimesCircle,
} from 'react-icons/fa'
import PolicyPageShell, {
  policyInlineLinkClassName,
} from '../components/PolicyPageShell'

export const metadata = {
  title: 'Terms and Conditions | Tinitiate AI Solutions',
  description:
    'Review the Tinitiate AI Solutions terms and conditions covering website use, intellectual property, liability, and contact information.',
}

const sections = [
  {
    id: 'acceptance-of-terms',
    title: 'Acceptance of Terms',
    icon: FaCheckCircle,
    items: [
      {
        icon: FaCheckCircle,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content: 'Using our services implies acceptance of these terms.',
      },
      {
        icon: FaTimesCircle,
        iconClassName:
          'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200',
        content: 'If you do not agree, please do not use our services.',
      },
    ],
  },
  {
    id: 'changes-to-terms',
    title: 'Changes to Terms',
    icon: FaInfoCircle,
    items: [
      {
        icon: FaInfoCircle,
        iconClassName:
          'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200',
        content:
          'We may revise these terms at any time. Changes will be posted on this page.',
      },
      {
        icon: FaCheckCircle,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content:
          'Continued use after updates implies acceptance of revised terms.',
      },
    ],
  },
  {
    id: 'permitted-use',
    title: 'Permitted Use of Our Website',
    icon: FaRocket,
    items: [
      {
        icon: FaRocket,
        iconClassName:
          'bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-200',
        content: 'Use our website responsibly and lawfully.',
      },
      {
        icon: FaTimesCircle,
        iconClassName:
          'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200',
        content:
          'Do not engage in fraud, copyright infringement, or misuse.',
      },
      {
        icon: FaGavel,
        iconClassName:
          'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
        content:
          'Do not attempt unauthorized access or disruption.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property Rights',
    icon: FaCopyright,
    items: [
      {
        icon: FaCopyright,
        iconClassName:
          'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200',
        content:
          'All content belongs to Tinitiate AI Solutions unless otherwise noted.',
      },
      {
        icon: FaExclamationCircle,
        iconClassName:
          'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200',
        content:
          'Unauthorized reproduction or distribution is prohibited and may result in legal action.',
      },
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    icon: FaExclamationCircle,
    items: [
      {
        icon: FaExclamationCircle,
        iconClassName:
          'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200',
        content:
          'We are not liable for indirect or incidental damages arising from use of our services.',
      },
      {
        icon: FaInfoCircle,
        iconClassName:
          'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200',
        content:
          'While we aim for accuracy, we do not guarantee that content is error-free or uninterrupted.',
      },
    ],
  },
  {
    id: 'contact-information',
    title: 'Contact Information',
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

export default function TermsAndConditions() {
  return (
    <PolicyPageShell
      currentHref="/terms"
      eyebrow="Website Use & Legal Terms"
      title="Terms and Conditions"
      intro={
        <>
          Welcome to{' '}
          <span className="font-semibold text-[#1a3c6e] dark:text-sky-200">
            Tinitiate AI Solutions
          </span>
          . By using our website and services, you agree to the terms below.
        </>
      }
      highlights={[
        {
          title: 'Use means acceptance',
          detail: 'Accessing or using our services means these terms apply to that use.',
        },
        {
          title: 'Responsible website conduct',
          detail: 'Fraud, infringement, misuse, and unauthorized access are not permitted.',
        },
        {
          title: 'Updates may occur',
          detail: 'Changes can be posted on this page, and continued use implies acceptance.',
        },
      ]}
      sections={sections}
      theme="slate"
      supportTitle="Terms Questions"
      supportDescription={
        <>
          For questions about these terms, contact{' '}
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
