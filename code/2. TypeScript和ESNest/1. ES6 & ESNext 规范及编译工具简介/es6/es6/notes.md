# ES 6 & ESNext 及编译工具详解

- let、const
- es6（es13） 新特性
- 异步的问题
- 箭头函数
- class
- 模板字符串
- generator
- proxy + reflect（Vue3 响应式源码）

## let、const

变量作用域、执行上下文、暂时性死区

- 变量提升
- 重复声明
- 变量污染
- 常量

babel 自定义一个 myConst
typescript，静态类型检查

## class

## 字符串模板

1. 灵活拼接
2. 参数传递使用
3. tagged template 方式

## 解构

## 箭头函数

相对于普通函数的区别

1. this 指向父级作用域，没有自己的 this 指向
2. 不能作为构造函数
3. 无法访问 arguments，...args
4. 无法更改 this 指向，不能用 call、bind、apply

## 迭代器

一层一层走进她的心

## 异步

- promise 规范（三个状态）
- 手写题，Promise.resolve
- 事件循环

## proxy、reflect
