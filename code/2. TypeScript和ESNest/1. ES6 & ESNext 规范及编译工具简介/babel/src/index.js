// 我写一些 es6 的语法
const test = () => 123;

/**
 * function test() {
 *  return 123
 * }
 */

class Person {
  #age = 18;
}

const person = new Person();
console.log(person.age);

const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42
console.log("🚀 ~ file: index.js:26 ~ baz:", baz);
