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

Because GitHub Pages serves project repos from a subpath (`/<repo-name>/`), the workflow automatically sets `NEXT_PUBLIC_BASE_PATH` to your repo name during the build so all internal links/assets resolve correctly.

- If this repo **is** your `<username>.github.io` root repo (the special "user site" repo), open `.github/workflows/deploy.yml` and delete the "Set base path" step — you don't need a base path in that case.
- If you deploy to a **custom domain**, do the same (delete that step) and add a `CNAME` file to `public/` with your domain.

### Manual build (optional)

```bash
npm run build
```

Output is written to `/out` — a fully static folder you could host anywhere (Netlify, Vercel, S3, etc.), not just GitHub Pages.

## Notes

- The 3D scene is dynamically imported with `ssr: false` since three.js relies on the browser window/WebGL context and can't render on the server — required for static export to work.
- `images: { unoptimized: true }` is set in `next.config.ts` because GitHub Pages has no image optimization server.
