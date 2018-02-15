// 迪杰斯特拉算法
let arr = ['A', 'B', 'C', 'D', 'E', 'F'];

function ShortestPath(graph) {
  this.graph = graph;
  let INF = Number.MAX_SAFE_INTEGER;
  let minDistance = function (dist, visited) {
    let min = INF,
      minIndex = -1;
    /*
      for循环语句,主要目的是从尚未处理的顶点中选出距离最近的顶点,
                          why?
      这里是查询最近节点的.之前,我在疑惑,那个 邻接矩阵 中不是存在很多  0 吗?为什么我在这里居然一个都不用处理,结果是我脑子不够用了.那些 0 ,在另一个for循环(将各节点的最短距离存储dist)中,就已经被过滤掉了.
       好了,开始下一个问题,也就是核心问题,这段程序是如何从尚未处理的顶点中选出距离最近的顶点.
       我是这么想的,首先,不用去考虑乱七八糟的 0;每一次循环结束(一次循环 dist.length - 1 次),我都将获取到
    */
    for (let v = 0; v < dist.length; v++) {
      console.log('--------');
      console.log('未处理的 min: ' + min);
      if (visited[v] == false && dist[v] <= min) {
        min = dist[v]; // 为下一个循环创造判断依据
        console.log('已处理的 min: ' + min);
        console.log(`A - ${arr[v]} 的距离:${dist[v]}`);
        minIndex = v; // 从尚未处理的顶点中选出距离最近的顶点
      }
    }
    console.log('minIndex: ' + minIndex);
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
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

      console.log(`第${i + 1}次执行程序!`);
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
                举例:
                  A 到 B 的距离 加上 B 到 C 的距离 小于 A 到 C 的最短距离.
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
let n = 2;
let dist = shortestPath.dijkstra(n);
// console.log('dist:' + dist);
// console.log(dist);
// for (i = 0; i < dist.length; i++) {
//   // console.log(i + '\t\t' + dist[i]);
//   if (dist[i] === 0) {
//     dist.splice(i, 1)
//   }
// }
for (let j = 0; j < dist.length; j++) {
  if (n !== j) {
    if (dist[j] < Number.MAX_SAFE_INTEGER) {
      console.log(`${arr[n]} --> ${arr[j]} 的最短距离为: ${dist[j]}`)
    } else {
      console.log(`${arr[n]} --> ${arr[j]} 没有最短路径`)
    }
  }
}
var maxN = Math.max.apply(null, dist);
var minN = Math.min.apply(null, dist);
console.log('最小值:' + minN);
