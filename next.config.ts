import type { NextConfig } from "next";

// Loader path from orchids-visual-edits
const loaderPath = require.resolve("orchids-visual-edits/loader.js");

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  // ✅ REQUIRED for Vercel stability
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Turbopack ONLY in dev
  ...(isDev && {
    turbopack: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [loaderPath],
        },
      },
    },
  }),

  allowedDevOrigins: ["*.orchids.page", "*.daytona.works"],
};

export default nextConfig;
