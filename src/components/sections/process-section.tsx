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
import { useTranslation } from "@/contexts/language-context";

const processIcons: LucideIcon[] = [
  Search,
  Route,
  PanelsTopLeft,
  Code2,
  ClipboardCheck,
  CloudUpload,
  RefreshCw,
];

const stepKeys: Record<string, string> = {
  "Discover": "discover",
  "Plan": "plan",
  "Design": "design",
  "Develop": "develop",
  "Test": "test",
  "Launch": "launch",
  "Improve": "improve",
};

export function ProcessSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useTranslation();

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
          <p className="eyebrow">{t("process.eyebrow")}</p>

          <h2>{t("process.title")}</h2>

          <p>{t("process.description")}</p>
        </motion.div>

        <div className="process-editorial">
          {processSteps.map((step, index) => {
            const Icon = processIcons[index] ?? Search;
            const isReversed = index % 2 !== 0;
            const key = stepKeys[step.title];
            const translatedTitle = t(`process.steps.${key}.title`);
            const translatedDescription = t(`process.steps.${key}.description`);

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

                  <h3>{translatedTitle}</h3>

                  <i className="editorial-divider" aria-hidden="true" />

                  <p>{translatedDescription}</p>
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
            <p className="eyebrow">{t("process.techStack.eyebrow")}</p>

            <h3>{t("process.techStack.title")}</h3>

            <p>{t("process.techStack.description")}</p>
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
