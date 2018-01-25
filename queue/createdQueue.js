// created
/*
enqueue(element(s)):向队列尾部添加一个（或者多个）新的选项
dequeue():移除队列第一（即排在队列前面）项，并返回被移除的元素。
fornt():返回队列中第一个元素__最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息__与Stack类的peek方法类似）.
isEmpty():如果队列中不包含任何元素，返回true，否则返回false
size():返回队列包含的元素个数，与数组的length属性类似。
 */
function Queue() {
  let items = [];
  // 属性-方法
  // 向队列添加元素
  this.enqueue = function (element) {
    items.push(element);
  };
  // 从队列移除元素
  this.dequeue = function () {
    return items.shift();
  };
  // 查看队列头元素
  this.front = function(){
    return items[0];
  };
  // 检查队列是否为空
  this.isEmpty = function(){
    return items.length == 0;
  };
  this.size = function(){
    return items.length;
  };
  // 打印队列元素
  this.print = function(){
    console.log(items.toString());
  };
}

// 使用 Queue 类
let queue = new Queue();
console.log(queue.isEmpty()); //输出true
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
queue.print();
console.log(queue.size()); //输出3
console.log(queue.isEmpty()); //输出false
queue.dequeue();
queue.dequeue();
queue.print();