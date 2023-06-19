const path = require("path"); // 引入 node 內建的 path 處理路徑
// webpack setting

/**
 * entry
 */

// // string
// module.exports = {
//   entry: "./src/entry/index1.js",
// };

// // array (使用陣列的 entry，使 webpack 將不相關的模組打包在同個 Chunk 中，稱為 multi-main entry )
// module.exports = {
//   mode: "production",
//   entry: ["./src/entry/index1-1.js", "./src/entry/index1-2.js"],
// };

// object
// module.exports = {
//   mode: "production",
//   // key -> chunk
//   // value -> entries
//   entry: {
//     main1: "./src/entry/index1-1.js",
//     main2: "./src/entry/index1-2.js",
//     main3: ["./src/entry/index1-1.js", "./src/entry/index1-2.js"],
//   },
// };

// // function
// module.exports = {
//   mode: "production",
//   entry: () =>
//     new Promise((res) => {
//       setTimeout(() => {
//         res("./src/entry/index1.js");
//       }, 1000);
//     }),
// };

/**
 * output // object
 */

// // default
// module.exports = {
//   mode: "production",
//   entry: "./src/output/index.js",
//   output: {
//     // path 屬性設定輸出的目錄，這屬性需要配置絕對路徑(absolute path)。
//     // [variable]
//     path: path.join(process.cwd(), "dist"), // process.cwd() 用於取得 current path
//     filename: "[name].js", // main.js
//     clean: true,
//   },
// };

// // multiple entries
// module.exports = {
//   mode: "production",
//   entry: {
//     main1: "./src/output/index1-1.js",
//     main2: "./src/output/index1-2.js",
//   },
//   output: {
//     path: path.join(process.cwd(), "dist"),
//     filename: "[name].js",
//     clean: true,
//   },
// };

// template string
/**
  [name] : Chunk 名稱
  [id] : Chunk ID module 的添加或移除、項目配置的變更時可能會有變化
  [chunkhash] : 每個 chunk 的 hash 值，只有在 chunk 改變時才會變化
  [hash] : Compilation 的 hash 值，只要建置有改變， hash 值就會變化
  [contenthash] : 每個 bundle 的 hash 值，只有 bundle 改變時才會變化
 */

// yarn add -D mini-css-extract-plugin css-loader

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// module.exports = {
//   mode: "production",
//   entry: {
//     main1: "./src/output/index1-1.js",
//     main2: "./src/output/index1-2.js",
//   },
//   output: {
//     path: path.join(process.cwd(), "dist"),
//     filename: "[name].[id].js",
//     clean: true,
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "[name].[id].css",
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//           },
//           "css-loader",
//         ],
//       },
//     ],
//   },
// };

/**
 * resolve
 */

// yarn add lodash

// module.exports = {
//   mode: "production",
//   entry: "./src/resolve/index.js",
//   output: {
//     path: path.join(process.cwd(), "dist"),
//     filename: "[name].js",
//     clean: true,
//   },
//   resolve: {
//     alias: {}, //default
//     // alias: {
//     //   "@": path.resolve(__dirname, "src/resolve/api/index"),
//     //   "#": path.resolve(__dirname, "src/resolve/utils"),
//     // },
//     modules: ["node_modules"], // default
//     // modules: ["./src/resolve/my_node_modules"],
//     extensions: [".wasm", ".mjs", ".js", ".json"], // default
//   },
// };

/**
 * loader
 */
// create index.html
// yarn add -D css-loader style-loader file-loader

// module.exports = {
//   mode: "production",
//   entry: "./src/loader/index.js",
//   output: {
//     path: path.join(process.cwd(), "dist"),
//     filename: "main.js",
//     // clean: true,
//   },
// };

// module.exports = {
//   mode: "production",
//   entry: "./src/loader/index.js",
//   output: {
//     path: path.join(process.cwd(), "dist"),
//     filename: "main.js",
//     // clean: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           "style-loader",
//           { loader: "css-loader", options: { modules: true } },
//         ],
//       },
//     ],
//     // noParse: [
//     //   // 必須要是絕對路徑
//     //   path.join(process.cwd(), "src/loader/jquery.js"),
//     //   path.join(process.cwd(), "src/loader/lodash.js"),
//     //   path.join(process.cwd(), "src/loader/ramda.js"),
//     // ],
//   },
// };

// yarn add -D clean-webpack-plugin copy-webpack-plugin html-webpack-plugin
// const HtmlWebpackPlugin = require("html-webpack-plugin"); // 自動產生 html
// const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除 output 路徑的檔案，但是可以指定哪些檔案清除或是留下
// const CopyWebpackPlugin = require("copy-webpack-plugin"); // 複製檔案內容到 output 檔案
// const webpack = require("webpack");

// // const handler = (percentage, message, ...args) =>
// //   console.log(`${Math.round((percentage / 1) * 100)}%\t`, message, ...args);

// module.exports = {
//   mode: "development",
//   entry: "./src/plugins/index.js",
//   output: {
//     path: path.join(process.cwd(), "dist"),
//     filename: "main.js",
//   },
//   plugins: [
//     new HtmlWebpackPlugin(),
//     new CleanWebpackPlugin(),
//     new CopyWebpackPlugin({
//       patterns: [{ from: "src/plugins/public", to: "copy" }],
//     }),
//     new webpack.ProgressPlugin(), // 出現 build 過程的進度 %
//     // new webpack.ProgressPlugin(handler),
//   ],
// };
