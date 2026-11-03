# Grosbyte Technologies — Website Upgrade Plan

**Status:** Planning approved; implementation will proceed in small, reviewable phases.  
**Site:** https://www.grosbyte.com  
**Primary stack:** Existing Next.js application (inspect repository to confirm version, routing, styling, and dependencies).  
**Last updated:** 2026-11-03

> This document is the source-of-truth brief for upcoming Codex tasks. It is a plan, **not** an instruction to implement every phase in a single run. Codex must execute only the phase specified in a separate prompt, preserve existing functionality, and stop for review after that phase.

## 1. Goal

Refine the existing Grosbyte website into a distinctive, credible, human-feeling technology agency site. Improve clarity, information architecture, consistency, responsiveness, accessibility, SEO, and contact conversion without replacing the established brand identity.

Keep useful existing content and behavior where appropriate. Prefer targeted improvement over a full rewrite. Do not add decorative elements or marketing claims merely to fill space.

## 2. Non-negotiable constraints

1. **Do not change or recreate the existing Grosbyte logo.** Use the current logo assets as-is, preserving proportions, colors, spacing, and quality; do not replace it with an AI-generated logo.
2. **Do not rebrand.** Keep Grosbyte's established brand palette, especially deep navy `#06142E`, blue `#2A68E1`, and white `#FFFFFF`. The design audit observed `#2476FF` on one page; that observation is **not** authorization to replace the official brand blue. Inspect actual project assets and CSS to reconcile any existing uses without silently changing the brand.
3. Do not clone or copy Infinity Digital Agency. Its site is an **inspiration for service organization, layout patterns, content hierarchy, and components**, not for its logo, wording, colors, imagery, or exact UI.
4. **No Projects, Portfolio, Case Studies, or Our Work page in this release.** Do not add navigation links or fabricated projects. Do not invent testimonials, clients, outcomes, certifications, team bios, addresses, phone numbers, or statistics.
5. **Blogs are required**, but initially use **static, local sample data** only. No admin panel, CMS, database, authentication, or publishing API in this upgrade. Make it straightforward to replace the data source later.
6. Keep working site features functioning. Do not remove existing integrations or break current links/forms. If a requested behavior needs credentials or server setup, provide a safe placeholder or document the required configuration rather than faking success.
7. Build with existing repository conventions wherever sensible; do not introduce large dependencies or a new design framework without a concrete need.
8. Prioritize clean, minimal, purposeful design: avoid generic AI-generated SaaS appearance, stock illustrations, excessive gradients, glowing blobs, random icons, over-animated effects, and repeated identical card grids.
9. Use original, specific language. Explain what Grosbyte actually delivers. Do not promise services or capabilities that cannot be verified from the current company content; clearly flag proposed additions for review.
10. Implement **one phase at a time**. After each phase: report files changed, key decisions, checks run, known issues, and what needs user approval. Await the next prompt before starting another phase.

## 3. Research basis and its limitations

### Grosbyte Design DNA (audited 2026-11-03)
- One scanned page; findings are indicative, not a complete repository/site audit.
- Observed typeface: **Urbanist**.
- Observed layout patterns: **hero, features, sticky/fixed navbar**.
- Observed colors: white/light background, dark text, blue actions; 4px spacing rhythm.
- Audit recommends centralizing CSS design tokens and standardizing buttons.
- Existing homepage messaging includes broad statements such as “Digital solutions built around your business”; rewrite only when copy can be clearer and more specific.

### Inspiration: Infinity Digital Agency (audited 2026-11-03)
- One scanned page; do not treat findings as a complete study of that website.
- Useful references: grouping services, detailed service descriptions, clear navigation, blog discoverability, CTA placement, and varied section layouts.
- Do **not** import its Outfit font, pink/green accents, brand colors, logo, imagery, or copy.

### Source files provided
- `Design DNA Report.pdf` — Grosbyte audit.
- `design-dna.json` — Grosbyte machine-readable extraction.
- `Design DNA Report_.pdf` — inspiration audit for Infinity Digital Agency.

