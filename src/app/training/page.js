import { Suspense } from "react";

import ITTrainingPage from "./it-training/ITTrainingClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading training...</div>}>
      <ITTrainingPage />
    </Suspense>
  );
}
