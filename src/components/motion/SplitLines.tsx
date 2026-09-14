import { cn } from "@/lib/cn";

type SplitLinesProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  scroll?: boolean;
};

export function SplitLines({
  text,
  className,
  as: Tag = "h2",
  scroll = true,
}: SplitLinesProps) {
  const lines = text.split("\n");

  return (
    <Tag className={cn("display", className)}>
      {lines.map((line) => (
        <span key={line} className="block overflow-hidden">
          <span
            data-split-line={scroll ? "" : undefined}
            data-hero-line={scroll ? undefined : ""}
            className="block"
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
