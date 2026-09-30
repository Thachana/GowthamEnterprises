# Gowtham Enterprises — Static Website

**PLC, HMI, SCADA & NI LabVIEW Solutions**

A simple, professional, modern static website for Gowtham Enterprises, built with plain HTML, CSS and vanilla JavaScript. No frameworks, no backend, no dependencies.

---

## Project Structure

```
GowthamEnterprises/
├── index.html        # Main page — all sections
├── style.css         # Complete design system
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
| Why Choose Us | Five feature cards |
| Contact | Placeholder — ready for contact details |
| Footer | Brand, navigation links, copyright |

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
- All SVG decorative elements marked `aria-hidden="true"`

---

## Customisation Guide

### 1. Add contact details
In `index.html`, find the `<!-- TO CUSTOMISE LATER -->` comment inside the Contact section. Replace the placeholder paragraph with:

```html
<address class="contact__details">
  <p><strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
  <p><strong>Phone:</strong> <a href="tel:+910000000000">+91 00000 00000</a></p>
  <p><strong>Address:</strong> Your Address, City, State, Country</p>
</address>
```

### 2. Change the colour scheme
All colours are CSS custom properties at the top of `style.css`:

```css
:root {
  --clr-primary:   #0ea5e9;   /* Main accent — change this one to retheme the whole site */
  --clr-accent:    #22c55e;   /* Green highlights */
  --clr-bg:        #020c1b;   /* Page background */
}
```

### 3. Update company description
Edit the text inside the `<div class="about__text">` block in `index.html`.

### 4. Add a logo image
Replace the inline SVG gear icon in the header with:

```html
<img src="assets/images/logo.png" alt="Gowtham Enterprises" width="140" height="40" />
```

Place your logo file in `assets/images/`.

### 5. Update SEO meta tags
At the top of `index.html`, update:

```html
<title>Your Page Title</title>
<meta name="description" content="Your description here." />
<meta property="og:title" content="Your OG Title" />
<meta property="og:description" content="Your OG description." />
```

### 6. Add more service cards
Copy an existing `.service-card` `<article>` block in `index.html` and update the title, description, tags and SVG icon.

### 7. Update the copyright year
In the footer of `index.html`:

```html
<p class="footer__copy">&copy; 2026 Gowtham Enterprises. All rights reserved.</p>
```

---

## Notes

- No copyrighted images used. All visuals are inline SVG drawn from scratch.
- No fake company information (no invented employees, clients, certifications, years of experience, or locations).
- Contact section intentionally left as a placeholder until real details are available.
- The `assets/images/` and `assets/icons/` folders are empty and reserved for future use.

---

*Built: September 2026*
