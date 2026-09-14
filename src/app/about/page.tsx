"use client";

import { Atmosphere } from "@/components/home/Atmosphere";
import { Chef } from "@/components/home/Chef";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function AboutPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageIntro
        eyebrow="02"
        title={t(copy.pages.about.title, locale)}
        lead={t(copy.pages.about.lead, locale)}
      />
      <Container className="pb-10">
        <p className="type-body max-w-2xl">
          {t(copy.intro.body, locale)}
        </p>
      </Container>
      <Chef />
      <Atmosphere />
      <section className="pb-[var(--space-section)]">
        <Container className="text-center">
          <MagneticButton href="/reserve" variant="solid">
            {t(copy.hero.cta, locale)} →
          </MagneticButton>
        </Container>
      </section>
    </>
  );
}
