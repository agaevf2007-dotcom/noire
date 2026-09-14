"use client";

import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function OfferStrip() {
  const { locale } = useLocale();
  return (
    <section className="border-y border-line py-16">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">{t(copy.offer.kicker, locale)}</p>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,4rem)] text-ivory">
            {t(copy.offer.title, locale)}
          </h2>
          <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-stone">
            {t(copy.offer.body, locale)}
          </p>
        </div>
        <MagneticButton href="/menu">{t(copy.ui.exploreMenu, locale)} →</MagneticButton>
      </Container>
    </section>
  );
}
