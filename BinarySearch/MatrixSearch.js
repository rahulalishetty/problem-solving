// Given a matrix of integers A of size N x M and an integer B. Write an efficient algorithm that searches for integer B in matrix A.

// This matrix A has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than or equal to the last integer of the previous row.
// Return 1 if B is present in A, else return 0.

// NOTE: Rows are numbered from top to bottom, and columns are from left to right.

function searchMatrix(A, B) {
    const n = A.length, m = A[0].length;
        let l = 0, r = n*m-1;

        while(l <= r) {
            const mid = Math.floor(l + (r-l) / 2);
            const row = Math.floor(mid / m), col = Math.floor(mid % m);
            
            if(A[row][col] === B) {
                return 1;
            } else if(A[row][col] > B) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return 0;
}

console.log(searchMatrix([ 
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]  
], 3));

console.log(searchMatrix([   
    [5, 17, 100, 111],
    [119, 120, 127, 131],    
], 3));