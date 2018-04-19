/*排序算法*/

// 创建待处理数组
function ArrayList() {
  var array = [3, 5, 1, 2, 4, 7, 6]; // 1:
  this.insert = function (item) {
    // 2:
    array.push(item);
  };
  this.toString = function () {
    // 3:
    return array.join();
  };

  this.mergeSort = function () {
    array = mergeSortRec(array);
  };
  // 快速排序
  this.quickSort = function () {
    // 递归
    quick(array, 0, array.length - 1);
  };
  // 辅助函数
  var quick = function (array, left, right) {
    var index;
    if (array.length > 1) {
      // 设置 index 的值为
      index = partition(array, left, right);
      console.log('left  ' + left)
      console.log('right  ' + right)
      console.log('index  ' + index)
      console.log(' ')
      if (left < index - 1) {
        quick(array, left, index - 1);
      }
      if (index < right) {
        quick(array, index, right);
      }
    }
  };
  /*[3, 5, 1, 6, 4, 7, 2]*/
  var partition = function (array, left, right) {
    // Math.floor 向下取整
    var pivot = array[Math.floor((right + left) / 2)], // 获取主元
      i = left,
      j = right;
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        // 交换元素，步骤思路
        /*

        第一次划分操作： 
          left = 0
          right = 6
          pivot = 3
            在发生首次元素事件之后：[3, 5, 1, 2, 4, 7, 6]
              i++ 跟 j++ 是为了跳过已经做了位置交换元素
            这时候，第一次划分操作还没有结束。
            第二次比较开始
              i = 4
              j = 5
              pivot = 6
              array[4] < 6   4 < 6
              i++;//i=5
              array[5] > 6    7 > 6
              j--; // j = 4
            到了这里， i<=j 的条件不成立了，while语句停止执行 
              return 5
        第二次划分操作：
          left = 0
          right = 4
          pivot = 2
            在发生首次元素事件之后：[1, 5, 3, 2, 4]
              i++ 跟 j++ 是为了跳过已经做了位置交换元素
            第二次比较开始
              i = 0
              j = 1
              pivot = 1
              array[0] < 1    5 < 1 false
              i++;//i=2
              array[1] > 1    5 > 1 true
              j--; // j = 0
            到了这里， i<=j 的条件不成立了，while语句停止执行 
              return 1
        第三次划分操作：
          left = 1
          right = 2
          pivot = 3
            在发生首次元素事件之后：[3, 2]
              i++ 跟 j++ 是为了跳过已经做了位置交换元素
            第二次比较开始
              i = 1
              j = 1
              pivot = 3
              array[1] < 3    3 < 3 false
              i++;//i=2
              array[1] > 3    3 > 3 false
              j--; // j = 0
            到了这里， i<=j 的条件不成立了，while语句停止执行 
              return 2
        */
        swap(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  };
  var swap = function (array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };
}

// 检测
/*
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
*/

let a = new ArrayList;
a.quickSort()
