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

import { processSteps } from "@/lib/site-data";
import { useTranslation } from "@/contexts/language-context";
import { FoldingText } from "@/components/ui/folding-text";
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
      className={`team-process ${marketing ? "team-process-marketing" : "team-process-development"}`}
      id={
        marketing ? "digital-marketing-process" : "software-development-process"
      }
      aria-labelledby={`${translationKey}-title`}
    >
      <div>
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
          <FoldingText
            as="h3"
            id={`${translationKey}-title`}
            text={t(`${translationKey}.title`)}
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

                  <h4>{translatedTitle}</h4>

                  <i className="editorial-divider" aria-hidden="true" />

                  <ScrollRevealText text={translatedDescription} />
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const { t } = useTranslation();
  return (
    <section
      className="section process-section"
      id="how-we-work"
      aria-labelledby="how-we-work-title"
    >
      <div className="container">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">{t("process.eyebrow")}</p>
          <FoldingText
            as="h2"
            id="how-we-work-title"
            text={t("process.overview.title")}
          />
          <AnimatedParagraph
            text={t("process.overview.description")}
            delay={0.25}
          />
        </div>
        <TeamProcessSection />
        <TeamProcessSection marketing />
      </div>
    </section>
  );
}
