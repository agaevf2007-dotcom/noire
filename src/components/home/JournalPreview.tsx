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
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index={copy.journal.index}
            eyebrow={t(copy.journal.eyebrow, locale)}
            title={t(copy.journal.title, locale)}
          />
          <MagneticButton href="/journal">
            {t(copy.journal.all, locale)} →
          </MagneticButton>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {journalPosts.map((post) => (
            <JournalCard
              key={post.slug}
              post={post}
              locale={locale}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
