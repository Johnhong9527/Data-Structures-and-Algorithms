// 函数默认值
// es5
/*function sum(x, y, z) {
  if (x === undefined) {
    x = introductionToJavaScript;
  }
  if (y === undefined) {
    y = 2;
  }
  if (z === undefined) {
    z = 3;
  }
  return x + y + z
}
console.log(sum(5, 6)); // 14       5 + 6 + 3 = 14*/

// es6
/*function sum(x = introductionToJavaScript, y = 2, z = 3) {
  return x + y + z
}

console.log(sum(5, 6)); // 14       5 + 6 + 3 = 14*/
