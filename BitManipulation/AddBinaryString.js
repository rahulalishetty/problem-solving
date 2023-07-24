// Given two binary strings A and B. Return their sum (also a binary string).

function addBinaryString(a, b) {
    let result = "", carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while(i>=0 || j>=0) {
        let sum = carry;
        if(i >= 0) {
            sum += a[i--] - '0';
        }
        if(j >= 0) {
            sum += b[j--] - '0';
        }
        result = sum % 2 + result;
        carry = parseInt(sum/2);
    }
    if(carry > 0) {
        result = 1 + result;
    }
    return result;
}

console.log(addBinaryString("100", "11"));
console.log(addBinaryString("110", "10"));