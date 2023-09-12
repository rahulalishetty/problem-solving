// There is a rectangle with left bottom as (0, 0) and right up as (x, y).

// There are N circles such that their centers are inside the rectangle.

// Radius of each circle is R. Now we need to find out if it is possible that we can move from (0, 0) to (x, y) without touching any circle.

// Note : We can move from any cell to any of its 8 adjecent neighbours and we cannot move outside the boundary of the rectangle at any point of time.

function validPath(A, B, C, D, E, F) {
    const x = A, y = B, n = C, r = D, circleX = E, circleY = F, visited = [...Array(x+1)].map(e => Array(y+1).fill(false));
    const dx = [-1, 1, 0, 0, -1, 1, -1, 1], dy = [0, 0, -1, 1, -1, 1, 1, -1];

    function isInside(x1, y1) {
        return x1 < x && y1 < y && x1 >= 0 && y1 >= 0;
    }

    function isInsideCircles(x, y) {
        for(let i=0;i<circleX.length;i++) {
            if(Math.pow(x-circleX[i], 2) + Math.pow(y-circleY[i], 2) <= r*r) return true;
        }
        return false;
    }

    function dfs(x, y) {
        visited[x][y] = true;

        for(let i=0;i<dx.length;i++) {
            const nextX = x + dx[i], nextY = y + dy[i];
            if(isInside(nextX, nextY) && !isInsideCircles(nextX, nextY) && !visited[nextX][nextY]) {
                dfs(nextX, nextY)
            }
        }
    }

    if(isInsideCircles(0,0)) return "NO";

    dfs(0, 0);

    return visited[x][y] ? "YES" : "NO";
}