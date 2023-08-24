// Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in 2D Cartesian plane.

// Find and return the number of unordered triplets (i, j, k) such that (A[i], B[i]), (A[j], B[j]) and (A[k], B[k]) form a right-angled triangle with the triangle having one side parallel to the x-axis and one side parallel to the y-axis.

// NOTE: The answer may be large so return the answer modulo (109 + 7).

function countRightTriangles(A,B) {
    const n = A.length, cache={}, mod=1e9+7;
    let count = 0;
    cache[0] = {};
    cache[1] = {};

    for(let i=0;i<n;i++) {
        cache[0][A[i]] = (cache[0][A[i]] || 0) + 1;
        cache[1][B[i]] = (cache[1][B[i]] || 0) + 1;
    }

    for(let i=0;i<n;i++) {
        count = (count + (cache[0][A[i]] - 1) * (cache[1][B[i]] - 1) % mod) % mod; 
    }

    return count;
}

console.log(countRightTriangles([1, 1, 2], [1, 2, 1]));
console.log(countRightTriangles([1, 1, 2, 3, 3], [1, 2, 1, 2, 1]));