/*
图的遍历:
  广度优先搜索(Breadth-First Search,BFS)
  深度优先搜索(Depth-First Search,DFS)
 */
function Dictionary() {
  let items = {};
  // 向字典中添加新元素。
  this.set = function (key, value) {
    items[key] = value;
  };
  // 通过使用键值来从字典中移除键值对应的数据值。
  this.delete = function (key) {
    if (this.has(key)) {
      delete  items[key];
      return true
    }
    return false
  };
  // 如果某个键值存在于这个字典中,则返回 true ,反之则返回 false 。
  this.has = function (key) {
    return key in items;
  };
  // 通过键值查找特定的数值并返回。
  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };
  // 将这个字典中的所有元素全部删除。
  this.clear = function () {

  };
  // 返回字典所包含元素的数量。与数组的 length 属性类似。
  this.size = function () {
    return Object.keys(items).length;
  };
  // 将字典所包含的所有键名以数组形式返回。
  this.keys = function () {
    return Object.keys(items)
  };
  // 返回items变量
  this.getItems = function () {
    return items;
  }
  // 将字典所包含的所有数值以数组形式返回。
  this.values = function () {
    let values = [];
    for (let k in items) {
      if (this.has(k)) {
        values.push(items[k])
      }
    }
    return values
  }
}

function Queue() {
  let items = [];
  // 属性-方法
  // 向队列添加元素
  this.enqueue = function (element) {
    items.push(element);
  };
  // 从队列移除元素
  this.dequeue = function () {
    return items.shift();
  };
  // 查看队列头元素
  this.front = function () {
    return items[0];
  };
  // 检查队列是否为空
  this.isEmpty = function () {
    return items.length == 0;
  };
  this.size = function () {
    return items.length;
  };
  // 打印队列元素
  this.print = function () {
    console.log(items.toString());
  };
}

let Stack = (function () {
  const items = new WeakMap();  //{1}声明一个 WeakMap 类型的变量 items
  class Stack {
    constructor() {
      items.set(this, []); //{2} 在 constructor 中,以 this ( Stack 类自己的引用)为键,把代表栈的数组存入 items 。
    }

    push(element) {
      let s = items.get(this); //{3} 从 WeakMap 中取出值,即以 this 为键(行 {2} 设置的)从 items 中取值。
      s.push(element)
    }

    pop() {
      let s = items.get(this);
      let r = s.pop();
      return r
    }

    print() {
      let s = items.get(this);
      console.log(s.toString());
    };

    CON() {
      console.log('123')
    };

    isEmpty() {
      return items.get(this).length == 0;
    }
  }

  return Stack;
})();

function Graph() {
  let vertices = []; // 存储图中所有顶点的名字
  let adjList = new Dictionary(); // 用一个字典来存储邻接表

  // 向图中添加一个新的顶点
  this.addVertex = function (v) {
    vertices.push(v);
    /*接受顶点 v 作为参数。我们将该顶点添加到顶点列表中*/
    adjList.set(v, []);
    /* 在邻接表中,设置顶点 v 作为键对应的字典值为一个空数组*/
  };
  // 添加顶点之间的边
  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };
  // 返回字符串
  this.toString = function () {
    let s = '';
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + ' -> ';
      let neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n'
    }
    return s;
  };
  // 广度优先搜索
  let initializeColor = function () {
    let color = {};
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white';
    }
    return color;
  };
  this.bfs = function (v, callback) {
    let color = initializeColor(), // 初始化数组
      queue = new Queue(), // 存储待访问和待搜索的顶点
      d = [], // 表示距离
      pred = []; // pred 数组来表示前溯点
    queue.enqueue(v); // 存入起始顶点

    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0; // 用 0 来初始化数组 d
      pred[vertices[i]] = null; // 用 null 来初始化数组 pred
    }

    while (!queue.isEmpty()) { // 队列非空
      let u = queue.dequeue(), // 从队列中移除一个顶点
        neighbors = adjList.get(u); // 并取得一个包含其所有邻点的邻接表
      color[u] = 'grey'; // 该顶点将被标注为 grey,表示我们发现了它
      for (i = 0; i < neighbors.length; i++) {
        let w = neighbors[i]; // 取得 u 相邻的所有顶点
        if (color[w] === 'white') { // 如果该顶点未被访问过
          color[w] = 'grey'; // 将其颜色标注 grey
          queue.enqueue(w); // 并将这个顶点加入队列
          d[w] = d[u] + 1; // 给 d[u] 加1来设置 v 和 w 之间的距离
          pred[w] = u; // 设置 w 的前溯点值为 u
          queue.enqueue(w);
        }
      }
      color[u] = 'black'; // 完成探索后,颜色设置为 black
    }
    return {
      distances: d,
      predecessors: pred
    }
  };
  // 获取vertices
  this.getVertices = function () {
    return vertices;
  };
}

let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //{7}
for (let i = 0; i < myVertices.length; i++) { //{8}
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

// console.log(graph.toString());

// function printNode(value) { //{16}
//   console.log('Visited vertex: ' + value); //{17}
// }

// graph.bfs(myVertices[5], printNode); //{18}

let shortestPathA = graph.bfs(myVertices[0]);
console.log(shortestPathA);


/*********************************/
let formVertex = myVertices[0]; // 顶点 A 作为源顶点
for(let i = 0; i < myVertices.length;i++){  // 计算顶点A到其它顶点的路径
  let toVertex = myVertices[i], // 我们从顶点数组得到 toVertex
    path = new Stack(); // 然后会创建一个栈(path)来存储路径值
  // 追溯 toVertex 到 fromVertex 的路径;变量 v 被赋值为其前溯点的值,反向追溯这条路径;
  for(let v = toVertex;v!== formVertex;v = shortestPathA.predecessors[v]){
    path.push(v); // 将变量 v 添加到栈中
  }
  path.push(formVertex);
  let s = path.pop(); // 我们创建了一个 s 字符串,并将源顶点赋值给它
  while (!path.isEmpty()){
    s += ' - ' + path.pop();  // 从栈中移出一个项并将其拼接到字符串 s 的后面
  }
  console.log(s);
}
