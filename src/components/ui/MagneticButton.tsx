"use client";

import { buttonClass } from "@/components/ui/Button";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { cn } from "@/lib/cn";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "ghost" | "line" | "solid";
  external?: boolean;
  arrow?: "left" | "right" | "none";
};

export function MagneticButton({
  href,
  children,
  className,
  variant = "line",
  external,
  arrow,
}: MagneticButtonProps) {
  const raw = Array.isArray(children)
    ? children.join("")
    : typeof children === "string"
      ? children
      : "";
  const label = raw.replace(/^←\s*/, "").replace(/\s*→$/, "").trim() || children;
  const dir =
    arrow ?? (raw.includes("←") ? "left" : raw.includes("→") ? "right" : "none");

  return (
    <TransitionLink
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        buttonClass(variant),
        "btn-magnetic",
        dir === "left" && "btn-magnetic-left",
        className,
      )}
    >
      <span className="inline-flex items-center gap-3">
        {dir === "left" ? <span className="btn-arrow btn-arrow-left">←</span> : null}
        {label}
        {dir === "right" ? <span className="btn-arrow">→</span> : null}
      </span>
    </TransitionLink>
  );
}
