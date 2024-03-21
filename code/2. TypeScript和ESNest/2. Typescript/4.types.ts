// type Woman = {};
// type Man = {};
// type Human = Woman | Man;

type BaseButton = {};

// 交叉类型
// 基础类型按钮的定义
// 基础类型按钮不同在一些小的配置上面，我们通过他的配置添加到基础类型按钮上面
type PrimaryButton = BaseButton & {
  type: "primary";
};

// 危险按钮的定义
type DangerButton = BaseButton & {
  type: "danger";
};

// 类型组合，他和 interface 继承有很大区别
// 利于类型推导
// adt：https://github.com/pfgray/ts-adt（）作为了解

// 如果后续你需要用大量的类型组合，你可以考虑使用交叉类型而不是 interface 继承
