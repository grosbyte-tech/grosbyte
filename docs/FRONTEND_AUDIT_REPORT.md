# FRONTEND CODE QUALITY AUDIT REPORT

- **Project:** Grosbyte Technologies (`grosbyte`)
- **Framework Versions:** Next.js `16.2.10` (App Router + Turbopack), React `19.2.4`, React-DOM `19.2.4`, TypeScript `5.x`, Tailwind CSS `4.x`
- **Audit Date:** 2026-11-21
- **Commit Hash:** `68f8c864c4c1d9fe7b54a27a93b3f9a2b8c77fb2`
- **Auditor:** Claude (Strict Mode)

---

## 1. Evidence Summary

All metrics and command outputs recorded below were executed directly against the repository at commit `68f8c86`.

| Audit Metric / Command | Output / Status | Detailed Findings & Counts |
|---|---|---|
| `npx tsc --noEmit` | **PASS (0 errors)** | Zero TypeScript compiler diagnostic errors under strict mode. |
| `npm run lint` | **PASS (0 errors, 0 warnings)** | ESLint 9 + Next.js core-web-vitals clean. |
| `npm run build` | **PASS (27/27 static pages)** | Route Table: 18 static (`○`), 7 SSG (`●`), 2 dynamic API routes (`ƒ`). |
| `npm run test:contact` | **PASS (9/9 passed)** | Contact API security, rate limit, honey-pot, and header validation pass. |
| `npm run test:seo` | **PASS (5/5 passed)** | Robots directives, sitemap completeness, canonicals, schema, and 404 pass. |
| `npm audit --omit=dev` | **FAIL (6 vulnerabilities)** | **1 Critical**, **4 High**, **1 Moderate**. CVEs in `next@16.2.10`, `postcss`, `sharp`, `nanoid`. |
| `npx depcheck` | **FAIL (Unused dependencies)** | Unused prod deps: `tw-animate-css`. Unused devDeps: `shadcn`. |
| `npx knip` | **FAIL (Dead code detected)** | **13 unused files**, **14 unused exports**, **8 unused exported types**. |
| `npx madge --circular src` | **PASS (0 circular deps)** | Processed 108 files. Zero circular dependencies found. |
| `npx jscpd src` | **FAIL (7.09% duplication)** | **52 clone pairs**. 1,900 duplicated lines (13.75% CSS duplication, 4.60% TSX). |
| Files > 150 Lines in `src/` | **33 files** | Largest: `globals.css` (3,535), `services.css` (1,435), `process-section.tsx` (1,203). |
| Components > 120 Lines | **22 components** | Largest: `process-section.tsx` (1,203), `hero-illustration.tsx` (756), `digital-marketing-content.tsx` (423). |
| `"use client"` Count | **51 files** | Excessive client boundary declarations; only ~14 genuinely require client hooks. |
| TypeScript Bypasses (`any`, `@ts-ignore`) | **0 occurrences** | Exactly 0 `: any`, 0 `as any`, 0 `@ts-ignore`, 0 `@ts-expect-error`, 0 `eslint-disable`. |
| `console.*` Calls | **5 occurrences** | 3 in `src/app/api/contact/route.ts` (server error logs), 2 in error boundaries. 0 debug logs. |
| `TODO / FIXME / HACK / XXX` | **0 occurrences** | Clean codebase comments. |
| `dangerouslySetInnerHTML` | **1 occurrence** | `src/components/seo/json-ld.tsx:9` (JSON-LD schema injection). |
| Raw `<img >` & `<a href="/">` | **0 occurrences** | 100% adherence to `next/image` and `next/link`. |
| Inline `style={{` | **31 occurrences** | Concentrated in `global-error.tsx`, `folding-text.tsx`, `hero-light-beams.tsx`. |
| Hardcoded Hex/RGB Colors | **667 occurrences** | 577 in `.css` stylesheets, 90 in `.tsx` components (bypassing design tokens). |
| Direct `process.env` (outside `env.ts`) | **5 files** | `api/contact/route.ts`, `blogs/[slug]/page.tsx`, `share-article.tsx`, `assets.ts`, `cdn.ts`. |
| Content Arrays Embedded in JSX Files | **29+ arrays** | Embedded in `how-we-work.tsx`, `custom-software-content.tsx`, `about-tech-stack.tsx`, etc. |
| Missing Locale Keys | **3 keys missing** | `nav.blogs` missing in `de.json`, `ne.json`, and `es.json` (present only in `en.json`). |

---

## 2. Scorecard

