// Given a singly linked list A

//  A: A0 → A1 → … → An-1 → An 
// reorder it to:

//  A0 → An → A1 → An-1 → A2 → An-2 → … 
// You must do this in-place without altering the nodes' values.

function reorderList(head) {
    const reverseList = (head) => {
        let prev = null,
            cur = head;
        while (cur !== null) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }
    let dummyHead = new Node();
        let cur = dummyHead;
        let slow = head,
            fast = head;
        while (fast !== null) {
            fast = fast.next;
            if (fast === null) {
                break;
            }
            fast = fast.next;
            slow = slow.next;
        }
        let rightHead = reverseList(slow);
        let leftHead = head;
        while (leftHead && rightHead) {
            cur.next = leftHead;
            cur = cur.next;
            leftHead = leftHead.next;

            cur.next = rightHead;
            cur = cur.next;
            rightHead = rightHead.next;
        }
        cur.next = null;
        return dummyHead.next;
}