"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { EditorialDish } from "@/components/menu/EditorialDish";
import { MenuSearch } from "@/components/menu/MenuSearch";
import { copy, t } from "@/lib/content";
import {
  autumnCollection,
  dishMatchesTags,
  menuCategories,
  menuFilters,
} from "@/lib/menu-data";
import { dishes } from "@/lib/menu-data";
import { useLocale } from "@/lib/locale";
import type { CategoryId, DishTag } from "@/lib/types";

export function MenuExperience() {
  const { locale } = useLocale();
  const [filters, setFilters] = useState<DishTag[]>([]);
  const [active, setActive] = useState<CategoryId>(menuCategories[0].id);

  const visible = dishes.filter((dish) => dishMatchesTags(dish, filters));
  const seasonal = autumnCollection.filter((dish) => dishMatchesTags(dish, filters));

  useEffect(() => {
    const nodes = menuCategories
      .map((category) => document.getElementById(`menu-${category.id}`))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visibleEntries[0]?.target.id.replace("menu-", "") as CategoryId | undefined;
        if (id) setActive(id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [filters]);

  const scrollTo = (id: CategoryId) => {
    const node = document.getElementById(`menu-${id}`);
    if (!node) return;
    const offset = 128;
    const top = node.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  };

  const toggleFilter = (id: DishTag) => {
    setFilters((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return (
    <>
      <header className="px-[var(--space-container)] pt-24 pb-7 md:pt-28 md:pb-8">
        <p className="eyebrow" data-reveal>
          NOIRÉ
        </p>
        <h1 className="display mt-3 text-[clamp(2.2rem,6vw,3.8rem)] text-ivory">MENU</h1>
        <p data-reveal className="type-body mt-4 max-w-md" suppressHydrationWarning>
          {t(copy.pages.menu.lead, locale)}
        </p>
        <p data-reveal className="eyebrow mt-5 text-ivory/80" suppressHydrationWarning>
          {t(copy.pages.menu.service, locale)}
        </p>
      </header>

      <div className="sticky top-[4.35rem] z-40 border-y border-line bg-noir">
        <Container className="flex items-center gap-8 py-4">
          <nav
            aria-label={t(copy.pages.menu.title, locale)}
            className="no-scrollbar -mx-[var(--space-container)] flex flex-1 snap-x gap-7 overflow-x-auto px-[var(--space-container)] md:mx-0 md:px-0"
          >
            {menuCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className="menu-cat snap-start whitespace-nowrap"
                data-active={active === category.id}
                onClick={() => scrollTo(category.id)}
              >
                {category.label[locale]}
              </button>
            ))}
          </nav>
          <div className="hidden shrink-0 sm:block">
            <MenuSearch />
          </div>
        </Container>
      </div>

      <Container className="pt-8 pb-4 sm:hidden">
        <MenuSearch />
      </Container>

      <Container className="pt-10 pb-6">
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {menuFilters.map((filter) => {
            const pressed = filters.includes(filter.id);
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={pressed}
                className="filter-chip"
                onClick={() => toggleFilter(filter.id)}
              >
                {filter.label[locale]}
              </button>
            );
          })}
        </div>
      </Container>

      {seasonal.length > 0 && filters.length === 0 ? (
        <section className="mt-8 bg-[#0e0e0e] py-16 md:py-20">
          <Container>
            <p className="eyebrow">{t(copy.ui.seasonal, locale)}</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,6vw,4.6rem)] text-ivory">
              {t(copy.ui.autumn, locale)}
            </h2>
            <div className="dish-grid mt-10">
              {seasonal.map((dish) => (
                <EditorialDish key={`seasonal-${dish.slug}`} dish={dish} locale={locale} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {menuCategories.map((category) => {
        const items = visible.filter((dish) => dish.category === category.id);
        if (!items.length) return null;
        return (
          <section
            key={category.id}
            id={`menu-${category.id}`}
            className="scroll-mt-32 py-14 md:py-20"
          >
            <Container>
              <h2 className="eyebrow">{category.label[locale]}</h2>
              <div className="dish-grid mt-8">
                {items.map((dish) => (
                  <EditorialDish key={dish.slug} dish={dish} locale={locale} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      {visible.length === 0 ? (
        <Container className="py-24">
          <p className="eyebrow">{t(copy.ui.noDishes, locale)}</p>
        </Container>
      ) : null}
    </>
  );
}
