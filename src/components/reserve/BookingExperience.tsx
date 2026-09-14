"use client";

import { useEffect, useMemo, useState } from "react";
import { BookingCalendar } from "@/components/reserve/BookingCalendar";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { copy, t, venue } from "@/lib/content";
import {
  BOOKING_TIMES,
  getSlots,
  makeReservationId,
  type TimeSlot,
} from "@/lib/availability";
import { formatLongDate } from "@/lib/format-date";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/cn";

const GUESTS = ["2", "3", "4", "5", "6", "7+"] as const;
const STEPS = ["guestsStep", "dateStep", "timeStep", "detailsStep", "confirmStep"] as const;

type Details = {
  name: string;
  phone: string;
  email: string;
  note: string;
  updates: boolean;
};

const emptyDetails: Details = {
  name: "",
  phone: "",
  email: "",
  note: "",
  updates: false,
};

function downloadIcs(opts: {
  date: string;
  time: string;
  guests: string;
  name: string;
}) {
  const start = `${opts.date.replaceAll("-", "")}T${opts.time.replace(":", "")}00`;
  const hour = Number(opts.time.slice(0, 2)) + 2;
  const end = `${opts.date.replaceAll("-", "")}T${String(hour).padStart(2, "0")}${opts.time.slice(3)}00`;
  const body = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//NOIRE//Reservation//EN",
    "BEGIN:VEVENT",
    `UID:${opts.date}-${opts.time}@noire.moscow`,
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    "SUMMARY:NOIRÉ Patriarkhie",
    `DESCRIPTION:${opts.guests} guests · ${opts.name}`,
    "LOCATION:Malaya Bronnaya Street\\, Moscow",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([body], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "noire-reservation.ics";
  link.click();
  URL.revokeObjectURL(url);
}

export function BookingExperience() {
  const { locale } = useLocale();
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [guests, setGuests] = useState("4");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState(DetailsEmpty());
  const [errors, setErrors] = useState<Partial<Record<keyof Details, string>>>({});
  const [done, setDone] = useState(false);
  const [code, setCode] = useState("");

  const slots = useMemo(() => (date ? getSlots(date) : null), [date]);

  useEffect(() => {
    if (!date || !time) return;
    if (getSlots(date)[time as TimeSlot] === "unavailable") setTime("");
  }, [date, time]);

  function go(next: number) {
    setDir(next > step ? 1 : -1);
    setStep(next);
  }

  function validateDetails() {
    const next: Partial<Record<keyof Details, string>> = {};
    if (!details.name.trim()) next.name = t(copy.book.required, locale);
    if (!details.phone.trim() || details.phone.replace(/\D/g, "").length < 10) {
      next.phone = t(copy.book.phoneInvalid, locale);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim())) {
      next.email = t(copy.book.emailInvalid, locale);
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onNext() {
    if (step === 2 && !date) return;
    if (step === 3 && !time) return;
    if (step === 4 && !validateDetails()) return;
    if (step === 5) {
      setCode(makeReservationId(date, time));
      setDone(true);
      return;
    }
    go(step + 1);
  }

  if (done) {
    return (
      <div className="success-panel py-10">
        <p className="eyebrow">{venue.name}</p>
        <h2 className="display mt-6 whitespace-pre-line text-[clamp(2.8rem,8vw,6.5rem)] text-ivory">
          {t(copy.pages.reserve.success, locale)}
        </h2>
        <p className="eyebrow mt-8">
          {t(copy.form.date, locale)} · {formatLongDate(date, locale).replace(",", " ·")}
        </p>
        <p className="mt-3 text-[1rem] leading-8 text-stone">
          {t(copy.form.time, locale)} · {time}
          <br />
          {t(copy.form.guests, locale)} · {guests}
        </p>
        <p className="eyebrow mt-8 text-ivory">
          {t(copy.book.number, locale)} {code}
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            variant="solid"
            className="min-h-12 w-full justify-center sm:w-auto"
            onClick={() =>
              downloadIcs({ date, time, guests, name: details.name })
            }
          >
            {t(copy.book.calendar, locale)}
          </Button>
          <MagneticButton href="/">{t(copy.book.home, locale)} →</MagneticButton>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ol className="flex flex-wrap gap-x-4 gap-y-2 text-[0.62rem] tracking-[0.2em] uppercase text-stone">
        {STEPS.map((key, index) => {
          const n = index + 1;
          return (
            <li key={key} className={n === step ? "text-ivory" : "text-stone"}>
              <span className="mr-2">{String(n).padStart(2, "0")}</span>
              {t(copy.book[key], locale)}
              {n < 5 ? <span className="ml-4 text-stone/50">→</span> : null}
            </li>
          );
        })}
      </ol>

      <div key={`${step}-${dir}`} className={dir > 0 ? "step-enter" : "step-enter-back"}>
        {step === 1 ? (
          <fieldset className="mt-12 border-0 p-0">
            <legend className="font-editorial text-[clamp(1.8rem,4vw,3rem)] uppercase text-ivory">
              {t(copy.book.guestsQ, locale)}
            </legend>
            <div className="mt-10 flex flex-wrap gap-3">
              {GUESTS.map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={guests === value}
                  onClick={() => setGuests(value)}
                  className={cn(
                    "min-h-12 min-w-14 border px-5 text-[0.9rem] tracking-[0.16em] transition-colors duration-500",
                    guests === value
                      ? "border-ivory bg-ivory text-noir"
                      : "border-line text-ivory hover:border-ivory",
                  )}
                >
                  {value}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <div className="mt-12">
            <h2 className="font-editorial text-[clamp(1.8rem,4vw,3rem)] uppercase text-ivory">
              {t(copy.book.dateQ, locale)}
            </h2>
            <div className="mt-10">
              <BookingCalendar locale={locale} selected={date} onSelect={setDate} />
            </div>
            {!date ? (
              <p className="mt-6 text-[0.8rem] text-stone" role="status">
                {t(copy.book.required, locale)}
              </p>
            ) : null}
          </div>
        ) : null}

        {step === 3 ? (
          <fieldset className="mt-12 border-0 p-0">
            <legend className="font-editorial text-[clamp(1.8rem,4vw,3rem)] uppercase text-ivory">
              {t(copy.book.timeQ, locale)}
            </legend>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {BOOKING_TIMES.map((slot) => {
                const status = slots?.[slot as TimeSlot] ?? "unavailable";
                const selected = time === slot;
                const unavailable = status === "unavailable";
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={unavailable}
                    aria-pressed={selected}
                    aria-label={`${slot} — ${t(
                      copy.book[unavailable ? "unavailable" : selected ? "selected" : "available"],
                      locale,
                    )}`}
                    onClick={() => setTime(slot)}
                    className={cn(
                      "flex min-h-14 flex-col items-center justify-center border px-4 py-3 text-[1rem] tracking-[0.12em] transition-colors duration-500",
                      unavailable && "border-line text-stone/35 line-through",
                      !unavailable && !selected && "border-line text-ivory hover:border-ivory",
                      selected && "border-ivory bg-ivory text-noir",
                    )}
                  >
                    {slot}
                    <span className="mt-1 text-[0.58rem] tracking-[0.18em] uppercase">
                      {t(
                        copy.book[unavailable ? "unavailable" : selected ? "selected" : "available"],
                        locale,
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        {step === 4 ? (
          <div className="mt-12 max-w-xl">
            <h2 className="font-editorial text-[clamp(1.8rem,4vw,3rem)] uppercase text-ivory">
              {t(copy.book.detailsQ, locale)}
            </h2>
            <div className="mt-10 grid gap-8">
              <Field
                label={t(copy.form.name, locale)}
                value={details.name}
                error={errors.name}
                autoComplete="given-name"
                onChange={(value) => setDetails((d) => ({ ...d, name: value }))}
              />
              <Field
                label={t(copy.form.phone, locale)}
                value={details.phone}
                error={errors.phone}
                autoComplete="tel"
                type="tel"
                onChange={(value) => setDetails((d) => ({ ...d, phone: value }))}
              />
              <Field
                label={t(copy.form.email, locale)}
                value={details.email}
                error={errors.email}
                autoComplete="email"
                type="email"
                onChange={(value) => setDetails((d) => ({ ...d, email: value }))}
              />
              <Field
                label={t(copy.form.note, locale)}
                value={details.note}
                optional
                multiline
                onChange={(value) => setDetails((d) => ({ ...d, note: value }))}
              />
              <label className="flex items-start gap-3 text-[0.88rem] leading-6 text-stone">
                <input
                  type="checkbox"
                  checked={details.updates}
                  onChange={(event) =>
                    setDetails((d) => ({ ...d, updates: event.target.checked }))
                  }
                  className="mt-1 h-4 w-4 accent-ivory"
                />
                <span>{t(copy.book.updates, locale)}</span>
              </label>
            </div>
          </div>
        ) : null}

        {step === 5 ? (
          <div className="mt-12 max-w-lg">
            <h2 className="font-editorial text-[clamp(1.8rem,4vw,3rem)] uppercase text-ivory">
              {t(copy.book.confirmQ, locale)}
            </h2>
            <dl className="mt-10 space-y-4 text-[1.05rem] leading-8 text-stone">
              <div>
                <dt className="sr-only">Venue</dt>
                <dd className="font-editorial text-[1.8rem] uppercase text-ivory">
                  {venue.name}
                </dd>
              </div>
              <div>
                <dt className="sr-only">{t(copy.form.date, locale)}</dt>
                <dd>{formatLongDate(date, locale)}</dd>
              </div>
              <div>
                <dt className="sr-only">{t(copy.form.time, locale)}</dt>
                <dd>{time}</dd>
              </div>
              <div>
                <dt className="sr-only">{t(copy.form.guests, locale)}</dt>
                <dd>
                  {guests} {t(copy.form.guests, locale).toLowerCase()}
                </dd>
              </div>
              <div>
                <dt className="sr-only">{t(copy.form.name, locale)}</dt>
                <dd>{details.name}</dd>
              </div>
              <div>
                <dt className="sr-only">{t(copy.form.phone, locale)}</dt>
                <dd>{details.phone}</dd>
              </div>
            </dl>
          </div>
        ) : null}
      </div>

      <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center">
        {step > 1 ? (
          <Button onClick={() => go(step - 1)}>{t(copy.book.back, locale)}</Button>
        ) : null}
        <Button
          variant="solid"
          className="min-h-12 w-full justify-center sm:w-auto sm:min-w-52"
          onClick={onNext}
          disabled={(step === 2 && !date) || (step === 3 && !time)}
        >
          {step === 5 ? t(copy.book.confirm, locale) : t(copy.book.next, locale)}
        </Button>
      </div>
    </div>
  );
}

function DetailsEmpty(): Details {
  return { ...emptyDetails };
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  optional,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
  multiline?: boolean;
}) {
  const { locale } = useLocale();
  const fieldClass =
    "mt-2 min-h-11 w-full border-b bg-transparent py-3 text-[1rem] text-ivory outline-none placeholder:text-stone/50 focus:border-ivory";
  return (
    <label className="block">
      <span className="eyebrow">
        {label}
        {optional ? ` — ${t(copy.form.optional, locale)}` : ""}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={3}
          className={cn(fieldClass, error ? "border-wine" : "border-line")}
          aria-invalid={Boolean(error)}
        />
      ) : (
        <input
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
          className={cn(fieldClass, error ? "border-wine" : "border-line")}
          aria-invalid={Boolean(error)}
        />
      )}
      {error ? (
        <span className="mt-2 block text-[0.75rem] tracking-[0.08em] text-stone" role="alert">
          — {error}
        </span>
      ) : null}
    </label>
  );
}
