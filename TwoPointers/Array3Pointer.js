// You are given 3 sorted arrays A, B and C.

// Find i, j, k such that : max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])) is minimized.

// Return the minimum max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])).

function array3pointer(a,b,c) {
    let diff = 2e9;
    let minimum = 2e9;
    let maximum = -2e9;
    let i, j, k;
    for (i = 0, j = 0, k = 0; i < a.length && j < b.length && k < c.length; ) {
        minimum = Math.min(a[i], Math.min(b[j], c[k]));
        maximum = Math.max(a[i], Math.max(b[j], c[k]));
        diff = Math.min(diff, maximum - minimum);
        if (diff == 0) break;
        if (a[i] == minimum) i++;
        else if (b[j] == minimum) j++;
        else k++;
    }
    return diff;
}