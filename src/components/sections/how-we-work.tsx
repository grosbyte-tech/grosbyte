"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
  points: string[];
  image: { src: string; width: number; height: number };
}

const STEPS: Step[] = [
  {
    title: "Discover & Validate Vision",
    description:
      "We start by understanding your business, users and goals, then validate the idea so we build the right product from day one.",
    points: [
      "Stakeholder workshops and goal setting",
      "Market and competitor research",
      "User personas and core journeys",
      "Clear scope and success metrics",
    ],
    image: { src: "/how-we-work-steps/team-1.webp", width: 1100, height: 833 },
  },
  {
    title: "Strategic Project Planning",
    description:
      "We turn the vision into a practical roadmap with milestones, timelines and the right tech stack, so you always know what comes next.",
    points: [
      "Feature roadmap and milestones",
      "Architecture and tech stack choice",
      "Sprint plan with clear timelines",
      "Transparent budget and estimates",
    ],
    image: { src: "/how-we-work-steps/team-2.webp", width: 793, height: 453 },
  },
  {
    title: "Intuitive UI/UX Design",
    description:
      "Our designers craft clean, user-friendly interfaces and interactive prototypes you can test before a single line of code is written.",
    points: [
      "Wireframes and user flows",
      "High-fidelity UI designs",
      "Clickable prototypes",
      "Reusable design system",
    ],
    image: { src: "/how-we-work-steps/team-3.webp", width: 741, height: 399 },
  },
  {
    title: "Agile Software Development",
    description:
      "We build in short, focused sprints with regular demos, so you see real progress every week and can give feedback early.",
    points: [
      "Weekly sprints and demos",
      "Clean, scalable code",
      "Web, mobile and API development",
      "Continuous integration",
    ],
    image: { src: "/how-we-work-steps/team-4.webp", width: 803, height: 430 },
  },
  {
    title: "QA Testing & Deployment",
    description:
      "Every feature is tested on real devices and browsers, then deployed through automated pipelines for a smooth, reliable release.",
    points: [
      "Manual and automated testing",
      "Performance and security checks",
      "CI/CD pipelines",
      "Zero-downtime deployment",
    ],
    image: { src: "/how-we-work-steps/team-5.webp", width: 759, height: 480 },
  },
  {
    title: "Launch & Client Feedback",
    description:
      "We launch your product, monitor how real users use it and turn their feedback into the next set of improvements.",
    points: [
      "App Store and Play Store launch",
      "Analytics and monitoring setup",
      "Feedback sessions with your team",
      "Quick fixes and iterations",
    ],
    image: { src: "/how-we-work-steps/team-6.webp", width: 968, height: 569 },
  },
  {
    title: "Ongoing Training & Support",
    description:
      "After launch we stay with you, training your team, keeping everything updated and adding new features as your business grows.",
    points: [
      "Team training and documentation",
      "24/7 monitoring and support",
      "Regular updates and maintenance",
      "New features as you scale",
    ],
    image: { src: "/how-we-work-steps/team-7.webp", width: 734, height: 447 },
  },
];

const num = (i: number) => String(i + 1).padStart(2, "0");

