# BurgerBots Website

Marketing site for BurgerBots — built with Next.js 16, React 19, and Tailwind CSS 4.

## Routes

| Path | Page |
|------|------|
| `/` | Redirects to `/home` |
| `/home` | Restaurant landing — menu, visit info, B.O.B. showcase |
| `/buy` | Product page — specs, demo video, FAQ, book a call |
| `/investors` | Investor overview — metrics, thesis, system architecture |
| `/contact` | Sales contact form |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/              # Next.js routes and layouts
  components/
    layout/         # NavBar, NavMenu, Footer
    home/           # Home page sections
    buy/            # Buy page sections
    investors/      # Investors page sections
    contact/        # Contact form
    shared/         # Reusable UI primitives
  lib/              # Site config, nav links, content data
  fonts/            # Google font setup
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint
