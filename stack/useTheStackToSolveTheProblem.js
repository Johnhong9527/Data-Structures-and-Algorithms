// 用栈解决问题
// 二进制转十进制


/*let _items = Symbol(); //{1}
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
}*/


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
    }

    // 检查栈是否为空
    isEmpty() {
      let s = items.get(this);
      return s.length == 0;
    };

  }

  return Stack;
})();

/*
* decNumber:要转换的数字
* index：根据传入的数字切割字符串
* base：根据传入的数值，进行任意字符转换
* */
function divideBy2(decNumber, index, base) {
  var remStack = new Stack(),
    rem,
    binaryString = '';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  if (index > 0) {
    // let re =new RegExp("^\\d+" + v + "$","gim"); // re为/^\d+bl$/gim
    let I = new RegExp("(.{" + index + "})", "g"); // re为/^\d+bl$/gim
    let str = binaryString.replace(/\s/g, '').replace(I, "$1,")
    return str;
  }
  return binaryString;
}

/*
Math.floor 函数让除法的操作仅返回整数部分.

 */
console.log(divideBy2(225, 0, 20));  // 11001
