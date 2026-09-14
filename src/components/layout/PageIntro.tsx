"use client";

import { Container } from "@/components/layout/Container";
import { SplitLines } from "@/components/motion/SplitLines";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export function PageIntro({ eyebrow, title, lead }: PageIntroProps) {
  return (
    <Container className="pt-36 pb-16 md:pt-44 md:pb-24">
      {eyebrow ? (
        <p className="eyebrow mb-6" data-reveal suppressHydrationWarning>
          {eyebrow}
        </p>
      ) : null}
      <SplitLines
        as="h1"
        text={title}
        className="text-[clamp(3rem,10vw,7.5rem)] text-ivory"
      />
      {lead ? (
        <p
          data-reveal
          className="mt-8 max-w-lg text-[1rem] leading-8 text-stone"
          suppressHydrationWarning
        >
          {lead}
        </p>
      ) : null}
    </Container>
  );
}
