/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { id: "01", icon: <Facebook size={18} />, link: "https://facebook.com", label: "Facebook", hoverColor: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]" },
  { id: "02", icon: <Twitter size={18} />, link: "https://twitter.com", label: "Twitter", hoverColor: "hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]" },
  { id: "03", icon: <Linkedin size={18} />, link: "https://linkedin.com", label: "LinkedIn", hoverColor: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]" },
  { id: "04", icon: <Youtube size={18} />, link: "https://youtube.com", label: "YouTube", hoverColor: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]" },
];

const newsLinks = [
  { href: "/", label: "সর্বশেষ" },
  { href: "/national", label: "জাতীয়" },
  { href: "/politics", label: "রাজনীতি" },
  { href: "/international", label: "আন্তর্জাতিক" },
];

const sectionLinks = [
  { href: "/technology", label: "প্রযুক্তি" },
  { href: "/health", label: "স্বাস্থ্য" },
  { href: "/economy", label: "অর্থনীতি" },
  { href: "/tourism", label: "পর্যটন" },
];

const otherLinks = [
  { href: "/education", label: "শিক্ষা" },
  { href: "/sport", label: "খেলাধুলা" },
  { href: "/entertainment", label: "বিনোদন" },
  { href: "/religion", label: "ধর্ম" },
];

