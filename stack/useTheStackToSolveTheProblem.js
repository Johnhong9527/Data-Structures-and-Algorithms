// 用栈解决问题
// 二进制转十进制
let _items = Symbol(); //{1}
class Stack {
  constructor() {
    this[_items] = []; //{2}
  }

  pop() {
    return this[_items].pop();
  };

  push(element) {
    this[_items].push(element)
  }

  isEmpty() {
    return this[_items].length == 0;
  };

//Stack方法
}

function divideBy2(decNumber) {
  var remStack = new Stack(),
    rem,
    binaryString = '';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }
  console.log(remStack);
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}
/*
Math.floor 函数让除法的操作仅返回整数部分.

 */

divideBy2(25)

// console.log(divideBy2(25)); // 11001