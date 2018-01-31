/*
散列算法的作用是尽可能快地在数据结构中找到一个值。在之前的章节中,你已经知道如果
要在数据结构中获得一个值(使用 get 方法),需要遍历整个数据结构来找到它。如果使用散列
函数,就知道值的具体位置,因此能够快速检索到该值。散列函数的作用是给定一个键值,然后
返回值在表中的地址。
put(key,value) :向散列表增加一个新的项(也能更新散列表)。
remove(key) :根据键值从散列表中移除值。
get(key) :返回根据键值检索到的特定的值。
 */

function HashTable() {
  var table = [];

  // 散列函数
  var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };
  // put
  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  };
  this.get = function (key) {
    return table[loseloseHashCode(key)];
  };
  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined
  }
  this.print = function () {
    for (var i = 0; i < table.length; i++) {
      if(table[i] !== undefined){
        console.log(i + ": " + table[i]);
      }
    }
  }
}

var hash = new HashTable();
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

console.log('--- 华丽的分割线 ---')
hash.print();