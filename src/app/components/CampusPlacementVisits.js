"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ClipboardCheck,
  Handshake,
  MapPin,
  MessageSquareText,
} from "lucide-react";

const placementVisit = {
  shortName: "KITS Warangal",
  college: "Kakatiya Institute of Technology & Science",
  location: "Warangal, Telangana",
  logo: "/images/placements/kits-warangal/kits-warangal-mark-v2.png",
  description:
    "TINITIATE visited KITS Warangal to meet graduating students, share real career pathways, and conduct a focused on-campus assessment bringing industry expectations and student potential into the same room.",
  moments: [
    {
      id: "welcome",
      label: "Institutional welcome",
      caption:
        "A formal welcome marking the start of a meaningful campus partnership.",
      image:
        "/images/placements/kits-warangal/formal-welcome-tinitiate.jpg",
      alt: "TINITIATE representative receiving a formal welcome at KITS Warangal",
      objectPosition: "center 43%",
      fit: "cover",
    },
    {
      id: "campus-story",
      label: "A day on campus",
      caption:
        "Student interaction, a panel conversation, and a formal welcome shown together.",
      image:
        "/images/placements/kits-warangal/campus-visit-gallery-original.jpg",
      alt: "KITS Warangal students, panel discussion, and formal welcome during TINITIATE's campus visit",
      objectPosition: "center center",
      fit: "contain",
    },
  ],
};

const visitJourney = [
  {
    title: "Connect",
    detail: "Career dialogue",
    icon: MessageSquareText,
  },
  {
    title: "Assess",
    detail: "Readiness check",
    icon: ClipboardCheck,
  },
  {
    title: "Collaborate",
    detail: "Campus bridge",
    icon: Handshake,
  },
];

export default function CampusPlacementVisits() {
  const [activeMoment, setActiveMoment] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const currentMoment = placementVisit.moments[activeMoment];

  useEffect(() => {
    if (isHovered) return undefined;

    const timer = window.setTimeout(() => {
      setActiveMoment(
        (current) => (current + 1) % placementVisit.moments.length,
      );
    }, 5200);

    return () => window.clearTimeout(timer);
  }, [activeMoment, isHovered]);

  const showCampusStory = () => {
    setIsHovered(true);
    setActiveMoment(1);
  };

  return (
    <section
      aria-labelledby="campus-placement-title"
      className="bg-[#f7fafc] px-4 py-7 transition-colors duration-300 dark:bg-slate-950 sm:px-6 md:px-10"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="campus-placement-title"
            className="text-balance text-3xl font-extrabold leading-tight text-[#12345f] sm:text-4xl lg:text-5xl"
          >
            Campus Placement Visit
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#c9a227]" />
        </div>

        <article className="mx-auto mt-5 grid max-w-[1320px] overflow-hidden rounded-[1.6rem] border border-[#d8e2ee] bg-white shadow-[0_28px_86px_-64px_rgba(15,23,42,0.92)] transition-colors duration-300 dark:border-slate-700 dark:bg-slate-950 dark:shadow-[0_32px_90px_-52px_rgba(2,6,23,0.98)] lg:grid-cols-2">
          <div className="flex flex-col justify-center p-6 sm:p-7 lg:p-8">
            <div className="flex items-center gap-4 border-b border-[#d8e2ee] pb-5 dark:border-slate-700">
              <div className="relative h-[104px] w-[94px] shrink-0 overflow-hidden rounded-xl bg-white sm:h-[116px] sm:w-[104px]">
                <Image
                  src={placementVisit.logo}
                  alt={`${placementVisit.shortName} logo`}
                  fill
                  sizes="(min-width: 640px) 104px, 94px"
                  className="object-contain"
                />
              </div>
              <div className="min-w-0 border-l border-[#d8e2ee] pl-4 dark:border-slate-700">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#697b91]">
                  Featured institution
                </p>
                <h3 className="mt-1 text-base font-extrabold leading-tight text-[#12345f] sm:text-lg">
                  {placementVisit.college}
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#697b91]">
                  <MapPin
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[#c9a227]"
                  />
                  {placementVisit.location}
                </p>
              </div>
            </div>

            <p className="mt-5 text-pretty text-sm leading-6 text-[#53677d] sm:text-[15px] sm:leading-7">
              {placementVisit.description}
            </p>

            <div className="mt-5">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#697b91]">
                The visit, end to end
              </p>
              <ol className="relative mt-3 grid grid-cols-3 gap-2">
                <div
                  aria-hidden="true"
                  className="absolute left-[13%] right-[13%] top-[22px] h-px bg-gradient-to-r from-[#12345f]/25 via-[#c9a227]/70 to-[#0f8f70]/35 dark:from-slate-500/30"
                />
                {visitJourney.map(({ title, detail, icon: Icon }) => (
                  <li key={title} className="relative min-w-0 text-center">
                    <span className="relative z-10 mx-auto flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-[#12345f] text-white shadow-[0_5px_14px_rgba(18,52,95,0.18)] dark:border-slate-950">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.9}
                      />
                    </span>
                    <p className="mt-2 text-xs font-extrabold text-[#12345f] sm:text-sm">
                      {title}
                    </p>
                    <p className="mt-0.5 hidden text-[10px] font-medium text-[#7b8da4] min-[430px]:block sm:text-[11px]">
                      {detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <figure
            onMouseEnter={showCampusStory}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex flex-col overflow-hidden bg-[#071425]"
          >
            <div className="relative aspect-video w-full shrink-0 overflow-hidden">
              {placementVisit.moments.map((moment, index) => {
                const isActive = index === activeMoment;

                return (
                  <div
                    key={moment.id}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 transform-gpu transition-[opacity,transform] duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-[1.015] opacity-0"
                    }`}
                  >
                    <Image
                      src={moment.image}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      style={{ objectPosition: moment.objectPosition }}
                      className="scale-110 object-cover opacity-30 blur-2xl"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#071425]/30"
                    />
                    <Image
                      src={moment.image}
                      alt={isActive ? moment.alt : ""}
                      aria-hidden={!isActive}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      style={{ objectPosition: moment.objectPosition }}
                      className={
                        moment.fit === "cover" ? "object-cover" : "object-contain"
                      }
                    />
                  </div>
                );
              })}

              <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#071425]/75 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-md sm:left-5 sm:top-5 sm:text-[11px]">
                {placementVisit.shortName}
              </div>
            </div>

            <figcaption className="relative flex h-[124px] shrink-0 items-center border-t border-white/10 bg-[#071425] px-5 py-4 text-white sm:h-[112px] sm:px-6 sm:py-5 lg:h-[106px]">
              <div className="min-w-0 max-w-xl">
                <p
                  aria-live="polite"
                  className="text-base font-extrabold leading-tight sm:text-lg"
                >
                  {currentMoment.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                  {currentMoment.caption}
                </p>
              </div>
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}
