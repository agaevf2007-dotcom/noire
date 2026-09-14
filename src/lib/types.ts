export type Locale = "en" | "ru";

export type Localized = Record<Locale, string>;

export type NavItem = {
  href: string;
  label: Localized;
};

export type CategoryId =
  | "starters"
  | "raw"
  | "pasta"
  | "mains"
  | "seafood"
  | "sides"
  | "desserts"
  | "drinks";

export type DishTag =
  | "vegetarian"
  | "spicy"
  | "chefs-choice"
  | "signature"
  | "seasonal";

export type DishIngredient = {
  id: string;
  name: Localized;
  image: string;
  grams: string;
};

export type Dish = {
  id: string;
  slug: string;
  name: Localized;
  category: CategoryId;
  summary: Localized;
  description: Localized;
  price: string;
  image: string;
  gallery: string[];
  ingredients: DishIngredient[];
  allergens: Localized[];
  pairing: {
    name: Localized;
    price: string;
  };
  chefNote: Localized;
  tags: DishTag[];
  featured: boolean;
  seasonal: boolean;
  chefChoice: boolean;
  alt: Localized;
  emphasis: "xl" | "lg" | "md" | "sm";
};

export type Cocktail = {
  name: string;
  price: string;
  notes: Localized;
  image: string;
};

export type JournalPost = {
  slug: string;
  title: Localized;
  excerpt: Localized;
  body: Record<Locale, string[]>;
  date: string;
  image: string;
  alt: Localized;
};

export type LocationVenue = {
  slug: string;
  name: string;
  city: Localized;
  address: Localized;
  hours: string;
  phone: string;
  email: string;
  image: string;
  mapsUrl: string;
  lat: number;
  lng: number;
  description: Localized;
  gallery: string[];
};

export type EventKind =
  | "private-dinner"
  | "corporate"
  | "celebration"
  | "chefs-table"
  | "custom-menu";

export type BookingStep = 1 | 2 | 3 | 4 | 5;
