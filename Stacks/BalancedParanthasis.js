function balanceParanthesis(A) {
    A=A.split("");
    const n=A.length,stack=[];
    const open = ["{","(","["];
    const closing={
        "[":"]",
        "(":")",
        "{":"}"
    }
    let len=0

    for(let i=0;i<n;i++) {
        if(open.includes(A[i])) {
            stack.push(A[i]);
            len++;
        } else if(closing[stack[len-1]] === A[i]) {
            stack.pop();
            len--;
        } else {
            return 0;
        }
    }

    return len === 0 ? 1 : 0;
}

console.log(balanceParanthesis("{([])}"));
console.log(balanceParanthesis("(){"));
console.log(balanceParanthesis("()[]"));