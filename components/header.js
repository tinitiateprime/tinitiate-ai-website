

// File: src/app/components/header.js
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  // ---------- State ----------
  const [isOpen, setIsOpen] = useState(false);      // mobile menu
  const [openMenu, setOpenMenu] = useState(null);   // which desktop dropdown is open
  const [expanded, setExpanded] = useState({});     // mobile accordion
  const [innerOpen, setInnerOpen] = useState({});   // inner expand (FAQ) inside a panel

  // responsive/interaction capability
  const [isDesktop, setIsDesktop] = useState(false);
  const [canHover, setCanHover] = useState(false);

  // timers/refs
  const closeTimerRef = useRef(null);
  const navRef = useRef(null);

  // ---------- Responsive breakpoints & hover capability ----------
  useEffect(() => {
    if (typeof window === "undefined") return;

    const desktopMQ = window.matchMedia("(min-width: 1280px)");
    const hoverMQ = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateDesktop = () => setIsDesktop(desktopMQ.matches);
    const updateHover = () => setCanHover(hoverMQ.matches);

    updateDesktop();
    updateHover();

    desktopMQ.addEventListener("change", updateDesktop);
    hoverMQ.addEventListener("change", updateHover);

    return () => {
      desktopMQ.removeEventListener("change", updateDesktop);
      hoverMQ.removeEventListener("change", updateHover);
    };
  }, []);

  // ---------- Close timer helpers ----------
  const clearCloseTimer = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  const openWithCancel = (key) => {
    clearCloseTimer();
    setOpenMenu(key);
  };

  const scheduleClose = (delay = 160) => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      setInnerOpen({});
    }, delay);
  };

  useEffect(() => () => clearCloseTimer(), []);

  // close when clicking outside
  useEffect(() => {
    const onDocPointerDown = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setOpenMenu(null);
        setInnerOpen({});
      }
    };
    document.addEventListener("pointerdown", onDocPointerDown);
    return () => document.removeEventListener("pointerdown", onDocPointerDown);
  }, []);

  // ---------- Helpers ----------
  const toggleExpand = (key) =>
    setExpanded((p) => ({ ...p, [key]: !p[key] }));

  const toggleInner = (key, value) =>
    setInnerOpen((p) => ({ ...p, [key]: value ?? !p[key] }));

  // only close if pointer truly left wrapper (prevents edge flicker)
  const guardedLeave = (e) => {
    const rt = e.relatedTarget;
    if (rt && e.currentTarget.contains(rt)) return;
    scheduleClose();
  };

  // ---------- Nav data ----------
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work Experience Program", href: "/work-experience-program" },
   
    {
      label: "Training",
      href: "/training",
      align: "left",
      dropdown: [
        { label: "Beginner Training", href: "/training/beginner-training" },
        { label: "Professional Training", href: "/training/professional-training" },
        // { label: "Personalized Training", href: "/training/personalized-training" },
        { label: "Corporate Training", href: "/training/corporate-training" },
        { label: "Campus Training", href: "/training/campus-training" }, 
        { label: "OPT Training", href: "/training/opt-training"}
        
      ],
    }, 
    {
      label: "Company",
      href: "/company",
      align: "right", // open inward from the right edge
      dropdown: [
        { label: "About Us", href: "/company" },
        {
          label: "FAQ",
          href: "/faq",
          dropdown: [
            { label: "Why Tinitiate AI Solutions", href: "/faq/why-tinitiate" },
            { label: "STEM Students", href: "/faq/students-stem" },
            { label: "Non-STEM Students", href: "/faq/students-nonstem" },
            { label: "Parents — STEM", href: "/faq/parents-stem" },
            { label: "Parents — Non-STEM", href: "/faq/parents-nonstem" },
          ],
        },
      ],
    },
  ];

  return (
    <header className="bg-white sticky top-0 z-[100] border-b border-gray-100">
      <nav ref={navRef} className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="block w-[140px] md:w-[170px] lg:w-[220px] xl:w-[220px]">
          <Image
            src="/images/Tinitiatelogo_black.png"
            alt="Tinitiate AI Solutions Logo"
            width={904}
            height={108}
            className="h-auto w-full object-contain"
            priority
          />
        </Link>
        
        {/* Hamburger — visible below 1280px */}
        {!isDesktop && (
          <button
            className="text-gray-800 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Desktop Menu */}
        {isDesktop && (
          <ul className="flex space-x-2 text-gray-800 items-center">
            {navItems.map((item) => {
              const hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;

              // Simple link
              if (!hasDropdown) {
                return (
                  <li key={item.href} className="px-1 py-1">
                    <Link
                      href={item.href}
                      className="px-4 py-2 rounded-full hover:bg-[#f2f2f2] transition inline-block whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const alignClass = item.align === "right" ? "right-0" : "left-0";
              const open = openMenu === item.label;

              // Conditionally attach hover handlers only if the device can hover
              const triggerHandlers = canHover
                ? {
                    onPointerEnter: () => openWithCancel(item.label),
                    onPointerLeave: guardedLeave,
                    onPointerMove: () => {
                      if (!open) openWithCancel(item.label);
                    },
                  }
                : {
                    // fallback click toggle on non-hover desktops (rare, but safe)
                    onClick: () => (open ? setOpenMenu(null) : openWithCancel(item.label)),
                  };

              return (
                <li
                  key={item.label}
                  className="relative px-1 py-1"
                  {...triggerHandlers}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-[#f2f2f2] transition"
                    aria-haspopup="true"
                    aria-expanded={open}
                    onFocus={() => openWithCancel(item.label)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setOpenMenu(null);
                        (e.currentTarget).blur();
                      }
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        open ? setOpenMenu(null) : openWithCancel(item.label);
                      }
                      if (e.key === "ArrowDown") openWithCancel(item.label);
                    }}
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </button>

                  {/* SAFE-ZONE buffer to bridge trigger→panel */}
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 top-full h-5 -translate-y-px"
                  />

                  {/* Panel */}
                  <div
                    className={[
                      "absolute top-full", alignClass,
                      "w-[22rem] max-w-[min(22rem,calc(100vw-1rem))]",
                      "z-[1000] border border-gray-200 rounded-xl bg-white shadow-lg mt-2 p-2",
                      "transition-opacity duration-150",
                      open ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none",
                    ].join(" ")}
                    onPointerEnter={canHover ? () => openWithCancel(item.label) : undefined}
                    onPointerLeave={canHover ? guardedLeave : undefined}
                    role="menu"
                  >
                    <ul className="text-sm">
                      {item.dropdown.map((sub) => {
                        const hasInner = Array.isArray(sub.dropdown) && sub.dropdown.length > 0;

                        if (!hasInner) {
                          return (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                onClick={() => setOpenMenu(null)}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          );
                        }

                        // inner expansion (FAQ)
                        const innerKey = `${item.label}::${sub.label}`;
                        const opened = !!innerOpen[innerKey];

                        return (
                          <li key={sub.label} className="rounded-md">
                            <button
                              type="button"
                              className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100"
                              aria-expanded={opened}
                              onClick={() => toggleInner(innerKey)}
                              onPointerEnter={canHover ? () => toggleInner(innerKey, true) : undefined}
                            >
                              <span>{sub.label}</span>
                              <ChevronDown
                                size={16}
                                className={`transition-transform ${opened ? "rotate-180" : ""}`}
                              />
                            </button>

                            {opened && (
                              <ul className="mt-1 ml-2 border-l border-gray-200 pl-3">
                                {sub.dropdown.map((leaf) => (
                                  <li key={leaf.href}>
                                    <Link
                                      href={leaf.href}
                                      className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                      onClick={() => setOpenMenu(null)}
                                    >
                                      {leaf.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}

            {/* Desktop CTA */}
            <li className="pl-2">
              <Link
                href="/request-callback"
                className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm font-medium whitespace-nowrap"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* Mobile Menu */}
      {!isDesktop && isOpen && (
        <ul className="bg-white px-4 pb-4 space-y-2 text-gray-800 border-t border-gray-100">
          {navItems.map((item) => {
            const hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;

            if (!hasDropdown) {
              return (
                <li key={item.href} className="hover:bg-[#f2f2f2] rounded-md px-3 py-2 transition">
                  <Link href={item.href} onClick={() => setIsOpen(false)} className="block">
                    {item.label}
                  </Link>
                </li>
              );
            }

            const key = item.label;
            const sectionOpen = !!expanded[key];

            return (
              <li key={key} className="rounded-md">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100"
                  onClick={() => toggleExpand(key)}
                  aria-expanded={sectionOpen}
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`transition-transform ${sectionOpen ? "rotate-180" : ""}`} size={18} />
                </button>

                {sectionOpen && (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-gray-200 pl-3">
                    {item.dropdown.map((sub) => {
                      const hasInner = Array.isArray(sub.dropdown) && sub.dropdown.length > 0;

                      if (!hasInner) {
                        return (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        );
                      }

                      const subKey = `${key}::${sub.label}`;
                      const innerSectionOpen = !!expanded[subKey];

                      return (
                        <li key={subKey} className="rounded-md">
                          <button
                            type="button"
                            className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                            onClick={() => toggleExpand(subKey)}
                            aria-expanded={innerSectionOpen}
                          >
                            <span>{sub.label}</span>
                            <ChevronDown
                              className={`transition-transform ${innerSectionOpen ? "rotate-180" : ""}`}
                              size={16}
                            />
                          </button>

                          {innerSectionOpen && (
                            <ul className="ml-3 mt-1 space-y-1 border-l border-gray-200 pl-3">
                              {sub.dropdown.map((leaf) => (
                                <li key={leaf.href}>
                                  <Link
                                    href={leaf.href}
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {leaf.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}

          {/* Mobile CTA */}
          <li className="pt-2">
            <Link
              href="/request-callback"
              className="bg-blue-600 text-white w-full block text-center px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
