// 二叉树和二叉搜索树:
// 二叉树中的节点最多只能有两个子节点:一个是左侧子节点,另一个是右侧子节点。
/*
方法
 */
function BinarySearchTree() {
  let Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  let root = null;
  // 向树中插入一个新的键
  this.insert = function (key) {
    let newNode = new Node(key);
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode);
    }
  };
  // 辅助函数
  let insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  // 在树中查找一个键,如果节点存在,则返回 true ;如果不存在,则返回false
  this.search = function (key) {
    return searchNode(root, key);
  };
  let searchNode = function (node, key) {
    if (node === null) {
      return false
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true
    }

  }
  // 通过中序遍历方式遍历所有节点
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  };
  // 辅助函数 = 递归
  let inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };
  // 通过先序遍历方式遍历所有节点
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback)
  };
  let preOrderTraverseNode = function (node, callback) {
    if (node != null) {
      callback(node.key);
      preOrderTraverse(node.left, callback);
      preOrderTraverse(node.right, callback);
    }
  };
  // 通过后序遍历方式遍历所有节点
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback);
  };
  let postOrderTraverseNode = function (node, callback) {
    if (node != null) {
      postOrderTraverseNode(node.left, callback); //{1}
      postOrderTraverseNode(node.right, callback); //{2}
      callback(node.key);
    }
  }
  // 返回树中最小的值/键
  this.min = function () {
    return minNode(root)
  };
  let minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key;
    }
    return null;
  }
  // 返回树中最大的值/键
  this.max = function () {
    return maxNode(root)
  };
  let maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key;
    }
    return null;
  };
  // 从树中移除某个键
  this.remove = function (key) {
    root = removeNode(root, key);
  };
  let removeNode = function (node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      // 第一种情况——一个叶节点
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // 第二种情况——一个只有一个子节点的节点
      if (node.left === null) {
        node = node.right; // node赋值为它的right位置的值
        return node;
      } else if (node.right === null) {
        node = node.left; // node赋值为它的left位置的值
        return node
      }
      // 第三种情况——一个有两个子节点的节点
      let aux = findMinNode(node.right);
      node.key = aux.key;
      // 通过递归aux.key,然后通过递归删除 aux.key
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };
  let findMinNode = function (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode(value) { //{6}
  console.log(value);
}

/*中序遍历*/
// tree.inOrderTraverse(printNode); // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
/*先序遍历*/
// tree.preOrderTraverse(printNode); // 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
/*后序遍历*/
// tree.postOrderTraverse(printNode); // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
/*min*/
console.log(tree.min()); // 3
console.log(tree.max()); // 25
/*搜索特定值*/
console.log(tree.search(12)); // true