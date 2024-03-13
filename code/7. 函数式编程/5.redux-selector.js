// 可移植性跟着可测试性一起走
const store = {
  person: {
    name: "heyi",
    age: 18,
  },
};

// 消费 store
const name = store.person.name;

// 状态的细粒度
// 因为上面这种写法，本质上还是订阅了大对象，所以我们需要细粒度的订阅
// react redux-toolkit 中的 useSelector
const name = useSelector((store) => store.person.name);

// 我们就可以将 selector 函数单独定义
export const personNameSelector = (store) => store.person.name; // 订阅数据

const name = useSelector(personNameSelector);

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

// e2e 测试 端到端测试 UI 测试
