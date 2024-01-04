const ulDom = document.querySelector("ul");

const lis = ulDom.querySelectorAll("li");
console.log("🚀 ~ file: events-delegate.js:4 ~ lis:", lis);

// Array.prototype.slice.call(lis).forEach((li) => {});

// lis 他现在是一个什么数据结构
// Array.from(lis).forEach((li, index) => {
//   li.addEventListener("click", (event) => {
//     console.log("🚀 ~ file: events-delegate.js:16 ~ event:", event, index);
//   });
// });

const snip = (dom) => {
  // 首先看包不包含
  const isContains = ulDom.contains(dom);
  if (!isContains) {
    return;
  }

  // 再看是否已经是 LI
  if (dom.tagName === "LI") {
    return dom;
  }

  // 如果不是，就向上找寻
  let cur = dom;
  const find = (dom) => {
    cur = dom.parentNode;
    console.log(
      "🚀 ~ file: events-delegate.js:31 ~ find ~ dom.parentNode:",
      dom.parentNode
    );

    if (cur.tagName === "LI") {
      return cur;
    }
    find(cur);
  };

  find(dom);
};

// 我们想将 li 的事件委托给 ul，正式运用了事件冒泡
ulDom.addEventListener("click", (event) => {
  console.log("🚀 ~ file: events-delegate.js:23 ~ event:", event.target);
  const dom = event.target;
  const index = dom.getAttribute("data-index");
  // 有可能你点的是 button 而不是 li，所以你还需要有一个向上嗅探

  console.log(snip(dom));

  // 做你接下来 li 的逻辑
  console.log("🚀 ~ file: events-delegate.js:26 ~ index:", index);
  // 触发对象 event.target
  // 监听对象（事件源） event.currentTarget
});
