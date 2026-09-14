import type { Metadata } from "next";
import { pagesMeta } from "@/lib/seo";

export const metadata: Metadata = pagesMeta.about;

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
