import type { Metadata } from "next";
import { site } from "@/lib/site";

const titleHome = "NOIRÉ — Modern Restaurant in Moscow";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleHome,
    template: "%s — NOIRÉ",
  },
  description: site.description.en,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ru_RU",
    siteName: site.name,
    title: titleHome,
    description: site.description.en,
    url: site.url,
    images: [{ url: site.images.og, width: 1400, height: 900, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: titleHome,
    description: site.description.en,
    images: [site.images.og],
  },
};

export function pageMeta(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — NOIRÉ`,
      description,
      url,
      images: [{ url: site.images.og, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — NOIRÉ`,
      description,
      images: [site.images.og],
    },
  };
}

export const pagesMeta = {
  menu: pageMeta(
    "Menu",
    "The seasonal dinner menu at NOIRÉ Moscow — starters, pasta, mains, seafood and cocktails.",
    "/menu",
  ),
  about: pageMeta(
    "About",
    "NOIRÉ is a private dining house in Moscow. Chef Alexander Morozov. European cooking after dark.",
    "/about",
  ),
  locations: pageMeta(
    "Locations",
    "Find NOIRÉ Patriarkhie on Malaya Bronnaya Street, Moscow. Dinner from 18:00.",
    "/locations",
  ),
  journal: pageMeta(
    "Journal",
    "Notes from the kitchen and the room: aperitivo, service, and Moscow after dark.",
    "/journal",
  ),
  reserve: pageMeta(
    "Reserve",
    "Reserve a table at NOIRÉ Moscow. Evenings from 18:00. Limited seating.",
    "/reserve",
  ),
  contacts: pageMeta(
    "Contacts",
    "Contact NOIRÉ: Malaya Bronnaya Street, Moscow. Phone, email, Instagram and Telegram.",
    "/contacts",
  ),
  events: pageMeta(
    "Events",
    "Private dinners, celebrations and chef’s table evenings at NOIRÉ Moscow.",
    "/events",
  ),
};
