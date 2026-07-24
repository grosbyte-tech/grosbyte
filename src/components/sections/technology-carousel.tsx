import { CodeXml, Mail } from "lucide-react";
import {
  SiDjango,
  SiExpo,
  SiGit,
  SiGithub,
  SiGo,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Tech = { name: string; category: string; icon: IconType | typeof CodeXml };
const technologies: readonly Tech[] = [
  { name: "Python", category: "Backend", icon: SiPython },
  { name: "Go", category: "Backend", icon: SiGo },
  { name: "Gin Framework", category: "Backend", icon: CodeXml },
  { name: "Django", category: "Backend", icon: SiDjango },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs },
  { name: "React", category: "Frontend", icon: SiReact },
  { name: "TypeScript", category: "Language", icon: SiTypescript },
  { name: "Expo", category: "Mobile", icon: SiExpo },
  { name: "React Native", category: "Mobile", icon: SiReact },
  { name: "Resend", category: "Email", icon: Mail },
  { name: "Git", category: "Tools", icon: SiGit },
  { name: "GitHub", category: "Tools", icon: SiGithub },
];

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="tech-set" aria-hidden={hidden || undefined}>
      {technologies.map(({ name, category, icon: Icon }) => (
        <article className="tech-item" key={name}>
          <Icon aria-hidden="true" />
          <div>
            <strong>{name}</strong>
            <small>{category}</small>
          </div>
        </article>
      ))}
    </div>
  );
}

export function TechnologyCarousel() {
  return (
    <section id="technology" className="section technology-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Technology"
            title="Modern tools. Practical choices."
            text="We select technologies based on the product, users, scale, maintainability, and long-term needs of the business."
            centered
          />
        </Reveal>
      </div>
      <Reveal className="tech-marquee">
        <div
          className="tech-track"
          tabIndex={0}
          aria-label="Technologies we work with"
        >
          <Track />
          <Track hidden />
        </div>
      </Reveal>
    </section>
  );
}
