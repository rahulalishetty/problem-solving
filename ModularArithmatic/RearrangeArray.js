// Given an array A of size N. Rearrange the given array so that A[i] becomes A[A[i]] with O(1) extra space.

function rearrange(A) {
    const n = A.length;
    for (let i = 0; i < n; i++)
        A[i] += (A[A[i]] % n) * n;
    for (let i = 0; i < n; i++)
        A[i] = parseInt(A[i]/n);
    return A;
}

console.log(rearrange([0,2,1,3]));