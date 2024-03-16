const person = {
  name: "heyi",
};

const { name } = person;

function test({ name }) {}

function test2(...args) {}

const [a, b, c] = [1, 2, 3];

// 引擎背后
const tempArray = [1, 2, 3];
const a = tempArray[0];
const b = tempArray[1];
const c = tempArray[2];

const person = {
  info: {
    name: "heyi",
  },
  hobby: ["抽烟", "喝酒"],
};

const {
  info: { name },
  hobby: [hobby1],
} = person;
