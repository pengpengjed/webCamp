// 过去的声明方式
// var a = 1;

// var 太坑人了
// var 的几宗罪

// 1.变量提升
// 2.重复声明
// 3.全局变量（污染）

// 1 + 1   ->   ast

// 程序里面怎么表示 var a = 1; ast 怎么写

// json schema，可以表示表单、可视化的配置、低代码的页面，还可以用来描述程序 ast（abstract struct tree）
// var a = 1 的 ast
const ast = {
  type: "VariableDeclaration",
  kind: "var",
  declarations: [
    {
      type: "VariableDeclarator",
      id: {
        type: "Identifier",
        name: "a",
      },
      init: {
        type: "Literal",
        value: 1,
      },
    },
  ],
};

// 程序运行时，首先会有一个 global 上下文
// 产生一个执行上下文
const globalExecuteContext = {
  a: 1,
  testExecuteContext: {
    b: 2,
    // 块级作用域声明的内容
  },
  // 词法环境
  lexicalEnvironment: {
    let_b: 1, // 会先给他初始化为 undefined 吗？不会，这个变量目前是 “不可达”
    for1: {
      element: 1,
    },
    for2: {
      element: 2,
    },
    for3: {
      element: 3,
    },
  },
  element: 3,
};

/** 需要执行的程序 */
var a = 1; // 这里就是全局上下文

// 函数是天然会提升的
test();
// console.log(b);

function test() {
  // var b = undefined;
  console.log(b);
  var b = 2;
  // 产生了一个新的作用域
}

// 1. 变量提升是发生在作用域中 {}

// let、const 解决，词法环境 LexicalEnvironment，块级作用域

// console.log("🚀 ~ file: 1.let.js:64 ~ let_b:", let_b);
// let let_b = 1; // 解决了变量提升的问题

const array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
  let element = array[index]; // 1 2 3
  // let 声明的内容形成一个暂时性死区
  setTimeout(() => {
    console.log(element); // 分别是什么？
  }, 1000);
}
// 块级作用域，暂时性死区

let num = 3.14; // 解决重复声明的问题
let num = 4.5;

const PI = 3.14; // 解决常量的问题
PI = 333;

// var变量提升到全局作用域, seTimeout执行的时候已经循环执行完了，所以 i 的值是 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000);
}

// let变量不会提升到全局作用域，所以 i 的值是 0
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000);
}
