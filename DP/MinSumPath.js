// Given a M x N grid A of integers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Return the minimum sum of the path.

// NOTE: You can only move either down or right at any point in time.

function minSumPath(A) {
    const n = A.length, m = A[0].length;

    for(let i=1;i<n;i++) A[i][0] += A[i-1][0];
    for(let i=1;i<m;i++) A[0][i] += A[0][i-1];

    for(let i=1;i<n;i++) {
        for(let j=1;j<m;j++) {
            A[i][j] += Math.min(A[i-1][j], A[i][j-1]);
        }
    }
    return A[n-1][m-1];
}

console.log(minSumPath([
    [1, 3, 2],
    [4, 3, 1],
    [5, 6, 1]
]));

console.log(minSumPath([
    [1, -3, 2],
    [2, 5, 10],
    [5, -5, 1]
]));
