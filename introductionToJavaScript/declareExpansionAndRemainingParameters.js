/*声明展开和剩余参数*/
let sum = (x = 1, y = 2, z = 3) => x + y + z;
var params = [3, 4, 5];
console.log(sum(...params)); // 12
//es5
console.log(sum.apply(undefined, params)); // 12
// ... 展开操作符
/*es5*/
/*function restParamaterFunction(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length
}
console.log(restParamaterFunction(introductionToJavaScript, 2, 'hello', true, 7)); // 9*/
/*es6*/
/*
let restParamaterFunction = (x, y, ...a) => (x + y) * a.length;
console.log(restParamaterFunction(introductionToJavaScript, 2, 'hello', true, 7)); // 9*/
