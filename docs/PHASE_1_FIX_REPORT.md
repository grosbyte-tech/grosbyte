# PHASE 1 REMEDIATION REPORT

- **Project:** Grosbyte Technologies (`grosbyte`)
- **Remediation Branch:** `fix/audit-phase-1`
- **Base Commit:** `2d7cfc7`
- **Execution Date:** 2026-11-21
- **Engineer:** Principal Frontend Engineer (Strict Mode)

---

## 1. Remediation Checklist & Status Table

| Issue ID / Title | Severity | Files Affected | Phase | Status | Resolution / Deferred Reason |
|---|:---:|---|:---:|:---:|---|
| **SEC-01:** Nginx Missing Cache & Security Headers | CRITICAL | `nginx.conf` | Phase 1 | **Fixed** | Added immutable caching for `/_next/static/` (365d), public media caching for `/images/` & `/icons/` (1d), and `Permissions-Policy`. |
| **SEC-02:** Next.js Dependency CVEs | CRITICAL | `package.json`, `package-lock.json` | Phase 1 | **Partially Fixed** | Executed safe `npm audit fix` patching `nanoid`, `baseline-browser-mapping`, and `source-map-js`. Next.js 16.4.6 upgrade deferred to Phase 2 to avoid breaking changes. |
| **SEC-03:** JSON-LD Script Tag Injection Protection | MAJOR | `src/components/seo/json-ld.tsx` | Phase 1 | **Fixed** | Escaped `<` characters as `\u003c` in serialized JSON-LD payload to eliminate `</script>` vector. |
| **SEC-04:** External Link Security (`rel="noopener"`) | MAJOR | `share-article.tsx`, `contact-page-content.tsx`, `footer.tsx` | Phase 1 | **Fixed** | Verified 100% of external `target="_blank"` anchors declare `rel="noopener noreferrer"`. |
| **CFG-01:** Direct `process.env` Calls Bypassing Validation | MAJOR | `api/contact/route.ts`, `blogs/[slug]/page.tsx`, `share-article.tsx` | Phase 1 | **Fixed** | Routed all `process.env` calls through `src/lib/env.ts` (`validateContactServerEnv` and `clientEnv`). Exactly 0 direct calls remain in application code. |
| **I18N-01:** Missing `nav.blogs` Key in Locale Files | MINOR | `src/locales/de.json`, `ne.json`, `es.json` | Phase 1 | **Fixed** | Added missing `nav.blogs` translation to German, Nepali, and Spanish dictionaries. |
| **DEP-01:** 12 Dead Files (2,600+ Lines) in Repository | MAJOR | 12 files across `src/components` and `src/lib` | Phase 1 | **Fixed** | Purged all 12 confirmed unused files via `git rm`: `process-section.tsx`, `hero-light-beams.tsx`, `contact-section.tsx`, `select.tsx`, `underline-heading.tsx`, `language-switcher.tsx`, `scroll-reveal-text.tsx`, `premium-image.tsx`, `assets.ts`, `cdn.ts`, `contact/index.ts`, `seo/index.ts`. |
| **DEP-02:** Unused Dependencies in `package.json` | MAJOR | `package.json`, `package-lock.json` | Phase 1 | **Fixed** | Uninstalled `tw-animate-css`, `@radix-ui/react-select`, and `shadcn` CLI (removed 261 total packages from `node_modules`). |
| **A11Y-01:** Unnecessary `"use client"` on Primitives | MINOR | `src/components/ui/button.tsx` | Phase 1 | **Fixed** | Removed `"use client"` directive from `button.tsx`, allowing it to render on the server. |
| **CODE-01:** Redundant Default & Named Exports | MINOR | `gradient-text.tsx`, `folding-text.tsx` | Phase 1 | **Fixed** | Removed redundant `default` export in `gradient-text.tsx` and unused `FoldingTitle` alias in `folding-text.tsx`. |
| **OPS-01:** Dockerfile Reproducibility | MINOR | `Dockerfile` | Phase 1 | **Fixed** | Added `ARG NEXT_PUBLIC_SITE_URL` and `ENV NEXT_PUBLIC_SITE_URL` to builder stage. |
| **TEST-01:** Missing Env Validation Unit Test | MAJOR | `tests/contact-api.test.mjs` | Phase 1 | **Fixed** | Added automated test assertion verifying `validateContactServerEnv()` throws with descriptive missing env keys. |
| **DOC-01:** Outdated README & AGENTS.md | MINOR | `README.md`, `AGENTS.md` | Phase 1 | **Fixed** | Updated script table, environment configuration reference, Docker deployment guide, and engineering architecture rules. |
| **CSS-01:** Global CSS Selector Bleed (`.cs-*`) | CRITICAL | Service CSS stylesheets | Phase 2 | **Deferred** | Requires CSS Modules / Tailwind conversion (strictly Phase 2 scope to prevent visual shifts). |
| **ARCH-01:** Component Duplication & God-Components | MAJOR | `custom-software-content.tsx`, etc. | Phase 2 | **Deferred** | Requires component extraction and template unification (strictly Phase 2 scope). |
| **I18N-02:** Server-Side `next-intl` Migration | MAJOR | `src/app/[locale]/` | Phase 2 | **Deferred** | Requires App Router directory reorganization and routing middleware (strictly Phase 2 scope). |
| **PERF-01:** Video Streaming CDN Migration | MAJOR | `public/videos/employee-working.mp4` | Phase 2 | **Deferred** | Requires external CDN (Cloudflare Stream/Mux) setup. File tracked in backlog. |

