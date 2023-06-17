var divEle = document.createElement("div");
var h1Ele = document.createElement("h1");
h1Ele.insertAdjacentText("afterbegin", "Hello World!");
divEle.appendChild(h1Ele);
document.querySelector("body").insertAdjacentElement("afterbegin", divEle);
