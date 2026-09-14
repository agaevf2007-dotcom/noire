import type { JournalPost, Locale, LocationVenue, NavItem } from "@/lib/types";
import { site } from "@/lib/site";

export { cocktails, dishes, getDish } from "@/lib/menu-data";

export const brand = {
  name: site.name,
  slogan: site.slogan,
} as const;

export const navItems: NavItem[] = [
  { href: "/menu", label: { en: "Menu", ru: "Меню" } },
  { href: "/about", label: { en: "About", ru: "О нас" } },
  { href: "/locations", label: { en: "Locations", ru: "Адреса" } },
  { href: "/journal", label: { en: "Journal", ru: "Журнал" } },
  { href: "/events", label: { en: "Events", ru: "События" } },
];

export const journalPosts: JournalPost[] = [
  {
    slug: "the-art-of-truffle",
    title: { en: "The Art of Aperitivo", ru: "Искусство аперитива" },
    excerpt: {
      en: "Why we wait for winter, and why we never hide truffle under cream.",
      ru: "Почему мы ждём зимы и никогда не прячем трюфель под сливками.",
    },
    body: {
      en: [
        "Truffle is not a garnish. It is a season, a scent that arrives before the plate, and a discipline of restraint.",
        "At NOIRÉ we work with winter black truffle from trusted foragers. It is shaved at the table, in quantity that is honest rather than theatrical.",
        "The dish underneath must be quiet enough to carry it — pasta, butter, salt. Nothing more is required.",
      ],
      ru: [
        "Трюфель — не гарнир. Это сезон, запах, который приходит раньше тарелки, и дисциплина сдержанности.",
        "В NOIRÉ мы работаем с зимним чёрным трюфелем от проверенных сборщиков. Его натирают у стола — честно, без театра.",
        "Блюдо под ним должно быть тихим: паста, масло, соль. Больше ничего не нужно.",
      ],
    },
    date: "2026-02-12",
    image: "/images/journal-truffle.jpg",
    alt: {
      en: "Wild mushrooms and dark earth still life",
      ru: "Натюрморт с лесными грибами",
    },
  },
  {
    slug: "inside-the-noire-kitchen",
    title: { en: "Inside the NOIRÉ Kitchen", ru: "Внутри кухни NOIRÉ" },
    excerpt: {
      en: "A service that begins at six and ends when the last table is ready to leave.",
      ru: "Смена, которая начинается в шесть и заканчивается, когда готов уйти последний стол.",
    },
    body: {
      en: [
        "The kitchen at Patriarkhie is small by design. Eight stations. No spectacle window. Sound is low; movement is precise.",
        "We cook European food with a Moscow evening in mind — slower, darker, more private than lunch ever is.",
        "Guests rarely see this room. They feel it in timing: courses that arrive when conversation has a pause, never when it does not.",
      ],
      ru: [
        "Кухня на Патриарших маленькая намеренно. Восемь станций. Без витрины. Тихо и точно.",
        "Мы готовим европейскую кухню с мыслью о московском вечере — медленнее, темнее, более приватно, чем любой обед.",
        "Гости редко видят эту комнату. Они чувствуют её в ритме подачи.",
      ],
    },
    date: "2026-01-28",
    image: "/images/journal-kitchen.jpg",
    alt: {
      en: "Professional kitchen during evening service",
      ru: "Профессиональная кухня во время вечерней смены",
    },
  },
  {
    slug: "meet-the-chef",
    title: { en: "The New Language of Dinner", ru: "Новый язык ужина" },
    excerpt: {
      en: "Alexander Morozov on Paris, Copenhagen, and why Moscow nights feel different.",
      ru: "Александр Морозов о Париже, Копенгагене и том, почему московские ночи ощущаются иначе.",
    },
    body: {
      en: [
        "Alexander spent years in kitchens that taught him silence as much as technique — Paris for product, Copenhagen for discipline.",
        "NOIRÉ is his room: not a replica of those cities, but a private dining house for Moscow after dark.",
        "He still plates the first table himself. Habit, he says. Respect, we think.",
      ],
      ru: [
        "Александр годы провёл на кухнях, которые учили тишине так же, как технике — Париж за продукт, Копенгаген за дисциплину.",
        "NOIRÉ — его зал: не копия этих городов, а дом для приватного ужина в Москве после заката.",
        "Первый стол он по-прежнему собирает сам. Привычка, говорит он. Уважение, думаем мы.",
      ],
    },
    date: "2025-12-04",
    image: "/images/chef.jpg",
    alt: {
      en: "Chef Alexander Morozov in the kitchen",
      ru: "Шеф Александр Морозов на кухне",
    },
  },
  {
    slug: "moscow-after-dark",
    title: { en: "Moscow After Dark", ru: "Москва после заката" },
    excerpt: {
      en: "Why the city tastes different after eighteen hundred hours.",
      ru: "Почему город звучит иначе после шести вечера.",
    },
    body: {
      en: [
        "Moscow after dark is not a copy of another capital. It is slower, more private, and more exacting about who the evening is for.",
        "NOIRÉ was built for that hour: a room that holds conversation, a bar that takes the later service, and a kitchen that plates as if the night were the course.",
        "The city lowers its voice. Dinner can begin.",
      ],
      ru: [
        "Москва после заката — не копия другой столицы. Она медленнее, приватнее и строже к тому, для кого собран вечер.",
        "NOIRÉ построен для этого часа: зал, который держит разговор, бар, который принимает позднюю смену, и кухня, которая собирает тарелку так, будто ночь — это блюдо.",
        "Город снижает голос. Можно ужинать.",
      ],
    },
    date: "2025-11-18",
    image: "/images/bar.jpg",
    alt: {
      en: "The NOIRÉ bar after dark",
      ru: "Бар NOIRÉ после заката",
    },
  },
];