These reports are guides. **Actual code and assets in the repository take priority for current implementation details.**

## 4. Proposed sitemap and navigation

| Page | Preferred route | Purpose | Release |
|---|---|---|---|
| Home | `/` | Explain what Grosbyte does; guide visitors to services or contact | Phase 1 |
| About Us | `/about` | Honest company introduction, approach, values, working principles | Phase 1 |
| Services overview | `/services` | Categorize and explain offerings with practical outcomes | Phase 2 |
| Service details | `/services/[slug]` | Expand on each confirmed service; scope/deliverables/FAQ/CTA | Phase 2, if appropriate |
| How We Work | `/how-we-work` | Discovery, planning, design, development, QA, handover/support | Phase 3 |
| Contact Us | `/contact` | Clear ways to reach Grosbyte and a usable project inquiry form | Phase 4 |
| Blog listing | `/blogs` | Featured articles, sample categories, accessible browse/filter | Phase 5 |
| Blog detail | `/blogs/[slug]` | Static article pages with proper structure and metadata | Phase 5 |

**Navigation target:** Home, About, Services, How We Work, Blogs, Contact; a prominent **Start a Project** CTA links to `/contact` (or the existing working inquiry flow until Phase 4). Keep desktop and mobile navigation accessible and easy to use. Avoid dead links during phased rollout: don't expose routes before they exist.

Optional future expansions (NOT in scope): Projects/Portfolio, client dashboards, blog admin/CMS, multilingual support, careers, newsletter, advanced analytics.

## 5. Content and service architecture

Organize **verified** offerings into coherent groups. Proposed grouping is for discussion and may be adjusted after checking existing site copy:

**Development & Technology**
- Custom Software Development
- Website and Web Application Development
- E-commerce Development
- Mobile Application Development

**Business Solutions & Automation**
- Business Process / Workflow Automation
- CRM / ERP or internal tools (only if Grosbyte genuinely offers these)
- Integrations and AI-assisted tools (only where supported)

**Digital Marketing & Branding**
- Digital Marketing / Social Media Marketing
- SEO
- Branding and Design

For every service, communicate: **business problem → what we provide → expected deliverables → process → realistic CTA**. Avoid presenting hypothetical services or outcomes as proven capabilities. Emphasize simple, concrete explanations accessible to Nepal-based and international businesses.

## 6. Cross-site design and implementation rules

### Brand and style
- Preserve existing logo and brand colors (`#06142E`, `#2A68E1`, `#FFFFFF`).
- Prefer current **Urbanist** typography unless inspection reveals another intentional established site-wide typography choice.
- Use whitespace, restrained accent colors, readable widths, thoughtful text hierarchy, and careful alignment.
- Establish semantic design tokens (brand, text, surface, border, radius, spacing) using the repo's existing styling approach; avoid widespread hardcoded values.
- Standardize primary, secondary, and text-link button treatments with predictable states.
- Vary composition intentionally: editorial text columns, two-column media/text, explanatory steps, selective feature grids, simple tables/FAQs where useful.
- No ornamental effects that reduce legibility or performance.

### Engineering quality
- Reuse shared layout/components: navigation, footer, container, section header, CTA, buttons, form controls, article cards.
- Follow current Next.js router conventions and TypeScript setup if present.
- Favor server components where suitable; only use client components for genuine interactivity.
- Responsive behavior for mobile/tablet/desktop; no horizontal overflow.
- Semantic HTML, logical heading levels, keyboard navigation, visible focus, accessible menu and form labels, adequate contrast, descriptive image alt text.
- Respect reduced-motion settings; avoid layout-shifting animations.
- Optimize images, fonts, bundle size and avoid unnecessary dependencies.
- Meaningful page titles/descriptions, canonical URLs as appropriate, Open Graph metadata, logical internal linking, sitemap/robots handling according to current project setup.
- Do not break existing site analytics, social links, email integrations, or deployment.

## 7. Delivery phases (separate Codex prompts)

### Phase 0 — Repository inspection and baseline (read-only)
**Objective:** Establish exact project state before editing.

