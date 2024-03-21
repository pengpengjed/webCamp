// 通常这样来定义：可中断函数

function* generateQueue() {
  yield fetch("https://www.baidu.com");
  yield fetch("https://www.baidu.com");
  yield fetch("https://www.baidu.com");
}

function* GENERATEQUEUE() {
  yield fetch("https://www.baidu.com");
  yield fetch("https://www.baidu.com");
  yield fetch("https://www.baidu.com");
  yield fetch("https://www.baidu.com");
}

const QUEUE = GENERATEQUEUE();
const queue = generateQueue();

let CURRENT = QUEUE.next();
let current = queue.next();

// while 循环可以解决同步问题
// while (!current.done) {
//   console.log(current);
//   current.value.then((res) => {
//     console.log(
//       "🚀 ~ file: 6.generator.js:15 ~ current.value.finally ~ res:",
//       res
//     );
//     current = queue.next();
//   });
// }
while (!CURRENT.done) {
  console.log(CURRENT)
  CURRENT.value.then(res => {
    console.log(res)
    CURRENT = queue.next();
  })
}

// 异步问题
// 递归的形式
function go() {
  let current = queue.next();
  console.log(current);
  if (current.done) {
    return;
  }
  current.value.finally((res) => {
    console.log(
      "🚀 ~ file: 6.generator.js:15 ~ current.value.finally ~ res:",
      res
    );
    go();
  });
}
go();
function go1() {
  let current = QUEUE.next()
  console.log(current)
  if (current.done) {
    return;
  }
  current.value.finally(res => {
    console.log(res)
    go1()
  })
}
go1();

