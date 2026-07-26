"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="home">
      <motion.div
        className="container hero-content"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Technology, design, and digital growth</p>
        <h1>Digital solutions built around your business.</h1>
        <p className="hero-copy">
          Grosbyte Technologies creates modern software, web and mobile
          applications, intelligent automation, digital products, and growth
          strategies that help businesses move forward.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Start a Project <ArrowRight aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#services">
            Explore Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}
