// node环境
const babel = require("@babel/core");
// const arrowFunctionTransformer = require("@babel/plugin-transform-arrow-functions");
// const optionalChainingTransformer = require("@babel/plugin-transform-optional-chaining");
// const privateMethodsTransformer = require("@babel/plugin-transform-private-methods");
const presetEnv = require("@babel/preset-env");

// 代码的本质就是字符串
const code = `
const heyi = '帅哥'
const test = () => 123;

class Person {
  #age() {};
}

const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42
`;

// 你转化的时候，没有使用特殊插件
// 我们兼容低版本，需要结合 plugin + polyfill
// 微内核（插件化机制）
const shitPlugin = {
  // 访问者模式，游历
  visitor: {
    // VariableDeclaration(path) {
    //   path.node.name = "haha";
    //   // console.log(path.node);
    // },
    Literal(path) {
      if (path.node.value === "帅哥") {
        path.node.value = "cuoren";
      }
      // console.log(path.node);
    },
    // ArrowFunctionExpression(path) {
    //   path.node.name = "heyi";
    //   console.log(path.node.name);
    // },
  },
};
const result = babel.transform(code, {
  // plugins: [
  //   arrowFunctionTransformer,
  //   optionalChainingTransformer,
  //   privateMethodsTransformer,
  // ],
  plugins: [shitPlugin],
  // presets: [presetEnv],
});
// plugins 太多，会写到手软
// 就把多个 plugin 打包，打包后的东西我们叫：preset

// plugin -> presets

console.log(result.code);

// 二叉树的遍历，游历
// 后序遍历
//    +
// 1     1
