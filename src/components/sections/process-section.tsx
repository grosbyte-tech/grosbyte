"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  SiMeta,
  SiInstagram,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSemrush,
  SiMailchimp,
} from "react-icons/si";
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

import { processSteps, technologies, type Technology } from "@/lib/site-data";
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

const marketingTools: readonly Technology[] = [
  { name: "Meta", description: "", icon: SiMeta },
  { name: "Instagram", description: "", icon: SiInstagram },
  { name: "Meta Ads Manager", description: "", icon: Megaphone },
  { name: "Canva", description: "", icon: PenTool },
  { name: "Google Ads", description: "", icon: SiGoogleads },
  { name: "Google Analytics", description: "", icon: SiGoogleanalytics },
  {
    name: "Google Search Console",
    description: "",
    icon: SiGooglesearchconsole,
  },
  { name: "Semrush", description: "", icon: SiSemrush },
  { name: "Mailchimp", description: "", icon: SiMailchimp },
];

function TeamToolkit({ marketing }: { marketing: boolean }) {
  const { t } = useTranslation();
  const items = marketing ? marketingTools : technologies;
  const columns = Array.from({ length: marketing ? 3 : 4 }, (_, column) =>
    items.filter((_, index) => index % (marketing ? 3 : 4) === column),
  );
  const key = marketing ? "marketingProcess.techStack" : "process.techStack";
  const Emblem = marketing ? TrendingUp : Code2;

  return (
    <aside className="team-toolkit" aria-label={t(`${key}.title`)}>
      <div className="team-toolkit-intro">
        <span className="toolkit-emblem">
          <Emblem aria-hidden="true" />
        </span>
        <p className="eyebrow">{t(`${key}.eyebrow`)}</p>
        <h4>{t(`${key}.title`)}</h4>
        <p>{t(`${key}.description`)}</p>
      </div>
      <div className="toolkit-marquee-area">
        <div className="tech-marquee-container toolkit-marquee">
          {columns.map((column, columnIndex) => (
            <div
              className={`tech-marquee-column tech-col-${columnIndex + 1}`}
              key={columnIndex}
            >
              <div className="tech-marquee-track">
                {[0, 1, 2].map((copy) => (
                  <ul
                    className="toolkit-marquee-group"
                    key={copy}
                    aria-hidden={copy > 0 ? true : undefined}
                  >
                    {column.map((tool) => {
                      const Icon = tool.icon;
                      return (
                        <li className="toolkit-card" key={tool.name}>
                          <span className="toolkit-icon">
                            {typeof Icon === "string" ? (
                              <Image
                                src={Icon}
                                alt=""
                                width={30}
                                height={30}
                                unoptimized
                                className={
                                  tool.invertOnDark
                                    ? "tech-icon-img invert-white"
                                    : "tech-icon-img"
                                }
                              />
                            ) : (
                              <Icon aria-hidden={true} />
                            )}
                          </span>
                          <span>{tool.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

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
          <RollingText
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
        <TeamToolkit marketing={marketing} />
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
          <RollingText
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
