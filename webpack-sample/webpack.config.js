// webpack setting

/**
 * entry
 */
// // string
// module.exports = {
//   entry: "./src/index.js",
// };

// // array (使用陣列的 entry 使 webpack 將不相關的模組打包在同個 Chunk 中，稱為 multi-main entry 。)
// module.exports = {
//   entry: ["./src/index1-1.js", "./src/index1-2.js"],
// };

// object
module.exports = {
  // key -> chunk
  // value -> entries
  entry: {
    main1: "./src/index1-1.js",
    main2: "./src/index1-2.js",
    main3: ["./src/index1-1.js", "./src/index1-2.js"],
  },
};
