/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/myhitch-impact' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/myhitch-impact/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
