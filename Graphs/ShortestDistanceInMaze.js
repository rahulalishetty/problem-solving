// Given a matrix of integers A of size N x M describing a maze. The maze consists of empty locations and walls.

const PriorityQueue = require("../Queues/PriorityQueue");

// 1 represents a wall in a matrix and 0 represents an empty location in a wall.

// There is a ball trapped in a maze. The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall (maze boundary is also considered as a wall). When the ball stops, it could choose the next direction.

// Given two array of integers of size B and C of size 2 denoting the starting and destination position of the ball.

// Find the shortest distance for the ball to stop at the destination. The distance is defined by the number of empty spaces traveled by the ball from the starting position (excluded) to the destination (included). If the ball cannot stop at the destination, return -1.

function shortestDistanceInMaze(maze, start, destination) {
    const n = maze.length, m = maze[0].length, sx = start[0], sy = start[1], ex = destination[0],
        ey = destination[1], visited = [...Array(n)].map(e => Array(m).fill(-1)),
        pq = new PriorityQueue((a,b) =>  a[0] < b[0]), dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1]; 
        
    function isInside(x, y) {
        return x < n && y < m && x >= 0 && y >= 0;
    }
    pq.enqueue([0, sx, sy]);

    while((!pq.empty()) && visited[ex][ey] === -1) {
        const [dist, x, y] = pq.dequeue();
        console.log(x, y, pq);
        if(visited[x][y] !== -1) {
            continue;
        } else {
            visited[x][y] = dist;
        }

        for(let i=0;i<dx.length;i++) {
            let nextX = x, nextY = y, curDist = dist;

            while(true) {
                const possibleNextX = nextX + dx[i], possibleNextY = nextY + dy[i];

                if(isInside(possibleNextX, possibleNextY) && maze[possibleNextX][possibleNextY] === 0) {
                    nextX = possibleNextX;
                    nextY = possibleNextY;
                    curDist++;
                } else {
                    break;
                }
            }

            if(curDist > dist && visited[nextX][nextY] === -1) {
                pq.enqueue([curDist, nextX, nextY]);
            }
        }
    }
    
    return visited[ex][ey];
}

// console.log(shortestDistanceInMaze([ [0, 0], 
//     [0, 0] ], [0, 0], [0, 1]));

// console.log(shortestDistanceInMaze([ [0, 1], 
//     [1, 0] ], [0, 0], [1, 1]));

console.log(shortestDistanceInMaze([
    [0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
    [0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1],
    [1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1],
    [1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0],
    [0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1],
    [0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1],
    [1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0],
    [0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0],
    [1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1],
    [1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1],
    [1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0],
    [0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1],
    [1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1],
    [1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0],
    [0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1],
    [0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
], [18,11], [16, 0]));
