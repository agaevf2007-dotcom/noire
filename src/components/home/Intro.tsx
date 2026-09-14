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
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p
              data-reveal
              className="display whitespace-pre-line text-[clamp(2rem,5vw,3.8rem)] text-ivory"
            >
              {lineOne[0]}
              <br />
              <span className="text-ivory/45">{lineOne[1]}</span>
            </p>
            <p
              data-reveal
              className="display mt-3 whitespace-pre-line text-[clamp(2rem,5vw,3.8rem)] text-ivory"
            >
              {lineTwo.join("\n")}
            </p>
          </div>
          <p data-reveal className="type-body max-w-md lg:mb-1">
            {t(copy.intro.body, locale)}
          </p>
        </div>
      </Container>
    </section>
  );
}
