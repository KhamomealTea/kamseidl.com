# Crucible Design System

> **Crucible Tech** — "Unlock your full potential with advanced simulations and expert learning modules, powered by AI and informed by NFL veterans, including Ryan Fitzpatrick. Sharpen your mental acuity, improve your reads, and outsmart the competition at every turn."

Crucible builds a quarterback-development platform: AI-driven film/decision simulations plus learning modules, with a web analytics portal where **coaches ("Player Managers")** and **athletes** track performance. This design system captures the visual language of that portal — a dark, blue-accented "command center" — and packages its tokens, fonts, components, and a product UI kit for reuse.

This is a **single-product** system today: the **Crucible Stats** coach/player web portal.

---

## Sources

Everything here is derived from the attached codebase (read-only; reader may not have access, recorded for provenance):

- **`GitlabRepo/crucible-stats/`** — the React (CRA + TypeScript + MUI + Tailwind) source for the Crucible Stats portal.
  - Brand truth: `src/utils/theme.ts` (MUI theme — the canonical color/component spec), `tailwind.config.js` (color + font aliases), `src/index.css` (font-face, gradient-border utilities, background).
  - Type system: `src/components/QBTypography/index.tsx` (size/weight/family scale).
  - Components mirrored here: `QBTabsToggle`, `QBCheckbox`, `QBAvatar`, `QBSpecialButton`, `QBSelect`, `QBInfoChip`, `LoginPage`, `PageContainer`, `PlayerSummaryCard`, `AiChatPanel`.
  - Fonts: `src/fonts/` (Sohne, Avantt, Khand, Jost). Assets/logos/icons: `public/` and `public/icons/`.

Container registry / API hosts referenced in the repo (`nfl-gitlab.visiononlinegames.com`, an `omahaApi` GraphQL backend) are noted for context only — not used by this system.

---

## CONTENT FUNDAMENTALS

**Voice — coach to player, direct and competitive.** Marketing copy speaks in the second person and the imperative: *"Sharpen your mental acuity, improve your reads, and outsmart the competition."* It's motivational without being loud — the tone of a position coach in the film room, not a hype reel.

**Product copy — plain, functional, sentence case.** In-app labels are short and literal: "Group Summary", "Main Stats", "Game Plans", "Reports History", "Build Crucible into Your Organization". Helper text is calm and instructive: *"Enter the verification code sent to your email and set a new password."* Empty/error states are reassuring, not cute: *"Sorry, I had trouble processing that. Please try again."*

**Casing.** Body and UI labels are **sentence case** or Title Case for nav. The **only** place ALL-CAPS appears is display headings rendered in Avantt — page titles like `LOG IN`, `RESET PASSWORD` are uppercased in code. Don't shout in body copy.

**Person.** Marketing = "you / your". Product = role-relative nouns ("Player Manager", "Athlete", "Following", "Seat"). The AI assistant speaks first person as "Crucible Assistant": *"Hi! I'm your Crucible assistant. Ask me anything about the platform…"*

**Numbers are the hero.** This is an analytics product — stats, scores, deltas, and reps are foregrounded (often set in condensed Khand). Copy supports the numbers; it doesn't crowd them.

**No emoji.** The product UI uses none. Iconography carries meaning instead (see ICONOGRAPHY). Avoid emoji entirely.

**Vibe:** elite, focused, data-driven, a little nocturnal. Think pro film-study app, not consumer fitness gamification.

---

## VISUAL FOUNDATIONS

**The dark stage.** Every surface sits on near-black **#0D0D0D** carrying a single low-opacity ember-glow (`assets/bg.svg`) bleeding from the upper-right — `background-size: cover`, **fixed** attachment so it doesn't scroll. There is exactly one such glow; no repeating patterns, no decorative gradients-as-wallpaper, no noise textures.

**Color.** One accent does all the work: **blue #0A8AFE** (with siblings #0ABAFE bright, #25ADF5 focus/hover-glow, #0979D4 pressed). Everything else is a near-black neutral ramp (#0D0D0D → #121212 → #141414 card → #1B1B1B raised → #262729 border) plus deep logo navies (#082735, #0C4B70, #0C4981, #1A283A). Red **#FE4A55 / #D52F39** is the only other hue, reserved for danger. No purples, no multi-color gradients. Imagery (when present) is cool and dark to match.

**Type.** Three families: **Sohne** (Buch 400 / Kraftig 500) for all UI and body — clean neutral grotesque; **Avantt** for hero/display titles, used **uppercase**, often **bold italic**; **Khand** (condensed) for big numerals and stat headers. Scale runs 14 → 48 (`--text-xs`…`--text-display`). Line-height 150% body, 120% display.

**Spacing & layout.** 4px base rhythm (4/8/12/16/24/32/48/64). Pages use a fixed 72px top nav (logo left, org toggle + AI bubble + account right) over a 32×48 padded content area. Cards breathe at 24–32px padding. Dense tables use 14px text.

**Corners.** 6px buttons/inputs/selects · 8px cards & lists · 10px segmented toggles · 12px dialogs · 2px checkboxes · 30px pills/chips · 50% avatars & icon buttons.

