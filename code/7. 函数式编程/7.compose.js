// 用来处理中间件逻辑
// redux 中有一段核心源码，applyMiddleware
// 实现洋葱模型

// const interceptors = [(req) => xxx, (req) => yyy,(req) => zzz]

// axios.request.interceptor.use()
// axios.request.interceptor.use()
// axios.request.interceptor.use()

// interceptor.applyMiddleware(interceptors)

/**
 * enter xxx
 * enter yyy
 * enter zzz
 *
 * exit  zzz
 * exit  yyy
 * exit  xxx
 */

const store = {};

const interceptors = [
  // 用来处理错误的
  (req) => {
    console.log(11, req);
    return 1;
  },
  // 这里处理更改 store 中的 name
  (req) => {
    store.person = {
      name: "合一",
    };
    console.log(22, req);
    return 2;
  },
  // 用来处理日志
  (req) => {
    console.log(33, req);
    console.log("[INFO]: ", "xxx");
    return 3;
  },
  (req) => {
    console.log(44, req);
    return 4;
  },
];

function compose(...funcs) {
  // 第一步判断参数长度
  // 如果没有参数
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  // 如果有一个参数
  if (funcs.length === 1) {
    return funcs[0];
  }

  // 处理复杂场景
  return funcs.reduce((prevFuncs, curFunc) => {
    return (...args) => {
      // 创一个新函数用来处理结果
      return prevFuncs(curFunc(...args)); // 包成了洋葱
    };
  });
}

const fn = compose(...interceptors);

console.log(fn(1));
console.log(store);