export const venue: LocationVenue = {
  slug: "patriarkhie",
  name: "NOIRÉ Patriarkhie",
  city: site.city,
  address: site.address,
  hours: site.hours,
  phone: site.phone,
  email: site.email,
  image: site.images.location,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Malaya+Bronnaya+Street+Moscow",
  lat: site.geo.lat,
  lng: site.geo.lng,
  description: {
    en: "A small dining house on Patriarkhie. Low light, wide tables, and a room that holds conversation instead of competing with it.",
    ru: "Небольшой дом на Патриарших. Приглушённый свет, широкие столы и зал, который держит разговор.",
  },
  gallery: [
    site.images.location,
    site.images.room1,
    site.images.room2,
    site.images.bar,
    site.images.kitchen,
  ],
};

export const venues: LocationVenue[] = [venue];

export function getVenue(slug: string) {
  return venues.find((item) => item.slug === slug);
}

export const copy = {
  hero: {
    kicker: { en: "Moscow · 55°45’N", ru: "Москва · 55°45’N" },
    title: { en: "Dinner,\nreimagined.", ru: "Ужин,\nпереосмысленный." },
    open: { en: "Open tonight", ru: "Открыто сегодня" },
    hours: site.hours,
    cta: { en: "Reserve a table", ru: "Забронировать стол" },
  },
  intro: {
    lineOne: { en: "We don’t serve\nfood.", ru: "Мы не подаём\nеду." },
    lineTwo: { en: "We serve\nan evening.", ru: "Мы подаём\nвечер." },
    body: {
      en: "NOIRÉ is a private dining house in the centre of Moscow. Authorial European cooking, a dim room, and the feeling that the night was arranged for a small table — not a crowd.",
      ru: "NOIRÉ — дом для приватного ужина в центре Москвы. Авторская европейская кухня, приглушённый зал и ощущение, что вечер собран для небольшого стола, а не для зала.",
    },
  },
  signatures: {
    index: "01",
    eyebrow: { en: "The plate", ru: "Тарелка" },
    title: { en: "Signatures", ru: "Авторские блюда" },
  },
  chef: {
    index: "02",
    eyebrow: { en: "Kitchen", ru: "Кухня" },
    title: { en: "The person\nbehind the plate.", ru: "Человек\nза тарелкой." },
    name: "Alexander Morozov",
    years: {
      en: "15 years of experience.",
      ru: "15 лет опыта.",
    },
    cities: { en: "Moscow · Paris · Copenhagen", ru: "Москва · Париж · Копенгаген" },
    body: {
      en: "Alexander Morozov cooks with the patience of someone who has already seen what noise does to a plate. His food is European in lineage, Moscow in hour: slower, darker, meant to be eaten after the city has lowered its voice.",
      ru: "Александр Морозов готовит с терпением человека, который уже видел, что шум делает с тарелкой. Его кухня европейская по происхождению и московская по часу: медленнее, темнее, для времени, когда город снижает голос.",
    },
  },
  atmosphere: {
    index: "03",
    eyebrow: { en: "Interior", ru: "Интерьер" },
    title: { en: "The Room", ru: "Зал" },
    body: {
      en: "Low light. Wide tables. A room that holds conversation instead of competing with it. The dining room is small on purpose — private dining, not a theatre of service.",
      ru: "Приглушённый свет. Широкие столы. Зал, который держит разговор, а не спорит с ним. Маленький намеренно — private dining, а не театр сервиса.",
    },
  },
  bar: {
    index: "04",
    eyebrow: { en: "The bar", ru: "Бар" },
    title: { en: "After Dark", ru: "After Dark" },
    body: {
      en: "When dinner loosens, the bar takes the hour. Three drinks we return to every night — built for the room, not for a list.",
      ru: "Когда ужин становится тише, час переходит бару. Три напитка, к которым мы возвращаемся каждую ночь — для этого зала, а не для карты ради карты.",
    },
  },
  reserveCta: {
    title: { en: "Your table\nis waiting.", ru: "Ваш стол\nждёт." },
    body: {
      en: "We keep the book short. Evenings are limited. Write to us, or reserve a table for tonight.",
      ru: "Книга броней короткая. Вечера ограничены. Напишите нам или забронируйте стол на сегодня.",
    },
  },
  location: {
    index: "05",
    eyebrow: { en: "Address", ru: "Адрес" },
    directions: { en: "Get directions", ru: "Как добраться" },
  },
  journal: {
    index: "06",
    eyebrow: { en: "Stories", ru: "Истории" },
    title: { en: "Journal", ru: "Журнал" },
    all: { en: "All stories", ru: "Все материалы" },
  },
  footer: {
    instagram: "Instagram",
    telegram: "Telegram",
    contacts: { en: "Contacts", ru: "Контакты" },
    reservations: { en: "Reservations", ru: "Бронирование" },
    legal: "© 2026 NOIRÉ",
  },
  pages: {
    menu: {
      title: { en: "Menu", ru: "Меню" },
      lead: {
        en: "A seasonal collection of dishes, crafted around texture, temperature and contrast.",
        ru: "Сезонная коллекция блюд, собранная вокруг текстуры, температуры и контраста.",
      },
      service: { en: "Moscow · Dinner Service", ru: "Москва · Dinner Service" },
    },
    about: {
      title: { en: "About", ru: "О нас" },
      lead: {
        en: "A contemporary dining house for Moscow nights.",
        ru: "Современный дом для московских вечеров.",
      },
    },
    locations: {
      title: { en: "Find your table.", ru: "Найдите свой стол." },
      lead: {
        en: "One room. One address. For now, that is enough.",
        ru: "Один зал. Один адрес. Пока этого достаточно.",
      },
    },
    journal: {
      title: { en: "Journal", ru: "Журнал" },
      lead: {
        en: "Notes from the kitchen, the room, and the people behind them.",
        ru: "Заметки с кухни, из зала и о людях за ними.",
      },
    },
    reserve: {
      title: { en: "Your table\nis waiting.", ru: "Ваш стол\nждёт." },
      lead: {
        en: "Choose your evening.",
        ru: "Выберите свой вечер.",
      },
      success: {
        en: "Your table\nis reserved.",
        ru: "Ваш стол\nзабронирован.",
      },
    },
    contacts: {
      title: { en: "Contacts", ru: "Контакты" },
      lead: {
        en: "The house is open from 18:00. The book closes when the room is full.",
        ru: "Дом открыт с 18:00. Книга закрывается, когда зал набран.",
      },
      received: { en: "Message received.", ru: "Сообщение получено." },
    },
    events: {
      title: { en: "Events", ru: "События" },
      lead: {
        en: "For dinners, celebrations and evenings that deserve their own table.",
        ru: "Для ужинов, праздников и вечеров, которым нужен свой стол.",
      },
      cta: { en: "Plan an event", ru: "Спланировать событие" },
      request: { en: "Request an event", ru: "Оставить заявку" },
      sent: { en: "We’ll be in touch.", ru: "Мы свяжемся с вами." },
    },
    notFound: {
      title: { en: "Not found.", ru: "Не найдено." },
      lead: {
        en: "This page seems to have disappeared into the night.",
        ru: "Эта страница растворилась в ночи.",
      },
      back: { en: "Back to NOIRÉ", ru: "Вернуться в NOIRÉ" },
    },
  },
  form: {
    name: { en: "First name", ru: "Имя" },
    email: { en: "Email", ru: "Почта" },
    phone: { en: "Phone", ru: "Телефон" },
    date: { en: "Date", ru: "Дата" },
    time: { en: "Time", ru: "Время" },
    guests: { en: "Guests", ru: "Гости" },
    note: { en: "Special request", ru: "Особое пожелание" },
    message: { en: "Message", ru: "Сообщение" },
    company: { en: "Company", ru: "Компания" },
    eventType: { en: "Event type", ru: "Тип события" },
    submit: { en: "Request a table", ru: "Отправить заявку" },
    send: { en: "Send message", ru: "Отправить" },
    subscribe: { en: "Subscribe", ru: "Подписаться" },
    optional: { en: "optional", ru: "необязательно" },
  },
  book: {
    guestsQ: { en: "How many guests?", ru: "Сколько гостей?" },
    dateQ: { en: "Choose a date.", ru: "Выберите дату." },
    timeQ: { en: "Choose your time.", ru: "Выберите время." },
    detailsQ: { en: "Your details", ru: "Ваши данные" },
    confirmQ: { en: "Confirm reservation", ru: "Подтверждение" },
    next: { en: "Next", ru: "Далее" },
    back: { en: "Back", ru: "Назад" },
    confirm: { en: "Confirm reservation", ru: "Подтвердить бронь" },
    available: { en: "Available", ru: "Свободно" },
    selected: { en: "Selected", ru: "Выбрано" },
    unavailable: { en: "Unavailable", ru: "Недоступно" },
    updates: {
      en: "I agree to receive reservation updates.",
      ru: "Согласен(на) получать обновления по брони.",
    },
    calendar: { en: "Add to calendar", ru: "В календарь" },
    home: { en: "Back to home", ru: "На главную" },
    number: { en: "Reservation #", ru: "Бронь №" },
    required: { en: "This field is required.", ru: "Обязательное поле." },
    emailInvalid: { en: "Enter a valid email.", ru: "Введите корректную почту." },
    phoneInvalid: { en: "Enter a valid phone number.", ru: "Введите корректный телефон." },
    guestsStep: { en: "Guests", ru: "Гости" },
    dateStep: { en: "Date", ru: "Дата" },
    timeStep: { en: "Time", ru: "Время" },
    detailsStep: { en: "Details", ru: "Данные" },
    confirmStep: { en: "Confirm", ru: "Бронь" },
  },
  offer: {
    kicker: { en: "Seasonal menu", ru: "Сезонное меню" },
    title: { en: "Autumn at NOIRÉ", ru: "Осень в NOIRÉ" },
    body: {
      en: "A short autumn card: truffle, duck, fig. Texture first.",
      ru: "Короткая осенняя карта: трюфель, утка, инжир. Сначала текстура.",
    },
  },
  eventsList: {
    dinner: { en: "Private dinners", ru: "Приватные ужины" },
    corporate: { en: "Corporate evenings", ru: "Корпоративные вечера" },
    celebration: { en: "Celebrations", ru: "Праздники" },
    chef: { en: "Chef’s table", ru: "Chef’s table" },
    menu: { en: "Custom menus", ru: "Авторские меню" },
  },
  cookie: {
    text: {
      en: "We use cookies to improve your experience.",
      ru: "Мы используем cookies, чтобы улучшить опыт на сайте.",
    },
    accept: { en: "Accept", ru: "Принять" },
    settings: { en: "Settings", ru: "Настройки" },
    essential: {
      en: "Essential only. This prototype does not store personal data.",
      ru: "Только необходимые. Прототип не хранит персональные данные.",
    },
  },
  newsletter: {
    title: { en: "Stay in the know.", ru: "Оставайтесь в курсе." },
    placeholder: { en: "Your email", ru: "Ваша почта" },
    done: { en: "You’re on the list.", ru: "Вы в списке." },
  },
  searchEmpty: {
    hint: { en: "Try another search.", ru: "Попробуйте другой запрос." },
  },
  locationUi: {
    view: { en: "View location", ru: "Смотреть локацию" },
    moscow: { en: "Moscow", ru: "Москва" },
  },
  ui: {
    menu: { en: "Menu", ru: "Меню" },
    close: { en: "Close", ru: "Закрыть" },
    reserve: { en: "Reserve", ru: "Бронь" },
    openMenu: { en: "Open menu", ru: "Открыть меню" },
    skip: { en: "Skip to content", ru: "К содержанию" },
    read: { en: "Read", ru: "Читать" },
    backJournal: { en: "Back to journal", ru: "К журналу" },
    backMenu: { en: "Back to menu", ru: "К меню" },
    exploreMenu: { en: "Explore menu", ru: "Смотреть меню" },
    search: { en: "Search", ru: "Поиск" },
    searchPlaceholder: { en: "Search dishes…", ru: "Искать блюда…" },
    noDishes: { en: "NO DISHES FOUND.", ru: "БЛЮДА НЕ НАЙДЕНЫ." },
    chefsChoice: { en: "Chef’s Choice", ru: "Выбор шефа" },
    seasonal: { en: "Seasonal", ru: "Сезонное" },
    autumn: { en: "Autumn Collection", ru: "Осенняя коллекция" },
    ingredients: { en: "Ingredients", ru: "Ингредиенты" },
    composition: { en: "Composition", ru: "Состав" },
    theIngredients: { en: "The Ingredients", ru: "Ингредиенты" },
    allergens: { en: "Allergens", ru: "Аллергены" },
    pairing: { en: "Pairing", ru: "К блюду" },
    chefNote: { en: "Chef’s Note", ru: "Заметка шефа" },
    related: { en: "You may also like", ru: "Вам также может понравиться" },
    viewPlate: { en: "View", ru: "Смотреть" },
    drag: { en: "Drag", ru: "Листать" },
  },
} as const;

export function t<T extends Record<Locale, string>>(
  value: T,
  locale: Locale,
): string {
  return value[locale];
}


export function getPost(slug: string): JournalPost | undefined {
  return journalPosts.find((post) => post.slug === slug);
}
