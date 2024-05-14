function insertionSort(A) {
    const n = A.length;

    for(let i=1;i<n;i++) {
        let key = A[i], j = i-1;

        while(j >= 0 && A[j] > key)
            A[j+1] = A[j--];

        A[j+1] = key;
    }

    return A;
}

console.log(insertionSort([5,4,3,2,1]));
console.log(insertionSort([1,2,3,4,5]));