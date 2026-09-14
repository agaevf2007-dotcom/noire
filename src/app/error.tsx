"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70svh] flex-col justify-end px-[var(--space-container)] pt-40 pb-24">
      <p className="eyebrow">Error</p>
      <h1 className="display mt-6 text-[clamp(2.8rem,9vw,7rem)] text-ivory">
        Something went quiet.
      </h1>
      <p className="type-body mt-6 max-w-md text-stone">
        The page could not be completed. Return home, or try again.
      </p>
      <div className="mt-10 flex flex-wrap gap-6">
        <Button variant="solid" onClick={reset}>
          Try again
        </Button>
        <MagneticButton href="/">Back to NOIRÉ →</MagneticButton>
      </div>
    </div>
  );
}
