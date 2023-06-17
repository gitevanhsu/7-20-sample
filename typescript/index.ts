const divEle: Element = document.createElement("div");
const h1Ele: Element = document.createElement("h1");
h1Ele.insertAdjacentText("afterbegin", "Hello World!");
divEle.appendChild(h1Ele);
document.querySelector("body").insertAdjacentElement("afterbegin", divEle);
