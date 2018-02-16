/*
Prim算法是一种求解加权无向连通图的MST问题的贪心算法。它能找出一个边的子集,使得
其构成的树包含图中所有顶点,且边的权值之和最小。
 */


function MinimumSpanningTree(graph) {

  this.graph = graph;

  var INF = Number.MAX_SAFE_INTEGER;

  var minKey = function (key, visited) {
    // Initialize min value
    var min = INF, minIndex;

    for (var v = 0; v < this.graph.length; v++){
      if (visited[v] == false && key[v] < min) {
        min = key[v];
        minIndex = v;
      }
    }

    return minIndex;
  };

  this.prim = function() {
    var parent = [],
      key = [],
      visited = [],
      length = this.graph.length,
      i;

    for (i = 0; i < length; i++){
      key[i] = INF;
      visited[i] = false;
    }

    key[0] = 0;
    parent[0] = -1;

    for (i = 0; i < length-1; i++) {
      var u = minKey(key, visited);
      visited[u] = true;

      for (var v = 0; v < length; v++){
        if (this.graph[u][v] && visited[v] == false && this.graph[u][v] <  key[v]){
          parent[v]  = u;
          key[v] = this.graph[u][v];
        }
      }
    }

    return parent;
  };
}