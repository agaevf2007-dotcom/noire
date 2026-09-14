"use client";

import { FormEvent, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SafeImage } from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
import { copy, t } from "@/lib/content";
import { site } from "@/lib/site";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/cn";

const GALLERY = [
  site.images.room1,
  site.images.room2,
  site.images.chef,
  site.images.kitchen,
  site.images.bar,
];

const TYPES = [
  { id: "private-dinner", key: "dinner" as const },
  { id: "corporate", key: "corporate" as const },
  { id: "celebration", key: "celebration" as const },
  { id: "chefs-table", key: "chef" as const },
  { id: "custom-menu", key: "menu" as const },
];

export default function EventsPage() {
  const { locale } = useLocale();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) next.name = t(copy.book.required, locale);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email") ?? ""))) {
      next.email = t(copy.book.emailInvalid, locale);
    }
    if (String(data.get("phone") ?? "").replace(/\D/g, "").length < 10) {
      next.phone = t(copy.book.phoneInvalid, locale);
    }
    if (!String(data.get("guests") ?? "").trim()) next.guests = t(copy.book.required, locale);
    if (!String(data.get("date") ?? "").trim()) next.date = t(copy.book.required, locale);
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
  }

  const field =
    "mt-2 min-h-11 w-full border-b bg-transparent py-3 text-[1rem] text-ivory outline-none focus:border-ivory";

  return (
    <>
      <div className="px-[var(--space-container)] pt-36 pb-16 md:pt-44">
        <p className="eyebrow">07</p>
        <h1 className="display mt-4 text-[clamp(3rem,10vw,7.5rem)] text-ivory">
          {t(copy.pages.events.title, locale)}
        </h1>
        <p className="mt-8 max-w-lg text-[1rem] leading-8 text-stone">
          {t(copy.pages.events.lead, locale)}
        </p>
      </div>

      <ul className="px-[var(--space-container)] grid gap-4 pb-16 md:grid-cols-2">
        {TYPES.map((item) => (
          <li
            key={item.id}
            className="border-t border-line py-6 font-editorial text-[clamp(1.6rem,4vw,2.6rem)] uppercase text-ivory"
          >
            {t(copy.eventsList[item.key], locale)}
          </li>
        ))}
      </ul>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-[var(--space-container)] pb-16">
        {GALLERY.map((src) => (
          <div key={src} className="img-frame relative h-[46vh] w-[80vw] shrink-0 md:w-[36vw]">
            <SafeImage
              src={src}
              alt={locale === "ru" ? "Зал NOIRÉ" : "The NOIRÉ dining room"}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div id="request" className="px-[var(--space-container)] pb-28">
        <h2 className="display text-[clamp(2rem,6vw,4rem)] text-ivory">
          {t(copy.pages.events.request, locale)}
        </h2>
        {sent ? (
          <p className="mt-10 font-editorial text-[clamp(1.8rem,4vw,3rem)] uppercase text-ivory">
            {t(copy.pages.events.sent, locale)}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-12 grid max-w-2xl gap-8" noValidate>
            <label>
              <span className="eyebrow">{t(copy.form.name, locale)}</span>
              <input name="name" className={cn(field, errors.name ? "border-wine" : "border-line")} />
              {errors.name ? <span className="mt-2 block text-[0.75rem] text-stone" role="alert">— {errors.name}</span> : null}
            </label>
            <label>
              <span className="eyebrow">
                {t(copy.form.company, locale)} — {t(copy.form.optional, locale)}
              </span>
              <input name="company" className={cn(field, "border-line")} />
            </label>
            <label>
              <span className="eyebrow">{t(copy.form.email, locale)}</span>
              <input name="email" type="email" className={cn(field, errors.email ? "border-wine" : "border-line")} />
              {errors.email ? <span className="mt-2 block text-[0.75rem] text-stone" role="alert">— {errors.email}</span> : null}
            </label>
            <label>
              <span className="eyebrow">{t(copy.form.phone, locale)}</span>
              <input name="phone" type="tel" className={cn(field, errors.phone ? "border-wine" : "border-line")} />
              {errors.phone ? <span className="mt-2 block text-[0.75rem] text-stone" role="alert">— {errors.phone}</span> : null}
            </label>
            <label>
              <span className="eyebrow">{t(copy.form.eventType, locale)}</span>
              <select name="type" className={cn(field, "border-line")}>
                {TYPES.map((item) => (
                  <option key={item.id} value={item.id} className="bg-noir">
                    {t(copy.eventsList[item.key], locale)}
                  </option>
                ))}
              </select>
            </label>
            <div className="grid gap-8 md:grid-cols-2">
              <label>
                <span className="eyebrow">{t(copy.form.guests, locale)}</span>
                <input name="guests" className={cn(field, errors.guests ? "border-wine" : "border-line")} />
                {errors.guests ? <span className="mt-2 block text-[0.75rem] text-stone" role="alert">— {errors.guests}</span> : null}
              </label>
              <label>
                <span className="eyebrow">{t(copy.form.date, locale)}</span>
                <input name="date" className={cn(field, errors.date ? "border-wine" : "border-line")} placeholder="YYYY-MM-DD" />
                {errors.date ? <span className="mt-2 block text-[0.75rem] text-stone" role="alert">— {errors.date}</span> : null}
              </label>
            </div>
            <label>
              <span className="eyebrow">{t(copy.form.message, locale)}</span>
              <textarea name="message" rows={4} className={cn(field, "border-line")} />
            </label>
            <Button type="submit" variant="solid" className="min-h-12 w-full justify-center sm:w-auto">
              {t(copy.pages.events.request, locale)}
            </Button>
          </form>
        )}
        <div className="mt-16">
          <MagneticButton href="/reserve">{t(copy.hero.cta, locale)} →</MagneticButton>
        </div>
      </div>
    </>
  );
}
