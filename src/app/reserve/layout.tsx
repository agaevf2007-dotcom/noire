import type { Metadata } from "next";
import { pagesMeta } from "@/lib/seo";

export const metadata: Metadata = pagesMeta.reserve;

export default function ReserveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
