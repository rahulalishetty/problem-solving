// Given a Binary Search Tree A. Check whether there exists a node with value B in the BST.

function searchBST(root, target) {
    if(!root) return 0;
    if(root.data === target) return 1;

    let left, right;
    if(root.data > target) left = searchBST(root.left);
    if(root.data < target) right = searchBST(root.right);

    return left || right;
}