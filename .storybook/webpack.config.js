const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.less$/,
    loaders: [
      "style-loader",
      "css-loader",
      {
        loader: "less-loader",
        options: { javascriptEnabled: true }
      }
    ],
    include: path.resolve(__dirname, '../'),
  });
  return defaultConfig;
};