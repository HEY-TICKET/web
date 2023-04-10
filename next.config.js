/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `migration`.
  swcMinify: true,
  experimental: {
    appDir: false,
    images: {
      allowFutureImage: true,
    },
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.kopis.or.kr',
      },
    ],
  },
};

module.exports = nextConfig;
