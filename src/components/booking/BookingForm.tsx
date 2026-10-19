"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { BookingFormData, BookingFormErrors } from "@/types/booking";
import { validateBookingForm } from "@/lib/booking-validation";
import { submitBooking } from "@/lib/booking-submit";

const INITIAL_STATE: BookingFormData = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: 2,
  comment: "",
  consent: false,
};

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField<K extends keyof BookingFormData>(
    field: K,
    value: BookingFormData[K]
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const validationErrors = validateBookingForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");
    const result = await submitBooking(formData);
    setStatus("success");
    setStatusMessage(result.message);
    setFormData(INITIAL_STATE);
  }

  const inputClass =
    "w-full border border-border/60 bg-transparent px-4 py-3 text-sm text-beige placeholder:text-muted/60 outline-none transition-colors focus:border-gold";
  const labelClass = "text-xs uppercase tracking-[0.2em] text-muted";

  if (status === "success") {
    return (
      <div className="border border-gold/40 bg-surface/40 px-6 py-12 text-center">
        <p className="text-lg text-beige">{statusMessage}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 border border-gold/50 px-8 py-3 text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:border-gold hover:bg-gold/10"
        >
          Забронировать ещё раз
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Имя
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Ваше имя"
            className={inputClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="text-xs text-red-400">
              {errors.name}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Телефон
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="+7 (___) ___-__-__"
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <span id="phone-error" className="text-xs text-red-400">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="date" className={labelClass}>
            Дата
          </label>
          <input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => updateField("date", e.target.value)}
            className={`${inputClass} [color-scheme:dark]`}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "date-error" : undefined}
          />
          {errors.date && (
            <span id="date-error" className="text-xs text-red-400">
              {errors.date}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="time" className={labelClass}>
            Время
          </label>
          <input
            id="time"
            type="time"
            value={formData.time}
            onChange={(e) => updateField("time", e.target.value)}
            className={`${inputClass} [color-scheme:dark]`}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? "time-error" : undefined}
          />
          {errors.time && (
            <span id="time-error" className="text-xs text-red-400">
              {errors.time}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="guests" className={labelClass}>
            Количество гостей
          </label>
          <input
            id="guests"
            type="number"
            min={1}
            max={20}
            value={formData.guests}
            onChange={(e) => updateField("guests", Number(e.target.value))}
            className={inputClass}
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? "guests-error" : undefined}
          />
          {errors.guests && (
            <span id="guests-error" className="text-xs text-red-400">
              {errors.guests}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="comment" className={labelClass}>
          Комментарий
        </label>
        <textarea
          id="comment"
          rows={3}
          value={formData.comment}
          onChange={(e) => updateField("comment", e.target.value)}
          placeholder="Пожелания к бронированию (необязательно)"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => updateField("consent", e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-gold"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>
            Я согласен(на) на{" "}
            <Link
              href="/legal/consent"
              className="text-gold underline underline-offset-4"
            >
              обработку персональных данных
            </Link>{" "}
            в соответствии с{" "}
            <Link
              href="/legal/privacy-policy"
              className="text-gold underline underline-offset-4"
            >
              Политикой обработки персональных данных
            </Link>
          </span>
        </label>
        {errors.consent && (
          <span id="consent-error" className="text-xs text-red-400">
            {errors.consent}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 border border-transparent bg-gold px-10 py-3 text-xs uppercase tracking-[0.3em] text-background transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {status === "loading" ? "Отправка..." : "Забронировать стол"}
      </button>
    </form>
  );
}