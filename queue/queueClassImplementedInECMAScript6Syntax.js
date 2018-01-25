// 用 ECMAScript 6 语法实现的 Queue 类
let Queue = (function () {
  const items = new WeakMap();

  class Queue {
    constructor() {
      items.set(this, []);
    }

    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    }

    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      return r;
    }

    // 其他方法
  }

  return Queue;
})();

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());