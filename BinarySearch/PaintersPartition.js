// Given 2 integers A and B and an array of integers C of size N. Element C[i] represents the length of ith board.
// You have to paint all N boards [C0, C1, C2, C3 … CN-1]. There are A painters available and each of them takes B units of time to paint 1 unit of the board.

// Calculate and return the minimum time required to paint all boards under the constraints that any painter will only paint contiguous sections of the board.
// NOTE:
// 1. 2 painters cannot share a board to paint. That is to say, a board cannot be painted partially by one painter, and partially by another.
// 2. A painter will only paint contiguous boards. This means a configuration where painter 1 paints boards 1 and 3 but not 2 is invalid.

// Return the ans % 10000003.

function paintersPartition(A,B,C) {
    function isPossible(t) {
        let currT = 0, nPainters=1;

        for(let i=0;i<n;i++) {
            if(currT + C[i] * B > t) {
                currT = C[i] * B;
                nPainters++;
            } else {
                currT += C[i] * B;
            }
        }

        if(nPainters > A) return false;
        return true;
    }

    const mod = 10000003,n=C.length;
    let l=0,h=0,ans;
    for(let i=0;i<n;i++) {
        l = Math.max(l, C[i]);
        h += C[i];
    }
    l = l*B;
    h = h*B;
    
    while(l<=h) {
        const mid = Math.floor((l+h)/2);

        if(isPossible(mid)) {
            ans = mid;
            h = mid-1;
        } else {
            l = mid+1;
        }
    }

    return ans % mod;
}

console.log(paintersPartition(2, 5, [1, 10]));
console.log(paintersPartition(10, 1, [1, 8, 11, 3]));