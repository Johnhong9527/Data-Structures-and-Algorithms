/*数组解构*/
/*
var [x, y] = ['a', 'b'];
// 等同于
var x = 'a',
  y = 'b';*/

/*值互换*/
/*
[x, y] = [y, x];
// 等同于
var tmp = x;
x = y;
y = tmp;*/

/*属性简写*/
/*
var [x, y] = ['a', 'b'];
var obj = {x, y};
console.log(obj); // { x: 'a', y: 'b' }
// 等同于
var x = 'a';
var y = 'b';
var obj2 = {x:x,y:y};
console.log(obj2); // { x: 'a', y: 'b' }*/

/*
var hello = {
  name: 'abcdef',
  printHello() {
    console.log('Hello!');
  }
}
// console.log();
hello.printHello(); // hello!
// 等同于
let hello = {
  name: 'abcdef',
  printHello: function printHello() {
    console.log(this.name);
  }
}
hello.printHello(); // abcdef*/
