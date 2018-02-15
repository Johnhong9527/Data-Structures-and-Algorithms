function ShortestPath(graph) {

  this.graph = graph;
  this.floydWarshall = function () {

    let dist = [],
      length = this.graph.length,
      i, j, k;

    // 首先，把dist数组初始化为每个顶点之间的权值，因为i到j可能的最短距离就是这些顶点间的权值
    for (i = 0; i < length; i++) {
      dist[i] = [];
      for (j = 0; j < length; j++) {
        dist[i][j] = this.graph[i][j];
      }
    }
    // 通过k，得到i途径顶点0至k，到达j的最短路径
    for (k = 0; k < length; k++) {
      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          // 判断i经过顶点k到达j的路径是否比已有的最短路径更短
          console.log('k ' + k);
          console.log('i ' + i);
          console.log('j ' + j);
          console.log('dist[i][k]: ' + dist[i][k]);
          console.log('dist[k][j]: ' + dist[k][j]);
          console.log('dist[i][j]: ' + dist[i][j]);
          console.log(dist[i][k] + dist[k][j] < dist[i][j]);
          console.log(`--------------------------------------------`)
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            // 如果是更短的路径，则更新最短路径的值
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }

    return dist;
  }
}

let INF = Number.MAX_SAFE_INTEGER;
let graph = [
  [0, 2, 4, INF, INF, INF],
  [INF, 0, 2, 4, 2, INF],
  [INF, INF, 0, INF, 3, INF],
  [INF, INF, INF, 0, INF, 2],
  [INF, INF, INF, 3, 0, 2],
  [INF, INF, INF, INF, INF, 0]
];
console.log(graph)
console.log(`-----graph----`)
let shortestPath = new ShortestPath(graph);

let dist = shortestPath.floydWarshall();
console.log(dist);
let s = '';
for (let i = 0; i < dist.length; ++i) {
  s = '';
  for (let j = 0; j < dist.length; ++j) {
    if (dist[i][j] === INF)
      s += "INF ";
    else
      s += dist[i][j] + "   ";
  }
  console.log(s);
}