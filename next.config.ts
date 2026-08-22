import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"*",
        port:'',
        pathname:"/**"
      }
    ]
  },
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
  reactStrictMode:false
};

export default nextConfig;
