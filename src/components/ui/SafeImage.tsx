"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  decoding?: "async" | "auto" | "sync";
  fetchPriority?: "high" | "low" | "auto";
  draggable?: boolean;
};

export function SafeImage({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  draggable = false,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn("img-fallback", className)}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(src)}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      draggable={draggable}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
