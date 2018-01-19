/*
* 箭头函数的作用：简化函数的语法
*
*
*
* */
// es5
/*
var circleArea = function circleArea(r) {
  var PI = 3.14;
  var area = PI * r * r;
  return area;
}
console.log(circleArea(2)); // 12.56
*/
// es6
/*let circleArea = (r) => {
  const PI = 3.14;
  let area = PI * r * r;
  return area;
};
console.log(circleArea(2)); // 12.56*/

// 进一步简化
/*let circleArea = (r) => 3.14 * r * r;
console.log(circleArea(2)); // 12.56*/
