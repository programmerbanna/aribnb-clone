/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com", "flagcdn.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
