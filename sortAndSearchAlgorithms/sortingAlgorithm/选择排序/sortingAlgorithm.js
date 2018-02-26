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
  // 选择排序
  this.selectionSort = function () {
    var length = array.length,
      indexMin;
    for (var i = 0; i < length - 1; i++) {
      indexMin = i;
      for (var j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin);
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
array.selectionSort();
console.log(array.toString());

