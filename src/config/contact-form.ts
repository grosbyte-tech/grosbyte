export interface ContactFormFieldConfig {
  name: "name" | "email" | "phone" | "company";
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  max: number;
}

export const CONTACT_FORM_FIELDS: readonly ContactFormFieldConfig[] = [
  {
    name: "name",
    label: "Full name",
    type: "text",
    autoComplete: "name",
    placeholder: "Your full name",
    max: 100,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    placeholder: "name@company.com",
    max: 254,
  },
  {
    name: "phone",
    label: "Phone (optional)",
    type: "tel",
    autoComplete: "tel",
    placeholder: "e.g. +977 9800000000",
    max: 30,
  },
  {
    name: "company",
    label: "Company (optional)",
    type: "text",
    autoComplete: "organization",
    placeholder: "e.g. Acme Corporation",
    max: 150,
  },
] as const;
