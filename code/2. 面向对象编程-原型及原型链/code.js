// 基本类型和引用类型
/* 
  所有的函数的参数都是按值传递
*/
// 1.按值传递, 函数内部拷贝值, 不会改变外部变量, 只会改变堆中函数内部的变量
var value = 1;
function foo(v) {
  v = 2;
  console.log(v); //2
}
foo(value);
console.log(value); // 1

// 2.共享传递(引用类型), 指针拷贝(堆的地址索引)
var obj = {
  value: 1
};
function foo(o) {
  o.value = 2;
  console.log(o.value); //2
}
foo(obj);
console.log(obj.value); // 2

// Fucntion.prototype.call(): 在使用一个指定的this和若干个指定的参数值调用某个参数
let foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.call(foo);

// 等同于
/* 
  let foo = {
    value: 1,
    bar: function() {
        console.log(this.value)
    }
  };

  foo.bar(); // 1

  1. foo.fn = bar
  2. foo.fn()
  3. delete foo.fn
*/

Function.prototype.call2 = function (context) {
  // 首先要获取被调用的函数, 用this可以获取
  context.fn = this;
  context.fn();
  delete context.fn;
};

bar.call2(foo)

// 支持多参数
Function.prototype.call3 = function (context) {
  context.fn = this;
  let arg = [...arguments].slice(1);
  context.fn(...arg)
  delete context.fn;
};

// 测试一下
var foo = {
  value: 1
};

function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
}

bar.call3(foo, 'kobe', 24)

// 支持函数执行后返回结果
Function.prototype.call4 = function (context) {
  const CONTEXT = context || window
  CONTEXT.fn = this;
  let arg = [...arguments].slice(1);
  const res =  context.fn(...arg)
  delete CONTEXT.fn;
  return res
}

// final edition
Function.prototype.PPcall = function (context, ...arguments) {
  if(typeof context === 'undefined' || context === null) {
    context = window
  }
  let fnSymbol = Symbol()
  context[fnSymbol] = this
  let fn  = context[fnSymbol](...arguments)
  delete context[fnSymbol]
  return fn
}

/* 
  bind() 方法会创建一个新函数。
  当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，
  之后的一序列参数将会在传递的实参前传入作为它的参数。
*/
var obj = {
  value: 2
}

function FN() {
  console.log(this.value)
}

Function.prototype.bind2 = function(context) {
  const _this = this
  return function () {
    return _this.apply(context)
  }
}
