"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  emptyContact,
  validateContactFields,
  type ContactValues,
  type ContactErrors,
} from "@/lib/contact";
import { serviceOptions } from "@/lib/service-options";

const fields = [
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

export function EnquiryForm() {
  const [values, setValues] = useState(emptyContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState({ error: false, message: "" });
  const lock = useRef(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  function update(name: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus({ error: false, message: "" });
    setSubmissionId(null);
  }
  const inputProps = (name: keyof ContactValues) => ({
    id: `enquiry-${name}`,
    name,
    value: values[name],
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `enquiry-${name}-error` : undefined,
    onChange: (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => update(name, event.target.value),
  });
  const error = (name: keyof ContactValues) =>
    errors[name] && (
      <span className="enquiry-error" id={`enquiry-${name}-error`}>
        {errors[name]}
      </span>
    );
  function focusError(next: ContactErrors) {
    const first = Object.keys(next)[0];
    requestAnimationFrame(() =>
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus(),
    );
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current) return;
    const next = validateContactFields(values);
    setErrors(next);
    if (Object.keys(next).length) {
      focusError(next);
      return;
    }
    const website = new FormData(event.currentTarget).get("website");
    lock.current = true;
    setPending(true);
    setStatus({ error: false, message: "" });
    const requestId = submissionId ?? crypto.randomUUID();
    setSubmissionId(requestId);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website,
          submissionId: requestId,
        }),
        signal: AbortSignal.timeout(25000),
      });
      let result: { message?: string; errors?: ContactErrors };
      try {
        result = await response.json();
      } catch {
        result = {
          message:
            "We could not send your enquiry. Please try again or email us directly.",
        };
      }
      if (!response.ok) {
        setErrors(result.errors ?? {});
        focusError(result.errors ?? {});
        setStatus({
          error: true,
          message:
            result.message ??
            "We could not send your enquiry. Please try again or email us directly.",
        });
      } else {
        setValues(emptyContact);
        setSubmissionId(null);
        setStatus({ error: false, message: result.message ?? "Sent!" });
      }
    } catch {
      setStatus({
        error: true,
        message:
          "We could not confirm delivery. Please try again or email contact@grosbyte.com.",
      });
    } finally {
      lock.current = false;
      setPending(false);
    }
  }
  return (
    <form
      ref={formRef}
      className="enquiry-form"
      onSubmit={submit}
      noValidate
      aria-busy={pending}
    >
      <h2>Tell us about your project.</h2>
      <p>Share a little context. Fields marked optional can be left blank.</p>
      <fieldset disabled={pending}>
        <legend className="sr-only">Project enquiry</legend>
        <div className="enquiry-fields">
          {fields.map((field) => (
            <div className="enquiry-field" key={field.name}>
              <label htmlFor={`enquiry-${field.name}`}>{field.label}</label>
              <input
                {...inputProps(field.name)}
                type={field.type}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                maxLength={field.max}
                required={field.name === "name" || field.name === "email"}
              />
              {error(field.name)}
            </div>
          ))}
          <div className="enquiry-field enquiry-wide">
            <label htmlFor="enquiry-service">Service interested in</label>
            <select {...inputProps("service")} required>
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            {error("service")}
          </div>
          <div className="enquiry-field enquiry-wide">
            <label htmlFor="enquiry-message">Project description</label>
            <textarea
              {...inputProps("message")}
              rows={6}
              maxLength={5000}
              required
              placeholder="Tell us about what you want to build or improve, key goals, and any timeline or tech preferences..."
            />
            {error("message")}
          </div>
          <div className="enquiry-field enquiry-wide">
            <label htmlFor="enquiry-budget">Budget (optional)</label>
            <input
              {...inputProps("budget")}
              maxLength={100}
              placeholder="e.g. $5,000 – $10,000, NPR 500k – 1M, or flexible"
            />
            {error("budget")}
          </div>
        </div>
        <div hidden aria-hidden="true">
          <label htmlFor="enquiry-website">Leave this field empty</label>
          <input
            id="enquiry-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <p className="enquiry-note">
          We use these details to respond to your enquiry. Please don’t include
          passwords, payment details, or other sensitive information.
        </p>
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? "Sending enquiry…" : "Send enquiry"}
        </Button>
      </fieldset>
      <p
        role={status.error ? "alert" : "status"}
        className={status.error ? "enquiry-error" : "enquiry-status"}
      >
        {status.message}
      </p>
    </form>
  );
}
