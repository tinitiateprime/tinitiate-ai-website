import {
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaSyncAlt,
  FaTimesCircle,
} from 'react-icons/fa'
import PolicyPageShell, {
  policyInlineLinkClassName,
} from '../components/PolicyPageShell'

export const metadata = {
  title: 'Refund Policy | Tinitiate AI Solutions',
  description:
    'Understand the Tinitiate AI Solutions cancellation and refund policy, including eligibility windows, non-refundable items, and processing times.',
}

const sections = [
  {
    id: 'cancellation-policy',
    title: 'Cancellation Policy',
    icon: FaTimesCircle,
    items: [
      {
        icon: FaEnvelope,
        iconClassName:
          'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200',
        content: (
          <>
            Contact us at{' '}
            <a
              href="mailto:contact@tinitiateai.com"
              className={policyInlineLinkClassName}
            >
              contact@tinitiateai.com
            </a>{' '}
            to initiate a cancellation.
          </>
        ),
      },
      {
        icon: FaTimesCircle,
        iconClassName:
          'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200',
        content: (
          <>
            A non-refundable administrative fee of <strong>15%</strong> applies
            to all cancellations.
          </>
        ),
      },
      {
        icon: FaCheckCircle,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content:
          'If you cancel before the course begins, you are eligible for a refund minus the 15% fee.',
      },
    ],
  },
  {
    id: 'refund-policy',
    title: 'Refund Policy',
    icon: FaSyncAlt,
    items: [
      {
        icon: FaCheckCircle,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content:
          'If a batch is canceled by Tinitiate AI Solutions, students may opt for a full refund or join a different batch.',
      },
      {
        icon: FaCheckCircle,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content:
          'If a student cancels before class begins, they will receive a refund minus the 15% administrative fee.',
      },
      {
        icon: FaTimesCircle,
        iconClassName:
          'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200',
        content:
          'No refunds are issued after class has started and the refund window has closed.',
      },
      {
        icon: FaClock,
        iconClassName:
          'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200',
        content: (
          <>
            Refund requests must be made within <strong>7 days</strong> or
            before completing <strong>5 hours</strong> of training, whichever
            comes first.
          </>
        ),
      },
    ],
  },
  {
    id: 'non-refundable-items',
    title: 'Non-Refundable Items',
    icon: FaTimesCircle,
    items: [
      {
        icon: FaTimesCircle,
        iconClassName:
          'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200',
        content: 'Refund requests made after the specified refund window.',
      },
      {
        icon: FaTimesCircle,
        iconClassName:
          'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200',
        content:
          'Accessed downloadable digital content or course materials.',
      },
      {
        icon: FaTimesCircle,
        iconClassName:
          'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200',
        content: 'Custom corporate training sessions once scheduled.',
      },
    ],
  },
  {
    id: 'refund-processing',
    title: 'Refund Processing',
    icon: FaSyncAlt,
    items: [
      {
        icon: FaEnvelope,
        iconClassName:
          'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200',
        content:
          'You will be notified of approval or rejection after your refund request is reviewed.',
      },
      {
        icon: FaSyncAlt,
        iconClassName:
          'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
        content: (
          <>
            Approved refunds are processed within{' '}
            <strong>7 to 10 business days</strong> to the original payment
            method.
          </>
        ),
      },
    ],
  },
]

export default function CancellationRefundPolicy() {
  return (
    <PolicyPageShell
      currentHref="/refund-policy"
      eyebrow="Cancellations & Refunds"
      title="Cancellation & Refund Policy"
      intro={
        <>
          At{' '}
          <span className="font-semibold text-[#1a3c6e] dark:text-sky-200">
            Tinitiate AI Solutions
          </span>
          , we are committed to delivering high-quality IT training and
          services. We understand that plans may change, so here is our
          transparent policy regarding cancellations and refunds.
        </>
      }
      highlights={[
        {
          title: '15% admin fee',
          detail: 'All cancellations carry a non-refundable administrative fee of 15%.',
        },
        {
          title: 'Refund window',
          detail: 'Requests must be made within 7 days or before 5 training hours are completed.',
        },
        {
          title: 'Processing timeline',
          detail: 'Approved refunds are returned to the original payment method within 7 to 10 business days.',
        },
      ]}
      sections={sections}
      theme="sky"
      supportTitle="Refund Support"
      supportDescription={
        <>
          To initiate a cancellation or refund query, contact{' '}
          <a href="mailto:contact@tinitiateai.com" className="font-semibold text-white underline decoration-white/30 underline-offset-4">
            contact@tinitiateai.com
          </a>
          .
        </>
      }
      contactEmail="contact@tinitiateai.com"
    />
  )
}
