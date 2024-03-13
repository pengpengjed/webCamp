class MyPromise {
	constructor(executor) {
		this.initValue();
		this.initBind();
		try {
			executor(this.resolve, this.reject);
		} catch (e) {
			this.reject(e);
		}
	}

	// 1.实现Promise 状态 以及结果
	initValue() {
		this.PromiseStatus = 'pending';
		this.PromiseResult = null;
		this.onFulfilledCallbacks = []; // 保存执行成功的回调
		this.onRejectedCallbacks = []; // 保存执行失败的回调
	}

	// 2. 指向this到实例
	initBind() {
		this.resolve = this.resolve.bind(this);
		this.reject = this.reject.bind(this);
	}

	resolve(value) {
		if (this.PromiseStatus !== 'pending') return;
		this.PromiseResult = value;
		this.PromiseStatus = 'fulfilled';
		while (this.onFulfilledCallbacks.length) {
			this.onFulfilledCallbacks.shift()(this.PromiseResult);
		}
	}

	reject(reason) {
		if (this.PromiseStatus !== 'pending') return;
		this.PromiseResult = reason;
		this.PromiseStatus = 'rejected';
		while (this.onRejectedCallbacks.length) {
			this.onRejectedCallbacks.shift()(this.PromiseResult);
		}
	}

	then(onFulfilled, onRejected) {
		// 参数校验，确保then的两个参数都是函数
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
		onRejected =
			typeof onRejected === 'function'
				? onRejected
				: reason => {
						throw reason;
				  };

		const thenPromise = new MyPromise((resolve, reject) => {
			const resolvePromise = cb => {
				try {
					const x = cb(this.PromiseResult);

          if (x === thenPromise) {
            throw new Error('cannot be self')
          }

					// x 也是一个promise
					if (x instanceof MyPromise) {
						x.then(resolve, reject);
					} else {
						resolve(x);
					}
				} catch (err) {
					reject(err);
				}
			};

			if (this.PromiseStatus === 'fulfilled') {
				resolvePromise(onFulfilled);
			} else if (this.PromiseStatus === 'rejected') {
				resolvePromise(onRejected);
			} else if (this.PromiseStatus === 'pending') {
				this.onFulfilledCallbacks.push(resolvePromise(onFulfilled));
				this.onRejectedCallbacks.push(resolvePromise(onRejected));
			}
		});

		return thenPromise;
	}
}
