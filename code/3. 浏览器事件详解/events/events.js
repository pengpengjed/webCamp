// DOM 事件的分级
// 0 1 2 级事件
const formDom = document.querySelector("#form");

// 0 级事件，缺点，单例，后面的会覆盖前面的
// dom.onclick = function (e) {
//   console.log("0级事件");
// };

// dom.onclick = function (e) {
//   console.log("0级事件2");
// };
// formDom.onsubmit = function (event) {
//   console.log('🚀 ~ file: events.js:14 ~ e:', event)
//   // 组织了浏览器的表单提交默认行为
//   event.preventDefault();
//   console.log("0级事件");
// };

// 1 级事件，事件系统
// 注册事件的一个操作，事件池
formDom.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("🚀 ~ file: events.js:25 ~ event1:", event);
  // eventHandler.trigger("click");
});
formDom.addEventListener("submit", (event) => {
  console.log("🚀 ~ file: events.js:25 ~ event2:", event);
});
formDom.addEventListener("submit", (event) => {
  console.log("🚀 ~ file: events.js:25 ~ event3:", event);
});


// 这个就是 DOM 的事件系统
class EventHandler {
  events = []; // 事件池

  addEventListener(type, callback) {
    this.events.push({
      type,
      callback,
    });
  }

  trigger(type) {
    this.events.forEach((event) => {
      if (event.type === type) {
        event.callback();
      }
    });
  }
}

const eventHandler = new EventHandler();
eventHandler.addEventListener("click", () => {
  console.log("click1");
});
eventHandler.addEventListener("mousedown", () => {
  console.log("click2");
});
eventHandler.addEventListener("mousedown", () => {
  console.log("click3");
});