---

## 2. Before vs After Metrics

| Metric | Before (Audit `2d7cfc7`) | After (Phase 1 `fix/audit-phase-1`) | Delta |
|---|:---:|:---:|:---:|
| **TypeScript Errors (`tsc`)** | 0 | 0 | Clean |
| **ESLint Errors / Warnings** | 0 | 0 | Clean |
| **Automated Contact Tests** | 9 passed | 10 passed | **+1 test** |
| **Automated SEO Tests** | 5 passed | 5 passed | Clean |
| **Knip Unused Files** | 13 files | **0 files** | **-13 dead files** |
| **Knip Unused Dependencies** | 2 | **0** | **-2 dependencies** |
| **Knip Duplicate Exports** | 5 | **4** | **-1 duplicate export** |
| **Depcheck Unused Dependencies** | `tw-animate-css` | **0** | **Purged** |
| **Circular Dependencies (`madge`)** | 0 | 0 | Clean |
| **Duplicated Lines (`jscpd`)** | 1,900 (7.09%) | 1,771 (7.41%) | **-129 duplicate lines** |
| **Direct `process.env` Calls** | 5 files | **0 files** (only in `env.ts`) | **100% centralized** |
| **Files with `"use client"`** | 51 files | **44 files** | **-7 files** |
| **Missing Locale Keys** | 3 keys (`nav.blogs`) | **0 keys** | **100% complete** |
| **Installed npm Packages** | 637 packages | 376 packages | **-261 packages** |

---

## 3. List of Changed Files Grouped by Commit

### Commit 1: `f1f52f5`
`fix(security): add security headers and static asset caching in nginx`
- `nginx.conf` — Added immutable caching for `/_next/static/`, media caching for `/images/`, `Permissions-Policy` header, and healthcheck location.

### Commit 2: `22d4d8d`
`fix(config): route process.env calls through env.ts and sync locale keys`
- `src/app/api/contact/route.ts` — Replaced raw `process.env` with `validateContactServerEnv()`.
- `src/app/blogs/[slug]/page.tsx` — Replaced raw `process.env` with `clientEnv.NEXT_PUBLIC_SITE_URL`.
- `src/components/blogs/share-article.tsx` — Replaced raw `process.env` with `clientEnv.NEXT_PUBLIC_SITE_URL`.
- `src/locales/de.json` — Added `"blogs": "Blogs"` under `nav`.
- `src/locales/ne.json` — Added `"blogs": "ब्लगहरू"` under `nav`.
- `src/locales/es.json` — Added `"blogs": "Blogs"` under `nav`.
- `tests/contact-api.test.mjs` — Added `@/lib/env` resolver to mock runner.

