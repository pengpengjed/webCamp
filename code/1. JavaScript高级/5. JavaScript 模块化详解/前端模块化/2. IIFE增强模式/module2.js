(function (window, $) {
  let data = 'baidu.com';
  function foo() {
    console.log(`foo is ${data}`);
    $(document).ready(function () {
      $('body').on({
        mouseenter: function () {
          $(this).css('background-color', 'gray');
        },

        mouseleave: function () {
          $(this).css('background-color', 'red');
        }
      });
    });
  }
  function bar() {
    console.log(`bar is ${data}`);
    otherFunc();
  }
  function otherFunc() {
    console.log('otherFunc apply');
  }
  window.myModule2 = { foo, bar };
})(window, jQuery);
