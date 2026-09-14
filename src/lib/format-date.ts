export function formatDate(iso: string, locale: "en" | "ru"): string {
  const [year, month, day] = iso.split("-");
  const months = {
    en: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    ru: [
      "янв",
      "фев",
      "мар",
      "апр",
      "мая",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ],
  } as const;
  const monthIndex = Number(month) - 1;
  return `${day} ${months[locale][monthIndex]} ${year}`;
}

export function formatLongDate(iso: string, locale: "en" | "ru"): string {
  const date = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatMonthTitle(year: number, month: number, locale: "en" | "ru") {
  return new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month, 1));
}
