import Link from "next/link";
import { ArrowRight, ClipboardCheck, UserCircle2 } from "lucide-react";

export default function CareerPromiseBand() {
  return (
    <section className="relative z-[1] bg-[#12345f] text-white shadow-[0_8px_22px_-18px_rgba(15,23,42,0.7)] after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-[#12345f]">
      <div className="mx-auto flex min-h-[38px] w-full max-w-[1800px] items-center justify-between gap-2 px-3 py-1 sm:px-6 sm:py-1.5 md:px-10 lg:gap-6">
        <div className="flex min-w-0 flex-1 items-center gap-5">
          <span className="hidden w-fit shrink-0 items-center gap-2 text-[0.68rem] font-extrabold uppercase leading-none tracking-[0.12em] text-[#f2c94c] sm:inline-flex">
            <ClipboardCheck className="h-4 w-4" />
            Live Project Training
          </span>
          <p className="min-w-0 truncate whitespace-nowrap text-[10px] font-extrabold leading-none sm:text-base">
            <span className="sm:hidden">Trained. Placed. Earn from Day 1.</span>
            <span className="hidden sm:inline">Get Trained. Get Placed. Start Earning from Day 1.</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2">
          <Link
            href="/request-callback"
            className="inline-flex min-h-[30px] items-center justify-center gap-1 whitespace-nowrap rounded-full bg-white px-2.5 py-1.5 text-[11px] font-extrabold text-[#12345f] transition hover:bg-[#fff4c4] dark:!bg-white dark:!text-[#12345f] dark:hover:!bg-[#fff4c4] sm:gap-2 sm:px-4 sm:text-sm"
          >
            <UserCircle2 className="hidden h-4 w-4 min-[380px]:block" />
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Schedule</span>
            <span className="hidden sm:inline">Appointment</span>
          </Link>
          <Link
            href="/pricing#plans"
            className="inline-flex min-h-[30px] items-center justify-center gap-1 whitespace-nowrap rounded-full border border-white/30 px-2.5 py-1.5 text-[11px] font-extrabold text-white transition hover:bg-white/10 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">Pricing</span>
            <span className="hidden sm:inline">View Pricing</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
