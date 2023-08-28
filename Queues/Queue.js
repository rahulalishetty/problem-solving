class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items[this.items.length] = item;
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        if(this.items.length > 0)
            return this.items[0];
    }
    peekBack() {
        if(this.items.length > 0)
            return this.items[this.items.length-1];
    }
    dequeueBack() {
        return this.items.pop();
    }
    size() {
        return this.items.length;
    }
    empty() {
        return this.items.length === 0;
    }
}

module.exports = Queue;