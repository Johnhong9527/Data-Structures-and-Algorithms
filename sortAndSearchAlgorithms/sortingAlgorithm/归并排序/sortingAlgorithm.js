/*排序算法*/

// 创建待处理数组
function ArrayList() {
  var array = [3, 5, 1, 6, 4, 7, 2]; // 1:
  this.insert = function (item) { // 2:
    array.push(item);
  };
  this.toString = function () { // 3:
    return array.join();
  };
  // 堆排序
  this.heapSort = function () {
    var heapSize = array.length;
    buildHeap(array); // {1}
    while (heapSize > 1) {
      heapSize--;
      swap(array, 0, heapSize); // {2}
      heapify(array, heapSize, 0); // {3}
    }
  };
  // 辅助函数
  var buildHeap = function (array) {
    var heapSize = array.length;
    for (var i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, heapSize, i)
    }
  }
  var heapify = function (array, heapSize, i) {
    var left = i * 2 + 1,
      right = i * 2 + 2,
      largest = i;
    if (left < heapSize && array[left] > array[largest]) {
      largest = left;
    }
    if (right < heapSize && array[right] > array[largest]) {
      largest = right
    }
    if (largest !== i) {
      swap(array, i, largest);
      heapify(array, heapSize, largest);
    }
  }
  var swap = function (array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };

}
var array = new ArrayList();
array.heapSort();
console.log(array.toString());

