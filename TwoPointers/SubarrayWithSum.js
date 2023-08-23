// Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.

// If the answer does not exist return an array with a single integer "-1".

// First sub-array means the sub-array for which starting index in minimum.

function subarrayWithSum(A, B) {
    const n = A.length;

    let s=0,e=0,curSum=0;

    while(e < n) {
        curSum += A[e++];
        while(curSum > B) {
            curSum -= A[s++];
        }

        if(curSum === B) return A.slice(s, e);
    }

    return [-1];
}

console.log(subarrayWithSum([1,2,3,4,5], 7));
console.log(subarrayWithSum([5,10,20,100,105], 110));