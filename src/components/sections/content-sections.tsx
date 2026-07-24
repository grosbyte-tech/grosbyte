import {
  ArrowUpRight,
  Bot,
  Check,
  CheckCircle2,
  Cpu,
  Megaphone,
  Palette,
  ScanText,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { services, whyItems } from "@/lib/site-data";

export function AboutSection() {
  const principles = [
    [
      "Purpose before technology",
      "We begin with the business challenge and choose technology only after the objective is clear.",
    ],
    [
      "Designed around real users",
      "Every product, website, and campaign should feel natural to the people it is intended to serve.",
    ],
    [
      "Built to move forward",
      "We create foundations that can adapt as the business, audience, and opportunities evolve.",
    ],
  ];
  return (
    <section id="about" className="section section--light">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="About Grosbyte"
            title="Technology, design, and digital growth—built around your business."
            text="We help businesses turn ideas into reliable, scalable, and impactful digital products through thoughtful engineering, modern design, and emerging technologies."
          />
        </Reveal>
        <div className="about-layout">
          <Reveal>
            <p className="about-lead">
              From a company&apos;s first digital presence to a custom platform
              supporting its next stage of growth, every solution is shaped
              around real goals, real users, and the way the business works.
            </p>
          </Reveal>
          <div className="principle-list">
            {principles.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="principle">
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="section section--soft">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="What we build and grow"
            title="Connected capabilities for the full digital picture."
            text="Product engineering, modern design, and digital growth strategies come together around the outcomes your business needs."
            centered
          />
        </Reveal>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.07}>
                <article className="service-card">
                  <div className="service-top">
                    <span className="service-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.capabilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ArrowUpRight className="service-arrow" aria-hidden="true" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CustomWebSection() {
  return (
    <section className="section section--white">
      <div className="container split-layout">
        <Reveal className="split-copy">
          <SectionHeading
            eyebrow="Built for your business"
            title="Your website should feel like your business—not like everyone else's."
            text="We design and develop every website around the brand, audience, content, and objectives it needs to support. The result is a fast, responsive, and purposeful digital presence that feels distinctly yours."
          />
          <ul className="check-list">
            {[
              "Original design direction",
              "Business-specific content structure",
              "Modern performance and accessibility",
              "Scalable foundations for future growth",
            ].map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="device-stage" delay={0.1}>
          <div className="device-browser">
            <div className="device-bar">
              <i />
              <i />
              <i />
            </div>
            <div className="device-page">
              <span className="device-label">DESKTOP</span>
              <div className="device-nav" />
              <div className="device-title" />
              <div className="device-subtitle" />
              <div className="device-grid">
                {[1, 2, 3].map((n) => (
                  <i key={n} />
                ))}
              </div>
            </div>
          </div>
          <div className="device-tablet">
            <span>TABLET</span>
            <i />
            <i />
            <i />
          </div>
          <div className="device-phone">
            <span>MOBILE</span>
            <i />
            <i />
            <i />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AISection() {
  const capabilities = [
    "Intelligent automation",
    "AI-assisted search",
    "Support assistants",
    "Document processing",
    "Data-assisted workflows",
    "Smart reporting",
  ];
  return (
    <section className="section ai-section">
      <div className="container split-layout ai-layout">
        <Reveal className="split-copy">
          <SectionHeading
            light
            eyebrow="AI and emerging technology"
            title="Intelligence where it creates real value."
            text="We integrate AI into software and applications where it can improve decisions, reduce repetitive work, enhance customer experiences, or make information easier to use."
          />
          <div className="tag-list">
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="ai-note">
            <Sparkles size={17} aria-hidden="true" /> AI is a tool—not the
            objective. We use it only when it meaningfully improves the
            solution.
          </p>
        </Reveal>
        <Reveal className="workflow-panel" delay={0.12}>
          <div className="workflow-title">
            <Cpu aria-hidden="true" />
            <span>Useful intelligence workflow</span>
          </div>
          <div className="workflow-step">
            <span>
              <ScanText aria-hidden="true" />
            </span>
            <div>
              <small>01 · Input</small>
              <strong>Information prepared</strong>
            </div>
            <Check />
          </div>
          <div className="workflow-line" />
          <div className="workflow-step active">
            <span>
              <Bot aria-hidden="true" />
            </span>
            <div>
              <small>02 · Assist</small>
              <strong>Context understood</strong>
            </div>
            <Sparkles />
          </div>
          <div className="workflow-line" />
          <div className="workflow-step">
            <span>
              <Workflow aria-hidden="true" />
            </span>
            <div>
              <small>03 · Action</small>
              <strong>Workflow improved</strong>
            </div>
            <Check />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function MarketingSection() {
  return (
    <section className="section section--soft">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Digital growth"
            title="Build your presence. Reach your audience. Grow with clarity."
            text="A strong digital product needs a strong digital presence. We connect strategy, content, campaigns, search, and brand identity to help businesses be seen, understood, and remembered."
            centered
          />
        </Reveal>
        <div className="growth-grid">
          <Reveal>
            <article className="growth-panel">
              <div className="growth-heading">
                <span>
                  <Megaphone />
                </span>
                <div>
                  <small>Audience &amp; reach</small>
                  <h3>Digital Marketing</h3>
                </div>
              </div>
              <div className="calendar">
                <div className="calendar-head">
                  <span>Content plan</span>
                  <b>Strategy defined</b>
                </div>
                <div className="calendar-grid">
                  {[
                    "Search",
                    "Social",
                    "Content",
                    "Campaign",
                    "Review",
                    "Improve",
                  ].map((x, i) => (
                    <div className={i === 3 ? "selected" : ""} key={x}>
                      <small>0{i + 1}</small>
                      {x}
                    </div>
                  ))}
                </div>
              </div>
              <div className="panel-tags">
                {[
                  "SEO",
                  "Social media",
                  "Paid advertising",
                  "Audience research",
                ].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="growth-panel">
              <div className="growth-heading">
                <span>
                  <Palette />
                </span>
                <div>
                  <small>Identity &amp; clarity</small>
                  <h3>Digital Branding</h3>
                </div>
              </div>
              <div className="brand-board">
                <div className="brand-symbol">G</div>
                <div className="brand-details">
                  <small>Brand system</small>
                  <strong>Clear. Consistent. Distinct.</strong>
                  <div className="swatches">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
              <div className="panel-tags">
                {[
                  "Brand strategy",
                  "Visual identity",
                  "Digital guidelines",
                  "Marketing assets",
                ].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
        <Reveal className="center-action">
          <Button href="#contact" arrow>
            Grow Your Digital Presence
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="section section--white">
      <div className="container why-layout">
        <Reveal>
          <SectionHeading
            eyebrow="Why Grosbyte"
            title="One partner across product, presence, and growth."
            text="A connected perspective keeps the product, customer experience, brand, and growth strategy moving in the same direction."
          />
        </Reveal>
        <div className="why-list">
          {whyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article>
                  <span>
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <small>0{index + 1}</small>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-glow" aria-hidden="true" />
      <Reveal className="container cta-content">
        <p className="eyebrow">A good next step starts with a conversation</p>
        <h2>Tell us what you&apos;re building—or growing.</h2>
        <p>
          Whether you need a custom product, a stronger digital presence, or a
          clearer way to reach your audience, let&apos;s explore the right next
          step.
        </p>
        <div className="hero-actions">
          <Button href="#contact" arrow>
            Let&apos;s Work Together
          </Button>
          <Button href="mailto:contact@grosbyte.com" variant="dark">
            Contact Grosbyte
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
