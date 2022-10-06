/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'cdn.jsdelivr.net', 'images.g2crowd.com'],
  },
};

module.exports = nextConfig;
