import css from "./style.css";
// import css from "css-loader!./style.css"; // 只有編譯沒有插入 html 裡
// import "style-loader!css-loader!./style.css"; // 編譯後引入 html
// import 'style-loader!css-loader?{"modules":true}!./style.css'; // 設定每一個引入的 css 都是獨立 module 不會互相影響
console.log("this is loader sample.");

console.log(css);
console.log(css.toString());

function style(cssString) {
  const element = document.createElement("style");
  element.innerHTML = cssString;
  return element;
}

document.head.appendChild(style(css.toString()));

// import img from "file-loader!./webpack.png";

// const imgEle = document.createElement("img");
// imgEle.src = img;
// document.body.appendChild(imgEle);

// import * as $ from "./jquery";
// import * as R from "./ramda";
// import * as _ from "./lodash";

// $("img").css("border", "solid 1px #000");
// console.log("R", R.add(2, 3));
// console.log("_", _.join(["a", "b", "c"], "~"));
