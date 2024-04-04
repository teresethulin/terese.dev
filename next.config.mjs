/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        storyblokApiToken: process.env.STORYBLOK_API_TOKEN
    },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        port: '',
        pathname: '/f/278911/**',
      },
    ],
  },
};

export default nextConfig;
