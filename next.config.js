// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true, // Recommended for the `pages` directory, default in `migration`.
  swcMinify: true,
  experimental: {
    appDir: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
      formats: ['image/avif', 'image/webp'],
    },
    nextScriptWorkers: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://15.165.28.164/api/:path*',
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
