import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media2.dev.to",
      },
      // {
      //   protocol: "https",
      //   hostname: "media.dev.to",
      // },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
