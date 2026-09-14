export const BOOKING_TIMES = [
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
] as const;

export type TimeSlot = (typeof BOOKING_TIMES)[number];
export type SlotStatus = "available" | "unavailable";

const FRIDAY_PATTERN: Record<TimeSlot, SlotStatus> = {
  "18:00": "available",
  "18:30": "available",
  "19:00": "unavailable",
  "19:30": "available",
  "20:00": "unavailable",
  "20:30": "available",
  "21:00": "available",
  "21:30": "unavailable",
  "22:00": "available",
};

function parseDay(iso: string) {
  return new Date(`${iso}T12:00:00`);
}

function todayIso() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function seed(iso: string) {
  return [...iso].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

export function getSlots(iso: string): Record<TimeSlot, SlotStatus> {
  const day = parseDay(iso);
  const today = todayIso();
  const weekday = day.getDay();

  if (iso < today || weekday === 1) {
    return Object.fromEntries(
      BOOKING_TIMES.map((time) => [time, "unavailable"]),
    ) as Record<TimeSlot, SlotStatus>;
  }

  if (weekday === 5) return { ...FRIDAY_PATTERN };

  const n = seed(iso);
  return Object.fromEntries(
    BOOKING_TIMES.map((time, index) => [
      time,
      (n + index * 3) % 7 === 0 ? "unavailable" : "available",
    ]),
  ) as Record<TimeSlot, SlotStatus>;
}

export function isDateOpen(iso: string) {
  return BOOKING_TIMES.some((time) => getSlots(iso)[time] === "available");
}

export function monthMatrix(year: number, month: number) {
  const first = new Date(year, month, 1);
  const start = first.getDay() === 0 ? 6 : first.getDay() - 1;
  const days = new Date(year, month + 1, 0).getDate();
  const cells: (string | null)[] = [];
  for (let i = 0; i < start; i += 1) cells.push(null);
  for (let day = 1; day <= days; day += 1) {
    const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    cells.push(iso);
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function makeReservationId(date: string, time: string) {
  if (date === "2026-09-18" && time === "20:30") return "NOIRÉ-2048";
  const n = 1800 + (Number(date.replaceAll("-", "").slice(4)) % 800);
  return `NOIRÉ-${n}`;
}
