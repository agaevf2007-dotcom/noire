"use client";

import { BookingExperience } from "@/components/reserve/BookingExperience";
import { copy, t, venue } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function ReservePage() {
  const { locale } = useLocale();

  return (
    <div className="px-[var(--space-container)] pt-24 pb-16 md:pt-28">
      <p className="eyebrow">{venue.name}</p>
      <h1 className="display mt-3 whitespace-pre-line text-[clamp(2.1rem,5.5vw,3.6rem)] text-ivory">
        {t(copy.pages.reserve.title, locale)}
      </h1>
      <p className="type-body mt-4 max-w-md">
        {t(copy.pages.reserve.lead, locale)}
      </p>
      <div className="mt-10 max-w-5xl">
        <BookingExperience />
      </div>
    </div>
  );
}
