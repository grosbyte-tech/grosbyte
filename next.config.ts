import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/custom-software-development",
        permanent: false,
      },
      {
        source: "/services/custom-software-development",
        destination: "/custom-software-development",
        permanent: true,
      },
      {
        source: "/services/web-mobile-applications",
        destination: "/web-mobile-applications",
        permanent: true,
      },
      {
        source: "/services/digital-marketing",
        destination: "/digital-marketing",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
