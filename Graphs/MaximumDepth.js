// Given a Tree of A nodes having A-1 edges. Each node is numbered from 1 to A where 1 is the root of the tree.

// You are given Q queries. In each query, you will be given two integers L and X. Find the value of such node which lies at level L mod (MaxDepth + 1) and has value greater than or equal to X.

// Answer to the query is the smallest possible value or -1, if all the values at the required level are smaller than X.

// NOTE:

// Level and Depth of the root is considered as 0.
// It is guaranteed that each edge will be connecting exactly two different nodes of the tree.
// Please read the input format for more clarification.

function solve(A, B, C, D, E, F) {
    const adj = [...Array(A+1)].map(e => []), visited = Array(A+1).fill(false), levelMap = {};
    
    for(let i=0;i<B.length;i++) {
        const u = B[i], v = C[i];
        adj[u].push(v);
        adj[v].push(u);
    }

    function dfs(node, depth) {
        visited[node] = true;
        if(levelMap.hasOwnProperty(depth)) {
            levelMap[depth].push(D[node-1]);
        } else levelMap[depth] = [D[node-1]];

        let curDepth = depth;
        for(let i=0;i<adj[node].length;i++) {
            const nextNode = adj[node][i];

            if(!visited[nextNode]) {
                curDepth = Math.max(dfs(nextNode, depth + 1), curDepth);
            }
        }
        return curDepth;
    }

    function lowerBound(a, low, high, element) {
        while (low < high) {
            let middle = low + ((high - low) >> 1);
            if (element > a[middle]) {
                low = middle + 1;
            } else {
                high = middle;
            }
        }
        return low;
    }

    const maxDepth = dfs(1, 0), ans = [];
    
    Object.keys(levelMap).forEach(level => {
        levelMap[level].sort(function (a, b) {
            return a - b
        });
    })

    for(let i=0;i<E.length;i++) {
        const l = E[i] % (maxDepth + 1);
        const it = lowerBound(levelMap[l], 0, levelMap[l].length, F[i]);
        if(it === levelMap[l].length) ans.push(-1);
        else ans.push(levelMap[l][it]);
    }

    return ans;
}

console.log(solve(5, [1, 4, 3, 1], [5, 2, 4, 4], [7, 38, 27, 37, 1], [1, 1, 2], [32, 18, 26]));