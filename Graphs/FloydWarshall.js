// Given a matrix of integers A of size N x N, where A[i][j] represents the weight of directed edge from i to j (i ---> j).

// If i == j, A[i][j] = 0, and if there is no directed edge from vertex i to vertex j, A[i][j] = -1.

// Return a matrix B of size N x N where B[i][j] = shortest path from vertex i to vertex j.

// If there is no possible path from vertex i to vertex j , B[i][j] = -1

// Note: Rows are numbered from top to bottom and columns are numbered from left to right.

function floydWarshall(A) {
    const n = A.length;
    for(let i=0;i<n;i++) {
        A[i] = A[i].map(edge => edge === -1 ? Infinity : edge);
    }
    for(let inter=0;inter<n;inter++) {
        for(let u=0;u<n;u++) {
            for(let v=0;v<n;v++) {
                if(A[u][inter] + A[inter][v] < A[u][v]) A[u][v] = A[u][inter] + A[inter][v]; 
            }
        }
    }
    for(let i=0;i<n;i++) {
        A[i] = A[i].map(edge => edge === Infinity ? -1 : edge);
    }
    return A;
}

console.log(floydWarshall([ 
    [0 , 50 , 39],
    [-1 , 0 , 1],
    [-1 , 10 , 0], 
]))