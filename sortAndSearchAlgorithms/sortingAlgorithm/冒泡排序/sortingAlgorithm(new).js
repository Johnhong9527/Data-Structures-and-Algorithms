/*排序算法*/

// 创建待处理数组
function ArrayList() {
  var array = []; // 1:
  this.insert = function (item) { // 2:
    array.push(item);
  };
  this.toString = function () { // 3:
    return array.join();
  }
  // 冒泡排序
  this.bubbleSort = function () {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  }
  // 声明私有函数
  var swap = function (index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux
  }
}


// 检测
function creatNonSortedArray(size) {
  var array = new ArrayList();
  for (var i = size; i > 0; i--) {
    array.insert(i);
  }
  return array;
}

var array = creatNonSortedArray(5);
console.log(array.toString());
array.bubbleSort();
console.log(array.toString());

