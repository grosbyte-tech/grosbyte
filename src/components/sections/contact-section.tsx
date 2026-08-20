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
import { useTranslation } from "@/contexts/language-context";

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

const serviceKeys: Record<string, string> = {
  "Custom Software Development": "customSoftware",
  "Web Platforms and E-commerce": "webPlatforms",
  "Mobile Application Development": "mobileApp",
  "AI Automation and Data Analysis": "aiAutomation",
  "UI/UX and Product Design": "uiuxDesign",
  "Digital Marketing and Brand Growth": "digitalMarketing",
};

const selectOptions = [
  "Custom Software Development",
  "Web Platforms and E-commerce",
  "Mobile Application Development",
  "AI Automation and Data Analysis",
  "UI/UX and Product Design",
  "Digital Marketing and Brand Growth",
];

export function ContactSection() {
  const { t } = useTranslation();
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
      nextErrors.name = t("contact.validation.name");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = t("contact.validation.email");
    }
    if (!values.service) {
      nextErrors.service = t("contact.validation.service");
    }
    if (values.message.trim().length < 10) {
      nextErrors.message = t("contact.validation.message");
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
            t("contact.status.errorDefault"),
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
          t("contact.status.success"),
      });
    } catch {
      setStatus({
        type: "error",
        message:
          t("contact.status.errorConnection"),
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
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.description")}</p>
        </Reveal>
        <div className="contact-layout">
          <Reveal className="contact-info">
            <div className="contact-panel-heading">
              <h3>{t("contact.details.title")}</h3>
              <p>{t("contact.details.subtitle")}</p>
            </div>
            <div className="contact-details">
              <div>
                <MapPin aria-hidden="true" />
                <span>
                  <small>{t("contact.details.location")}</small>
                  {t("contact.details.nepal")}
                </span>
              </div>
              <div>
                <Users aria-hidden="true" />
                <span>
                  <small>{t("contact.details.workingModel")}</small>
                  {t("contact.details.remote")}
                </span>
              </div>
              <a href="mailto:contact@grosbyte.com">
                <Mail aria-hidden="true" />
                <span>
                  <small>{t("contact.details.email")}</small>
                  contact@grosbyte.com
                </span>
              </a>
              <a href="tel:+9779869793130">
                <Phone aria-hidden="true" />
                <span>
                  <small>{t("contact.details.phone")}</small>
                  +977 9869793130
                </span>
              </a>
            </div>
            <div className="contact-social">
              <h4>{t("contact.details.follow")}</h4>
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
                <h3>{t("contact.form.title")}</h3>
                <p>{t("contact.form.description")}</p>
              </div>
              <div className="form-grid">
                <FormField
                  id="name"
                  label={t("contact.form.nameLabel")}
                  value={values.name}
                  error={errors.name}
                  onChange={(value) => update("name", value)}
                  placeholder={t("contact.form.namePlaceholder")}
                />
                <FormField
                  id="email"
                  label={t("contact.form.emailLabel")}
                  type="email"
                  value={values.email}
                  error={errors.email}
                  onChange={(value) => update("email", value)}
                  placeholder={t("contact.form.emailPlaceholder")}
                />
                <FormField
                  id="phone"
                  label={t("contact.form.phoneLabel")}
                  type="tel"
                  value={values.phone}
                  error={errors.phone}
                  onChange={(value) => update("phone", value)}
                  required={false}
                  placeholder={t("contact.form.phonePlaceholder")}
                />
                <div className="form-field">
                  <label htmlFor="service">{t("contact.form.serviceLabel")}</label>
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
                      <SelectValue placeholder={t("contact.form.servicePlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      {selectOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {t(`services.list.${serviceKeys[opt]}.title`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <span className="field-error" id="service-error">
                      {errors.service}
                    </span>
                  )}
                </div>
                <div className="form-field form-field-full">
                  <label htmlFor="message">{t("contact.form.messageLabel")}</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={values.message}
                    onChange={(event) => update("message", event.target.value)}
                    placeholder={t("contact.form.messagePlaceholder")}
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
                {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}{" "}
                <Send aria-hidden="true" />
              </button>
              {status.type !== "idle" && (
                <p
                  className={`form-status form-status-${status.type}`}
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                  style={{
                    color: status.type === "success" ? "#10b981" : "#ef4444",
                    fontSize: "0.875rem",
                    marginTop: "0.75rem",
                  }}
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
