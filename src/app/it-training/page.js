
import { Suspense } from 'react'

import ITTrainingPage  from './ITTrainingClient.js'

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading IT Training...</div>}>
      <ITTrainingPage />
    </Suspense>
  )
}








