import type { Metadata } from "next";
import { pagesMeta } from "@/lib/seo";

export const metadata: Metadata = pagesMeta.menu;

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
