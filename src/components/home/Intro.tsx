"use client";

import { Container } from "@/components/layout/Container";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Intro() {
  const { locale } = useLocale();
  const lineOne = t(copy.intro.lineOne, locale).split("\n");
  const lineTwo = t(copy.intro.lineTwo, locale).split("\n");

  return (
    <section className="py-[var(--space-section)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p
              data-reveal
              className="display whitespace-pre-line text-[clamp(2.6rem,7vw,6rem)] text-ivory"
            >
              {lineOne[0]}
              <br />
              <span className="text-ivory/40">{lineOne[1]}</span>
            </p>
            <p
              data-reveal
              className="display mt-8 whitespace-pre-line text-[clamp(2.6rem,7vw,6rem)] text-ivory"
            >
              {lineTwo.join("\n")}
            </p>
          </div>
          <p data-reveal className="max-w-md text-[1rem] leading-8 text-stone lg:mb-3">
            {t(copy.intro.body, locale)}
          </p>
        </div>
      </Container>
    </section>
  );
}
