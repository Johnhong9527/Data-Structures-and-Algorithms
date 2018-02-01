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

  };
  // 通过中序遍历方式遍历所有节点
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  };
  // 辅助函数 = 递归
  let inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      console.log(node);
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };
  // 通过先序遍历方式遍历所有节点
  this.preOrderTraverse = function (callback) {
    preOrderTraverse(root, callback)
  };
  let preOrderTraverse = function (node, callback) {
    if (node != null) {
      callback(node.key);
      preOrderTraverse(node.left, callback);
      preOrderTraverse(node.right, callback);
    }
  };
  // 通过后序遍历方式遍历所有节点
  this.postOrderTraverse = function () {

  };
  // 返回树中最小的值/键
  this.min = function () {

  };
  // 返回树中最大的值/键
  this.max = function () {

  };
  // 从树中移除某个键
  this.remove = function (key) {

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
  // console.log(value);
}

tree.inOrderTraverse(printNode);