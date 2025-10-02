# TerraNova Realty Landing Page

A Vite + React single-page experience for TerraNova Realty, showcasing the firm’s land advisory services, featured portfolio, and sustainability commitments.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to preview the site.

## Build

```bash
npm run build
```

The optimized assets are emitted to `dist/`.

## Project structure

- `src/App.jsx` contains the one-page layout with anchor-based navigation.
- `src/components/` hosts shared interface elements such as the header, hero, cards, footer, sticky CTA, and cookie banner.
- `src/data/propertiesData.js` includes highlighted land opportunities.
- `src/hooks/useSEO.js` manages document metadata updates.
- `src/styles.css` defines the TerraNova Realty design system.

## Deployment notes

- Update `index.html` meta tags and the public assets directory as needed for production domains.
- `public/sitemap.xml` references the single-page experience at `https://terranovarealty.example/` and is linked from `public/robots.txt`.
- Remember to configure mail handling for `advisors@terranovarealty.com` to receive consultation requests triggered by the contact form.
