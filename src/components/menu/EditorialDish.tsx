"use client";

import { TransitionLink } from "@/components/motion/TransitionLink";
import { copy, t } from "@/lib/content";
import { getCategoryLabel } from "@/lib/menu-data";
import { asset } from "@/lib/asset";
import type { Dish } from "@/lib/types";

type EditorialDishProps = {
  dish: Dish;
  locale: "en" | "ru";
};

export function EditorialDish({ dish, locale }: EditorialDishProps) {
  return (
    <article className="dish-card">
      <TransitionLink href={`/menu/${dish.slug}`} className="flex h-full flex-col">
        <div className="dish-card-photo img-frame relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(dish.image)}
            alt={dish.alt[locale]}
            loading="lazy"
            decoding="async"
            width={800}
            height={800}
          />
          {dish.chefChoice ? (
            <p className="dish-card-badge">{t(copy.ui.chefsChoice, locale)}</p>
          ) : null}
        </div>
        <div className="dish-card-body">
          <p className="eyebrow">{getCategoryLabel(dish.category, locale)}</p>
          <div className="mt-3 flex items-start justify-between gap-4">
            <h3 className="font-editorial text-[1.35rem] leading-[1.12] tracking-[-0.03em] text-ivory uppercase md:text-[1.5rem]">
              {dish.name[locale]}
            </h3>
            <p className="dish-card-price-inline">{dish.price}</p>
          </div>
          <p className="mt-3 line-clamp-2 text-[0.86rem] leading-6 text-stone">
            {dish.summary[locale]}
          </p>
          <p className="eyebrow mt-5 text-ivory/55">{t(copy.ui.composition, locale)}</p>
          <ul className="dish-card-composition">
            {dish.ingredients.map((item) => (
              <li key={item.id}>
                <span>{item.name[locale]}</span>
                <span>{item.grams}</span>
              </li>
            ))}
          </ul>
        </div>
      </TransitionLink>
    </article>
  );
}
