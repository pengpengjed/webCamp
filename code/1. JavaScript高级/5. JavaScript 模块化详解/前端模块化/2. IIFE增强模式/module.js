(function (window, $) {
  let data = 'www.baidu.com';
  //操作数据的函数
  function foo() {
    //用于暴露有函数
    console.log(`foo() ${data}`);
    $(document).ready(function () {
      $('body').on({
        mouseenter: function () {
          $(this).css('background-color', 'gray');
        },

        mouseleave: function () {
          $(this).css('background-color', 'red');
        },
      });
    });
  }
  function bar() {
    //用于暴露有函数
    console.log(`bar() ${data}`);
    otherFun(); //内部调用
  }
  function otherFun() {
    //内部私有的函数
    console.log('otherFun()');
  }
  //暴露行为
  window.myModule = { foo, bar };
})(window, jQuery);
