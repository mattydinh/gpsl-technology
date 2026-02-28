# GPSL – Technology

A minimal, professional web app showcasing company overview, team, technology projects, AI applications, and contact. Built for sharing with partners and investors.

## Tech stack

- **Next.js 14** (App Router)
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

- **Team** – Edit `src/app/team/page.tsx` and the `team` array (or later add a CMS/PostgreSQL).
- **Projects** – Edit `src/app/projects/page.tsx` and the `projects` array.
- **AI** – Edit `src/app/ai/page.tsx` and the `useCases` array.
- **Contact** – Form is in `src/app/contact/page.tsx`. Wire the form to an API route or external service when ready.

## Optional next steps

- Add an API route (e.g. `src/app/api/contact/route.ts`) to handle contact form submissions.
- Add PostgreSQL + Prisma for team/projects CMS.
- Add a proper form handler (e.g. Resend, Formspree) for contact emails.
