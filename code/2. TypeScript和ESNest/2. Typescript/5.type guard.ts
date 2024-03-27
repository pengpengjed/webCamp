type Woman = {
  type: "woman";
  huaZhuang: boolean;
};
type Man = {
  type: "man";
  hobby: string[];
};
type Human = Woman | Man;

// as 是做类型断言的，我说他是什么类型就是什么类型
let human: Human = {} as Human;

// 这段代码无法执行，因为此时还不知道 human 到底是男是女
// human.hobby
if (human.type === "woman") {
}
if (human.type === "man") {
}

// 所以我们通常做类型断言这样做
function isWoman(human: Human): human is Woman {
  return human.type === "woman";
}
function isMan(human: Human): human is Human {
  return human.type === "man";
}

const testIsWoman = isWoman(human) ? true : false;

interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

function isFish(animal:Cat | Fish) {
  // typeof animal.swim 类型“Cat”上不存在属性“swim”。ts(2339)
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

class ApiError extends Error {
  code: number = 0
}

class HttpError extends Error {
  statusCode: number = 200
}

function isApiError(error:Error) {
  // if(typeof (error as ApiError).code === 'number') { 
    // 还有更合适的方式instanceof
    // error: object, ApiError: constructor
  // instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
  if(error instanceof ApiError) {
    return true
  }
  return false
}

// 但是有的情况下 ApiError 和 HttpError 不是一个真正的类，而只是一个 TypeScript 的接口（interface），
// 接口是一个类型，不是一个真正的值，它在编译结果中会被删除，当然就无法使用 instanceof 来做运行时判断了：
interface IApiError extends Error {
  code: number
}
interface HttpError extends Error {
  statusCode: number
}

function ISAPIERROR(error:Error) {
  // if (error instanceof ApiError) {
    // index.ts:9:26 - error TS2693: 'ApiError' only refers to a type,
  // but is being used as a value here.

  // 此时就只能用类型断言，通过判断是否存在 code 属性，来判断传入的参数是不是 ApiError 了
  if (typeof (error as ApiError).code === 'number') {
    return true
  }
  return false
}

function getCacheData(key:string): any {
  return (window as any).cache[key]
}

interface Cat {
  name: string
  run(): void
}

// const tom = getCacheData('tom') as Cat
const tom: Cat = getCacheData('tom')
tom.run()

function getCacheDataType<T>(key:string): T {
  return (window as any).cache[key]
}

const TOM = getCacheDataType<Cat>('tom')