// Given a matrix of integers A of size N x M in which each row is sorted.

// Find and return the overall median of matrix A.

// NOTE: No extra memory is allowed.

// NOTE: Rows are numbered from top to bottom and columns are numbered from left to right.

function findMatrixMedian(A) {
    function getCount(val) {
    let ret = 0;
      for (let i = 0; i < A.length; i++) {
        let lo = 1,
          hi = A[i].length,
          mid,
          ans = 0;
        while (lo <= hi) {
          mid = (lo + hi) >> 1;
          if (A[i][mid - 1] <= val) {
            ans = mid;
            lo = mid + 1;
          } else hi = mid - 1;
        }
        ret += ans;
      }
      return ret;
    }

    let need = Math.floor((A.length * A[0].length) / 2);
    let lo = 1;
    let hi = 1e9;

    let mid, ans;
    while (lo <= hi) {
      mid = (lo + hi) >> 1;
      let count = getCount(mid);
      if (count >= need + 1) {
        ans = mid;
        hi = mid - 1;
      } else lo = mid + 1;
    }
    return ans;
}

console.log(findMatrixMedian([   
    [1, 3, 5],
    [2, 6, 9],
    [3, 6, 9]   
]));

console.log(findMatrixMedian([ [5, 17, 100] ]));
console.log(findMatrixMedian([ [1] ]));