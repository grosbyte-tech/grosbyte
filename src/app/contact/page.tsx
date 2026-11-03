import { EnquiryForm } from "@/components/contact/enquiry-form";
import { PageShell, Breadcrumbs } from "@/components/editorial/page-shell";
import { serviceMetadata } from "@/components/services/service-ui";
import { socialLinks } from "@/lib/site-data";

export const metadata = serviceMetadata(
  "Contact Us",
  "Talk to Grosbyte about software, websites, business automation, or digital marketing. Share your project requirements with our team in Kathmandu, Nepal.",
  "/contact",
);
export default function ContactPage() {
  return (
    <PageShell>
      <div className="container editorial-container">
        <header className="editorial-hero">
          <Breadcrumbs current="Contact" />
          <p className="eyebrow">Contact Grosbyte</p>
          <h1>
            What would you like
            <br />
            to move forward?
          </h1>
          <p className="editorial-lead">
            A new product, a better workflow, or a clearer digital presence.
            Tell us where you are and what you want to improve.
          </p>
        </header>
        <div className="enquiry-layout">
          <aside className="enquiry-details">
            <h2>Start a conversation.</h2>
            <p>
              You don’t need a complete specification. A description of the
              problem and the people it affects is a useful starting point.
            </p>
            <dl>
              <dt>Email</dt>
              <dd>
                <a href="mailto:contact@grosbyte.com">contact@grosbyte.com</a>
              </dd>
              <dt>Phone</dt>
              <dd>
                <a href="tel:+9779869793130">+977 9869793130</a>
              </dd>
              <dt>Location</dt>
              <dd>Kathmandu, Nepal</dd>
            </dl>
            <nav className="contact-social-links" aria-label="Social media">
              {Object.entries(socialLinks).map(([name, href]) => (
                <a
                  href={href}
                  key={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    {
                      instagram: "Instagram",
                      facebook: "Facebook",
                      linkedin: "LinkedIn",
                      github: "GitHub",
                    }[name]
                  }
                </a>
              ))}
            </nav>
            <div className="contact-next">
              <h3>What happens next?</h3>
              <p>
                We review your enquiry, ask any questions needed to understand
                the scope, and discuss a practical next step with you.
              </p>
            </div>
          </aside>
          <EnquiryForm />
        </div>
      </div>
    </PageShell>
  );
}
