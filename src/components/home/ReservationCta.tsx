"use client";

import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitLines } from "@/components/motion/SplitLines";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function ReservationCta() {
  const { locale } = useLocale();

  return (
    <section className="relative py-[var(--space-section)]">
      <Container className="relative text-center">
        <SplitLines
          text={t(copy.reserveCta.title, locale)}
          className="mx-auto max-w-4xl text-[clamp(3rem,10vw,8rem)] text-ivory"
        />
        <p data-reveal className="mx-auto mt-8 max-w-md text-[1rem] leading-8 text-stone">
          {t(copy.reserveCta.body, locale)}
        </p>
        <div className="mt-12 flex justify-center">
          <MagneticButton href="/reserve" variant="solid">
            {t(copy.hero.cta, locale)} →
          </MagneticButton>
        </div>
      </Container>
    </section>
  );
}
