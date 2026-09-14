import { journalPosts } from "@/lib/content";
import { JournalDetail } from "@/components/journal/JournalDetail";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);
  if (!post) return pageMeta("Journal", "Story not found.", "/journal");
  return pageMeta(post.title.en, post.excerpt.en, `/journal/${post.slug}`);
}

export default async function JournalArticlePage({
  params,
}: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <JournalDetail post={post} />;
}
