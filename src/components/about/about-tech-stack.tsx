"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

interface TechItem {
  id: string;
  name: string;
  categoryLabel: string;
  tagline: string;
  size: "sm" | "md" | "lg";
  pos: { left: string; top: string };
  color: string;
  iconSrc: string;
}

/* ========================================================
   Constellation Dataset - Official Brand Icons on White Tiles
   ======================================================== */

const TECH_CATALOG: TechItem[] = [
  // Left Wing Anchor
  {
    id: "kubernetes",
    name: "Kubernetes (K8s)",
    categoryLabel: "Container Orchestration",
    tagline:
      "Automated container deployment, scaling, self-healing, and cluster management.",
    size: "lg",
    pos: { left: "7%", top: "44%" },
    color: "#326CE5",
    iconSrc: "/icons/tech/kubernetes.svg",
  },
  {
    id: "nextjs",
    name: "Next.js",
    categoryLabel: "Production Web Framework",
    tagline:
      "Enterprise React framework with App Router, SSR, Turbopack, and edge caching.",
    size: "md",
    pos: { left: "11%", top: "82%" },
    color: "#000000",
    iconSrc: "/icons/tech/nextjs-icon.svg",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    categoryLabel: "Design System Styling",
    tagline:
      "Utility-first design architecture for cohesive, high-performance responsive styling.",
    size: "sm",
    pos: { left: "16%", top: "16%" },
    color: "#38BDF8",
    iconSrc: "/icons/tech/tailwindcss-icon.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    categoryLabel: "Type-Safe Architecture",
    tagline:
      "Strict type safety eliminating whole categories of runtime regressions across the codebase.",
    size: "sm",
    pos: { left: "20%", top: "40%" },
    color: "#3178C6",
    iconSrc: "/icons/tech/typescript-icon.svg",
  },
  {
    id: "react",
    name: "React & React Native",
    categoryLabel: "UI & Mobile Systems",
    tagline:
      "Declarative component-driven interfaces for responsive web and native iOS/Android apps.",
    size: "md",
    pos: { left: "24%", top: "64%" },
    color: "#61DAFB",
    iconSrc: "/icons/tech/react.svg",
  },
  {
    id: "graphql",
    name: "GraphQL",
    categoryLabel: "API Query Language",
    tagline:
      "Precise schema contracts preventing over-fetching and streamlining client data requests.",
    size: "sm",
    pos: { left: "28%", top: "24%" },
    color: "#E10098",
    iconSrc: "/icons/tech/graphql.svg",
  },

  // Mid-Left
  {
    id: "n8n",
    name: "n8n Automation",
    categoryLabel: "Workflow & AI Automation",
    tagline:
      "Self-hosted & cloud workflow orchestration connecting AI agents, internal APIs, and event-driven webhooks.",
    size: "md",
    pos: { left: "34%", top: "76%" },
    color: "#EA4B71",
    iconSrc: "/icons/tech/n8n.svg",
  },
  {
    id: "redis",
    name: "Redis",
    categoryLabel: "In-Memory Data Store",
    tagline:
      "Sub-millisecond in-memory caching, real-time message brokers, and session queues.",
    size: "md",
    pos: { left: "37%", top: "18%" },
    color: "#DC382D",
    iconSrc: "/icons/tech/redis.svg",
  },

  // Center Apex
  {
    id: "nodejs",
    name: "Node.js",
    categoryLabel: "Asynchronous Backend",
    tagline:
      "High-throughput, event-driven JavaScript/TypeScript backend runtimes and microservices.",
    size: "lg",
    pos: { left: "45%", top: "46%" },
    color: "#5FA04E",
    iconSrc: "/icons/tech/nodejs-icon.svg",
  },
  {
    id: "springboot",
    name: "Java Spring Boot",
    categoryLabel: "Enterprise Backend Architecture",
    tagline:
      "Robust, production-grade enterprise microservices and distributed backend systems with Java & Spring Boot.",
    size: "md",
    pos: { left: "53%", top: "16%" },
    color: "#6DB33F",
    iconSrc: "/icons/tech/spring-boot.svg",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    categoryLabel: "Document NoSQL Database",
    tagline:
      "High-performance JSON document database engineered for agile schema iteration, analytics, and scale.",
    size: "sm",
    pos: { left: "56%", top: "62%" },
    color: "#47A248",
    iconSrc: "/icons/tech/mongodb-icon.svg",
  },

  // Mid-Right
  {
    id: "postgres",
    name: "PostgreSQL",
    categoryLabel: "Enterprise Relational DB",
    tagline:
      "Mission-critical relational data storage with strict ACID compliance and robust indexing.",
    size: "lg",
    pos: { left: "65%", top: "26%" },
    color: "#336791",
    iconSrc: "/icons/tech/postgresql.svg",
  },
  {
    id: "python",
    name: "Python & FastAPI",
    categoryLabel: "Microservices & AI",
    tagline:
      "High-performance data pipelines, machine learning integration, and clean REST APIs.",
    size: "md",
    pos: { left: "65%", top: "74%" },
    color: "#3776AB",
    iconSrc: "/icons/tech/python.svg",
  },
  {
    id: "githubactions",
    name: "GitHub Actions",
    categoryLabel: "CI/CD & DevOps Automation",
    tagline:
      "Automated testing, security scanning, continuous integration, and seamless cloud deployments.",
    size: "md",
    pos: { left: "73%", top: "50%" },
    color: "#2088FF",
    iconSrc: "/icons/tech/github-actions.svg",
  },

  // Right Wing
  {
    id: "go",
    name: "Go (Golang)",
    categoryLabel: "High-Concurrency Services",
    tagline:
      "Compiled microservices engineered for ultra-low latency, fast startups, and high concurrency.",
    size: "md",
    pos: { left: "80%", top: "18%" },
    color: "#00ADD8",
    iconSrc: "/icons/tech/go.svg",
  },
  {
    id: "docker",
    name: "Docker",
    categoryLabel: "Containerization",
    tagline:
      "Consistent application packaging ensuring parity between local development and production.",
    size: "lg",
    pos: { left: "82%", top: "46%" },
    color: "#2496ED",
    iconSrc: "/icons/tech/docker-icon.svg",
  },
  {
    id: "supabase",
    name: "Supabase",
    categoryLabel: "Realtime Database & Auth",
    tagline:
      "Open-source Firebase alternative powered by PostgreSQL, row-level security, and realtime.",
    size: "sm",
    pos: { left: "83%", top: "82%" },
    color: "#3ECF8E",
    iconSrc: "/icons/tech/supabase-icon.svg",
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    categoryLabel: "Cloud Infrastructure",
    tagline:
      "Global cloud ecosystem providing reliable compute, networking, and security governance.",
    size: "md",
    pos: { left: "92%", top: "42%" },
    color: "#FF9900",
    iconSrc: "/icons/tech/aws.svg",
  },
];

const DEFAULT_EDITORIAL =
  "We employ modern full-stack web frameworks, enterprise backend systems, scalable databases, cloud infrastructure, and intelligent automation—including Next.js, React, TypeScript, Python, Node.js, Spring Boot, n8n, AWS, and PostgreSQL—to help you build and scale resilient applications.";

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

        {/* Lower Stage: Center Green Title & Narrative */}
        <div className="about-tech-editorial-panel">
          <div className="about-tech-editorial-copy">
            <h2 id="about-tech-heading" className="about-tech-title">
              <span className="about-tech-title-blue">Tools</span>{" "}
              <span className="about-tech-title-white">&amp; technologies</span>
            </h2>
            <p className="about-tech-desc">
              {hoveredTechId ? activeSpotlight.tagline : DEFAULT_EDITORIAL}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
