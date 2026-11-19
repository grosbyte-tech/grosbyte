"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { Breadcrumbs } from "@/components/editorial/page-shell";
import { useTranslation } from "@/contexts/language-context";
import { socialLinks } from "@/lib/site-data";
import {
  RealInstagramIcon,
  RealFacebookIcon,
  RealLinkedinIcon,
  RealGithubIcon,
} from "@/components/ui/brand-icons";

const socialMeta: Record<
  string,
  { label: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }
> = {
  instagram: { label: "Instagram", Icon: RealInstagramIcon },
  facebook: { label: "Facebook", Icon: RealFacebookIcon },
  linkedin: { label: "LinkedIn", Icon: RealLinkedinIcon },
  github: { label: "GitHub", Icon: RealGithubIcon },
};

export function ContactPageContent() {
  const { t } = useTranslation();

  return (
    <div className="container editorial-container">
      <header className="editorial-hero">
        <Breadcrumbs current={t("contactPage.breadcrumb") || "Contact"} />
        <div className="editorial-hero-grid">
          <div className="editorial-hero-content">
            <p className="eyebrow">
              {t("contactPage.eyebrow") || "Contact Grosbyte"}
            </p>
            <h1>
              {t("contactPage.title") || "What would you like"}
              <br />
              {t("contactPage.titlePrefix") || "to move "}
              <span className="highlight-blue">
                {t("contactPage.titleHighlight") || "forward"}
              </span>
              {t("contactPage.titleSuffix") || "?"}
            </h1>
            <p className="editorial-lead">
              {t("contactPage.lead") ||
                "A new product, a better workflow, or a clearer digital presence. Tell us where you are and what you want to improve."}
            </p>
          </div>
          <div className="editorial-hero-media">
            <div className="contact-hero-image-wrap">
              <Image
                src="/contact-team.jpg"
                alt={
                  t("contactPage.imageAlt") ||
                  "Grosbyte Technology team members collaborating with a tablet and stylus in the office"
                }
                fill
                priority
                sizes="(max-width: 768px) 100vw, 360px"
                className="editorial-hero-image"
                style={{ objectPosition: "center 18%" }}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="enquiry-layout">
        <aside className="enquiry-details">
          <h2>{t("contactPage.startTitle") || "Start a conversation."}</h2>
          <p>
            {t("contactPage.startText") ||
              "You don’t need a complete specification. A description of the problem and the people it affects is a useful starting point."}
          </p>

          <div className="contact-methods">
            <a
              href="mailto:contact@grosbyte.com"
              className="contact-method-card"
              aria-label="Email contact@grosbyte.com"
            >
              <div className="contact-method-icon" aria-hidden="true">
                <Mail className="w-5 h-5" />
              </div>
              <div className="contact-method-info">
                <span className="contact-method-label">
                  {t("contactPage.emailLabel") || "Email us directly"}
                </span>
                <span className="contact-method-value">
                  contact@grosbyte.com
                </span>
              </div>
              <ArrowUpRight
                className="contact-method-arrow"
                aria-hidden="true"
              />
            </a>

            <a
              href="tel:+9779869793130"
              className="contact-method-card"
              aria-label="Call +977 9869793130"
            >
              <div className="contact-method-icon" aria-hidden="true">
                <Phone className="w-5 h-5" />
              </div>
              <div className="contact-method-info">
                <span className="contact-method-label">
                  {t("contactPage.callLabel") || "Call our team"}
                </span>
                <span className="contact-method-value">+977 9869793130</span>
              </div>
              <ArrowUpRight
                className="contact-method-arrow"
                aria-hidden="true"
              />
            </a>

            <div className="contact-method-card contact-method-static">
              <div className="contact-method-icon" aria-hidden="true">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="contact-method-info">
                <span className="contact-method-label">
                  {t("contactPage.locationLabel") || "Office location"}
                </span>
                <span className="contact-method-value">
                  {t("contactPage.locationValue") || "Kathmandu, Nepal"}
                </span>
              </div>
              <span className="contact-method-badge">UTC+5:45</span>
            </div>
          </div>

          <div className="contact-social-section">
            <span className="contact-social-label">
              {t("contactPage.socialLabel") || "Connect with us"}
            </span>
            <nav className="contact-social-pills" aria-label="Social media">
              {Object.entries(socialLinks).map(([name, href]) => {
                const meta = socialMeta[name];
                if (!meta) return null;
                const { label, Icon } = meta;
                return (
                  <a
                    href={href}
                    key={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-pill"
                  >
                    <Icon
                      width={18}
                      height={18}
                      className="contact-social-pill-icon"
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 contact-social-pill-arrow"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="contact-next-card">
            <h3>{t("contactPage.nextCardTitle") || "What happens next?"}</h3>
            <p>
              {t("contactPage.nextCardText") ||
                "We review your enquiry, ask any questions needed to understand the scope, and discuss a practical next step with you."}
            </p>
          </div>
        </aside>
        <EnquiryForm />
      </div>
    </div>
  );
}
