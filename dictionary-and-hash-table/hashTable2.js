/*
解决数据冲突
  1.分离链接
put(key,value) :向散列表增加一个新的项(也能更新散列表)。
remove(key) :根据键值从散列表中移除值。
get(key) :返回根据键值检索到的特定的值。
 */

function LinkedList() {

  let Node = function(element){

    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function(element){

    let node = new Node(element),
      current;

    if (head === null){ //first node on list
      head = node;
    } else {

      current = head;

      //loop the list until find last item
      while(current.next){
        current = current.next;
      }

      //get last item and assign next to added item to make the link
      current.next = node;
    }

    length++; //update size of list
  };

  this.insert = function(position, element){

    //check for out-of-bounds values
    if (position >= 0 && position <= length){

      let node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0){ //add on first position

        node.next = current;
        head = node;

      } else {
        while (index++ < position){
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

  this.removeAt = function(position){

    //check for out-of-bounds values
    if (position > -1 && position < length){

      let current = head,
        previous,
        index = 0;

      //removing first item
      if (position === 0){
        head = current.next;
      } else {

        while (index++ < position){

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

  this.remove = function(element){

    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function(element){

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

  this.isEmpty = function() {
    return length === 0;
  };

  this.size = function() {
    return length;
  };

  this.getHead = function(){
    return head;
  };

  this.toString = function(){

    let current = head,
      string = '';

    while (current) {
      string += current.element + (current.next ? ', ' : '');
      current = current.next;
    }
    return string;

  };

  this.print = function(){
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
  }
  // put
  this.put = function (key, value) {
    let position = loseloseHashCode(key);
    if (table[position] == undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  };
  this.get = function (key) {
    let position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      // 遍历链表来寻找键/值
      let current = table[position].getHead();
      while (current.next) {
        console.log(current.element.key === key)
        if (current.element.key === key) {
          console.log(current.element.value);
          return current.element.value
        }
        current = current.next;
      }

      // 检查元素在链表第一个或最后一个节点的情况
      if (current.element.key === key) {
        return current.element.value
      }
    }
    return undefined;
  };
  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined
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
console.log('--- 华丽的分割线 ---');
console.log(hash.get('John'));