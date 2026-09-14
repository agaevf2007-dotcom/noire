"use client";

import { TransitionLink } from "@/components/motion/TransitionLink";
import { brand, copy, navItems, t, venue } from "@/lib/content";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { locale, setLocale } = useLocale();
  const items = [
    ...navItems,
    { href: "/contacts", label: copy.footer.contacts },
    { href: "/reserve", label: copy.ui.reserve },
  ];

  return (
    <div
      id="mobile-menu"
      inert={!open}
      className={cn(
        "fixed inset-0 z-40 bg-noir px-[var(--space-container)] pt-28 transition-opacity duration-200 lg:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        !open && "invisible",
      )}
      aria-hidden={!open}
    >
      <nav className="flex h-full flex-col justify-between pb-10" aria-label="Mobile">
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li
              key={item.href}
              className={open ? "mobile-link" : "opacity-0"}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <TransitionLink
                href={item.href}
                className="display type-page block text-ivory"
                tabIndex={open ? 0 : -1}
                onClick={onClose}
              >
                {t(item.label, locale)}
              </TransitionLink>
            </li>
          ))}
        </ul>

        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-editorial text-xl tracking-[0.16em] text-ivory">
              {brand.name}
            </p>
            <p className="mt-3 text-[0.8rem] text-stone">{venue.hours}</p>
          </div>
          <div className="flex gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-stone">
            <button
              type="button"
              className={locale === "ru" ? "text-ivory" : undefined}
              onClick={() => setLocale("ru")}
              tabIndex={open ? 0 : -1}
            >
              RU
            </button>
            <span>/</span>
            <button
              type="button"
              className={locale === "en" ? "text-ivory" : undefined}
              onClick={() => setLocale("en")}
              tabIndex={open ? 0 : -1}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
