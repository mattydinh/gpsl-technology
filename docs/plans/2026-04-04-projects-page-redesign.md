# Projects Page Redesign

## Context
Rebuild the projects page to match the team's Chrome bookmarks bar (excluding AI Hedge Fund and SignalDesk). Add live links to each project and shorten descriptions. Visual redesign from stacked list to a 2-column showcase grid.

## Projects (from bookmarks bar)

| # | Project | URL | Tags |
|---|---------|-----|------|
| 1 | Civic Sentinel | civic-sentinel.vercel.app/signals | Multi-Agent, LLM, Political Data, RAG |
| 2 | HelixBridge | helixbridge.vercel.app | AI, Protein Models, Generative Design |
| 3 | Grantbridge | grantbridge-ai.vercel.app | Next.js, AI, Grant Discovery |
| 4 | Meridian AI | web-production-92c07.up.railway.app | AI Chat, Real Estate, Buyer Matching |
| 5 | LegacyCompass | legacy-compass-puce.vercel.app | AI, Estate Planning, Provider Matching |
| 6 | LuxusAI | luxusai.vercel.app | AI, Legal, Deal Structuring |
| 7 | InvenioAI | invenio-ai.vercel.app/dashboard | AI, Recruiting, Knowledge Graph |

**Removed:** Red Cedar Routes, Signal Desk, QwikClose

## Design: Project Showcase Grid

### Layout
- 2-column responsive grid (1-col mobile, 2-col md+)
- Each card is a full-clickable `<a>` with `target="_blank"`
- Max width `max-w-4xl`, gap-5

### Card Design
- Top: 3px cyan gradient accent bar
- Icon in cyan-tinted circle + bold title + ExternalLink icon (visible on hover)
- 1-2 sentence description
- Tag pills at bottom

### Interactions
- Hover: translate-y -2px, border shifts cyan, shadow-glow-sm, ExternalLink fades in
- Entire card is clickable link

### Files to Modify
- `src/app/projects/page.tsx` — full rewrite
- `src/__tests__/pages.test.tsx` — update project assertions

### Verification
- `npm run build` passes
- `npm test` passes (all 24 tests, updated assertions)
- Visual check: cards render in grid, links open in new tabs
