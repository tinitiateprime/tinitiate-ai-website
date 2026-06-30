"use client"

import Link from 'next/link'

const socialLinks = [
  {
    label: "LinkedIn", href: "https://www.linkedin.com/company/tinitiate/", hoverColor: "hover:text-[#0A66C2]",
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.38 0-2.74 1.86-2.74 3.76V24h-4V8z"/></svg>,
  },
  {
    label: "YouTube", href: "https://www.youtube.com/@tinitiate", hoverColor: "hover:text-red-500",
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.6-.8-2-1C17.6 2.4 12 2.4 12 2.4h0s-5.6 0-8.6.4c-.4.1-1.3.1-2 1-.6.7-.8 2.4-.8 2.4S0 8.2 0 10.2v1.6c0 2 .2 4 .2 4s.2 1.7.8 2.4c.8.8 1.8.8 2.2.9 1.6.2 6.8.4 6.8.4s5.6 0 8.6-.4c.4-.1 1.3-.1 2.1-.9.6-.7.8-2.4.8-2.4s.2-2 .2-4V10.2c0-2-.2-4-.2-4zM9.6 14.8V7.9l6.4 3.5-6.4 3.4z"/></svg>,
  },
  {
    label: "X", href: "https://x.com/tinitiateprime/", hoverColor: "hover:text-white",
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.244 2H21.5l-7.51 8.57L22.5 22h-5.97l-4.67-5.51L6.5 22H3.244l8.04-9.17L1.5 2h6.09l4.22 5.02L18.244 2Zm-2.1 18h2.07L7.93 4H5.79l10.354 12.02Z"/></svg>,
  },
  {
    label: "Facebook", href: "https://www.facebook.com/tinitiateprime", hoverColor: "hover:text-[#0866FF]",
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.1 5.66 21.24 10.44 22v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.24 22 17.1 22 12.07z"/></svg>,
  },
  {
    label: "Instagram", href: "https://www.instagram.com/tinitiateprime/", hoverColor: "hover:text-pink-400",
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11.001 5.5 5.5 0 0 1 0-11zM18.5 6a1.5 1.5 0 1 1-3.001.001A1.5 1.5 0 0 1 18.5 6z"/></svg>,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-300">
      <div className="h-1 w-full bg-gradient-to-r from-[#c9a227] via-[#e8bc30] to-[#c9a227]" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-5">
              <img src="/images/Tinitiatelogo_white.png" alt="Tinitiate AI Solutions Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A leading IT consulting, development &amp; training company — empowering businesses with cutting-edge technology and high-quality professional training since 2015.
            </p>
            <div className="flex gap-6 mb-6">
              {[{num:"9+",label:"Years"},{num:"5K+",label:"Trained"},{num:"98%",label:"Placement"}].map(s => (
                <div key={s.label}>
                  <div className="text-xl font-black text-[#c9a227]">{s.num}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Tinitiate AI Solutions on ${s.label}`}
                  className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 ${s.hoverColor} hover:bg-white/10 transition-all duration-200`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                {label:"About Us",href:"/company"},
                {label:"Pricing Policy",href:"/pricing-policy"},
                {label:"Privacy Policy",href:"/privacy-policy"},
                {label:"Refund Policy",href:"/refund-policy"},
                {label:"Terms & Conditions",href:"/terms"},
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-[#c9a227] text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#c9a227]/40 group-hover:bg-[#c9a227] transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Training</h4>
            <ul className="space-y-3">
              {[
                {label:"Beginner Training",href:"/training/beginner-training"},
                {label:"Professional Training",href:"/training/professional-training"},
                {label:"Corporate Training",href:"/training/corporate-training"},
                {label:"Campus Training",href:"/training/campus-training"},
                {label:"OPT Training",href:"/training/opt-training"},
                {label:"Work Experience Program",href:"/work-experience-program"},
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-[#c9a227] text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#c9a227]/40 group-hover:bg-[#c9a227] transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Contact Us</h4>
            <div className="space-y-5 text-sm">

              <a href="mailto:contact@tinitiateai.com" className="flex items-center gap-3 text-gray-400 hover:text-[#c9a227] transition-colors group">
                <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c9a227]/10">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                contact@tinitiateai.com
              </a>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">USA</p>
                  <a href="tel:+19736536870" className="text-gray-400 hover:text-[#c9a227] transition-colors block">+1 (973) 653-6870</a>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-2 mb-1">India</p>
                  <a href="tel:+916309123485" className="text-gray-400 hover:text-[#c9a227] transition-colors block">+91 6309123485</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Head Office</p>
                  <p className="text-gray-400 leading-relaxed">Plot B 503, Ace Ajanta, Nagole, Hayathnagar, Telangana – 500068</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-2 mb-1">Corporate Office</p>
                  <p className="text-gray-400 leading-relaxed">1-2/10 SBH Colony, Kothapet, Telangana – 500036</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-2 mb-1">US Office</p>
                  <p className="text-gray-400 leading-relaxed">1420 Valley Trl, Irving, TX 75063, USA</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} TECHNICAL INITIATE Technologies Pvt Ltd. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-400 transition">Privacy</Link>
            <span className="w-px h-3 bg-gray-700" />
            <Link href="/terms" className="hover:text-gray-400 transition">Terms</Link>
            <span className="w-px h-3 bg-gray-700" />
            <Link href="/refund-policy" className="hover:text-gray-400 transition">Refund</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
