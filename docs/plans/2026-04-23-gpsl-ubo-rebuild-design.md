# GPSL-UBO Messaging + Brand Rebuild — Design

**Date:** 2026-04-23
**Owner:** Matthew Dinh
**Source brief:** `~/Downloads/gpsl-rebuild-brief-running.md` (Version 2)
**Scope:** messaging, copy, information architecture. Visual design direction unchanged (existing theme tokens, typography, surfaces retained).

---

## 1. Repositioning summary

The current site sells GPSL as *an operator with a balance sheet* ("We build, operate, and scale ventures"). The brief asks for a site that sells GPSL as *the pathway from intent to execution*, anchored in Tribal Economic Development as the mission origin and "the discipline of human logistics" as the framework.

Those are different stories for different audiences. The first is credibility currency with capital (funds, LPs, operator inbound). The second is credibility currency with mission partners (tribes, agencies, institutional partners, organizations that want transformation but do not know where to start). The brief implicitly picks the second, and this design commits to it.

### Locked decisions (from brainstorm)

| # | Decision | Choice |
|---|---|---|
| 1 | Scope of session | Copy deck **and** implementation in-session |
| 2 | Tone calibration | **Option C** — measured, not softened. Strip posture language (*"advantage," "edge," "peers cannot," "regulatory edges"*) but keep structural truth (tribal jurisdiction unlocks certain positions; long-horizon holder; in-house tech division). Applied uniformly across all surfaces. |
| 3 | Execution page posture | **Option C — hybrid.** Mission-narrative leads (operating model + team + ventures as proof). Services demoted to a "how we engage" section below. Keeps operator inbound path visible without making the page read as a pitch. |
| 4 | "Human logistics" framework depth | **Option C — structural on Home, light touch elsewhere.** Home carries the full thesis (hero → why → origin → what-we-learned → human logistics → two pathways → contact). Execution and Technology re-tone + pick up the phrase, do not restructure around it. |
| 5 | Ventures on Home | Cut entirely. No "ventures in motion" strip. Ventures only on Execution as proof of the operating model. |
| 6 | Team placement | Unified roster on Execution at `#team` anchor. One team, one discipline. One-line role labels (Engineering / Operations / Counsel) make internal division visible without splitting the section. |
| 7 | H1 of Home | *"Transformation needs a pathway, not just ambition."* "The discipline of human logistics" becomes the deferred reveal at the framework section (Section 5 of Home). |

---

## 2. Information architecture

### Top-level navigation (4 items)
Home · Execution · Technology · Contact

### Routes
| Route | Status | Notes |
|---|---|---|
| `/` | Full rebuild | See §4 |
| `/execution` | Restructured | See §5. Team folded in at `#team`. 3 ventures live here as proof. |
| `/technology` | Surgical re-tone + merge | See §6. Portfolio software content folds in as "What we ship." |
| `/contact` | Light re-tone | See §7. "Partnerships" tile becomes "General." |
| `/portfolio` | **Deleted** | 308 redirect → `/technology#shipped` |
| `/portfolio/tech` | **Deleted** | 308 redirect → `/technology#shipped` |
| `/team` | **Deleted** | 308 redirect → `/execution#team` |

Existing legacy redirects (`/projects`, `/ai`, `/about`, `/services`, `/newsletters`) retained as-is in `next.config.mjs`.

### Footer
Updated to match nav. Drop standalone Portfolio and Team links. Add anchor links to `/execution#team` and `/technology#shipped` if useful.

---

## 3. Global tone rules

### Voice rules
1. **Credibility over hype.** Favor clarity and substance over trend language.
2. **Structural truth, no posture.** State what is true without positioning it as *advantage* or *edge*.
3. **Measured on mission.** Describe system failure, not villains.
4. **"AI" earns its appearances.** Never as a company descriptor. Never leads a heading.
5. **No priced packages, no tier names, no "from $X"** anywhere on the site.
6. **One voice across surfaces.** Home, Execution, Technology, Contact share tone calibration. Surface design (warm paper vs. zinc) shifts; voice does not.

