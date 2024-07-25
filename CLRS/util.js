function swap(A, i, j) {
    const t = A[i];
    A[i]=A[j];
    A[j]=t;
}

module.exports = {
    swap
}