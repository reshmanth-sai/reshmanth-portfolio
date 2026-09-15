# Reshmanth Sai — Portfolio Website Design

**Date:** 2026-09-15
**Direction:** "Audit Log" — dark, editorial, single amber accent, monospace metadata.
**Inspiration:** prodhosh.me (structure, motion, scale of type) — not copied; own identity.

## 1. Goals

- A fast, distinctive personal site for Naidu Reshmanth Sai (B.Tech CSE, VIT Chennai)
  targeting SWE / applied-ML internship recruiters.
- Positioning line: *builds AI systems that can be audited* — the resume's through-line
  (deterministic logic kept outside the LLM's decision path).
- All content editable from a single file (`lib/content.ts`).

## 2. Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, lucide-react,
  react-github-calendar.
- Fonts via `next/font/google`: Instrument Serif (display), Inter (body), JetBrains Mono (labels).
- No backend. Deployed to Vercel as a **new** project. Git repo initialised locally; pushed to
  GitHub on user request.

## 3. Design tokens

| Token | Value |
|---|---|
| bg | `#0a0a0b` |
| surface | `#111113` |
| border | `#1f1f23` |
| text | `#ededed` |
| muted | `#8a8a93` |
| accent (amber) | `#f5b942` |

Sections are numbered `§00 … §09` in mono. Max content width 1200px; 16px+ side gutters at
every width. Custom cursor: **not** included. All motion respects `prefers-reduced-motion`.

## 4. Sections (in order)

| § | Component | Content |
|---|---|---|
| — | `Loader` | ~600ms boot line `> verifying reshmanth-sai … ok`; skipped on reduced-motion. |
| — | `Navbar` | Floating pill nav (Work, Experience, Research, Contact) + amber Resume button; mobile drawer. |
| 00 | `Hero` | Mono status line (Chennai · GMT+5:30 · open to SWE/ML internships). Serif headline "Reshmanth Sai" + italic amber "builds AI systems that can be audited." Summary paragraph. CTAs: View Resume (`/resume.pdf`), Email me. Background: dot grid + slow amber radial glow. Desktop right: photo in a "record card" with mono metadata (name, role, gpa, status). |
| — | `Marquee` | CSS-only tech strip. |
| 01 | `Principles` | Three numbered plates: "Simplicity is the prerequisite for reliability" / "AI should augment human agency, not replace thought" / "Architecture is the art of decisions you can't easily undo". |
| 02 | `Work` | 5 flagship projects (MediGem, Provenance, PromptGuard, SafeBuild AI, TaxSense) as large alternating cards: hook, **deterministic-core callout**, stack chips, links, mono `sha256:` footer computed at build time from the project slug. Below: compact "More on GitHub" grid (RepairGraph, SortArena, Project Zenith, TrafficVision, campuspilot, stock-direction-predictor). |
| 03 | `Experience` | Timeline: IICT Delhi AI/ML intern (Jun–Jul 2026, two pipelines + metrics); VIT Chennai B.Tech CSE (exp. Jan 2029, GPA 9.0). |
| 04 | `Metrics` | Animated counters as a status panel: 99.64%, 98.46%, 95%, 9.0, 120k+ docs, 2 manuscripts. |
| 05 | `Research` | Mind Mirror (under review) and MVCRT-Net (in preparation) cards with status badge + metrics. |
| 06 | `Skills` | Four grouped mono lists: Languages / AI-ML / Frameworks & Libraries / Data & Tools. |
| 07 | `Certifications` | 4 rows: title, issuer, date. |
| 08 | `GitHub` | Contribution calendar (amber theme, client-only) + repo count from GitHub API with static fallback (22). |
| 09 | `Contact` | "Let's build something auditable." Email with copy button, LinkedIn, GitHub. No phone number. |
| — | `Footer` | © 2026 · built with Next.js · build date. |
| — | `SocialRail` | Desktop-only floating GitHub / LinkedIn / Mail rail. |
| — | `ScrollProgress` | Amber top bar. |

## 5. Assets

- `public/resume.pdf` — converted from `~/Downloads/Reshmanth_Sai_Resume_11.docx`.
- `public/reshmanth.jpg` — headshot supplied by user (green-wall photo).
- `public/og.png` — OpenGraph image (generated).

## 6. SEO / meta

`app/layout.tsx` metadata (title, description, OpenGraph, Twitter card), `app/robots.ts`,
`app/sitemap.ts`, `app/not-found.tsx`.

## 7. Verification

- `npm run build` and `npm run lint` pass.
- Visual check in browser pane at desktop (1280) and mobile (375) widths; every section screenshotted.
- No horizontal scroll at 375px; images through `next/image`.

## 8. Out of scope

Contact form, blog, CMS, analytics, custom cursor, video hero.
