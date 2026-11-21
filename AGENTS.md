<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Grosbyte Engineering Standards & Architecture Rules

1. **Component-Based Architecture:** Everything must be component-based. Pages compose; components render; data, config, and logic live outside JSX.
2. **Environment Validation:** All environment variable lookups must pass through `src/lib/env.ts`. Direct `process.env` calls are forbidden.
3. **Canonical & SEO Integrity:** All top-level and dynamic pages must declare explicit canonical metadata. Permanent 301 redirects are enforced in `next.config.ts`.
4. **Deterministic Testing:** Run `npm test` (`npm run test:contact && npm run test:seo`) after changes. SEO tests run against `.next` build output.
5. **No Visual Changes Without Approval:** Never alter design tokens, colors, layout, typography, animations, copy, or routes without explicit approval.
