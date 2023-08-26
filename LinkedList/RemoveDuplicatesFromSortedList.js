// Given a sorted linked list, delete all duplicates such that each element appears only once.

function deleteDuplicates(A) {
    let cur=A,next=null;

    while(cur!==null) {
        next = cur.next;
        while(next !== null && next.data === cur.data) {
            cur.next = next.next;
            next = cur.next;
        }
        cur = next;
    }

    return A;
}