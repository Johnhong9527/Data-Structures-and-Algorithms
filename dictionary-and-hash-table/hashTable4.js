/*
  创建更好的散列函数

put(key,value) :向散列表增加一个新的项(也能更新散列表)。
remove(key) :根据键值从散列表中移除值。
get(key) :返回根据键值检索到的特定的值。
 */

function LinkedList() {

  let Node = function (element) {

    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function (element) {

    let node = new Node(element),
      current;

    if (head === null) { //first node on list
      head = node;
    } else {

      current = head;

      //loop the list until find last item
      while (current.next) {
        current = current.next;
      }

      //get last item and assign next to added item to make the link
      current.next = node;
    }

    length++; //update size of list
  };

  this.insert = function (position, element) {

    //check for out-of-bounds values
    if (position >= 0 && position <= length) {

      let node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) { //add on first position

        node.next = current;
        head = node;

      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      length++; //update size of list

      return true;

    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    //check for out-of-bounds values
    if (position > -1 && position < length) {

      let current = head,
        previous,
        index = 0;

      //removing first item
      if (position === 0) {
        head = current.next;
      } else {

        while (index++ < position) {

          previous = current;
          current = current.next;
        }

        //link previous with current's next - skip it to remove
        previous.next = current.next;
      }

      length--;

      return current.element;

    } else {
      return null;
    }
  };

  this.remove = function (element) {

    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function (element) {

    let current = head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.size = function () {
    return length;
  };

  this.getHead = function () {
    return head;
  };

  this.toString = function () {

    let current = head,
      string = '';

    while (current) {
      string += current.element + (current.next ? ', ' : '');
      current = current.next;
    }
    return string;

  };

  this.print = function () {
    console.log(this.toString());
  };
}


function HashTable() {
  let table = [];

  // 创建更好的散列函数
  let djb2HashCode = function (key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      // charCodeAt()方法,返回0到65535之间的整数
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
  };

  // 散列函数
  let loseloseHashCode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };
  // 分离链接
  let ValuePair = function (key, value) {
    this.key = key;
    this.value = value;

    this.toString = function () {
      return '[' + this.key + ' - ' + this.value + ']';
    }
  };
  // put
  this.put = function (key, value) {
    let position = djb2HashCode(key);
    if (table[position] == undefined) {
      table[position] = new ValuePair(key, value);
    } else {
      let index = ++position;
      while (table[index] != undefined) {
        index++;
      }
      table[index] = new new ValuePair(key, value);
    }
  };
  this.get = function (key) {
    let position = djb2HashCode(key);
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++
        }
        if (table[index].key === key) {
          return table[index].value
        }
      }
    }
    return undefined;
  };
  this.remove = function (key) {
    let position = djb2HashCode(key);
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined;
        return true;
      } else {
        let index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++
        }
        if (table[index].key === key) {
          table[index] = undefined;
          return true;
        }
      }
    }
    return false;
  };
  this.print = function () {
    for (let i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ": " + table[i]);
      }
    }
  }
  /*解决冲突*/
  // 分离链接
}


let hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');

console.log('--- 华丽的分割线 ---');
hash.print();
/*
 5: [Jonathan - jonathan@email.com], [Jamie - jamie@email.com], [Sue - sue@email.com]
 10: [Nathan - nathan@email.com]
 13: [Donnie - donnie@email.com], [Ana - ana@email.com]
 16: [Tyrion - tyrion@email.com], [Aaron - aaron@email.com]
 19: [Gandalf - gandalf@email.com]
 29: [John - johnsnow@email.com]
 32: [Mindy - mindy@email.com], [Paul - paul@email.com]
*/
console.log('--- 华丽的分割线 ---');
console.log(hash.get('John')); // johnsnow@email.com
console.log('--- 华丽的分割线 ---');
console.log(hash.remove('John'));  // true



/*
这里解释一下:5381!

  1.5381只是一个数字，在测试中，导致更少的碰撞和更好的雪崩。几乎每个哈希算法都会找到“魔术常量”。

  2.我发现这个数字的一​​个非常有趣的属性可能是一个原因。
    5381是第709个素数。
    709是第127个素数。
    127是第31个素数。
    31是第11个素数。
    11是第5个素数。
    5是第三个素数。
    3是第二个素数。
    2是第一个素数。

    5381是第一次发生这种情况的次数是8次。5381的素数可能会超过signed int的限制，所以这是一个好的一点，可以停止链。



 */