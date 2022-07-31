/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // fucks shit up less and SSR with styled-component
    styledComponents: true,
  },
};

module.exports = nextConfig;
