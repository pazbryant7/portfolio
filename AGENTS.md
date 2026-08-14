# Portfolio

## Tooling

- Use the Node version required by `package.json` (`^20.19.0 || >=22.12.0`) and npm; `nix develop` provides the pinned project toolchain without global installation.
- Bootstrap with `npm install` (the GitHub Actions deployment uses this command).
- `npm run dev` runs Vite on port 3000; because Vite's base is `/portfolio/`, use the `/portfolio/` URL path.
- Run `npm run lint` and `npm run build` for verification. The repository has no test or typecheck script; the build writes `dist/`.
- Run `npm run format` after editing `src/`; it formats only `src/` with Prettier (4-space indentation, single quotes, semicolons, 80-column width).

## Application And Deployment

- `src/main.jsx` loads the global Sass entrypoint and renders `App`; `src/router/Routes.jsx` contains the only routes, with the home screen assembled from tabbed components in `src/views/home.jsx`.
- Static images, SVGs, and the resume live under `public/assets/`. Components intentionally reference them as relative `assets/...` paths; keep that convention so URLs work under the GitHub Pages `/portfolio/` base path.
- Keep Vite's production `base` and the router's `basename={import.meta.env.BASE_URL}` aligned. Changes that assume the site is hosted at `/` will break GitHub Pages.
- Pushing to `main` runs `.github/workflows/deploy.yml`, builds the app, and deploys `dist/` to GitHub Pages.
