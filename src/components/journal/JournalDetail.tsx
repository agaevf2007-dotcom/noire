"use client";

import { Container } from "@/components/layout/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitLines } from "@/components/motion/SplitLines";
import { copy, t } from "@/lib/content";
import { formatDate } from "@/lib/format-date";
import { useLocale } from "@/lib/locale";
import type { JournalPost } from "@/lib/types";

export function JournalDetail({ post }: { post: JournalPost }) {
  const { locale } = useLocale();

  return (
    <article>
      <Container className="pt-28 pb-8 md:pt-32">
        <MagneticButton href="/journal" arrow="left">
          {t(copy.ui.backJournal, locale)}
        </MagneticButton>
        <p className="eyebrow mt-8">{formatDate(post.date, locale)}</p>
        <SplitLines
          as="h1"
          text={post.title[locale]}
          className="mt-4 max-w-4xl text-[clamp(2.2rem,6vw,4rem)] text-ivory"
        />
      </Container>
      <Container className="pb-[var(--space-section)]">
        <ImageReveal
          src={post.image}
          alt={post.alt[locale]}
          className="min-h-[240px] md:min-h-[380px]"
          priority
        />
        <div className="mx-auto mt-8 max-w-2xl space-y-5 type-body">
          {post.body[locale].map((paragraph) => (
            <p key={paragraph} data-reveal>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10">
          <MagneticButton href="/reserve" variant="solid">
            {t(copy.hero.cta, locale)} →
          </MagneticButton>
        </div>
      </Container>
    </article>
  );
}
