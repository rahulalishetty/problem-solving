// Given an directed graph having A nodes. A matrix B of size M x 2 is given which represents the M edges such that there is a edge directed from node B[i][0] to node B[i][1].

// Find whether the graph contains a cycle or not, return 1 if cycle is present else return 0.

// NOTE:

// The cycle must contain atleast two nodes.
// There are no self-loops in the graph.
// There are no multiple edges between two nodes.
// The graph may or may not be connected.
// Nodes are numbered from 1 to A.
// Your solution will run on multiple test cases. If you are using global variables make sure to clear them.

function detectCycle(A, B) {
    const n = A, m = B.length, adj = [...Array(n+1)].map(e => []), visited = Array(n+1).fill(false),
        visitedInDFS = Array(n+1).fill(false);
    
    function dfs(node) {
        visited[node] = true;
        visitedInDFS[node] = true;

        for(let i=0;i<adj[node].length;i++) {
            const nextNode = adj[node][i];
            if(!visited[nextNode]) {
                return dfs(nextNode);
            } else if(visitedInDFS[nextNode]) {
                return true;
            }
        }

        visitedInDFS[node] = false;
        return false;
    }

    for(let i=0;i<m;i++) {
        const u = B[i][0], v = B[i][1];
        adj[u].push(v);
    }

    let isCycle = false;
    for(let i=1;i<=n;i++) {
        if(!visited[i]) {
            if(dfs(i)) {
                isCycle = true;
                break;
            }
        }
    }

    return isCycle ? 1 : 0;
}

console.log(detectCycle(5, [  [1, 2], 
    [4, 1],
    [2, 4], 
    [3, 4], 
    [5, 2], 
    [1, 3], 
]));

console.log(detectCycle(5, [  [1, 2],
    [2, 3], 
    [3, 4], 
    [4, 5], 
]));
