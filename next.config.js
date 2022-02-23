/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = {
//   webpack(config, { isServer, buildId }) {
//     config.resolve.modules.push(__dirname);

//     return config;
//   },
// };

const debug = process.env.NODE_ENV !== 'production';
const name = 'nextjs-dev-blog';

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
};