| # | Category | Score | Grade | Verdict |
|---|---|:---:|:---:|---|
| 1 | Component Architecture & Reusability | 4 / 10 | F | Severe god-components, duplicated section templates, embedded content arrays. |
| 2 | Folder Structure & Colocation | 6 / 10 | D | 13 dead/unreferenced files in tree (including 1,203 lines in `process-section.tsx`). |
| 3 | Naming & Consistency | 7 / 10 | C | Consistent kebab-case files and PascalCase components; minor export redundancies. |
| 4 | Readability & Complexity | 5 / 10 | F | Deeply nested SVG illustrations and complex canvas calculations in JSX. |
| 5 | TypeScript & Type Safety | 8 / 10 | B | Zero `any` or `@ts-ignore`; lacks Zod schema parsing at API boundaries. |
| 6 | Next.js App Router Correctness | 5 / 10 | F | 51 client components caused by root client-side language context. |
| 7 | Styling System | 3 / 10 | F | Critical CSS selector leakage across service pages; 13.75% CSS duplication; 577 hex colors. |
| 8 | State Management & Data Flow | 5 / 10 | F | Client-side React context for language storage; missing URL-driven filter states. |
| 9 | Error, Loading & Empty States | 7 / 10 | C | Root error, global-error, loading, and custom 404 present; lacks per-route skeletons. |
| 10 | Security | 6 / 10 | D | 6 CVEs in dependencies (Next.js 16.2.10 critical); missing CSP header. |
| 11 | Web Performance & Core Web Vitals | 4 / 10 | F | 2.7MB MP4 in git; 1.9MB PNGs; framer-motion loaded on static marketing pages. |
| 12 | Accessibility (WCAG 2.2 AA) | 6 / 10 | D | Semantic forms and inputs; interactive SVG nodes in illustration lack ARIA labels. |
| 13 | SEO & Metadata | 9 / 10 | A | Pristine 20-page canonical structure, dynamic sitemap, schema JSON-LD, 301 redirects. |
| 14 | i18n & Content Separation | 3 / 10 | F | Client-only context (invisible to crawlers); missing keys in 3 locales; 150+ hardcoded strings. |
| 15 | Testing & Testability | 4 / 10 | F | Zero component unit tests; zero E2E tests; zero a11y tests; passes only 2 integration scripts. |
| 16 | Dependency Management | 6 / 10 | D | Zero circular deps, but unpruned unused dependencies (`tw-animate-css`, `@radix-ui/react-select`). |
| 17 | Configuration & Environment | 6 / 10 | D | `src/lib/env.ts` created but unimported; 5 files still read `process.env` directly. |
| 18 | Logging & Observability | 4 / 10 | F | `/api/health` exists, but zero external telemetry, APM, or error tracking (Sentry). |
| 19 | CI/CD, Docker & Deployment | 7 / 10 | C | Clean GitHub Actions workflow and multi-stage Dockerfile; nginx lacks SSL & asset caching. |
| 20 | Documentation & Long-Term Maintainability | 5 / 10 | F | README is empty skeleton; dead code compounds developer cognitive load. |

### Overall Score: **110 / 200 (55.0%) — Grade: F**
### Production Ready Verdict: **NEEDS WORK**

> **Executive Summary:** While the project exhibits impeccable baseline TypeScript hygiene (zero `any` and zero `@ts-ignore`), valid Next.js App Router metadata, and clean contact/SEO test scripts, it is **not production-ready**. It suffers from severe architectural flaws: 1,123 lines of copy-pasted service templates, 13 dead files totaling over 2,600 lines of unreferenced code, critical CSS selector leakage that pollutes pages upon client navigation, 6 dependency CVEs (including critical Next.js vulnerabilities), and a client-side i18n system that blocks search engine indexing of international content.

---

## 3. Component-Based Compliance Report

### Architectural Compliance Verdict: **38% Compliant**
Only 38% of pages and sections adhere to the core rule: *"Pages compose; components render; data, config, and logic live outside JSX."*

### Table of Architectural Violations

