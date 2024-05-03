/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/2048-in-react",
    output: "export",
    reactStrictMode: true,
  };
  module.exports = {
    webpack: (config, { isServer }) => {
      // Add Babel loader for JavaScript files
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              // Add any necessary Babel plugins here
            ]
          }
        }
      });
  
      return config;
    }
  };
  
  module.exports = nextConfig;