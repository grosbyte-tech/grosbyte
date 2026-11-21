# Grosbyte Technologies

Company website for [Grosbyte Technologies](https://grosbyte.com) — a Nepal-based technology company focused on practical software, websites, applications, automation, and digital marketing.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **UI:** Base UI, Radix UI
- **Animation:** Framer Motion
- **Email:** Resend API

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in RESEND_API_KEY, EMAIL_FROM, CONTACT_EMAIL

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting |
| `npm test` | Run full automated test suite |
| `npm run test:contact` | Run contact API endpoint tests |
| `npm run test:seo` | Run SEO metadata and build artifact tests |
| `npm run test:seo:snapshot` | Verify SEO metadata snapshot against locked baseline |
| `npm run test:visual:current` | Capture full-page screenshots across 21 routes & 3 viewports |
| `npm run test:visual:compare` | Run pixelmatch visual regression against baseline (<0.1% threshold) |

## Project Structure

```
src/
├── app/            # Next.js App Router routes, layouts, and API endpoints
├── components/     # Component-based presentation layer
│   ├── about/      # About page sections
│   ├── blogs/      # Blog listing and detail components
│   ├── contact/    # Contact form and enquiry UI
│   ├── effects/    # Text, animation, and decorative visual effects
│   ├── home/       # Home page sections
│   ├── layout/     # Header, navbar, mega-menu, and footer
│   ├── motion/     # Scroll reveal and motion primitives
│   ├── services/   # Service templates and section components
│   └── ui/         # Primitives (button, heading, inputs)
├── config/         # Static site and menu configurations
├── contexts/       # Language context provider
├── fonts/          # Local font files
├── lib/            # Utilities, API handlers, and SEO schemas
└── locales/        # Localized JSON dictionaries (en, de, ne, es)
```

## Environment Variables

See [.env.example](.env.example) for required configuration:
- `RESEND_API_KEY`: API key for contact email delivery
- `EMAIL_FROM`: Sender address
- `CONTACT_EMAIL`: Recipient inbox
- `NEXT_PUBLIC_SITE_URL`: Canonical site origin (default: `https://grosbyte.com`)
- `NEXT_PUBLIC_CDN_URL`: Optional asset CDN base URL

## Deployment

The project produces a standalone containerized artifact via `output: "standalone"`.

```bash
# Build production Docker container
docker build -t grosbyte .

# Run container
docker run -p 3000:3000 -e RESEND_API_KEY=... -e EMAIL_FROM=... -e CONTACT_EMAIL=... grosbyte
```
