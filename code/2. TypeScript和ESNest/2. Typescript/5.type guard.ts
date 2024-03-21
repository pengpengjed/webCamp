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
