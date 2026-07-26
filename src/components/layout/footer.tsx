import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { navigation, socialLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-identity">
          <a className="brand" href="#home">
            <span className="brand-logo">
              <Image src="/logo.png" alt="" width={40} height={24} />
            </span>
            <span>Grosbyte Technologies</span>
          </a>
          <p>
            Technology, design, and digital growth built around your business.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <a href="mailto:contact@grosbyte.com">contact@grosbyte.com</a>
          <a href="tel:+9779869793130">+977 9869793130</a>
          <div className="footer-social">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Grosbyte Technologies</span>
      </div>
    </footer>
  );
}
