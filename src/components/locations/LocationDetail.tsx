"use client";

import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MoscowMap } from "@/components/locations/LocationCard";
import { copy, t, venues } from "@/lib/content";
import { asset } from "@/lib/asset";
import { useLocale } from "@/lib/locale";
import type { LocationVenue } from "@/lib/types";

export function LocationDetail({ venue }: { venue: LocationVenue }) {
  const { locale } = useLocale();

  return (
    <>
      <section className="relative min-h-[70svh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(venue.image)}
          alt={venue.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.2),rgba(10,10,10,0.82))]" />
        <div className="relative z-10 flex min-h-[70svh] flex-col justify-end px-[var(--space-container)] pb-16 pt-36">
          <p className="eyebrow">{t(venue.city, locale)}</p>
          <h1 className="display mt-4 text-[clamp(2.8rem,8vw,6.5rem)] text-ivory">
            {venue.name}
          </h1>
        </div>
      </section>

      <Container className="grid gap-16 py-[var(--space-section)] lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="max-w-xl text-[1.05rem] leading-9 text-stone">
            {t(venue.description, locale)}
          </p>
          <dl className="mt-12 space-y-3 text-[1rem] leading-8 text-stone">
            <dd>{t(venue.address, locale)}</dd>
            <dd>{venue.hours}</dd>
            <dd>
              <a href={`tel:${venue.phone.replace(/\s/g, "")}`}>{venue.phone}</a>
            </dd>
            <dd>
              <a href={`mailto:${venue.email}`}>{venue.email}</a>
            </dd>
          </dl>
          <div className="mt-10 flex flex-wrap gap-6">
            <MagneticButton href="/reserve" variant="solid">
              {t(copy.hero.cta, locale)} →
            </MagneticButton>
            <MagneticButton href={venue.mapsUrl} external>
              {t(copy.location.directions, locale)} →
            </MagneticButton>
          </div>
        </div>
        <MoscowMap venues={venues} active={venue.slug} onSelect={() => undefined} />
      </Container>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-[var(--space-container)] pb-[var(--space-section)]">
        {venue.gallery.map((src) => (
          <div key={src} className="img-frame relative h-[42vh] w-[78vw] shrink-0 md:w-[32vw]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(src)} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}
