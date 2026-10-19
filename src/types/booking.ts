export interface BookingFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  comment: string;
  consent: boolean;
}

export type BookingFormErrors = Partial<Record<keyof BookingFormData, string>>;

export interface BookingSubmitResult {
  success: boolean;
  message: string;
}