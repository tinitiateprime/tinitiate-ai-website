"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-black-400 pt-14 pb-8 mt-16 ">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Company */}
        <div>
          <Link href="/" className="block w-[180px] mb-4">
            <img
              src="/images/tinitiatelogo.png"
              className="brightness-0 invert"
            />
          </Link>

          <h4 className="text-balck  mb-2">
            TECHNICAL INITIATE Technologies Pvt Ltd
          </h4>

          <p className="text-black-400 text-sm">
            TINITIATE AI is a leading IT consulting and training company...
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/company">About Us</Link></li>
            <li><Link href="/pricing-policy">Pricing Policy</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/refund-policy">Refund Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white mb-4">Contact</h4>

          <div className="space-y-3 text-sm">
            <div className="flex gap-2">
              <Mail className="w-4" />
              contact@tinitiate.com
            </div>

            <div className="flex gap-2">
              <Phone className="w-4" />
              +91 95534 95553
            </div>

            <div className="flex gap-2">
              <MapPin className="w-4" />
              Telangana, India
            </div>
          </div>
        </div>
      </div>

      {/* ✅ STATIC YEAR (no hydration issue) */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © 2026 TINITIATE Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}