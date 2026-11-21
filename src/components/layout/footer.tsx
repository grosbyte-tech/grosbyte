"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa6";
import { socialLinks } from "@/lib/site-data";
import { featuredServices } from "@/components/layout/mega-menu/mega-menu-data";
import "./footer.css";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Contact Us", href: "/contact" },
];

const resourceLinks = [{ label: "Blogs", href: "/blogs" }];

// The 6 core services directly from the Mega Menu
const serviceLinks = featuredServices.map((service) => ({
  label: service.title,
  href: service.href,
}));

const industryLinks = [
  { label: "Healthcare", href: "/custom-software-development" },
  { label: "Fin-tech", href: "/custom-software-development" },
  { label: "Ed-tech", href: "/custom-software-development" },
  {
    label: "E-commerce & Retail",
    href: "/services/website-ecommerce-development",
  },
  { label: "Logistics & Supply Chain", href: "/custom-software-development" },
  { label: "Real Estate & Construction", href: "/custom-software-development" },
];

const socialMediaLinks = [
  {
    label: "Instagram",
    href: socialLinks.instagram,
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: socialLinks.facebook,
    icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: socialLinks.github,
    icon: FaGithub,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-container">
        {/* Top Bar: Brand Logo & Phone Contact */}
        <div className="footer-top-bar">
          <Link
            href="/"
            className="footer-brand"
            aria-label="Grosbyte Technology home"
          >
            <span className="footer-brand-logo">
              <Image
                src="/images/brand/logo-removebg.png"
                alt="Grosbyte Technology"
                width={32}
                height={32}
              />
            </span>
            <span className="footer-brand-name">Grosbyte Technology</span>
          </Link>

          <div className="footer-top-contact">
            <span>Get in touch</span>
            <a
              href="tel:+9779869793130"
              className="footer-phone-link"
              aria-label="Phone: +977 9869793130"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>+977 9869793130</span>
            </a>
            <span className="footer-hours-label">
              Mon-Fri during business hours
            </span>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Company & Resources (Blogs only, careers removed) */}
          <div className="footer-col">
            <div className="footer-section-group">
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-link-list">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section-group">
              <h3 className="footer-heading">Resources</h3>
              <ul className="footer-link-list">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: 6 Core Services from Mega Menu */}
          <div className="footer-col">
            <div className="footer-section-group">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-link-list">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Industries We Work With */}
          <div className="footer-col">
            <div className="footer-section-group">
              <h3 className="footer-heading">Industries We Work With</h3>
              <ul className="footer-link-list">
                {industryLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Connect with Us (Instagram, Facebook, LinkedIn, GitHub) */}
          <div className="footer-col">
            <div className="footer-section-group">
              <h3 className="footer-heading">Connect with Us</h3>
              <ul className="footer-link-list">
                {socialMediaLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        aria-label={item.label}
                      >
                        <Icon
                          className="footer-social-icon"
                          aria-hidden="true"
                        />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Oversized Interactive Wordmark */}
        <div className="footer-wordmark-wrapper">
          <FooterWordmark />
        </div>

        {/* Bottom Bar: Copyright & Legal Policy Links */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {currentYear} Grosbyte Technology. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <Link href="/contact" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span className="footer-legal-dot" aria-hidden="true">
              •
            </span>
            <Link href="/contact" className="footer-legal-link">
              Data Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Oversized "grosbyte" wordmark at the foot of the page. The letters sit
 * almost invisible; a pink → violet glow lights them up under the cursor and
 * drifts across them on its own when nobody is hovering (.footer-wordmark in
 * footer.css).
 */
export function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);

  const track = (e: React.PointerEvent) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--wm-x", `${e.clientX - rect.left}px`);
    node.style.setProperty("--wm-y", `${e.clientY - rect.top}px`);
    node.dataset.active = "";
  };

  const release = () => {
    const node = ref.current;
    if (!node) return;
    node.style.removeProperty("--wm-x");
    node.style.removeProperty("--wm-y");
    delete node.dataset.active;
  };

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onPointerMove={track}
      onPointerLeave={release}
      className="footer-wordmark relative w-full max-w-full text-center leading-none font-black tracking-[-0.05em] select-none overflow-hidden"
    >
      <span className="block text-white/[0.06] max-w-full truncate">Grosbyte</span>
      <span className="footer-wordmark-lit absolute inset-0 max-w-full truncate">Grosbyte</span>
    </div>
  );
}
