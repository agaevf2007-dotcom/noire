import type { Metadata } from "next";
import { pagesMeta } from "@/lib/seo";

export const metadata: Metadata = pagesMeta.events;

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
