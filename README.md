# jacobasmall.world

Personal portfolio for Jacob A. Small — Next.js 14, Tailwind CSS, Vercel.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS — no component libraries
- **Fonts**: Playfair Display + Inter via Google Fonts `<link>` tags
- **Animations**: Vanilla React hooks — no animation libraries
- **Deployment**: Vercel

## Setup

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Portrait Image

Place `Me.png` in `/public/me.png` before deploying.

The portrait is rendered with `mix-blend-mode: multiply` — white areas
become transparent against the `#E8E2D9` beige background. The image
prints onto the page like ink on warm paper.

## Deploying to Vercel

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy
vercel

# Set domain in Vercel dashboard
# Project Settings → Domains → jacobasmall.world
```

## Color System

| Token    | Hex       | Use                              |
|----------|-----------|----------------------------------|
| Page     | `#E8E2D9` | Background — warm linen          |
| Ink      | `#1A1814` | All text — near-black, warm      |
| Card     | `#E0D9CE` | Card backgrounds                 |
| Border   | `#C8BFB0` | All borders — warm taupe         |
| Muted    | `#7A7268` | Labels, secondary text           |
| Hover    | `#8A7F72` | Border hover state               |

## File Structure

```
app/
  layout.tsx          — fonts, metadata
  globals.css         — base styles, utility classes
  page.tsx            — page assembly
components/
  Nav.tsx             — sticky nav + mobile overlay
  Hero.tsx            — typewriter, live clock, portrait
  StackedName.tsx     — JACOB A. SMALL vertical (desktop)
  AIEssay.tsx         — AI essay + 3 embedded widgets
  Research.tsx        — 11 HBS case study cards
  BigIdeas.tsx        — Worldchangers + Buffalo + provocations
  Creative.tsx        — Reta, music links
  CV.tsx              — experience, education, publications
  Footer.tsx          — email, LinkedIn, phone
public/
  autoregressive.html    — sequential chip widget
  nonautoregressive.html — slot machine widget
  lean4_proof_light.html — LEAN4 proof typewriter
  me.png              — portrait (add before deploying)
```
