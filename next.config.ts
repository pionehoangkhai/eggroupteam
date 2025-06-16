import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     eslint: {
    ignoreDuringBuilds: true, // ✅ Bỏ qua ESLint khi build production
  },
};

export default nextConfig;
