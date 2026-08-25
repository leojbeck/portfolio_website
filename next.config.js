/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio_website',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig