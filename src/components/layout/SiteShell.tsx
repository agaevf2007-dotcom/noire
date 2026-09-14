"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CookieNotice } from "@/components/layout/CookieNotice";
import { StickyReserve } from "@/components/layout/StickyReserve";
import { Loader } from "@/components/motion/Loader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { ScrollReveals } from "@/components/motion/ScrollReveals";
import { copy, t } from "@/lib/content";
import { LocaleProvider, useLocale } from "@/lib/locale";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

function ShellInner({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();
  const pathname = usePathname();

  return (
    <>
      <a href="#content" className="skip-link" suppressHydrationWarning>
        {t(copy.ui.skip, locale)}
      </a>
      <Loader />
      <ScrollProgress />
      <ScrollReveals />
      <Navbar />
      <main
        id="content"
        className={cn(pathname === "/reserve" ? "" : "pb-20 md:pb-0")}
      >
        {children}
      </main>
      <Footer />
      <StickyReserve />
      <CookieNotice />
    </>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <MotionProvider>
        <ShellInner>{children}</ShellInner>
      </MotionProvider>
    </LocaleProvider>
  );
}
