// Given a Binary Search Tree A. Check whether there exists a node with value B in the BST.

function searchBST(root, target) {
    while(root !== null && root.data !== target) {
        root = root.data > target ? root.left : root.right;
    }
    return root === null ? 0 : 1;
}