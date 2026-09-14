export const site = {
  name: "NOIRÉ",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://noire.moscow",
  slogan: {
    en: "Dinner, reimagined.",
    ru: "Ужин, переосмысленный.",
  },
  description: {
    en: "NOIRÉ is a modern restaurant in Moscow where contemporary European cuisine meets cinematic atmosphere, cocktails and an unforgettable dinner experience.",
    ru: "NOIRÉ — современный ресторан в Москве: европейская кухня, кинематографичная атмосфера и ужин, который запоминается.",
  },
  phone: "+7 495 000 18 00",
  email: "reserve@noire.moscow",
  hours: "18:00 — 01:00",
  city: { en: "Moscow", ru: "Москва" },
  address: {
    en: "Malaya Bronnaya Street",
    ru: "Малая Бронная улица",
  },
  geo: { lat: 55.762, lng: 37.596 },
  social: {
    instagram: "https://www.instagram.com/noire.moscow",
    telegram: "https://t.me/noiremoscow",
  },
  images: {
    hero: "/images/hero.jpg",
    location: "/images/location.jpg",
    chef: "/images/chef.jpg",
    bar: "/images/bar.jpg",
    room1: "/images/room-1.jpg",
    room2: "/images/room-2.jpg",
    kitchen: "/images/journal-kitchen.jpg",
    og: "/images/hero.jpg",
  },
} as const;
