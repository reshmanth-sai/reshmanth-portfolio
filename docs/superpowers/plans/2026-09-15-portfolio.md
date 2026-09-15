# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship Reshmanth Sai's personal portfolio: a dark, editorial, single-accent Next.js site whose content lives in one file.

**Architecture:** Next.js 16 App Router. `app/page.tsx` is a Server Component composing section components in order. Every section reads from `lib/content.ts`. Motion lives only in `"use client"` leaf components (`motion/react`). Fonts self-hosted via `next/font/local`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind v4 (`@tailwindcss/postcss`), `motion`, `@phosphor-icons/react`, `react-github-calendar`.

**Spec:** `docs/superpowers/specs/2026-09-15-portfolio-design.md` (amended by the design-taste pass below).

## Global Constraints

- Palette: bg `#0a0a0b`, surface `#111113`, border `#1f1f23`, text `#ededed`, muted `#8a8a93`, accent `#f5b942`. One accent, used identically everywhere.
- Fonts: Clash Display (display), Satoshi (body), JetBrains Mono (labels/numbers). No Inter, no serif.
- Radius system: cards `rounded-[1.5rem]` (double-bezel outer `rounded-[2rem]`), buttons/pills `rounded-full`, chips `rounded-full`.
- Zero em-dashes or en-dashes in any visible string. Ranges use `-`.
- Max 3 eyebrows on the whole page (hero + Work + Contact). No section-number eyebrows. No locale/time strip. No scroll cues. No loader. No custom cursor. No fake hash footers.
- Icons: `@phosphor-icons/react` only, `weight="light"`.
- Motion: `motion/react` only; every animated component checks `useReducedMotion()`. No `window.addEventListener("scroll")`.
- Layout: `min-h-[100dvh]` never `h-screen`; page container `max-w-[1200px] mx-auto px-5 md:px-8`; every multi-column layout declares its `<768px` collapse.
- Phone number never rendered.

---

### Task 1: Scaffold, fonts, tokens, content

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `app/layout.tsx`, `app/globals.css`, `app/page.tsx` (placeholder), `lib/content.ts`, `lib/fonts.ts`, `scripts/fetch-fonts.mjs`, `public/fonts/*.woff2`, `public/reshmanth.jpg`, `public/resume.pdf`

**Produces:** `content` object (typed) exported from `lib/content.ts`; font CSS variables `--font-display`, `--font-body`, `--font-mono`; Tailwind theme tokens `bg-bg`, `bg-surface`, `border-line`, `text-fg`, `text-muted`, `text-accent`, `bg-accent`, `font-display`, `font-body`, `font-mono`.

- [ ] Step 1: `npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir=false --import-alias "@/*" --no-turbopack --yes` (into the existing dir; keep our `.gitignore` and `docs/`).
- [ ] Step 2: `npm i motion @phosphor-icons/react react-github-calendar`.
- [ ] Step 3: Write `scripts/fetch-fonts.mjs`: fetch `https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500,700`, parse `@font-face` blocks (family, weight, woff2 url), download to `public/fonts/<family-slug>-<weight>.woff2`. Run it. JetBrains Mono via `next/font/google`.
- [ ] Step 4: `lib/fonts.ts` exporting `display`, `body`, `mono` (`next/font/local` / `next/font/google`) with `variable` names above.
- [ ] Step 5: `app/globals.css`: `@import "tailwindcss"; @theme { --color-bg … --font-display … }`, base body styles, selection color, `@media (prefers-reduced-motion: reduce)` kill-switch for CSS animations, marquee keyframes.
- [ ] Step 6: Move photo: `mv "WhatsApp Image 2026-09-11 at 18.45.04.jpeg" public/reshmanth.jpg`. Convert resume: `soffice --headless --convert-to pdf` (fallback: `docx2pdf` / ask user) → `public/resume.pdf`.
- [ ] Step 7: `lib/content.ts` with typed sections: `profile`, `principles`, `projects` (5 flagship + 6 more), `experience`, `education`, `metrics`, `publications`, `skills`, `certifications`, `links`. Copy rewritten from the resume with all dashes normalised.
- [ ] Step 8: `npm run build` passes. Commit `feat: scaffold, fonts, tokens, content`.

### Task 2: Shell: Navbar, ScrollProgress, SocialRail, Footer

**Files:** `components/Navbar.tsx` (client), `components/ScrollProgress.tsx` (client), `components/SocialRail.tsx`, `components/Footer.tsx`, `components/Container.tsx`, `app/page.tsx`

**Produces:** `<Container>` wrapper; nav anchor ids `#work #experience #research #contact`.

- [ ] Floating pill nav (`fixed top-5 left-1/2 -translate-x-1/2`, glass, `rounded-full`, height 56px). Desktop: wordmark `RS`, 4 links, amber Resume button. Mobile (<768): wordmark + hamburger morphing to X; full-screen overlay with staggered link reveal.
- [ ] `ScrollProgress`: `useScroll` → `scaleX` amber 2px bar at top.
- [ ] `SocialRail`: `hidden lg:flex fixed right-6 bottom-8` vertical GitHub / LinkedIn / Mail icons.
- [ ] `Footer`: name, "Built with Next.js", year, links. No version strings.
- [ ] Build passes; commit `feat: site shell`.

### Task 3: Hero + Marquee

**Files:** `components/Hero.tsx` (client), `components/Marquee.tsx`

