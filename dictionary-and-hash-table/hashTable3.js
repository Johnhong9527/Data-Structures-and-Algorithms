/*
解决数据冲突
  2. 线性探查
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
    let position = loseloseHashCode(key);
    if (table[position] == undefined) {
      table[position] = new ValuePair(key, value);
    } else {
      let index = ++position;
      while (table[index] != undefined) {
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  };
  this.get = function(key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined){ //{8}
      if (table[position].key === key) { //{9}
        return table[position].value; //{10}
      } else {
        var index = ++position;
        while (table[index] === undefined
        || table[index].key !== key){ //{11}
          index++;
        }
        if (table[index].key === key) { //{12}
          return table[index].value; //{13}
        }
      }
    }
    return undefined; //{14}
  };
  this.remove = function (key) {
    let position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      if(table[position].key === key){
        table[position] = undefined;
        return true;
      } else {
        let index = ++position;
        while (table[index] === undefined || table[index].key !== key){
          index++
        }
        if(table[index].key === key){
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
