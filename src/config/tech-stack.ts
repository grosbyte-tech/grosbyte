export interface TechItem {
  id: string;
  name: string;
  categoryLabel: string;
  tagline: string;
  size: "sm" | "md" | "lg";
  pos: { left: string; top: string };
  color: string;
  iconSrc: string;
}

export const TECH_CATALOG: TechItem[] = [
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

export const DEFAULT_TECH_EDITORIAL =
  "We employ modern full-stack web frameworks, enterprise backend systems, scalable databases, cloud infrastructure, and intelligent automation—including Next.js, React, TypeScript, Python, Node.js, Spring Boot, n8n, AWS, and PostgreSQL—to help you build and scale resilient applications.";
