"use client";

import { TransitionLink } from "@/components/motion/TransitionLink";
import { SafeImage } from "@/components/ui/SafeImage";
import { formatDate } from "@/lib/format-date";
import type { JournalPost } from "@/lib/types";

type JournalCardProps = {
  post: JournalPost;
  locale: "en" | "ru";
  featured?: boolean;
};

export function JournalCard({ post, locale, featured }: JournalCardProps) {
  return (
    <article className={featured ? "md:col-span-2" : undefined}>
      <TransitionLink
        href={`/journal/${post.slug}`}
        className="group block"
        aria-label={post.title[locale]}
      >
        <div
          className={
            featured
              ? "img-frame relative min-h-[220px] md:min-h-[280px]"
              : "img-frame relative min-h-[200px] md:min-h-[240px]"
          }
        >
          <SafeImage
            src={post.image}
            alt={post.alt[locale]}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="eyebrow mt-4">{formatDate(post.date, locale)}</p>
        <h3 className="mt-2 font-editorial text-[clamp(1.35rem,2.4vw,1.9rem)] uppercase tracking-[-0.03em] text-ivory">
          {post.title[locale]}
        </h3>
        <p className="type-body mt-2 max-w-md text-[0.98rem]">
          {post.excerpt[locale]}
        </p>
      </TransitionLink>
    </article>
  );
}
