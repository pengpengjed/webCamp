// 请求可以有几种形式处理
// ajax
// fetch
// 三方库，axios

// const url = "http://localhost:3000";

// // 基于 promise
// fetch(url, {
//   method: "GET",
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("🚀 ~ file: fetch.js:1 ~ data:", data);
//   });

class HeyiFetchInterceptorManager {
  // 拦截器池子
  // AOP
  // webpack 中，插件化机制
  // vue、Pinia 等等插件化机制都是类似的思路实现
  interceptors = [];

  use(callback) {
    this.interceptors.push(callback);
  }
}

class HeyiFetch {
  // 拦截器池子
  interceptors = {
    request: new HeyiFetchInterceptorManager(),
    response: new HeyiFetchInterceptorManager(),
  };

  ctx = {};

  get(url, config) {
    // 先处理拦截器的逻辑，然后才真正执行我内部请求的逻辑
    // 这个拦截器的逻辑就是相当于切面的东西
    // 1. 先处理请求拦截器
    this.interceptors.request.interceptors.forEach((callback) => {
      callback(ctx, config);
    });

    return fetch(url, {
      ...ctx,
      method: "GET",
    }).then((res) => {
      // 2. 处理响应拦截器
      this.interceptors.response.interceptors.forEach((callback) => {
        callback(res);
      });

      return res.json();
    });
  }

  post(url, config) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// 需要一个基座
// 创建一个请求实例
const createHeyiFetch = (options) => {
  return new HeyiFetch(options);
};

// 得到 request 实例
const heyiIns = createHeyiFetch();

// 我们知道实例上有一些方法和属性，供我们拓展其方法
// 面向切面编程，我们要对实例进行改造和拓展，我们不会自己一股脑去写，而是给外部提供可操作性的路径
// 将拓展的任务交给外部

// 1. 拦截器
// 我现在没有关注 context
heyiIns.interceptors.request.use((config) => {
  console.log("🚀 ~ file: 第一个请求拦截器:", config);
  return config;
});
heyiIns.interceptors.request.use((config) => {
  console.log("🚀 ~ file: 第二个请求拦截器:", config);
  return config;
});

heyiIns.interceptors.response.use((config) => {
  console.log("🚀 ~ file: 第一个响应拦截器:", config);
  return config;
});

heyiIns.get("http://localhost:3000").then((data) => {
  console.log("🚀 ~ file: fetch.js:1 ~ data:", data);
});
