"use client";

import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function EventsPreview() {
  const { locale } = useLocale();
  return (
    <section className="border-y border-line py-12 md:py-14">
      <Container className="grid gap-10 md:grid-cols-2 md:items-end">
        <div>
          <p className="eyebrow">{t(copy.pages.events.title, locale)}</p>
          <p className="mt-4 max-w-md type-body">
            {t(copy.pages.events.lead, locale)}
          </p>
          <div className="mt-6">
            <MagneticButton href="/events">
              {t(copy.pages.events.cta, locale)} →
            </MagneticButton>
          </div>
        </div>
        <div>
          <p className="eyebrow">{t(copy.ui.reserve, locale)}</p>
          <p className="mt-4 max-w-md type-body">
            {t(copy.reserveCta.body, locale)}
          </p>
          <div className="mt-6">
            <MagneticButton href="/reserve" variant="solid">
              {t(copy.hero.cta, locale)} →
            </MagneticButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
