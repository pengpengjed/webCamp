const name = "heyi";
const age = 18;

// 大家不要学！！！！
const str = "hello" + name + "world" + age;

// 大家不要学！！！
const html = "<div>" + "<p>1</p>" + "</div>";

// 急需字符串模板
const htmlStr = `
  <div>
    <div>
      <p>${name}</p>
      <p>${age}</p>
    </div>
  </div>
`;
