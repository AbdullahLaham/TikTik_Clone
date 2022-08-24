/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  env: {
    base_url: 'https://tik-tik-clone-lemon.vercel.app/',
  },
  swcMinify: true,
  images: {
    domains: ['yth3.ggpht.com', 'lh3.googleusercontent.com'],

  }
}

module.exports = nextConfig
