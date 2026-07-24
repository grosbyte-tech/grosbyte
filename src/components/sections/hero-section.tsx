"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  Check,
  Code2,
  Megaphone,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reduce = useReducedMotion();
  const reveal = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div
        className="hero-glow"
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { opacity: [0.55, 0.9, 0.55], scale: [0.96, 1.04, 0.96] }
        }
        transition={{ duration: 7, repeat: Infinity }}
      />
      <div className="container hero-content">
        <motion.p className="eyebrow hero-eyebrow" {...reveal(0.1)}>
          <Sparkles size={15} aria-hidden="true" /> Innovating Ideas. Empowering
          Businesses.
        </motion.p>
        <motion.h1 {...reveal(0.2)}>
          We build digital experiences that move businesses forward.
        </motion.h1>
        <motion.p className="hero-copy" {...reveal(0.3)}>
          Grosbyte Technologies turns ideas and business challenges into
          reliable software, modern websites, scalable applications, stronger
          digital brands, and meaningful online growth.
        </motion.p>
        <motion.div className="hero-actions" {...reveal(0.4)}>
          <Button href="#contact" arrow>
            Start a Project
          </Button>
          <Button href="#services" variant="dark">
            Explore Our Services
          </Button>
        </motion.div>
        <motion.div className="hero-showcase" {...reveal(0.52)}>
          <div className="interface-browser">
            <div className="browser-bar">
              <div className="browser-dots">
                <i />
                <i />
                <i />
              </div>
              <span>Digital product workspace</span>
              <span className="status">
                <i /> Product ready
              </span>
            </div>
            <div className="browser-layout">
              <aside className="mock-sidebar">
                <div className="mock-mark">G</div>
                {["Discover", "Plan", "Design", "Build", "Launch"].map(
                  (item, index) => (
                    <span key={item} className={index === 2 ? "selected" : ""}>
                      {item}
                    </span>
                  ),
                )}
              </aside>
              <div className="mock-canvas">
                <div className="mock-heading">
                  <span>Experience system</span>
                  <button type="button">Preview</button>
                </div>
                <div className="mock-hero-block">
                  <span>Built around your business</span>
                  <div className="mock-lines">
                    <i />
                    <i />
                  </div>
                </div>
                <div className="mock-card-row">
                  {[
                    [Code2, "Web platform"],
                    [Smartphone, "Mobile experience"],
                    [Megaphone, "Campaign planned"],
                  ].map(([Icon, label]) => {
                    const ItemIcon = Icon as typeof Code2;
                    return (
                      <div className="mock-card" key={label as string}>
                        <ItemIcon size={19} />
                        <span>{label as string}</span>
                        <Check size={14} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="floating-card floating-card--left"
            animate={reduce ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Palette size={19} />
            <div>
              <small>Brand system</small>
              <strong>Aligned &amp; consistent</strong>
            </div>
          </motion.div>
          <motion.div
            className="floating-card floating-card--right"
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 5.8, repeat: Infinity }}
          >
            <Sparkles size={19} />
            <div>
              <small>Smart workflow</small>
              <strong>AI where useful</strong>
            </div>
          </motion.div>
        </motion.div>
        <a className="explore-cue" href="#about">
          <ArrowDown size={16} aria-hidden="true" /> Explore
        </a>
      </div>
    </section>
  );
}
