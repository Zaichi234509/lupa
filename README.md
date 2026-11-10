# Lupa — Champion of the Great Agon

An immersive 3D parallax fan experience for Lupa, the undefeated she-wolf gladiator of Wuthering Waves. Rebuilt as an editorial "rose & gold" tribute with a layered depth world, scroll-driven 3D staging, and pointer-parallax artwork.

## 🌐 Live Demo
[View Live Site](https://zaichi234509.github.io/lupa/)

## ✨ Features
- **Editorial layout** — elegant Cormorant Garamond display type, generous whitespace, hairline gold rules and a refined rose/gold palette that gives the page a distinctly feminine, couture feel
- **Layered 3D world** — aurora veils, twinkling starfield, horizon glow, a perspective arena floor, arena silhouettes, floating filigree and near-field orbs, each on its own `data-depth` plane that drifts with your pointer
- **3D hero stage** — separated depth layers: aura, spinning disc, three orbiting rings, glowing halo and the character render, which floats, tilts toward the cursor and pushes forward as you scroll
- **Scroll parallax typography** — giant outlined display words (Ignis / Wolf / Lupa / Roar) travel at different rates than the page
- **Hero depth hand-off** — copy, figure and rings separate and fade at different rates while the hero scrolls away
- **Depth-based particle field** — ember petals with parallax, twinkle and glow halos on a DPR-aware canvas
- **Smooth 3D tilt cards** — rAF-interpolated tilt with a cursor-tracked glare on ability, gallery and portrait cards
- **Magnetic buttons**, animated counters, active-section nav highlighting, scroll progress bar and a soft cursor glow
- **Staggered reveals** with 3D flip-in, clip and scale variants
- **Fully responsive** — graceful mobile layout with a working slide-down menu
- **Reduced-motion support** — every effect degrades to a calm, static presentation
- **Local artwork** — optimized WebP renders and gallery crops served from `assets/`

## 🎨 Tech Stack
- HTML5
- Tailwind CSS (via PostCSS) + a hand-written design system in `src/input.css`
- CSS 3D transforms & keyframe animation
- Vanilla JavaScript (single rAF loop for parallax, tilt and depth)
- Phosphor Icons, Cormorant Garamond & Inter

## 🚀 Local Development
```bash
npm install
npm run build        # compile Tailwind + custom CSS → styles.css
npm run watch        # rebuild on change
python3 -m http.server 8000   # or any static server
```

## 📁 Project Structure
```
index.html        # markup, all sections
src/input.css     # source styles (built into styles.css)
styles.css        # compiled stylesheet — do not edit by hand
assets/           # optimized artwork (WebP)
```

## 📦 Deployment
This site is hosted on GitHub Pages. To deploy your own version:
1. Fork this repository
2. Enable GitHub Pages in Settings → Pages
3. Select branch: `main` and folder: `/ (root)`

## 📄 License
Fan-made project. Wuthering Waves and all characters belong to Kuro Games.
