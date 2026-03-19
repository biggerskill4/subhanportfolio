# Subhan Ahmed | Portfolio Website

A modern, animated personal portfolio for **Subhan Ahmed**, Web & WordPress Developer based in Pakistan. Built with vanilla HTML, CSS, and JavaScript — no frameworks, clean code only.

---

## 🚀 Live Preview

Open `index.html` directly in your browser — no build step required.

---

## 📁 Project Structure

```
## 🧩 Sections

| Section     | ID           | Description                                              |
|-------------|--------------|----------------------------------------------------------|
| Preloader   | `#preloader` | Cinematic loader with word cycling and progress bar      |
| Hero        | `#home`      | Full-screen name reveal with rotating globe              |
| About       | `#about`     | Bio, tech stack tags, CTA                                |
| Counter     | —            | Animated stats — years, projects, clients, technologies  |
| Marquee     | —            | Auto-scrolling skills ticker                             |
| Projects    | `#projects`  | Hover-reveal project cards with image slide-in           |
| Services    | `#services`  | 5 service cards + CTA card in a 3-column grid            |
| Contact     | `#contact`   | Contact form + info cards + availability badge           |
| Footer      | `#footer`    | Nav links, socials, watermark, back to top               |

---

## ⚙️ Tech Stack

| Technology        | Purpose                              |
|-------------------|--------------------------------------|
| HTML5             | Semantic structure                   |
| CSS3              | Custom properties, Grid, Flexbox     |
| JavaScript (ES6+) | Vanilla JS — no frameworks           |
| GSAP 3.13         | All animations and transitions       |
| ScrollTrigger     | Scroll-based animation triggers      |
| ScrollSmoother    | Buttery smooth page scroll           |
| Ionicons 7        | Icon library                         |
| SplitType         | Text splitting for reveal animations |

---

## 📦 External Dependencies (CDN — no install needed)

```html
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>

<!-- GSAP Plugins -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollSmoother.min.js"></script>

<!-- Text splitting -->
<script src="https://unpkg.com/split-type"></script>

<!-- Icons -->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
```

> ⚠️ **ScrollSmoother** requires a GSAP Club license for commercial use. For personal/portfolio use it is free.

---

## 🎨 CSS Variables (style.css)

```css
--primary-color: #00a9f2      /* Brand blue */
--secondary-color: #131313    /* Card backgrounds */
--bg: #0B0B0B                 /* Page background */
--text-color: #ffffff
--heading-font: 'Grand Slang', sans-serif
--body-font: 'Funnel Display', sans-serif
--max-width: 1600px
--padding-large: 80px 15px
--padding-small: 30px 15px
```

---

## ✨ Key Animations

### Preloader
- Vertical grid lines drop down
- Large word pairs cycle: `DESIGN/DEVELOP` → `CRAFT/CREATE` → `BUILD/LAUNCH` → `SUBHAN/AHMED`
- Progress bar fills 0–100 with glowing trail
- Blue curtain wipe reveals the hero

### Hero
- Letters drop in from above with color transition (blue → white)
- Globe scales in from center
- Header, side content, and rotate button animate in sequentially

### Scroll Animations
- All section headings fade + slide up on enter
- Project cards stagger in from below
- Service cards stagger in grid
- Contact detail items slide up one by one
- Footer watermark fades in

### Magnetic Effect
- `.side-btn` and `.footer-socials a` — strong pull toward cursor
- `.cta` buttons — soft nudge
- Elastic snap-back on mouse leave

### Smooth Anchor Scroll
- All `href="#id"` links use `ScrollSmoother` — no native browser jumps
- Duration: 1.2s, ease: `power3.inOut`

---

## 📱 Responsive Breakpoints

| Breakpoint | Target           |
|------------|------------------|
| 1600px     | Large desktops   |
| 1400px     | Laptops          |
| 1200px     | Small desktops   |
| 992px      | Tablets          |
| 768px      | Mobile landscape |
| 500px      | Mobile portrait  |

---

## 🛠️ How to Run

1. Download or clone the project
2. Open `index.html` in any modern browser
3. No build tools, no npm, no installs required

> For best experience use **Chrome** or **Firefox**. Safari may have minor rendering differences with `mix-blend-mode` and custom cursors.

---

## 📬 Contact

| Channel  | Details                        |
|----------|--------------------------------|
| Email    | subhanahmede860@gmail.com      |
| GitHub   | github.com/subhanahmed          |
| LinkedIn | linkedin.com/in/subhanahmed    |

---

## 📄 License

This project is for personal portfolio use. All design, code, and content belongs to **Subhan Ahmed**.  
Do not reuse or redistribute without permission.
