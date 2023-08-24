// Given two arrays of integers A and B, Sort A in such a way that the relative order among the elements will be the same as those are in B.
// For the elements not present in B, append them at last in sorted order.

// Return the array A after sorting from the above method.

// NOTE: Elements of B are unique.

function sortArrayInGivenOrder(A,B) {
    let cache={};
    const n=A.length, m=B.length, sorted=[];

    for(let i=0;i<n;i++) {
        if(cache.hasOwnProperty(A[i])) {
            cache[A[i]]++;
        } else cache[A[i]] = 1;
    }

    for(let i=0;i<m;i++) {
        const key = B[i];
        let times = cache[key] || 0;
        delete cache[key];

        while(times--) {
            sorted.push(key);
        }
    }

    Object.keys(cache).forEach((key) => {
        let times = cache[key] || 0;

        while(times--) {
            sorted.push(+key);
        }
    });

    return sorted;
}

console.log(sortArrayInGivenOrder([1, 2, 3, 4, 5, 4], [5, 4, 2]));
console.log(sortArrayInGivenOrder([5, 17, 100, 11], [1, 100]));