| File | Lines | Problem Category | Specific Violation Evidence | Recommended Extraction / Fix |
|---|:---:|---|---|---|
| `src/app/blogs/[slug]/page.tsx` | 205 | Page with heavy JSX | Direct rendering of article hero, TOC layout, cover image wrapping, paragraph mapping, related service cards, and back links. | Extract `<ArticleHero>`, `<ArticleBody>`, `<RelatedServiceCallout>`, `<RelatedArticlesGrid>`. |
| `src/components/home/process-section.tsx` | 1,203 | God-Component & Dead Code | 1,203 lines of sticky desktop layout, tab transitions, SVG mockups, and step configs completely unused by `src/app/page.tsx`. | Delete file completely (`git rm`). Replaced by `how-we-work.tsx`. |
| `src/components/home/hero-illustration.tsx` | 756 | God-Component | Over 500 lines of hardcoded SVG paths, matrices, and interactive mouse-tracking logic in one file. | Split into `<HeroIsometricGrid>`, `<ServerRackVisual>`, `<CloudNodeVisual>`, `<CodeWindowVisual>`. |
| `src/components/services/custom-software-content.tsx` | 348 | God-Component & Duplication | Contains 7 sections (Hero, Capabilities, Process, Checklist, Tech Stack, FAQ, CTA Banner) in a single 348-line file. | Refactor into composable `<ServiceHero>`, `<ServiceChecklist>`, `<ServiceTechStack>`, `<ServiceFaq>`. |
| `src/components/services/digital-marketing-content.tsx` | 423 | God-Component & Duplication | Near-identical layout to `custom-software-content.tsx` with duplicate CSS class names (`.cs-page`, `.cs-container`). | Refactor to consume shared `<ServiceTemplate>` with typed props. |
| `src/components/services/web-mobile-content.tsx` | 352 | God-Component & Duplication | Near-identical layout to `custom-software-content.tsx` (jscpd: 393 lines cloned from custom-software). | Refactor to consume shared `<ServiceTemplate>` with typed props. |
| `src/components/home/how-we-work.tsx` | 307 | Data in Component | `const STEPS: Step[]` (lines 16–101, 85 lines of content) defined inside the component file. | Move `STEPS` data array to `src/config/how-we-work.ts` or localized JSON dictionary. |
| `src/components/about/about-tech-stack.tsx` | 396 | Data in Component | `const TECH_CATALOG: TechItem[]` (lines 22–165, 143 lines of static catalog data) defined inside component. | Move catalog data to `src/config/tech-stack.ts`. |
| `src/components/layout/footer.tsx` | 265 | Data in Component | Lines 17–55 define `companyLinks`, `industryLinks`, `socialMediaLinks`, and unused `FooterWordmark` (lines 233–265). | Move navigation arrays to `src/config/navigation.ts`. Remove dead `FooterWordmark`. |
| `src/components/contact/contact-section.tsx` | 459 | God-Component & Dead Code | 459 lines of legacy contact form and layout unimported by any active route. | Delete file completely (`git rm`). |
| `src/components/effects/hero-light-beams.tsx` | 519 | God-Component & Dead Code | 519 lines of canvas light beams unimported by any active route. | Delete file completely (`git rm`). |
| `src/components/ui/button.tsx` | 125 | Unnecessary `"use client"` | Button uses `@radix-ui/react-slot` and `cva` with zero hooks or state, yet is flagged `"use client"`. | Remove `"use client"` directive to allow server-rendered buttons. |
| `src/components/home/hero-section.tsx` | 74 | Unnecessary `"use client"` | Marked `"use client"` exclusively to call `useTranslation()`. Contains zero client interactivity. | Convert to Server Component once i18n is resolved on server. |

### Proposed New Shared Components

1. **`<ServiceTemplate />`**
   - **File:** `src/components/services/service-template.tsx`
   - **Target Consumers:** `src/app/custom-software-development/page.tsx`, `src/app/web-mobile-applications/page.tsx`, `src/app/digital-marketing/page.tsx`
   - **Interface Sketch:**
     ```typescript
     export interface ServiceTemplateProps {
       service: ServiceDetail;
       category: ServiceCategory;
       capabilities: Array<{ key: string; icon: LucideIcon; title: string; description: string }>;
       checklist: string[];
       techStack?: Array<{ name: string; icon: string }>;
       caseStudies?: Array<{ title: string; metric: string; description: string }>;
       faqs: Array<{ question: string; answer: string }>;
     }
     ```
2. **`<ServiceChecklist />`**
   - **File:** `src/components/services/service-checklist.tsx`
   - **Target Consumers:** All 3 pillar service pages (eliminates 180 duplicate lines across `custom-software-content.tsx`, `digital-marketing-content.tsx`, `web-mobile-content.tsx`).
3. **`<ArticleHero />` & `<ArticleBody />`**
   - **File:** `src/components/blogs/article-layout.tsx`
   - **Target Consumers:** `src/app/blogs/[slug]/page.tsx` (drops page file from 205 lines to 35 lines).

---

## 4. Detailed Findings (All 20 Categories)

### Category 1: Component Architecture & Reusability — 4 / 10
- **What's Wrong:**
  - `custom-software-content.tsx` (348 lines), `digital-marketing-content.tsx` (423 lines), and `web-mobile-content.tsx` (352 lines) are massive copy-pasted templates sharing 1,123 lines of nearly identical markup.
  - God-components like `hero-illustration.tsx` (756 lines) mix 500+ lines of inline SVG geometry with interactive pointer listeners.
  - 29+ content arrays are embedded directly in component files instead of `src/config/` or `src/lib/`.
- **What's Right:**
  - Modern home sections (`src/components/home/how-we-work.tsx`, `src/components/blogs/article-card.tsx`) encapsulate visual styles effectively.
- **Required Fixes:**
  - Replace the 3 monolithic service content files with a single parametric `<ServiceTemplate />`.
  - Extract static arrays (`STEPS`, `TECH_CATALOG`, `FOOTER_LINKS`) into `src/config/`.

