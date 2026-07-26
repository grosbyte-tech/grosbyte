"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps, technologies } from "@/lib/site-data";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section process-section" id="how-we-work">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="eyebrow">How We Work</p>
          <h2>A clear process from idea to improvement.</h2>
          <p>
            We keep every project structured, collaborative, and focused on the
            result the business needs.
          </p>
        </motion.div>
        <div className="process-timeline">
          <motion.div
            className="process-progress"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduceMotion ? 0 : 0.85 }}
          />
          {processSteps.map((step, index) => (
            <motion.article
              className="process-step"
              key={step.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.05 }}
            >
              <span className="step-point">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="technology-block">
          <div className="technology-heading">
            <h3>Technologies we work with</h3>
            <p>
              We choose tools according to the product, users, scale,
              maintainability, and long-term needs.
            </p>
          </div>
          <div className="technology-grid">
            {technologies.map((technology) => {
              const Icon = technology.icon;
              return (
                <div className="technology-item" key={technology.name}>
                  {Icon ? (
                    <Icon aria-hidden="true" />
                  ) : (
                    <span className="technology-mark" aria-hidden="true">
                      {technology.textMark}
                    </span>
                  )}
                  <span>{technology.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
