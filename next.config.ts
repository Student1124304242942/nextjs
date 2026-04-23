import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Настройки Turbopack (если нужны)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['turbopack-inline-svg-loader'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;