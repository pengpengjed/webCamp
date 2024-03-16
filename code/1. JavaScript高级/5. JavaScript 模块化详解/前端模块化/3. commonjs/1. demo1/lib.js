var x = 5;
var addX = function (value) {
  return value + x;
};

// module当前模块 
// module.exports 模块的exports属性, 对外接口
// 加载某个模块就是加载该模块的 module.exports

// module.exports.x = x;
// module.exports.addX = addX;
module.exports.x = x
module.exports.addX = addX