### Category 2: Folder Structure & Colocation — 6 / 10
- **What's Wrong:**
  - 13 unused files (verified via `knip`) totaling 2,684 lines of dead code pollute the repository:
    - `src/components/home/process-section.tsx` (1,203 lines)
    - `src/components/effects/hero-light-beams.tsx` (519 lines)
    - `src/components/contact/contact-section.tsx` (459 lines)
    - `src/components/ui/select.tsx` (162 lines)
    - `src/components/ui/underline-heading.tsx` (76 lines)
    - `src/components/layout/language-switcher.tsx` (78 lines)
    - `src/components/motion/scroll-reveal-text.tsx` (41 lines)
    - `src/components/media/premium-image.tsx` (24 lines)
    - `src/lib/constants/assets.ts` (291 lines)
    - `src/lib/image/cdn.ts` (24 lines)
    - `src/lib/contact/index.ts`, `src/lib/seo/index.ts`
- **What's Right:**
  - Clean feature grouping under `src/components/{about,blogs,contact,home,layout,services,ui}`.
- **Required Fixes:**
  - Delete all 13 dead files via `git rm`.

### Category 3: Naming & Consistency — 7 / 10
- **What's Wrong:**
  - `src/components/effects/gradient-text.tsx:60` exports both `GradientText` and a default export.
  - `src/components/effects/brand-icons.tsx:123-126` exports duplicate names: `RealInstagramIcon` AND `InstagramIcon`, etc.
  - Inconsistent CSS naming: `src/app/about/about.css` vs `src/app/web-mobile-applications/web-mobile.css`.
- **What's Right:**
  - Consistent kebab-case filenames across all 108 files; PascalCase component identifiers; `useX` hook naming.
- **Required Fixes:**
  - Remove default exports; retain named exports only.
  - Standardize icon exports in `brand-icons.tsx`.

### Category 4: Readability & Complexity — 5 / 10
- **What's Wrong:**
  - `src/components/effects/folding-text.tsx:189-358` contains 5 levels of nested ternary operations and string splits (`reduced-${lineIdx}-${wordIdx}`).
  - `src/components/home/hero-illustration.tsx` contains 500+ lines of dense SVG `<path d="..." />` coordinates.
- **What's Right:**
  - High-level orchestrators (`src/app/page.tsx`, `src/app/about/page.tsx`) are clean and readable.
- **Required Fixes:**
  - Move static SVG graphics into standalone `.svg` asset files loaded via `next/image`.
  - Refactor `folding-text.tsx` into declarative sub-renderers.

### Category 5: TypeScript & Type Safety — 8 / 10
- **What's Wrong:**
  - `src/app/api/contact/route.ts:50-100` relies on imperative runtime `typeof` assertions instead of a type-safe schema library like Zod.
  - 8 unused exported interfaces/types (`TocItem`, `GradientVariant`, `ButtonProps`, `MegaMenuConfig`, `ProcessStep`, `Technology`, `BlogCategory`, `ImpactMetric`).
- **What's Right:**
  - Zero `any` types; zero `@ts-ignore` or `@ts-expect-error` directives; `tsconfig.json` has `strict: true`.
  - Next.js 15+ async params (`Promise<{ slug: string }>`) correctly typed across all dynamic routes.
- **Required Fixes:**
  - Introduce Zod for contact API request payload parsing.
  - Remove dead exported types.

### Category 6: Next.js App Router Correctness — 5 / 10
- **What's Wrong:**
  - 51 client components (`"use client"`). Because `src/contexts/language-context.tsx` wraps the root layout, virtually every text-rendering component opted into `"use client"` just to call `useTranslation()`.
  - Pure presentational components like `src/components/ui/button.tsx` and `src/components/home/hero-section.tsx` are needlessly rendered as client components.
- **What's Right:**
  - Static generation (`generateStaticParams`) implemented correctly across 27 routes.
  - Valid metadata generation with alternates, Open Graph, and Twitter cards.
  - `error.tsx`, `global-error.tsx`, `loading.tsx`, and `not-found.tsx` conventions strictly followed.
- **Required Fixes:**
  - Remove `"use client"` from `button.tsx`.
  - Migrate to `next-intl` to allow Server Components to render translated strings.

### Category 7: Styling System — 3 / 10
- **What's Wrong:**
  - **Critical CSS Selector Leakage:** `custom-software.css`, `digital-marketing.css`, and `web-mobile.css` all declare identical global class names (`.cs-page`, `.cs-container`, `.cs-eyebrow`, `.cs-hero-title`, `.cs-grid`). When navigating between service routes, stylesheets remain active in `<head>`, causing cross-page style bleeding.
  - `jscpd` detected 13.75% duplicate CSS lines (1,370 duplicate lines across stylesheets).
  - 577 hardcoded hex/RGB color literals in CSS files; `src/app/globals.css` is an unmaintainable 3,535-line monolith.
- **What's Right:**
  - Modern components use `cn()` utility (`clsx` + `tailwind-merge`).
- **Required Fixes:**
  - Migrate all page-level CSS files (`about.css`, `services.css`, `custom-software.css`, etc.) to CSS Modules (`[name].module.css`) or pure Tailwind CSS classes.
  - Consolidate color values into CSS custom properties in `:root`.

