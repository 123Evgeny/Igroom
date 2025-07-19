import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // SVG как React-компоненты через SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    // Алиасы
    config.resolve.alias = {
      ...config.resolve.alias,
      shared: path.resolve(__dirname, "src/shared"),
      features: path.resolve(__dirname, "src/features"),
      entities: path.resolve(__dirname, "src/entities"),
      widgets: path.resolve(__dirname, "src/widgets"),
      pages: path.resolve(__dirname, "src/pages"),
      app: path.resolve(__dirname, "src/app"),
    };

    return config;
  },
};

export default nextConfig;
