/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { topNavLinks } from "./Menu";

export default function TopBar() {
  return (
    <div className="border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-[85px]">
        <a href="/" className="flex items-center shrink-0">
          <Image
            src="/asset/logo/dailyTimes24.png"
            alt="Daily Times 24"
            width={140}
            height={47}
            className="object-contain"
          />
        </a>

        <nav className="hidden font-semibold md:flex items-center gap-5">
          {topNavLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`flex items-center gap-x-4 whitespace-nowrap transition-colors hover:text-red-600 text-[16px] ${
                link.highlight ? "text-red-600 font-semibold" : "text-gray-700"
              }`}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="ml-4 text-gray-700 hover:text-red-600 transition-colors"
          aria-label="Search"
        >
          <Search size={20} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
