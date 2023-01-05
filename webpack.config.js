const path = require("path");

module.exports = {
      mode: "development",
      entry: "./src/index.js",
      devServer: {
            static: {
                  directory: path.resolve(__dirname, 'dist')
            },
            port: 3000,
            open: true,
            hot: true,
            compress: true
      },
      output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist"),
      },
};