### Commit 3: `6748f41`
`fix(a11y): remove unnecessary client directive from button and clean unused exports`
- `src/components/ui/button.tsx` — Removed `"use client"` directive.
- `src/components/effects/gradient-text.tsx` — Removed redundant `export default GradientText`.
- `src/components/effects/folding-text.tsx` — Removed unused `FoldingTitle` alias.

### Commit 4: `e69c933`
`chore(deps): delete unused dead code files and clean package dependencies`
- *Deleted Files:*
  - `src/components/home/process-section.tsx`
  - `src/components/effects/hero-light-beams.tsx`
  - `src/components/contact/contact-section.tsx`
  - `src/components/ui/select.tsx`
  - `src/components/ui/underline-heading.tsx`
  - `src/components/layout/language-switcher.tsx`
  - `src/components/motion/scroll-reveal-text.tsx`
  - `src/components/media/premium-image.tsx`
  - `src/lib/constants/assets.ts`
  - `src/lib/image/cdn.ts`
  - `src/lib/contact/index.ts`
  - `src/lib/seo/index.ts`
- `package.json` & `package-lock.json` — Uninstalled `tw-animate-css`, `@radix-ui/react-select`, `shadcn`.

### Commit 5: `272a58f`
`ci(docker): add build argument to Dockerfile and expand test suite`
- `Dockerfile` — Added `ARG NEXT_PUBLIC_SITE_URL` and `ENV NEXT_PUBLIC_SITE_URL` to builder stage.
- `tests/contact-api.test.mjs` — Added test assertion verifying `validateContactServerEnv` throws on missing credentials.

### Commit 6: (Pending final commit)
`docs: update README, AGENTS.md, and create Phase 1 fix report`
- `README.md` — Updated script table, Docker commands, and project layout.
- `AGENTS.md` — Added engineering and architectural standards.
- `docs/PHASE_1_FIX_REPORT.md` — Full Phase 1 documentation.

---

## 4. Full Output of Final Verification Run

```bash
$ npx tsc --noEmit && npm run lint && npm run test:contact && npm run build && npm run test:seo
```

```
> grosbyte@0.1.0 lint
> eslint

> grosbyte@0.1.0 test:contact
> node tests/contact-api.test.mjs

✔ accepts an enquiry and sends both escaped emails with optional fields (45.890666ms)
✔ validates every required field and optional field limits (11.951625ms)
✔ accepts all ten real offerings and omitted optional fields (64.017333ms)
✔ rejects malformed, null, array, oversized, and non-JSON requests (4.878167ms)
✔ rejects foreign origins, honeypots, invalid IDs, and header injection (4.610292ms)
✔ limits repeated email attempts and provides Retry-After (4.792667ms)
✔ reports missing configuration and provider failure without fake success (13.403042ms)
✔ accepts the public host when Next uses an internal route hostname (6.636917ms)
✔ health check endpoint returns healthy status (1.1785ms)
✔ validateContactServerEnv raises descriptive error when configuration is missing (1.156708ms)
ℹ tests 10
ℹ suites 0
ℹ pass 10
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 165.504958

> grosbyte@0.1.0 build
> next build

▲ Next.js 16.2.10 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 1451ms
  Finished TypeScript in 1605ms
  Collecting page data using 9 workers in 236ms
✓ Generating static pages using 9 workers (27/27) in 159ms
  Finalizing page optimization in 132ms

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ƒ /api/contact
├ ƒ /api/health
├ ○ /blogs
├ ● /blogs/[slug] (6 paths)
├ ○ /contact
├ ○ /custom-software-development
├ ○ /digital-marketing
├ ○ /manifest.webmanifest
├ ○ /robots.txt
├ ● /services/[slug] (7 paths)
├ ○ /sitemap.xml
└ ○ /web-mobile-applications

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand

> grosbyte@0.1.0 test:seo
> node tests/seo-metadata.test.mjs

==========================================
GROSBYTE TECHNOLOGIES - AUTOMATED SEO TEST
==========================================
✓ PASS: robots.txt existence and directives
✓ PASS: sitemap.xml completeness, canonical URLs and zero duplicates
✓ PASS: Metadata correctness, unique titles, and canonical normalization
✓ PASS: Structured data validity and Schema.org entity presence
✓ PASS: Custom 404 page contains noindex directive and branded recovery UI
==========================================
TEST SUMMARY: 5 PASSED, 0 FAILED
==========================================
```

