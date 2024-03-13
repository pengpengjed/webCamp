let test = {
	name: 'chenghuai',
};

test = [1, 2, 3];

// 栈 堆
// test -> {name：chenghuai}
// test -> [1, 2, 3]

// 可达性
// 定期找到不用的内存空间

function test() {
  let A = new Object()
  let B = new Object()

  A.b = B
  B.a = A
}


// 1. GUI渲染线程 HTML -> DOM +  CSS -> CSSOM -> render tree repainting reflow  重绘 回流
// 2. JS引擎线程
// 3. 事件触发线程 task queue addEventListener
// 4. 定时器触发线程 setTimeout setInterval
// 5. 异步http request 请求线程 XMLHttpRequest

let setTimeoutCallBack = function () {
	console.log('我是定时器回调');
};
let httpCallback = function () {
	console.log('我是http请求回调');
};

// 同步任务
console.log('我是同步任务1');

// 异步定时任务
setTimeout(setTimeoutCallBack, 1000);

// 异步http请求任务
ajax.get('/info', httpCallback);

// 同步任务
console.log('我是同步任务2');



window.open();

document.body.style = 'background:black';
document.body.style = 'background:red';
document.body.style = 'background:blue';
document.body.style = 'background:pink';

document.body.style = 'background:blue';
setTimeout(() => {
	document.body.style = 'background:black';
}, 200);



function test() {
	console.log(1);
	setTimeout(function () {
		// timer1
		console.log(2);
	}, 1000);
}

test();

setTimeout(function () {
	// timer2
	console.log(3);
});

new Promise(function (resolve) {
	console.log(4);
	setTimeout(function () {
		// timer3
		console.log(5);
	}, 100);
	resolve();
}).then(function () {
	setTimeout(function () {
		// timer4
		console.log(6);
	}, 0);
	console.log(7);
});

console.log(8);