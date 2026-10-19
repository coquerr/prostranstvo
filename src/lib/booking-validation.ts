import { BookingFormData, BookingFormErrors } from "@/types/booking";

const PHONE_REGEX = /^[+]?[\d\s()-]{10,18}$/;

export function validateBookingForm(data: BookingFormData): BookingFormErrors {
  const errors: BookingFormErrors = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Укажите имя (минимум 2 символа)";
  }

  if (!PHONE_REGEX.test(data.phone.trim())) {
    errors.phone = "Укажите корректный номер телефона";
  }

  if (!data.date) {
    errors.date = "Выберите дату";
  } else {
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.date = "Дата не может быть в прошлом";
    }
  }

  if (!data.time) {
    errors.time = "Выберите время";
  }

  if (!data.guests || data.guests < 1) {
    errors.guests = "Укажите количество гостей";
  } else if (data.guests > 20) {
    errors.guests = "Для группы от 20 человек свяжитесь с нами по телефону";
  }

  if (!data.consent) {
    errors.consent = "Необходимо согласие на обработку персональных данных";
  }

  return errors;
}