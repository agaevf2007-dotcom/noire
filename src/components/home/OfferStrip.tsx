"use client";

import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function OfferStrip() {
  const { locale } = useLocale();
  return (
    <section className="border-y border-line py-10 md:py-12">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">{t(copy.offer.kicker, locale)}</p>
          <h2 className="display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] text-ivory">
            {t(copy.offer.title, locale)}
          </h2>
          <p className="type-body mt-3 max-w-md">
            {t(copy.offer.body, locale)}
          </p>
        </div>
        <MagneticButton href="/menu">{t(copy.ui.exploreMenu, locale)} →</MagneticButton>
      </Container>
    </section>
  );
}
