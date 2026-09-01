import type { NextConfig } from "next";

// If deploying to https://<username>.github.io/<repo>, GitHub Pages serves
// the site from a subpath. Set NEXT_PUBLIC_BASE_PATH="/<repo>" in the GitHub
// Actions workflow (already done in .github/workflows/deploy.yml) so all
// asset/link paths resolve correctly. If you deploy to a custom domain or a
// <username>.github.io root repo, leave it blank.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for static export — GitHub Pages has no image server
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
