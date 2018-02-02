/*自平衡树*/

/*
AVL树:
  全称:Adelson-Velskii-Landi树
  解释:AVL树是一种自平衡二叉搜索树,
      意思是任何一个节点左右两侧子树的高度之差最多为1。
      也就是说这种树会在添加或移除节点时尽量试着成为一棵完全树。
 */


function BinarySearchTree() {
  let Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  let root = null;

  // 在AVL树中插入节点
  let insertNode = function (node, element) {
    if (node === null) {
      node = new Node(element);
    } else if (element < node.key) {
      node.left = insertNode(node.left, element);
      if (node.left !== null) {
        // 确认是否需要平衡
        if ((heightNode(node.left) - heightNode(node.right)) > 1) {
          // 旋转{3}
          if(element< node.left.key){
            node = rotationLL(node);
          } else {
            node = rotationLR(node);
          }
        }
      }
    } else if (element > node.key) {
      node.right = insertNode(node.right, element);
      if (node.right !== null) {
        // 确认是否需要平衡
        if ((heightNode(node.right) - heightNode(node.left)) > 1) {
          // 旋转{4}
          if(element > node.right.key){
            node = rotationRR(node);
          } else {
            node = rotationRL(node);
          }
        }
      }
    }
    return node
  };
  // 计算节点高度
  let heightNode = function (node) {
    if (node === null) {
      return -1
    } else {
      return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
    }
  };
  // 向左的单旋转
  let rotationRR = function (node) {
    // tmp 等于右分支
    let tmp = node.right;
    // 右分支等tmp的左分支
    node.right = tmp.left;
    // tmp的左分支等于节点
    tmp.left = node;
    // 返回节点
    return tmp;
  };

  // 右向左的双旋转
  let rotationRL = function (node) {
    node.right = rotationLL(node.right);
    return rotationRR(node);
  };

  // 向右的单旋转
  let rotationLL = function (node) {
    let tmp = node.left;
    node.left = tmp.left;
    tmp.right = node;
    return tmp;
  };

  // 左向右的双旋转
  let rotationLR = function (node) {
    node.left = rotationRR(node.left);
    return rotationLL(node)
  };

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
  };
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

