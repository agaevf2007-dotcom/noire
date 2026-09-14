"use client";

import { Container } from "@/components/layout/Container";
import { EditorialDish } from "@/components/menu/EditorialDish";
import { copy, t } from "@/lib/content";
import { relatedDishes } from "@/lib/menu-data";
import { useLocale } from "@/lib/locale";
import type { Dish } from "@/lib/types";

export function RelatedDishes({ dish }: { dish: Dish }) {
  const { locale } = useLocale();
  const related = relatedDishes(dish, 3);
  if (!related.length) return null;

  return (
    <section className="py-[var(--space-section)]">
      <Container>
        <p className="eyebrow">{t(copy.ui.related, locale)}</p>
        <div className="dish-grid mt-10">
          {related.map((item) => (
            <EditorialDish key={item.slug} dish={item} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
