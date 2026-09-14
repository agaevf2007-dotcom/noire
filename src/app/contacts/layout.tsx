import type { Metadata } from "next";
import { pagesMeta } from "@/lib/seo";

export const metadata: Metadata = pagesMeta.contacts;

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
