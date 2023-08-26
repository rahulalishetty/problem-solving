// Given a singly linked list, delete middle of the linked list.

// For example, if given linked list is 1->2->3->4->5 then linked list should be modified to 1->2->4->5

// If there are even nodes, then there would be two middle nodes, we need to delete the second middle element.

// For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.

// Return the head of the linked list after removing the middle node.

// If the input linked list has 1 node, then this node should be deleted and a null node should be returned.

function deleteMiddleNode(A) {
    if(A === null || A.next === null) return null;

    let slowPtr = A, fastPtr = A, prev;

    while(!(fastPtr === null || fastPtr.next === null)) {
        fastPtr = fastPtr.next.next;
        prev = slowPtr;
        slowPtr = slowPtr.next;
    } 

    prev.next = slowPtr.next;

    return A;
}