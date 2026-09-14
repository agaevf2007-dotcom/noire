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
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden lg:sticky lg:top-28">
            <ImageReveal
              src="/images/chef.jpg"
              alt={
                locale === "ru"
                  ? "Шеф Александр Морозов"
                  : "Chef Alexander Morozov"
              }
              className="min-h-[420px] md:min-h-[640px]"
            />
          </div>
          <div className="lg:pt-10">
            <SectionHeading
              index={copy.chef.index}
              eyebrow={t(copy.chef.eyebrow, locale)}
              title={t(copy.chef.title, locale)}
            />
            <p
              data-reveal
              className="mt-12 font-editorial text-[clamp(1.8rem,4vw,3rem)] uppercase tracking-[-0.03em] text-ivory"
            >
              {copy.chef.name}
            </p>
            <p data-reveal className="mt-4 text-stone">
              {t(copy.chef.years, locale)}
            </p>
            <p data-reveal className="mt-2 eyebrow">
              {t(copy.chef.cities, locale)}
            </p>
            <p data-reveal className="mt-10 max-w-lg text-[1rem] leading-8 text-stone">
              {t(copy.chef.body, locale)}
            </p>
            <div className="mt-10">
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
