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
    var values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k])
      }
    }
    return values
  }
}

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
  }
  // 获取vertices
  this.getVertices = function () {
    return vertices;
  }
  // 深度优先搜索
  let initializeColor = function () {
    let color = {};
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white';
    }
    return color;
  };
  this.dfs = function(callback){

    var color = initializeColor(); // 创建颜色数组,用值 white 为图中的每个顶点对其做初始化

    for (var i=0; i<vertices.length; i++){
      if (color[vertices[i]] === 'white'){
        // 调用私有的递归函数 dfsVisit ,传递的参数为顶点、颜色数组以及回调函数
        dfsVisit(vertices[i], color, callback);
      }
    }
  };

  let dfsVisit = function (u, color, callback) {
    color[u] = 'grey'; // 当访问 u 顶点时,我们标注其为被发现的
    if (callback) { // 有callback函数的话,执行该函数输出已访问过的顶点.
      callback(u);
    }
    let neighbors = adjList.get(u); // 取得包含顶点u所有邻点的列表
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if (color[w] === 'white') { // 对于顶点u的每一个未被访问过的邻点w
        dfsVisit(w, color, callback) // 将调用dfsVisit函数，传递w和其他参数,添加顶点w入栈
      }
    }
    color[u] = 'black'; // 在该顶点和邻点按深度访问之后，我们回退，意思是该顶点已被完全探索，并将其标注为black
  }
}

// 测试
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

function printNode(value) { //{16}
  console.log('Visited vertex: ' + value); //{17}
}

graph.dfs(printNode);