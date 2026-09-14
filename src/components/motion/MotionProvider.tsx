"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { INTRO_KEY } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type MotionContextValue = {
  reduced: boolean;
  introComplete: boolean;
  playIntro: boolean;
  markIntroComplete: () => void;
};

const MotionContext = createContext<MotionContextValue | null>(null);

export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = usePrefersReducedMotion();
  const [playIntro, setPlayIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.sessionStorage.getItem(INTRO_KEY) === "1";
    const shouldPlay = pathname === "/" && !seen && !reduced;
    setPlayIntro(shouldPlay);
    if (!shouldPlay) setIntroComplete(true);
  }, [pathname, reduced]);

  const markIntroComplete = useCallback(() => {
    window.sessionStorage.setItem(INTRO_KEY, "1");
    setPlayIntro(false);
    setIntroComplete(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduced);
  }, [reduced]);

  const value = useMemo(
    () => ({
      reduced,
      introComplete,
      playIntro,
      markIntroComplete,
    }),
    [reduced, introComplete, playIntro, markIntroComplete],
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotion() {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotion must be used within MotionProvider");
  }
  return context;
}
