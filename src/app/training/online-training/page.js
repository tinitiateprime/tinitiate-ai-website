import Link from 'next/link'
import { FiArrowRight, FiClock } from 'react-icons/fi'

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO (black) */}
      <section className="relative overflow-hidden bg-black px-6 py-20">
        <div className="pointer-events-none absolute inset-0 bg-black opacity-70" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Online Training • Updates in progress
          </span>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Online Training – Coming Soon
          </h1>

          <p className="max-w-xl text-sm md:text-base text-slate-200">
            We&apos;re setting up dedicated online training batches with flexible timings,
            live mentor-led classes, and complete recordings. Full details will be published here soon.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/request-callback"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
            >
              Request Online Training Details
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-2 text-xs text-slate-300 md:text-sm">
              <FiClock className="h-4 w-4" />
              <span>Share your preferred time slots &amp; mode.</span>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARD */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white/80 p-8 text-center shadow-sm">
            <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <FiClock className="h-4 w-4" />
              Page under update
            </p>

            <h2 className="mt-4 text-xl font-semibold text-gray-900 md:text-2xl">
              Online batch schedule will be live soon
            </h2>

            <p className="mt-3 text-sm text-gray-600 md:text-base">
              We are finalising online-only batches for Beginner Training and Professional Training —
              including Python, Web Development, Data Engineering, Cloud, DevOps, and AI.
            </p>

            <div className="mt-6 grid gap-4 text-sm text-gray-700 md:grid-cols-3">
              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="font-semibold text-gray-900 text-sm">Fully Online</p>
                <p className="mt-1 text-xs text-gray-600">
                  Learn from anywhere with live Zoom / Meet sessions.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="font-semibold text-gray-900 text-sm">Recordings Provided</p>
                <p className="mt-1 text-xs text-gray-600">
                  Access session recordings and practice material anytime.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-3">
                <p className="font-semibold text-gray-900 text-sm">Beginner &amp; Pro Tracks</p>
                <p className="mt-1 text-xs text-gray-600">
                  Separate tracks for freshers and working professionals.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-600">
              <span>Want to join the first online batch?</span>
              <Link
                href="/request-callback"
                className="inline-flex items-center gap-1 rounded-full border border-indigo-500/70 bg-white px-4 py-1.5 text-[11px] font-medium text-indigo-600 hover:bg-indigo-500 hover:text-white transition"
              >
                Talk to our team
                <FiArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
