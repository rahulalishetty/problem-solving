// Given a vector A of non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it is able to trap after raining.

// A = [0, 1, 0, 2] - 1
// A = [1, 2] - 0

function trap(A) {
    const n=A.length;
    const lmax = Array(n), rmax = Array(n);
    lmax[0] = A[0];
    rmax[n-1] = A[n-1];
    let _rmax = A[n-1], _lmax = A[0];
    for(let i=n-2;i>=0;i--){
        _rmax = Math.max(_rmax, A[i]);
        rmax[i] = _rmax;
    }
    for(let i=1;i<n;i++){
        _lmax = Math.max(_lmax, A[i]);
        lmax[i] = _lmax;
    }
    let totalSum = 0;
    for(let i=0;i<n;i++){
        totalSum += Math.min(lmax[i], rmax[i]) - A[i];
    }
    return totalSum;
}

function trapEfficient(A) {
    const n = A.length;
    let i = 0, j = n - 1;
    let lmax = 0, rmax = 0, res = 0;
    while (i<j) {
        if(lmax <= rmax) {
            if(A[i] >= lmax) {
                lmax = A[i];
            } else {
                res += lmax - A[i];
            }
            i++;
        } else {
            if(A[j] >= rmax) {
                rmax = A[j];
            } else {
                res += rmax - A[j];
            }
            j--;
        }
    }
    return res;
}

console.log(trap([0, 1, 0, 2]));
console.log(trap([1, 2]));