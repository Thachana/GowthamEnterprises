# GOWTHAM ENTERPRISES — Static Website

**PLC, HMI, SCADA & NI LabVIEW Solutions**

A professional, modern static website for GOWTHAM ENTERPRISES, built with plain HTML, CSS and vanilla JavaScript. No frameworks, no backend, no dependencies.

---

## Live Website

**Live URL:** https://gowthamenterprises.pages.dev/

**GitHub Repository:** https://github.com/Thachana/GowthamEnterprises

---

## Project Structure

```
GowthamEnterprises/
├── index.html        # Main page — all sections
├── style.css         # Complete design system (light theme)
├── script.js         # Mobile menu, active nav, scroll reveal
├── README.md         # This file
└── assets/
    ├── images/       # Reserved for future images
    └── icons/        # Reserved for future icons
```

---

## Sections

| Section | Description |
|---|---|
| Header | Sticky navigation with mobile hamburger menu |
| Hero | Heading, subtitle, description, two CTA buttons, SVG illustration |
| Services | Two service cards — PLC/HMI/SCADA and NI LabVIEW |
| About | Company overview with SCADA panel illustration |
| Why Choose Us | Five feature cards including Pan-India Online Support |
| Our Projects | Three client project cards — Renault Nissan, Ashok Leyland, SAME DEUTZ-FAHR |
| Contact | Phone, email, registered address and work locations |
| Footer | Brand, navigation links, copyright |

---

## Contact Information

| Type | Detail |
|---|---|
| Phone | +91-9843812448 |
| Email | ge.automations@gmail.com |
| Registered Office | No.1/207/A, Thathanoor Pudur (Vill), Kurubarahalli (PO), Dharmapuri – 635302, Tamil Nadu, India |
| Work Locations | Chennai, Hosur, Bangalore |
| Online Support | All over India |

---

## Services Covered

1. **PLC, HMI & SCADA Programming** — Programming, configuration and integration of PLC, HMI and SCADA systems for industrial automation applications.
2. **NI LabVIEW Software Development** — Custom software development using NI LabVIEW for automation, measurement, monitoring, testing and data acquisition applications.

---

## Tech Stack

- **HTML5** — semantic markup, proper heading hierarchy (H1 → H2 → H3)
- **CSS3** — custom properties, CSS Grid, Flexbox, responsive breakpoints, smooth transitions
- **Vanilla JavaScript** — no libraries, no frameworks
- **Inline SVG** — all icons and illustrations are inline SVGs (no external image files)

---

## Design

- **Theme:** Light, clean professional look — white and light blue tones
- **Accent colour:** Sky blue (`#0ea5e9`)
- **Typography:** System font stack — no external font downloads
- **Shadows:** Subtle card shadows for depth
- **Animations:** Gentle float on hero illustration, scroll-reveal on cards

---

## Running Locally

### Option 1 — Open directly (simplest)
Double-click `index.html` in File Explorer. Opens in your default browser.

### Option 2 — Python local server (recommended for testing)
```bash
cd /path/to/GowthamEnterprises
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### Option 3 — VS Code Live Server
Install the **Live Server** extension in VS Code, right-click `index.html` → **Open with Live Server**.

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 900px` | Full desktop layout, two-column hero and about sections |
| `≤ 900px` | Single-column hero and about, centred text |
| `≤ 640px` | Hamburger menu appears, mobile nav overlay |
| `≤ 400px` | Single-column why-cards, stacked CTA buttons |

`prefers-reduced-motion` is respected — all animations are disabled for users who prefer it.

---

## SEO

- `<title>` tag set
- `<meta name="description">` set
- `<meta name="viewport">` set
- Open Graph title and description set
- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<address>`)
- Single `<h1>` on page, proper `H1 → H2 → H3` hierarchy
- `aria-label`, `aria-labelledby`, `aria-hidden`, `role` attributes throughout

---

## Hosting Details

| Item | Detail |
|---|---|
| Platform | Cloudflare Pages |
| Cost | Free (lifetime) |
| HTTPS | Yes — automatic via Cloudflare |
| CDN | Yes — Cloudflare's global CDN |
| Branch deployed | `main` |
| Deploy trigger | Any push to `main` branch |

---

## How to Update the Live Site

Any push to the `main` branch automatically triggers a redeploy. GitHub Pages rebuilds and goes live within **1–2 minutes**.

### Step-by-step

**1. Make your changes**
Edit `index.html`, `style.css`, or `script.js` in your local folder at:
```
/mnt/d/GowthamEnterprises/
```

**2. Open a terminal and navigate to the project**
```bash
cd /mnt/d/GowthamEnterprises
```

**3. Stage your changes**
```bash
git add .
```
Or stage a specific file only:
```bash
git add index.html
```

**4. Commit with a descriptive message**
```bash
git commit -m "Update contact details"
```

**5. Push to GitHub**
```bash
git push
```

**6. Wait 1–2 minutes, then check the live site**
```
https://gowthamenterprises.pages.dev/
```

### Monitor the deployment

To watch the build progress:
👉 https://dash.cloudflare.com/ → Pages → GowthamEnterprises → Deployments

A green tick means the site is updated and live.
A red cross means something went wrong — check the logs there.

### Common update examples

| What you want to change | File to edit |
|---|---|
| Phone / Email | `index.html` — find `contact-card` blocks in Contact section |
| Office address | `index.html` — find `contact-card__address` in Contact section |
| Work locations | `index.html` — find `contact-card__value` in the locations card |
| Colours / theme | `style.css` — change values in `:root { }` at the top |
| Company description | `index.html` — find `about__text` section |
| Page title / SEO | `index.html` — update `<title>` and `<meta>` tags at the top |
| Add a logo image | Replace SVG gear icon in header with `<img>`, place file in `assets/images/` |
| Copyright year | `index.html` — find `footer__copy` in the footer |

---

## Notes

- No copyrighted images used. All visuals are inline SVG.
- Company name displayed as **GOWTHAM ENTERPRISES** (all caps) throughout.
- Copyright year: **2024**.
- Contact section contains real contact details.

---

*Built: September 2026 — Deployed: September 2026*
