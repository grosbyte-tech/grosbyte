"use client";

import { useRef, useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, Users } from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Reveal } from "@/components/motion/reveal";
import { socialLinks } from "@/lib/site-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });
  const submissionLock = useRef(false);
  const submissionId = useRef<string | null>(null);

  const update = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setStatus({ type: "idle", message: "" });
    submissionId.current = null;
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionLock.current) return;

    const nextErrors: ContactFormErrors = {};
    if (values.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.service) nextErrors.service = "Please select a service.";
    if (values.message.trim().length < 10) {
      nextErrors.message = "Please add at least 10 characters.";
    }
    setErrors(nextErrors);
    setStatus({ type: "idle", message: "" });

    if (Object.keys(nextErrors).length > 0) return;

    submissionLock.current = true;
    setIsSubmitting(true);
    submissionId.current ??= crypto.randomUUID();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          submissionId: submissionId.current,
        }),
      });
      const result = (await response.json()) as {
        message?: string;
        errors?: ContactFormErrors;
      };

      if (!response.ok) {
        setErrors(result.errors ?? {});
        setStatus({
          type: "error",
          message:
            result.message ??
            "We couldn’t send your enquiry. Please try again shortly.",
        });
        return;
      }

      setValues(initialValues);
      setErrors({});
      submissionId.current = null;
      setStatus({
        type: "success",
        message:
          result.message ??
          "Thank you! Your enquiry has been sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "We couldn’t send your enquiry. Please check your connection and try again.",
      });
    } finally {
      submissionLock.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <Reveal className="section-heading section-heading-centered contact-heading">
          <p className="eyebrow">Contact Us</p>
          <h2>Let&apos;s discuss what you want to build or improve.</h2>
          <p>
            Share your project, business challenge, or digital growth goal.
            We&apos;ll review the details and discuss the next step.
          </p>
        </Reveal>
        <div className="contact-layout">
          <Reveal className="contact-info">
            <div className="contact-panel-heading">
              <h3>Contact Details</h3>
              <p>Reach out directly or send your enquiry using the form.</p>
            </div>
            <div className="contact-details">
              <div>
                <MapPin aria-hidden="true" />
                <span>
                  <small>Location</small>
                  Kathmandu, Nepal
                </span>
              </div>
              <div>
                <Users aria-hidden="true" />
                <span>
                  <small>Working model</small>
                  Available for remote collaboration
                </span>
              </div>
              <a href="mailto:contact@grosbyte.com">
                <Mail aria-hidden="true" />
                <span>
                  <small>Email</small>
                  contact@grosbyte.com
                </span>
              </a>
              <a href="tel:+9779869793130">
                <Phone aria-hidden="true" />
                <span>
                  <small>Phone</small>
                  +977 9869793130
                </span>
              </a>
            </div>
            <div className="contact-social">
              <h4>Follow Grosbyte</h4>
              <div className="contact-social-list">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Grosbyte on Instagram"
                >
                  <FaInstagram />
                  <span>
                    <small>Instagram</small>
                    grosbyte.tech
                  </span>
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Grosbyte on Facebook"
                >
                  <FaFacebookF />
                  <span>
                    <small>Facebook</small>
                    Grosbyte Technologies
                  </span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Grosbyte on LinkedIn"
                >
                  <FaLinkedinIn />
                  <span>
                    <small>LinkedIn</small>
                    Grosbyte Technologies
                  </span>
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Grosbyte on GitHub"
                >
                  <FaGithub />
                  <span>
                    <small>GitHub</small>
                    grosbyte-tech
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="contact-form" noValidate onSubmit={handleSubmit}>
              <div className="form-heading">
                <h3>Send an Enquiry</h3>
                <p>
                  Tell us briefly about your project, service requirement, or
                  business goal.
                </p>
              </div>
              <div className="form-grid">
                <FormField
                  id="name"
                  label="Name"
                  value={values.name}
                  error={errors.name}
                  onChange={(value) => update("name", value)}
                  placeholder="Your name"
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  onChange={(value) => update("email", value)}
                  placeholder="you@example.com"
                />
                <FormField
                  id="phone"
                  label="Phone"
                  type="tel"
                  value={values.phone}
                  error={errors.phone}
                  onChange={(value) => update("phone", value)}
                  required={false}
                  placeholder="e.g. +977 9869000000"
                />
                <div className="form-field">
                  <label htmlFor="service">Service</label>
                  <Select
                    value={values.service}
                    onValueChange={(value) => update("service", value)}
                  >
                    <SelectTrigger
                      id="service"
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={
                        errors.service ? "service-error" : undefined
                      }
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Custom Software Development">
                        Custom Software Development
                      </SelectItem>
                      <SelectItem value="Web Platforms and E-commerce">
                        Web Platforms and E-commerce
                      </SelectItem>
                      <SelectItem value="Mobile Application Development">
                        Mobile Application Development
                      </SelectItem>
                      <SelectItem value="AI and Automation Solutions">
                        AI and Automation Solutions
                      </SelectItem>
                      <SelectItem value="UI/UX and Product Design">
                        UI/UX and Product Design
                      </SelectItem>
                      <SelectItem value="Digital Marketing and Brand Growth">
                        Digital Marketing and Brand Growth
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <span className="field-error" id="service-error">
                      {errors.service}
                    </span>
                  )}
                </div>
                <div className="form-field form-field-full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={values.message}
                    onChange={(event) => update("message", event.target.value)}
                    placeholder="Tell us about your project or goal."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <span className="field-error" id="message-error">
                      {errors.message}
                    </span>
                  )}
                </div>
              </div>
              <button
                className="button button-primary submit-button"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}{" "}
                <Send aria-hidden="true" />
              </button>
              {status.type !== "idle" && (
                <p
                  className={`form-status form-status-${status.type}`}
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormField({
  id,
  label,
  type = "text",
  value,
  error,
  onChange,
  required = true,
  placeholder,
}: {
  id: keyof ContactFormValues;
  label: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span className="field-error" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}
