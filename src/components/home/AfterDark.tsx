"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cocktails, copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";

export function AfterDark() {
  const { locale } = useLocale();
  const [active, setActive] = useState(0);
  const drink = cocktails[active];

  return (
    <section className="bg-noir-elevated py-[var(--space-section)]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              index={copy.bar.index}
              eyebrow={t(copy.bar.eyebrow, locale)}
              title={t(copy.bar.title, locale)}
              description={t(copy.bar.body, locale)}
            />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {cocktails.map((item, index) => {
                const isActive = active === index;
                return (
                  <li
                    key={item.name}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className={cn(
                      "flex cursor-pointer items-baseline justify-between gap-6 py-4",
                      isActive ? "opacity-100" : "opacity-70",
                    )}
                  >
                    <button type="button" className="text-left">
                      <p className="font-editorial text-[1.5rem] uppercase tracking-[-0.02em] text-ivory">
                        {item.name}
                      </p>
                      {isActive ? (
                        <p className="mt-2 max-w-sm text-[0.88rem] leading-6 text-stone">
                          {t(item.notes, locale)}
                        </p>
                      ) : null}
                    </button>
                    <p className="shrink-0 text-[0.8rem] tracking-[0.12em] text-stone">
                      {item.price}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="img-frame relative min-h-[240px] md:min-h-[340px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(drink.image)}
              alt={drink.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
