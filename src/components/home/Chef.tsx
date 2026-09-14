"use client";

import { Container } from "@/components/layout/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Chef() {
  const { locale } = useLocale();

  return (
    <section className="py-[var(--space-section)]">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden">
            <ImageReveal
              src="/images/chef.jpg"
              alt={
                locale === "ru"
                  ? "Шеф Александр Морозов"
                  : "Chef Alexander Morozov"
              }
              className="min-h-[260px] md:min-h-[380px]"
            />
          </div>
          <div>
            <SectionHeading
              index={copy.chef.index}
              eyebrow={t(copy.chef.eyebrow, locale)}
              title={t(copy.chef.title, locale)}
            />
            <p
              data-reveal
              className="mt-6 font-editorial text-[clamp(1.4rem,3vw,2.1rem)] uppercase tracking-[-0.03em] text-ivory"
            >
              {copy.chef.name}
            </p>
            <p data-reveal className="mt-3 type-body">
              {t(copy.chef.years, locale)}
            </p>
            <p data-reveal className="mt-2 eyebrow">
              {t(copy.chef.cities, locale)}
            </p>
            <p data-reveal className="type-body mt-5 max-w-lg">
              {t(copy.chef.body, locale)}
            </p>
            <div className="mt-6">
              <MagneticButton href="/reserve" variant="solid">
                {t(copy.hero.cta, locale)} →
              </MagneticButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
