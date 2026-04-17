"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // ✅ Safe responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work Experience Program", href: "/work-experience-program" },
    { label: "Training", href: "/training" },
    { label: "Company", href: "/company" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
     <nav className="max-w-7xl mx-auto px-4 h-[80px] flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="w-[160px]">
          <Image
            src="/images/tinitiatelogo.png"
            alt="Logo"
            width={594}
            height={82}
            className="w-full h-auto"
            priority
          />
        </Link>

        {/* Mobile Toggle */}
        {!isDesktop && (
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        )}

        {/* Desktop Menu */}
        {isDesktop && (
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <Link
              href="/request-callback"
              className="bg-blue-600 text-white px-5 py-2 rounded-full"
            >
              Contact
            </Link>
          </ul>
        )}
      </nav>

      {/* Mobile Menu */}
      {!isDesktop && isOpen && (
        <div className="px-4 pb-4 bg-white border-t">
          {navItems.map((item) => (
            <div key={item.label} className="py-2">
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </div>
          ))}

          <Link
            href="/request-callback"
            className="block bg-blue-600 text-white text-center py-2 rounded-full mt-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}