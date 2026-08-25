"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useInView } from "framer-motion";
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

interface ProcessIconTileProps {
  icon: LucideIcon;
  isReversed: boolean;
  reduceMotion: boolean | null;
}

function ProcessIconTile({ icon: Icon, isReversed, reduceMotion }: ProcessIconTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <motion.div
      ref={ref}
      className="process-icon-tile"
      data-inview={isInView}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: isReversed ? 24 : -24,
            }
      }
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : reduceMotion
          ? {}
          : { opacity: 0, x: isReversed ? 24 : -24 }
      }
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Icon aria-hidden={true} />
    </motion.div>
  );
}

export function ProcessSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useTranslation();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 75%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001,
  });

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

        <div className="process-editorial" ref={containerRef}>
          {/* Custom Scroll progress lines */}
          <div className="process-line-track" />
          <motion.div
            className="process-line-active"
            style={{
              scaleY: reduceMotion ? 1 : scaleY,
              transformOrigin: "top",
            }}
          />

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
                <ProcessIconTile
                  icon={Icon}
                  isReversed={isReversed}
                  reduceMotion={reduceMotion}
                />

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

          <div className="tech-marquee-container">
            {(() => {
              const columns: (typeof technologies[number])[][] = [[], [], [], []];
              technologies.forEach((tech, i) => {
                columns[i % 4].push(tech);
              });

              return columns.map((columnItems, colIndex) => {
                const repeatedItems = [...columnItems, ...columnItems, ...columnItems];
                return (
                  <div key={colIndex} className={`tech-marquee-column tech-col-${colIndex + 1}`}>
                    <div className="tech-marquee-track">
                      {repeatedItems.map((technology, index) => {
                        const icon = technology.icon;
                        return (
                          <article
                            className="technology-item"
                            key={`${technology.name}-${index}`}
                          >
                            {typeof icon === "string" ? (
                              <img
                                src={icon}
                                alt={`${technology.name} icon`}
                                className={`tech-icon-img ${technology.invertOnDark ? "invert-white" : ""}`}
                                aria-hidden={true}
                              />
                            ) : (
                              (() => {
                                const IconComp = icon;
                                return <IconComp aria-hidden={true} />;
                              })()
                            )}
                            <h4>{technology.name}</h4>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
