import { CheckCircle2, ShieldCheck, Sparkles, Target } from "lucide-react";

export function ServiceValueProp({
  audience,
  benefits,
  overview,
}: {
  audience: string[];
  benefits: { title: string; description: string }[];
  overview?: string;
}) {
  return (
    <section
      className="service-section service-value-section"
      aria-labelledby="value-title"
    >
      <div className="container">
        {/* Overview & Audience Split */}
        <div className="service-value-grid">
          <div className="service-value-col-left">
            <div className="service-eyebrow-pill">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>The Grosbyte Advantage</span>
            </div>
            <h2 id="value-title" className="service-section-title">
              Why Custom Software Outperforms Off-The-Shelf
            </h2>
            {overview && <p className="service-value-overview">{overview}</p>}

            <div className="service-benefits-list">
              {benefits.map((b) => (
                <div key={b.title} className="service-benefit-card">
                  <div className="service-benefit-icon-wrap">
                    <ShieldCheck
                      className="w-5 h-5 text-[var(--brand-blue)]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="service-benefit-title">{b.title}</h3>
                    <p className="service-benefit-desc">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside
            className="service-value-col-right"
            aria-labelledby="audience-heading"
          >
            <div className="service-audience-card">
              <div className="service-eyebrow-pill">
                <Target className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Ideal Fit</span>
              </div>
              <h3 id="audience-heading" className="service-audience-title">
                Who this service is built for
              </h3>
              <p className="service-audience-intro">
                We partner with teams that need robust digital infrastructure
                rather than temporary band-aids.
              </p>
              <ul className="service-audience-list">
                {audience.map((item) => (
                  <li key={item}>
                    <CheckCircle2
                      className="w-4 h-4 text-[var(--brand-blue)] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
