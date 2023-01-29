let path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  webpackConfig = {
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index.bundle.js",
    },
    devServer: {
      port: 9191,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /nodeModules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, "src"),
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  };

module.exports = webpackConfig;