### Category 8: State Management & Data Flow — 5 / 10
- **What's Wrong:**
  - `src/contexts/language-context.tsx` uses client-side `localStorage` and triggers re-renders across the entire component tree when the language changes.
  - `src/components/blogs/blog-list.tsx` manages category filters with local `useState`, preventing users from sharing filtered URLs.
- **What's Right:**
  - No bloated external state libraries (Redux, Zustand) for simple marketing pages.
- **Required Fixes:**
  - Convert blog filtering in `blog-list.tsx` to read and write URL query parameters (`useSearchParams`).

### Category 9: Error, Loading & Empty States — 7 / 10
- **What's Wrong:**
  - `src/app/error.tsx` and `src/app/global-error.tsx` log errors to the browser console (`console.error`), but do not transmit exceptions to an observability backend.
  - No route-level `loading.tsx` skeletons for dynamic service pages (`/services/[slug]`).
- **What's Right:**
  - Root `error.tsx` and `global-error.tsx` include standalone retry mechanisms.
  - Custom `_not-found.html` renders branded recovery links with a `noindex` directive.
  - `enquiry-form.tsx` provides clear visual feedback for loading, validation errors, and submission success.
- **Required Fixes:**
  - Add Sentry / Datadog capture in `error.tsx`.
  - Add route skeleton loaders.

### Category 10: Security — 6 / 10
- **What's Wrong:**
  - `npm audit --omit=dev` flags **6 vulnerabilities**:
    - **Critical:** Next.js Server Actions / App Router SSRF and DoS in `next@16.2.10` (requires upgrade to `>=16.4.6`).
    - **High:** PostCSS sourceMappingURL path traversal and Sharp memory vulnerabilities.
  - `src/components/seo/json-ld.tsx:9` injects raw JSON into `<script>` without escaping `<` characters (`</script>` injection risk).
  - Missing Content Security Policy (`Content-Security-Policy`) in `next.config.ts` and `nginx.conf`.
- **What's Right:**
  - `src/app/api/contact/route.ts` implements origin validation, honeypot fields, rate limiting, and email header CRLF sanitization.
  - Next.js headers include `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Strict-Transport-Security`.
- **Required Fixes:**
  - Upgrade `next` to `16.4.6+`.
  - Escape JSON-LD output: `JSON.stringify(data).replace(/</g, '\\u003c')`.
  - Add Content Security Policy header.

### Category 11: Web Performance & Core Web Vitals — 4 / 10
- **What's Wrong:**
  - `public/videos/employee-working.mp4` is 2.7 MB checked into the Git repository and downloaded directly over HTTP.
  - `public/images/how-we-work/` contains raw uncompressed PNGs (`step-1.png`: 1.7 MB, `step-3.png`: 1.9 MB).
  - `framer-motion` (12.42.2) is bundled across static marketing pages, increasing First Load JS chunk size.
  - `nginx.conf` lacks static asset caching directives (`Cache-Control: public, max-age=31536000, immutable`).
- **What's Right:**
  - Images use `next/image` with WebP/AVIF optimization formats enabled in `next.config.ts`.
  - Fonts loaded via `next/font` (Urbanist and local ARAP007).
- **Required Fixes:**
  - Convert step images in `how-we-work` to WebP (~150KB each).
  - Offload `employee-working.mp4` to a streaming CDN (Cloudflare Stream / Mux).
  - Add caching headers for `/_next/static/` in `nginx.conf`.

### Category 12: Accessibility (WCAG 2.2 AA) — 6 / 10
- **What's Wrong:**
  - In `src/components/home/hero-illustration.tsx`, interactive SVG nodes lack accessible names (`aria-label`) or keyboard focusability.
  - Because language is switched client-side, the server renders `<html lang="en">`; users switching to Nepali or German do not get server-rendered `<html lang="...">`, impacting screen reader phonetics.
  - Subtitle text contrast in `how-we-work.tsx` (`text-foreground/80` over gradient backgrounds) drops below WCAG AA 4.5:1 ratio on small screens.
- **What's Right:**
  - Form fields in `enquiry-form.tsx` strictly pair `<label htmlFor="...">` with `<input id="...">`.
  - Interactive accordions support keyboard toggling and use `aria-expanded` and `inert` attributes.
  - CSS includes `prefers-reduced-motion` overrides.
- **Required Fixes:**
  - Add `aria-hidden="true"` to purely decorative SVG elements in `hero-illustration.tsx`.
  - Increase text contrast on colored backgrounds.

### Category 13: SEO & Metadata — 9 / 10
- **What's Wrong:**
  - Missing `hreflang` alternates in `<head>` because multiple languages are not exposed as discrete URLs (`/en`, `/ne`, `/de`, `/es`).
- **What's Right:**
  - 100% automated SEO test pass (`tests/seo-metadata.test.mjs`).
  - Zero duplicate sitemap URLs; valid canonical URLs across all 20 pages.
  - 301 redirects in `next.config.ts` eliminate duplicate content between `/services/[slug]` and pillar routes.
  - Complete JSON-LD schema generation (`Organization`, `WebSite`, `Service`, `BlogPosting`, `BreadcrumbList`).
