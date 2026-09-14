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
    <Container className="pt-24 pb-8 md:pt-28 md:pb-10">
      {eyebrow ? (
        <p className="eyebrow mb-6" data-reveal suppressHydrationWarning>
          {eyebrow}
        </p>
      ) : null}
      <SplitLines
        as="h1"
        text={title}
        className="text-[clamp(2.1rem,5.5vw,3.6rem)] text-ivory"
      />
      {lead ? (
        <p
          data-reveal
          className="type-body mt-5 max-w-lg"
          suppressHydrationWarning
        >
          {lead}
        </p>
      ) : null}
    </Container>
  );
}
