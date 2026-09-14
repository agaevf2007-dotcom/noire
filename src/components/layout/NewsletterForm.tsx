"use client";

import { FormEvent, useState } from "react";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const { locale } = useLocale();
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t(copy.book.emailInvalid, locale));
      return;
    }
    setError("");
    setDone(true);
  }

  if (done) {
    return <p className="eyebrow text-ivory">{t(copy.newsletter.done, locale)}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="max-w-sm" noValidate>
      <p className="eyebrow mb-4">{t(copy.newsletter.title, locale)}</p>
      <label>
        <span className="sr-only">{t(copy.newsletter.placeholder, locale)}</span>
        <input
          name="email"
          type="email"
          placeholder={t(copy.newsletter.placeholder, locale)}
          className="min-h-11 w-full border-b border-line bg-transparent py-3 text-[0.95rem] text-ivory outline-none placeholder:text-stone/50 focus:border-ivory"
        />
      </label>
      {error ? (
        <p className="mt-2 text-[0.75rem] text-stone" role="alert">
          — {error}
        </p>
      ) : null}
      <Button type="submit" className="mt-5">
        {t(copy.form.subscribe, locale)}
      </Button>
    </form>
  );
}
