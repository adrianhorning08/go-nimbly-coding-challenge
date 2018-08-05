const path = require('path');

module.exports = {
  context: __dirname,
  entry: ["babel-polyfill", "./src/entry.jsx"],
    output: {
        path: __dirname,
        filename: "./src/bundle.js",
    },
    mode: 'development',
    module: {
      rules: [
        { test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ["react", "env"]
          }
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devtool: 'source-maps',
    watch: true
};
