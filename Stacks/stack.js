class Stack {
    constructor() {
        this.items=[];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if(this.items.length > 0)
            return this.items.pop();
    }

    top() {
        return this.items[this.items.length-1];
    }

    size() {
        return this.items.length;
    }
}

module.exports = Stack;