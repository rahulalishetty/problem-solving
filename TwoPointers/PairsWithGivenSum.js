// Given a sorted array of distinct integers A and an integer B, find and return how many pair of integers ( A[i], A[j] ) such that i != j have sum equal to B.

function pairsWithGivenSum(A,B) {
    const n = A.length;
    let l=0,h=n-1,ans=0;

    while(l<h) {
        const sum = A[l] + A[h];

        if(sum === B) {
            ans++;
            l++;h--;
        } else if(sum > B) h--;
        else l++;
    }
    return ans;
}

console.log(pairsWithGivenSum([1, 2, 3, 4, 5], 5));
console.log(pairsWithGivenSum([5, 10, 20, 100, 105], 110));