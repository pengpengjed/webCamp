/*
 * @Author: zhangyupeng zhangyupeng@haotaisoft.com
 * @Date: 2024-03-13
 * @LastEditors: zhangyupeng zhangyupeng@haotaisoft.com
 * @LastEditTime: 2024-03-15
 * @FilePath: \webCamp\code\7. 函数式编程\4.useCallback.js
 * @Description:
 */
// 在 react 里面，useCallback 用来缓存函数
const useCallback = (callback, deps) => {
  const memoized = {};

  // let key = "";
  // deps.forEach((dep) => {
  //   key += dep;
  // });

  // console.log("🚀 ~ file: 4.useCallback.js:12 ~ useCallback ~ key:", key);

  // 柯里化
  return (...args) => {
    let key = `${callback.name}-key-`;

    args.forEach((arg) => {
      key += arg;
    });

    console.log('🚀 ~ file: 4.useCallback.js:21 ~ return ~ memoized:', memoized);
    if (!memoized[key]) {
      console.log('之前没有缓存', key);
      memoized[key] = callback(...args);
    }

    return memoized[key];
  };
};

// 需要缓存的函数
const fn = (a, b) => {
  return a + b;
};

// 缓存函数
const memoizedFn = useCallback(fn);

// 调用
const res = memoizedFn(1, 2);
console.log('🚀 ~ file: 4.useCallback.js:29 ~ res:', res);
const res2 = memoizedFn(1, 3);

const res3 = memoizedFn(1, 2);

const useCallBack = (callback, deps) => {
  const memorized = {};

  /* let key = ''
  const depsValue = deps.forEach((dep) => {
    key += dep
  }) */

  // 柯里化
  return (...args) => {
    let key = '';
    args = args.forEach((arg) => {
      key += arg;
    });
    if (!memorized[key]) {
      console.log("之前没有缓存",key);
      memorized[key] = callback(...deps);
    }

    return memorized[key];
  };
};

const fn2 = (a, b) => {
  return a + b;
};

const memorizedFn = useCallBack(fn2, [1, 2]);

const res1 = memorizedFn(1, 2);

console.log(res1);
