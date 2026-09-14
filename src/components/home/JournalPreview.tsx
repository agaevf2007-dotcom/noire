"use client";

import { Container } from "@/components/layout/Container";
import { JournalCard } from "@/components/journal/JournalCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy, journalPosts, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function JournalPreview() {
  const { locale } = useLocale();

  return (
    <section className="py-[var(--space-section)]">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index={copy.journal.index}
            eyebrow={t(copy.journal.eyebrow, locale)}
            title={t(copy.journal.title, locale)}
          />
          <MagneticButton href="/journal">
            {t(copy.journal.all, locale)} →
          </MagneticButton>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {journalPosts.map((post, index) => (
            <JournalCard
              key={post.slug}
              post={post}
              locale={locale}
              featured={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
