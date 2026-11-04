"use client";

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
  { label: "Healthcare", href: "/services" },
  { label: "Fin-tech", href: "/services" },
  { label: "Ed-tech", href: "/services" },
  { label: "E-commerce & Retail", href: "/services" },
  { label: "Logistics & Supply Chain", href: "/services" },
  { label: "Real Estate & Construction", href: "/services" },
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
                src="/icons/logo-removebg.png"
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
