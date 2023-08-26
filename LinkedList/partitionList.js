// Given a linked list A and a value B, partition it such that all nodes less than B come before nodes greater than or equal to B.

// You should preserve the original relative order of the nodes in each of the two partitions.

function partition(A,B) {
    if (A == null)
        return null
    let less = new Node(0);
    let greaterEqual = new Node(0);
    let tempLess = less, tempGreaterEqual = greaterEqual, temp = A;
    while (temp != null) {
        if (temp.data < B) {
            // contains the node with value < B
            tempLess.next = temp;
            tempLess = tempLess.next;
        }
        else {
            // contains the node with value >= B
            tempGreaterEqual.next = temp;
            tempGreaterEqual = tempGreaterEqual.next;
        }
        cur = temp;
        temp = temp.next;
        cur.next = null;
    }
    // connect both the linked lists
    tempLess.next = greaterEqual.next;
    return less.next;
}