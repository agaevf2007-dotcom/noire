import { dishes } from "@/lib/content";
import { DishDetail } from "@/components/menu/DishDetail";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return dishes.map((dish) => ({ slug: dish.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/menu/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const dish = dishes.find((item) => item.slug === slug);
  if (!dish) return pageMeta("Not found", "This dish is no longer on the menu.", "/menu");
  return pageMeta(dish.name.en, dish.description.en, `/menu/${dish.slug}`);
}

export default async function DishPage({
  params,
}: PageProps<"/menu/[slug]">) {
  const { slug } = await params;
  const dish = dishes.find((item) => item.slug === slug);
  if (!dish) notFound();
  return <DishDetail dish={dish} />;
}
