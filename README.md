# reshmanth.dev

Personal portfolio of Naidu Reshmanth Sai. Next.js 16, Tailwind v4, Motion.

## Editing content

Everything shown on the site lives in `lib/content.ts` (profile, projects, experience,
publications, skills, certifications). Components are presentation only.

- Resume: replace `public/resume.pdf`.
- Photo: replace `public/reshmanth.jpg` (portrait, 4:5 works best).

## Run

```bash
npm install
npm run dev
```

## Fonts

Clash Display and Satoshi are self-hosted from Fontshare. To refresh them:

```bash
node scripts/fetch-fonts.mjs
```

## Deploy

Deployed on Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production URL so metadata,
`robots.txt` and `sitemap.xml` use the right origin.
