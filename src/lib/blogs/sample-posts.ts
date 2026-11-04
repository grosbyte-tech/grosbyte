import type { BlogPost } from "./types";

export const samplePosts: BlogPost[] = [
  {
    slug: "planning-a-business-website",
    title: "Planning a business website around customer decisions",
    category: "Web Development",
    excerpt:
      "A useful website starts with the questions customers need answered, before choosing a layout or platform.",
    publishedAt: "2026-10-20",
    serviceSlug: "website-ecommerce-development",
    featured: true,
    sections: [
      {
        heading: "Start with the visitor’s task",
        paragraphs: [
          "Someone arriving from a search result may need to compare services, check whether you serve their location, or understand how to enquire. Write down these tasks before making a page list. A homepage cannot answer every question, but it can direct each visitor to a useful next step. Interview the people who answer customer calls: recurring questions often make the strongest starting point for website content.",
        ],
      },
      {
        heading: "Give each page a job",
        paragraphs: [
          "A service page should explain the offer, its boundaries, and what information a customer should provide. An enquiry page should make contact straightforward. Avoid adding pages simply because competitors have them. Sketch a short journey from a search query to a relevant service and then to contact. If a visitor must guess where to go next, the structure needs more work.",
        ],
      },
      {
        heading: "Prepare content before visual polish",
        paragraphs: [
          "Collect service descriptions, approved contact details, genuine photographs, and answers to common questions. Assign someone to check factual accuracy. Missing content often becomes a delivery dependency, so include it in the project plan alongside development. Use descriptive headings and clear link text; these help people scanning a page and people navigating with assistive technology.",
        ],
      },
      {
        heading: "Define what ready means",
        paragraphs: [
          "Agree on checks for mobile navigation, enquiry delivery, readable text, and essential page metadata. Test with realistic content rather than short placeholder sentences. After launch, review which enquiries arrive and where customers still need clarification. Use that evidence to prioritise improvements instead of redesigning everything at once.",
        ],
      },
    ],
  },
  {
    slug: "custom-software-or-existing-tools",
    title: "Custom software or an existing tool? A practical decision guide",
    category: "Software Development",
    excerpt:
      "Compare workflow fit, ownership, and ongoing effort before committing to a custom build.",
    publishedAt: "2026-10-21",
    serviceSlug: "custom-software-development",
    featured: true,
    sections: [
      {
        heading: "Describe the constraint first",
        paragraphs: [
          "“We need an app” is a solution proposal, not yet a problem definition. Describe the work that is slow, error-prone, or difficult to coordinate. Note who does it, how often it happens, and which information they need. Include exceptions such as cancelled orders or incomplete records. These details make it easier to compare an existing product with a custom solution.",
        ],
      },
      {
        heading: "Try configuration before replacement",
        paragraphs: [
          "An existing tool may already support the main workflow through configuration or a small integration. Evaluate it with a realistic example rather than a feature checklist alone. Ask staff to complete their daily tasks and record the awkward steps. A tool with fewer features may be a better fit if the essential work is clear and dependable.",
        ],
      },
      {
        heading: "Account for ownership",
        paragraphs: [
          "A custom system brings responsibility for hosting, access management, maintenance, and future changes. A subscription product brings vendor constraints, recurring fees, and possible export limitations. Compare the ongoing work as well as the initial price. Establish who can approve changes and who will maintain the system when people or suppliers change.",
        ],
      },
      {
        heading: "Start with a bounded release",
        paragraphs: [
          "If a custom build is justified, choose one workflow that can deliver a useful first release. Define its inputs, outputs, permissions, and acceptance criteria. Keep an export path for important records and plan how existing data will be checked during migration. Expand after the team has used the first version in real work and can explain what should improve next.",
        ],
      },
    ],
  },
  {
    slug: "choosing-your-first-automation",
    title: "Choosing the first workflow to automate",
    category: "Business Automation",
    excerpt:
      "Find repeatable work, define exceptions, and keep a clear route back to a person.",
    publishedAt: "2026-10-22",
    serviceSlug: "business-automation",
    featured: false,
    sections: [
      {
        heading: "Look for predictable repetition",
        paragraphs: [
          "Copying enquiry details between systems or sending a routine reminder can be a useful starting point. Choose work with a clear trigger and a stable result. A process that changes every week may need clarification before automation. Ask the people doing the work where they repeat information and where they rely on judgement; these are different kinds of problems.",
        ],
      },
      {
        heading: "Map the unhappy path",
        paragraphs: [
          "Write down what should happen when a record is missing, a customer uses a different email address, or an external service is unavailable. Decide whether the workflow should retry, pause, or ask someone to review it. An automation that silently skips failures can create more work than it saves. Name the person or team who will receive and resolve exceptions.",
        ],
      },
      {
        heading: "Limit access to what is needed",
        paragraphs: [
          "List the systems and fields the automation needs to read or change. Avoid broad access simply because it is easier to configure. Keep credentials outside shared spreadsheets and establish how access will be removed if the workflow is retired. For actions that send messages or modify important records, include a review step until the behaviour is understood.",
        ],
      },
      {
        heading: "Measure a small pilot",
        paragraphs: [
          "Run the workflow with a limited set of records and compare its output with the current process. Track failures, duplicate actions, and manual corrections, as well as time spent. Agree on a way to pause the automation without losing incoming work. Expand only after the team understands both the normal path and the recovery steps.",
        ],
      },
    ],
  },
  {
    slug: "seo-before-a-website-launch",
    title: "SEO checks to include before a website launch",
    category: "Digital Marketing",
    excerpt:
      "Make pages understandable and discoverable without treating search visibility as a guaranteed outcome.",
    publishedAt: "2026-10-23",
    serviceSlug: "seo",
    featured: false,
    sections: [
      {
        heading: "Match pages to useful questions",
        paragraphs: [
          "Choose a distinct purpose for each important page. A service page can explain the problems it addresses, the scope of the offer, and the next step for an enquiry. Avoid creating near-identical pages just to repeat keywords. Useful detail helps visitors decide whether the service is relevant; it also makes page titles and descriptions easier to write accurately.",
        ],
      },
      {
        heading: "Check the paths through the site",
        paragraphs: [
          "Use descriptive links between related pages and verify that navigation reaches every important section. Check for broken URLs and decide where old pages should redirect if the site is replacing an existing one. Keep redirects relevant to the original content. Sending every removed page to the homepage can leave visitors without the information they expected.",
        ],
      },
      {
        heading: "Review what search engines can see",
        paragraphs: [
          "Confirm that public pages are not unintentionally blocked from indexing and that canonical URLs match the intended addresses. Give each page an accurate title and description. Use semantic headings that reflect the content hierarchy. These checks improve clarity and discoverability, but they do not promise a particular ranking or a fixed timeline for search traffic.",
        ],
      },
      {
        heading: "Make launch the beginning of review",
        paragraphs: [
          "After publishing, inspect important pages on mobile and verify that enquiry links work. Review indexing and search query information when it becomes available. If visitors arrive with questions a page does not answer, update the content. Keep a simple record of changes so later observations can be understood in context rather than attributed to guesswork.",
        ],
      },
    ],
  },
  {
    slug: "ai-assistance-with-human-review",
    title: "Where AI assistance fits in a business workflow",
    category: "Technology & Business",
    excerpt:
      "Separate useful suggestions from actions that need verification, approval, and a clear owner.",
    publishedAt: "2026-10-24",
    serviceSlug: "ai-automation-integrations",
    featured: false,
    sections: [
      {
        heading: "Choose a task with reviewable output",
        paragraphs: [
          "Drafting a response, summarising a long enquiry, or suggesting a category can be reasonable experiments because someone can inspect the result. Begin with a narrow task and examples of acceptable output. Avoid assuming that a fluent answer is an accurate one. Identify which facts must come from your own records and how a reviewer can check them.",
        ],
      },
      {
        heading: "Decide what information can be used",
        paragraphs: [
          "Before connecting a model to a business system, list the data it will receive and why each field is necessary. Remove information that is not relevant to the task. Check the provider and deployment settings with the person responsible for your organisation’s data handling. Keep secrets and credentials out of prompts, and avoid treating incoming documents as trusted instructions.",
        ],
      },
      {
        heading: "Keep approval at consequential steps",
        paragraphs: [
          "A suggested reply is different from sending that reply to a customer. A draft record is different from changing a live account. Make those boundaries visible in the interface and decide who can approve an action. Give reviewers the original source alongside the suggestion so they can assess it without switching between several tools.",
        ],
      },
      {
        heading: "Test failure as well as usefulness",
        paragraphs: [
          "Try incomplete, contradictory, and unfamiliar examples during a pilot. Record where the system produces an unsupported answer or fails to recognise uncertainty. Provide a manual route when a result is unsuitable. Evaluate the review effort alongside any time saved; if checking the output takes longer than doing the task, the workflow may need a different approach.",
        ],
      },
    ],
  },
  {
    slug: "building-a-content-plan",
    title: "Building a content plan your team can maintain",
    category: "Digital Marketing",
    excerpt:
      "Turn recurring customer questions into a manageable publishing routine with clear ownership.",
    publishedAt: "2026-10-25",
    serviceSlug: "social-media-marketing",
    featured: false,
    sections: [
      {
        heading: "Use questions you already hear",
        paragraphs: [
          "Collect the questions that appear in enquiries, sales conversations, and support messages. Group them by the decision a customer is trying to make. A short explanation of how a service works may be more useful than a broad trend post. Remove identifying customer details and confirm any business facts before turning a conversation into public content.",
        ],
      },
      {
        heading: "Choose a sustainable scope",
        paragraphs: [
          "Start with a small number of topics and a frequency your team can maintain. Consider the time needed for writing, factual review, design, and publication. Assign an owner for each step rather than assuming someone will pick it up. A realistic routine gives the team room to respond to questions and improve older material as well as create new posts.",
        ],
      },
      {
        heading: "Connect content to a next step",
        paragraphs: [
          "Each piece should answer a useful question and, where relevant, link to a service or a fuller explanation. Avoid forcing a sales message into every paragraph. Keep the next step proportionate: a reader learning about a topic may need more information before making an enquiry. Use consistent terminology so the social post and destination page describe the same offer.",
        ],
      },
      {
        heading: "Review quality as well as reach",
        paragraphs: [
          "Look at the questions readers ask and whether enquiries show a clearer understanding of the service. Reach and clicks provide context, but do not explain everything. Revisit content that creates confusion, and update information when the offer changes. Keep the plan flexible enough to reflect customer needs instead of publishing solely to fill a calendar.",
        ],
      },
    ],
  },
];
