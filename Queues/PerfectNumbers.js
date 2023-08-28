// Given an integer A, you have to find the Ath Perfect Number.

const Queue = require("./Queue");

// A Perfect Number has the following properties:

// It comprises only 1 and 2.
// The number of digits in a Perfect number is even.
// It is a palindrome number.
// For example, 11, 22, 112211 are Perfect numbers, where 123, 121, 782, 1 are not.

function perfectNumbers(A) {
    function reverseString(s) {
        return s.split("").reverse().join("");
    }

    let count = 0, validNumber;
    const queue = new Queue();
    queue.enqueue("1");
    queue.enqueue("2");

    while(count < A) {
        const number = queue.dequeue();
        validNumber = number + reverseString(number);
        count++;
        // console.log(number, validNumber, count);
        queue.enqueue(number+"1");
        queue.enqueue(number+"2");
    }
    
    return validNumber;
}

console.log(perfectNumbers(2));
console.log(perfectNumbers(3));