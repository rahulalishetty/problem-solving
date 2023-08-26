// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// Try solving it using constant additional space.

function listCycle(A) {
    if(A == null) return null;
    let slow = A; fast = A, p1 = A, p2 = null;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            p2 = slow;
            break;
        }
    }
    if(p2) {
        while(p1 !== p2) {
            p1 = p1.next;
            p2 = p2.next
        }
        return p1;
    }else return null;
}