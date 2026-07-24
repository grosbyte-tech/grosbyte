import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { navigation, socialLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-logo">
                <Image
                  src="/logo.png"
                  alt="Grosbyte Technologies logo"
                  width={52}
                  height={29}
                />
              </span>
              <span className="brand-name">Grosbyte Technologies</span>
            </a>
            <p>
              Software, digital experiences, and growth strategies built to move
              businesses forward.
            </p>
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
          </div>
          <div className="footer-column">
            <h3>Navigate</h3>
            {navigation.map((x) => (
              <a key={x.href} href={x.href}>
                {x.label}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <a href="#services">Software &amp; applications</a>
            <a href="#services">Websites &amp; web apps</a>
            <a href="#services">Marketing &amp; branding</a>
            <a href="#services">AI integration</a>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <a href="mailto:contact@grosbyte.com">contact@grosbyte.com</a>
            <a href="tel:+9779869793130">+977 9869793130</a>
            <span>Kathmandu, Nepal</span>
            <span>Working remotely</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Grosbyte Technologies</span>
          <span>Kathmandu, Nepal · Working remotely</span>
        </div>
      </div>
    </footer>
  );
}
