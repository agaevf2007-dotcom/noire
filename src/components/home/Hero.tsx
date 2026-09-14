"use client";

import { useEffect, useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SafeImage } from "@/components/ui/SafeImage";
import { SplitLines } from "@/components/motion/SplitLines";
import { useMotion } from "@/components/motion/MotionProvider";
import { brand, copy, t } from "@/lib/content";
import { site } from "@/lib/site";
import { useLocale } from "@/lib/locale";

export function Hero() {
  const { locale } = useLocale();
  const { introComplete, reduced } = useMotion();
  const textRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!introComplete) return;
    const text = textRef.current;
    const meta = metaRef.current;
    if (!text || !meta) return;

    const lines = text.querySelectorAll<HTMLElement>("[data-hero-line]");
    if (reduced) {
      lines.forEach((line) => line.classList.add("is-in"));
      meta.classList.add("is-in");
      return;
    }

    lines.forEach((line, index) => {
      line.style.transitionDelay = `${index * 70}ms`;
      line.classList.add("is-in");
    });
    meta.classList.add("is-in");
  }, [introComplete, reduced, locale]);

  return (
    <section className="relative min-h-[76svh] overflow-hidden bg-noir md:min-h-[82svh]">
      <div className="absolute inset-0">
        <SafeImage
          src={site.images.hero}
          alt={
            locale === "ru"
              ? "Вечерняя сервировка в ресторане NOIRÉ"
              : "Evening fine dining service at NOIRÉ"
          }
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.35)_0%,rgba(10,10,10,0.55)_45%,rgba(10,10,10,0.92)_100%)]" />
      </div>

      <div className="relative flex min-h-[76svh] flex-col justify-end px-[var(--space-container)] pb-10 pt-24 md:min-h-[82svh] md:pb-12">
        <div ref={textRef}>
          <p className="overflow-hidden font-editorial text-[clamp(1rem,1.6vw,1.25rem)] tracking-[0.22em] text-ivory">
            <span data-hero-line className="block">
              {brand.name}
            </span>
          </p>
          <SplitLines
            as="h1"
            scroll={false}
            text={t(copy.hero.title, locale)}
            className="mt-4 max-w-4xl text-[clamp(2.6rem,8vw,5.5rem)] text-ivory"
          />
        </div>

        <div
          ref={metaRef}
          data-hero-meta
          className="mt-8 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="eyebrow">{t(copy.hero.kicker, locale)}</p>
          <div>
            <p className="eyebrow">{t(copy.hero.open, locale)}</p>
            <p className="mt-2 text-[0.95rem] text-ivory">{copy.hero.hours}</p>
          </div>
          <MagneticButton href="/reserve" variant="solid">
            {t(copy.hero.cta, locale)} →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
