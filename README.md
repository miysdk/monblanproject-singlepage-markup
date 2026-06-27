# Monblan Project — Single Page Landing

A single-page landing site built with **React (JavaScript)**, **SCSS**, and **Material UI**, configured for deployment on **GitHub Pages**.

## Stack

- [Vite](https://vite.dev/) — dev server and production builds
- [React 19](https://react.dev/)
- [Material UI (MUI)](https://mui.com/) — components and theming
- [Sass](https://sass-lang.com/) — global styles, variables, and component SCSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to preview locally.

## Project structure

```
src/
├── components/     # Landing sections (Header, Hero, Features, Footer)
├── styles/         # Global SCSS (variables, mixins, main)
├── theme/          # MUI theme configuration
├── App.jsx
└── main.jsx
```

## Customize

1. **Content** — edit components in `src/components/`
2. **Colors & typography** — update `src/theme/theme.js` and `src/styles/_variables.scss`
3. **Page title & meta** — update `index.html`
4. **GitHub Pages base path** — if your repo name differs, change `base` in `vite.config.js` and `homepage` in `package.json`

## Deploy to GitHub Pages

### Option A — GitHub Actions (recommended)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. Push to the `main` branch — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically

Your site will be live at:

`https://YOUR_GITHUB_USERNAME.github.io/monblanproject-singlepage-markup/`

### Option B — Manual deploy with gh-pages

```bash
npm run deploy
```

Then in **Settings → Pages**, set **Source** to deploy from the `gh-pages` branch.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run deploy`  | Build and push to `gh-pages` branch |
| `npm run lint`    | Run Oxlint               |

## License

Private — update as needed.
