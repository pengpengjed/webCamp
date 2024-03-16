let p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 3000);
}).then(
	res => console.log(res),
	err => console.log(err)
);

let p2 = new Promise((resolve, reject) => {
	reject('fail');
}).then(2, err => console.log(err));

let p3 = new Promise((resolve, reject) => {
	resolve(100);
})
	.then(
		res => res * 2,
		err => console.log(err)
	)
	.then(
		res => console.log(res),
		err => console.log(err)
	);

console.log(p1, p2, p3);

// 1. resolve -> fulfilled
// 2. reject -> rejected
// 3. pending -> fulfilled/rejected 不可改变
// 4. throw reject

// then
// 1. then 接收两个回调 onFulfilled onRejected
// 2. then 能够接受链式的调用 then.then
// 3. then什么时候触发？resolve reject

// 1. then返回的结果也是一个promise对象

function request(num) {
	return new MyPromise(resolve => {
		setTimeout(() => {
			resolve(num * 2);
		}, 1000);
	});
}

request(1)
	.then(res => {
		console.log(res);
	})
	.then(res1 => {
		console.log(res1);
	});

async function fn() {
	const res = await request(1);
	const res1 = await request(res);
}

// iterator

function* gen() {
	yield 1;
	yield 2;
	yield 3;
}

const g = gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