Tasks:
- Inspect Next.js version, App/Pages Router, TypeScript, Tailwind/CSS approach, dependencies, project structure, current navbar/footer, routes, data and integrations.
- Locate **actual logo assets**, colors, fonts, and global styles; document them.
- Identify homepage sections, existing About/Services/Contact functionality, live links, existing SEO setup.
- List reusable components and potential design issues; identify areas requiring user-provided company facts.
- Run existing non-destructive checks when practical.

**Deliverable:** Concise baseline summary, file map, risks, and a proposed Phase 1 file-change list. **No code edits** in Phase 0.

### Phase 1 — Homepage refinement + About Us
**Objective:** Set the visual and editorial quality bar while preserving branding.

Homepage:
- Retain and improve useful existing sections; remove/rework only repetitive or generic sections.
- Make hero message clearer and more business-specific, with strong **Explore Services** and **Start a Project** pathways.
- Improve service preview, what makes Grosbyte's approach practical, simple process teaser, and concluding CTA if supported by actual content.
- Use varied section layouts rather than repeated decorative cards.
- Keep working links intact; link to newly available About page.

About (`/about`):
- Clear who-we-are introduction, what kinds of work we help with, practical company approach, guiding principles, collaboration process teaser, CTA.
- Do not invent founding year, team members, client counts, awards, office details, or claims of proven experience.
- Replace unknown facts with neutral factual wording or explicit TODOs for owner review, not made-up copy.

**Acceptance:** Visual quality on mobile/desktop; logo/colors unchanged; no broken routes; content readable; lint/build checks run; Phase 1 summary. Do **not** implement later pages in this phase.

### Phase 2 — Services overview + service details
**Objective:** Make services easy to understand and explore.

Tasks:
- Create `/services` with well-defined categories, clear descriptions, and relevant CTAs.
- Implement service detail pages for confirmed services, preferably from structured local configuration to keep writing/layout consistent.
- Each detail page: headline, ideal problem/use case, scope/deliverables, process or engagement options, frequently asked questions where useful, and contact CTA.
- No fabricated results or fake case studies; no random tech badges.
- Update homepage service links/navigation only when routes are working.

**Acceptance:** Every advertised service links to a valid page or clearly intentional section; consistent layout, SEO and responsive UI.

### Phase 3 — How We Work
**Objective:** Communicate a realistic, credible delivery process.

