"use client";

import { Container } from "@/components/layout/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Atmosphere() {
  const { locale } = useLocale();

  return (
    <section className="py-[var(--space-section)]">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              index={copy.atmosphere.index}
              eyebrow={t(copy.atmosphere.eyebrow, locale)}
              title={t(copy.atmosphere.title, locale)}
              description={t(copy.atmosphere.body, locale)}
            />
          </div>
          <div className="lg:col-span-7">
            <ImageReveal
              src="/images/room-1.jpg"
              alt={
                locale === "ru"
                  ? "Зал ресторана NOIRÉ вечером"
                  : "NOIRÉ dining room in the evening"
              }
              className="min-h-[240px] md:min-h-[340px]"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-2">
            <ImageReveal
              src="/images/room-2.jpg"
              alt={
                locale === "ru"
                  ? "Интерьер NOIRÉ, детали зала"
                  : "Interior details of the NOIRÉ dining room"
              }
              className="min-h-[200px] md:min-h-[280px]"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <ImageReveal
              src="/images/location.jpg"
              alt={
                locale === "ru"
                  ? "Городской вечер вокруг NOIRÉ"
                  : "Evening city around NOIRÉ"
              }
              className="min-h-[200px] md:min-h-[280px]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
