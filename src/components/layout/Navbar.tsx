"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { useMotion } from "@/components/motion/MotionProvider";
import { brand, copy, navItems, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/cn";

export function Navbar() {
  const { locale, setLocale } = useLocale();
  const { introComplete, playIntro } = useMotion();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[padding,background-color] duration-200",
          scrolled || open ? "bg-noir py-3" : "bg-transparent py-5",
        )}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-[var(--space-container)]">
          <TransitionLink
            href="/"
            className={cn(
              "display justify-self-start tracking-[0.14em] text-ivory transition-all duration-300",
              scrolled ? "text-[1.2rem]" : "text-[1.55rem]",
              playIntro && !introComplete ? "opacity-0" : "opacity-100",
            )}
            onClick={() => setOpen(false)}
          >
            {brand.name}
          </TransitionLink>

          <nav
            className="hidden items-center gap-5 justify-self-center lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "nav-link text-[0.68rem] tracking-[0.26em] uppercase",
                    active ? "text-ivory" : "text-ivory/70 hover:text-ivory",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {t(item.label, locale)}
                </TransitionLink>
              );
            })}
          </nav>

          <div className="hidden items-center justify-self-end gap-6 lg:flex">
            <div
              className="flex items-center gap-2 text-[0.68rem] tracking-[0.22em] uppercase text-stone"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                className={cn(locale === "ru" ? "text-ivory" : "hover:text-ivory")}
                onClick={() => setLocale("ru")}
                aria-pressed={locale === "ru"}
              >
                RU
              </button>
              <span aria-hidden="true">/</span>
              <button
                type="button"
                className={cn(locale === "en" ? "text-ivory" : "hover:text-ivory")}
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>
            <MagneticButton href="/reserve">{t(copy.ui.reserve, locale)}</MagneticButton>
          </div>

          <div className="col-start-3 flex items-center justify-self-end gap-5 lg:hidden">
            <button
              type="button"
              className="text-[0.68rem] tracking-[0.24em] uppercase text-ivory"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? t(copy.ui.close, locale) : t(copy.ui.menu, locale)}
            </button>
            <TransitionLink
              href="/reserve"
              className="text-[0.68rem] tracking-[0.24em] uppercase text-ivory"
              onClick={() => setOpen(false)}
            >
              {t(copy.ui.reserve, locale)}
            </TransitionLink>
          </div>
        </div>
      </header>
      {mounted ? <MobileMenu open={open} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
