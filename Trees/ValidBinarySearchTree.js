// You are given a binary tree represented by root A. You need to check if it is a Binary Search Tree or not.

// Assume a BST is defined as follows:

// 1) The left subtree of a node contains only nodes with keys less than the node's key.

// 2) The right subtree of a node contains only nodes with keys greater than the node's key.

// 3) Both the left and right subtrees must also be binary search trees.

function isValidBST(root) {
    function validate(root, low, high) {
        if(!root) return true;

        return  root.data > low && root.data < high
            && validate(root.left, low, root.data) 
            && validate(root.right, root.data, high);
    }

    return Number(validate(root, -Infinity, Infinity));
}

console.log(isValidBST(null));