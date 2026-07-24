"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { socialLinks } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  goal: string;
  date: string;
  time: string;
  message: string;
};
const initial: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  goal: "",
  date: "",
  time: "",
  message: "",
};

export function ContactSection() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});
  const [notice, setNotice] = useState(false);
  const update = (key: keyof FormValues, value: string) =>
    setValues((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Connect this form to a secure server action using Resend.
    const next: typeof errors = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid business email.";
    if (!values.service) next.service = "Please select a service.";
    if (!values.goal.trim())
      next.goal = "Please tell us what you want to build or grow.";
    if (!values.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    setNotice(Object.keys(next).length === 0);
  };
  const field = (
    id: keyof FormValues,
    label: string,
    required = false,
    type = "text",
    placeholder = "",
  ) => (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {required && <span> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={values[id]}
        onChange={(e) => update(id, e.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(errors[id])}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
      />
      {errors[id] && (
        <p id={`${id}-error`} className="field-error">
          {errors[id]}
        </p>
      )}
    </div>
  );
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <div className="contact-heading">
            <p className="eyebrow">Start a conversation</p>
            <h2>Let&apos;s make the next move count.</h2>
            <p>
              Tell us where you are headed. We&apos;ll help clarify the right
              product, platform, presence, or growth strategy to get there.
            </p>
          </div>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-info">
            <div>
              <h3>Grosbyte Technologies</h3>
              <p>
                Working remotely with businesses and teams from Kathmandu,
                Nepal.
              </p>
            </div>
            <address>
              <a href="mailto:contact@grosbyte.com">
                <Mail aria-hidden="true" />
                <span>
                  <small>Primary email</small>contact@grosbyte.com
                </span>
              </a>
              <a href="mailto:info@grosbyte.com">
                <Mail aria-hidden="true" />
                <span>
                  <small>General email</small>info@grosbyte.com
                </span>
              </a>
              <a href="tel:+9779869793130">
                <Phone aria-hidden="true" />
                <span>
                  <small>Phone</small>+977 9869793130
                </span>
              </a>
              <div>
                <MapPin aria-hidden="true" />
                <span>
                  <small>Location</small>Kathmandu, Nepal
                </span>
              </div>
            </address>
            <div className="social-row">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="consult-card">
              <CalendarDays aria-hidden="true" />
              <div>
                <strong>Choose a preferred consultation time</strong>
                <p>
                  Share a date and time that suits you. We&apos;ll use it to
                  coordinate the conversation.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form className="contact-form" noValidate onSubmit={submit}>
              <div className="form-grid">
                {field("name", "Full name", true, "text", "Your full name")}
                {field(
                  "email",
                  "Business email",
                  true,
                  "email",
                  "you@company.com",
                )}
                {field("phone", "Phone number", false, "tel", "+977 ...")}
                {field(
                  "company",
                  "Company or brand",
                  false,
                  "text",
                  "Company name",
                )}
                <div className="form-field form-field--full">
                  <label htmlFor="service">
                    Service of interest <span>*</span>
                  </label>
                  <select
                    id="service"
                    value={values.service}
                    onChange={(e) => update("service", e.target.value)}
                    aria-invalid={Boolean(errors.service)}
                  >
                    <option value="">Select a service</option>
                    {[
                      "Custom Software",
                      "Web Application",
                      "Mobile Application",
                      "Website Development",
                      "AI Integration",
                      "Digital Marketing",
                      "Digital Branding",
                      "Not Sure Yet",
                    ].map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="field-error">{errors.service}</p>
                  )}
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="goal">
                    Project or marketing goal <span>*</span>
                  </label>
                  <textarea
                    id="goal"
                    rows={3}
                    value={values.goal}
                    onChange={(e) => update("goal", e.target.value)}
                    placeholder="What should this work help your business achieve?"
                    aria-invalid={Boolean(errors.goal)}
                  />
                  {errors.goal && <p className="field-error">{errors.goal}</p>}
                </div>
                <div className="form-field icon-field">
                  <label htmlFor="date">Preferred date</label>
                  <div>
                    <CalendarDays />
                    <input
                      id="date"
                      type="date"
                      value={values.date}
                      onChange={(e) => update("date", e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-field icon-field">
                  <label htmlFor="time">Preferred time</label>
                  <div>
                    <Clock3 />
                    <input
                      id="time"
                      type="time"
                      value={values.time}
                      onChange={(e) => update("time", e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="message">
                    Message <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Add any useful context, questions, or requirements."
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="field-error">{errors.message}</p>
                  )}
                </div>
              </div>
              <button className="submit-button" type="submit">
                Review inquiry <ArrowRight aria-hidden="true" />
              </button>
              {notice && (
                <p className="form-notice" role="status">
                  Form submission will be connected shortly. You can contact us
                  directly at{" "}
                  <a href="mailto:contact@grosbyte.com">contact@grosbyte.com</a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
