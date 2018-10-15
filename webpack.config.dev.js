const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const WebpackMonitor = require("webpack-monitor");
const clientConfig = {
  target: "web",
  mode: "development",
  entry: { "client-bundle": "./src/ui/app/clientEntry.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
    //, new WebpackMonitor({
    //   capture: true,
    //   target: "../WebpackMonitor/myStatsStore.json",
    //   launch: false,
    //   port: 3030
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
      }
    ]
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         chunks: "initial",
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors"
  //       }
  //     }
  //   }
  // },
  resolve: {
    alias: {
      react: path.resolve(
        __dirname,
        "node_modules/react/umd/react.development.js"
      ),
      "react-dom": path.resolve(
        __dirname,
        "node_modules/react-dom/umd/react-dom.development.js"
      ),
      "react-dom/server": path.resolve(
        __dirname,
        "node_modules/react-dom/umd/react-dom.development.js"
      )
    }
  }
};

const serverConfig = {
  target: "node",
  mode: "development",
  externals: [nodeExternals({ modulesFromFile: true })],
  entry: { "server-bundle": "./src/api/server.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
      }
    ]
  }
};

module.exports = [clientConfig, serverConfig];
