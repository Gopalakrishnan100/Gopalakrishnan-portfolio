# Gopalakrishnan Portfolio [![GitHub](https://img.shields.io/github/license/mayankagarwal09/dev-portfolio?color=blue)](https://github.com/Gopalakrishnan100/Gopalakrishnan-portfolio/blob/master/LICENSE.md)

## A personal developer portfolio built with React + Vite

## Features

⚡️ Modern **bento** UI — dark-first, with a light-theme toggle\
⚡️ Built with React 18 + Vite\
⚡️ Design-token theming (restyle the whole site from one place)\
⚡️ Reveal animations & fully responsive\
⚡️ Data-driven and easily customizable via JSON

## Demo

**[Live Portfolio](https://dev-portfolio-mayankagarwal09.vercel.app)**

---

## Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js **18+**](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

> This project is built with [Vite](https://vitejs.dev/) and React 18.

## Setup 🔧

```bash
# Clone the repository
$ git clone https://github.com/Gopalakrishnan100/Gopalakrishnan-portfolio

# Move into the repository
$ cd Gopalakrishnan-portfolio

# Remove the current origin repository
$ git remote remove origin
```

Install dependencies and start the dev server:

```bash
# Install dependencies
$ npm install

# Start the development server
$ npm run dev
```

Once the server starts, open `http://localhost:3000/` to see the portfolio locally.

---

## Deployment 📦

Create a production build:

```bash
$ npm run build
```

Deploy the `dist/` folder to any static host. Recommended: [Vercel](https://vercel.app).

### Single-page-app routing

This app uses client-side routing (`BrowserRouter`). Your host must serve `index.html` for every path to avoid 404s on direct URL access.

- **Vercel** — add a `vercel.json` in the project root:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

- **Netlify** — add `public/_redirects`:

```
/*  /index.html  200
```

- **GitHub Pages** — copy `dist/index.html` to `dist/404.html` after building.

---

## License 📄

This project is licensed under the MIT License — see the [LICENSE.md](LICENSE.md) file for details.
