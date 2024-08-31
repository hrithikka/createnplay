const isProd = process.env.NODE_ENV === 'production';

export default {
  assetPrefix: isProd ? '/createnplay/' : '',
  basePath: isProd ? '/createnplay' : '',
  images: {
    unoptimized: true,
  },
};
