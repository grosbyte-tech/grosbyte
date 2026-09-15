"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useInView,
} from "framer-motion";
import {
  BarChart3,
  Megaphone,
  MessageCircle,
  PenTool,
  Target,
  TrendingUp,
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
import { RollingText } from "@/components/motion/rolling-text";
import { ScrollRevealText } from "@/components/motion/scroll-reveal-text";
import { AnimatedParagraph } from "@/components/motion/animated-paragraph";

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
  Discover: "discover",
  Plan: "plan",
  Design: "design",
  Develop: "develop",
  Test: "test",
  Launch: "launch",
  Improve: "improve",
};

const marketingSteps = [
  { key: "discover", icon: Search },
  { key: "strategy", icon: Target },
  { key: "create", icon: PenTool },
  { key: "campaigns", icon: Megaphone },
  { key: "nurture", icon: MessageCircle },
  { key: "measure", icon: BarChart3 },
  { key: "grow", icon: TrendingUp },
];

interface ProcessIconTileProps {
  icon: LucideIcon;
  isReversed: boolean;
  reduceMotion: boolean | null;
}

function ProcessIconTile({
  icon: Icon,
  isReversed,
  reduceMotion,
}: ProcessIconTileProps) {
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

function TeamProcessSection({ marketing = false }: { marketing?: boolean }) {
  const reduceMotion = useReducedMotion();
  const { t } = useTranslation();

  const translationKey = marketing ? "marketingProcess" : "process";
  const steps = marketing
    ? marketingSteps
    : processSteps.map((step, index) => ({
        key: stepKeys[step.title],
        icon: processIcons[index] ?? Search,
      }));

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
    <section
      className="section process-section"
      id={marketing ? "digital-marketing-process" : "how-we-work"}
    >
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
          <p className="eyebrow">{t(`${translationKey}.eyebrow`)}</p>
          <RollingText as="h2" text={t(`${translationKey}.title`)} />
          <AnimatedParagraph
            text={t(`${translationKey}.description`)}
            delay={0.25}
          />
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

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isReversed = index % 2 !== 0;
            const key = step.key;
            const translatedTitle = t(`${translationKey}.steps.${key}.title`);
            const translatedDescription = t(
              `${translationKey}.steps.${key}.description`,
            );

            return (
              <article
                className={`editorial-step ${
                  isReversed ? "editorial-step-reverse" : ""
                }`}
                key={step.key}
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

                  <ScrollRevealText text={translatedDescription} />
                </motion.div>
              </article>
            );
          })}
        </div>

        {!marketing && (
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
              <RollingText as="h3" text={t("process.techStack.title")} />
              <AnimatedParagraph
                text={t("process.techStack.description")}
                delay={0.25}
              />
            </motion.div>

            <div className="tech-marquee-container">
              {(() => {
                const columns: (typeof technologies)[number][][] = [
                  [],
                  [],
                  [],
                  [],
                ];
                technologies.forEach((tech, i) => {
                  columns[i % 4].push(tech);
                });

                return columns.map((columnItems, colIndex) => {
                  const repeatedItems = [
                    ...columnItems,
                    ...columnItems,
                    ...columnItems,
                  ];
                  return (
                    <div
                      key={colIndex}
                      className={`tech-marquee-column tech-col-${colIndex + 1}`}
                    >
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
        )}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <>
      <TeamProcessSection />
      <TeamProcessSection marketing />
    </>
  );
}
