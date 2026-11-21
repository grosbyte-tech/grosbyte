"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/contexts/language-context";
import { GradientText } from "@/components/effects/gradient-text";

import { NAMASTE_GLYPHS as GLYPHS } from "@/config/namaste-glyphs";

export function NamasteAnimation() {
  const { language, t } = useTranslation();
  const copy = (key: string) => t(`phase1.aboutPage.${key}`);
  const isDevanagari = language === "en" || language === "ne";
  const greetingText =
    copy("heroGreeting") ||
    (isDevanagari ? "नमस्ते" : language === "de" ? "Hallo" : "Hola");
  const [isFormed, setIsFormed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormed(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, [language]);

  return (
    <div className="namaste-hero-visual" aria-label={greetingText}>
      {/* Top Large Display Calligraphy / Greeting Vector */}
      <div className={`namaste-svg-wrapper ${isFormed ? "is-formed" : ""}`}>
        {isDevanagari ? (
          <svg
            viewBox="-40 120 1870 770"
            className="namaste-svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Grosbyte Brand Gradient */}
              <linearGradient
                id="grosbyte-blue-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0966fa" />
                <stop offset="50%" stopColor="#0084ff" />
                <stop offset="100%" stopColor="#00d2ff" />
              </linearGradient>

              {/* Glowing Accent Filter */}
              <filter
                id="grosbyte-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {GLYPHS.map((glyph) => (
              <path
                key={glyph.id}
                d={glyph.path}
                className="namaste-forming-path"
                style={{ animationDelay: `${glyph.delay}s` }}
                fill="url(#grosbyte-blue-gradient)"
                stroke="url(#grosbyte-blue-gradient)"
              />
            ))}
          </svg>
        ) : (
          <svg
            viewBox="0 50 1600 600"
            className="namaste-svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Grosbyte Brand Gradient */}
              <linearGradient
                id="grosbyte-blue-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0966fa" />
                <stop offset="50%" stopColor="#0084ff" />
                <stop offset="100%" stopColor="#00d2ff" />
              </linearGradient>

              {/* Glowing Accent Filter */}
              <filter
                id="grosbyte-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <text
              x="20"
              y="480"
              fontSize="450"
              fontWeight="900"
              letterSpacing="-0.04em"
              fontFamily="var(--font-urbanist), Urbanist, system-ui, -apple-system, sans-serif"
              fill="url(#grosbyte-blue-gradient)"
              stroke="url(#grosbyte-blue-gradient)"
              strokeWidth="4"
              className="namaste-forming-path"
            >
              {greetingText}
            </text>
          </svg>
        )}

        {/* Accessible screen-reader text */}
        <span className="sr-only">{greetingText}</span>
      </div>

      {/* Brand tagline placed cleanly at bottom */}
      <div className="namaste-brand-tagline">
        <p className="namaste-brand-line">
          <span className="namaste-brand-intro">
            {copy("weAre") || "We are"}
          </span>{" "}
          <GradientText className="namaste-brand-name">Grosbyte</GradientText>
        </p>
        <p className="namaste-brand-desc">
          {copy("namasteTagline") ||
            "Engineering modern digital solutions from Nepal to the world."}
        </p>
      </div>
    </div>
  );
}