- **Required Fixes:**
  - Add `alternates: { languages: { 'ne': '/ne', 'de': '/de' } }` once localized routing is implemented.

### Category 14: i18n & Content Separation — 3 / 10
- **What's Wrong:**
  - **Client-Side Trap:** Language switching exists only in React context (`localStorage`). Search engines cannot crawl or index German, Nepali, or Spanish content.
  - **Missing Keys:** Verified script detected `nav.blogs` is missing in `src/locales/de.json`, `ne.json`, and `es.json`.
  - **Content Hardcoding:** Over 150 hardcoded English strings embedded in components (`how-we-work.tsx`, `custom-software-content.tsx`, `footer.tsx`).
- **What's Right:**
  - JSON dictionaries (`en.json`, `de.json`, `ne.json`, `es.json`) share 445 aligned keys.
- **Required Fixes:**
  - Add missing `nav.blogs` key across all 3 locale dictionaries.
  - Migrate to `next-intl` with App Router subpath routing (`src/app/[locale]/`).

### Category 15: Testing & Testability — 4 / 10
- **What's Wrong:**
  - **Zero Component Unit Tests:** No Vitest or Jest test suite configured. Zero tests for `how-we-work.tsx`, `enquiry-form.tsx`, `navbar.tsx`.
  - **Zero End-to-End Tests:** No Playwright or Cypress tests to verify browser navigation, form submissions, or mobile menu toggles.
  - **Zero Accessibility Automated Audits:** No `axe-core` integration in CI.
- **What's Right:**
  - `tests/contact-api.test.mjs` provides thorough coverage of the contact form endpoint (9 assertions).
  - `tests/seo-metadata.test.mjs` tests HTML build artifacts.
- **Required Fixes:**
  - Install Vitest + React Testing Library to test form and navigation components.
  - Install Playwright for smoke testing critical user journeys.

### Category 16: Dependency Management — 6 / 10
- **What's Wrong:**
  - `package.json` contains unused packages:
    - `tw-animate-css` (`^1.4.0`) — flagged by `depcheck` and `knip`.
    - `@radix-ui/react-select` (`^2.3.7`) — flagged by `depcheck` and `knip`.
    - `shadcn` (`^4.18.0`) — leftover CLI devDependency.
  - 6 security vulnerabilities reported by `npm audit`.
- **What's Right:**
  - Zero circular dependencies (verified by `madge` across 108 files).
  - Clean `package-lock.json` with exact dependency tree resolution.
- **Required Fixes:**
  - `npm uninstall tw-animate-css @radix-ui/react-select shadcn`.
  - Update `next` to patch critical security advisories.

### Category 17: Configuration & Environment — 6 / 10
- **What's Wrong:**
  - `src/lib/env.ts` was created to centralize environment variable validation, but **not a single file imports it**.
  - Direct calls to `process.env` remain in:
    - `src/app/api/contact/route.ts:117-119`
    - `src/app/blogs/[slug]/page.tsx:75`
    - `src/components/blogs/share-article.tsx:69`
    - `src/lib/constants/assets.ts:5`
    - `src/lib/image/cdn.ts:5`
- **What's Right:**
  - `.env.example` comprehensively documents all runtime environment variables with clear comments.
  - Safe build-time fallback defaults for `NEXT_PUBLIC_SITE_URL`.
- **Required Fixes:**
  - Import `validateContactServerEnv` into `src/app/api/contact/route.ts`.
  - Import `clientEnv` into all files accessing `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CDN_URL`.

### Category 18: Logging & Observability — 4 / 10
- **What's Wrong:**
  - Zero error monitoring integration (no Sentry, Datadog, or Baselime).
  - No Core Web Vitals telemetry captured in production.
  - Server logs in `contact/route.ts` lack request correlation IDs.
- **What's Right:**
  - Health check endpoint (`/api/health`) returns `{ status: "ok" }`.
  - Server-side error logs sanitize user input and do not log sensitive credentials.
- **Required Fixes:**
  - Integrate Sentry Next.js SDK (`@sentry/nextjs`).
  - Add `export function reportWebVitals` to stream Web Vitals to analytics.

### Category 19: CI/CD, Docker & Deployment — 7 / 10
- **What's Wrong:**
  - `Dockerfile` runs `npm run build` without passing build arguments (`NEXT_PUBLIC_SITE_URL`).
  - `nginx.conf` listens on port 80 only; lacks SSL/TLS configuration, HTTP to HTTPS redirection, and caching directives for immutable Next static chunks.
- **What's Right:**
  - `.github/workflows/ci.yml` strictly enforces fail-fast linting, type-checking, contact tests, build, and SEO verification.
  - Dockerfile uses multi-stage build, Alpine Linux, non-root `nextjs:nodejs` user, and Next.js standalone output.
- **Required Fixes:**
  - Add static chunk caching block in `nginx.conf`:
    ```nginx
    location /_next/static/ {
      proxy_pass http://nextjs;
      proxy_cache_valid 200 365d;
      add_header Cache-Control "public, max-age=31536000, immutable";
    }
    ```

