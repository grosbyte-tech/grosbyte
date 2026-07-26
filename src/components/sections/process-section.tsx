"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps, technologies } from "@/lib/site-data";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();
  const categories = [
    "Frontend",
    "Backend",
    "Data and AI",
    "Development and delivery",
  ] as const;

  return (
    <section className="section process-section" id="how-we-work">
      <div className="container">
        <motion.div
          className="section-heading section-heading-centered"
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
        <div className="process-ladder">
          {processSteps.map((step, index) => (
            <motion.article
              className="process-row"
              key={step.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.04 }}
            >
              <span className="process-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="process-marker" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="technology-block">
          <motion.div
            className="technology-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="eyebrow">Technology Stack</p>
            <h3>Technologies we work with</h3>
            <p>
              We choose technologies according to the product, users,
              maintainability, scale, security, and long-term needs.
            </p>
          </motion.div>
          {categories.map((category) => (
            <div className="technology-category" key={category}>
              <h4>{category}</h4>
              <div className="technology-grid">
                {technologies
                  .filter((technology) => technology.category === category)
                  .map((technology, index) => {
                    const Icon = technology.icon;
                    return (
                      <motion.article
                        className="technology-item"
                        key={technology.name}
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          delay: reduceMotion ? 0 : (index % 6) * 0.035,
                        }}
                      >
                        <Icon aria-hidden={true} />
                        <div>
                          <h5>{technology.name}</h5>
                          <p>{technology.description}</p>
                        </div>
                      </motion.article>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
