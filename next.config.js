/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // Replace with your specific domain(s)
      },
    ],
    // Or if your images are local, you don't need remotePatterns at all
  },
}

module.exports = nextConfig
