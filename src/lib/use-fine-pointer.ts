"use client";

import { useEffect, useState } from "react";

export function useFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const hover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(hover.matches);
    update();
    hover.addEventListener("change", update);
    return () => hover.removeEventListener("change", update);
  }, []);

  return fine;
}
