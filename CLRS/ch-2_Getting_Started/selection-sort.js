function selectionSort(A) {
    const n = A.length;

    function swap(i, j) {
        const t = A[i];
        A[i]=A[j];
        A[j]=t;
    }

    for(let i=0;i<n;i++) {
        let min = i;
        for(let j=i+1;j<n;j++) {
            if(A[i] > A[j]) {
                min = j;
            }
        }
        swap(i, min);
    }

    return A;
}

console.log(selectionSort([5,4,3,2,1]));
console.log(selectionSort([1,2,3,4,5]));