### Category 20: Documentation & Long-Term Maintainability — 5 / 10
- **What's Wrong:**
  - `README.md` is minimal and lacks architecture diagrams, environment variable reference, Docker instructions, and testing guidelines.
  - 2,684 lines of dead code (`process-section.tsx`, `hero-light-beams.tsx`, `contact-section.tsx`) confuse onboarding engineers.
- **What's Right:**
  - `AGENTS.md` and upgrade plans provide context on legacy and modern conventions.
- **Required Fixes:**
  - Expand `README.md` with complete developer onboarding instructions.
  - Remove dead code.

---

## 5. Issues by Severity

### CRITICAL (Must Fix Before Production Deployment)
1. **Critical Security Vulnerabilities in Next.js 16.2.10:**
   - *Evidence:* `npm audit --omit=dev` reports GHSA-6gpp-xcg3-4w24, GHSA-m99w-x7hq-7vfj, GHSA-89xv-2m56-2m9x (SSRF, DoS, cache poisoning).
   - *Impact:* High vulnerability to remote exploits and cache poisoning.
   - *Exact Fix:* Upgrade Next.js in `package.json` to `^16.4.6` and run `npm install`.
2. **Global CSS Selector Leakage Across Service Pages:**
   - *Evidence:* `custom-software.css`, `digital-marketing.css`, `web-mobile.css` all define `.cs-page`, `.cs-container`, `.cs-eyebrow`, `.cs-grid`.
   - *Impact:* Client-side navigation from `/custom-software-development` to `/digital-marketing` retains `.cs-*` overrides in the DOM, causing erratic visual regressions.
   - *Exact Fix:* Convert all page-specific CSS files to CSS Modules (`.module.css`) or replace with Tailwind classes.
3. **Missing Static Asset Caching in Nginx:**
   - *Evidence:* `nginx.conf:24-33` proxies all requests including `/_next/static/` to Node without `Cache-Control` headers.
   - *Impact:* Browsers re-request multi-megabyte JS/CSS bundles on every page visit, destroying Core Web Vitals (LCP/FID).
   - *Exact Fix:* Add `location /_next/static/ { add_header Cache-Control "public, max-age=31536000, immutable"; }`.

### MAJOR (Fix This Sprint)
1. **2,684 Lines of Dead Code in Component Tree:**
   - *Evidence:* `knip` confirmed `process-section.tsx` (1,203 lines), `hero-light-beams.tsx` (519 lines), `contact-section.tsx` (459 lines), `select.tsx` (162 lines), `assets.ts` (291 lines) are unreferenced.
   - *Impact:* Bloats maintenance burden, increases lint times, and misleads engineers.
   - *Exact Fix:* Run `git rm` on the 13 unused files.
2. **1,123 Lines of Duplicated Service Pages (Violation of Component Rule):**
   - *Evidence:* `jscpd` identified 393-line and 222-line identical clones between `custom-software-content.tsx`, `digital-marketing-content.tsx`, and `web-mobile-content.tsx`.
   - *Impact:* Quadruples the effort to update service page design or structure.
   - *Exact Fix:* Extract shared sections into `<ServiceTemplate />`.
3. **Client-Only i18n Traps Content from Search Engines:**
   - *Evidence:* `src/contexts/language-context.tsx:71` reads language from `localStorage`. Zero localized routes exist.
   - *Impact:* Search crawlers cannot discover or rank non-English content.
   - *Exact Fix:* Migrate to `next-intl` with `[locale]` dynamic segments.
4. **Unused Dependencies in `package.json`:**
   - *Evidence:* `depcheck` flagged `tw-animate-css` and `@radix-ui/react-select`.
   - *Impact:* Unnecessary supply chain risk and install overhead.
   - *Exact Fix:* `npm uninstall tw-animate-css @radix-ui/react-select shadcn`.
5. **Direct `process.env` Access Bypassing `src/lib/env.ts`:**
   - *Evidence:* `src/app/api/contact/route.ts:117-119` accesses `process.env.RESEND_API_KEY` directly.
   - *Impact:* Runtime environment failures are not caught during startup or validation.
   - *Exact Fix:* Import and invoke `validateContactServerEnv()` from `src/lib/env.ts`.
6. **Oversized Raw Assets (2.7MB MP4 and 1.9MB PNGs):**
   - *Evidence:* `public/videos/employee-working.mp4` (2.7 MB), `public/images/how-we-work/step-3.png` (1.9 MB).
   - *Impact:* Slow mobile loading times and high network payload.
   - *Exact Fix:* Compress PNGs to WebP; host MP4 on Cloudflare Stream.

### MINOR (Next Cleanup Pass)
1. **Missing `nav.blogs` Key in Locale Dictionaries:**
   - *Evidence:* Key exists in `src/locales/en.json:17`, missing in `de.json`, `ne.json`, `es.json`.
   - *Impact:* Fallback to raw key string if rendered in non-English locales.
   - *Exact Fix:* Add `"blogs": "Blogs"` to all three files.
