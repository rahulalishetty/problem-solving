// Given a singly linked list A and an integer B, reverse the nodes of the list B at a time and return the modified linked list.

function reverseList(A, B) {
    let cur=A, next=null, prev=null, count=0;

    while(cur!==null && count<B) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        count++; 
    }

    if(next !== null)
        A.next = this.reverseList(next, B);

    return prev;
}