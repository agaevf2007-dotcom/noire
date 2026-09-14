"use client";

import { FormEvent, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { copy, t, venue } from "@/lib/content";
import { site } from "@/lib/site";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/cn";

export default function ContactsPage() {
  const { locale } = useLocale();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Record<string, string> = {};
    if (!name) next.name = t(copy.book.required, locale);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t(copy.book.emailInvalid, locale);
    if (phone.replace(/\D/g, "").length < 10) next.phone = t(copy.book.phoneInvalid, locale);
    if (!message) next.message = t(copy.book.required, locale);
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
  }

  const field =
    "mt-2 min-h-11 w-full border-b bg-transparent py-3 text-[1rem] text-ivory outline-none focus:border-ivory";

  return (
    <div className="px-[var(--space-container)] pt-24 pb-16 md:pt-28">
      <p className="eyebrow">NOIRÉ</p>
      <h1 className="display mt-3 text-[clamp(2.2rem,6vw,3.8rem)] text-ivory">
        {t(venue.city, locale)}
      </h1>
      <p className="type-body mt-4 max-w-md">
        {t(venue.address, locale)}
        <br />
        {venue.hours}
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4 type-body">
          <p>
            <a href={`tel:${venue.phone.replace(/\s/g, "")}`}>{venue.phone}</a>
          </p>
          <p>
            <a href={`mailto:${venue.email}`}>{venue.email}</a>
          </p>
          <p>
            <a href={site.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </p>
          <p>
            <a href={site.social.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </p>
          <MagneticButton href="/reserve" variant="solid">
            {t(copy.hero.cta, locale)} →
          </MagneticButton>
        </div>

        {sent ? (
          <p className="font-editorial text-[clamp(2rem,5vw,3.6rem)] uppercase text-ivory">
            {t(copy.pages.contacts.received, locale)}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="grid max-w-xl gap-8" noValidate>
            <label>
              <span className="eyebrow">{t(copy.form.name, locale)}</span>
              <input name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} className={cn(field, errors.name ? "border-wine" : "border-line")} />
              {errors.name ? <span className="mt-2 block text-[0.75rem] text-stone" role="alert">— {errors.name}</span> : null}
            </label>
            <label>
              <span className="eyebrow">{t(copy.form.email, locale)}</span>
              <input name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} className={cn(field, errors.email ? "border-wine" : "border-line")} />
              {errors.email ? <span className="mt-2 block text-[0.75rem] text-stone" role="alert">— {errors.email}</span> : null}
            </label>
            <label>
              <span className="eyebrow">{t(copy.form.phone, locale)}</span>
              <input name="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} className={cn(field, errors.phone ? "border-wine" : "border-line")} />
              {errors.phone ? <span className="mt-2 block text-[0.75rem] text-stone" role="alert">— {errors.phone}</span> : null}
            </label>
            <label>
              <span className="eyebrow">{t(copy.form.message, locale)}</span>
              <textarea name="message" rows={4} aria-invalid={Boolean(errors.message)} className={cn(field, errors.message ? "border-wine" : "border-line")} />
              {errors.message ? <span className="mt-2 block text-[0.75rem] text-stone" role="alert">— {errors.message}</span> : null}
            </label>
            <Button type="submit" variant="solid" className="min-h-12 w-full justify-center sm:w-auto">
              {t(copy.form.send, locale)}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