### Words to retire
- *"Our edge comes from…"* / *"…our peers cannot access"* / *"…only sovereign operators can work"*
- *"Tribal sovereignty as advantage"* / *"work the regulatory edges"*
- *"AI-native," "AI-first," "AI-powered," "agentic"* as standalone company descriptors
- *"Transformational," "revolutionary," "next-generation," "cutting-edge"*
- *"Our solutions"* as a generic noun — name the specific thing
- *"Synergies," "ecosystem," "end-to-end," "holistic," "best-in-class"*
- *"Empower," "unlock value," "drive outcomes"*
- Long industry lists on Home

### Words to keep
- *"The discipline of human logistics"* — load-bearing
- *"Operating discipline / pathway / infrastructure"*
- *"Execution," "coordination," "governance," "hand-off," "timing," "support structure"*
- *"Tribal Economic Development"* — proper-noun framing
- *"Long-horizon"* (not "long-term")
- *"Forward-deployed"* (specific term, retained)
- *"Claude Partner Network"* (credentialing)

### Positive voice cues
- Mix short and medium sentences. No three-clause run-ons.
- Concrete operator verbs (hire, ship, run, close, stand up, reinvest) over abstract ones (leverage, enable, facilitate, drive).
- Specific nouns (governance, cap table, jurisdiction, ownership, handoff) over abstract ones (alignment, strategy, vision).
- Emphasis (italics) used sparingly — one or two phrases per page max.

---

## 4. Home page

Seven sections, in the order the brief prescribes.

### 4.1 Hero
**Kicker:** GPSL — an operating discipline
**H1:** Transformation needs a pathway, not just ambition.
**Sub:** Most organizations understand what they want to change. Few know how to make the change actually happen — which people, in what place, at what time, with what support. GPSL is the discipline that closes that gap.
**Primary CTA:** How we execute → `/execution`
**Secondary CTA:** Technology division → `/technology`

### 4.2 Why we exist
**Kicker:** Why GPSL exists
**H2:** Most transformation fails in the operating layer.
**Body:**
Modernization, AI, reform, reinvention — the language of change is everywhere, and most of it never reaches operation. Not for lack of intent. For lack of structure: the right people in the right roles, clear coordination across stakeholders, and support that holds up when the work gets hard.

GPSL was built to close that gap. Our work is not the idea, not the software, not the announcement. It is the operating discipline underneath — the human logistics that make execution actually happen.

### 4.3 Origin
**Kicker:** Origin
**H2:** We were built inside Tribal Economic Development.
**Body:**
Tribal communities have too often had to operate within fragmented and under-supported systems, where the surrounding infrastructure makes execution harder than it should be. GPSL was built inside that work.

We learned that progress rarely fails because of a lack of vision. It fails because the operating infrastructure underneath was never designed to carry it. GPSL was built from the belief that those systems can and should work better — and that better execution is not an ambition. It is a discipline.

### 4.4 What the mission taught us
**Kicker:** What we learned
**H2:** The mission made us better at everything else.
**Body:**
Solving a real, difficult coordination problem pulled GPSL into finance, trade, logistics, housing, food systems, energy, and the software underneath all of them. Not by choice — by necessity. Each sector forced us to see how intent, people, timing, and infrastructure actually interact.

The pattern we now run across every engagement came from that work. The mission taught us to see systems whole, design for the hand-off, and treat execution as the output of a well-built pathway, not the result of willpower.

### 4.5 Human logistics (framework)
**Kicker:** The framework
**H2:** Human logistics is what we do.
**Body:**
Human logistics is the discipline of getting the right people into the right place, doing the right work, at the right time, with the support structure around them that makes the work hold up. It is not a methodology we borrowed. It is the pattern we learned from doing it.

We apply it across two sides of the company. Execution, where people and operations carry the work. Technology, where systems and software give the work the leverage to scale. Both answer to the same discipline.

### 4.6 Two pathways
**Kicker:** Two pathways
**H2:** How GPSL is organized.
Two cards:
- **Execution — The human layer.** Coordination, governance, operating models, and the teams who carry the work. Where intent becomes an operation that runs.
- **Technology — The systems layer.** Software, automation, and AI-native tools that give execution the leverage to scale without losing its discipline.

