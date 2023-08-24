// Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in a 2-D Cartesian plane.

// Find and return the number of unordered quadruplet (i, j, k, l) such that (A[i], B[i]), (A[j], B[j]), (A[k], B[k]) and (A[l], B[l]) form a rectangle with the rectangle having all the sides parallel to either x-axis or y-axis.

function countRectangles(A, B) {
    const n = A.length, cache={};
    let count=0;

    for(let i=0;i<n;i++) {
        cache[[A[i],B[i]]] = 1;
    }
    for(let i=0;i<n;i++) {
        for(let j=i+1;j<n;j++) {
            if(A[i]===A[j] || B[i] === B[j]) continue;
            if(cache[[A[i],B[j]]] || cache[[A[j],B[i]]]) count++;
        }
    }

    return count/2;
}

console.log(countRectangles([1, 1, 2, 2], [1, 2, 1, 2]));
console.log(countRectangles([1, 1, 2, 2, 3, 3], [1, 2, 1, 2, 1, 2]));