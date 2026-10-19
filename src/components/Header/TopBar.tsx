/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useState } from "react";
import { Search, Menu as MenuIcon, X } from "lucide-react";
import { topNavLinks } from "./Menu";
export default function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8 h-[56px] sm:h-[68px] lg:h-[85px]">
        {/* Logo */}
        <a
          href="/"
          className="flex shrink-0 items-center w-[150px] sm:w-[210px] lg:w-[280px] xl:w-[320px]"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 250"
            className="h-auto w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="sunGlow" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FF7A00" />
                <stop offset="100%" stopColor="#FFB800" />
              </linearGradient>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
              <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFB800" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF7A00" stopOpacity="0" />
              </linearGradient>
            </defs>

            <g transform="translate(40, 25)">
              <path d="M 50 110 A 65 65 0 0 1 180 110 Z" fill="url(#sunGlow)" />
              <path
                d="M 30 112 Q 115 106 200 112"
                stroke="url(#rayGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 35 185 C 70 185, 110 130, 150 115 C 115 125, 95 150, 75 185 Z"
                fill="#E2E8F0"
                opacity="0.3"
              />
              <path
                d="M 50 190 C 85 185, 115 138, 175 116 C 145 125, 120 152, 95 190 Z"
                fill="url(#pathGradient)"
              />
              <path
                d="M 75 190 C 105 160, 130 130, 195 118 C 150 128, 135 155, 115 190 Z"
                fill="#0A0F1D"
              />
              <circle cx="178" cy="116" r="3" fill="#FF7A00" />
            </g>

            <g transform="translate(260, 115)">
              <text
                x="0"
                y="0"
                fontFamily="'Hind Siliguri', 'Kalpurush', 'Noto Sans Bengali', sans-serif"
                fontSize="58"
                fontWeight="800"
                fill="#0F172A"
                letterSpacing="1"
              >
                আলোক<tspan fill="#FF7A00">পথ</tspan>
              </text>
              <text
                x="5"
                y="32"
                fontFamily="'Montserrat', 'Arial', sans-serif"
                fontSize="16"
                fontWeight="700"
                fill="#64748B"
                letterSpacing="7"
              >
                ALOKPATH NEWS
              </text>
              <text
                x="6"
                y="58"
                fontFamily="'Hind Siliguri', sans-serif"
                fontSize="14"
                fontWeight="500"
                fill="#94A3B8"
              >
                সত্য ও ন্যায়ের সন্ধানে অবিচল
              </text>
            </g>
          </svg>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex font-semibold items-center gap-3 xl:gap-5">
          {topNavLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`flex items-center gap-x-1.5 xl:gap-x-2 whitespace-nowrap text-[14px] xl:text-[16px] transition-colors hover:text-red-600 ${link.highlight ? "text-red-600 font-semibold" : "text-gray-700"
                }`}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            className="rounded-full p-1.5 sm:p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-red-600"
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={2} />
          </button>

          {/* Mobile / tablet menu toggle */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="lg:hidden rounded-full p-1.5 sm:p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-red-600"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
            ) : (
              <MenuIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / tablet dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <nav className="flex max-h-[calc(100vh-56px)] flex-col overflow-y-auto px-4 sm:px-6 py-2 gap-1">
            {topNavLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-x-3 rounded-lg px-3 py-3 text-[15px] font-medium transition-colors ${link.highlight
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  }`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}