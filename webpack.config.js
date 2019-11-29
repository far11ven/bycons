var path = require("path");

module.exports = {
  entry: {
    index: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dest"),
    filename: "[name].js",
    // or whatever other format you want
    chunkFilename: "[name].[id].js"
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  }
};
