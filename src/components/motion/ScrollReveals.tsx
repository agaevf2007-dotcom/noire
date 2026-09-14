"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useMotion } from "@/components/motion/MotionProvider";

export function ScrollReveals() {
  const pathname = usePathname();
  const { reduced, introComplete } = useMotion();

  useEffect(() => {
    if (!introComplete) return;

    const nodes = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-reveal-image], [data-split-line]",
    );

    if (reduced) {
      nodes.forEach((node) => node.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname, reduced, introComplete]);

  return null;
}
