"use client";

import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { JournalCard } from "@/components/journal/JournalCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { copy, journalPosts, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function JournalPage() {
  const { locale } = useLocale();

  return (
    <>
      <PageIntro
        eyebrow="06"
        title={t(copy.pages.journal.title, locale)}
        lead={t(copy.pages.journal.lead, locale)}
      />
      <Container className="pb-[var(--space-section)]">
        <div className="grid gap-12 md:grid-cols-2">
          {journalPosts.map((post, index) => (
            <JournalCard
              key={post.slug}
              post={post}
              locale={locale}
              featured={index === 0}
            />
          ))}
        </div>
        <div className="mt-16">
          <MagneticButton href="/reserve" variant="solid">
            {t(copy.hero.cta, locale)} →
          </MagneticButton>
        </div>
      </Container>
    </>
  );
}
