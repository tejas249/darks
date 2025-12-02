import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    webpackBuildWorker: true,
  },

  webpack(config) {

    config.module.rules = config.module.rules.map((rule: any) => {
      if (rule.test && rule.test.toString().includes("svg")) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

  
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