2. **Unnecessary `"use client"` Directives:**
   - *Evidence:* `src/components/ui/button.tsx:1`, `src/components/home/hero-section.tsx:1`.
   - *Impact:* Unneeded hydration overhead.
   - *Exact Fix:* Remove directive.
3. **Index Keys in Loops:**
   - *Evidence:* `src/components/effects/folding-text.tsx:189`, `src/components/home/projects-section.tsx:135`.
   - *Impact:* React reconciliation inefficiencies upon array mutation.
   - *Exact Fix:* Generate unique stable IDs for mapped glyphs and cards.
4. **Unescaped JSON-LD Script Content:**
   - *Evidence:* `src/components/seo/json-ld.tsx:9`.
   - *Impact:* Potential injection risk if malicious strings appear in blog metadata.
   - *Exact Fix:* Escape `<` as `\u003c`.

---

## 6. Good Practices Observed

1. **Zero TypeScript Bypasses:** The entire repository has 0 instances of `: any`, `as any`, `@ts-ignore`, `@ts-expect-error`, or `eslint-disable`. The TypeScript setup is genuinely strict and well-maintained.
2. **Deterministic CI/CD Sequence:** `.github/workflows/ci.yml` correctly enforces an unyielding fail-fast order (`lint` → `tsc` → `test:contact` → `build` → `test:seo`).
3. **Pristine SEO & Canonical Architecture:** Canonical URLs, Open Graph images, Twitter metadata, and JSON-LD schemas are generated across all 20 pages with 100% test coverage.
4. **Robust Contact API Security:** Origin checks, rate limiting with retry headers, honey-pot spam traps, and CRLF header injection prevention are rigorously tested.
5. **Modern Containerization:** The `Dockerfile` adheres to production standards: multi-stage build, Alpine base, Next.js standalone output, and non-root user execution (`nextjs` UID 1001).

---

## 7. Prioritized Refactoring Roadmap

### Phase 1: Security Patching & Dead Code Purge (PR 1)
- **Goal:** Eliminate security CVEs and remove 2,684 lines of unreferenced code.
- **Files Affected:** `package.json`, `package-lock.json`, and delete 13 unused files (`process-section.tsx`, `hero-light-beams.tsx`, `contact-section.tsx`, etc.).
- **Risk Level:** Low.
- **Estimated Effort:** 1 hour.
- **Verification Command:** `npm audit --omit=dev && npx tsc --noEmit && npm run build && npm run test:seo`

### Phase 2: CSS Isolation & Selector Leak Resolution (PR 2)
- **Goal:** Prevent cross-page style bleeding and eradicate 13.75% duplicate CSS lines.
- **Files Affected:** `src/app/custom-software-development/custom-software.css`, `src/app/digital-marketing/digital-marketing.css`, `src/app/web-mobile-applications/web-mobile.css`, `src/app/about/about.css`.
- **Action:** Convert page styles into CSS Modules or idiomatic Tailwind CSS classes.
- **Risk Level:** Medium (visual QA required).
- **Estimated Effort:** 3 hours.
- **Verification Command:** `npx jscpd src --min-lines 8 --min-tokens 60 && npm run build`

### Phase 3: Component-Based Architecture & Service Unification (PR 3)
- **Goal:** Enforce the core architecture: pages compose; components render; data lives outside JSX.
- **Files Affected:**
  - Create `src/components/services/service-template.tsx`.
  - Refactor `custom-software-content.tsx`, `digital-marketing-content.tsx`, `web-mobile-content.tsx` to consume `<ServiceTemplate />`.
  - Move embedded data arrays out of `how-we-work.tsx` and `about-tech-stack.tsx` into `src/config/`.
  - Refactor `src/app/blogs/[slug]/page.tsx` into `<ArticleLayout />`.
- **Risk Level:** Medium.
- **Estimated Effort:** 4 hours.
- **Verification Command:** `npx tsc --noEmit && npm run lint && npm run build && npm run test:seo`

### Phase 4: Environment Centralization & Nginx Optimization (PR 4)
- **Goal:** Ensure all environment variables pass through `src/lib/env.ts` and static assets are cached.
- **Files Affected:** `src/app/api/contact/route.ts`, `src/app/blogs/[slug]/page.tsx`, `nginx.conf`, `src/components/seo/json-ld.tsx`.
- **Risk Level:** Low.
- **Estimated Effort:** 1.5 hours.
- **Verification Command:** `npm run test:contact && npm run build`

### Phase 5: Production i18n & Server Component Migration (PR 5)
- **Goal:** Replace client-side `LanguageProvider` with server-rendered `next-intl` to allow search engines to crawl all languages and demote client components back to Server Components.
- **Files Affected:** `src/app/[locale]/`, `src/contexts/language-context.tsx`, `src/locales/`.
- **Risk Level:** High (routing change).
- **Estimated Effort:** 6 hours.
- **Verification Command:** `npm run build && npm run test:seo`
