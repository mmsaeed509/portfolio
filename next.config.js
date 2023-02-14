/**
 *  @type {import('next').NextConfig} 
 * */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',

};

module.exports = nextConfig;
