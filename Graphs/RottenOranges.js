// Given a matrix of integers A of size N x M consisting of 0, 1 or 2.

// Each cell can have three values:

// The value 0 representing an empty cell.

// The value 1 representing a fresh orange.

// The value 2 representing a rotten orange.

// Every minute, any fresh orange that is adjacent (Left, Right, Top, or Bottom) to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1 instead.

// Note: Your solution will run on multiple test cases. If you are using global variables, make sure to clear them.
const Queue = require('../Queues/Queue');

function rottenOranges(A) {
    const n = A.length, m=A[0].length, q = new Queue();
    const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1], time = [...Array(n)].map(_ => Array(m).fill(Infinity));

    function isInside(x1, y1) {
        return x1 < n && y1 < m && x1 >= 0 && y1 >= 0;
    }

    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            if(A[i][j] === 2) {
                time[i][j] = 0;
                q.enqueue([i, j]);
            } 
        }
    }

    while(!q.empty()) {
        const [x, y] = q.dequeue();

        for(let i=0;i<dx.length;i++) {
            const nextX = x + dx[i], nextY = y + dy[i];

            if(isInside(nextX, nextY) && A[nextX][nextY] === 1 && time[x][y] + 1 < time[nextX][nextY]) {
                time[nextX][nextY] = time[x][y] + 1;
                q.enqueue([nextX, nextY]);
            }
        }
    }

    let ans = 0;
    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            if(A[i][j] === 1) {
                ans = Math.max(ans, time[i][j]);
            } 
        }
    }

    return ans === Infinity ? -1 : ans;
}

console.log(rottenOranges([   
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
]));

console.log(rottenOranges([[2,0,2,2,2,0,2,1,1,0],[0,1,2,0,2,0,0,1,0,1],[0,1,1,1,2,0,1,1,2,1],[2,0,2,0,1,1,2,1,0,1],[1,0,1,1,0,1,2,0,2,2],[0,2,1,1,2,2,0,2,1,2],[2,1,0,2,0,0,0,0,1,1],[2,2,0,2,2,1,1,1,2,2]]));
