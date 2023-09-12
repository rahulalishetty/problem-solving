class PriorityQueue {
    constructor(comparator = (a,b) => a>b) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    empty() {
        return this.size()===0;
    }
    peek() {
        return this._heap[0];
    }
    enqueue(value) {
        this._heap.push(value);
        this._bubbleUp();
    }
    dequeue() {
        const heapRoot = this.peek(), last = this.size() - 1;
        this._swap(0, last);
        this._heap.pop();
        this._bubbleDown();
        return heapRoot;
    }
    _bubbleUp() {
        let node = this.size()-1;
        while(node > 0 && this._compare(node, this._parent(node))) {
            this._swap(this._parent(node), node);
            node = this._parent(node);
        }
    }
    _bubbleDown() {
        let node = 0;
        while(
            (this._left(node) < this.size() && (this._compare(this._left(node), node))) ||
            (this._right(node) < this.size() && (this._compare(this._right(node), node)))
        ) {
            const maxChild = (this._right(node) < this.size() && this._compare(this._right(node), 
                this._left(node))) ? this._right(node) : this._left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _parent(i) {
        return Math.ceil(i/2 - 1);
    }
    _left(i) {
        return 2 * i + 1;
    } 
    _right(i) {
        return 2 * i + 2;
    }
    _compare(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
}

module.exports = PriorityQueue;