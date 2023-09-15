// Given a graph with A nodes and C weighted edges. Cost of constructing the graph is the sum of weights of all the edges in the graph.

// Find the minimum cost of constructing the graph by selecting some given edges such that we can reach every other node from the 1st node.

// NOTE: Return the answer modulo 109+7 as the answer can be large.
const PriorityQueue = require('../Queues/PriorityQueue');

function findMinSpanningTree(A, B) {
    const n = A, m = B.length, parent = [...Array(A+1)].map((e, i) => i), mod = 1e9+7;
    B.sort((a, b) => a[2] - b[2]);
    
    function getRoot(x) {
        if(x !== parent[x]) {
            parent[x] = getRoot(parent[x]);
        }
        return parent[x];
    }

    function union(x, y) {
        const rootX = getRoot(x);
        const rootY = getRoot(y);

        if(rootX !== rootY)
            parent[rootX] = rootY;
    }

    let ans = 0;
    for(let i=0;i<m;i++) {
        const [u, v, w] = B[i];

        if(getRoot(u) === getRoot(v)) continue;
        else {
            union(u, v);
            ans = (ans + w) % mod;
        }
    }

    return ans;
}

function findMinSpanningTreePrims(A, B) {
    const n = A, m = B.length, mod = 1e9+7, pq = new PriorityQueue((a,b) => a[0] < b[0]), adj = [...Array(n+1)].map(_ => []),
        visited = Array(n+1).fill(false);

    for(let i=0;i<m;i++) {
        const u = B[i][0], v = B[i][1], w = B[i][2];
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    let cost = 0;
    pq.enqueue([0, 1]);

    while(!pq.empty()) {
        const [curCost, u] = pq.dequeue();
        
        if(!visited[u]) {
            cost = (cost + curCost) % mod;
            visited[u] = true;
        }

        for(let i=0;i<adj[u].length;i++) {
            const [v, w] = adj[u][i];

            if(!visited[v]) {
                pq.enqueue([w, v]);
            }
        }
    }

    return cost;
}

console.log(findMinSpanningTreePrims(3, [[1,2,14], [2,3,7], [3,1,2]]));