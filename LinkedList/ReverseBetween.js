// Reverse a linked list A from position B to C.

// NOTE: Do it in-place and in one-pass.

function reverseBetween(head,m,n) {
    let start = head,
        cur = head;
    let i = 1;
    while (i < m) {
        start = cur;
        cur = cur.next;
        i++;
    }
    let prev = null,
        tail = cur;
    while (i <= n) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        i++;
    }
    start.next = prev;
    tail.next = cur;
    return m == 1 ? prev : head;
}