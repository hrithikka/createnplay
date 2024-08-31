// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/createnplay', 
  assetPrefix: '/createnplay/', 
};

export default nextConfig;
