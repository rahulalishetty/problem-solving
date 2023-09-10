// Given a strictly increasing array A of positive integers forming a sequence.

// A sequence X1, X2, X3, ..., XN is fibonacci like if


// N > =3
// Xi + Xi+1 = Xi+2 for all i+2 <= N
// Find and return the length of the longest Fibonacci-like subsequence of A.

// If one does not exist, return 0.

// NOTE: A subsequence is derived from another sequence A by deleting any number of elements (including none) from A, without changing the order of the remaining elements

function longestFibonacciSubsequence(A) {
    let N = A.length;
    let index = new Map();
    A.map((v, i) => index[v] = i);

    let longest = new Map();
    let ans = 0;
    for (let k = 0; k < N; ++k)
        for (let j = 0; j < k; ++j) {
            let i = index[A[k] - A[j]];
            if (i === undefined || i >= j) continue;
            if (longest[i * N + j] === undefined)
                longest[i * N + j] = 2;

            longest[j * N + k] = longest[i * N + j] + 1;
            ans = Math.max(ans, longest[j * N + k]);
        }

    return ans >= 3 ? ans : 0;
}