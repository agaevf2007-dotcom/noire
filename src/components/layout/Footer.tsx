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
      <Container className="py-[var(--space-section)]">
        <p className="display text-[clamp(4rem,16vw,14rem)] text-ivory" data-reveal>
          {brand.name}
        </p>
        <p className="mt-6 max-w-xl font-editorial text-[clamp(1.4rem,3vw,2.4rem)] uppercase leading-none tracking-[-0.03em] text-stone">
          {t(brand.slogan, locale)}
        </p>

        <div className="mt-20 grid gap-12 md:grid-cols-4">
          <ul className="space-y-3 text-[0.8rem] tracking-[0.18em] uppercase text-ivory">
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

          <div className="text-[0.95rem] leading-8 text-stone">
            <p>{t(venue.city, locale)}</p>
            <p>{t(venue.address, locale)}</p>
            <p>{venue.hours}</p>
            <p className="mt-4">
              <a href={`tel:${venue.phone.replace(/\s/g, "")}`}>{venue.phone}</a>
            </p>
          </div>

          <NewsletterForm />

          <div className="md:text-right">
            <p className="text-[0.8rem] tracking-[0.16em] uppercase text-stone">
              {copy.footer.legal}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
