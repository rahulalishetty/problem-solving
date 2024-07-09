function Heap(A) {
    this.heap = A;
    this.length = A.length;
}

Heap.prototype.left = function(i) {
    return 2 * i + 1;
}

Heap.prototype.right = function(i) {
    return 2 * i + 2;
}

Heap.prototype.swap = function(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
}

Heap.prototype.heapify = function() {
    const n = this.length-1;
    let i = Math.floor((n-1)/2);
    for(;i>=0;i--) {
        this.maxHeapify(i);
    }
    return this.heap;
};

Heap.prototype.maxHeapify = function(i) {
    const 
        n = this.length-1,
        left = this.left(i),
        right = this.right(i),
        heap = this.heap;
    let largest = i;

    if(left <= n && heap[left] > heap[i]) {
        largest = left;
    }
    if(right <= n && heap[right] > heap[largest]) {
        largest = right;
    }

    if(largest != i) {
        this.swap(i, largest);
        this.maxHeapify(largest);
    }
}

Heap.prototype.heapSort = function() {
    const n = this.length - 1;
    let i = n;
    let initialHeap = [...this.heap], res;

    for(;i>0;i--) {
        this.swap(0, i);
        this.length -= 1;
        this.maxHeapify(0);
    }
    this.length = this.heap.length;
    res = [...this.heap];
    this.heap = initialHeap;

    return res;
}

// test
const A = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
const heap = new Heap(A);
console.log(heap.heapify());
console.log(heap.heapSort());
console.log(heap.heap);