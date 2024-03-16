// css in js
// 针对于 react 基础的同学
// styled-components
// motion
// 没有任何一个技术是银弹，tailwindcss

// const styled = function (styles) {
//   for (const key in styles) {
//     const element = styles[key];
//     document.body.style[key] = element;
//   }
// };

const styled = function (styles, ...args) {
  let result = "";
  for (const style of styles) {
    result += style + (args.shift() || "");
    // shift 属于数组的操作，就是拿出数组第一个元素
    // shift、unshift（从前面操作）、pop、push（从后面操作）
    // reduce，神级方法可以替代数组几乎所有方法
  }

  console.log("🚀 ~ file: 3.2.taggedStr.js:22 ~ styled ~ result:", result);
  const results = result.split(",");

  for (const res of results) {
    const [k, v] = res.split(":");
    // document.body.style["color"] = "pink";
    const key = k.trim();
    const value = v.trim();
    console.log("🚀 ~ file: 3.2.taggedStr.js:30 ~ styled ~ key:", key, value);
    document.body.style[key] = value;
  }

  return result;
};

// styled({
//   color: "red",
//   fontSize: "20px",
//   backgroundColor: "green",
// });
const color = "yellow";
const fontWeight = 500;
styled`
  color: ${color},
  fontSize: "20px",
  backgroundColor: ${color},
  fontWeight: "${fontWeight}"
`;
