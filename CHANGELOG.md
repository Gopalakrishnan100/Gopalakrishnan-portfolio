# Changelog

All notable changes to this project are documented in this file.

## Initial Release

For portfolio architecture, design tokens, and layout reference, see `docs/MIGRATION.md`.

### Added
- Modern **bento** layout across every section (Home, About, Skills, Experience, Education).
- **Electric Midnight & Cyan Glow** theme system with multi-stop electric gradients
  (cyan → blue → indigo), frosted glass surfaces, and atmospheric lighting.
- Design-token system — colour, spacing, radius, shadow, motion, glassmorphism, and font tokens
  published as CSS custom properties from `src/theme/GlobalStyles.js`.
- Refined tech typography: Plus Jakarta Sans (display), Inter (UI), and JetBrains Mono (accents).
- Configurable hero status label via `home.json` `status` with an animated pulsing cyan indicator.
- Interactive micro-animations: shimmer button hover effects, glowing tile border transitions, and icon drop-shadows.
- Shared elegant timeline for Experience and Education with a glowing gradient rail.
- Theme-adaptive translucent (glass) navbar with glowing active route indicators and polished mobile toggle.
- Data-driven content via JSON files in `public/profile/` (home, about, skills, education, experiences, social, navbar, routes).
