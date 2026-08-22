import type { NextConfig } from "next";
// next.config.ts
const nextConfig: NextConfig = {
  // ... your existing config
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless', // NOT require-corp
          },
        ],
      },
    ];
  },
};

export default nextConfig;