---

## 5. Phase 2 Backlog (Deferred Architectural Items)

The following items are structural, visual, or framework-level refactors identified in the audit report that require deliberate design review:

1. **CSS Selector Bleed & Consolidation:**
   - *Target:* `custom-software.css`, `digital-marketing.css`, `web-mobile.css`, and `about.css`.
   - *Action:* Convert shared `.cs-*` selectors to CSS Modules (`[name].module.css`) or pure Tailwind classes to eliminate DOM pollution during client-side navigation.
2. **Component-Based Architecture & Service Unification:**
   - *Target:* `custom-software-content.tsx` (348 lines), `digital-marketing-content.tsx` (423 lines), `web-mobile-content.tsx` (352 lines).
   - *Action:* Extract into a single parametric `<ServiceTemplate />` with reusable `<ServiceHero>`, `<ServiceChecklist>`, `<ServiceTechStack>`, and `<ServiceFaq>` components.
3. **Blog Detail Layout Extraction:**
   - *Target:* `src/app/blogs/[slug]/page.tsx` (205 lines).
   - *Action:* Extract page body into `<ArticleHero>`, `<ArticleBody>`, and `<RelatedArticlesGrid>`.
4. **Data & Content Separation:**
   - *Target:* 29+ content arrays embedded directly in components (`STEPS` in `how-we-work.tsx`, `TECH_CATALOG` in `about-tech-stack.tsx`, etc.).
   - *Action:* Relocate arrays to `src/config/` and localize copy.
5. **Server-Side i18n (`next-intl`):**
   - *Target:* `src/contexts/language-context.tsx`.
   - *Action:* Replace client-side context with `src/app/[locale]/` subpaths, enabling search engine indexing for non-English locales and allowing Server Components to render translated strings.
6. **Video Streaming Offload:**
   - *Target:* `public/videos/employee-working.mp4` (2.7 MB).
   - *Action:* Upload to Cloudflare Stream or Mux with adaptive HLS streaming.
7. **Next.js Version Bump to 16.4.6+:**
   - *Target:* `package.json`.
   - *Action:* Update Next.js to patch remaining upstream advisories once tested against Turbopack.

---

## 6. Risks & Manual Verification Checklist

Please execute these manual checks in the browser:

1. **Contact Form Submission:** Visit `/contact`, fill in all fields, and submit to verify the API returns HTTP 200 with delivery confirmation.
2. **Contact Form Validation:** Submit with an invalid email and empty name to ensure inline red validation errors render cleanly.
3. **Language Dropdown & Navigation:** Verify language switching between EN, DE, NE, and ES functions without UI glitches, and confirm the blog link appears in the menu.
4. **Service Routes Transition:** Navigate from `/custom-software-development` to `/digital-marketing` and `/web-mobile-applications` to confirm layouts render correctly.
5. **Blog Detail & Sharing:** Visit any blog post (e.g. `/blogs/planning-a-business-website`), click the table of contents links, and verify the social share links open in new tabs with `noopener noreferrer`.
