"use client";

import { Container } from "@/components/layout/Container";
import { LocationCard } from "@/components/locations/LocationCard";
import { venue } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function LocationPreview() {
  const { locale } = useLocale();

  return (
    <section className="py-[var(--space-section)]">
      <Container>
        <LocationCard locale={locale} venue={venue} />
      </Container>
    </section>
  );
}
