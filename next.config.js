/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c.media.kavehome.com',
      },
    ],
  },
};

module.exports = nextConfig;
