// function program
{
  /* <template>
  <div>{{name}}</div>
</template>
<script>
export default {
  // vue 状态
  data() {
    return {
      name: 'app'
    }
  },
  methods: {
    // vue 方法
    change() {
      this.name = 'change'
    }
  },
}
</script> */
}

// 假设我们现在将状态和 UI 渲染的逻辑分离
// 状态集的逻辑
const statesGenerator = () => {
  // 状态集
};
// UI 渲染逻辑
const render = () => {
  // 渲染
};

const component = () => {
  const states = statesGenerator();

  render(states);
};

// 组合模式
// 函数式编程的核心思想就是组合
// 对象的复用 —— 继承（封装、继承、多态）



// Vue3 写法
<template>{{state.name}}</template>
<script>
  const state = useUser(); // 状态的逻辑处理外部实现（hook 实现）
</script>
