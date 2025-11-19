import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // 👇 This makes `npm run build` ignore ESLint errors on Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
