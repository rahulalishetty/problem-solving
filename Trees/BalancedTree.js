// Given a root of binary tree A, determine if it is height-balanced.

// A height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

function balancedTree(root) {
    let balanced = 1;
    function traversal(root) {
        if(!balanced) return;
        if(!root) return 0;

        l = traversal(root.left);
        r = traversal(root.right);

        if(Math.abs(l-r) > 1) {
            balanced=0;
        }
        return Math.max(l, r) + 1;
    }

    traversal(root);
    return balanced;
}