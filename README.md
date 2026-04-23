# GPSL

GPSL is the pathway between intent and execution — an operating discipline of human logistics, anchored in Tribal Economic Development. The company is organized in two divisions: **Execution** (the human layer — coordination, operating models, ventures, team) and **Technology** (the systems layer — software, automation, and AI-native tools that give execution the leverage to scale). This site is the public face for both divisions.

**Live site:** [https://gpsl-ubo.com](https://gpsl-ubo.com)

**Source of truth for messaging + IA:** [docs/plans/2026-04-23-gpsl-ubo-rebuild-design.md](docs/plans/2026-04-23-gpsl-ubo-rebuild-design.md). Developer context (design system, theme tokens, test rules): [CLAUDE.md](CLAUDE.md).

## Tech stack

- **Next.js 15** (App Router)
- **React** + **TypeScript**
- **Tailwind CSS**
- Ready for **Vercel** deployment

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel (share with your partner)

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. **Add New Project** → import your repo.
4. Leave defaults (framework: Next.js, root: `./`) and click **Deploy**.
5. Vercel gives you a URL like `https://gpsl-technology-xxx.vercel.app`. Share that with your business partner and investors.

Updates: push to your main branch and Vercel will auto-deploy.

## Customize content

The site has 4 routes. All page data (ventures, products, team, services) lives inline in the page components — no CMS.

- **Home** — `src/app/page.tsx`. Hero, why-we-exist, origin, human-logistics framework, two pathways, CTA.
- **Execution** — `src/app/execution/page.tsx`. Positioning, operating model (Discover / Align / Execute / Sustain), ventures (`#ventures`), team (`#team`), services (`#services`).
- **Technology** — `src/app/technology/page.tsx`. Positioning, why Technology exists, `#shipped` (products + forward-deployed), stack + Claude Partner Network, forward-deployed shape.
- **Contact** — `src/app/contact/page.tsx`. Three topic tiles (Execution / Technology / General); pre-selects via `?topic=` query param. Mailto handoff to `matthew.dinh@gpsl-ubo.com`.

**Do not add top-level routes** without first re-brainstorming the design doc. Portfolio and Team used to be nav items; both now redirect to anchors on Technology and Execution respectively ([next.config.mjs](next.config.mjs)).

## Optional next steps

- Wire the contact form to a proper handler (Resend / Formspree) when volume warrants it — current flow is a mailto link.
- If adding a blog or case studies, put them behind a new `/work` or `/thinking` top-level route and update the IA + nav — don't spread back into `/portfolio` / `/projects` URLs.
