/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'etherscan.io',
        port: '',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;
