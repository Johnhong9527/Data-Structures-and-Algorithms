// 栈
/*
栈是一种遵从后进先出(LIFO)原则的有序集合。新添加的或待删除的元素都保存在栈的
同一端,称作栈顶,另一端就叫栈底。在栈里,新元素都靠近栈顶,旧元素都接近栈底。
 */

// 创建栈
function Stack() {

}

let item = [];
/*
push(element(s)):添加一个(或几个)新的元素到栈顶
pop():移除栈顶的元素,同时返回被移除
peek():返回栈顶的元素,不对栈做任何修改(这个方法不会移除栈顶的元素,仅仅返回它)
isEmpty():如果栈里没有任何元素就返回 true ,否则返回 false.
clear():移除栈里的所有元素。
size():返回栈里的元素个数。这个方法和数组的 length 属性很类似。
 */

// 向栈添加元素
this.push = function (element) {
  items.push(element);
};
// 从栈移除元素
this.pop = function () {
  return items.pop();
};
// 查看栈顶元素