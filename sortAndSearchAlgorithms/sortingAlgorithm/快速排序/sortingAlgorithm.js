/*排序算法*/

// 创建待处理数组
function ArrayList() {
  var array = [3, 5, 1, 6, 4, 7, 2]; // 1:
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
      // console.log('----')
      if (left < index - 1) {
        // console.log(`left ${left} < index ${index} - 1: ${left < index - 1}`)
        quick(array, left, index - 1);
      }
      if (index < right) {
        // console.log(`index ${index} < right ${right}: ${index < right}`)
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
        // console.log(`i: array[${i}]:${array[i]} < pivot:${pivot} = ${array[i] < pivot}`)
        i++;
      }
      // console.log(`i  ${i}`);
      while (array[j] > pivot) {
        // console.log(`j: array[${j}]:${array[j]} > pivot:${pivot} = ${array[j] > pivot}`)
        j--;
      }
      // console.log(`j  ${j}`);
      if (i <= j) {
        // 交换元素，步骤思路
        swap(array, i, j);
        i++;
        j--;
        // console.log(`执行交换`);
      }
    }
    // console.log(array);
    // console.log(` `);
    console.log(`i  ${i}`)
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
console.log('[ 3, 5, 1, 2, 4, 7, 6 ]');
let a = new ArrayList;
a.quickSort()
