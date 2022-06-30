class Graph {
    constructor() {
        this.list = {};
    }

    addVertex(v) {
        this.list[v] = [];
        return this;
    }

    addEdge(v1, v2, w) {
        this.list[v1].push({v: v2, w});
        this.list[v2].push({v: v1, w});
        return this;
    }

    dfs(start) {
        let stack = [start];
        let result = [];
        let visited = {};
        visited[start.v] = true;
        let curr;
        while (stack.length) {
            curr = stack.pop(); // stack.shift() for bfs which would be called queue.
            result.push(curr);

            this.list[curr.v].forEach(function(n){
               if (!visited[n.v]) {
                   visited[n.v] = true;
                   stack.push(n);
               } 
            });
        }
        return result;
    }

    getSmallest() {
        let min = Infinity;
        let node;
        for (let v in this.distances) {
            if ((this.distances[v] < min) && !this.visited[v]) {
                min = this.distances[v];
                node = v;
            }
        }
        return node;
    }

    initDijkstra(start) {
        this.distances = {};
        this.visited = {};
        this.previous = {};
        this.previous[start] = '';

        for (let v in this.list) {
            if (v == start) {
                this.distances[v] = 0;
            } else {
                this.distances[v] = Infinity;
            } 
        }
        return this;
    }

    dijkstra(start) {
        start = start || this.getSmallest();
        if (!start) return this; // we've visited all, return;
        this.visited[start] = true;
        let val = this.distances[start];
        let d;
        let _this = this;
        this.list[start].forEach(function(n){
            if (!_this.visited[n.v]) {
                d = val + n.w; //weight
                if (d < _this.distances[n.v]) {
                    _this.distances[n.v] = d;
                    _this.previous[n.v] = start;
                }
            }
            
        });
        return this.dijkstra();

    }

}

let g = new Graph();
// g.addVertex('A').addVertex('B').addVertex('C').addVertex('D');
// g.addEdge('A', 'B', 1).addEdge('A', 'C', 2).addEdge('B', 'D', 3).addEdge('C', 'D', 1);

g.addVertex('A').addVertex('B').addVertex('C').addVertex('D').addVertex('E').addVertex('F');
g.addEdge('A', 'B', 4).addEdge('A', 'C', 2).addEdge('B', 'E', 3).addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4).addEdge('D', 'E', 3).addEdge('D', 'F', 1).addEdge('F', 'E', 1);

g.initDijkstra('A');
console.log(g.dijkstra());