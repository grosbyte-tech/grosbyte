import { serviceOptions } from "./service-options";

export type ContactValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  budget: string;
};
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
export const emptyContact: ContactValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  budget: "",
};
export function validateContactFields(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (
    values.name.trim().length < 2 ||
    values.name.length > 100 ||
    /[\r\n]/.test(values.name)
  )
    errors.name = "Enter your full name (2–100 characters).";
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) ||
    values.email.length > 254
  )
    errors.email = "Enter a valid email address.";
  if (values.phone && !/^[+\d\s().-]{5,30}$/.test(values.phone))
    errors.phone = "Enter a valid phone number, or leave this blank.";
  if (values.company.length > 150)
    errors.company = "Use no more than 150 characters.";
  if (!serviceOptions.some((option) => option === values.service))
    errors.service = "Select a service.";
  if (values.message.trim().length < 10 || values.message.length > 5000)
    errors.message = "Describe your project in 10–5,000 characters.";
  if (values.budget.length > 100)
    errors.budget = "Use no more than 100 characters.";
  return errors;
}
