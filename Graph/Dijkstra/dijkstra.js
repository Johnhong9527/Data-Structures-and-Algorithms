// 迪杰斯特拉算法
function ShortestPath(graph) {

  this.graph = graph;

  let INF = Number.MAX_SAFE_INTEGER;
  let minDistance = function (dist, visited) {

    let min = INF,
      minIndex = -1;
    //
    for (let v = 0; v < dist.length; v++) {
      /*
      如果顶点未被探索.并且 源顶点距离其他顶点的最短距离 <=  min
      min: dist[v-1] 的值,
      在下面这个判断中,我们要理解的是,这个dist[v] 的值距离
      举例:
        dist[c] <= dist[b]
        A-->c <= A-->b
      如果条件符合,就返回这个节点
       */
      if (visited[v] == false && dist[v] <= min) {
        min = dist[v]; // 为下一个循环创造判断依据
        minIndex = v; // 从尚未处理的顶点中选出距离最近的顶点
      }
    }
    return minIndex;
  };

  this.dijkstra = function (src) {

    let dist = [],   // 源顶点距离其他顶点的最短距离
      visited = [], // 存储各顶点是否被查询的依据
      length = this.graph.length;

    for (let i = 0; i < length; i++) {
      dist[i] = INF; // 所有的距离( dist )初始化为无限大
      visited[i] = false; // 将 visited[] 初始化为 false
    }

    dist[src] = 0; // 2:源顶点到自己的距离设为 0

    for (let i = 0; i < length - 1; i++) { // 3:要找出到其余顶点的最短路径

      let u = minDistance(dist, visited); // 4:从尚未处理的顶点中选出距离最近的顶点

      visited[u] = true; // 5:把选出的顶点标为 visited ,以免重复计算

      for (let v = 0; v < length; v++) {
        // 6-7:找到更短的路径,则更新最短路径的值
        /*
        筛选依据
          1: 该节点已被探索完毕
          2: 路径不为0
          3: 最短距离不为 js最大值
          4:
            dist[u] : 表示 A 到 u顶点 的距离的最短值
            this.graph[u][v] : 表示 u顶点 到 v顶点的距离
            dist[v] : 表示 A 到 v顶点的距离的最短值
            说明:
                A 到 v顶点 的距离的最短值 加上 u顶点 到 v顶点 的距离 小于 A 到 v顶点 的距离的最短值
         */
        if (!visited[v] && this.graph[u][v] != 0 && dist[u] != INF && dist[u] + this.graph[u][v] < dist[v]) { // 6:
          dist[v] = dist[u] + this.graph[u][v]; // 7:
        }
      }
    }

    return dist; // 8:处理完所有顶点后,返回从源顶点( src )到图中其他顶点最短路径的结果
  };

}

//adjacent matrix
let i;

let graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
];

let shortestPath = new ShortestPath(graph);

let dist = shortestPath.dijkstra(0);
console.log('dist:' + dist);
console.log(dist);
for (i = 0; i < dist.length; i++) {
  console.log(i + '\t\t' + dist[i]);
  if (dist[i] === 0) {
    dist.splice(i, 1)
  }
}

var maxN = Math.max.apply(null, dist);
var minN = Math.min.apply(null, dist);
console.log('最小值:' + minN);