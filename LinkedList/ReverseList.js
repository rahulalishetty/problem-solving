// You are given a singly linked list having head node A. You have to reverse the linked list and return the head node of that reversed list.

// NOTE: You have to do it in-place and in one-pass.

function reverseList(A) {
    let cur=A, prev=null,next=null;

    while(cur!==null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
}