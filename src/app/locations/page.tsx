"use client";

import { Container } from "@/components/layout/Container";
import { LocationCard, LocationsMapBoard } from "@/components/locations/LocationCard";
import { copy, t, venues } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function LocationsPage() {
  const { locale } = useLocale();

  return (
    <>
      <div className="px-[var(--space-container)] pt-24 pb-8 md:pt-28">
        <p className="eyebrow">05</p>
        <h1 className="display mt-3 text-[clamp(2.1rem,5.5vw,3.6rem)] text-ivory">
          {t(copy.pages.locations.title, locale)}
        </h1>
        <p className="type-body mt-4 max-w-lg">
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
