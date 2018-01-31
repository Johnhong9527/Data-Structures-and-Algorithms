function Set() {
  let items = {};
  // 向集合添加一个新的项
  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false
  };
  // 从集合移除一个值
  this.delete = function () {
  };
  this.remove = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true
    }
    return false;
  }
  // 如果值在集合中,返回 true ,否则返回 false
  this.has = function (value) {
    // return value in items;
    return items.hasOwnProperty(value);
  };
  // 移除集合中的所有项
  this.clear = function () {
    items = {};
  };
  // 返回集合所包含元素的数量。与数组的 length 属性类似
  this.size = function () {
    return Object.keys(items).length;
  };
  this.sizeLegacy = function () {
    let count = 0;
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        ++count;
      }
    }
    return count
  };
  // 返回一个包含集合中所有值的数组
  this.values = function () {
    let values = [];
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        values.push(items[key]);
      }
    }
    return values;
  };
  // 并集
  this.union = function (otherSet) {
    let unionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };
  // 交集
  this.intersection = function (otherSet) {
    let intersectionSet = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet
  };
  // 差集
  this.difference = function (otherSet) {
    let differenceSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }
    return differenceSet;
  };
  // 子集
  this.subset = function (otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false
        }
      }
      return true;
    }
  }
}

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

let setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.subset(setB))
console.log(setB.subset(setC))
