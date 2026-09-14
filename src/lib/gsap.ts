"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return { gsap, ScrollTrigger };
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
  registered = true;
  return { gsap, ScrollTrigger };
}

export { gsap, ScrollTrigger };
