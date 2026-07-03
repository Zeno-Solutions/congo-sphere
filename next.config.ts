import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  // À adapter au nom de ton dépôt
  basePath: isGithubActions ? "/congo-sphere" : "",
  assetPrefix: isGithubActions ? "/congo-sphere/" : "",
};

export default nextConfig;
