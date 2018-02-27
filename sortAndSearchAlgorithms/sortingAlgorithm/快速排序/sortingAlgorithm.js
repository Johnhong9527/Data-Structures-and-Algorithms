/*排序算法*/

// 创建待处理数组
function ArrayList() {
  var array = []; // 1:
  this.insert = function (item) { // 2:
    array.push(item);
  };
  this.toString = function () { // 3:
    return array.join();
  };
  // 快速排序
  this.quickSort = function () {
    // 递归  需要排序的  数组首位下标  数组末尾下标
    quick(array, 0, array.length - 1);
  }
  // 辅助函数
  var quick = function (array, left, right) {
    var index;
    //
    if (array.length > 1) {
      // 设置 index 的值为
      index = partition(array, left, right);
      if (left < index - 1) {
        quick(array, left, index - 1);
      }
      if (index < right) {
        quick(array, index, right);
      }
    }
  }
  var partition = function (array, left, right) {
    var pivot = array[Math.floor((right + left))],
      i = left,
      j = right;

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--
      }
      if (i <= j) {
        swap(array, i, j);
        i++;
        j--
      }
    }
    return i;
  }
  var swap = function (array, index1, index2) {
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

var array = creatNonSortedArray(8);
console.log(array.toString());
array.mergeSort();
console.log(array.toString());

