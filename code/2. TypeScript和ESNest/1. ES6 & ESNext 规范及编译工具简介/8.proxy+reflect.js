// // Vue2 的响应式
// const obj = {
//   name: "heyi",
// };
// const you = {
//   type: "搓",
// };
// Object.defineProperty(obj, "age", {
//   get() {
//     if (you.type === "shuaige") {
//       return 18;
//     }
//     return "保密";
//   },
//   set() {},
// });

// // 对象属性的劫持
// console.log(obj.age);

const person1 = {
  name: 'peng'
}

const proxy1 = new Proxy(person, {
  get(target, key) {
    if(key === 'age') {
      return '保密'
    }
  },
  set(target, key, value) {
    // target[key] = value
    Reflect.set(target, key, value)
  }
})

const person = {
  name: "heyi",
};

// 代理做对象相关内容的劫持
const proxy = new Proxy(person, {
  get(target, key) {
    if (key === "age") {
      return "保密";
    }
  },
  set(target, key, value) {
    // target[key] = value; // 这样给对象的属性复制的
    // Object.assign
    // 主角
    Reflect.set(target, key, value);
    Reflect.defineProperty(target, 'hobby', {
      value: '抽烟',
      enumerable: true
    })
    // Reflect.defineProperty(target, "hobby", {
    //   value: "抽烟",
    //   enumerable: true,
    // });
  },
});

Reflect.defineProperty(person, "hobby", {
  value: "抽烟",
  enumerable: true,
});

console.log(proxy.age);
proxy.age = 18;
console.log(proxy);

// 1. 解耦，从以前关心对象细节变成不需要关注对象具体实现
// 2. 机制有关
// 3. 注解 nestjs，MetaData
