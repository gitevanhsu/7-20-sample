const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", // 設定為開發模式
  entry: "./src/index.tsx", // 進入點為 src/index.tsx
  output: {
    filename: "bundle.js", // 輸出檔名
    path: path.resolve(__dirname, "dist"), // 輸出路徑
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // 針對符合特定檔案格式的檔案進行處理
        exclude: /node_modules/, // 排除 node_modules 資料夾
        use: ["babel-loader", "ts-loader"], // 使用 babel-loader 與 ts-loader 處理檔案
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // import 可以省略的副檔名
  },
  plugins: [new HtmlWebpackPlugin()], // 使用 HtmlWebpackPlugin 自動產生 html
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // dev-serve host 的檔案位置
    },
    compress: true, // 壓縮檔案
    port: 3000, // 開發伺服器 port
    open: true, // 自動瀏覽器
  },
};
