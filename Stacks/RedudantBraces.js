// Given a string A denoting an expression. It contains the following operators '+', '-', '*', '/'.

const Stack = require("./stack");

// Check whether A has redundant braces or not.

// NOTE: A will be always a valid expression and will not contain any white spaces.

function hasRedundantBraces(A) {
    const n = A.length, stack = new Stack();

    for(let i=0;i<n;i++) {
        let count =0;
        if(A[i] === ')') {
            if(stack.top() === '(') return 1;
            while(stack.top() !== '(') {
                stack.pop();
                count++;
            }
            stack.pop();
            if(count === 1) return 1;
        }
        else stack.push(A[i]);
    }
    return 0;
}

console.log(hasRedundantBraces('(a)'))
console.log(hasRedundantBraces("((a+b))"));
console.log(hasRedundantBraces("(a+(a+b))"));