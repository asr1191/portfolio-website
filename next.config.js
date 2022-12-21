const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/api/featuredposts",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=5, stale-while-revalidate=59",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.akamai.steamstatic.com',
        pathname: '**',
      },
    ],
  },
}

module.exports = withContentlayer(nextConfig)