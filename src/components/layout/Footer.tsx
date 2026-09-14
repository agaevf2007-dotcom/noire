"use client";

import { TransitionLink } from "@/components/motion/TransitionLink";
import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { brand, copy, t, venue } from "@/lib/content";
import { site } from "@/lib/site";
import { useLocale } from "@/lib/locale";

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="border-t border-line bg-noir">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <p className="display text-[clamp(2rem,5vw,3.2rem)] text-ivory">
            {brand.name}
          </p>
          <p className="type-body max-w-sm">
            {t(brand.slogan, locale)}
          </p>
        </div>

        <div className="mt-10 grid gap-10 border-t border-line pt-10 md:grid-cols-4">
          <ul className="space-y-2 text-[0.8rem] tracking-[0.16em] uppercase text-ivory">
            <li>
              <a href={site.social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.social.telegram} target="_blank" rel="noreferrer">
                Telegram
              </a>
            </li>
            <li>
              <TransitionLink href="/contacts" className="nav-link">
                {t(copy.footer.contacts, locale)}
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/reserve" className="nav-link">
                {t(copy.footer.reservations, locale)}
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/events" className="nav-link">
                {t(copy.pages.events.title, locale)}
              </TransitionLink>
            </li>
          </ul>

          <div className="type-body">
            <p>{t(venue.city, locale)}</p>
            <p>{t(venue.address, locale)}</p>
            <p>{venue.hours}</p>
            <p className="mt-3">
              <a href={`tel:${venue.phone.replace(/\s/g, "")}`}>{venue.phone}</a>
            </p>
          </div>

          <NewsletterForm />

          <div className="md:text-right">
            <p className="eyebrow">{copy.footer.legal}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
