"use client";

import { Container } from "@/components/layout/Container";
import { DishGallery } from "@/components/menu/DishGallery";
import { IngredientExperience } from "@/components/menu/IngredientExperience";
import { RelatedDishes } from "@/components/menu/RelatedDishes";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SafeImage } from "@/components/ui/SafeImage";
import { copy, t } from "@/lib/content";
import { getCategoryLabel } from "@/lib/menu-data";
import { useLocale } from "@/lib/locale";
import { splitTitle } from "@/lib/split-title";
import type { Dish } from "@/lib/types";

export function DishDetail({ dish }: { dish: Dish }) {
  const { locale } = useLocale();
  const title = splitTitle(dish.name[locale]);
  const pairingVisible = dish.pairing.price.includes("₽");

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage
            src={dish.image}
            alt={dish.alt[locale]}
            className="h-full w-full object-cover"
            width={1800}
            height={2200}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.28)_0%,rgba(10,10,10,0.18)_40%,rgba(10,10,10,0.86)_100%)]" />
        </div>

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-[var(--space-container)] pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="flex items-start justify-between gap-6">
            <MagneticButton href="/menu" arrow="left">
              {t(copy.ui.backMenu, locale)}
            </MagneticButton>
            <p className="eyebrow hidden text-ivory/80 md:block [writing-mode:vertical-rl]">
              {getCategoryLabel(dish.category, locale)}
            </p>
          </div>

          <div className="max-w-4xl">
            <p className="eyebrow mb-4 md:hidden">{getCategoryLabel(dish.category, locale)}</p>
            <h1 className="display text-[clamp(2.6rem,9vw,7.2rem)] text-ivory">
              {title.lead}
              {title.rest ? (
                <>
                  <br />
                  {title.rest}
                </>
              ) : null}
            </h1>
            <p className="mt-6 max-w-md text-[1rem] leading-8 text-stone">
              {dish.summary[locale]}
            </p>
            <p className="mt-5 text-[0.95rem] tracking-[0.14em] text-ivory">{dish.price}</p>
          </div>
        </div>
      </section>

      <Container className="grid gap-16 py-[var(--space-section)] lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p data-reveal className="max-w-xl text-[1.05rem] leading-9 text-stone">
            {dish.description[locale]}
          </p>
          {dish.chefChoice ? (
            <p className="eyebrow mt-8 text-ivory/70">{t(copy.ui.chefsChoice, locale)}</p>
          ) : null}
        </div>
        <div className="grid gap-12 border-t border-line pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          <div>
            <p className="eyebrow">{t(copy.ui.composition, locale)}</p>
            <ul className="mt-5 space-y-3">
              {dish.ingredients.map((item) => (
                <li
                  key={item.id}
                  className="flex items-baseline justify-between gap-6 font-editorial text-[1.35rem] text-ivory"
                >
                  <span>{item.name[locale]}</span>
                  <span className="font-sans text-[0.78rem] tracking-[0.12em] text-stone">
                    {item.grams}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {dish.allergens.length > 0 ? (
            <div>
              <p className="eyebrow">{t(copy.ui.allergens, locale)}</p>
              <ul className="mt-5 space-y-2 text-[0.95rem] leading-7 text-stone">
                {dish.allergens.map((item) => (
                  <li key={item.en}>{item[locale]}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {pairingVisible ? (
            <div>
              <p className="eyebrow">{t(copy.ui.pairing, locale)}</p>
              <p className="font-editorial mt-5 text-[1.5rem] text-ivory">
                {dish.pairing.name[locale]}
              </p>
              <p className="mt-2 text-[0.82rem] tracking-[0.12em] text-stone">
                {dish.pairing.price}
              </p>
            </div>
          ) : null}
        </div>
      </Container>

      <IngredientExperience dish={dish} />
      <DishGallery dish={dish} />

      <section className="px-[var(--space-container)] py-[var(--space-section)]">
        <p className="eyebrow">{t(copy.ui.chefNote, locale)}</p>
        <blockquote className="mt-10 max-w-3xl">
          <p className="font-editorial text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.15] text-ivory">
            “{dish.chefNote[locale]}”
          </p>
          <footer className="eyebrow mt-8 text-stone">— Alexander Morozov</footer>
        </blockquote>
      </section>

      <RelatedDishes dish={dish} />

      <section className="border-t border-line py-[var(--space-section)]">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="display max-w-xl whitespace-pre-line text-[clamp(2.4rem,6vw,4.8rem)] text-ivory">
            {t(copy.reserveCta.title, locale)}
          </h2>
          <MagneticButton href="/reserve" variant="solid">
            {t(copy.hero.cta, locale)} →
          </MagneticButton>
        </Container>
      </section>
    </>
  );
}
