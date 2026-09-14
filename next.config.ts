import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: githubPages ? "export" : undefined,
  trailingSlash: githubPages,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: githubPages,
    qualities: [75, 80],
  },
};

export default nextConfig;
