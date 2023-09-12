// Given an directed graph having A nodes labelled from 1 to A containing M edges given by matrix B of size M x 2such that there is a edge directed from node

// B[i][0] to node B[i][1].

// Find whether a path exists from node 1 to node A.

// Return 1 if path exists else return 0.

// NOTE:

// There are no self-loops in the graph.
// There are no multiple edges between two nodes.
// The graph may or may not be connected.
// Nodes are numbered from 1 to A.
// Your solution will run on multiple test cases. If you are using global variables make sure to clear them.
const Queue = require('../Queues/Queue');

function detectPath(A, B) {
    const n = A, m = B.length, adj = [...Array(n+1)].map(e => []), visited = Array(n+1).fill(false);

    function dfs(node) {
        visited[node] = true;
        if(node === n) return;

        for(let i=0;i<adj[node].length;i++) {
            if(!visited[adj[node][i]]) {
                dfs(adj[node][i]);
            }
        }
    }

    function bfs() {
        const q = new Queue();
        q.enqueue(1);
        visited[1] = true;

        while(!q.empty()) {
            const u = q.dequeue();
            for(let i=0;i<adj[u].length;i++) {
                const v = adj[u][i];
                if(!visited[v]) {
                    q.enqueue(v);
                    visited[v] = true;
                    if(v === n) break;
                }
            }
        }
    }

    for(let i=0;i<m;i++) {
        const u = B[i][0], v = B[i][1];
        adj[u].push(v);
    }

    bfs();
    
    return visited[n] ? 1 : 0;
}

console.log(detectPath(5, [  [1, 2], 
    [4, 1], 
    [2, 4], 
    [3, 4], 
    [5, 2], 
    [1, 3] ]
));

console.log(detectPath(5, [  [1, 2],
    [2, 3], 
    [3, 4], 
    [4, 5] ]
));