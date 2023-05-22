// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `migration`.
  swcMinify: true,
  experimental: {
    appDir: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://13.124.230.85/:path*',
      },
    ];
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

module.exports = withSentryConfig(module.exports, { silent: true }, { hideSourceMaps: true });
