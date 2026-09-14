"use client";

import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";
import type { Dish } from "@/lib/types";

export function IngredientExperience({ dish }: { dish: Dish }) {
  const { locale } = useLocale();

  return (
    <section className="bg-noir-elevated py-[var(--space-section)]">
      <div className="px-[var(--space-container)]">
        <p className="eyebrow">{t(copy.ui.composition, locale)}</p>
        <h2 className="display mt-4 max-w-2xl text-[clamp(2rem,5vw,3.8rem)] text-ivory">
          {t(copy.ui.theIngredients, locale)}
        </h2>
        <ul className="mt-12 max-w-2xl divide-y divide-line border-y border-line">
          {dish.ingredients.map((item, index) => (
            <li
              key={item.id}
              className="flex items-baseline justify-between gap-6 py-5"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-editorial text-[1.15rem] text-ivory/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-editorial text-[1.45rem] text-ivory">
                  {item.name[locale]}
                </span>
              </div>
              <span className="shrink-0 text-[0.82rem] tracking-[0.12em] text-stone">
                {item.grams}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
