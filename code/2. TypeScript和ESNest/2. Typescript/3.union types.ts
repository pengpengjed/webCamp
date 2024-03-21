// 实际的场景，我们在封装 UI 组件库的时候
// 对于 Icon 尺寸的类型定义

// 这是一个自定义类型
// Union Type
type IconSize = "small" | "large" | "default" | number;
// small、large、default
// 数字

// 其实开源项目，社区项目对于这块的定义不一样
// 因为这个类型的值是无法在代码中使用
const iconSize = ["small", "large", "default"] as const;
// as const 是一个指定只读的操作
type I = typeof iconSize;
type BaseIconSize = (typeof iconSize)[number];
type IconSizePlus = BaseIconSize | number;

// 给你一个数组，你是不是一定指导可以 [] 来取取值
for (let i = 0; i < iconSize.length; i++) {
  const size = iconSize[i];
}

const obj = {name: 123}
// typeof 就是获取变量的类型
type CT = typeof obj
