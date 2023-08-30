// You are given a Binary Tree A with N nodes.

// Write a function that returns the size of the largest subtree, which is also a Binary Search Tree (BST).

// If the complete Binary Tree is BST, then return the size of the whole tree.

// NOTE:

// The largest subtree is the subtree with the most number of nodes.

const TreeNode = require('./TreeNode');

function largestBST(root) {
    let maxSize = 0;

    function validate(root, leftNode) {
        if(!root) return [true, 0, leftNode ? -Infinity : Infinity];

        let [isleftValid, leftSubtreeSize, maxLeft] = validate(root.left, true);
        let [isRightValid, rightSubtreeSize, minRight] = validate(root.right, false);
        
        if(isleftValid && isRightValid && root.data > maxLeft && root.data < minRight) {
            subtreeSize = leftSubtreeSize + rightSubtreeSize + 1;
            maxSize = Math.max(maxSize, subtreeSize);
            // console.log(root.data, maxLeft, minRight, maxSize);

            return leftNode ? [true, subtreeSize, Math.max(maxLeft, root.data)] 
                : [true, subtreeSize, Math.min(minRight, root.data)];
        }

        return [false, 0, leftNode ? -Infinity : Infinity];
    }

    validate(root, false);
    return maxSize;
}

const root = new TreeNode(7);
let child = new TreeNode(28);
root.left = child;
child = new TreeNode(43);
root.right = child;
child = new TreeNode(42);
root.right.right = child;
child = new TreeNode(27);
root.right.left = child;
child = new TreeNode(19);
root.left.left = child;
child = new TreeNode(31);
root.left.right = child;
child = new TreeNode(9);
root.left.left.left = child;
child = new TreeNode(23);
root.left.left.right = child;

// const root = new TreeNode(20);
// let child = new TreeNode(14);
// root.left = child;
// child = new TreeNode(12);
// root.right = child;
// child = new TreeNode(11);
// root.left.left = child;

console.log(largestBST(root));