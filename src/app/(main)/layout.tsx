import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrolltoTop/ScrolltoTop";
import BreakingNews from "@/components/Share/BreakingNews/BreakingNews";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-full flex flex-col">
        <Header />

        <main className="flex-grow mb-[50px]" id="main-content">
          {children}
        </main>
        <div
          className="hidden lg:flex fixed bottom-0 left-0 right-0 z-50"
          aria-label="ব্রেকিং নিউজ"
          role="complementary"
        >
          <BreakingNews />
        </div>
        <footer className="relative z-30" role="contentinfo">
          <Footer />
        </footer>
        <ScrollToTop />
      </div>
    </>
  );
}
