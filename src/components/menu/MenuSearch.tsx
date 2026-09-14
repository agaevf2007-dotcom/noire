"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { copy, t } from "@/lib/content";
import { searchDishes } from "@/lib/menu-data";
import { useLocale } from "@/lib/locale";

export function MenuSearch() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const results = useMemo(
    () => (open ? searchDishes(query, locale) : []),
    [open, query, locale],
  );

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => inputRef.current?.focus(), 80);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(id);
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="eyebrow text-ivory transition-opacity duration-500 hover:opacity-70"
        onClick={() => {
          setOpen(true);
          setQuery("");
        }}
      >
        {t(copy.ui.search, locale)}
      </button>

      {open ? (
        <div
          className="search-overlay fixed inset-0 z-[80] flex flex-col bg-[rgba(10,10,10,0.94)] px-[var(--space-container)] pt-24 pb-12 md:pt-32"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="mx-auto flex w-full max-w-[980px] items-end justify-between gap-6 border-b border-line pb-4">
            <label className="flex-1">
              <span id={titleId} className="sr-only">
                {t(copy.ui.searchPlaceholder, locale)}
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t(copy.ui.searchPlaceholder, locale)}
                autoComplete="off"
                enterKeyHint="search"
                className="w-full bg-transparent font-editorial text-[clamp(1.6rem,5vw,3.4rem)] text-ivory outline-none placeholder:text-stone"
              />
            </label>
            <button
              type="button"
              className="eyebrow shrink-0 pb-2 text-stone"
              onClick={() => setOpen(false)}
            >
              {t(copy.ui.close, locale)}
            </button>
          </div>

          <div className="mx-auto mt-10 w-full max-w-[980px] overflow-y-auto">
            {query.trim() && results.length === 0 ? (
              <div>
                <p className="eyebrow">{t(copy.ui.noDishes, locale)}</p>
                <p className="mt-4 text-stone">{t(copy.searchEmpty.hint, locale)}</p>
                <TransitionLink
                  href="/menu"
                  className="nav-link mt-8 inline-block text-[0.72rem] tracking-[0.22em] uppercase"
                  onClick={() => setOpen(false)}
                >
                  {t(copy.ui.exploreMenu, locale)} →
                </TransitionLink>
              </div>
            ) : (
              <ul>
                {results.map((dish, index) => (
                  <li
                    key={dish.slug}
                    className="search-result border-b border-line"
                    style={{ animationDelay: `${index * 55}ms` }}
                  >
                    <TransitionLink
                      href={`/menu/${dish.slug}`}
                      className="flex items-baseline justify-between gap-6 py-5"
                      onClick={() => setOpen(false)}
                    >
                      <span className="font-editorial text-[1.35rem] uppercase tracking-[-0.02em] text-ivory md:text-[1.8rem]">
                        {dish.name[locale]}
                      </span>
                      <span className="shrink-0 text-[0.8rem] tracking-[0.12em] text-ivory">
                        {dish.price}
                      </span>
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
