// Given a 2-D binary matrix A of size N x M filled with 0's and 1's, find the largest rectangle containing only ones and return its area.


function maxRectangleInBinaryMatrix(A) {
    const n = A.length, m = A[0].length;
    const max_X = [...Array(n)].map(e => Array(m).fill(0));

    for(let i=0;i<n;i++) {
        for(let j=m-1;j>=0;j--) {
            if(j===m-1) { 
                max_X[i][j] = A[i][j];
                continue;
            }
            max_X[i][j] = (A[i][j] === 0 ? 0 : max_X[i][j+1] + 1);  
        }
    }

    let maxArea = 0;
    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            let width = max_X[i][j];

            for(let k=i;k<n && width>0;k++) {
                width = Math.min(width, max_X[k][j]);
                maxArea = Math.max(maxArea, (k-i+1) * width);
            }
        }
    }
    return maxArea;
}

console.log(maxRectangleInBinaryMatrix([
    [1, 1, 1],
    [0, 1, 1],
    [1, 0, 0], 
]));

console.log(maxRectangleInBinaryMatrix([
    [0, 1, 0],
    [1, 1, 1],
]));
