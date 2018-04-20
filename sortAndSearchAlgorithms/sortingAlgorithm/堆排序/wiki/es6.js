class heap_sort {
  constructor() {
    this.arr = [];
  }
  push(element) {
    this.arr.push(element);
  }
  max_heapify(start, end) {
    // 建立父节点指标和子节点指标
    let dad = start,
      son = dad * 2 + 1;
    if (son >= end) //若子节点指标超过范围直接跳出函数
      return;
    if (son + 1 < end && this.arr[son] < this.arr[son + 1]) // 先比较两个子节点大小，选择最大的
      son++
    if (this.arr[dad] <= this.arr[son]) { // 如果父节点小于子节点时，交换父子内容再继续子节点和孙节点比较
      this.swap(dad, son);
      this.max_heapify(son, end)
    }
  }

  // 辅助函数
  swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }

  sort() {
    let len = this.arr.length;
    // 初始化，i从最后一个父节点开始调整
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      this.max_heapify(i, len);
    }
    // 先将第一个元素和已排好元素前一位做交换，再从新调整，直到排序完毕
    for (let i = len - 1; i > 0; i--) {
      this.swap(0, i);
      this.max_heapify(0, i)
    }
    return this.arr.join();
  }
}

let heap = new heap_sort();
let a = [8, 2, 9, 4, 6, 5, 7, 1, 3];
for (let i in a) {
  heap.push(a[i])
}
console.log(heap.sort());
