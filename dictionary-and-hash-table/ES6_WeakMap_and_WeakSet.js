/*
1.WeakSet 或 WeakMap 类没有 entries 、 keys 和 values 等方法;
2.只能用对象作为键;

3.WeakMap()类和WeakSet()类,可以使用set方法,但不能使用数字、字符串、布尔值等基本数据类型，需要将名字转换为对象;并且搜索、读取和删除值，也要传入作为键的对象
 */

let map = new WeakMap();
let ob1 = {name: 'A'},
  ob2 = {name: 'B'},
  ob3 = {name: 'C'};

map.set(ob1,'a');
map.set(ob2,'b');
map.set(ob3,'c');

console.log(map.has(ob1));
console.log('--- 华丽的分割线 ---');
console.log(map.get(ob3));
console.log('--- 华丽的分割线 ---');
map.delete(ob2);
console.log('--- 华丽的分割线 ---');