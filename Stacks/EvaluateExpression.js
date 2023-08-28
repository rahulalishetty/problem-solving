// An arithmetic expression is given by a string array A of size N. Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each string may be an integer or an operator.

// Note: Reverse Polish Notation is equivalent to Postfix Expression, where operators are written after their operands.

function evaluate(A) {
    var stack = [];
    for (var i = 0; i < A.length; i++) {
        if (A[i] === "*" || A[i] === "+" || A[i] === "/" || A[i] === "-") {
            // pop the top two elements from the stack, perform the operation 
            // and push that back into the stack
            var num2 = "(" + stack.pop() + ")";
            var num1 = "(" + stack.pop() + ")";
            stack.push(eval(num1 + A[i] + num2));
        } else {
            stack.push(A[i]);
        }
    }
    return parseInt(stack[0]);
}