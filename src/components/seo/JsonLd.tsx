import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    image: `${site.url}${site.images.hero}`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    servesCuisine: ["European", "Contemporary"],
    priceRange: "₽₽₽",
    sameAs: [site.social.instagram, site.social.telegram],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.en,
      addressLocality: site.city.en,
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "18:00",
      closes: "01:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
