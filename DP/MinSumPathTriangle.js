// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// Adjacent numbers for jth column of ith row is jth and (j+1)th column of (i + 1)th row

function minSumPath(A) {
    const n = A.length;

    for(let i=n-2;i>=0;i--) {
        for(let j=i;j>=0;j--) {
            A[i][j] = Math.min(A[i+1][j], A[i+1][j+1]) + A[i][j];
        }
    }

    return A[0];
}

console.log(minSumPath([
    [2],
   [3, 4],
  [6, 5, 7],
 [4, 1, 8, 3]
]));

console.log(minSumPath([[1]]));