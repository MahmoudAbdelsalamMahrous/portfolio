# 3D Portfolio

A personal portfolio site built with **Next.js (App Router)**, **Tailwind CSS**, and a **Three.js** (via `@react-three/fiber` + `@react-three/drei`) animated hero scene. Configured for static export and one-command deployment to **GitHub Pages**.

## Stack

- Next.js (App Router, static export)
- TypeScript
- Tailwind CSS
- three.js / @react-three/fiber / @react-three/drei — 3D hero scene
- GitHub Actions — auto-deploy to GitHub Pages on push to `main`

## Getting Started Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customizing Your Content

All of the text on the site — your name, role, about text, skills, and projects — lives in **one file**:

```
src/data/portfolio.ts
```

Edit that file and the whole site updates. No need to touch the components unless you want to change layout or styling.

Sections live in `src/components/`:
- `Hero.tsx` — landing section with the 3D scene
- `Scene.tsx` — the actual 3D animation (colors, shapes, orbit speed — tweak here)
- `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Contact.tsx`

## Deploying to GitHub Pages

1. **Create a GitHub repo** and push this project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages via Actions**:
   In your repo → Settings → Pages → Build and deployment → Source → select **"GitHub Actions"**.

3. That's it. The included workflow at `.github/workflows/deploy.yml` automatically builds and deploys the site to GitHub Pages on every push to `main`. Your site will be live at:

   ```
   https://<your-username>.github.io/<your-repo>/
   ```

### Note on paths (important)

This project is already configured for the custom domain **mahmoudabdelbadr.tech** — a `public/CNAME` file is included with that domain, and the GitHub Actions workflow does **not** set a base path, since a custom domain is served from the root (not a `/repo-name` subpath like the default `username.github.io/repo` URL would need).

You still need to point the domain at GitHub in two places:

**1. DNS records** — at your domain registrar (wherever you bought `mahmoudabdelbadr.tech`), add:

For the apex domain (`mahmoudabdelbadr.tech`) — four **A** records pointing to GitHub Pages' IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
Optionally, for `www.mahmoudabdelbadr.tech` — a **CNAME** record pointing to `<your-username>.github.io`.

DNS changes can take anywhere from a few minutes to 24 hours to propagate.

**2. GitHub repo settings** — in Settings → Pages → "Custom domain", enter `mahmoudabdelbadr.tech` and save (GitHub reads this from the `public/CNAME` file automatically once deployed, but setting it here too lets GitHub verify DNS and offer to enforce HTTPS). Once DNS is verified, check "Enforce HTTPS".

If you ever want to go back to the default `username.github.io/repo-name` URL instead: delete `public/CNAME`, and re-add a "Set base path" step to `.github/workflows/deploy.yml` (see git history, or ask me and I'll regenerate it).

### Manual build (optional)

```bash
npm run build
```

Output is written to `/out` — a fully static folder you could host anywhere (Netlify, Vercel, S3, etc.), not just GitHub Pages.

## Notes

- The 3D scene is dynamically imported with `ssr: false` since three.js relies on the browser window/WebGL context and can't render on the server — required for static export to work.
- `images: { unoptimized: true }` is set in `next.config.ts` because GitHub Pages has no image optimization server.
