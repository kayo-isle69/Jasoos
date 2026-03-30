# 🕵️ JASOOS · جاسوس

> **The spy party game that fits in your pocket.**
> Pass one phone around the table. No app store. No account. No waiting.

*A komino.dev studio project — © 2025 komino.dev studio. All rights reserved.*

---

[![Landing Page](https://img.shields.io/badge/🌐_Landing_Page-kayo--isle.github.io%2Fjasoos-c8a84b?style=for-the-badge&labelColor=0d1117)](https://kayo-isle69.github.io/Jasoos)
[![Play Now](https://img.shields.io/badge/🎮_Play_Now-Open_App-4caf7d?style=for-the-badge&labelColor=0d1117)](https://kayo-isle69.github.io/jasoos/jasoos.html)

---

## What is Jasoos?

Jasoos (جاسوس — Arabic for *spy*) is a social deduction party game for 3 to 10 players. One phone, passed hand to hand. Each player secretly peeks at their role — **spy** or **player** — by dragging a card up with their thumb and releasing it to cover back. No one else sees a thing.

Players know the secret word. Spies don't. Everyone bluffs. Everyone accuses. Then the vote happens.

It's tense. It's funny. It takes about 10 minutes and you'll immediately want to play again.

---

## How it Works

The game moves through four phases:

**1 — Role Reveal**
Each player takes the phone in turn and drags their card upward to peek their role. The card snaps back before they pass it on. No screens left open, no roles accidentally seen.

**2 — Question Rounds**
Players ask each other questions about the secret word in rotating pairs. Players must sound convincing. Spies must sound like they know what they're talking about — while knowing nothing.

**3 — Vote**
Everyone casts a vote on who they think the spy is. The player with the most votes is eliminated.

**4 — Last Chance**
If a spy is caught, they get one final shot: guess the secret word from a list of similar decoys. Guess right — the spies still win.

---

## What It Looks Like

Jasoos has a deliberate aesthetic — dark, moody, and a little cinematic. Think a spy thriller crossed with a late-night card table.

- **Dark/light mode** switchable from the main menu
- **Arabic & English** — full RTL support, switchable mid-session
- Cards with a drag-to-peek mechanic, snap animations, and a satisfying physical feel
- Gold accents on a deep near-black background (or warm parchment in light mode)
- Noise texture overlay, radial glows, `Bebas Neue` for display text, `Amiri` for Arabic, `DM Sans` for body copy

The landing page mirrors the game's visual identity — hero, features grid, how-to steps, category showcase, and a bottom CTA, all with the same dark/light + Arabic/English toggles.

---

## File Structure

```
jasoos/
├── index.html          # PWA landing page
├── jasoos-1.html       # The game itself (single-file)
├── manifest.json       # PWA manifest (icons, name, theme)
├── sw.js               # Service worker for offline caching
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

The game is intentionally a **single HTML file**. No build step, no bundler, no dependencies. Open it in a browser and it works. Install it as a PWA and it works offline. That's the whole point.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Structure | Vanilla HTML | Zero dependencies, instant load |
| Styling | CSS custom properties | Theming without a framework |
| Logic | Vanilla JavaScript | No overhead, runs everywhere |
| Typography | Bebas Neue · Amiri · DM Sans | Via Google Fonts |
| Offline | Service Worker + Web App Manifest | Full PWA — installable, cacheable |
| Hosting | GitHub Pages | Free, fast, no backend needed |

No React. No Vue. No npm. No build pipeline. Just files.

---

## What's Coming — The Komino Arcade

Jasoos is the first game in what we're building toward: a small collection of social games, all living under one roof.

The idea is simple. Party games are at their best when there's no friction — no downloading separate apps, no creating accounts, no hunting for the right version. One link, passed around a table, and you're playing.

So Jasoos becomes the blueprint. After this, the plan is to build out a few more games in the same spirit — different mechanics, same philosophy. Local. Offline-capable. Bilingual. One phone, many players.

Think of it like a little arcade that fits in your pocket. Jasoos is game one. More are coming.

---

## Author

**komino.dev studio**
Indie dev studio building free, open tools — games, apps, and utilities — for everyone.

- 🌐 [komino.dev](https://komino.dev)
- 📸 Instagram: [@komino.dev](https://instagram.com/komino.dev)
- 🐙 GitHub: [kayo-isle69](https://github.com/kayo-isle69)
- 🌿 Linktree: [kayo_world](https://linktr.ee/kayo_world)

---

*© 2025 komino.dev studio — MIT License. Free to use, share, and build on.*
