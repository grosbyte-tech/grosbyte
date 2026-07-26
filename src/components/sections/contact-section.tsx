"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, Users } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Reveal } from "@/components/motion/reveal";
import { socialLinks } from "@/lib/site-data";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

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

  const update = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Connect this form to a secure server action and Resend.
    const nextErrors: ContactFormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.service) nextErrors.service = "Please select a service.";
    if (!values.message.trim()) {
      nextErrors.message = "Please tell us a little about your enquiry.";
    }
    setErrors(nextErrors);
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
              <div className="social-links">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Grosbyte on Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Grosbyte on Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Grosbyte on LinkedIn"
                >
                  <FaLinkedinIn />
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
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  onChange={(value) => update("email", value)}
                />
                <FormField
                  id="phone"
                  label="Phone"
                  type="tel"
                  value={values.phone}
                  error={errors.phone}
                  onChange={(value) => update("phone", value)}
                  required={false}
                />
                <div className="form-field">
                  <label htmlFor="service">Service</label>
                  <select
                    id="service"
                    value={values.service}
                    onChange={(event) => update("service", event.target.value)}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={
                      errors.service ? "service-error" : undefined
                    }
                  >
                    <option value="">Select a service</option>
                    <option>Custom Software Development</option>
                    <option>Web Platforms and E-commerce</option>
                    <option>Mobile Application Development</option>
                    <option>AI and Automation Solutions</option>
                    <option>UI/UX and Product Design</option>
                    <option>Digital Marketing and Brand Growth</option>
                  </select>
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
              >
                Send Enquiry <Send aria-hidden="true" />
              </button>
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
}: {
  id: keyof ContactFormValues;
  label: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  required?: boolean;
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
