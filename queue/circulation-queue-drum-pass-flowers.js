// 循环队列——击鼓传花
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

    // 查看队列头元素
    front() {
      let q = items.get(this);
      return q[0];
    };

    // 检查队列是否为空
    isEmpty() {
      let q = items.get(this);
      return q.length == 0;
    };

    size() {
      let q = items.get(this);
      return q.length;
    };

    // 打印队列元素
    print() {
      let q = items.get(this);
      console.log(q.toString());
    };

  }

  return Queue;
})();


function hotPotato(nameList, num) {
  let queue = new Queue();
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  let eliminated = '';
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + '在击鼓传花中淘汰')
  }
  return queue.dequeue();
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log('The winner is: ' + winner);
