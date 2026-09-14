import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "ghost" | "line" | "solid";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({
  children,
  className,
  variant = "line",
  type = "button",
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(buttonClass(variant), className)}
    >
      {children}
    </button>
  );
}

export function buttonClass(variant: "ghost" | "line" | "solid" = "line") {
  const base =
    "inline-flex min-h-11 items-center gap-3 text-[0.72rem] tracking-[0.22em] uppercase transition-[color,background-color,border-color,opacity,transform] duration-300 active:opacity-70 disabled:opacity-40";

  if (variant === "ghost") {
    return cn(base, "text-ivory hover:text-stone");
  }

  if (variant === "solid") {
    return cn(
      base,
      "btn-solid bg-ivory px-6 py-3 text-[var(--noir)] hover:bg-stone",
    );
  }

  return cn(
    base,
    "border-b border-ivory/40 pb-1 text-ivory hover:border-ivory hover:text-stone",
  );
}
