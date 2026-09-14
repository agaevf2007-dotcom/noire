import type { Metadata } from "next";
import { pagesMeta } from "@/lib/seo";

export const metadata: Metadata = pagesMeta.journal;

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
