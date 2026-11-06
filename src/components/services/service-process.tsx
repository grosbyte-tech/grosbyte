import type { ProcessStep } from "@/lib/services";
import { Check, GitFork } from "lucide-react";

export function ServiceProcess({
  processSteps,
  title = "Our Phased Engineering Lifecycle",
  subtitle = "From architecture mapping to production cloud rollout, our iterative sprint methodology ensures total transparency, rapid feedback, and zero guesswork.",
}: {
  processSteps?: ProcessStep[];
  title?: string;
  subtitle?: string;
}) {
  if (!processSteps || processSteps.length === 0) return null;

  return (
    <section
      className="service-section service-process-section"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="container">
        <div className="service-section-header">
          <div className="service-eyebrow-pill">
            <GitFork className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Process & Delivery</span>
          </div>
          <h2 id="process-title" className="service-section-title">
            {title}
          </h2>
          <p className="service-section-subtitle">{subtitle}</p>
        </div>

        <div className="service-process-grid">
          {processSteps.map((step) => (
            <div key={step.step} className="service-process-card">
              <div className="service-process-card-top">
                <span className="service-process-num">{step.step}</span>
                {step.duration && (
                  <span className="service-process-duration">
                    {step.duration}
                  </span>
                )}
              </div>
              <h3 className="service-process-phase">{step.phase}</h3>
              <p className="service-process-desc">{step.description}</p>
              {step.activities && step.activities.length > 0 && (
                <ul className="service-process-activities">
                  {step.activities.map((act) => (
                    <li key={act}>
                      <Check
                        className="w-4 h-4 text-[var(--brand-blue)] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
