// Given an directed acyclic graph having A nodes. A matrix B of size M x 2 is given which represents the M edges such that there is a edge directed from node B[i][0] to node B[i][1].

// Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge uv, vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.

// Return the topological ordering of the graph and if it doesn't exist then return an empty array.

// If there is a solution return the correct ordering. If there are multiple solutions print the lexographically smallest one.

// Ordering (a, b, c) is said to be lexographically smaller than ordering (e, f, g) if a < e or if(a==e) then b < f and so on.

// NOTE:

// There are no self-loops in the graph.
// The graph may or may not be connected.
// Nodes are numbered from 1 to A.
// Your solution will run on multiple test cases. If you are using global variables make sure to clear them.

function topologicalSort(A, B) {
    const n = A, m = B.length, pq = new PriorityQueue((a,b) => a < b),
        adj = [...Array(n+1)].map(e => []), visited = Array(n+1).fill(false), indegree = Array(n+1).fill(0);
    const topoligicalOrder = [];

    for(let i=0;i<m;i++) {
        const u = B[i][0], v = B[i][1];
        adj[u].push(v);
        indegree[v]++;
    }

    for(let i=1;i<=n;i++) {
        if(indegree[i] === 0)
            pq.enqueue(i);
    }

    let total = 0;
    while(!pq.empty()) {
        const node = pq.dequeue();
        topoligicalOrder.push(node); total++;

        for(let i=0;i<adj[node].length;i++) {
            const v = adj[node][i];
            indegree[v]--;
            if(indegree[v] === 0) pq.enqueue(v);
        }
    }

    if(total === n) return topoligicalOrder;
    return [];
}