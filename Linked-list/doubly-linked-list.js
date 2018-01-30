// 双向链表
function DoublyLinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.prve = null; //新增
  };
  let length = 0;
  let head = null;
  let tail = null; //新增
  // 在任意位置插入新元素
  this.insert = function (position, element) {
    // 检查越界值
    if (position >= 0 && position <= length) {
      let node = new Node(element), // 实例化对象
        current = head,
        previous,
        index = 0;
      if (position === 0) {
        // head为空的话
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prve = node;
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node; // 下一位
        node.prve = current; // 上一位
        tail = node;
      } else {
        // 随机插入
        /*
        原理:
          先使用while循环语句切割链表,以position位置为节点,分成2个部分的,上半部分为`previous`,下半部分为current;
         */
        while (index++ < position) {
          /*
          通过while循环语句,从0开始获取目标位置的next与prve的值,
           */
          previous = current;
          current = current.next;
        }
        /*
        原理:
          node代表将要插入的数据;
          node.next指向原链表的下半部分,
          原链表的上半部分的next指向node,
          原链表的下半部分的prve指向node,
          node.prve指向原链表的上半部分,完成数据合并
         */
        node.next = current;
        previous.next = node;
        current.prve = node;
        node.prve = previous;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };
  // 在任意位置移除元素
  this.removeAt = function (position) {
    // 检查越界值
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;
      // 移除第一项
      if (position === 0) {
        head = current.next;
        // 如果只有一项,更新tail
        if (length === 1) {
          tail = null
        } else {
          head.prve = null
        }
        // 移除最后一项
        // 说明:length - 1,我认为是position
      } else if (position === length - 1) {
        current = tail;
        tail = current.prve;
        tail.next = null;
      } else {
        /*
        while切割双向链表
         */
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 将previous与current的下一项链接起来——跳过current
        previous.next = current.next;
        current.next.prve = previous;
      }
      length--;
      return current.element;
    } else {
      return null
    }
  }
  this.length = function () {
    console.log(length)
  };

  this.getHead = function () {
    return head
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insert(0, 1);
doublyLinkedList.insert(1, 2);
doublyLinkedList.insert(2, 3);
doublyLinkedList.insert(3, 4);
doublyLinkedList.insert(2, 5);
console.log(doublyLinkedList.getHead());