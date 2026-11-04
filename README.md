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
| `npm run test:contact` | Run contact API tests |

## Project Structure

```
src/
├── app/            # Next.js App Router pages and API routes
├── components/     # React components (ui, layout, sections, etc.)
├── contexts/       # React context providers (theme, language)
├── lib/            # Shared utilities, types, and data
└── locales/        # Translation JSON files
```

## Environment Variables

See [.env.example](.env.example) for required configuration.

## Deployment

The project uses `output: "standalone"` for containerized deployment. See the `Dockerfile` for the production build configuration.
