"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardCheck,
  CloudUpload,
  Code2,
  PanelsTopLeft,
  RefreshCw,
  Route,
  Search,
  type LucideIcon,
} from "lucide-react";

import { processSteps, technologies } from "@/lib/site-data";

const processIcons: LucideIcon[] = [
  Search,
  Route,
  PanelsTopLeft,
  Code2,
  ClipboardCheck,
  CloudUpload,
  RefreshCw,
];

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section process-section" id="how-we-work">
      <div className="container">
        <motion.div
          className="section-heading section-heading-centered"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="eyebrow">How We Work</p>

          <h2>A clear process from idea to improvement.</h2>

          <p>
            We keep every project structured, collaborative, and focused on the
            result the business needs.
          </p>
        </motion.div>

        <div className="process-editorial">
          {processSteps.map((step, index) => {
            const Icon = processIcons[index] ?? Search;
            const isReversed = index % 2 !== 0;

            return (
              <article
                className={`editorial-step ${
                  isReversed ? "editorial-step-reverse" : ""
                }`}
                key={step.title}
              >
                <motion.div
                  className="process-icon-tile"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: isReversed ? 24 : -24,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Icon aria-hidden={true} />
                </motion.div>

                <motion.div
                  className="editorial-content"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: isReversed ? -24 : 24,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.45,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="editorial-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{step.title}</h3>

                  <i className="editorial-divider" aria-hidden="true" />

                  <p>{step.description}</p>
                </motion.div>
              </article>
            );
          })}
        </div>

        <div className="technology-block">
          <motion.div
            className="technology-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="eyebrow">Technology Stack</p>

            <h3>Technologies we work with</h3>

            <p>
              We choose technologies according to the product, users,
              maintainability, scale, security, and long-term needs.
            </p>
          </motion.div>

          <div className="technology-grid">
            {technologies.map((technology, index) => {
              const TechnologyIcon = technology.icon;

              return (
                <motion.article
                  className="technology-item"
                  key={technology.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.4,
                    delay: reduceMotion ? 0 : (index % 8) * 0.025,
                  }}
                >
                  <TechnologyIcon aria-hidden={true} />

                  <div>
                    <h4>{technology.name}</h4>
                    <p>{technology.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
