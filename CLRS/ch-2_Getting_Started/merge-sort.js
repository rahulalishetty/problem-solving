function mergesort(A, l, r) {
    if(l >= r) return;
    const mid = (l + r) >> 1;
    mergesort(A, l, mid);
    mergesort(A, mid + 1, r);
    merge(A, l, mid, r);

    return A;
}

function merge(A, l, mid, r) {
    const left = A.slice(l, mid+1), right = A.slice(mid+1, r+1);
    const ln = left.length, rn = right.length;
    let i=0,j=0,idx=l;

    while(i < ln && j < rn) {
        if(left[i] < right[j]) {
            A[idx++] = left[i++];
        } else {
            A[idx++] = right[j++];
        }
    }

    while(i < ln) {
        A[idx++] = left[i++];
    }

    while(j < rn) {
        A[idx++] = right[j++];
    }

    return A;
}

console.log(mergesort([5,4,3,2,1], 0, 4));
console.log(mergesort([1,2,3,4,5], 0, 4));