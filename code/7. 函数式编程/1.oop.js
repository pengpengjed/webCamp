// 命名空间
const utils = {
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b
  }
};

// 模块化
utils.sum(1, 2);
utils.sub(0, -1)

const jq = {
  ready(fn) {
    document.addEventListener("DOMContentLoaded", () => {
      fn();
      return this
    })
  },
  on(el, type, fn) {
    el.addEventListener(type, fn)
    return this
  },
  off(el, type, fn) {
    el.removeEventListener(type, fn)
    return this
  },
  ajax(url, options) {
    const xhr = new XMLHttpRequest()
    xhr.open(options.method, url, true)
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        options.success(xhr.responseText);
      } else {
        options.fail(xhr);
      }
    }
    xhr.send()
  }
}

jq.ready(() => {
  console.log('加载完毕')
  jq.on(document.body, 'click', () => {
    console.log('点击了body')
  }).ajax("https://api.github.com/users/ruanyf", {
    method: "GET",
    success(data){
      console.log("请求成功", data);
    },
    fail(xhr) {
      console.log("请求失败", xhr);
    }
  })
})

const $ = {
  // 用于监听 DOMContentLoaded 事件
  ready(fn) {
    document.addEventListener("DOMContentLoaded", () => {
      fn();
      return this; // 链式调用 ctx（上下文 this 指向）
    });
  },
  // 绑定事件的函数
  on(el, type, fn) {
    el.addEventListener(type, fn);
    return this;
  },
  // 解绑事件的函数
  off(el, type, fn) {
    el.removeEventListener(type, fn);
    return this;
  },
  // ajax
  ajax(url, options) {
    const xhr = new XMLHttpRequest();

    xhr.open(options.method, url, true);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        options.success(xhr.responseText);
      } else {
        options.fail(xhr);
      }
    };

    xhr.send();
  },
};


// 使用
$.ready(() => {
  console.log("加载完毕");

  $.on(document.body, "click", () => {
    console.log("点击了 body");
  }).ajax("https://api.github.com/users/ruanyf", {
    method: "GET",
    success(data) {
      console.log("请求成功", data);
    },
    fail(xhr) {
      console.log("请求失败", xhr);
    },
  });
});

// 面向对象
// 最核心的内容：属性和方法
class Person {
  constructor() {}

  say() {}

  walk() {}
}

class Student {
  constructor() {}
  study() {}
  sleep() {}
}
const stu1 = new Student()

const person = new Person(); // es6 语法，原型继承


// 属性跟方法虽然能达到封装的目的，实现封闭
// 有时候我们需要灵活的组装
// React
class App extends ClassComponent {
  constructor(props) {
    super(props);
    this.state = { // 这块负责数据（状态）
      name: 'app'
    }
  }

  render() { // 这块负责 UI
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

class App extends ClassComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: 'app'
    }
  }

  render() {
    return (
      <div>{this.state.name}</div>
    )
  }
}

// Vue2
// 这个写法一般只在我们教学的时候讲，实际开发都是使用：SFC（single file component）xxx.vue
new Vue({
  data() {
    return {
      name: 'app'
    }
  },
  render() {
    return (
      <div>
        <p>{this.name}</p>
      </div>
    )
  }
})

new Vue({
  data() {
    return {
      name: 'app'
    }
  },
  render() {
    return(
      <div>
        {this.name}
      </div>
    )
  }
})

<template>
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
</script>
<style></style>
