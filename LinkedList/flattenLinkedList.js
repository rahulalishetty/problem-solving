// Given a linked list where every node represents a linked list and contains two pointers of its type:

// Pointer to next node in the main list (right pointer)
// Pointer to a linked list where this node is head (down pointer). All linked lists are sorted.
// You are asked to flatten the linked list into a single list. Use down pointer to link nodes of the flattened list. The flattened linked list should also be sorted.

function flatten(root) {
    function merge(A, B) {
    
        if( A == null)
            return B;
        if( B == null)
            return A;
        
        let result = null;
        if( A.data < B.data) {
            result = A;
            result.down = merge(A.down,B);
        }
        else {
            
            result = B;
            result.down = merge(A, B.down);
        }
        return result;
    }

    if(root == null || root.right == null)
        return root;
    
    return merge(root, flatten(root.right));
}