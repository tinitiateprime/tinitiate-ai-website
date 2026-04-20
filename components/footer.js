"use client"

import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-white border-t pt-10 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700 text-sm">
        
        {/* Company Intro */}
        <div>
        <Link href="/" className="block w-[160px] md:w-[220px] lg:w-[260px] xl:w-[300px] mb-3">
  <img
    src="/images/tinitiatelogo.png" // Make sure your logo exists at public/images/logo.png
    alt="TINITIATE Logo"
    className="w-full h-auto object-contain"
  />
</Link>

          <h4 className="text-base font-semibold text-gray-900 mb-3">
            TECHNICAL INITIATE Technologies Pvt Ltd
          </h4>
          <p className="leading-relaxed">
          TINITIATE is a leading IT consulting, development and training company, dedicated to empowering businesses with cutting-edge technology solutions and high-quality professional training. A highly experienced team with years of expertise in IT services, database management, and cloud computing, we deliver tailored solutions to meet the evolving demands of enterprises worldwide.


          </p>
         {/* Social media */}
          <div className="mt-5">
            <h5 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Follow us
            </h5>
            <div className="mt-2 flex items-center gap-5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/tinitiate/" // ← replace
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TINITIATE on LinkedIn"
                className="text-gray-500 hover:text-[#0A66C2] transition"
                title="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.38 0-2.74 1.86-2.74 3.76V24h-4V8z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@tinitiate" // ← replace
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TINITIATE on YouTube"
                className="text-gray-500 hover:text-red-600 transition"
                title="YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.6-.8-2-1C17.6 2.4 12 2.4 12 2.4h0s-5.6 0-8.6.4c-.4.1-1.3.1-2 1-.6.7-.8 2.4-.8 2.4S0 8.2 0 10.2v1.6c0 2 .2 4 .2 4s.2 1.7.8 2.4c.8.8 1.8.8 2.2.9 1.6.2 6.8.4 6.8.4s5.6 0 8.6-.4c.4-.1 1.3-.1 2.1-.9.6-.7.8-2.4.8-2.4s.2-2 .2-4V10.2c0-2-.2-4-.2-4zM9.6 14.8V7.9l6.4 3.5-6.4 3.4z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/tinitiateprime/" // ← replace
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TINITIATE on X"
                className="text-gray-500 hover:text-black transition"
                title="X"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2H21.5l-7.51 8.57L22.5 22h-5.97l-4.67-5.51L6.5 22H3.244l8.04-9.17L1.5 2h6.09l4.22 5.02L18.244 2Zm-2.1 18h2.07L7.93 4H5.79l10.354 12.02Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/tinitiateprime" // ← replace
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TINITIATE on Facebook"
                className="text-gray-500 hover:text-[#0866FF] transition"
                title="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.1 5.66 21.24 10.44 22v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.24 22 17.1 22 12.07z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tinitiateprime/" // ← replace
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TINITIATE on Instagram"
                className="text-gray-500 hover:text-[#C13584] transition"
                title="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11.001 5.5 5.5 0 0 1 0-11zM18.5 6a1.5 1.5 0 1 1-3.001.001A1.5 1.5 0 0 1 18.5 6z" />
                </svg>
              </a>

              {/* GitHub (optional, if you share code) */}
              {/* <a
                href="https://github.com/tinitiate" // ← replace or remove
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TINITIATE on GitHub"
                className="text-gray-500 hover:text-gray-900 transition"
                title="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53v-1.86c-3.05.66-3.69-1.3-3.69-1.3-.5-1.26-1.22-1.6-1.22-1.6-.99-.67.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.19 3.2.9.1-.71.39-1.19.71-1.46-2.43-.28-4.98-1.21-4.98-5.37 0-1.19.43-2.16 1.13-2.92-.11-.28-.49-1.42.11-2.95 0 0 .92-.29 3.01 1.12.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.09-1.41 3.01-1.12 3.01-1.12.6 1.53.22 2.67.11 2.95.7.76 1.13 1.73 1.13 2.92 0 4.17-2.56 5.09-5 5.36.4.35.76 1.03.76 2.08v3.09c0 .29.19.64.76.53 4.36-1.45 7.51-5.56 7.51-10.41C23.02 5.24 18.27.5 12 .5z" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
        

        {/* Company Links */}
        <div>
          <h4 className="text-base font-semibold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/company" className="hover:text-blue-600 transition">About Us</Link>
            </li>
            <li>
              <Link href="/pricing-policy" className="hover:text-blue-600 transition">Pricing Policy</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-blue-600 transition">Refund Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-600 transition">Terms & Conditions</Link>
            </li>
             {/* <li>
              <Link href="/faq/why-tinitiate/parents-stem" className="hover:text-blue-600 transition">FAQ</Link>
            </li> */}
          </ul>
        </div>

        {/* Contact Info */}
  <div>
  <h4 className="text-base font-semibold text-gray-900 mb-3">Contact Us</h4>

  {/* Contact details first */}
  <div className="not-italic space-y-3">
    <div>
      📧{" "}
      <a
        href="mailto:contact@tinitiate.com"
        className="hover:text-blue-600 transition"
      >
        contact@tinitiate.com
      </a>
    </div>

    <div>
      <span className="font-medium">USA:</span>{" "}
      <a href="tel:+19736536870" className="hover:text-blue-600 transition">
        +1 (973) 653-6870
      </a>
      {", "}
      <a href="tel:+12068024102" className="hover:text-blue-600 transition">
        +1 (206) 802-4102
      </a>
    </div>

    <div>
      <span className="font-medium">India:</span>{" "}
      <a href="tel:+919553495553" className="hover:text-blue-600 transition">
        +91 95534 95553
      </a>
    </div>

    {/* Address after contact details */}
    <address className="not-italic space-y-2 pt-2">
      <div>
        <span className="font-semibold">Head Office:</span>
        <br />
        Plot No. B 503, Ace Ajanta,
        Beside Indu Aranya, Nagole,
        Hayathnagar, R.R. – 500068,
        Telangana, India
      </div>
    </address>
        <address className="not-italic space-y-2 pt-2">
      <div>
        <span className="font-semibold">Corporate Office:</span>
        <br />
       1-2/10 Sbh Colony Mohan Nagar, SBH Colony,
       Kothapet, 500036, Telangana, India
      </div>
    </address>
  </div>
</div>

      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} TINITIATE Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  )
}
