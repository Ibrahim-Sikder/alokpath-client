import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

import Providers from "@/lib/Provider";
import ThemeAndServiceWorker from "@/provider/ThemeServiceWorker";
import VisitorTracker from "@/provider/VisitorTracker";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ডেইলি টাইমস ২৪ - সর্বশেষ বাংলা খবর",
  description:
    "ডেইলি টাইমস ২৪ থেকে সর্বশেষ বাংলা খবর, আন্তর্জাতিক সংবাদ, খেলাধুলা, বিনোদন, এবং রাজনৈতিক আপডেট পান।",
  keywords:
    "বাংলা নিউজ, চাকরি, স্বাস্থ্য, ভ্রমণ ও পর্যটন, ক্যাম্পাস, নারী, তথ্য ও প্রযুক্তি, জাতীয়, আন্তর্জাতিক, অর্থনীতি, বিনোদন, খেলা, ডেইলি টাইমস ২৪, ডেইলি টাইমস, dailytimes, dailytimes24",
  authors: [{ name: "Dailytimes 24" }],
  creator: "Dailytimes 24",
  publisher: "Dailytimes 24",
  metadataBase: new URL("https://dailytimes24.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://dailytimes24.com/",
    title: "ডেইলি টাইমস ২৪ - সর্বশেষ বাংলা খবর",
    description:
      "ডেইলি টাইমস ২৪ থেকে সর্বশেষ বাংলা খবর, আন্তর্জাতিক সংবাদ, খেলাধুলা, বিনোদন, এবং রাজনৈতিক আপডেট পান।",
    siteName: "ডেইলি টাইমস ২৪",
    images: [
      {
        url: "https://dailytimes24.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ডেইলি টাইমস ২৪",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ডেইলি টাইমস ২৪ - সর্বশেষ বাংলা খবর",
    description:
      "ডেইলি টাইমস ২৪ থেকে সর্বশেষ বাংলা খবর, আন্তর্জাতিক সংবাদ, খেলাধুলা, বিনোদন, এবং রাজনৈতিক আপডেট পান।",
    images: ["https://dailytimes24.com/twitter-image.jpg"],
    creator: "@dailytimes24",
    site: "@dailytimes24",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  // manifest: "/site.webmanifest",
  // verification: {
  //   google: "your-google-site-verification-code",
  // },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-800 dark:text-white">
        <Providers>
          <ThemeAndServiceWorker />
          <VisitorTracker />
          {children}
        </Providers>

        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              name: "ডেইলি টাইমস ২৪",
              alternateName: "Dailytimes 24",
              url: "https://dailytimes24.com/",
              logo: {
                "@type": "ImageObject",
                url: "https://dailytimes24.com/logo.png",
                width: 600,
                height: 60,
              },
              sameAs: [
                "https://facebook.com/dailytimes24",
                "https://twitter.com/dailytimes24",
                "https://instagram.com/dailytimes24",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+01957713249",
                contactType: "Customer Service",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://dailytimes24.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
