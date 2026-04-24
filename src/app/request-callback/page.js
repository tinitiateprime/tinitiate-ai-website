import { Suspense } from 'react'
import RequestCallbackClient from './RequestCallbackClient'

export default async function RequestCallbackPage({ searchParams }) {
  const resolvedSearchParams = await searchParams
  const course = resolvedSearchParams?.course || ''
  const service = resolvedSearchParams?.service || ''

  return (
    <Suspense fallback={<div className="py-10 text-center">Loading form...</div>}>
      <RequestCallbackClient
        key={`${course}:${service}`}
        course={course}
        service={service}
      />
    </Suspense>
  )
}
