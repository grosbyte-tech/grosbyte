"use client";

import Image from "next/image";
import { useTranslation } from "@/contexts/language-context";
import { Reveal } from "@/components/motion/reveal";
import { FoldingText } from "@/components/ui/folding-text";
import { AnimatedParagraph } from "@/components/motion/animated-paragraph";

type ProjectKey = "tailr" | "booksansar" | "dhune" | "sopdraft" | "setu";

interface ProjectMeta {
  key: ProjectKey;
  image: string;
}

const projectsMap: Record<ProjectKey, ProjectMeta> = {
  tailr: {
    key: "tailr",
    image: "/Tailr.png",
  },
  booksansar: {
    key: "booksansar",
    image: "/BookSansar.png",
  },
  dhune: {
    key: "dhune",
    image: "/Dhune.png",
  },
  sopdraft: {
    key: "sopdraft",
    image: "/SopDraft.png",
  },
  setu: {
    key: "setu",
    image: "/Setu.png",
  },
};

// 3 Staggered Columns with unique combinations
const column1Keys: ProjectKey[] = ["tailr", "booksansar", "dhune"];
const column2Keys: ProjectKey[] = ["dhune", "setu", "sopdraft", "tailr"];
const column3Keys: ProjectKey[] = ["setu", "sopdraft", "booksansar"];

function ProjectFlowCard({
  projectKey,
  t,
}: {
  projectKey: ProjectKey;
  t: (key: string) => string;
}) {
  const project = projectsMap[projectKey];
  const title = t(`projectsSection.items.${project.key}.title`);
  const category = t(`projectsSection.items.${project.key}.category`);
  const tagline = t(`projectsSection.items.${project.key}.tagline`);

  return (
    <div className="project-flow-card group block p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0b1120] shadow-[0_4px_20px_rgba(15,23,42,0.04)] dark:shadow-none transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)] dark:hover:border-blue-500/40 dark:hover:shadow-[0_0_24px_rgba(9,102,250,0.22)] select-none">
      {/* Clean Screenshot Frame - Fitted Native Ratio */}
      <div className="relative aspect-[2940/1612] w-full overflow-hidden rounded-xl bg-transparent">
        <Image
          src={project.image}
          alt={`${title} - ${tagline}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Card Content & Details */}
      <div className="pt-3.5 sm:pt-4 flex flex-col">
        <div className="mb-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-blue)]">
            {category}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight">
          {title}
        </h3>

        <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
          {tagline}
        </p>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { t } = useTranslation();

  const highlightWords =
    (t("projectsSection.highlightWords") as unknown as string[]) || [
      "products",
      "engineered",
    ];

  // Repeat items 3 times for a continuous seamless vertical loop
  const col1Items = [...column1Keys, ...column1Keys, ...column1Keys];
  const col2Items = [...column2Keys, ...column2Keys, ...column2Keys];
  const col3Items = [...column3Keys, ...column3Keys, ...column3Keys];

  return (
    <section className="section projects-section" id="work">
      <div className="container">
        <Reveal className="section-heading section-heading-centered">
          <p className="eyebrow">{t("projectsSection.eyebrow") || "Selected Work"}</p>
          <FoldingText
            as="h2"
            text={
              t("projectsSection.title") ||
              "Real products engineered for business growth."
            }
            highlightWords={highlightWords}
          />
          <AnimatedParagraph
            text={
              t("projectsSection.subtitle") ||
              "Explore live web platforms, marketplaces, and SaaS tools crafted with precision, clean code, and scalable architecture."
            }
            delay={0.25}
          />
        </Reveal>

        {/* Vertical Animated Flow Container (Hover to Pause) */}
        <div
          className="projects-flow-container"
          aria-label="Interactive showcase of featured projects scrolling vertically"
        >
          {/* Column 1 - Flows UP */}
          <div className="projects-flow-col projects-col-1">
            <div className="projects-flow-track">
              {col1Items.map((key, i) => (
                <ProjectFlowCard
                  key={`col1-${key}-${i}`}
                  projectKey={key}
                  t={t}
                />
              ))}
            </div>
          </div>

          {/* Column 2 - Flows DOWN */}
          <div className="projects-flow-col projects-col-2">
            <div className="projects-flow-track">
              {col2Items.map((key, i) => (
                <ProjectFlowCard
                  key={`col2-${key}-${i}`}
                  projectKey={key}
                  t={t}
                />
              ))}
            </div>
          </div>

          {/* Column 3 - Flows UP */}
          <div className="projects-flow-col projects-col-3">
            <div className="projects-flow-track">
              {col3Items.map((key, i) => (
                <ProjectFlowCard
                  key={`col3-${key}-${i}`}
                  projectKey={key}
                  t={t}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
