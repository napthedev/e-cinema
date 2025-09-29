/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
      {
        protocol: "https",
        hostname: "www.2embed.cc",
      },
      {
        protocol: "https",
        hostname: "www.superembed.stream",
      },
      {
        protocol: "https",
        hostname: "vidsrc.me",
      },
      {
        protocol: "https",
        hostname: "moviesapi.club",
      },
    ],
  },
};

module.exports = nextConfig;
