const l1Dom = document.querySelector("#l1");
const l2Dom = document.querySelector("#l2");
const l3Dom = document.querySelector("#l3");

l1Dom.addEventListener(
  "click",
  (event) => {
    console.log("l1");
    // event.stopPropagation();
  },
  true // true 代表捕获阶段
);
l2Dom.addEventListener(
  "click",
  (event) => {
    console.log("l2");
    // event.stopPropagation();
  },
  true // 捕获阶段
);
l3Dom.addEventListener(
  "click",
  (event) => {
    console.log("l3");
    // event.stopPropagation();
  },
  true
);