### 4.7 Start the conversation
**Kicker:** Work with us
**H2:** Come in through the side that fits.
**Body:** Every engagement starts on a call. Tell us the shape of what you are trying to build, move, or make work — and we will come back with the side of GPSL that should handle it.
**CTA:** Start the conversation → `/contact`

### Home: sections cut
- Current "Ventures in motion" section (3 venture cards) → cut. Ventures move to Execution.
- Current "Technology spotlight" section (3 product cards in dark-card style) → cut. Products live on `/technology`.
- Current "Why GPSL" 3-column section (tribal sovereignty / long-horizon / in-house AI) → cut. Structural truths now live in-line in Execution + Technology, without "advantage" framing.
- Current "Three doors into GPSL" → cut. Replaced by Section 4.7 (single CTA to `/contact`).

---

## 5. Execution page

Seven sections. Mission-narrative on top, services demoted below.

### 5.1 Hero
**Kicker:** Division 01 — Execution
**H1:** The human layer of GPSL.
**Sub:** Execution is where intent becomes an operation that actually runs. Coordination, governance, timing, and the teams that carry the work — built around the discipline of human logistics.

### 5.2 What Execution is
**Kicker:** What Execution is
**Body (3 paragraphs):**

Execution is where opportunity becomes a business, coordination becomes delivery, and the gap between plan and operation actually closes. It is the human side of the company.

We are not a consultancy. We are operators. When we engage, it is because we plan to be standing next to you, inside the work, for years — hiring the operator, running the governance, making the calls that keep the operation holding its shape.

We operate under tribal jurisdiction with a federally recognized nation. It is a structure we operate with, not around, and it makes certain kinds of work possible that otherwise would not be.

### 5.3 Operating model (Discover → Align → Execute → Sustain)
Light re-tone of current four-phase section. Copy largely holds; strip any *"peers cannot access," "only sovereign operators can work,"* or *"advantage"* language inside the four phases.

### 5.4 What the operating model has built (ventures as proof)
**Kicker:** What the model has built
**H2:** Ventures the operating discipline produced.
**Intro:** These are businesses GPSL owns, operates, or is standing up. They are not case studies — they are the assets the operating model produced, each built because the work was needed.

- **Tribal Bank — Finance · In formation.** Federally chartered tribal bank focused on small business credit, self-determination capital, and reinvestment into tribal communities.
- **Tribal Trade — Trade & Logistics · Operating.** Cross-border commerce and logistics structured under tribal jurisdiction, moving goods on terms that are often not available to non-sovereign operators.
- **Fishing & Processing — Food & Processing · Operating.** Vertically integrated fishery and processing operation anchored in coastal tribal communities. Harvest through distribution, community ownership built into the structure.

### 5.5 Team (`#team` anchor)
**Kicker:** Team
**H2:** The people who carry the work.
**Body:** Execution is a team discipline. These are the operators, engineers, advisors, and counsel who run engagements, stand ventures up, and keep the work holding its shape after it ships.

Roster migrated from current `/team` — unified (Execution + Technology members both listed here). Role labels on each card (e.g., *Engineering, Operations, Counsel*). Sub-route `/team` deleted, redirected to `#team`.

### 5.6 How we engage (services demoted + re-toned)
**Kicker:** How we engage
**H2:** Four ways Execution works with you.
**Intro:** Every engagement is scoped on a conversation. The shape of the work, the horizon, and the governance all change what a durable partnership looks like. These are the four ways the work usually lands.

- **Origination** — Source opportunities in finance, trade, tribal economic development, and adjacent sectors. Turn them into something you can act on.
- **Structuring** — Work the structure until it holds — cap table, governance, jurisdiction, stakeholder alignment.
- **Stand-up & operate** — Hire the operator, set up the first 12–24 months of operations, stay inside the business until it runs without us.
- **Long-horizon holding** — Act as a long-horizon holder. Reinvest, rebuild governance as the asset matures, keep the operation close to the people it serves.

### 5.7 CTA band
**Kicker:** Work with Execution
**H2:** Tell us about the operation, the venture, or the mission.
**Body:** Every engagement starts on a call. We would rather talk through what you need than pitch you out of a brochure.
**Primary CTA:** Start the conversation → `/contact?topic=execution`

