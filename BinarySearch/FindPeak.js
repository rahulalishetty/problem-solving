// Given an array of integers A, find and return the peak element in it.
// An array element is considered a peak if it is not smaller than its neighbors. 
// For corner elements, we need to consider only one neighbor.

function findPeak(A) {
    const n = A.length;
    let i=0, j=n-1;
    while(i<=j) {
        const mid = Math.floor(i + (j-i) / 2);

        if((mid === 0 || A[mid] <= A[mid-1]) && (mid === n-1 || A[mid] >= A[mid+1])) {
            return mid;
        }

        if(mid < n-1 && A[mid] < A[mid+1]) {
            i = mid+1;
        } else {
            j= mid-1;
        }
    }
    return i;
}

console.log(findPeak([5, 17, 100, 11]));
console.log(findPeak([1, 2, 3, 4, 5]));