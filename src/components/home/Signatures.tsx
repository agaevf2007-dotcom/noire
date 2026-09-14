"use client";

import { Container } from "@/components/layout/Container";
import { EditorialDish } from "@/components/menu/EditorialDish";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy, t } from "@/lib/content";
import { featuredDishes } from "@/lib/menu-data";
import { useLocale } from "@/lib/locale";

export function Signatures() {
  const { locale } = useLocale();

  return (
    <section className="py-[var(--space-section)]">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index={copy.signatures.index}
            eyebrow={t(copy.signatures.eyebrow, locale)}
            title={t(copy.signatures.title, locale)}
          />
          <MagneticButton href="/menu">{t(copy.ui.exploreMenu, locale)} →</MagneticButton>
        </div>
        <div className="dish-grid mt-16">
          {featuredDishes.map((dish) => (
            <EditorialDish key={dish.slug} dish={dish} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
