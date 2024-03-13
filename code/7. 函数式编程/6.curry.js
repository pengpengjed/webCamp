// 闭包的一个例子
function test() {
  let num = 0; // 父作用域
  return function () {
    return (num += 1);
  };
}

const t = test();
console.log(t());
console.log(t());
console.log(t());

// 代数模型
function curry(func) {
  // 参数的长度，决定我是继续收集参数还是执行函数
  const funcArgsLen = func.length; // 获取函数参数长度
  console.log("🚀 ~ file: 6.curry.js:18 ~ curry ~ funcArgsLen:", funcArgsLen);

  // 接下来通过一个闭包来去判断你当前的函数参数达到要求——len
  return function inner(...args) {
    // 判断当前收集的参数和 func 执行所需要的参数是否相等或者多余
    if (args.length >= funcArgsLen) {
      // 直接执行
      return func(...args);
    } else {
      // 那就需要 收集 参数
      console.log("不够, 继续收集参数");
      return inner.bind(null, ...args);
    }
  };
}

// sum(a, b, c)

// sum(a)(b)(c)
// sum(a, b)(c)
// sum(a)(b, c)

const sum = (a, b, c, d) => {
  return a + b + c + d;
};

const curriedSum = curry(sum);

const res1 = curriedSum(1, 2, 3, 4);
console.log("🚀 ~ file: 6.curry.js:46 ~ res1:", res1);

const res2 = curriedSum(1, 2, 3)(4);
console.log("🚀 ~ file: 6.curry.js:49 ~ res2:", res2);

const res3 = curriedSum(1)(2)(3)(4);
console.log("🚀 ~ file: 6.curry.js:52 ~ res3:", res3);

const res4 = curriedSum(1, 2)(3, 4);
console.log("🚀 ~ file: 6.curry.js:55 ~ res4:", res4);
