/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['yth3.ggpht.com', 'lh3.googleusercontent.com'],

  }
}

module.exports = nextConfig
