// binary Search Apis

function lower_bound(A, target) {
    const n = A.length;
    let l=0, r=n-1;

    while(l<r) {
        const mid = Math.floor((l+r) / 2);

        if(A[mid] < target) {
            l = mid+1;
        } else {
            r = mid;
        }
    }

    return l;
}

// console.log(lower_bound([1,3,3,4,5], 4));

function upper_bound(A, target) {
    const n = A.length;
    let l=0, r=n-1, ans;

    while(l<=r) {
        const mid = Math.floor((l+r) / 2);

        if(A[mid] <= target) {
            ans = mid;
            l = mid+1;
        } else {
            r = mid-1;
        }
    }

    return ans;
}

// console.log(upper_bound([1,3,3,4,4,5], 4));

module.exports = {
    lower_bound,
    upper_bound
}