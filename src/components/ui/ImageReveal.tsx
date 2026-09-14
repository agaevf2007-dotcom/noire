"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ImageReveal({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
}: ImageRevealProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div data-reveal-image className={cn("img-frame relative", className)}>
      {failed ? (
        <div className="img-fallback absolute inset-0" />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
