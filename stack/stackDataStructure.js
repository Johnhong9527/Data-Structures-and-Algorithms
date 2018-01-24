// 栈
/*
栈是一种遵从后进先出(LIFO)原则的有序集合。新添加的或待删除的元素都保存在栈的
同一端,称作栈顶,另一端就叫栈底。在栈里,新元素都靠近栈顶,旧元素都接近栈底。
 */
/*
push(element(s)):添加一个(或几个)新的元素到栈顶
pop():移除栈顶的元素,同时返回被移除
peek():返回栈顶的元素,不对栈做任何修改(这个方法不会移除栈顶的元素,仅仅返回它)
isEmpty():如果栈里没有任何元素就返回 true ,否则返回 false.
clear():移除栈里的所有元素。
size():返回栈里的元素个数。这个方法和数组的 length 属性很类似。
 */

// 创建栈
/*function Stack() {
  let items = [];
// 向栈添加元素
  this.push = function (element) {
    items.push(element);
  };
// 从栈移除元素
  this.pop = function () {
    return items.pop();
  };
// 查看栈顶元素
  this.peek = function () {
    return items[items.length - 1];
  };
// 检查栈是否为空
  this.isEmpty = function () {
    return items.length == 0;
  };
  // 返回栈的长度
  this.size = function () {
    return items.length;
  };
// 清空和打印栈元素
  this.clear = function () {
    items = [];
  };
  this.print = function () {
    console.log(items.toString());
  };
}*/

// 使用 Stack 类
// let stack = new Stack();
// console.log(stack.isEmpty()); //输出为true
// stack.push(5);
// stack.push(6);
// stack.push(11);
// console.log(stack.size()); //输出3
// console.log(stack.isEmpty()); //输出false


// ES6
/*Symbol 的基本类型,它是不可变的,可以用作对象的属性.*/
/*let _items = Symbol();
class Stack{
  constructor (){
    this[_items] = [];
  }
  push(element){
    this[_items].push(element)
  }
  peek(){
    return this[_items][this[_items].length - 1];
  }
  print() {
    console.log(this[_items].toString());
  };
}
let stack = new Stack();
stack.push(5);
stack.push(8);
let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length); // 1
console.log(objectSymbols);
console.log(objectSymbols[0]);
stack[objectSymbols[0]].push(1);
stack.print();*/


// 用ES6的 WeakMap 实现类
/* WeakMap:数据类型可以确保属性是私有的 */
let Stack = (function () {
  const items = new WeakMap();  //{1}声明一个 WeakMap 类型的变量 items
  class Stack {
    constructor() {
      items.set(this, []); //{2} 在 constructor 中,以 this ( Stack 类自己的引用)为键,把代表栈的数组存入 items 。
    }

    push(element) {
      let s = items.get(this); //{3} 从 WeakMap 中取出值,即以 this 为键(行 {2} 设置的)从 items 中取值。
      s.push(element)
    }

    pop() {
      let s = items.get(this);
      let r = s.pop();
      return r
    }

    print() {
      let s = items.get(this);
      console.log(s.toString());
    };

    CON() {
      console.log('123')
    }
  }

  return Stack;
})();
let stack = new Stack();
stack.push(5);
stack.push(8);
stack.print();

