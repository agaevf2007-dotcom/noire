"use client";

import { BookingExperience } from "@/components/reserve/BookingExperience";
import { copy, t, venue } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function ReservePage() {
  const { locale } = useLocale();

  return (
    <div className="px-[var(--space-container)] pt-36 pb-28 md:pt-44">
      <p className="eyebrow">{venue.name}</p>
      <h1 className="display mt-4 whitespace-pre-line text-[clamp(3.2rem,10vw,8rem)] text-ivory">
        {t(copy.pages.reserve.title, locale)}
      </h1>
      <p className="mt-6 max-w-md text-[1rem] leading-8 text-stone">
        {t(copy.pages.reserve.lead, locale)}
      </p>
      <div className="mt-16 max-w-5xl">
        <BookingExperience />
      </div>
    </div>
  );
}
