const swap = require('../util').swap;

function partition(A, p, r) {
    let x = A[r];
    let i = p - 1;

    for(let j = p; j < r ;j++) {
        if(A[j] <= x) {
            swap(A, ++i, j);
        }
    }
    swap(A, i+1, r);
    return i+1;
}

function quicksort(A, p, r) {
    if(p < r) {
        q = partition(A, p, r);
        quicksort(A, p, q-1);
        quicksort(A, q+1, r);
    }
}

const A = [13,19,9,5,12,8,7,4,21,2,6,11];
quicksort(A, 0, A.length-1);
console.log(A);