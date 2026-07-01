"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import ThemeLogo from "./ThemeLogo";

function getDocumentTheme() {
  if (typeof document === "undefined") return "light";
  const datasetTheme = document.documentElement.getAttribute("data-theme");
  if (datasetTheme === "dark" || datasetTheme === "light") return datasetTheme;
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyDocumentTheme(nextTheme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", nextTheme === "dark");
  document.documentElement.style.colorScheme = nextTheme;
  document.documentElement.setAttribute("data-theme", nextTheme);
  document.documentElement.setAttribute("data-theme-ready", "true");
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [expanded, setExpanded] = useState({});
  const [innerOpen, setInnerOpen] = useState({});
  const [canHover, setCanHover] = useState(false);
  const closeTimerRef = useRef(null);
  const navRef = useRef(null);
  const [theme, setTheme] = useState("light");
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hoverMQ = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateHover = () => setCanHover(hoverMQ.matches);

    updateHover();
    hoverMQ.addEventListener("change", updateHover);

    return () => hoverMQ.removeEventListener("change", updateHover);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const resolveTheme = () => {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") return saved;
      return mediaQuery.matches ? "dark" : "light";
    };

    const syncTheme = () => {
      const nextTheme = resolveTheme();
      applyDocumentTheme(nextTheme);
      setTheme(nextTheme);
      setIsThemeReady(true);
    };
    const handleStorage = (event) => {
      if (event.key === "theme") syncTheme();
    };
    const handleSystemTheme = () => {
      const saved = localStorage.getItem("theme");
      if (saved !== "dark" && saved !== "light") syncTheme();
    };

    syncTheme();
    window.addEventListener("storage", handleStorage);
    if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", handleSystemTheme);
    else mediaQuery.addListener(handleSystemTheme);

    return () => {
      window.removeEventListener("storage", handleStorage);
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener("change", handleSystemTheme);
      else mediaQuery.removeListener(handleSystemTheme);
    };
  }, []);

  const toggleTheme = () => {
    if (!isThemeReady) return;
    const next = theme === "dark" ? "light" : "dark";
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next);
    }
    setTheme(next);
    applyDocumentTheme(next);
  };

  const isDark = theme === "dark";

  useEffect(() => () => clearCloseTimer(), []);

  useEffect(() => {
    const onDocPointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setOpenMenu(null);
        setInnerOpen({});
      }
    };

    document.addEventListener("pointerdown", onDocPointerDown);
    return () => document.removeEventListener("pointerdown", onDocPointerDown);
  }, []);

  const toggleExpand = (key) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleInner = (key, value) =>
    setInnerOpen((prev) => ({ ...prev, [key]: value ?? !prev[key] }));

  const guardedLeave = (event) => {
    const relatedTarget = event.relatedTarget;
    const currentTarget = event.currentTarget;
    const isNode =
      relatedTarget && typeof relatedTarget === "object" && relatedTarget !== null && typeof relatedTarget.nodeType === "number";
    if (isNode && currentTarget && typeof currentTarget.contains === "function" && currentTarget.contains(relatedTarget)) return;
    scheduleClose();
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Placement", href: "/placement" },
    { label: "Work Experience Program", href: "/work-experience-program" },
    { label: "Pricing", href: "/pricing" },
    {
      label: "Training",
      href: "/training",
      align: "left",
      dropdown: [
        { label: "Junior Tech Program", href: "/training/junior-tech-program" },
        { label: "Beginner Training", href: "/training/beginner-training" },
        { label: "Professional Training", href: "/training/professional-training" },
        { label: "Corporate Training", href: "/training/corporate-training" },
        { label: "Campus Training", href: "/training/campus-training" },
        { label: "OPT Training", href: "/training/opt-training" },
      ],
    },
    {
      label: "Company",
      href: "/company",
      align: "right",
      dropdown: [
        { label: "About Us", href: "/company" },
        { label: "FAQ'S", href: "/faq" },
      ],
    },
  ];

  return (
    <div className="border-b border-gray-100 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <nav
        ref={navRef}
        className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
      >
        <div className="site-brand-shell flex items-center gap-3">
          <Link href="/" className="block w-[148px] sm:w-[182px] lg:w-[224px]">
            <ThemeLogo
              priority
              mode="auto"
              sizes="(max-width: 640px) 148px, (max-width: 1024px) 182px, 224px"
              wrapperClassName="transition-opacity duration-200"
            />
          </Link>
        </div>

        <button
          type="button"
          className="touch-target rounded-xl p-2 text-gray-800 transition hover:bg-gray-100 dark:text-slate-100 dark:hover:bg-slate-800 xl:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden items-center gap-2 text-gray-800 dark:text-slate-100 xl:flex">
          {navItems.map((item) => {
            const hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;

            if (!hasDropdown) {
              return (
                <li key={item.href} className="px-1 py-1">
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center rounded-full px-4 py-2 whitespace-nowrap transition hover:bg-[#f2f2f2] dark:hover:bg-slate-800"
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            const alignClass = item.align === "right" ? "right-0" : "left-0";
            const open = openMenu === item.label;

            const triggerHandlers = canHover
              ? {
                  onPointerEnter: () => openWithCancel(item.label),
                  onPointerLeave: guardedLeave,
                  onPointerMove: () => {
                    if (!open) openWithCancel(item.label);
                  },
                }
              : {
                  onClick: () => (open ? setOpenMenu(null) : openWithCancel(item.label)),
                };

            return (
              <li key={item.label} className="relative px-1 py-1" {...triggerHandlers}>
                <button
                  type="button"
                  className="touch-target flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-[#f2f2f2] dark:hover:bg-slate-800"
                  aria-haspopup="true"
                  aria-expanded={open}
                  onFocus={() => openWithCancel(item.label)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setOpenMenu(null);
                      event.currentTarget.blur();
                    }
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      open ? setOpenMenu(null) : openWithCancel(item.label);
                    }
                    if (event.key === "ArrowDown") openWithCancel(item.label);
                  }}
                >
                  {item.label}
                  <ChevronDown size={16} />
                </button>

                <span
                  aria-hidden
                  className="absolute left-0 right-0 top-full h-5 -translate-y-px"
                />

                <div
                  className={[
                    "absolute top-full z-[1000] mt-2 w-[22rem] max-w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-opacity duration-150 dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_24px_55px_rgba(2,6,23,0.56)]",
                    alignClass,
                    open
                      ? "visible pointer-events-auto opacity-100"
                      : "invisible pointer-events-none opacity-0",
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
                              className="block rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-800"
                              onClick={() => setOpenMenu(null)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        );
                      }

                      const innerKey = `${item.label}::${sub.label}`;
                      const opened = !!innerOpen[innerKey];

                      return (
                        <li key={sub.label} className="rounded-xl">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-800"
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

                          {opened ? (
                            <ul className="mt-1 ml-2 border-l border-gray-200 pl-3 dark:border-slate-700">
                              {sub.dropdown.map((leaf) => (
                                <li key={leaf.href}>
                                  <Link
                                    href={leaf.href}
                                    className="block rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-800"
                                    onClick={() => setOpenMenu(null)}
                                  >
                                    {leaf.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}

          <li className="pl-2">
            <Link
              href="/request-callback"
              className="inline-flex min-h-[44px] items-center rounded-full bg-blue-500 px-5 py-2 text-sm font-medium whitespace-nowrap text-white transition hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </li>
          <li className="pl-1">
            {isThemeReady ? (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                aria-pressed={isDark}
                className="group relative inline-flex h-11 w-[74px] items-center rounded-full border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#eef4ff_100%)] p-1 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.14)] dark:border-slate-700 dark:bg-[linear-gradient(135deg,#0f172a_0%,#172554_100%)] dark:shadow-[0_12px_28px_rgba(2,6,23,0.45)]"
              >
                <span className="absolute inset-y-1 left-1 flex w-8 items-center justify-center text-amber-500 transition-opacity duration-300 dark:opacity-55">
                  <Sun size={15} />
                </span>
                <span className="absolute inset-y-1 right-1 flex w-8 items-center justify-center text-slate-400 transition-opacity duration-300 dark:text-cyan-300 dark:opacity-100">
                  <Moon size={15} />
                </span>
                <span
                  aria-hidden
                  className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-[0_8px_18px_rgba(15,23,42,0.16)] transition-all duration-300 dark:bg-slate-950 dark:text-cyan-200 dark:shadow-[0_8px_18px_rgba(2,6,23,0.45)] ${
                    isDark ? "translate-x-[30px]" : "translate-x-0"
                  }`}
                >
                  {isDark ? <Moon size={15} /> : <Sun size={15} />}
                </span>
              </button>
            ) : (
              <span
                aria-hidden
                className="inline-flex h-11 w-[74px] items-center rounded-full border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#eef4ff_100%)] p-1 shadow-[0_10px_24px_rgba(15,23,42,0.08)] opacity-70 dark:border-slate-700 dark:bg-[linear-gradient(135deg,#0f172a_0%,#172554_100%)] dark:shadow-[0_12px_28px_rgba(2,6,23,0.45)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-400 shadow-[0_8px_18px_rgba(15,23,42,0.16)] dark:bg-slate-950 dark:text-slate-500 dark:shadow-[0_8px_18px_rgba(2,6,23,0.45)]">
                  <Sun size={15} />
                </span>
              </span>
            )}
          </li>
        </ul>

      </nav>

      <div className={`${isOpen ? "block" : "hidden"} border-t border-gray-100 dark:border-slate-800 xl:hidden`}>
        <ul className="max-h-[calc(100vh-5rem)] space-y-2 overflow-y-auto bg-white px-4 pb-4 pt-3 text-gray-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 sm:px-6">
          {navItems.map((item) => {
            const hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;

            if (!hasDropdown) {
              return (
                <li key={item.href} className="rounded-xl transition hover:bg-[#f2f2f2] dark:hover:bg-slate-800">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-3 py-3"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            const key = item.label;
            const sectionOpen = !!expanded[key];

            return (
              <li key={key} className="rounded-xl">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 hover:bg-gray-100 dark:hover:bg-slate-800"
                  onClick={() => toggleExpand(key)}
                  aria-expanded={sectionOpen}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`transition-transform ${sectionOpen ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>

                {sectionOpen ? (
                  <ul className="mt-1 ml-3 space-y-1 border-l border-gray-200 pl-3 dark:border-slate-700">
                    {item.dropdown.map((sub) => {
                      const hasInner = Array.isArray(sub.dropdown) && sub.dropdown.length > 0;

                      if (!hasInner) {
                        return (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="block rounded-xl px-3 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-slate-800"
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
                        <li key={subKey} className="rounded-xl">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-slate-800"
                            onClick={() => toggleExpand(subKey)}
                            aria-expanded={innerSectionOpen}
                          >
                            <span>{sub.label}</span>
                            <ChevronDown
                              className={`transition-transform ${innerSectionOpen ? "rotate-180" : ""}`}
                              size={16}
                            />
                          </button>

                          {innerSectionOpen ? (
                            <ul className="mt-1 ml-3 space-y-1 border-l border-gray-200 pl-3 dark:border-slate-700">
                              {sub.dropdown.map((leaf) => (
                                <li key={leaf.href}>
                                  <Link
                                    href={leaf.href}
                                    className="block rounded-xl px-3 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-slate-800"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {leaf.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}

          <li className="pt-2">
            <div className="flex items-center gap-3">
              <Link
                href="/request-callback"
                className="flex-1 rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              {isThemeReady ? (
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                  aria-pressed={isDark}
                  className="inline-flex h-12 w-16 items-center rounded-full border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#eef4ff_100%)] p-1 shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-[linear-gradient(135deg,#0f172a_0%,#172554_100%)]"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition-transform duration-300 dark:bg-slate-950 dark:text-cyan-200 ${
                      isDark ? "translate-x-4" : "translate-x-0"
                    }`}
                  >
                    {isDark ? <Moon size={16} /> : <Sun size={16} />}
                  </span>
                </button>
              ) : (
                <span
                  aria-hidden
                  className="inline-flex h-12 w-16 items-center rounded-full border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#eef4ff_100%)] p-1 shadow-sm opacity-70 dark:border-slate-700 dark:bg-[linear-gradient(135deg,#0f172a_0%,#172554_100%)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm dark:bg-slate-950 dark:text-slate-500">
                    <Sun size={16} />
                  </span>
                </span>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
