// 1 es6 独立函数
function quick_sort(arr) {
  let len = arr.length;
  if (len <= 1)
    return arr;
  let left = [], right = [], mid = [arr[0]];
  for (let i = 1; i < len; i++)
    if (arr[i] < mid[0])
      left.push(arr[i]);
    else
      right.push(arr[i]);
  return [...quick_sort(left), mid[0], ...quick_sort(right)]
}
// 2 类中内置函数
class sort {
  constructor() {
    this.array = []
  }
  quick_sort() {
    let len = this.array.length;
    if (len <= 1)
      return this.array.slice(0);
    let left = [],
      right = [],
      mid = [this.array[0]];
    for (let i = 1; i < len; i++)
      if (this.array[i] < mid[0])
        left.push(this.array[i])
      else
        right.push(this.array[i])
    return left.sort().concat(mid.concat(right.sort()));
  }
}
// 3 es5原形扩展
Array.prototype.quick_sort = function() {
  var len = this.length;
  if (len <= 1)
    return this.slice(0);
  var left = [];
  var right = [];
  var mid = [this[0]];
  for (var i = 1; i < len; i++)
    if (this[i] < mid[0])
      left.push(this[i]);
    else
      right.push(this[i]);
  return left.quick_sort().concat(mid.concat(right.quick_sort()));
};

/*调试*/
var arr = [16, 5, 17, 10, 18, 3, 14, 20, 7, 13, 4, 19, 1, 12, 9, 11, 8, 6, 15, 2];
console.log(quick_sort(arr));