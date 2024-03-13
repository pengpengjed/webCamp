// 1 纯
function sum1(a, b) {
  return a + b;
}

let c = 0;
// 2 不是，因为依赖外部数据
function sum2(a) {
  return a + c;
}

const res1 = sum2(1); // 1
console.log("🚀 ~ file: 3.pure.js:13 ~ res1:", res1);

c = 100;

const res2 = sum2(1); // 1 ?
console.log("🚀 ~ file: 3.pure.js:17 ~ res2:", res2);

// 3 不是
function sum3(a) {
  return a + Math.random();
}

const res3 = sum3(1);
console.log("🚀 ~ file: 3.pure.js:24 ~ res3:", res3);

sum1 = function (a, b) {
  return a * b;
};
// 4
function sum4(a, b, c) {
  return sum1(a, b) + c;
}

const res4 = sum4(1, 2, 3);
console.log("🚀 ~ file: 3.pure.js:37 ~ res4:", res4);

// 5 是吗？
async function sum5(a) {
  const b = await fetch("b"); // 异步操作

  return a + b;
}
// 单独拆出 service 层做数据处理
// 数据到 UI 之间是确定的

// 服务层
const service = {
  fetchUser() {
    return fetch("user");
  },
};

// 服务层2
const service2 = {
  fetchDept() {
    return fetch('dept')
  }
}

// 状态处理层
const useUser = () => {
  const [user, setUser] = useState()

  // 处理副作用
  useEffect(() => {
    service.fetchUser().then((res) => setUser(res.json()))
  }, [])

  return user;
}

// 状态处理层2
const useDept = () => {
  const [dept, setDept] = useState()

  useEffect(() => {
    service2.fetchDept().then((res) => setDept(res.json()))
  
    return () => {
      
    }
  }, [])

  return dept
  
}

// UI 层
function render() {
  const user = useUser()
  // 渲染
}

// UI 层2
function render2() {
  const dept  = useDept()
  return (
    <div>{dept}</div>
  )
}


// 异步
async function fetchUser() {}

// 我在其他方法调用 fetchUser
async function sayHello() {
  const user = await fetchUser()

  console.log(user.name);

  return 'done'
}

async function component() {
  const res = await sayHello()
}




<template>
  <div>{{user.name}}</div>
</template>
<script setup>
  const user = useUser();

  {/* 副作用监听 */}
  watchEffect
</script>
