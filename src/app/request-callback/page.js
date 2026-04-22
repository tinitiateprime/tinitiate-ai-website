import { Suspense } from 'react'
import RequestCallbackClient from './RequestCallbackClient'

export default function RequestCallbackPage() {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading form...</div>}>
      <RequestCallbackClient />
    </Suspense>
  )
}