export function HowWeWork() {
  const [open, setOpen] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, height } = list.getBoundingClientRect();
      const progress = (window.innerHeight / 2 - top) / height;
      const step = Math.floor(progress * STEPS.length);
      setOpen(Math.min(STEPS.length - 1, Math.max(0, step)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const goTo = (i: number) => {
    const list = listRef.current;
    if (!list) return;
    const { top, height } = list.getBoundingClientRect();
    window.scrollBy({
      top: top + ((i + 0.5) / STEPS.length) * height - window.innerHeight / 2,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="how-we-work"
      className="relative w-full bg-[#F1F5F9] px-4 py-12 [overflow-anchor:none] sm:px-6 lg:px-12 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 pb-8 sm:flex-row sm:items-end sm:justify-between lg:pb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              How We <span className="text-brand-gradient">Work</span>
            </h2>
          </div>
          <Button
            href="/contact"
            variant="glowing"
            size="default"
            className="group self-start sm:self-auto"
          >
            <span>See full process</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        <ol ref={listRef}>
          {STEPS.map((step, i) => {
            const isOpen = i === open;
            return (
              <li
                key={step.title}
                className="relative"
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    "hww-card absolute inset-0 rounded-3xl shadow-[0_30px_80px_-30px_rgba(29,78,216,0.45)] transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
                    isOpen ? "scale-100 opacity-100" : "scale-[0.97] opacity-0",
                  )}
                />
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => goTo(i)}
                  className={cn(
                    "group relative flex w-full items-center gap-6 rounded-3xl px-2 py-6 text-left transition-colors focus-visible:outline-none sm:gap-14 sm:px-10 sm:py-8",
                    !isOpen && "hover:bg-blue-500/5 focus-visible:bg-blue-500/5",
                  )}
                >
                  <span
                    className={cn(
                      "w-14 shrink-0 text-4xl leading-none font-light tracking-tight text-foreground transition-transform duration-500 sm:text-5xl",
                      isOpen && "sm:scale-110",
                    )}
                  >
                    {num(i)}
                  </span>
                  <span
                    className={cn(
                      "flex-1 text-lg font-medium tracking-tight text-foreground transition-all duration-500 sm:text-2xl",
                      isOpen && "font-semibold",
                    )}
                  >
                    {step.title}
                  </span>
                  <Image
                    src="/how-we-work-steps/plus.svg"
                    alt=""
                    width={26}
                    height={26}
                    unoptimized
                    className={cn(
                      "shrink-0 transition-[transform,opacity] duration-500",
                      isOpen ? "rotate-45 opacity-0" : "group-hover:rotate-90",
                    )}
                  />
                </button>

                <div
                  inert={!isOpen}
                  className={cn(
                    "relative grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-6 px-2 sm:px-10 lg:grid-cols-2">
                      <div className="pb-2 sm:pl-28 lg:pb-10">
                        <p
                          className={cn(
                            "max-w-md text-base leading-relaxed text-foreground/80 transition-[opacity,transform] duration-500 motion-reduce:transition-none",
                            isOpen
                              ? "translate-y-0 opacity-100 delay-150"
                              : "translate-y-3 opacity-0",
                          )}
                        >
                          {step.description}
                        </p>
                        <ul className="mt-6 space-y-3 sm:pl-4">
                          {step.points.map((point, j) => (
                            <li
                              key={point}
                              style={{
                                transitionDelay: isOpen
                                  ? `${220 + j * 70}ms`
                                  : "0ms",
                              }}
                              className={cn(
                                "flex items-center gap-2 text-sm font-medium text-foreground transition-[opacity,transform] duration-500 motion-reduce:transition-none sm:text-base",
                                isOpen
                                  ? "translate-x-0 opacity-100"
                                  : "-translate-x-4 opacity-0",
                              )}
                            >
                              <Image
                                src="/how-we-work-steps/sparkle.svg"
                                alt=""
                                width={18}
                                height={18}
                                unoptimized
                                className="shrink-0"
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className={cn(
                          "flex h-55 items-end justify-center transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none sm:h-85",
                          isOpen
                            ? "translate-y-0 scale-100 opacity-100 delay-200"
                            : "translate-y-8 scale-95 opacity-0",
                        )}
                      >
                        <Image
                          src={step.image.src}
                          alt={step.title}
                          width={step.image.width}
                          height={step.image.height}
                          sizes="(max-width: 1024px) 90vw, 600px"
                          className="h-auto max-h-full w-auto max-w-full drop-shadow-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sky-blue gradient divider line: strong (top) to light (bottom) */}
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-b from-sky-400 to-sky-400/10 transition-opacity duration-500",
                      isOpen || i === open - 1 ? "opacity-0" : "opacity-100",
                    )}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
