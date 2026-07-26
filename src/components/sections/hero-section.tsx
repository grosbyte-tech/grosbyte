"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const nodes = [
  { label: "Software", className: "node-software" },
  { label: "Web", className: "node-web" },
  { label: "Mobile", className: "node-mobile" },
  { label: "Brand", className: "node-brand" },
  { label: "Growth", className: "node-growth" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="hero" id="home">
      <div className="container hero-layout">
        <motion.div
          className="hero-content"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <p className="eyebrow">Technology, design, and digital growth</p>
          <h1>Digital solutions built around your business.</h1>
          <p className="hero-copy">
            Grosbyte Technologies creates modern software, web and mobile
            applications, custom websites, digital brands, and growth strategies
            that help businesses move forward.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Start a Project <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#services">
              Explore Services
            </a>
          </div>
          <p className="hero-location">
            <MapPin aria-hidden="true" />
            Based in Kathmandu, working with businesses remotely.
          </p>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: 0.12 }}
          aria-label="Connected services: software, web, mobile, brand, and growth"
        >
          <svg viewBox="0 0 520 430" aria-hidden="true">
            <path d="M260 215 L125 95 M260 215 L395 95 M260 215 L100 305 M260 215 L420 305" />
          </svg>
          <div className="visual-core">
            <span>Grosbyte</span>
            <small>Connected thinking</small>
          </div>
          {nodes.map((node) => (
            <div className={`visual-node ${node.className}`} key={node.label}>
              <i aria-hidden="true" />
              <span>{node.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
