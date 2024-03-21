let a = "string";

a.charAt(0); // 我们现在能拿到 's' ，这是一个 string 的方法

a = 1;

a.charAt(); // 这时候就会报错，因为 number 没有 charAt 方法

a = true;

a = {};

// 这种方式非常危险