### Execution: sections cut / merged
- Current "Sectors we are active in" 6-card grid → cut. Sectors become one-line mentions inside Section 5.6's "Origination" body.

---

## 6. Technology page

Six sections. Mostly a re-tone + one new section ("How Technology supports the mission"). No dedicated team section — team unified under Execution.

### 6.1 Hero
**Kicker:** Division 02 — Technology
**H1:** The systems layer of GPSL.
**Sub:** Technology is the leverage side of the company. Software, automation, and agentic tools built so execution can scale without losing its discipline. We ship into our own ventures first, then into the operations of partners who need them.

### 6.2 How Technology supports the mission *(new section)*
**Kicker:** Why Technology exists inside GPSL
**H2:** Built to scale execution, not replace it.
**Body (4 paragraphs):**

**P1.** Most of what organizations call "AI transformation" is a tooling problem dressed up as a strategy problem. Software is bought, rolled out, and asked to replace operating discipline that does not yet exist. It never does.

**P2.** At the same time, AI is genuinely changing how work gets done. The discipline is separating the uses that hold up in production from the ones that collapse under real workload. Sometimes the answer is an agent platform running across a whole operation. More often it is a precise workflow automation that removes a recurring hour of manual coordination and pays for itself in a month. Both are legitimate technology work. We build for whichever one the problem actually needs — at the speed, cost, and reliability that make the deployment worth having.

**P3.** Technology inside GPSL is built the opposite way from most AI platforms — starting from the shape of the operation, not the shape of the model. Depending on what the work needs, we ship custom AI solutions, agents, multi-orchestrated systems, mobile applications, or augmented layers on top of the tools a team already uses. Each one is engineered as a real answer to a real operating problem — not a generic platform an operation has to bend itself around.

**P4.** This is why Technology and Execution sit under one company. The systems we ship are shaped by the operations they have to support — built with the operating team, for the way the work actually runs. The outcome usually has the same shape: clearer coordination, better timing, less handoff friction, more of the work visible to the people who need to see it.

### 6.3 What we ship (flagships + forward-deployed)
**Kicker:** What we ship
**H2:** Production software, shipped into real operations.
**Intro:** Four products and engagements built by the Technology division. Three of our own, one a representative pattern of how we work with clients. Each runs in production today.

- **LegacyCompass — CRM.** Tribally owned CRM built for operating groups. Deal flow, accounts, and agent-native workflows that understand how the work actually moves. Deployed inside GPSL ventures first.
- **Meridian AI — Financial intelligence.** Agentic analyst for investment and corporate development teams. Reads filings and market signal, writes the memo in the team's own voice. Designed to sit inside the analyst's workflow, not around it.
- **LuxusAI — Luxury commerce.** Multi-agent platform for high-touch sales, clienteling, and post-purchase relationships. Preserves the hand-sold feel luxury operations depend on while automating the repeatable work around it.
- **Forward-deployed engagements — Client work.** Custom systems shipped alongside a partner's internal team. We embed, ship, and take commercial ownership of the outcome with them.

### 6.4 How we build (stack + Claude Partner merged)
**Kicker:** How we build
**H2:** Claude-grade tools, shipped at operator speed.
**Body:**
Our stack is Next.js, Supabase, Claude, Claude Code, and Cursor, with fastai and the surrounding frameworks when deep-learning, NLP, or computer-vision work is needed. The point is not the stack — it is that every engineering decision is made to let a small team ship production work fast enough to be useful and reliable enough to run inside a real operation.

GPSL's Technology division is an official member of the **Claude Partner Network**. The partnership gives us direct access to Anthropic's models, Claude Code as a core development tool, and early access to new capabilities as they ship — which keeps us close to the work Anthropic is doing on agent reliability, tool use, and long-horizon reasoning.

### 6.5 How we work with clients
Light re-tone of current section. Three columns retained — Embedded engineers · Claude-grade agents · Own the outcome.

