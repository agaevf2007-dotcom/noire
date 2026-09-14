"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function StickyReserve() {
  const pathname = usePathname();
  const { locale } = useLocale();
  if (pathname === "/reserve") return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[45] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden">
      <TransitionLink
        href="/reserve"
        className="pointer-events-auto flex min-h-12 items-center justify-center bg-ivory text-[0.72rem] tracking-[0.24em] text-noir uppercase"
      >
        {t(copy.ui.reserve, locale)}
      </TransitionLink>
    </div>
  );
}
