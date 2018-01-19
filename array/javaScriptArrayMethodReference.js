/*JavaScript 的数组方法参考*/
// concat 连接2个或更多数组,并返回结果
/*
var zero = 0;
var positiveNumber = [1, 2, 3];
var negativeNumber = [-1, -2, -3];
var number1 = negativeNumber.concat(zero, positiveNumber);
var number2 = negativeNumber.concat(positiveNumber);
console.log(number1); // [ -1, -2, -3, 0, 1, 2, 3 ]
console.log(number2); // [ -1, -2, -3, 1, 2, 3 ]
*/


// every 对数组中的每一项运行给定函数,如果该函数对每一项都返回 true ,则返回 true
/*迭代器函数*/
let isEvery = (x) => x % 2 == 0;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
/*console.log(numbers.every(isEvery));*/


// filter 对数组中的每一项运行给定函数,返回该函数会返回 true 的项组成的数组
/*var evenNumbers = numbers.filter(isEvery);
console.log(evenNumbers); //[ 2, 4, 6, 8, 10, 12, 14 ]*/


// forEach 对数组中的每一项运行给定函数。这个方法没有返回值
/*numbers.forEach(function (x) {
  console.log((x % 2 == 0));
});
// 使用 forEach 和箭头函数迭代
numbers.forEach(function (x) {
  console.log(x)
})
numbers.forEach(x => {
  console.log((x % 2 == 10))
})
for (let n of numbers) {
  console.log(n)
  console.log((n % 2 == 0) ? 'even' : 'odd');
}*/

// join 将所有的数组元素连接成一个字符串
// let numbersString = numbers.join('-');
// console.log(numbersString) /*1-2-3-4-5-6-7-8-9-10-11-12-13-14-15*/

// indexOf 返回第一个与给定参数相等的数组元素的索引,没有找到则返回-1
// console.log(numbers.indexOf(10));  // 9
// console.log(numbers.indexOf(100)); // -1

// lastIndexOf 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值


// map 对数组中的每一项运行给定函数,返回每次函数调用的结果组成的数组
/*var myMap = numbers.map(isEvery);
console.log(myMap);*/


// reverse 颠倒数组中元素的顺序,原先第一个元素现在变成最后一个,同样原先的最后一个元素变成了现在的第一个
// numbers.reverse(); // [ 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// slice 传入索引值,将数组里对应索引范围内的元素作为新数组返回


// some 对数组中的每一项运行给定函数,如果任一项返回 true ,则返回 true
/*console.log(numbers.some(isEvery));*/


// sort 按照字母顺序对数组排序,支持传入指定排序方法的函数作为参数
/*// numbers.sort(); // [ 1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9 ]
numbers.sort(function (a, b) {
  // return b-a  // [ 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
  // return a - b  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
})
console.log(numbers);*/

// 自定义排序
/*let friends = [
    {name: 'John', age: 30},
  {name: 'Ana', age: 20},
  {name: 'Chris', age: 25}
];

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1
  }
  if (a.age > b.age) {
    return 1
  }
  return 0;
}

friends.sort(comparePerson);*/
/*[ { name: 'Ana', age: 20 },{ name: 'Chris', age: 25 },{ name: 'John', age: 30 } ]*/

// 字符串排序
/*var names =['Ana', 'ana', 'john', 'John'];
// console.log(names.sort());
//忽略大小写的比较函数
let nName = names.sort(function(a, b){
  if (a.toLowerCase() < b.toLowerCase()){
    return -1
  }
  if (a.toLowerCase() > b.toLowerCase()){
    return 1
  }
  return 0;
});
console.log(nName) //[ 'Ana', 'ana', 'john', 'John' ]*/


// toString 将数组作为字符串返回
// console.log(numbers.toString()); // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

// valueOf 和 toString 类似,将数组作为字符串返回

// reduce
/*
reduce 方 法 接 收 一 个 函 数 作 为 参 数 , 这 个 函 数 有 四 个 参 数 :
previousValue 、 currentValue 、 index 和 array 。这个函数会返回一个将被叠加到累加器的
值, reduce 方法停止执行后会返回这个累加器。如果要对一个数组中的所有元素求和,这就很
有用
 */
/*

let sumN = numbers.reduce(function (previous, current, index, array) {
  // console.log(previous)
  // console.log(current)
  // console.log(index)
  // console.log(array)
  return previous + current;
});
console.log(sumN) // 120*/
