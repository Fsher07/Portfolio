/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.jsdelivr.net",
      "images.g2crowd.com",
      "reactjs.org",
      "git-scm.com",
      "cdn1.vectorstock.com",
      "cdn-images-1.medium.com",
      "www.avkaryazilim.com.tr",
      "tailwindcss.com",
      "upload.wikimedia.org",
      "drive.google.com",
      "media.licdn.com",
      "unsplash.com",
      "flickr.com",
    ],
  },
};

module.exports = nextConfig;
