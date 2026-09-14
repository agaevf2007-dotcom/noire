import type { Metadata } from "next";
import { pagesMeta } from "@/lib/seo";

export const metadata: Metadata = pagesMeta.locations;

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
