# Kyronis — Corporate Startup Portfolio

A premium, production-quality corporate portfolio website built for a technology startup company. Dark theme, modern design with glassmorphism, Framer Motion animations, and full responsiveness.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist (via next/font)

---

## Prerequisites

| Tool | Minimum Version | Check |
|------|----------------|-------|
| Node.js | 18.x or later | `node --version` |
| npm | 9.x or later | `npm --version` |

> **Note:** All packages are installed locally inside `node_modules/`. Nothing is ever installed globally.

---

## Quick Start

```bash
cd corporate-portfolio
npm run setup
npm run dev
```

That's it. The `setup` script handles everything automatically.

---

## `npm run setup`

One-command project setup. Idempotent — safe to run as many times as you want.

**What it does:**

| Step | Action |
|------|--------|
| 1 | Checks Node.js version (requires 18+) |
| 2 | Checks npm version (requires 9+) |
| 3 | Installs all project dependencies (`npm install`) |
| 4 | Verifies the package tree integrity |
| 5 | Creates `.env.local` from `.env.example` if it doesn't exist |
| 6 | Creates any missing required folders (`src/lib`, `src/components`, etc.) |
| 7 | Runs TypeScript type-checking (`tsc --noEmit`) |
| 8 | Runs ESLint (`npm run lint`) |
| 9 | Verifies the project builds successfully (`npm run build`) |
| 10 | Prints a success message with next steps |

```bash
npm run setup
```

---

## `npm run dev`

Starts the development server bound to `0.0.0.0`, making the website accessible from any device on the same local network.

```bash
npm run dev
```

Example output:

```
  Local:   http://localhost:3000
  Network: http://192.168.1.42:3000
```

Open either URL in your browser.

---

## Accessing from a Mobile Phone

1. Connect your phone to the **same Wi-Fi network** as your computer.
2. Run `npm run dev` on your computer.
3. Note the **Network** URL printed in the terminal (e.g. `http://192.168.1.42:3000`).
4. Open that URL in your phone's browser.

If the phone cannot reach the URL:

- **Windows:** Check that your network profile is set to "Private" (not "Public"). Go to Settings > Network & Internet > Wi-Fi > click your network > set to Private.
- **Firewall:** Temporarily allow Node.js through Windows Defender Firewall. You'll be prompted on first launch — click "Allow".
- **VPN:** Disconnect from any VPN while testing locally.

---

## Other Scripts

```bash
npm run build    # Production build
npm run start    # Start production server (after build)
npm run lint     # Run ESLint
```

---

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    about/                # About Company page
    careers/              # Careers page
    contact/              # Contact page with email form
    legal/                # Privacy Policy, Terms, Cookie Policy
    portfolio/            # Portfolio (4 divisions)
    products/             # Products & Innovations
    research/             # Research & Innovation
    services/             # Services page
    layout.tsx            # Root layout with Navbar + Footer
    page.tsx              # Home page
    globals.css           # Global styles + CSS variables
  components/             # Reusable UI components
    Navbar.tsx            # Navigation bar
    Footer.tsx            # Footer
    Hero.tsx              # Hero section
    Button.tsx            # Button with variants
    Card.tsx              # Glassmorphism card
    SectionHeader.tsx     # Section title component
    FeatureCard.tsx       # Feature card with icon
    PortfolioCard.tsx     # Portfolio division card
    ServiceCard.tsx       # Service card
    ResearchCard.tsx      # Research card
    ContactForm.tsx       # Contact email form
    Timeline.tsx          # Timeline component
    PortfolioContent.tsx  # Portfolio page content
  data/                   # Data files
    navigation.ts         # Nav links, company info, footer links
    portfolio.ts          # 4 portfolio divisions data
    products.ts           # Products data
    services.ts           # Services data
    research.ts           # Research areas data
  types/                  # TypeScript interfaces
    index.ts
  lib/                    # Utility functions (extend as needed)
scripts/                  # Project tooling
  setup.js                # Automated setup script
  dev.js                  # Dev server launcher with network info
```

---

## Python Virtual Environment

A Python virtual environment is set up at the project root for any Python-based tooling needs:

```bash
# Windows
python -m venv .venv
.venv\Scripts\activate
python -m pip install --upgrade pip
```

All Python dependencies should be installed inside this `.venv` — never globally.

---

## Deployment on Vercel

This project is optimized for Vercel deployment:

1. Push the `corporate-portfolio` directory to a GitHub repository.
2. Import the project into [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js and applies optimal settings.
4. Deploy — no additional configuration required.

Alternatively, deploy from the CLI:

```bash
npm i -g vercel
vercel
```

---

## Website Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Mission, Vision, Portfolio Preview, Stats, CTA |
| `/about` | About — Company story, Mission, Values, Founders, Timeline, Goals |
| `/portfolio` | Portfolio — AI, Robotics, IT, Civil Engineering divisions |
| `/products` | Products — Aurora Platform, XO-M, XO-Med, Future Products |
| `/research` | Research — AI, Robotics, Engineering research areas |
| `/services` | Services — AI Solutions, Software, Robotics, Consulting, Research |
| `/careers` | Careers — Culture, Open Positions, Internships |
| `/contact` | Contact — Form + Contact info + Map placeholder |
| `/legal/privacy` | Privacy Policy |
| `/legal/terms` | Terms & Conditions |
| `/legal/cookies` | Cookie Policy |

---

## Design Features

- Dark theme with premium indigo/cyan/violet gradient accents
- Glassmorphism cards and navigation
- Smooth scroll-triggered animations via Framer Motion
- Fully responsive (mobile, tablet, desktop)
- Accessible semantic HTML
- SEO-friendly metadata on all pages
- Custom scrollbar styling
- Dynamic Lucide icon rendering

---

## Troubleshooting

### `node --version` shows < 18

Install the latest LTS from [nodejs.org](https://nodejs.org) or use `nvm`:

```bash
nvm install 18
nvm use 18
```

### `npm install` fails

```bash
rm -rf node_modules package-lock.json
npm install
```

### `npm run dev` port already in use

```bash
npx kill-port 3000
npm run dev
```

### Mobile phone cannot reach the Network URL

1. Verify both devices are on the same Wi-Fi network.
2. On Windows, set your network profile to "Private" (Settings > Network & Internet > Wi-Fi > click network > Private).
3. Allow Node.js through Windows Defender Firewall when prompted.
4. Disconnect from any VPN.
5. Try pinging your computer's IP from another device to verify connectivity.

<!-- CI/CD verification: 2026-07-26 automated deployment pipeline test -->