Tasks:
- Create `/how-we-work` explaining discovery → scope/proposal → design/planning → implementation → testing/review → launch/handover/support (adjust to Grosbyte's actual workflow).
- Clarify what clients provide, how feedback is handled, and how project progress is communicated; avoid guarantees.
- Connect to Services and Contact pathways.

**Acceptance:** Clear, human-readable process, accessible responsive layout, no unsupported promises.

### Phase 4 — Contact Us and conversion flow
**Objective:** Make reaching Grosbyte straightforward and reliable.

Tasks:
- Create `/contact` with actual approved contact channels and a minimal project inquiry form.
- Suggested form fields: name, email, company (optional), service interest (optional), brief project description, approximate budget (optional). Avoid collecting unnecessary personal information.
- Check current contact/API/email integration before changing anything. Reuse existing functional backend if available; otherwise implement a secure, deployable approach only when configuration is confirmed, or clearly label missing integration in implementation notes.
- Provide real success/error/loading states, validation, spam protection appropriate to site scale, and privacy-conscious handling.
- Make the site-wide **Start a Project** CTA route to `/contact` when ready.

**Acceptance:** No fake submission success. Successful end-to-end behavior must be tested where environment supports it, or explicitly documented as unverified.

### Phase 5 — Static Blogs + sample categories
**Objective:** Launch a credible blog UI now, with a low-friction CMS migration later.

Tasks:
- Create `/blogs` with featured article, clean article list/grid, categories and simple filtering (client-side or query-parameter approach appropriate to repo).
- Create `/blogs/[slug]` with long-form reading layout, author/date metadata only where explicitly designated as demo, related posts, and SEO metadata.
- Store article content and metadata in a clearly separated, typed local data module or Markdown/MDX files **using dependencies already available where possible**.
- Suggested **sample categories**: Web Development; Software Development; Business Automation; Digital Marketing; Business Technology.
- Write 4–6 **clearly labeled sample/demo articles** that are useful and reasonably specific. Avoid claiming company projects or client achievements. Do not misrepresent demo posts as genuine published company thought leadership.
- Structure data access so the future admin/CMS can replace local data without rewriting all components. No admin, API, authentication, or database now.
- Provide category navigation, empty states, slug handling/404, responsive article imagery (only if appropriate/available), and readable article typography.

**Acceptance:** Listing/filter/detail routes work; demo content is obvious; no dead links; metadata is correct; local data layer is documented.

### Phase 6 — Full-site QA, consistency, SEO and launch readiness
**Objective:** Ensure new pages work together as one coherent website.

Tasks:
- Audit navigation links, active states, responsive layouts, all CTAs, footer, contact form and demo blog links.
- Check accessibility, keyboard controls, Lighthouse/performance issues where tools allow, metadata, sitemap, robots, image sizing, and 404 paths.
- Remove unused assets/code introduced during phases, without unrelated refactors.
- Review copy for unsupported claims, filler, inconsistent voice, and grammatical errors.
- Document deployment/environment requirements and a lightweight future CMS/admin integration plan (no implementation).

**Acceptance:** Build/lint/type checks pass or failures are reported honestly with fixes or blockers; final change log and unresolved issues are documented.

## 8. Future blog administration — architecture only

A future iteration may add a custom admin portal for blogs: article CRUD, drafts, categories, image uploads, SEO fields, scheduling, and role-based access. **Do not implement any of this now.** Phase 5 should establish clean frontend interfaces/types and a replaceable repository/data-access layer, without prematurely selecting the backend or database.

## 9. Copywriting and UX acceptance checklist

For each implemented phase, verify:

- [ ] Original Grosbyte logo and official brand colors unchanged
- [ ] Page language is concrete, restrained, and non-generic
- [ ] No made-up clients, stats, testimonials, team bios, or projects
- [ ] Pages have a clear purpose and CTA, without overwhelming visitors
- [ ] Mobile, tablet and desktop layouts are tested
- [ ] Nav, footer, forms and links are keyboard-accessible
- [ ] Typography, spacing, buttons and visual patterns are consistent
- [ ] Internal links only point to implemented/working routes
- [ ] Relevant page metadata and heading hierarchy are present
- [ ] Existing integrations and deployment remain intact
- [ ] Tests/build/lint/type-check results are reported accurately
- [ ] Only the requested phase was implemented; next phase awaits approval

## 10. Working protocol with Codex

1. Add this file to the repository, suggested location: `docs/GROSBYTE_WEBSITE_UPGRADE_PLAN.md`.
2. In each Codex conversation/task, ask it to read this file **first**.
3. Start with a separate **Phase 0 inspection prompt**, then a **Phase 1 Home + About prompt** after reviewing the baseline.
4. Run one phase, review screenshots/diffs and test results, then commit. Avoid combining all pages into a single implementation prompt.
5. If a requirement conflicts with existing code or a brand asset, Codex should explain the conflict before making a destructive change.
6. Do not let Codex infer that all tasks in this document are authorized at once.

## 11. Outstanding inputs for later phases

These are not blockers for planning, but should be confirmed before publishing:
- Correct official logo asset path and brand tokens in the current repository.
- Which proposed services are actively offered and how they're named.
- Verified company introduction, contact details and links.
- Existing contact form/email workflow and available deployment environment variables.
- Whether blog sample content should remain public as labeled demos or be replaced before production launch.

---

**Implementation order:** Phase 0 inspection → Phase 1 Home + About → Phase 2 Services → Phase 3 How We Work → Phase 4 Contact → Phase 5 Static Blogs → Phase 6 QA.  
**Important:** This sequence is an implementation plan; each stage requires a separate, scoped Codex prompt.
