# 🌿 Phyto Nova

**A bilingual academic research website exploring plant tissue culture and its potential role in anticancer drug discovery.**

🔗 [phyto-nova.vercel.app](https://phyto-nova.vercel.app)

Phyto Nova presents research themes, scientific references, project resources, and the academic team behind the project. The website is available in English and Arabic, with right-to-left (RTL) layout support for Arabic.

## Features

- 🌐 Bilingual interface (English / Arabic) with full RTL support
- 🔬 Research themes overview
- 📚 Selected scientific publications
- 🗂️ Project resources
- 👥 Supervisor and team information
- 🔭 Research outlook

## Research topics

- Nano-elicitation
- Secondary-metabolite production
- Bioreactor scale-up
- Metabolomics

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended) and npm

### Install and run locally

```bash
git clone https://github.com/Elwasify/phyto-nova.git
cd phyto-nova
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

### Available scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local development server   |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Built with

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [React Router](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
- [Iconify](https://iconify.design/) icons

## Project structure

```
src/
  components/  Page sections and shared UI components
  context/     Language state and language provider
  data/        Research topics, publications, and project details
  i18n/        English and Arabic translations
  assets/      Images used by the website
public/        Static files
```

## Adding or editing content

- Research topics, publications, and project details live in `src/data/`.
- Translations for both languages live in `src/i18n/`. When you add new text, add it in **both** English and Arabic.

## Deployment

The site is deployed on [Vercel](https://vercel.com/). To deploy your own copy, import the repository into Vercel and use the Vite defaults:

- **Build command:** `npm run build`
- **Output directory:** `dist`

## License

No license has been specified yet. Add a `LICENSE` file to make the terms of use clear.