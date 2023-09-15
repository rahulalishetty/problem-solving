// Given a undirected graph having A nodes. A matrix B of size M x 2 is given which represents the edges such that there is an edge between B[i][0] and B[i][1].

// Find whether the given graph is bipartite or not.

// A graph is bipartite if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B

// Note:

// There are no self-loops in the graph.

// No multiple edges between two pair of vertices.

// The graph may or may not be connected.

// Nodes are Numbered from 0 to A-1.

// Your solution will run on multiple testcases. If you are using global variables make sure to clear them.

function checkBipartite(A, B) {
    const n = A, adj = [...Array(n)].map(e => []), color = Array(n).fill(-1);
    
    for(let i=0;i<B.length;i++) {
        const u = B[i][0], v = B[i][1];
        adj[u].push(v);
        adj[v].push(u);
    }

    function dfs(node) {
        for(let i=0;i<adj[node].length;i++) {
            const nextNode = adj[node][i];

            if(color[nextNode] === -1) {
                color[nextNode] = 1 - color[node];
                if(!dfs(nextNode)) return false;
            } else if(color[nextNode] === color[node]) return false;
        }

        return true;
    }

    for(let i=0;i<n;i++) {
        if(color[i] === -1) {
            color[i] = 1;
            if(!dfs(i)) return 0;        
        }
    }
    return 1;
}

console.log(checkBipartite(3, [ [0, 1], [0, 2], [1, 2] ]));
console.log(checkBipartite(2, [ [0, 1] ]));
console.log(checkBipartite(42, [[22,30],[10,17],[13,33],[0,39],[16,26],[14,23],[5,31],[7,22],[29,30],[16,19],[9,40],[4,20],[8,25],[5,6],[6,28],[28,29],[23,25],[5,26],[24,39],[28,31],[3,7],[0,10],[13,21],[0,19],[15,36],[7,16],[4,41],[32,35],[7,21],[23,26],[5,28],[12,36],[6,33],[6,13],[11,37],[16,41],[14,20],[16,34],[6,17],[31,40],[3,33],[19,30],[4,23],[17,33],[4,11],[7,32],[6,8],[16,32],[5,35],[22,25],[2,30],[14,24],[2,12],[9,27],[9,12],[3,23],[4,27],[0,6],[3,25],[17,28],[11,36],[33,34],[38,39]]));
