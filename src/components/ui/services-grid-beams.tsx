"use client";

import { useReducedMotion } from "framer-motion";

export function ServicesGridBeams() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <div className="services-grid-beams-overlay" aria-hidden="true">
      {/* Horizontal Tracks with Floating White Beams */}
      <div className="beam-track-h beam-track-h-top">
        <span className="beam-pulse beam-pulse-h beam-pulse-h1" />
      </div>

      <div className="beam-track-h beam-track-h-mid">
        <span className="beam-pulse beam-pulse-h beam-pulse-h2" />
        <span className="beam-pulse beam-pulse-h beam-pulse-h3" />
      </div>

      <div className="beam-track-h beam-track-h-bottom">
        <span className="beam-pulse beam-pulse-h beam-pulse-h4" />
      </div>

      {/* Vertical Tracks with Floating White Beams */}
      <div className="beam-track-v beam-track-v-left">
        <span className="beam-pulse beam-pulse-v beam-pulse-v1" />
      </div>

      <div className="beam-track-v beam-track-v-col1">
        <span className="beam-pulse beam-pulse-v beam-pulse-v2" />
      </div>

      <div className="beam-track-v beam-track-v-col2">
        <span className="beam-pulse beam-pulse-v beam-pulse-v3" />
      </div>

      <div className="beam-track-v beam-track-v-right">
        <span className="beam-pulse beam-pulse-v beam-pulse-v4" />
      </div>
    </div>
  );
}
