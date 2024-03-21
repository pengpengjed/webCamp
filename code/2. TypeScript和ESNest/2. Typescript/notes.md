# typescript

## 横评 jsdoc、flow、typescript（了解就够了）

一般我们在技术选型是这样考虑

- js 开发的并且不想做技术重构，jsdoc
- 新项目，typescript
- flow，因为之前 react 、Vue 他们的源代码中就是通过 flow 来去处理，js 代码

差的这口气就是知识面，举一反三才是最好的，给面试官感觉更好。

## typescript 基础（重点）

我们先从 js 说起

js 的数据类型有哪些？

- string
- number
- symbol
- boolean
- null
- undefined

- Date
- Array
- Object
- RegExp
- ArrayBuffer
- Math
- Function

- 宿主对象
  - Image

### 类型定义

我们需要对我们定义的所有数据，它的类型进行约束，因为如果不对齐进行约束，后续的代码可能修改其类型导致运行出错 —— **静态类型检查**

详细代码见：1.types.ts

> 面试题：请说说 any、unknown、never、void 的区别

- 首先我们说类型安全的问题，any 不存在类型推导
- unknown 只是在定义时暂时不指定类型，是类型安全的
- never 属于系统 bottom type
- void 一般定义在函数返回无返回时

never 既然我们一般不会直接用，那它存在的意义是什么？就是去做**类型定义**

### 自定义类型

类型定义时，推荐使用 type，而不是 interface

> 面试官会问：type 和 interface 定义类型的区别？
> 如果程序面向对象，想通过 接口的形式定义基本内容，就选用 interface，否则一般情况下建议 type，因为 type 对于类型的拓展更便捷，它支持 交叉类型、联合类型等等类型操作

### 泛型

如果你不学**泛型**，那你真的可能会 anyScript

泛型，宽泛的定义，我在做类型定义的时候，我把具体的变量类型交给外部，我只定义整个大的类型结构

```ts
const arr: Array<string> = ["1", "2"];
```

这个 Array 类型的定义我们就说他是一个宽泛的定义，具体容器里面装什么，由外部来决定

### 类型定义深入，交叉类型、联合类型

我们为了实现类型高复用，我们通常会定义一些基础类型，然后将这些类型进行组合、拼装形成新的类型

联合类型将类型进行联合，用 `|`
交叉类型将类型进行交叉，取交叉数据，用 `&`

### 类型保护

就是代码在执行的时候，会推断类型，但是可能某些时候，推断不一定能完全自动实现，我们在编写代码的时候可能就需要认为去做类型判断的处理，这个就是所谓的类型保护

### extends 和 infer 的使用
#### extends
很多只把 extends 当做了继承的方式，其实还有很多种场景需要他
extends 的用处
- 用作继承
- 用作对于泛型的约束
- 与 infer 结合做推导


#### infer
> 面试官说：我现在有一些字符串，Hello, Heyi、Hello, Xiaoming、Hello, Xiaofang，你把这个字符串中的名字给我摘出来


## 最后
大家一定要熟练定义 ts 类型，进行类型的约束与派生...
- 类型定义
- 交叉、联合等的处理
- 类型保护
- adt
- 类型工具及原理
- infer、extends 的使用
- 加强练习：https://github.com/type-challenges/type-challenges


我们 typescript 在对变量类型做控制的时候，基础内容就是借助原生类型
