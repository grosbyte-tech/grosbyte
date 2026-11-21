"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/contexts/language-context";
import {
  TECH_CATALOG,
  DEFAULT_TECH_EDITORIAL as DEFAULT_EDITORIAL,
} from "@/config/tech-stack";

function FacetedMeshBackground() {
  return (
    <div className="about-tech-bg-mesh" aria-hidden="true">
      <svg
        className="about-tech-bg-mesh-svg"
        viewBox="0 0 1440 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1">
          {/* Row 1 Triangles */}
          <polygon points="0,0 240,0 150,140" fill="#060910" />
          <polygon points="0,0 150,140 0,160" fill="#080c16" />
          <polygon points="240,0 480,0 380,120" fill="#090e1a" />
          <polygon points="240,0 380,120 150,140" fill="#0b1120" />
          <polygon points="480,0 720,0 610,150" fill="#070a13" />
          <polygon points="480,0 610,150 380,120" fill="#0d1424" />
          <polygon points="720,0 960,0 840,130" fill="#080d19" />
          <polygon points="720,0 840,130 610,150" fill="#0a1020" />
          <polygon points="960,0 1200,0 1070,160" fill="#060912" />
          <polygon points="960,0 1070,160 840,130" fill="#0c1222" />
          <polygon points="1200,0 1440,0 1290,140" fill="#080c17" />
          <polygon points="1200,0 1290,140 1070,160" fill="#0a0f1d" />
          <polygon points="1440,0 1440,170 1290,140" fill="#05080e" />

          {/* Row 2 Triangles */}
          <polygon points="0,160 150,140 220,310" fill="#0a0f1e" />
          <polygon points="0,160 220,310 0,320" fill="#060911" />
          <polygon points="150,140 380,120 450,290" fill="#0d1426" />
          <polygon points="150,140 450,290 220,310" fill="#090d1a" />
          <polygon points="380,120 610,150 720,340" fill="#0e172a" />
          <polygon points="380,120 720,340 450,290" fill="#080c18" />
          <polygon points="610,150 840,130 970,300" fill="#0f182c" />
          <polygon points="610,150 970,300 720,340" fill="#0a1021" />
          <polygon points="840,130 1070,160 1210,330" fill="#0d1425" />
          <polygon points="840,130 1210,330 970,300" fill="#090e1b" />
          <polygon points="1070,160 1290,140 1440,310" fill="#0b1122" />
          <polygon points="1070,160 1440,310 1210,330" fill="#070b15" />
          <polygon points="1290,140 1440,170 1440,310" fill="#05080f" />

          {/* Row 3 Triangles */}
          <polygon points="0,320 220,310 160,470" fill="#070a14" />
          <polygon points="0,320 160,470 0,480" fill="#05070d" />
          <polygon points="220,310 450,290 390,490" fill="#0b1021" />
          <polygon points="220,310 390,490 160,470" fill="#080c19" />
          <polygon points="450,290 720,340 620,460" fill="#0d1528" />
          <polygon points="450,290 620,460 390,490" fill="#090e1c" />
          <polygon points="720,340 970,300 850,500" fill="#0c1325" />
          <polygon points="720,340 850,500 620,460" fill="#080d1a" />
          <polygon points="970,300 1210,330 1080,470" fill="#0b1122" />
          <polygon points="970,300 1080,470 850,500" fill="#070c18" />
          <polygon points="1210,330 1440,310 1300,490" fill="#090e1c" />
          <polygon points="1210,330 1300,490 1080,470" fill="#060913" />
          <polygon points="1440,310 1440,470 1300,490" fill="#05070e" />

          {/* Row 4 Triangles */}
          <polygon points="0,480 160,470 240,700" fill="#06080e" />
          <polygon points="0,480 240,700 0,700" fill="#04060b" />
          <polygon points="160,470 390,490 480,700" fill="#080c17" />
          <polygon points="160,470 480,700 240,700" fill="#060911" />
          <polygon points="390,490 620,460 720,700" fill="#0a0f1d" />
          <polygon points="390,490 720,700 480,700" fill="#070a14" />
          <polygon points="620,460 850,500 960,700" fill="#090e1c" />
          <polygon points="620,460 960,700 720,700" fill="#060912" />
          <polygon points="850,500 1080,470 1200,700" fill="#080c17" />
          <polygon points="850,500 1200,700 960,700" fill="#050810" />
          <polygon points="1080,470 1300,490 1440,700" fill="#070a15" />
          <polygon points="1080,470 1440,700 1200,700" fill="#05070e" />
          <polygon points="1300,490 1440,470 1440,700" fill="#04060c" />
        </g>
      </svg>
    </div>
  );
}

export function AboutTechStack() {
  const { t } = useTranslation();
  const copy = (key: string) => t(`phase1.aboutPage.${key}`);
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);

  // Active spotlight item: either explicitly hovered or default flagship
  const activeSpotlight = useMemo(() => {
    if (hoveredTechId) {
      const match = TECH_CATALOG.find((t) => t.id === hoveredTechId);
      if (match) return match;
    }
    return TECH_CATALOG[1]; // Next.js default
  }, [hoveredTechId]);

  return (
    <section
      className="about-tech-section"
      id="technologies"
      aria-labelledby="about-tech-heading"
    >
      {/* Background: Geometric Faceted Tech Mesh */}
      <FacetedMeshBackground />

      <div className="about-tech-container">
        {/* Upper Stage: Organic Floating Constellation of Official Brand Logos */}
        <div className="about-tech-constellation" aria-hidden="true">
          {TECH_CATALOG.map((tech) => {
            const isHovered = hoveredTechId === tech.id;

            return (
              <button
                type="button"
                key={tech.id}
                className={`about-tech-badge about-tech-badge-${tech.size} is-active ${
                  isHovered ? "is-hovered" : ""
                }`}
                style={{
                  left: tech.pos.left,
                  top: tech.pos.top,
                }}
                onMouseEnter={() => setHoveredTechId(tech.id)}
                onMouseLeave={() => setHoveredTechId(null)}
                onFocus={() => setHoveredTechId(tech.id)}
                onBlur={() => setHoveredTechId(null)}
                aria-label={`${tech.name} - ${tech.categoryLabel}`}
              >
                <Image
                  src={tech.iconSrc}
                  alt={tech.name}
                  width={54}
                  height={54}
                  unoptimized
                  className="about-tech-badge-img"
                />

                {/* Micro Tooltip */}
                <span className="about-tech-micro-tooltip">
                  <span className="about-tech-tooltip-name">{tech.name}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Lower Stage: Center Title & Narrative */}
        <div className="about-tech-editorial-panel">
          <div className="about-tech-editorial-copy">
            <h2 id="about-tech-heading" className="about-tech-title">
              <span className="about-tech-title-blue">
                {copy("techTitleLead") || "Tools"}
              </span>{" "}
              <span className="about-tech-title-white">
                {copy("techTitleHighlight") || "& technologies"}
              </span>
            </h2>
            <p className="about-tech-desc">
              {hoveredTechId
                ? activeSpotlight.tagline
                : copy("techEditorial") || DEFAULT_EDITORIAL}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
