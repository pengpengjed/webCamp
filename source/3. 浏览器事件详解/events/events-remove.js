const form2Dom = document.querySelector("#form");

// 定义处理函数
const submitHandler = (event) => {
  console.log("🚀 ~ 我是 event remove 示例", event);

  // 解绑事件
  form2Dom.removeEventListener("submit", submitHandler);
};

// once，只能点一次

// 绑定事件
form2Dom.addEventListener("submit", submitHandler);
