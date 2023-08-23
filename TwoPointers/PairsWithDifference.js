// Given an one-dimensional integer array A of size N and an integer B.

// Count all distinct pairs with difference equal to B.

// Here a pair is defined as an integer pair (x, y), where x and y are both numbers in the array and their absolute difference is B.

function pairsWithDifference(A, B) {
    A.sort((a,b) => a-b);
    const n = A.length;
    let i = 0, j = 1;
    let ans = 0;
    while (j < n) {
        if (j == i) {
            j++;
        }
        let x = A[i], y = A[j];
        if (y - x == B) {
            // count the pair A[i], A[j] only once
            ans++;
            while (i < n && A[i] == x) {
                i++;
            }
            while (j < n && A[j] == y) {
                j++;
            }
        } else if (y - x > B) {
            i++;
        } else {
            j++;
        }
    }
    return ans;
}

console.log(pairsWithDifference([1, 5, 3, 4, 2], 3));
console.log(pairsWithDifference([8, 12, 16, 4, 0, 20], 4));
console.log(pairsWithDifference([1, 1, 1, 2, 2], 0));