### 6.6 CTA band
**Kicker:** Engage the Technology division
**H2:** Tell us what you need built.
**Body:** The fastest way in is a conversation. Tell us the shape of the problem — agents, a CRM, a platform — and we will come back with who on our team is right for the work.
**Primary CTA:** Start the conversation → `/contact?topic=technology`
**Secondary CTA:** See what we've shipped → `#shipped`

### Technology: sections cut / merged
- Current "Philosophy" section (Cpu icon, "Technology applied with intent," generic ML boilerplate) → cut. Work now done by §6.2 with more substance and less jargon.
- Standalone "Stack" + standalone "Claude Partner Network" sections → merged into §6.4.

---

## 7. Contact page

Smallest scope. Hero + 3 topic tiles + mailto block.

### 7.1 Hero
**Kicker:** Contact
**H1:** Let's talk.
**Sub:** Tell us what brings you in. We will come back with the right person on our side of the table.

### 7.2 Topic selector
**Kicker:** What brings you in?
- **Execution** — Operators, operating work, ventures, and the mission side of GPSL.
- **Technology** — Product builds, AI engagements, and forward-deployed engineering.
- **General** — Partnerships, press, introductions, or anything that does not fit the other two.

### 7.3 Contact block
**Kicker:** Get in touch
**H2 (switches by selected topic):**
- `execution` → *Tell us about the operation, the venture, or the mission.*
- `technology` → *Tell us what you need built.*
- `general` → *Tell us what brings you in.*

Email and phone unchanged. Closer line unchanged: *"Or just reply to anything we have already sent you. We read everything."*

### 7.4 URL back-compat
- `?topic=partnerships` → auto-maps to `general` for any links already in circulation.

---

## 8. Implementation sequence (for the plan phase)

1. **Redirects first.** Update `next.config.mjs` with 308s for `/portfolio`, `/portfolio/tech`, `/team`. Ship before deleting routes to avoid 404 exposure.
2. **Content migrations.** Pull venture cards out of current `/portfolio` into Execution §5.4. Pull tech products out of current `/portfolio` into Technology §6.3. Pull current `/team` roster into Execution §5.5 as a unified list with role labels.
3. **Home rewrite.** Full replacement of `src/app/page.tsx`.
4. **Execution rewrite.** `src/app/execution/page.tsx` — new hero + Section 5.2 + §5.4 (ventures) + §5.5 (team) + light re-tone of operating model and services.
5. **Technology rewrite.** `src/app/technology/page.tsx` — re-tone hero, insert §6.2 as new section, migrate products, merge stack + Claude Partner into §6.4. Delete Philosophy section.
6. **Contact light re-tone.** `src/app/contact/page.tsx` — rename `partnerships` topic to `general` (with URL back-compat), update tile bodies and per-topic H2s.
7. **Delete dead routes.** Remove `src/app/portfolio/`, `src/app/team/` after redirects confirmed working on preview.
8. **Nav + Footer.** Update `src/components/Nav.tsx` + `Footer.tsx` to 4-item nav.
9. **Metadata.** Update `src/app/sitemap.ts` to drop `/portfolio` and `/team`. Update page-level `metadata.description` strings to match new positioning.
10. **Tests.** Existing Jest structural tests should still pass (they check content + structure, not copy). Any tests asserting specific removed strings need updating.
11. **Pre-push quality gate.** `npm test && npm run build` must pass.

---

## 9. Success criteria

- A reader landing on Home in the first 30 seconds understands:
 1. What GPSL is (an operating discipline).
 2. Why it exists (to close the pathway between intent and execution).
 3. What the origin story is (Tribal Economic Development).
 4. How the company is organized (Execution + Technology under one discipline).
- No surface on the site uses "advantage," "edge," "peers cannot," or "sovereignty as advantage" framing.
- No surface on the site reads as an AI-company pitch. The word "AI" earns every appearance.
- `/portfolio` and `/team` return 308s. Footer + Nav show 4 top-level items only.
- Existing tests pass. Build succeeds.

---

## 10. Open items for later (explicitly out of scope for this rebuild)

- Proof points / case study structure (brief flags as future work)
- Homepage hero **visual** direction (animation, imagery) — this rebuild is messaging-only
- Execution subpage for "engagements or operating support examples" (brief marks as optional future)
- Technology subpage for flagship products (brief marks as optional future)
