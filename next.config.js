/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  images: {
    domains: ['yth3.ggpht.com', 'lh3.googleusercontent.com'],

  }
}

module.exports = nextConfig
