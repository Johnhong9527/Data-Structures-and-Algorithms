// 单向链表
function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };
  let length = 0;
  let head = null;
  // 向列表尾部添加一个新的项。
  this.append = function (element) {
    let node = new Node(element),
      current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      // 循环列表,直找到最后一项
      while (current.next) {

        current = current.next;
      }
      // 找到最后一项,使next的值为node
      current.next = node;
    }
    length++
  };
  // 向列表的特定位置插入一个新的项。
  this.insert = function (position, element) {
    // 检查越界值
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0;
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        //
        while (index++ < position) {
          previous = current;  // {1}
          current = current.next; // {2}
          /*
          通过while，拆分链表，
           */
        }
        node.next = current; // {3}
        previous.next = node; // {4}
        /*
        合并链表，node是链表合并的纽带
        {3}的意思是node在这里是作为插入点，作用是承上启下，用它的next获取position之后的链表值，
        在{4}里面，将node赋给previous.next，就是把分开的链表合并
         */
      }
      length++;
      return true;
    } else {
      return false;
    }
  };
  // 从列表中移除一项。
  this.removeAt = function (position) {
    // 判断需要移除项是否存在
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;
      // 移除第一项,当position等于0时,表示current的值next等于null
      if (position === 0) {
        head = current.next;
      } else {
        // 通过while循环语句,筛选数据,因为数组的下标是从0开始的,所以index小于position一位,这个时候条件成立的话,赋值习惯变量
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 将previous与current的下一项链接起来:跳过current,从而移除它
        previous.next = current.next
      }
      // 链表的长度减一
      length--;
      return current.element
    } else {
      return null;
    }
  };
  // 从列表的特定位置移除一项。
  this.remove = function (element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };
  // 返回元素在列表中的索引。如果列表中没有该元素则返回 -1.
  this.indexOf = function (element) {
    let current = head,
      index = 0;
    while (current) {
      if (element === current.element) {
        return index
      }
      index++;
      current = current.next;
    }
    return -1
  };
  // 如果链表中不包含任何元素,返回 true ,如果链表长度大于0则返回 false 。
  this.isEmpty = function () {
  };
  // 返回链表包含的元素个数。与数组的 length 属性类似。
  this.size = function () {
    return length;
  };
  this.getHead = function () {
    return head;
  };
  // 由于列表项使用了 Node 类,就需要重写继承自JavaScript对象默认的toString 方法,让其只输出元素的值。
  this.toString = function () {
    let current = head,
      string = '';
    while (current) {
      string += current.element + (current.next ? ',' : '');
      current = current.next
    }
    return `[${string}]`;
  };
  this.print = function () {
    console.log(head)
  }
}

let list = new LinkedList();
list.append('3114');
list.append('5474');
list.append('7474');
list.append('2414');
list.insert(3, '8974'); // true
list.remove('7474');
list.print()