"use client";

import { Container } from "@/components/layout/Container";
import { LocationCard, LocationsMapBoard } from "@/components/locations/LocationCard";
import { copy, t, venues } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function LocationsPage() {
  const { locale } = useLocale();

  return (
    <>
      <div className="px-[var(--space-container)] pt-36 pb-16 md:pt-44">
        <p className="eyebrow">05</p>
        <h1 className="display mt-4 text-[clamp(3rem,10vw,7.5rem)] text-ivory">
          {t(copy.pages.locations.title, locale)}
        </h1>
        <p className="mt-8 max-w-lg text-[1rem] leading-8 text-stone">
          {t(copy.pages.locations.lead, locale)}
        </p>
      </div>
      <Container className="pb-16">
        <LocationsMapBoard venues={venues} locale={locale} />
      </Container>
      <Container className="pb-[var(--space-section)]">
        {venues.map((item) => (
          <LocationCard key={item.slug} locale={locale} venue={item} />
        ))}
      </Container>
    </>
  );
}
