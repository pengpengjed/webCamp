// 可移植性跟着可测试性一起走
const store = {
  person: {
    name: "heyi",
    age: 18,
  },
  info: {
    desc: 'redux',
    extra: 'redux-selector'
  }
};

// 消费 store
const name = store.person.name;

// 状态的细粒度
// 因为上面这种写法，本质上还是订阅了大对象，所以我们需要细粒度的订阅
// react redux-toolkit 中的 useSelector
const name1 = useSelector((store) => store.person.name);
const info = useSelector((store) => store.info.desc)

// 我们就可以将 selector 函数单独定义
export const personNameSelector = (store) => store.person.name; // 订阅数据
export const infoDescSelector = (store) => store.info.desc //订阅信息

const name2 = useSelector(personNameSelector);
const info2 = useSelector(infoDescSelector)

// 和可测试性结合

describe("personNameSelector", () => {
  it("should return name", () => {
    const store = {
      person: {
        name: "heyi",
        age: 18,
      },
    };

    const name = personNameSelector(store);

    expect(name).toBe("heyi");
  });
});

describe('infoDescSelector', () => {
  it("should return info", () => {
    const store = {
      person: {
        name: "heyi",
        age: 18,
      },
    };

    const name = infoDescSelector(store)
    expect(name).toBe('heyi')
  })
})

// e2e 测试 端到端测试 UI 测试

const fuck = woman => `Hi ${woman}`
const date = name => fuck(name)

date('tyler') // Hi tyler

const date1 = fuck

date1('tyler') // Hi tyler


const memorize = function (fn) {
  const cache = {}

  return function () {
    const arg_str = JSON.stringify(arguments)
    cache[arg_str] = cache[arg_str] || fn.apply(fn, arguments)
    return cache[arg_str]
  }
}