// 👇 নতুন — প্রতিষ্ঠান সেকশন
const companyLinks = [
  { href: "/about", label: "About Alokpath" },
  { href: "/about-us", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/policies", label: "Policies & Contact" },
  { href: "/contact", label: "Contact Us" },
];

const policyLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/correction-policy", label: "Correction Policy" },
  { href: "/comment-policy", label: "Comment Policy" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* ===== TOP: Logo+Social (left) | প্রতিষ্ঠান + নীতিমালা (right) ===== */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16 pb-10 border-b border-gray-800">
          {/* LEFT — Logo + tagline + social */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
            <Link
              href="/"
              className="inline-block w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Alokpath News Home"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 250" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="sunGlowFooter" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#FF7A00" />
                    <stop offset="100%" stopColor="#FFB800" />
                  </linearGradient>
                  <linearGradient id="pathGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0F172A" />
                    <stop offset="100%" stopColor="#1E293B" />
                  </linearGradient>
                  <linearGradient id="rayGradientFooter" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFB800" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FF7A00" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g transform="translate(40, 25)">
                  <path d="M 50 110 A 65 65 0 0 1 180 110 Z" fill="url(#sunGlowFooter)" />
                  <path d="M 30 112 Q 115 106 200 112" stroke="url(#rayGradientFooter)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M 35 185 C 70 185, 110 130, 150 115 C 115 125, 95 150, 75 185 Z" fill="#E2E8F0" opacity="0.3" />
                  <path d="M 50 190 C 85 185, 115 138, 175 116 C 145 125, 120 152, 95 190 Z" fill="url(#pathGradientFooter)" />
                  <path d="M 75 190 C 105 160, 130 130, 195 118 C 150 128, 135 155, 115 190 Z" fill="#FFFFFF" />
                  <circle cx="178" cy="116" r="3" fill="#FF7A00" />
                </g>
                <g transform="translate(260, 115)">
                  <text x="0" y="0" fontFamily="'Hind Siliguri', 'Kalpurush', 'Noto Sans Bengali', sans-serif" fontSize="58" fontWeight="800" fill="#FFFFFF" letterSpacing="1">
                    আলোক<tspan fill="#FF7A00">পথ</tspan>
                  </text>
                  <text x="5" y="32" fontFamily="'Montserrat', 'Arial', sans-serif" fontSize="16" fontWeight="700" fill="#94A3B8" letterSpacing="7">
                    ALOKPATH NEWS
                  </text>
                  <text x="6" y="58" fontFamily="'Hind Siliguri', sans-serif" fontSize="14" fontWeight="500" fill="#CBD5E1">
                    সত্য ও ন্যায়ের সন্ধানে অবিচল
                  </text>
                </g>
              </svg>
            </Link>

            <p className="text-red-500 font-medium text-sm sm:text-base mt-2">
              সত্যের সন্ধানে সব সময়
            </p>

            <div className="flex items-center gap-2.5 mt-5">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.label} page`}
                  className={`group relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${link.hoverColor}`}
                >
                  {link.icon}
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white text-black text-[11px] font-semibold px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT — প্রতিষ্ঠান + নীতিমালা (দুই কলাম) */}
          <div className="w-full lg:max-w-3xl flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-end gap-10 sm:gap-14 text-center sm:text-right">

            {/* প্রতিষ্ঠান */}
            <div className="flex flex-col items-center sm:items-end">
              <h2 className="font-bold text-lg sm:text-xl">প্রতিষ্ঠান</h2>
              <div className="flex justify-center sm:justify-end">
                <hr className="my-3 border-gray-700 w-[80px] sm:w-[120px]" />
              </div>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-gray-300 items-center sm:items-end">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-red-500 transition-colors duration-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* নীতিমালা */}
            <div className="flex flex-col items-center sm:items-end">
              <h2 className="font-bold text-lg sm:text-xl">নীতিমালা</h2>
              <div className="flex justify-center sm:justify-end">
                <hr className="my-3 border-gray-700 w-[80px] sm:w-[120px]" />
              </div>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-gray-300 items-center sm:items-end">
                {policyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-red-500 transition-colors duration-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ===== MIDDLE: ক্যাটাগরি + যোগাযোগ ===== */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-6 mt-10 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <h2 className="font-bold text-lg sm:text-xl">সাম্প্রতিক খবর</h2>
            <div className="flex justify-center lg:justify-start">
              <hr className="my-3 border-gray-700 w-[80px] lg:w-[120px]" />
            </div>
            <ul className="flex flex-col gap-2 text-sm sm:text-base text-gray-300 items-center lg:items-start">
              {newsLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-red-500 transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <h2 className="font-bold text-lg sm:text-xl">বিভাগসমূহ</h2>
            <div className="flex justify-center lg:justify-start">
              <hr className="my-3 border-gray-700 w-[80px] lg:w-[120px]" />
            </div>
            <ul className="flex flex-col gap-2 text-sm sm:text-base text-gray-300 items-center lg:items-start">
              {sectionLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-red-500 transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <h2 className="font-bold text-lg sm:text-xl">অন্য বিভাগ</h2>
            <div className="flex justify-center lg:justify-start">
              <hr className="my-3 border-gray-700 w-[80px] lg:w-[120px]" />
            </div>
            <ul className="flex flex-col gap-2 text-sm sm:text-base text-gray-300 items-center lg:items-start">
              {otherLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-red-500 transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <h2 className="font-bold text-lg sm:text-xl">যোগাযোগ</h2>
            <div className="flex justify-center lg:justify-start">
              <hr className="my-3 border-gray-700 w-[80px] lg:w-[120px]" />
            </div>
            <ul className="flex flex-col gap-2 text-sm sm:text-base text-gray-300 items-center lg:items-start">
              <li>
                <span className="font-bold text-white">প্রকাশক ও সম্পাদক:</span> আলোকপথ
              </li>
              <li>
                <span className="font-bold text-white">ই-মেইল:</span>{" "}
                <a href="mailto:alokpath@gmail.com" className="hover:text-red-500 transition-colors break-all">
                  alokpath@gmail.com
                </a>
              </li>
              <li>
                <span className="font-bold text-white">ফোন:</span>{" "}
                <a href="tel:+8801825445033" className="hover:text-red-500 transition-colors">
                  01825445033
                </a>
              </li>
              <li>
                <span className="font-bold text-white">ঠিকানা:</span> উখিয়া, কক্সবাজার, বাংলাদেশ
              </li>
            </ul>
          </div>
        </div>

        {/* ===== BOTTOM: Copyright ===== */}
        <div className="py-6 mt-10 border-t border-gray-800 text-gray-400 text-xs sm:text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Alokpath News. সর্বস্বত্ব সংরক্ষিত।</p>
            <p>
              Develop &amp; Maintenance by{" "}
              <Link
                href="https://softypy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-white transition-colors duration-300 font-semibold"
              >
                Ibrahim Sikder
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;