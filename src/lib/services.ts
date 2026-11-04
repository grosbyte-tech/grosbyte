import { serviceOptions } from "./service-options";
export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
};
export type ServiceDetail = {
  slug: string;
  category: string;
  title: string;
  headline: string;
  summary: string;
  overview: string;
  audience: string[];
  deliverables: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  preparation: string;
  faq: { question: string; answer: string }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "development-technology",
    title: "Development & Technology",
    description:
      "Build software and digital products around your customers, your team, and the way your business operates.",
  },
  {
    id: "business-solutions",
    title: "Business Solutions",
    description:
      "Bring information and workflows together, reduce repetitive work, and introduce automation where it is useful.",
  },
  {
    id: "digital-marketing-branding",
    title: "Digital Marketing & Branding",
    description:
      "Make your business easier to find and understand through clear branding, useful content, and focused marketing.",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "custom-software-development",
    category: "development-technology",
    title: serviceOptions[0],
    headline: "Software shaped around the way you work.",
    summary:
      "Purpose-built business software for workflows, reporting, and internal operations that off-the-shelf tools do not adequately support.",
    overview:
      "Custom software turns a specific business process into a tool your team can use every day. We start by mapping the work, users, and constraints, then define a manageable scope for the first release.",
    audience: [
      "Teams relying on spreadsheets and disconnected tools",
      "Businesses with workflows that do not fit standard software",
      "Organisations improving an existing internal system",
    ],
    deliverables: [
      {
        title: "Workflow discovery",
        description:
          "Document the current process, user roles, priorities, and requirements.",
      },
      {
        title: "Business tools and dashboards",
        description:
          "Build the agreed operational features, reporting views, and administrative controls.",
      },
      {
        title: "Data and integrations",
        description:
          "Connect relevant systems and plan how existing information moves into the solution.",
      },
      {
        title: "Testing and handover",
        description:
          "Validate agreed workflows, explain how to use the system, and define the support scope.",
      },
    ],
    benefits: [
      {
        title: "Less duplicate work",
        description:
          "A shared workflow can reduce repeated entry and manual reconciliation.",
      },
      {
        title: "Better visibility",
        description:
          "Role-appropriate views help teams find the information needed for decisions.",
      },
      {
        title: "Room to evolve",
        description:
          "A maintainable foundation makes it easier to plan changes as requirements develop.",
      },
    ],
    preparation:
      "Bring an example of your current workflow, the tools involved, and the problems your team encounters.",
    faq: [
      {
        question: "Do we need a complete specification?",
        answer:
          "No. An initial discussion can start with the problem and current process. We can then work through requirements before agreeing on implementation.",
      },
      {
        question: "Can you improve existing software?",
        answer:
          "We can review its code, data, and integrations to assess practical options before proposing changes.",
      },
    ],
  },
  {
    slug: "website-ecommerce-development",
    category: "development-technology",
    title: serviceOptions[1],
    headline: "A clear, useful home for your business online.",
    summary:
      "Business websites and online stores that help visitors understand your offer, browse products, and take the next step.",
    overview:
      "A website should make it easy for people to find information and act on it. We plan the content, navigation, and customer journey before building a responsive site or store around your requirements.",
    audience: [
      "Businesses launching or updating their website",
      "Retailers planning an online store",
      "Teams improving enquiries, bookings, or product discovery",
    ],
    deliverables: [
      {
        title: "Structure and content planning",
        description:
          "Organise pages, product information, and the actions visitors need to take.",
      },
      {
        title: "Responsive design and development",
        description:
          "Build layouts and interactions that work across phones, tablets, and desktops.",
      },
      {
        title: "Store and enquiry features",
        description:
          "Implement agreed catalogues, checkout, payment-provider connections, bookings, or enquiry forms.",
      },
      {
        title: "Launch preparation",
        description:
          "Check functionality, accessibility, and technical search foundations, then plan the handover.",
      },
    ],
    benefits: [
      {
        title: "Clearer customer journeys",
        description:
          "Well-organised pages help visitors understand what you offer.",
      },
      {
        title: "Easier daily management",
        description:
          "Suitable editing and product workflows reduce friction for your team.",
      },
      {
        title: "A stronger technical foundation",
        description:
          "Responsive layouts and considered performance support a usable experience.",
      },
    ],
    preparation:
      "Share your current site, brand assets, content, and any product, payment, or booking requirements.",
    faq: [
      {
        question: "Can you work with our existing branding?",
        answer:
          "Yes. We can use your existing logo, palette, typography, and approved content as the starting point.",
      },
      {
        question: "Are payments and shipping included?",
        answer:
          "Their scope depends on the store, providers, and markets involved. We agree on integrations, account requirements, and any third-party fees before implementation.",
      },
    ],
  },
  {
    slug: "web-mobile-applications",
    category: "development-technology",
    title: serviceOptions[2],
    headline: "Applications people can use to get things done.",
    summary:
      "Web platforms and cross-platform mobile applications for customer services, team workflows, and digital products.",
    overview:
      "Applications bring a service or workflow into a focused digital experience. We help define the user journeys, design the interface, and build the frontend and backend features needed for the agreed release.",
    audience: [
      "Businesses taking a customer service online",
      "Teams planning a portal, booking platform, or SaaS product",
      "Organisations needing a mobile experience for customers or staff",
    ],
    deliverables: [
      {
        title: "Product and UX planning",
        description:
          "Define users, key journeys, wireframes, and a prioritised feature scope.",
      },
      {
        title: "Web and mobile interfaces",
        description:
          "Build accessible web experiences and cross-platform mobile interfaces using appropriate technologies.",
      },
      {
        title: "Backend services",
        description:
          "Develop agreed APIs, data models, access controls, and integrations.",
      },
      {
        title: "Testing and release preparation",
        description:
          "Review important devices and workflows, prepare releases, and document handover needs.",
      },
    ],
    benefits: [
      {
        title: "More convenient access",
        description:
          "Customers and staff can use services through a suitable web or mobile experience.",
      },
      {
        title: "Consistent workflows",
        description:
          "Connected application features help people complete tasks without switching between disconnected tools.",
      },
      {
        title: "Focused product development",
        description:
          "A prioritised first release creates a basis for feedback and further improvement.",
      },
    ],
    preparation:
      "Tell us who will use the application, the main tasks it should support, and the platforms you need.",
    faq: [
      {
        question: "Should we build a web app or a mobile app?",
        answer:
          "That depends on usage, device features, access requirements, and budget. We compare the options before choosing an approach.",
      },
      {
        question: "Can you connect to our existing backend?",
        answer:
          "We can assess the available APIs, documentation, authentication, and data requirements to plan a suitable integration.",
      },
    ],
  },
  {
    slug: "crm-erp-solutions",
    category: "business-solutions",
    title: serviceOptions[3],
    headline: "Bring customer and operational information together.",
    summary:
      "CRM and ERP solutions scoped around customer relationships, internal processes, reporting, and the information your teams share.",
    overview:
      "A CRM supports customer relationships and follow-ups; an ERP connects operational information across business functions. We begin with the processes you need to improve and assess whether configuration, integration, or custom development is appropriate.",
    audience: [
      "Teams managing customer information across multiple spreadsheets",
      "Businesses needing a clearer view of enquiries and follow-ups",
      "Organisations connecting operational records and reporting",
    ],
    deliverables: [
      {
        title: "Process and requirements mapping",
        description:
          "Identify the records, responsibilities, and reporting requirements that matter to your team.",
      },
      {
        title: "Solution planning",
        description:
          "Compare an existing platform, targeted integrations, and custom modules against the agreed needs.",
      },
      {
        title: "Workflows and shared records",
        description:
          "Implement scoped customer or operational workflows, user permissions, and reporting views.",
      },
      {
        title: "Migration and adoption planning",
        description:
          "Plan data cleanup, imports, validation, and guidance for the people using the system.",
      },
    ],
    benefits: [
      {
        title: "More consistent information",
        description:
          "Shared records can reduce conflicting versions and duplicated updates.",
      },
      {
        title: "Clearer responsibilities",
        description:
          "Defined workflows make ownership and next steps easier to understand.",
      },
      {
        title: "Useful reporting",
        description:
          "Agreed views help teams review customer activity and operational progress.",
      },
    ],
    preparation:
      "Bring examples of your records, current systems, user roles, and the reports you need. We will agree which functions belong in scope.",
    faq: [
      {
        question: "Do we need a full ERP implementation?",
        answer:
          "Not necessarily. A focused module, a CRM, or an integration may address the immediate problem with less complexity.",
      },
      {
        question: "Do you work with a specific vendor?",
        answer:
          "Platform selection depends on the requirements and available integrations. We do not assume a vendor or claim a vendor partnership; platform licensing and implementation scope are discussed separately.",
      },
    ],
  },
  {
    slug: "business-automation",
    category: "business-solutions",
    title: serviceOptions[4],
    headline: "Reduce repetitive work without losing oversight.",
    summary:
      "Workflow automation that connects routine tasks, information, and business tools while keeping exceptions visible.",
    overview:
      "Automation works best when the underlying process is clear. We map the trigger, inputs, decisions, and exceptions, then build a workflow that handles suitable tasks and keeps people involved where judgment is needed.",
    audience: [
      "Teams repeating the same data entry across tools",
      "Businesses managing manual approvals and notifications",
      "Operations teams assembling recurring reports or documents",
    ],
    deliverables: [
      {
        title: "Workflow assessment",
        description:
          "Identify repeated steps, bottlenecks, and tasks suitable for automation.",
      },
      {
        title: "Connected workflows",
        description:
          "Implement agreed triggers, data transfers, notifications, and approval steps.",
      },
      {
        title: "Exception handling",
        description:
          "Define validation, error reporting, and points that require a person to review the result.",
      },
      {
        title: "Testing and documentation",
        description:
          "Check representative scenarios and document how to operate and maintain the workflow.",
      },
    ],
    benefits: [
      {
        title: "Less repetitive administration",
        description:
          "Routine steps can run consistently without repeated manual input.",
      },
      {
        title: "More predictable handoffs",
        description:
          "Notifications and defined responsibilities help work move between teams.",
      },
      {
        title: "Visible exceptions",
        description:
          "Clear review points help teams handle cases that need attention.",
      },
    ],
    preparation:
      "Show us one repetitive process, including the steps, tools, frequency, and common exceptions.",
    faq: [
      {
        question: "Can an existing process be automated gradually?",
        answer:
          "Yes. A single well-defined workflow is often a useful starting point before expanding to more complex processes.",
      },
      {
        question: "Does automation require AI?",
        answer:
          "No. Rules, APIs, and scheduled workflows are often sufficient. AI is considered only when it fits the task.",
      },
    ],
  },
  {
    slug: "ai-automation-integrations",
    category: "business-solutions",
    title: serviceOptions[5],
    headline: "Use AI where it has a practical role.",
    summary:
      "AI assistants, knowledge search, document processing, and system integrations designed around a defined business use case.",
    overview:
      "AI can help people work with documents, find information, and handle repetitive language or data tasks. We assess the use case, available data, and expected limitations before integrating a suitable approach into your workflow.",
    audience: [
      "Teams searching through internal documents and knowledge",
      "Businesses processing repeated document-based tasks",
      "Product teams adding an assistant or AI-supported feature",
    ],
    deliverables: [
      {
        title: "Use-case and data review",
        description:
          "Clarify the task, available information, access requirements, and how results will be evaluated.",
      },
      {
        title: "Assistants and knowledge search",
        description:
          "Build agreed assistant or retrieval-augmented generation features connected to relevant information.",
      },
      {
        title: "Document and data workflows",
        description:
          "Prepare data, process documents, and connect results to existing applications; assess model training where needed.",
      },
      {
        title: "Evaluation and human review",
        description:
          "Test representative inputs and define review steps, error handling, and usage monitoring.",
      },
    ],
    benefits: [
      {
        title: "Easier access to information",
        description:
          "Relevant knowledge can be surfaced within the tools your team uses.",
      },
      {
        title: "Support for repetitive tasks",
        description:
          "Drafting, extraction, and classification can assist a human-led workflow.",
      },
      {
        title: "A controlled introduction to AI",
        description:
          "A focused use case helps assess usefulness before wider adoption.",
      },
    ],
    preparation:
      "Share the task you want to improve, sample inputs you are authorised to use, and how you would judge a useful result.",
    faq: [
      {
        question: "Will AI outputs always be correct?",
        answer:
          "No. Outputs can be incomplete or inaccurate. Evaluation, clear limits, and human review should match the consequences of an error.",
      },
      {
        question: "Can you work with our existing systems?",
        answer:
          "We assess APIs, data access, permissions, and provider constraints before agreeing on an integration. Third-party usage costs are discussed as part of the scope.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    category: "digital-marketing-branding",
    title: serviceOptions[6],
    headline: "A marketing plan connected to your business goals.",
    summary:
      "Coordinated digital marketing across content, search, social media, paid campaigns, and follow-ups, selected for your audience and resources.",
    overview:
      "Digital marketing connects your message with the people you want to reach. We review the audience, offer, and existing channels, then plan activity around a clear objective and useful measures of progress.",
    audience: [
      "Businesses establishing a consistent digital presence",
      "Teams coordinating several marketing channels",
      "Organisations improving how they attract and follow up on enquiries",
    ],
    deliverables: [
      {
        title: "Audience and channel planning",
        description:
          "Review the offer, customer journey, current activity, and suitable channels.",
      },
      {
        title: "Content and campaign planning",
        description:
          "Develop a practical schedule, messaging direction, and campaign requirements.",
      },
      {
        title: "Campaign delivery",
        description:
          "Prepare and manage agreed content, advertising, landing-page activity, or email flows.",
      },
      {
        title: "Reporting and refinement",
        description:
          "Review relevant traffic, enquiries, conversions, and feedback to adjust the next steps.",
      },
    ],
    benefits: [
      {
        title: "A consistent direction",
        description:
          "A shared plan connects content, campaigns, and the customer journey.",
      },
      {
        title: "More useful measurement",
        description:
          "Agreed metrics help distinguish activity from meaningful business interest.",
      },
      {
        title: "Better-informed decisions",
        description:
          "Results and customer feedback guide changes to channels, messages, and spend.",
      },
    ],
    preparation:
      "Tell us about your offer, audience, current channels, business priorities, and available marketing budget.",
    faq: [
      {
        question: "Is advertising spend included?",
        answer:
          "Advertising spend and third-party platform costs are agreed separately from the work required to plan and manage campaigns.",
      },
      {
        question: "Do you guarantee leads or sales?",
        answer:
          "No. Results depend on the offer, audience, market, budget, and sales follow-up. We agree on objectives and report on the work and available results.",
      },
    ],
  },
  {
    slug: "seo",
    category: "digital-marketing-branding",
    title: serviceOptions[7],
    headline: "Help people find and understand your website.",
    summary:
      "Search engine optimisation covering technical foundations, on-page content, and search insights relevant to your business.",
    overview:
      "SEO improves how a website can be discovered and understood in search. We review the site, the questions your customers ask, and the available search data, then prioritise technical and content improvements.",
    audience: [
      "Businesses whose websites are difficult to find in search",
      "Teams planning content around customer questions",
      "Organisations improving an existing website’s structure and technical health",
    ],
    deliverables: [
      {
        title: "Site and search review",
        description:
          "Review indexability, page structure, technical issues, and available search performance data.",
      },
      {
        title: "Keyword and content planning",
        description:
          "Identify relevant topics and search intent to guide page and content priorities.",
      },
      {
        title: "On-page improvements",
        description:
          "Improve agreed titles, descriptions, headings, internal links, and content structure.",
      },
      {
        title: "Monitoring and recommendations",
        description:
          "Track available search indicators and propose further changes based on the findings.",
      },
    ],
    benefits: [
      {
        title: "Clearer information structure",
        description:
          "Organised pages help visitors and search engines understand the site.",
      },
      {
        title: "More relevant content",
        description:
          "Customer-focused topics make pages more useful for the people you want to reach.",
      },
      {
        title: "A basis for ongoing improvement",
        description:
          "Search data helps prioritise the next technical and editorial changes.",
      },
    ],
    preparation:
      "Share your website, target audience, key products or services, and any available search analytics.",
    faq: [
      {
        question: "Can you guarantee a first-page ranking?",
        answer:
          "No. Rankings depend on search engines, competition, and many factors beyond the work on a website.",
      },
      {
        question: "Is SEO a one-time task?",
        answer:
          "Some technical issues can be addressed in a focused project. Content, search behaviour, and competitors change, so ongoing review may also be useful.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    category: "digital-marketing-branding",
    title: serviceOptions[8],
    headline: "A clear and consistent presence on social channels.",
    summary:
      "Social content, campaign planning, and performance review for the platforms your audience uses.",
    overview:
      "Social media marketing combines useful content with a clear brand voice and a practical publishing rhythm. We work with your team to plan topics, prepare creative assets, and review how people respond.",
    audience: [
      "Businesses building a consistent social presence",
      "Teams needing a structured content and approval process",
      "Brands planning social campaigns around products or services",
    ],
    deliverables: [
      {
        title: "Channel and audience review",
        description:
          "Identify suitable platforms, content themes, and objectives.",
      },
      {
        title: "Content calendar and creative",
        description:
          "Prepare agreed captions, visuals, and a publishing plan aligned with the brand.",
      },
      {
        title: "Publishing and campaign coordination",
        description:
          "Coordinate approved posts and, where scoped, paid social campaigns.",
      },
      {
        title: "Performance review",
        description:
          "Review reach, engagement, enquiries, and available campaign data to guide improvements.",
      },
    ],
    benefits: [
      {
        title: "More consistent communication",
        description:
          "A content plan helps keep messaging and visual presentation coherent.",
      },
      {
        title: "Relevant audience interaction",
        description:
          "Content can address the questions and interests of the people you want to reach.",
      },
      {
        title: "A manageable publishing process",
        description:
          "Agreed responsibilities and approvals make day-to-day coordination easier.",
      },
    ],
    preparation:
      "Share your social profiles, brand assets, products or services, and the content your team can provide.",
    faq: [
      {
        question: "Which platforms should we use?",
        answer:
          "The right choice depends on your audience and content. We assess the fit rather than assuming every platform is necessary.",
      },
      {
        question: "Who handles comments and messages?",
        answer:
          "Community management, response responsibilities, and escalation rules are agreed as part of the scope.",
      },
    ],
  },
  {
    slug: "branding-design",
    category: "digital-marketing-branding",
    title: serviceOptions[9],
    headline: "Make your business easier to recognise and understand.",
    summary:
      "Brand identity, visual communication, and interface design that bring consistency to your digital presence.",
    overview:
      "Branding gives your business a coherent way to present itself; design applies that identity to the places customers interact with it. We work from your positioning, audience, and existing assets to define a useful visual direction.",
    audience: [
      "Businesses establishing a visual identity",
      "Teams with inconsistent materials across channels",
      "Products needing clearer interfaces and a shared design system",
    ],
    deliverables: [
      {
        title: "Brand and design direction",
        description:
          "Review the audience, positioning, current assets, and intended applications.",
      },
      {
        title: "Identity and visual assets",
        description:
          "Develop agreed identity elements, colour and typography guidance, and supporting digital assets.",
      },
      {
        title: "Marketing and interface design",
        description:
          "Create scoped campaign visuals, layouts, wireframes, prototypes, or UI components.",
      },
      {
        title: "Guidelines and handover",
        description:
          "Provide the agreed files and usage guidance so the identity can be applied consistently.",
      },
    ],
    benefits: [
      {
        title: "A more consistent identity",
        description:
          "Shared visual guidance helps teams communicate as one business.",
      },
      {
        title: "Clearer digital experiences",
        description:
          "Thoughtful hierarchy and interface design help people find what they need.",
      },
      {
        title: "Reusable design foundations",
        description:
          "Templates and components can make future content and product work easier.",
      },
    ],
    preparation:
      "Bring your existing brand assets, audience context, examples of current materials, and the deliverables you need.",
    faq: [
      {
        question: "Do we need a complete rebrand?",
        answer:
          "No. We can work within an established identity and improve the specific assets or interfaces that need attention.",
      },
      {
        question: "What files will we receive?",
        answer:
          "Formats, editable source files, templates, and usage guidance are defined in the agreed deliverables before design work begins.",
      },
    ],
  },
];

export function getService(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
