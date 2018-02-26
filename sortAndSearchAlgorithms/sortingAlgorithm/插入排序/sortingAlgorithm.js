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
  this.insertionSort = function () {
    var length = array.length,
      j, temp;
    for (var i = 1; i < length; i++) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j-1];
        j--;
      }
      array[j] = temp;
    }
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
array.insertionSort();
console.log(array.toString());

