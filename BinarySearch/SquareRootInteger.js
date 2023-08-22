// Given an integer A. Compute and return the square root of A.
// If A is not a perfect square, return floor(sqrt(A)).

// The value of A can cross the range of Integer.

// NOTE: 
//    Do not use the sqrt function from the standard library. 
//    Users are expected to solve this in O(log(A)) time.

function squareRootInteger(A) {
    let l = 1, r = A, ans=0;

    while(l<=r) {
        const mid = (l+r) >> 1;

        if(mid <= Math.floor(A/mid)) {
            l = mid + 1;
            ans = mid;
        } else {
            r = mid - 1;
        }
    }

    return ans;
}