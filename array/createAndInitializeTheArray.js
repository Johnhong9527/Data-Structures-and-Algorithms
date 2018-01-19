/*
var daysOfWeek = new Array();
var daysOfWeek = new Array(7);
var daysOfWeek = new Array('Sunday','Monday','Tuseday','Wednesday','THursday','Friday','Saturday');
*/


/*求斐波那契数列的前20个数字。已知斐波那契数列中第一个数字是1,
第二个是2,从第三项开始,每一项都等于前两项之和:*/
var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;
for (var i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
/*for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i])
}*/

// console.log(fibonacci.length); // 20


// console.log(fibonacci);
// 在数组首位插入数据
/*for (let j = fibonacci.length; j >= 0; j--) {
  fibonacci[i] = fibonacci[i - 1]
}
fibonacci[0] = '互换';
fibonacci.unshift('dsfsdfsf');
console.log(fibonacci.length);*/
// or
// 删除元素
/*fibonacci.pop();
console.log(fibonacci.length);*/

// 从数组首位删除元素
/*
for (let i = 0; i < fibonacci.length; i++) {
 fibonacci[i] = fibonacci[i+1];
}
console.log(fibonacci);
// or
fibonacci.shift();
console.log(fibonacci);*/

// 在任意位置添加或删除元素
/*
// 删除
fibonacci.splice(0,3); // 从下标为`0`的元素开始删除，删除数量为`3`个的元素；
console.log(fibonacci);
// or
// delete fibonacci[0]
for(let i =0;i<10;i++){
  delete fibonacci[i]
}
console.log(fibonacci.length);*/
// 添加
fibonacci.splice(8,0,7855,2542,201); //splice(开始位置|，数量（0：表示不删除任何元素）|要插入的元素元素)
console.log(fibonacci)