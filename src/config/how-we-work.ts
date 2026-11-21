export interface Step {
  title: string;
  description: string;
  points: string[];
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export const HOW_WE_WORK_STEPS: Step[] = [
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
    image: { src: "/images/how-we-work/step-1.png", width: 1452, height: 1083 },
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
    image: { src: "/images/how-we-work/step-2.png", width: 1568, height: 1003 },
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
    image: { src: "/images/how-we-work/step-3.png", width: 1536, height: 1024 },
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
    image: { src: "/images/how-we-work/step-4.png", width: 1024, height: 500 },
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
    image: { src: "/images/how-we-work/step-5.png", width: 1574, height: 999 },
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
    image: { src: "/images/how-we-work/step-6.png", width: 1602, height: 981 },
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
    image: { src: "/images/how-we-work/step-1.png", width: 1602, height: 682 },
  },
];
