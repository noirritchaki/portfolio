# Portfolio

Personal portfolio website styled as a receipt/thermal printer output. Built with React 19 and Vite 8.

## Tech Stack

- **Framework:** React 19 (JSX, no TypeScript)
- **Build:** Vite 8 with `@vitejs/plugin-react`
- **Linting:** ESLint 9 (flat config) with react-hooks and react-refresh plugins
- **Styling:** Plain CSS (no framework), Space Mono monospace font
- **Package manager:** npm

## Project Structure

```
src/
├── main.jsx          # React entry point (StrictMode + createRoot)
├── App.jsx           # Root component, renders Receipt
├── App.css           # All styles (receipt theme, torn edge, hover effects)
├── components/       # React components
│   └── Receipt.jsx   # Main portfolio display (header, projects table, footer)
├── data/             # Static data files
│   └── projects.js   # Project list (array of {name, year} objects)
└── assets/           # Static images (hero.png, react.svg, vite.svg)
public/               # Public assets (favicon.svg)
index.html            # HTML shell
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Key Concepts

- **Receipt metaphor:** The entire UI mimics a thermal receipt — dashed dividers, monospace font, torn paper edge (CSS `linear-gradient` trick at `App.css:169-177`), and a faux barcode
- **Data-driven:** Projects are rendered from `src/data/projects.js` — add/remove entries there to update the portfolio
- **Single component:** Currently all UI lives in `Receipt.jsx`; `App.jsx` is a thin wrapper

## Additional Documentation

Check these files when working on relevant areas:

| File | When to check |
|------|---------------|
| `.claude/docs/architectural_patterns.md` | Adding components, modifying data flow, or styling |
