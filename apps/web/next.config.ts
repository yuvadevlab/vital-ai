import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@vital-ai/ui",
    "@vital-ai/shared-types",
    "@yuva-devlab/ui",
    "@yuva-devlab/tokens",
  ],
};

export default nextConfig;
