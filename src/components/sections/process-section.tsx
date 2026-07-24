"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { processStages } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const stage = processStages[active];
  const Icon = stage.icon;
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title="Clear steps. Flexible collaboration. Better outcomes."
          text="We use an agile, iterative process that keeps priorities visible, communication open, and progress aligned with the purpose of the project."
          centered
        />
        <div className="process-desktop">
          <div className="process-line">
            <motion.i
              initial={false}
              animate={{ scaleX: active / (processStages.length - 1) }}
              transition={reduce ? { duration: 0 } : { duration: 0.45 }}
            />
          </div>
          <div
            className="process-buttons"
            role="tablist"
            aria-label="Project lifecycle stages"
          >
            {processStages.map((item, index) => {
              const StageIcon = item.icon;
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-controls="process-panel"
                  id={`process-tab-${index}`}
                  key={item.title}
                  className={index === active ? "active" : ""}
                  onClick={() => setActive(index)}
                >
                  <span>
                    <StageIcon aria-hidden="true" />
                  </span>
                  <small>{item.number}</small>
                  <strong>{item.title}</strong>
                </button>
              );
            })}
          </div>
          <div
            id="process-panel"
            className="process-panel"
            role="tabpanel"
            aria-labelledby={`process-tab-${active}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.title}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <span className="process-panel-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <small>{stage.number} · Our process</small>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
                <div className="process-visual">
                  <i />
                  <i />
                  <i />
                  <span>Aligned for the next step</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="process-mobile">
          {processStages.map((item, index) => {
            const StageIcon = item.icon;
            const expanded = index === active;
            return (
              <div className="process-accordion" key={item.title}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`mobile-stage-${index}`}
                  onClick={() => setActive(index)}
                >
                  <span>
                    <StageIcon aria-hidden="true" />
                  </span>
                  <small>{item.number}</small>
                  <strong>{item.title}</strong>
                  <ChevronDown className={expanded ? "rotated" : ""} />
                </button>
                {expanded && (
                  <motion.div
                    id={`mobile-stage-${index}`}
                    initial={reduce ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <p>{item.description}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
