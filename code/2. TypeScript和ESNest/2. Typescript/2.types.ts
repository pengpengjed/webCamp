// 如果我们要定义一些 ts 中不存在的类型，我们应该怎么做呢？
// ts 自定义类型，type（自定义类型）、interface（接口）

// 我们可以理解为 string 是实参
const array: Array<string> = ["1", "2"];

// 定义自定义类型
// 声明一个 类型形参，大家告诉我，形参叫什么重不重要
type Person<T> = {
  name: string;
  age: number;
  // 可选属性
  hobby?: T;
  consoleHobby?: (hobby: T) => void;
};
// 另外一个方式定义
// interface Person2 {
//   name: string;
//   age: number;
//   hobby?: unknown;
// }

const p: Person<Array<string>> = {
  name: "heyi",
  age: 18,
  hobby: ["1", "2"],
  consoleHobby(hobby) {
    hobby.map((h) => {});
  },
};

const a1: Array<string> = ["1", "2"];
// 写这个
const a2: string[] = ["1", "2"];
// 编译器相关

// 实战，定义响应参数类型
type ResponseData<T> = {
  code: number;
  message: string;
  success: boolean;

  data: T;
};

type RequestData<D, C> = {
  spaceId: string;
  userId?: string;
  data: D;
  config: C;
};

const responseData: ResponseData<Array<string>> = {
  code: 0,
  message: "success",
  success: true,
  data: ["1", "2"],
};

const responseData2: ResponseData<{
  name: string;
  age: number;
  hobby?: string[];
}> = {
  code: 0,
  message: "success",
  success: true,
  data: {
    name: "heyi",
    age: 18,
    hobby: ["1", "2"],
  },
};
