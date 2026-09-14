"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function NotFoundView() {
  const { locale } = useLocale();
  return (
    <div className="flex min-h-[70svh] flex-col justify-end px-[var(--space-container)] pt-32 pb-16">
      <p className="eyebrow">404</p>
      <h1 className="display type-hero mt-6 text-ivory">
        {t(copy.pages.notFound.title, locale)}
      </h1>
      <p className="type-body mt-6 max-w-md text-stone">
        {t(copy.pages.notFound.lead, locale)}
      </p>
      <div className="mt-10">
        <MagneticButton href="/">{t(copy.pages.notFound.back, locale)} →</MagneticButton>
      </div>
    </div>
  );
}
