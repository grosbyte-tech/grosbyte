import { HelpCircle } from "lucide-react";

export function ServiceFAQ({
  faq,
  title = "Frequently Asked Questions",
  subtitle = "Have questions about our process, code ownership, or technology standards? Here are direct answers.",
}: {
  faq: { question: string; answer: string }[];
  title?: string;
  subtitle?: string;
}) {
  if (!faq || faq.length === 0) return null;

  return (
    <section
      className="service-section service-faq-section"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="container">
        <div className="service-section-header">
          <div className="service-eyebrow-pill">
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Clarity & Transparency</span>
          </div>
          <h2 id="faq-title" className="service-section-title">
            {title}
          </h2>
          <p className="service-section-subtitle">{subtitle}</p>
        </div>

        <div className="service-faq-container">
          {faq.map((item) => (
            <details key={item.question} className="service-faq-item">
              <summary className="service-faq-summary">
                <span className="service-faq-question">{item.question}</span>
                <span className="service-faq-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="service-faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
