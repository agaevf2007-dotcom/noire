"use client";

import { useEffect, useRef, useState } from "react";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";
import type { Dish } from "@/lib/types";

export function DishGallery({ dish }: { dish: Dish }) {
  const { locale } = useLocale();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scroll: 0 });
  const [hint, setHint] = useState(true);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onPointerDown = (event: PointerEvent) => {
      drag.current = {
        active: true,
        startX: event.clientX,
        scroll: scroller.scrollLeft,
      };
      scroller.setPointerCapture(event.pointerId);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!drag.current.active) return;
      scroller.scrollLeft = drag.current.scroll - (event.clientX - drag.current.startX);
      setHint(false);
    };
    const onPointerUp = () => {
      drag.current.active = false;
    };

    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", onPointerUp);
    scroller.addEventListener("pointercancel", onPointerUp);
    return () => {
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", onPointerUp);
      scroller.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  if (dish.gallery.length < 4) return null;

  return (
    <section className="py-[var(--space-block)]">
      <div className="px-[var(--space-container)]">
        <p className="eyebrow">{hint ? t(copy.ui.drag, locale) : "\u00a0"}</p>
      </div>
      <div
        ref={scrollerRef}
        className="no-scrollbar mt-8 flex cursor-grab snap-x gap-4 overflow-x-auto px-[var(--space-container)] active:cursor-grabbing md:gap-6"
      >
        {dish.gallery.map((src, index) => (
          <figure
            key={`${src}-${index}`}
            className={cn(
              "img-frame relative shrink-0 snap-start",
              index === 0 ? "h-[58vh] w-[78vw] md:w-[42vw]" : "h-[48vh] w-[70vw] md:w-[28vw]",
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(src)}
              alt={`${dish.alt[locale]} — ${index + 1}`}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="pointer-events-none h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
