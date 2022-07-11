var nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    libraryTarget: "this"
  },
  target: "node",
  module: {
    rules: [
      {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: {
              transpileOnly: true
          }
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  externals: [nodeExternals()]
};