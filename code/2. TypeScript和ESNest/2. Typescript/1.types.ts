// 类型约束
// 约束一个 string，注意写法，:type

let cname: string = "Heyi";

let age: number = 123;

let flag: boolean = true;

let date: Date = new Date();

// 为什么还是不行
// 有些类型是一个容器，容器用来装其他类型的数据
// 我要定义一个字符串数组
// 我要定义一个数字数组
// 我们通过泛型来取解决这个问题，泛型中的类型用来决定你这个容器中的类型
let arr: Array<number> = [1, 2, 3];

// ts 中的几个特殊类型
// any 类型
let c: never[] = [];
let anyData: any = 123;
anyData = "sdfsd";
anyData = true;
anyData = new Date();

const c0 = c[0];
anyData = c[0];
// 大家从上面都可以看到 any 其实没有对类型形成严格约束
// anyScript

// never
const na: Array<never> = []
let n: never = na[0];

// unknown

// void
// 函数没有返回值

function test() {

}

function test2() {
  return undefined
}
