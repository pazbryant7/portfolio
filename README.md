# Bryant Paz Portfolio

Personal portfolio site built with React 19, Vite 8, Sass, and React Router.

## Requirements

- Node `^20.19.0 || >=22.12.0`
- npm

The repository includes a Nix development shell with the required Node/npm
toolchain:

```sh
nix develop
```

## Setup

Install dependencies locally in the project:

```sh
npm install
```

## Development

Start the Vite development server:

```sh
npm run dev
```

Open http://localhost:3000/portfolio/.

## Verification

```sh
npm run format
npm run lint
npm run build
```

`npm run build` writes the production site to `dist/`.

To serve that build locally:

```sh
npm run preview
```

Open http://localhost:8080/portfolio/.

## Deployment

Pushing to `main` runs the GitHub Actions workflow in
`.github/workflows/deploy.yml`, builds the site, and deploys `dist/` to GitHub
Pages.

The site is hosted below `/portfolio/`. Keep Vite's `base`, the router
basename, and relative `assets/...` references aligned with that path.
