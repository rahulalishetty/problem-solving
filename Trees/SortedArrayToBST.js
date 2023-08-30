// Given an array where elements are sorted in ascending order, convert it to a height Balanced Binary Search Tree (BBST).

const TreeNode = require("./TreeNode");

// Balanced tree : a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

function sortedArrayToBST(list) {
    function buildTree(list) {
        if(list.length === 0) return null;
        const n = list.length;
        const mid = Math.floor(n/2);
        const root = new TreeNode(list[mid]);

        root.left = buildTree(list.slice(0,mid));
        root.right = buildTree(list.slice(mid+1));

        return root;
    }

    return buildTree(list);
}

console.log(sortedArrayToBST([1, 2, 3]));
console.log(sortedArrayToBST([1, 2, 3, 5, 10]));