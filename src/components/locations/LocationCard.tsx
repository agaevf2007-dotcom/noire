"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { copy, t } from "@/lib/content";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";
import type { Locale, LocationVenue } from "@/lib/types";

type LocationCardProps = {
  locale: Locale;
  venue: LocationVenue;
  selected?: boolean;
  onSelect?: () => void;
};

export function LocationCard({ locale, venue, selected, onSelect }: LocationCardProps) {
  return (
    <article
      className={cn(
        "grid gap-8 border-t border-line py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end",
        selected && "opacity-100",
        !selected && onSelect ? "opacity-55" : "",
      )}
    >
      <div>
        <button type="button" className="text-left" onClick={onSelect}>
          <p className="eyebrow">{t(copy.location.eyebrow, locale)}</p>
          <h3 className="display mt-3 text-[clamp(1.5rem,3.2vw,2.4rem)] text-ivory">
            {venue.name}
          </h3>
        </button>
        <dl className="mt-5 space-y-2 type-body">
          <dd>{t(venue.city, locale)}</dd>
          <dd>{t(venue.address, locale)}</dd>
          <dd>{venue.hours}</dd>
          <dd>
            <a href={`tel:${venue.phone.replace(/\s/g, "")}`}>{venue.phone}</a>
          </dd>
        </dl>
        <p className="type-body mt-4 max-w-md">
          {t(venue.description, locale)}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <MagneticButton href={`/locations/${venue.slug}`}>
            {t(copy.locationUi.view, locale)} →
          </MagneticButton>
          <MagneticButton href={venue.mapsUrl} external>
            {t(copy.location.directions, locale)} →
          </MagneticButton>
          <MagneticButton href="/reserve" variant="solid">
            {t(copy.ui.reserve, locale)}
          </MagneticButton>
        </div>
      </div>
      <TransitionLink
        href={`/locations/${venue.slug}`}
        className="img-frame img-hover relative min-h-[220px] md:min-h-[320px]"
        aria-label={venue.name}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(venue.image)}
          alt={venue.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </TransitionLink>
    </article>
  );
}

export function MoscowMap({
  venues,
  active,
  onSelect,
}: {
  venues: LocationVenue[];
  active: string;
  onSelect: (slug: string) => void;
}) {
  const current = venues.find((item) => item.slug === active) ?? venues[0];
  const x = ((current.lng - 37.3) / 0.7) * 100;
  const y = ((55.95 - current.lat) / 0.4) * 100;

  return (
    <div className="map-placeholder relative min-h-[360px] overflow-hidden md:min-h-[520px]">
      <p className="absolute top-6 left-6 z-10 eyebrow text-ivory">
        {current.city.en}
      </p>
      <div
        className="absolute h-px w-full bg-line"
        style={{ top: `${Math.min(88, Math.max(12, y))}%` }}
      />
      <div
        className="absolute h-full w-px bg-line"
        style={{ left: `${Math.min(88, Math.max(12, x))}%` }}
      />
      {venues.map((item) => {
        const mx = ((item.lng - 37.3) / 0.7) * 100;
        const my = ((55.95 - item.lat) / 0.4) * 100;
        const isActive = item.slug === active;
        return (
          <button
            key={item.slug}
            type="button"
            onClick={() => onSelect(item.slug)}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${Math.min(88, Math.max(12, mx))}%`,
              top: `${Math.min(88, Math.max(12, my))}%`,
            }}
            aria-pressed={isActive}
          >
            <span
              className={cn(
                "block h-2.5 w-2.5 rounded-full transition-transform duration-700",
                isActive ? "scale-150 bg-ivory" : "bg-stone",
              )}
            />
            <span className="mt-2 block text-[0.62rem] tracking-[0.22em] uppercase text-ivory">
              NOIRÉ
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function LocationsMapBoard({ venues, locale }: { venues: LocationVenue[]; locale: Locale }) {
  const [active, setActive] = useState(venues[0]?.slug ?? "");
  const current = venues.find((item) => item.slug === active) ?? venues[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
      <MoscowMap venues={venues} active={active} onSelect={setActive} />
      {current ? (
        <div className="flex flex-col justify-end">
          <div className="img-frame relative min-h-[180px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current.slug}
              src={asset(current.image)}
              alt={current.name}
              className="location-fade h-full w-full object-cover"
            />
          </div>
          <p className="eyebrow mt-6">{current.name}</p>
          <p className="mt-3 text-stone">{t(current.address, locale)}</p>
        </div>
      ) : null}
    </div>
  );
}
