// Given two strings A and B. Each string represents an expression consisting of lowercase English alphabets, '+', '-', '(' and ')'.

// The task is to compare them and check if they are similar. If they are identical, return 1 else, return 0.

// NOTE: It may be assumed that there are at most 26 operands from ‘a’ to ‘z’, and every operand appears only once.
const Stack = require("./stack");

function checkTwoBracketExpressions(A, B) {
    let signCache=Array(26).fill(0), stack=new Stack();
    const a = 97;
    stack.push(true);

    function adjSign(s, i) {
        if(i===0) return true;
        if(s[i-1] === '-') return false;
        return true;
    }

    function eval(s, add) {
        s = s.split("");
        let n = s.length;

        for(let i=0;i<n;i++) {
            if(s[i] === '-' || s[i] === '+') continue;
            if(s[i] === '(') {
                if(adjSign(s, i)) {
                    stack.push(stack.top());
                } else {
                    stack.push(!stack.top())
                }
            } else if(s[i] === ')') {
                stack.pop();
            } else {
                if(stack.top()) {
                    signCache[s[i].charCodeAt(0) - a] += adjSign(s, i) ? (add ? 1 : -1)
                        : (add ? -1 : 1);
                } else {
                    signCache[s[i].charCodeAt(0) - a] += adjSign(s, i) ? (add ? -1 : 1)
                        : (add ? 1 : -1);
                }
            }
        }
    }

    eval(A, true);
    eval(B, false);

    for(let i=0;i<26;i++) {
        if(signCache[i] !== 0) return 0;
    }
    return 1;
}

console.log(checkTwoBracketExpressions("-(a+b+c)", "-a-b-c"));
console.log(checkTwoBracketExpressions('a+b-c+d-e-f', '(a+b-c-d-e+f)'));