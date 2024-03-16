// 在 class 语法出现之前，原型继承
function Person(name) {
  this.name = name;

  say() {
    console.log(this.name)
  }
}

// prototype 和 __proto__ 的关系，以及指向问题
Person.prototype.hello = function() {}

// 继承的方式
// 面试被问到使用原型如何继承：寄生 + 组合
// 1. 构造器借用
// 2. 原型链继承
// 3. 寄生
// 4. 组合

const person = new Person("heyi");

person.say();



class Student {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(this.name);
  }
}

class Animal {}

// 实现继承
class HighStudent extends Student, Animal {} // 多继承

// 面向对象编程中除了继承思想，多态
// interface IStudent {} // 对于 student 的进一步抽象
