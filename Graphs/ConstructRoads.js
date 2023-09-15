// A country consist of N cities connected by N - 1 roads. King of that country want to construct maximum number of roads such that the new country formed remains bipartite country.

// Bipartite country is a country, whose cities can be partitioned into 2 sets in such a way, that for each road (u, v) that belongs to the country, u and v belong to different sets. Also, there should be no multiple roads between two cities and no self loops.

// Return the maximum number of roads king can construct. Since the answer could be large return answer % 109 + 7.

// NOTE: All cities can be visited from any city.

function constructRoads(A, B) {
    const n = A, m = B.length, adj = [...Array(n+1)].map(e => []), color = Array(n+1).fill(-1), colorCount = [0,1], mod = 1e9+7;
    
    for(let i=0;i<m;i++) {
        const u = B[i][0], v = B[i][1];
        adj[u].push(v);
        adj[v].push(u);
    }

    function dfs(node) {
        for(let i=0;i<adj[node].length;i++) {
            const nextNode = adj[node][i];

            if(color[nextNode] === -1) {
                color[nextNode] = 1 - color[node];
                colorCount[color[nextNode]]++;
                dfs(nextNode);
            }
        }

        return true;
    }

    for(let i=0;i<n;i++) {
        if(color[i] === -1) {
            color[i] = 1;
            dfs(i);        
        }
    }   

    return ((colorCount[1] * colorCount[0]) - (n - 1))%mod;
}

console.log(constructRoads(5, [
    [1, 3],
    [1, 4],
    [3, 2],
    [3, 5],
]))