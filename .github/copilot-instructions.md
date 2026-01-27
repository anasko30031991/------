# AI Agent Instructions for Web Studio Project

## Project Overview
This is a static **web studio portfolio site** (WebStudio) – a multi-page HTML/CSS project showcasing design services, team, portfolio, and client testimonials. No frameworks or build tools are used.

## Architecture & Structure

### Core Files
- **[index.html](index.html)**: Landing page with hero section, features (Strategy, Punctuality, Diligence, Technologies), services showcase, team bios, and customer logos
- **[portfolio.html](portfolio.html)**: Portfolio grid displaying 9 projects (apps, websites, designs) with category filters (All, Web Site, App, Design, Marketing)
- **[CSS/style.css](CSS/style.css)**: Single stylesheet with @font-face declarations for Roboto font (weights: 300, 400, 600, 900)
- **Asset Folders**:
  - `fonts/`: Roboto WOFF2 font files (referenced via `@font-face`)
  - `images/`: Project images, logos (Logo.svg, Logo1.svg), team photos, client logos, and service category images

### Shared Components
Both HTML pages share:
- **Header**: Navigation (Home, Portfolio, Contacts) + contact links (email, phone)
- **Footer**: Logo, company description, social media links (Instagram, Facebook), email subscription form

## Key Conventions

### HTML Patterns
- **Semantic Structure**: Uses `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<address>` elements
- **Nested Divs for Layout**: Triple-nested `<div>` containers for spacing/padding (common pattern)
- **Link References**: All internal links use relative paths (`./index.html`, `./portfolio.html`)
- **Image Attributes**: Include `width` and `height` for team photos and service images; use descriptive `alt` text

### CSS Structure
- **Font Loading**: WOFF2 format with `font-display: swap` for performance (fallback strategy)
- **Roboto Font Weights**: 300 (light), 400 (regular), 600 (semibold), 900 (black) — available for use throughout
- **Single Stylesheet**: All styling consolidated in `CSS/style.css`

## Important Gotchas & Inconsistencies

### Known Issues
- **Incomplete Contact Page**: Navigation links to `./contacts.html` but file doesn't exist yet
- **Merge Conflicts**: Recent rebase conflicts in `index.html` and `portfolio.html` (visible in git history) – resolve by keeping local changes
- **Image Naming**: Inconsistent `.img.jpg` vs `.jpg` extensions (e.g., `BankingAppInterfaceConcept.img.jpg` vs `CashlessPayment.jpg`)
- **Hardcoded Contact Info**: Email/phone appear in header of both pages — update both locations when changed

### Path Sensitivity
- Image paths are relative (`./images/`) — maintain this convention
- Font paths use `../fonts/` relative to CSS folder — preserve directory structure

## Development Workflows

### Git Management
- **Repository**: Connected to GitHub (`https://github.com/anasko30031991/------.git`)
- **Current Status**: Working on main branch after resolving rebase conflicts
- **Commits**: Use descriptive messages (e.g., `"update styles"`, `"Initial commit"`)

### Local Testing
- Open `index.html` directly in browser or use VS Code Live Server
- Portfolio filtering buttons don't have JS functionality yet (static HTML)

## Common Tasks

### Adding New Portfolio Items
1. Add `<li>` to portfolio grid in `portfolio.html` main section
2. Use pattern: `<a>` > `<img>` + `<h2>` (title) + `<p>` (category)
3. Add corresponding image to `images/` folder
4. Ensure category `<p>` text matches filter buttons

### Modifying Header/Footer
- Edit both `index.html` and `portfolio.html` header/footer sections together
- Update contact info in all 4 locations (2 pages × 2 sections)

### Adding Styling
- All CSS goes in `CSS/style.css`
- Can reference Roboto font weights: 300, 400, 600, 900
- Use relative paths for assets

## Next Steps for Completion
- [ ] Create missing `contacts.html` page
- [ ] Implement JavaScript for portfolio filter buttons
- [ ] Add responsive design (media queries)
- [ ] Resolve CSS styling gaps (layout, colors, spacing)
