"use client";

import { useEffect, useState } from "react";
import { copy, t } from "@/lib/content";
import { formatMonthTitle } from "@/lib/format-date";
import { isDateOpen, monthMatrix } from "@/lib/availability";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/types";

const WEEKDAYS = {
  en: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
};

type BookingCalendarProps = {
  locale: Locale;
  selected: string;
  onSelect: (iso: string) => void;
};

export function BookingCalendar({ locale, selected, onSelect }: BookingCalendarProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  if (!now) {
    return <p className="eyebrow text-stone">{t(copy.book.dateQ, locale)}</p>;
  }

  const months = [
    { year: now.getFullYear(), month: now.getMonth() },
    {
      year: now.getMonth() === 11 ? now.getFullYear() + 1 : now.getFullYear(),
      month: (now.getMonth() + 1) % 12,
    },
  ];
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {months.map((item) => {
        const cells = monthMatrix(item.year, item.month);
        return (
          <div key={`${item.year}-${item.month}`}>
            <p className="eyebrow text-ivory">{formatMonthTitle(item.year, item.month, locale)}</p>
            <div className="mt-6 grid grid-cols-7 gap-y-2 text-center text-[0.68rem] tracking-[0.16em] uppercase text-stone">
              {WEEKDAYS[locale].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-7 gap-1">
              {cells.map((iso, index) => {
                if (!iso) return <span key={`empty-${index}`} />;
                const open = isDateOpen(iso);
                const isSelected = selected === iso;
                return (
                  <button
                    key={iso}
                    type="button"
                    disabled={!open}
                    onClick={() => onSelect(iso)}
                    aria-pressed={isSelected}
                    aria-label={`${iso}${open ? "" : ` — ${t(copy.book.unavailable, locale)}`}`}
                    className={cn(
                      "flex h-11 min-h-11 items-center justify-center text-[0.9rem] transition-colors duration-300",
                      !open && "text-stone/35 line-through",
                      open && !isSelected && "text-ivory hover:bg-ivory/10",
                      isSelected && "bg-ivory text-noir",
                      iso === today && !isSelected && "border border-line",
                    )}
                  >
                    {Number(iso.slice(8))}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
