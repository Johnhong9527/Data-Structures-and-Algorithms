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
  // 获取vertices
  this.getVertices = function () {
    return vertices;
  };
  // 深度优先搜索
  let initializeColor = function () {
    let color = {};
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white';
    }
    return color;
  };
  let time = 0; // 我们需要一个变量来要追踪发现时间和完成探索时间
  this.DFS = function () {
    let color = initializeColor(),
      d = [], // 探索点发现时间
      f = [], //
      p = []; // 前溯点
    time = 0;
    for (let i = 0; i < vertices.length; i++) { //我们需要为图的每一个顶点来初始化这些数组
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = null;
    }
    for (let i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        DFSVisit(vertices[i], color, d, f, p);
      }
    }
    return { // 在这个方法结尾处返回这些值(行 {4} ),之后我们要用到它们
      discovery: d,
      finished: f,
      predecessors: p
    }
  };

  let DFSVisit = function (u, color, d, f, p) {
    console.log('discovered ' + u);
    color[u] = 'grey';
    d[u] = ++time; //{5} 追踪其发现时间
    let neighbors = adjList.get(u); // 这里通过字典的数据结构,以递归的形式,探索顶点
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i]; // w 表示
      if (color[w] === 'white') {
        p[w] = u; // {6} 当它是由引自顶点 u 的边而被发现的,我们追踪它的前溯点
        DFSVisit(w, color, d, f, p); // 递归
      }
    }
    color[u] = 'black';
    f[u] = ++time; //{7} 当这个顶点被完全探索后,我们追踪其完成时间
    console.log('explored ' + u);
  };
}

// 测试
graph = new Graph();
myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');
var result = graph.DFS();
console.log(result.finished);
var fTimes = result.finished;
console.log(fTimes)
s = '';
for (var count=0; count<myVertices.length; count++){
  var max = 0;
  var maxName = null;
  for (i=0; i<myVertices.length; i++){
    if (fTimes[myVertices[i]] > max){
      max = fTimes[myVertices[i]];
      maxName = myVertices[i];
    }
  }
  s += ' - ' + maxName;
  delete fTimes[maxName];
}
console.log(s);
