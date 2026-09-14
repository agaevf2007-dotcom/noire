"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";

export function ScrollProgress() {
  const { reduced } = useMotion();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max <= 0 ? 0 : window.scrollY / max;
        bar.style.transform = `scaleY(${p})`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      className="pointer-events-none fixed top-[18%] right-3 z-40 hidden h-[64vh] w-px bg-ivory/10 md:block"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full w-full origin-top bg-ivory/45"
        style={{ transform: "scaleY(0)" }}
      />
    </div>
  );
}