- [ ] Asymmetric split: left 7/12 text, right 5/12 photo. Text stack (max 4 elements): eyebrow pill "Open to SWE and applied ML internships" (1 of 3 eyebrows), headline 2 lines `Reshmanth Sai` / `builds AI systems you can audit.` (`text-5xl md:text-6xl lg:text-7xl`, italic accent on "audit" same family), 18-word subtext, CTAs: primary amber "View resume" (button-in-button arrow), secondary ghost "Email me".
- [ ] Photo: double-bezel frame, `next/image priority`, slight `rotate-2` on desktop only, amber-tinted diffused shadow. Below photo a 3-cell mono strip: `VIT Chennai` / `GPA 9.0` / `Chennai, India`.
- [ ] Background: fixed dot grid (CSS radial-gradient) + one slow amber radial glow behind the photo. Entry: staggered fade-up + blur.
- [ ] Marquee (the only one): stack keywords, CSS animation, paused under reduced motion. Mobile: stacks to single column, photo first.
- [ ] Build passes; screenshot 1280 + 375; commit `feat: hero and marquee`.

### Task 4: Principles + Work

**Files:** `components/Principles.tsx`, `components/Work.tsx` (client), `components/ProjectCard.tsx` (client), `components/MoreProjects.tsx`

- [ ] Principles: headline "How I build" + three plates in a `2fr 1fr 1fr` asymmetric grid (first plate large with amber tint, others surface). Each: big display line + one sentence.
- [ ] Work: eyebrow "Selected work" (2 of 3) + headline. Five `ProjectCard`s in a sticky-stack (Motion `useScroll` scale/opacity per card, `start top`). Card: double-bezel; header row (name, year, role), hook sentence, **"Deterministic core"** callout box in mono with amber left rule, stack chips, links (Live / GitHub) as pill buttons. Cards alternate a subtle accent tint on cards 2 and 4 so it is not five identical plates.
- [ ] MoreProjects: 6 repos in a 3-column grid of borderless rows (name, one-liner, language, arrow). Mobile: 1 column.
- [ ] Build passes; commit `feat: principles and work`.

### Task 5: Experience + Metrics + Research

**Files:** `components/Experience.tsx`, `components/Metrics.tsx` (client), `components/Research.tsx`

- [ ] Experience: headline "Experience and education". Vertical timeline with amber rule; two entries (IICT internship with two bullet pipelines and their metrics; VIT). Layout: date column left (mono), body right; collapses to stacked.
- [ ] Metrics: full-width dark band, 6 counters in a `3x2` grid (`2x3` on mobile) using `useMotionValue` + `animate` on `whileInView` once; mono numerals with amber unit suffix; label under each. Values from `content.metrics`.
- [ ] Research: two publication cards side by side (`lg:grid-cols-2`), status chip (`Under review` / `In preparation`), title, venue-less blurb, three metric pills. Distinct layout family from Work (flat, border-t rows inside).
- [ ] Build passes; commit `feat: experience, metrics, research`.

### Task 6: Skills + Certifications + GitHub + Contact

**Files:** `components/Skills.tsx`, `components/Certifications.tsx`, `components/GitHubActivity.tsx` (client), `components/Contact.tsx` (client), `app/page.tsx` (final order)

- [ ] Skills: headline "Stack" + 4 groups laid out as a 4-column mono list on desktop, 2 columns tablet, 1 mobile. No cards, no bars.
- [ ] Certifications: 4 items as a 2x2 grid (title, issuer, date, verify link if any).
- [ ] GitHubActivity: `react-github-calendar` themed amber, `ssr:false` via `next/dynamic`, skeleton loader matching height, error state text "Calendar unavailable". Beside it: repo count fetched from `https://api.github.com/users/reshmanth-sai` with `next: { revalidate: 3600 }`, fallback 22.
- [ ] Contact: eyebrow "Contact" (3 of 3), headline "Let's build something you can audit.", email row with copy button (state: idle → "Copied" for 1.5s), LinkedIn + GitHub pill links. One CTA intent per label across page: "Email me" in hero == same mailto; contact section uses "Copy email" (different intent: copy).
- [ ] Final `app/page.tsx` order: Navbar, ScrollProgress, Hero, Marquee, Principles, Work, Experience, Metrics, Research, Skills, Certifications, GitHubActivity, Contact, Footer, SocialRail.
- [ ] Build passes; commit `feat: skills, certs, github, contact`.

### Task 7: SEO, polish, verification

**Files:** `app/layout.tsx` metadata, `app/robots.ts`, `app/sitemap.ts`, `app/not-found.tsx`, `app/opengraph-image.tsx`, `README.md`

- [ ] Metadata: title "Reshmanth Sai", description, OG/Twitter, `metadataBase` from `NEXT_PUBLIC_SITE_URL` env with a fallback.
- [ ] `opengraph-image.tsx` via `next/og`: dark, name, one-liner, amber rule.
- [ ] `not-found.tsx` in-theme.
- [ ] Pre-flight check from design-taste skill: grep for `—` and `–` in `components lib app` (must be zero); count eyebrows (≤3); confirm no `lucide`; `npm run lint && npm run build`.
- [ ] Browser pane: desktop 1280 and mobile 375 screenshots of every section; fix any horizontal overflow, clipped italic descenders, wrapped CTAs.
- [ ] README with run/deploy instructions. Commit `chore: seo, polish, readme`.

### Task 8: Deploy (ask first)

- [ ] Ask user before: `gh repo create reshmanth-sai/portfolio --public --source . --push` and `vercel --prod` as a new project. Set `NEXT_PUBLIC_SITE_URL` to the resulting domain and redeploy.
