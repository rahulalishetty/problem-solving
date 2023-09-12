// Given a matrix of integers A of size N x M consisting of 0 and 1. A group of connected 1's forms an island. From a cell (i, j) such that A[i][j] = 1 you can visit any cell that shares a corner with (i, j) and value in that cell is 1.

// More formally, from any cell (i, j) if A[i][j] = 1 you can visit:

// (i-1, j) if (i-1, j) is inside the matrix and A[i-1][j] = 1.
// (i, j-1) if (i, j-1) is inside the matrix and A[i][j-1] = 1.
// (i+1, j) if (i+1, j) is inside the matrix and A[i+1][j] = 1.
// (i, j+1) if (i, j+1) is inside the matrix and A[i][j+1] = 1.
// (i-1, j-1) if (i-1, j-1) is inside the matrix and A[i-1][j-1] = 1.
// (i+1, j+1) if (i+1, j+1) is inside the matrix and A[i+1][j+1] = 1.
// (i-1, j+1) if (i-1, j+1) is inside the matrix and A[i-1][j+1] = 1.
// (i+1, j-1) if (i+1, j-1) is inside the matrix and A[i+1][j-1] = 1.
// Return the number of islands.

// NOTE: Rows are numbered from top to bottom and columns are numbered from left to right.

function numberOfIslands(A) {
    const n = A.length, m = A[0].length, visited = [...Array(n)].map(e => Array(m).fill(false)),
        dx = [-1, 1, 0, 0, -1, 1, -1, 1], dy = [0, 0, -1, 1, -1, 1, 1, -1];
    let islands = 0;

    function isInside(x, y) {
        return x < n && y < m && x >= 0 && y >= 0;
    }

    function dfs(x, y) {
        visited[x][y] = true;

        for(let i=0;i<dx.length;i++) {
            const nextX = x + dx[i], nextY = y + dy[i];
            if(isInside(nextX, nextY) && !visited[nextX][nextY] && A[nextX][nextY] === 1) {
                dfs(nextX, nextY);
            }
        }
    }

    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            if(A[i][j] === 1 && !visited[i][j]) {
                dfs(i, j);
                islands++;
            }
        }
    }

    return islands;
}

console.log(numberOfIslands([ 
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
]));

console.log(numberOfIslands([   
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1],    
]))