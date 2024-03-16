(function (window) {
  let data = 'baidu.com';
  function foo() {
    console.log(`foo is ${data}`);
  }
  function bar() {
    console.log(`bar is ${data}`);
    otherFunc();
  }
  function otherFunc() {
    console.log('otherFunc apply');
  }
  window.myModule3 = { foo, bar };
})(window);