**Borders over shadows.** Surfaces are defined primarily by **1px hairline borders** (#262729, or rgba(255,255,255,.08–.15)) rather than elevation. Shadows are soft and low (0 2 4 → 0 6 12); the only big shadow is on floating panels/dialogs (0 8 32 rgba(0,0,0,.5)). CTAs get a **blue glow** (0 4 12 rgba(37,173,245,.3)).

**The signature gradient edge.** The defining brand detail: a **1px blue-to-grey gradient border** (`--grad-border-blue`) masked onto cards, inputs, and primary buttons (`.cr-border-gradient`, `Button glow`, `Card` default). A red variant marks errors. The top-nav "special button" is a gradient-edged capsule with a navy `#0E4475 → #12171C` fill.

**Motion.** Restrained. `all 0.2s ease` transitions on hover/focus; login card does a gentle slide-up/fade-in (translateY 30–50px, ~0.6s). No bounces, no parallax, no infinite loops. Hover = lighter background (white 04→08) or darker accent; press = darker accent / subtle scale. Focus = #25ADF5 border.

**Transparency & blur.** Used sparingly — selects apply a light `backdrop-filter: blur(10px)` on their menu; overlays use translucent white tints (rgba(255,255,255,.02–.15)) for hairlines and hover fills rather than new solid colors.

**Cards** = #0D0D0D (or #141414) fill, 8px radius, either a hairline #262729 border or the blue gradient edge; minimal/no shadow.

---

## ICONOGRAPHY

- **Style:** Google **Material Symbols**-style line/duotone icons, exported as individual **SVGs** and shipped in `assets/icons/` (≈33 icons copied from the product's `public/icons/`). They render **white** on the dark stage (tint via `filter: brightness(0) invert(1)` if a source SVG carries its own color), typically at **16–20px** inside a 40px tap target with an optional subtle tile (`rgba(255,255,255,0.04)`, 6px radius).
- **The brand glyph is the football** (`sports_football.svg`) — it appears on the "Build Crucible" CTA and as the loader. Use it as Crucible's iconographic signature.
- **Domain icons:** `group`/`users` (teams), `assignment` (game plans/reports), `games`, `snaps`, `star`, `filter_alt`, `calendar_today`, plus utility `search`, `settings`, `edit`, `print`, `mail`, `call`, `info`, `more-vertical`, `chevron-down`. SSO marks (`google_sso`, `apple_sso`, `microsoft_sso`) are full-color and used as-is.
- **No emoji. No unicode-as-icon** beyond tiny delta arrows (▴ ▾) in stat chips. Don't hand-draw new icons — reuse these SVGs or pull the matching Material Symbol.

---

## VISUAL FOUNDATIONS — token reference

| Concern | Where | Notes |
|---|---|---|
| Colors | `tokens/colors.css` | Brand blue, navies, ink ramp, text, semantic, alpha tints, brand gradients |
| Type | `tokens/typography.css` | Families, 14→48 scale, weights, leading, tracking |
| Spacing/radii/shadow/motion | `tokens/spacing.css` | 4px scale, radii, elevation, easing, layout vars |
| Fonts | `tokens/fonts.css` | Sohne, Avantt, Khand `@font-face` |
| Base/reset | `tokens/base.css` | Dark body + bg.svg, scrollbars, `.cr-border-gradient` utility |

`styles.css` (root) is import-only and reaches all of the above — **consumers link just this file.**

---

## Index / manifest

**Root**
- `styles.css` — global entry (import-only). Link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`
- `assets/` — `bg.svg`, `Avatar.png`, `fonts/`, `logos/` (Crucible wordmarks, white/black), `icons/` (≈33 SVGs)
- `readme.md` (this) · `SKILL.md` (Claude Code skill manifest)

**Components** (`window.CrucibleDesignSystem_d53f36.*`)
- `components/forms/` — **Button** (primary/secondary/outline/ghost/text/danger · glow · pill), **Input**, **Select**, **Checkbox**, **SegmentedToggle**
- `components/display/` — **Card** (gradient/plain/raised), **Badge**, **Avatar**, **StatTile** (signature Khand metric)

**Foundation cards** (`guidelines/*.card.html`) — Type (4), Colors (5), Spacing (3), Brand (3); rendered in the Design System tab.

**UI kit** (`ui_kits/crucible-stats/`) — interactive recreation of the portal: Login → Dashboard (Group Summary / stats) → Player page. `index.html` is the click-through entry.

---

## Caveats

- **Fonts are licensed.** Crucible holds licenses for **Sohne** (Klim Type Foundry) and **Avantt** (Displaay); **Khand** is open-source (OFL). The weights bundled here are the ones present in the product repo — Sohne Buch (400) + Kraftig (500), Avantt SemiBold (600) + Bold Italic (700). To add more weights (e.g. Sohne Halbfett, Avantt Regular), drop the licensed files into `assets/fonts/` and add matching `@font-face` rules in `tokens/fonts.css`. `local()` is declared first so a system-installed copy wins.
- This system reflects **one product** (Crucible Stats web portal). No mobile-app or marketing-site source was provided; if those exist, attach them to extend the kit.
