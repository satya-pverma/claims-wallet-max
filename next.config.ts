import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "juiceclaims.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
