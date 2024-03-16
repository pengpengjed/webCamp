// 请求可以有几种形式处理
// ajax
// fetch
// 三方库，axios

// XML
const xhr = new XMLHttpRequest();

const url = "http://localhost:3000";

xhr.open("GET", url, true);

// 监听当前请求状态
// xhr.onreadystatechange = function () {
xhr.addEventListener("readystatechange", function (ev) {
  console.log("🚀 ~ file: ajax.js:1 ~ xhr.readyState:", ev, xhr.readyState);

  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log("🚀 ~ file: ajax.js:1 ~ xhr.response:", xhr.response);
    const data = JSON.parse(xhr.response);
    console.log("🚀 ~ file: ajax.js:1 ~ data:", data);
  }
});

// 是需要序列化的数据
const dataJson = JSON.stringify({
  // 不是靠谱的，serialize.js
  name: "name",
});
xhr.send();
