// The government wants to set up B distribution offices across N cities for the distribution of food packets.

// The population of the ith city is A[i]. Each city must have at least 1 office and every person is assigned to exactly one office in their own city.

// Let M denote the minimum number of people that are assigned to any of the offices. Find the maximum value of M possible.


function distribution(A, B) {
    const n = A.length;

    function isPossible(people) {
        let c = 0;
        for(let i=0;i<n;i++) {
            c += (A[i]/people);
        }
        return c >= B;
    }

    let l=1,r=0,ans=0;
    for(let i=0;i<n;i++) {
        r += A[i];
    }

    while(l<=r) {
        const mid = Math.floor((l+r)/2);

        if(isPossible(mid)) {
            r = mid-1;
            ans = mid;
        } else {
            l = mid+1;
        }
    }

    return ans;
}

console.log(distribution([10000, 22000, 36000], 6));
console.log(distribution([1, 1, 1], 4));