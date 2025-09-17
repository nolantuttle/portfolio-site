import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",       // catches the root
        destination: "/home",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
