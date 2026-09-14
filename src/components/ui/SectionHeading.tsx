import { SplitLines } from "@/components/motion/SplitLines";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div className="mb-8 flex items-center gap-4" data-reveal>
        {index ? (
          <span className="eyebrow text-stone">{index}</span>
        ) : null}
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      </div>
      <SplitLines
        text={title}
        className="text-[clamp(2.2rem,6.2vw,5.6rem)] text-ivory"
      />
      {description ? (
        <p data-reveal className="type-body mt-8 max-w-md text-stone">
          {description}
        </p>
      ) : null}
    </header>
  );
}
