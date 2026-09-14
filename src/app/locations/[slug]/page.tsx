import { getVenue, venues } from "@/lib/content";
import { LocationDetail } from "@/components/locations/LocationDetail";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return venues.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/locations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getVenue(slug);
  if (!item) return pageMeta("Locations", "NOIRÉ Moscow.", "/locations");
  return pageMeta(
    item.name,
    item.description.en,
    `/locations/${item.slug}`,
  );
}

export default async function LocationPage({
  params,
}: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const item = getVenue(slug);
  if (!item) notFound();
  return <LocationDetail venue={item} />;
}
