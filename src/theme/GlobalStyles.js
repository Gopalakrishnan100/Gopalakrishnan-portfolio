import { createGlobalStyle } from 'styled-components';

// Global styling & CSS custom properties for Electric Midnight & Cyan Glow theme.
// Supplies typography, layout scales, glassmorphism, atmospheric lighting, and interactive tokens.
const GlobalStyles = createGlobalStyle`
  :root {
    /* Colour (theme-driven) */
    --bg: ${({ theme }) => theme.background};
    --text: ${({ theme }) => theme.color};
    --text-muted: ${({ theme }) => theme.textMuted};
    --accent: ${({ theme }) => theme.accentColor};
    --accent-2: ${({ theme }) => theme.accentColor2};
    --accent-3: ${({ theme }) => theme.accentColor3 || theme.accentColor};
    --accent-soft: ${({ theme }) => theme.accentSoft};
    --surface: ${({ theme }) => theme.cardBackground};
    --surface-2: ${({ theme }) => theme.cardFooterBackground};
    --border: ${({ theme }) => theme.cardBorderColor};
    --border-hover: ${({ theme }) => theme.cardBorderHover};
    --navbar-bg: ${({ theme }) => theme.navbarBackground};
    --timeline-line: ${({ theme }) => theme.timelineLineColor};
    --gradient: linear-gradient(135deg, var(--accent) 0%, var(--accent-3) 50%, var(--accent-2) 100%);
    --gradient-subtle: linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(99, 102, 241, 0.08) 100%);
    --gradient-text: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
    --glow-primary: ${({ theme }) => theme.glow1};
    --glow-secondary: ${({ theme }) => theme.glow2};

    /* Elevation & Glows */
    --shadow-sm: ${({ theme }) => theme.shadowSm};
    --shadow-md: ${({ theme }) => theme.shadowMd};
    --shadow-cyan-glow: 0 0 25px -4px rgba(6, 182, 212, 0.35);
    --shadow-indigo-glow: 0 0 25px -4px rgba(99, 102, 241, 0.35);

    /* Glassmorphism */
    --glass-blur: blur(16px);
    --glass-backdrop: saturate(180%) blur(16px);

    /* Spacing scale (4px base) */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.5rem;
    --space-6: 2rem;
    --space-7: 3rem;
    --space-8: 4rem;

    /* Radius */
    --radius-sm: 10px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-full: 9999px;

    /* Motion */
    --ease: cubic-bezier(0.16, 1, 0.3, 1);
    --dur: 0.28s;

    /* Modern Tech Typography */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-display: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', Menlo, Monaco, Consolas, monospace;
  }

  html {
    scrollbar-color: var(--border-hover) transparent;
    scroll-behavior: smooth;
  }

  body {
    --bs-body-bg: ${({ theme }) => theme.background};
    --bs-body-color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.background};
    background-image:
      radial-gradient(60rem 50rem at 90% -10%, var(--glow-primary), transparent 65%),
      radial-gradient(50rem 45rem at -10% 25%, var(--glow-secondary), transparent 60%),
      radial-gradient(45rem 40rem at 75% 85%, var(--glow-primary), transparent 55%);
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.color};
    font-family: var(--font-sans);
    letter-spacing: -0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.35s var(--ease), color 0.35s var(--ease);
    overflow-x: hidden;
  }

  a {
    color: var(--accent);
    text-decoration: none;
    transition: color var(--dur) var(--ease);
  }

  a:hover {
    color: var(--accent-3);
  }

  ::selection {
    background: rgba(6, 182, 212, 0.35);
    color: #ffffff;
  }

  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 999px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent);
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 6px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
