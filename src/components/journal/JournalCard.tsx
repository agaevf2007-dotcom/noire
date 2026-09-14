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
    <article className={featured ? "md:col-span-2" : undefined} data-reveal>
      <TransitionLink
        href={`/journal/${post.slug}`}
        className="group block"
        aria-label={post.title[locale]}
      >
        <div
          className={
            featured
              ? "img-frame relative min-h-[320px] md:min-h-[520px]"
              : "img-frame relative min-h-[240px] md:min-h-[320px]"
          }
        >
          <SafeImage
            src={post.image}
            alt={post.alt[locale]}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="eyebrow mt-6">{formatDate(post.date, locale)}</p>
        <h3 className="mt-3 font-editorial text-[clamp(1.6rem,3vw,2.6rem)] uppercase tracking-[-0.03em] text-ivory">
          {post.title[locale]}
        </h3>
        <p className="mt-4 max-w-md text-[0.92rem] leading-7 text-stone">
          {post.excerpt[locale]}
        </p>
      </TransitionLink>
    </article>
  );
}
