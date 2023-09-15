// Given a weighted undirected graph having A nodes, a source node C and destination node D.

const PriorityQueue = require("../Queues/PriorityQueue");

// Find the shortest distance from C to D and if it is impossible to reach node D from C then return -1.

// You are expected to do it in Time Complexity of O(A + M).

// Note:

// There are no self-loops in the graph.

// No multiple edges between two pair of vertices.

// The graph may or may not be connected.

// Nodes are Numbered from 0 to A-1.

// Your solution will run on multiple testcases. If you are using global variables make sure to clear them.

function findMinPath(A, B, C, D) {
    const n = A, m = B.length, adj = [...Array(n+1)].map(_ => []), visited = Array(n+1).fill(false);
    const pq = new PriorityQueue((a,b) => a[0] < b[0]);

    for(let i=0;i<m;i++) {
        const [u, v, w] = B[i];
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }
    
    pq.enqueue([0, C]);

    while(!pq.empty()) {
        const [curDist, u] = pq.dequeue();
        visited[u] = true;

        if(u === D) {
            return curDist;
        }   
        for(let i=0;i<adj[u].length;i++) {
            const [v, w] = adj[u][i], dist = curDist + w;

            if(!visited[v]) {
                pq.enqueue([dist, v]);
            }
        }
    }

    return -1;
}

console.log(findMinPath(10, [[5,7,1],[1,7,2],[7,9,1],[6,9,1],[2,3,2],[3,6,2],[3,8,1],[2,7,2],[1,6,2],[1,5,2],[1,3,2],[1,4,1],[4,9,2]], 6, 5));