/**
 * Application environment configuration and runtime validation.
 * Uses plain TypeScript assertions (no external runtime schema dependencies).
 */

export interface ServerEnv {
  RESEND_API_KEY?: string;
  EMAIL_FROM?: string;
  CONTACT_EMAIL?: string;
  NODE_ENV: "development" | "production" | "test";
}

export interface ClientEnv {
  NEXT_PUBLIC_SITE_URL: string;
  NEXT_PUBLIC_CDN_URL?: string;
}

export function validateContactServerEnv(): {
  apiKey: string;
  from: string;
  contactEmail: string;
} {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !from || !contactEmail) {
    const missing: string[] = [];
    if (!apiKey) missing.push("RESEND_API_KEY");
    if (!from) missing.push("EMAIL_FROM");
    if (!contactEmail) missing.push("CONTACT_EMAIL");
    throw new Error(
      `Missing required contact email configuration: ${missing.join(", ")}`,
    );
  }

  return { apiKey, from, contactEmail };
}

export const clientEnv: ClientEnv = {
  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL || "https://grosbyte.com",
  NEXT_PUBLIC_CDN_URL: process.env.NEXT_PUBLIC_CDN_URL,
};
