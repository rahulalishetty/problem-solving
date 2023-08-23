// Jerry is excited about an array that Tom gave him. The array A consists of N integers.

// Tom challenges Jerry to find all such unique triplets a, b, c in A such that a + b = - c.

// Note:
// Elements in a triplet (a,b,c) must be in non-decreasing order. (ie, a ≤ b ≤ c)
// The solution set must not contain duplicate triplets.

function sumZero3(A) {
    A.sort((a,b) => a-b);
    const n = A.length, ans=[];
    
    for(let i=0;i<n-2;i++) {
        if(i>0 && A[i] === A[i-1]) continue;
        
        let ptr1=i+1, ptr2=n-1;
        while(ptr1 < ptr2) {
            const sum = A[i] + A[ptr1] + A[ptr2];

            if(sum === 0) {
                ans.push([A[i], A[ptr1], A[ptr2]]);
                ptr1++;
                while(ptr1 < ptr2 && A[ptr1] === A[ptr1-1]) ptr1++;
            } else if(sum > 0) {
                ptr2--;
            } else {
                ptr1++;
            }
        }
    }
    return ans;
}

console.log(sumZero3([-5, 2, 1, 3]));
console.log(sumZero3([-1, 0, 1, 2, -1, 4]));