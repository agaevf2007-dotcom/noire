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
      <Container className="pt-36 pb-12 md:pt-44">
        <MagneticButton href="/journal" arrow="left">
          {t(copy.ui.backJournal, locale)}
        </MagneticButton>
        <p className="eyebrow mt-10">{formatDate(post.date, locale)}</p>
        <SplitLines
          as="h1"
          text={post.title[locale]}
          className="mt-6 max-w-4xl text-[clamp(2.8rem,8vw,6.5rem)] text-ivory"
        />
      </Container>
      <Container className="pb-[var(--space-section)]">
        <ImageReveal
          src={post.image}
          alt={post.alt[locale]}
          className="min-h-[320px] md:min-h-[560px]"
          priority
        />
        <div className="mx-auto mt-16 max-w-2xl space-y-8 text-[1.05rem] leading-9 text-stone">
          {post.body[locale].map((paragraph) => (
            <p key={paragraph} data-reveal>{paragraph}</p>
          ))}
        </div>
        <div className="mt-16">
          <MagneticButton href="/reserve" variant="solid">
            {t(copy.hero.cta, locale)} →
          </MagneticButton>
        </div>
      </Container>
    </article>
  );
}
