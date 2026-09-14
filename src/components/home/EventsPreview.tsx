"use client";

import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function EventsPreview() {
  const { locale } = useLocale();
  return (
    <section className="py-[var(--space-section)]">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="eyebrow">07</p>
          <h2 className="display mt-4 text-[clamp(2.4rem,7vw,5.5rem)] text-ivory">
            {t(copy.pages.events.title, locale)}
          </h2>
          <p className="mt-6 max-w-md text-[1rem] leading-8 text-stone">
            {t(copy.pages.events.lead, locale)}
          </p>
        </div>
        <MagneticButton href="/events" variant="solid">
          {t(copy.pages.events.cta, locale)} →
        </MagneticButton>
      </Container>
    </section>
  );
}
