// 只要你的项目相对比较复杂， 对于类型的推导就一定会使用 infer
// infer 一般都是配合 extends 来使用的

// 首先要明确一个点，infer 是用来做类型推导的
type Heyi = `Hello, Heyi`;
type Xiaoming = `Hello, Xiaoming`;
type Xiaofang = `Hello, Xiaofang`;

// 类型一旦被推导出来后，就可以生成新类型
// infer 就是，你在什么位置，要谁就推谁，退出来的这个类型随便取个名字
// 怎么理解呢？
// 我的 T 是不是被你的这个结构约束，如果是满足就把推断出来的类型给到，否则就不给（never）
// 三目运算符
type PickName<T> = T extends `${infer C}Hello, ${infer Name}`
  ? `${Name}-${C}-haha`
  : never;

type HeyiName = PickName<`1Hello, Heyi`>;

// 2. 推导函数的参数

type QueryFunction = (name: string, age: number) => void;

// 1. 确定推导的结构： () => void
// 2. 确定推导的位置：(infer P) => void
// 3. 三目运算符输出结果
type PickFunctionParams<T> = T extends (...args: infer P) => void ? P : never;

type Params = PickFunctionParams<QueryFunction>;
