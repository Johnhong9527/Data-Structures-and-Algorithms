function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };
  let length = 0;
  let head = null;
  this.append = function (element) { // 向列表尾部添加一个新的项。
    let node = new Node(element),
      current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      // 循环列表，直找到最后一项
      while (current.next) {
        current = current.next;
      }
      // 找到最后一项，将其next赋值为node，建立连接
      current.next = node;
    }
    length++
  };
  // 向列表的特定位置插入一个新的项。
  this.insert = function (poisition, element) {
  };
  // 从列表中移除一项。
  this.removeAt = function (position) {
    // 判断需要移除项是否存在
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;
      // 移除第一项
      if (position === 0) {//这里是不移除
        head = current.next;
      } else {
        // 通过while循环语句，筛选数据
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next
      }
      length--;
      return current.element
    } else {
      return null;
    }
  };
  this.remove = function (element) {
  }; // 返回元素在列表中的索引。如果列表中没有该元素则返回 -1 。
  this.indexOf = function (element) {
  }; // 从列表的特定位置移除一项。
  this.isEmpty = function () {
  }; // 如果链表中不包含任何元素,返回 true ,如果链表长度大于0则返回 false 。
  this.size = function () {
  }; // 返回链表包含的元素个数。与数组的 length 属性类似。
  this.getHead = function () {
  };
  this.toString = function () {
  }; // 由于列表项使用了 Node 类,就需要重写继承自JavaScript对象默认的toString 方法,让其只输出元素的值。
  this.print = function () {
  }
}