// -----原型/原型链-----
function person() {
  
}

const newPerson = new person()
newPerson.name = 'name'

console.log(newPerson.name)

person.prototype.name = 'peng'

const person1 = new person()
const person2 = new person()

console.log(newPerson.__proto__ === person.prototype)

console.log(person.prototype.consturctor === person)

console.log(Object.getPrototypeOf(newPerson) === person.prototype)

/* 当获取 person.constructor 时，其实 person 中并没有 constructor 属性,
  当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，
  正好原型中有该属性，所以： 
*/
console.log(newPerson.consturctor === person)
console.log(newPerson.consturctor === person.prototype.consturctor)


// -----词法作用域和动态作用域-----
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

// 结果是 1
/* 
  js是静态作用域, 先从foo函数内部查找是否有局部变量value, 没有的话
  就根据foo位置查找上一层的代码, var value = 1;, 结果是1
*/

// case 1
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

// case 2
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
// 因为静态作用域, 函数执行时没有找到变量, 都去上一层查找

function foo() {

  console.log('foo1');

}

foo();  // 返回什么? foo2

function foo() {

  console.log('foo2');

}

foo(); // 返回什么? foo2
// 用函数式语句创建的函数add2, 函数名和函数体均被提前, 在声明它之前就使用它

const ECStack = [
  globalContext
];

// 模拟checkscope()();
/* ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop(); */

function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);

// 进入执行上下文
/* AO = {
  argumoments: [
    0: 1,
    length: 1
  ],
  a: 1,
  b: undefined,
  c: reference to function c(){}
  d: undefined
} */

// 代码执行
/* 
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}
*/