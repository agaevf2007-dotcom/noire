"use client";

import { useEffect, useRef } from "react";
import { brand, copy, t } from "@/lib/content";
import { registerGsap } from "@/lib/gsap";
import { useLocale } from "@/lib/locale";
import { easeCinematic, easeMask } from "@/lib/motion";
import { useMotion } from "@/components/motion/MotionProvider";

export function Loader() {
  const { playIntro, reduced, markIntroComplete } = useMotion();
  const { locale } = useLocale();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playIntro || reduced) return;
    const root = rootRef.current;
    if (!root) return;

    const finish = () => {
      document.body.style.overflow = "";
      markIntroComplete();
    };

    const safety = window.setTimeout(finish, 1800);

    const { gsap } = registerGsap();
    const logo = root.querySelector("[data-loader-logo]");
    const line = root.querySelector("[data-loader-line]");
    const place = root.querySelector("[data-loader-place]");

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      defaults: { ease: easeCinematic },
      onComplete: () => {
        window.clearTimeout(safety);
        finish();
      },
    });

    gsap.set(logo, { opacity: 0, y: 12 });
    gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(place, { opacity: 0, y: 8 });

    tl.to(logo, { opacity: 1, y: 0, duration: 0.35 }, 0.06)
      .to(line, { scaleX: 1, duration: 0.4 }, 0.22)
      .to(place, { opacity: 1, y: 0, duration: 0.32 }, 0.36)
      .to(
        root,
        {
          yPercent: -100,
          duration: 0.7,
          ease: easeMask,
        },
        0.95,
      );

    return () => {
      window.clearTimeout(safety);
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [playIntro, reduced, markIntroComplete]);

  if (!playIntro || reduced) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-noir"
      aria-hidden
    >
      <div className="text-center">
        <p
          data-loader-logo
          className="display text-[1.1rem] tracking-[0.32em] text-ivory"
        >
          {brand.name}
        </p>
        <span
          data-loader-line
          className="mx-auto mt-6 block h-px w-16 bg-ivory/50"
        />
        <p
          data-loader-place
          className="eyebrow mt-6 text-stone"
        >
          {t(copy.hero.kicker, locale)}
        </p>
      </div>
    </div>
  );
}
