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
          <div className="mt-2 flex items-baseline justify-between gap-4">
            <h3 className="font-editorial text-[1.25rem] leading-[1.15] tracking-[-0.03em] text-ivory uppercase md:text-[1.4rem]">
              {dish.name[locale]}
            </h3>
            <p className="dish-card-price-inline">{dish.price}</p>
          </div>
          <p className="mt-2 line-clamp-2 type-body text-[0.95rem]">
            {dish.summary[locale]}
          </p>
        </div>
      </TransitionLink>
    </article>
  );
}
