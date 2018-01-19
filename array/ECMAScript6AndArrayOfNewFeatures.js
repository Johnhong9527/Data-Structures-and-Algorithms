// ECMAScript 6 和数组的新功能
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// @@iterator   返回一个包含数组键值对的迭代器对象,可以通过同步调用得到数组元素的键值对
/*let iterator = numbers[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
// .....
console.log(iterator.next()); // { value: 9, done: false }*/


// copyWithin   复制数组中一系列元素到同一数组指定的起始位置
/*
let copyArray = [1, 2, 3, 4, 5, 6];
// copyArray.copyWithin(0, 3);  // [ 4, 5, 6, 4, 5, 6 ]

// 把 4 、 5 两个值(位置3和4)复制到位置1和2
copyArray.copyWithin(1, 3, 5); // [ 1, 4, 5, 4, 5, 6 ] /!*从位置3开始到位置5结束(不包括5)的元素复制到位置1*!/
console.log(copyArray);
*/


/*// entries      返回包含数组所有键值对的 @@iterator
let aEntries = numbers.entries();
console.log(aEntries.next().value); // [0,1] -位置0的值为1
// ...... numbers 数组中都是数字, key 是数组中的位置, value 是保存在数组索引的值。
console.log(aEntries.next().value); // [7,8] -位置7的值为8*/


// includes     如果数组中存在某个元素则返回 true ,否则返回 false 。ES7新增
// console.log(numbers.includes(15));  // true
// console.log(numbers.includes(20));  // false
// or  指定索引位置
// let numbers2 = [7, 6, 5, 4, 3, 2, 1];
// console.log(numbers2.includes(4, 5)); // false

// find         根据回调函数给定的条件从数组中查找元素,如果找到则返回该元素
/*function multipleOf13(element, index, array) {
  return (element % 13 == 0) ? true : false;
}
console.log(numbers.find(multipleOf13));    // 13
console.log(numbers.findIndex(multipleOf13)); // 12*/
/*
find 和 findIndex 的不同之处在于, find 方法返回第一个满足条件的值, findIndex 方法
则返回这个值在数组里的索引。如果没有满足条件的值, find 会返回 undefined ,而 findIndex
返回 -1 。
 */


// findIndex    根据回调函数给定的条件从数组中查找元素,如果找到则返回该元素在数组中的索引


// fill         用静态值填充数组
/*let numbersCopy = Array.of(1, 2, 3, 4, 5, 6);
// numbersCopy.fill(0);  // [ 0, 0, 0, 0, 0, 0 ]
// 指定开始填充的索引
// numbersCopy.fill(2, 1); //[ 1, 2, 2, 2, 2, 2 ]
// 定结束填充的索引
numbersCopy.fill(1, 3, 5); // [ 1, 2, 3, 1, 1, 6 ]
// 创建数组并初始化值的时候
let ones = Array(5).fill('1');
console.log(typeof ones[0])*/


// from         根据已有数组创建一个新数组
/*let numbers2 = Array.from(numbers);
let evens = Array.from(numbers, x => (x % 2 == 0));  /!*[ false,true,false,true,false,true,false,true,false,true,false,true,false,true,false ]*!/
console.log(evens)*/


// keys         返回包含数组所有索引的 @@iterator
/*let aKeys = numbers.keys();
console.log(aKeys.next()) // { value: 0, done: false }
// .....一旦没有可迭代的值, aKeys.next() 就会返回一个
value 属性为 undefined , done 属性为 true 的对象。如果 done 属性的值为 false ,就意味着还有可迭代的值。
console.log(aKeys.next()) // { value: 9, done: false }*/


// of           根据传入的参数创建一个新数组
/*let numbers3 = Array.of(1); // [ 1 ]
let numbers4 = Array.of(1, 2, 3, 4, 5, 6); // [ 1, 2, 3, 4, 5, 6 ]
// 用这个方法复制已有的数组
let numbersCopy = Array.of(...numbers4); // [ 1, 2, 3, 4, 5, 6 ]*/

// values       返回包含数组中所有值的 @@iterator



