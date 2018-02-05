/*
  1.每个节点是红色或黑色。
  2.根是黑色。
  3.所有叶子都是黑色（叶子是NIL节点）。
  4.每个红色节点必须有两个黑色的子节点。（从每个叶子到根的所有路径上不能有两个连续的红色节点。）
  5.从任一节点到其每个叶子的所有简单路径都包含相同数目的黑色节点。

  理解:红黑树的平衡效率,理解下来,其实是根据 color 这个属性来做判断的.它不会去查寻根与分支之间的平衡值是多少,只会根据上下左右数据的color的值是否符合平衡条件,如果符合的话,则调用函数进行平衡,而AVL平衡树是因为要遍历整个数据结构,所以在效率方面就会很慢
*/
function RedBlackTree() {

  let Colors = {
    RED: 0,
    BLACK: 1
  };

  // 建立数据模型
  let Node = function (key, color) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.color = color;

    // 颜色取反
    this.flipColor = function () {
      if (this.color === Colors.RED) {
        this.color = Colors.BLACK;
      } else {
        this.color = Colors.RED;
      }
    };
  };

  // 数据源
  let root = null;

  // 获取root
  this.getRoot = function () {
    return root;
  };
  /*
  说明:
    判断子节点,是否为红节点
   */
  let isRed = function (node) {
    if (!node) {
      return false;
    }
    return node.color === Colors.RED;
  };
  /*刷新红黑颜色*/
  let flipColors = function (node) {
    node.left.flipColor();
    node.right.flipColor();
  };
  // 左旋
  let rotateLeft = function (node) {
    /*
    temp(新节点)
    node(旧节点)
    temp = node.right;
    如果temp为空,返回null;
    分配数据:

      node.right = temp(node.right).left;

      temp.left(node.right.left) = node;

      temp(node.right).color = node.color;

      node.color = Colors.RED;

    */
    let temp = node.right;
    if (temp !== null) {
      node.right = temp.left;
      temp.left = node;
      temp.color = node.color;
      node.color = Colors.RED;
    }
    return temp;
  };
  // 右旋
  let rotateRight = function (node) {
    let temp = node.left;
    if (temp !== null) {
      node.left = temp.right;
      temp.right = node;
      temp.color = node.color;
      node.color = Colors.RED;
    }
    return temp;
  };
  // 添加数据
  let insertNode = function (node, element) {

    if (node === null) {
      return new Node(element, Colors.RED);
    }

    let newRoot = node;

    // 递归赋值
    if (element < node.key) {

      node.left = insertNode(node.left, element);

    } else if (element > node.key) {

      node.right = insertNode(node.right, element);

    } else {
      node.key = element;
    }

    // tree平衡
    /*
    条件:
        (子)右节点为红色,并且(子)左节点不为红色,左旋重新调整tree结构.
     */
    if (isRed(node.right) && !isRed(node.left)) {
      newRoot = rotateLeft(node);
    }
    //
    /*条件:
        (子)左节点为红色 并且(子)左节点的(子)左节点属于红色,右旋重新调整tree结构.
     */
    if (isRed(node.left) && isRed(node.left.left)) {
      newRoot = rotateRight(node);
    }
    // 分配颜色
    /*
    这里是判断颜色是否为`红`.如果左右颜色都为红的,重置node的节点颜色
     */
    if (isRed(node.left) && isRed(node.right)) {
      flipColors(node);
    }

    return newRoot;
  };
  // 插入数据
  this.insert = function (element) {
    // 插入数据
    root = insertNode(root, element);
    // 根节点为黑色.
    root.color = Colors.BLACK;
  };
}

/*RedBlackTree*/
let redBlackTre = new RedBlackTree();
redBlackTre.insert(11);
redBlackTre.insert(7);
redBlackTre.insert(15);
redBlackTre.insert(5);
redBlackTre.insert(3);
redBlackTre.insert(9);
redBlackTre.insert(8);
redBlackTre.insert(10);
redBlackTre.insert(13);
redBlackTre.insert(25);
redBlackTre.insert(24);
redBlackTre.insert(33);
redBlackTre.insert(73);
redBlackTre.insert(52);
redBlackTre.insert(14);
redBlackTre.insert(20);
redBlackTre.insert(18);
redBlackTre.insert(25);
redBlackTre.insert(6);
console.log(redBlackTre.getRoot());