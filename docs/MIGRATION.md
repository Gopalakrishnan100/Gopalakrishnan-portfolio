# Portfolio Architecture & Customization Guide

An overview of the portfolio architecture, bento grid layout system, design tokens, theming, and content configuration.

---

## 1. Overview & Key Concepts

- **Bento Grid Architecture**: Asymmetric, responsive grid layout across sections (Home, About, Skills, Experience, Education).
- **Dark-First Theme**: Default appearance is the **Electric Midnight & Cyan Glow** palette, with a built-in light-mode toggle (**Ice Cyan**).
- **Data-Driven**: All text content, links, profile details, and images are configured cleanly through JSON files in `public/profile/`.
- **Modern Tech Stack**: React 18 + Vite, styled-components with CSS custom properties, and react-router-dom.

---

## 2. Design System & Theming

### Themes (`src/theme/themes.js`)
Configured around a high-contrast neutral ramp with electric multi-stop gradients and atmospheric glows:

- **Dark Theme ("Electric Midnight")**:
  - **Background**: Deep space obsidian (`#070b14`)
  - **Accent Gradient**: Electric cyan (`#06b6d4`) $\rightarrow$ vibrant blue (`#38bdf8`) $\rightarrow$ electric indigo (`#6366f1`)
  - **Surfaces**: Frosted glass slate (`rgba(14, 22, 38, 0.75)`)
  - **Ambient Glows**: Cyan and indigo radial background lighting
- **Light Theme ("Ice Cyan")**:
  - **Background**: Crisp high-contrast surface (`#f8fafc`)
  - **Text**: Deep slate navy (`#0f172a`)
  - **Accent**: Ocean blue (`#0284c7`) and royal indigo (`#4f46e5`)
- **Key Tokens**:
  - `accentColor3`: Multi-stop gradient partner (`#38bdf8` in dark, `#2563eb` in light).
  - `cardBorderHover`: Interactive glowing border state (`rgba(56, 189, 248, 0.48)`).
  - `glow1`, `glow2`: Radial lighting for backdrop and component elevation.

### Design Tokens (`src/theme/GlobalStyles.js`)
The theme publishes standard CSS custom properties used across all styles:
- **Colors**: `--bg`, `--text`, `--text-muted`, `--accent`, `--accent-2`, `--accent-3`, `--surface`, `--surface-2`, `--border`, `--border-hover`, `--glow-primary`, `--glow-secondary`.
- **Gradients**: `--gradient` (3-stop linear gradient), `--gradient-text`, `--gradient-subtle`.
- **Glassmorphism**: `--glass-blur: blur(16px);`, `--glass-backdrop: saturate(180%) blur(16px);`.
- **Elevation & Glows**: `--shadow-sm`, `--shadow-md`, `--shadow-cyan-glow`, `--shadow-indigo-glow`.
- **Spacing & Radius**: `--space-1` through `--space-8`, `--radius-sm` (10px), `--radius-md` (16px), `--radius-lg` (24px), `--radius-full` (9999px).
- **Typography Tokens**:
  - `--font-display`: `'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif` for modern display headings.
  - `--font-sans`: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` for body copy.
  - `--font-mono`: `'JetBrains Mono', 'Fira Code', monospace` for tags, chips, and code elements.
- **Atmospheric Lighting**: Three-point fixed radial background mesh with subtle ambient depth on `body`.
- **Scrollbars & Selection**: Cyan-tinted selection styling and custom scrollbar with hover states.

---

## 3. Layout: Bento Grid & Span Utilities

Sections use a 6-column bento grid (`.bento`) with flexible span utilities:
- `.span-2`: Spans 2 columns (1/3 width on desktop)
- `.span-3`: Spans 3 columns (1/2 width on desktop)
- `.span-4`: Spans 4 columns (2/3 width on desktop)
- `.span-6`: Spans 6 columns (full width)
- `.rspan-2`: Spans 2 rows

Responsive breakpoints automatically adapt grid layout to 2 columns on tablets ($\le 900\text{px}$) and 1 column on mobile ($\le 560\text{px}$).

---

## 4. Components & Styling Architecture

- **`src/App.css`**: Core primitives (`.tile`, `.tile--interactive`, `.tile--accent`, `.btn-pill`, `.btn-accent`, `.btn-ghost`), section headers (`.header`), and frosted glass `.navbar-custom` with `.navbar-toggler`.
- **`src/css/home.css`**: Hero section with pulsing cyan status pill (`.hero-eyebrow`), gradient hero name text, monogram card, and interactive social icons.
- **`src/css/about.css`**: Bio card, framed image tile with gradient lighting, and interactive "What I Do" service tiles with indicator bars.
- **`src/css/skills.css`**: Category tiles with indicator accents, skill item icons with lift and cyan drop-shadow glows.
- **`src/css/timeline.css`**: Shared custom vertical timeline for Experience and Education featuring a glowing gradient rail and pulsing node dots.

---

## 5. Content Configuration (`public/profile/`)

All site content is cleanly separated from code:

| File | Content & Purpose |
| ---- | ----------------- |
| `home.json` | Name, roles array (typewriter effect), and status indicator. |
| `about.json` | Bio markdown text, profile image path, and "What I Do" items. |
| `skills.json` | Skill categories and tech icon paths. |
| `experiences.json` | Work history, positions, dates, and achievements. |
| `education.json` | Education history, degrees, institutions, and logos. |
| `navbar.json` | Header navigation links and brand logo. |
| `social.json` | Social profile links and network types. |
| `routes.json` | Route path definitions and section components. |

---

## 6. How to Customize

1. **Update Content**: Edit the respective JSON files in `public/profile/` and place media assets in `public/images/`.
2. **Change Color Palette**: Adjust color values in `src/theme/themes.js` under `darkTheme` or `lightTheme`.
3. **Change Default Theme**: In `src/App.jsx`, toggle `useDarkMode(true)` (dark-first) or `useDarkMode(false)` (light-first).
4. **Modify Fonts**: Update the Google Fonts link in `index.html` and update font-family tokens in `src/theme/GlobalStyles.js`.
