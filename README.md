# Phyto Nova

**A bilingual academic research website exploring plant tissue culture and its potential role in anticancer drug discovery.**

🌐 **Live site:** [phyto-nova.vercel.app](https://phyto-nova.vercel.app)

## Overview

Phyto Nova explores plant tissue culture as a controlled platform for discovering and producing candidate anticancer compounds. It focuses on nano-elicitation as an approach to stimulating secondary-metabolite production, highlights the role of metabolomics in chemical characterization, and covers bioreactors for large-scale production.

By reviewing and connecting findings from different plant-culture studies, including *Viola odorata* and rice callus suspension cultures, the project presents an integrated research pathway linking plant-cell cultivation, nanomaterial-based elicitation, metabolite analysis, and in-vitro anticancer screening.

## Features

- Research themes and scientific references
- Selected scientific publications
- Project resources, supervisor and team information, and a research outlook
- English and Arabic support, with right-to-left (RTL) layout for Arabic

## Research Topics

- Nano-elicitation
- Secondary-metabolite production
- Bioreactor scale-up
- Metabolomics

## Getting Started

**Prerequisites:** Node.js and npm

```bash
git clone https://github.com/Elwasify/phyto-nova.git
cd phyto-nova
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local development server   |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Built With

- React
- Vite
- Tailwind CSS
- React Router
- Iconify and Lucide icons

## Project Structure

```
src/
  components/  Page sections and shared UI components
  context/     Language state and language provider
  data/        Research topics, publications, and project details
  i18n/        English and Arabic translations
  assets/      Images used by the website
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). To deploy your own copy, run `npm run build` and serve the `dist/` folder, or connect the repository to Vercel.

## Team

- [Name], [Role / Affiliation]
- Supervisor: [Name]

## License

[e.g., MIT]