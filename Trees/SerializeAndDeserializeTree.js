// Given the root node of a Binary Tree denoted by A. You have to Serialize the given Binary Tree in the described format.

const Queue = require("../Queues/Queue");
const TreeNode = require("./TreeNode");

// Serialize means encode it into a integer array denoting the Level Order Traversal of the given Binary Tree.

// NOTE:

// In the array, the NULL/None child is denoted by -1.
// For more clarification check the Example Input.

function serializeTree(root) {
    if(!root) return [];
    const queue = new Queue(), serialize=[];
    queue.enqueue(root);

    while(!queue.empty()) {
        const node = queue.dequeue();
        if(!node) serialize.push(-1);
        else {
            serialize.push(node.data);
            queue.enqueue(node.left); 
            queue.enqueue(node.right);
        }
    }

    return serialize;
}

// You are given an integer array A denoting the Level Order Traversal of the Binary Tree.

// You have to Deserialize the given Traversal in the Binary Tree and return the root of the Binary Tree.

// NOTE:

// In the array, the NULL/None child is denoted by -1.
// For more clarification check the Example Input.

function deserializeTree(levelorder) {
    if(levelorder.length === 0) return null;
    let i=0;
    const queue = new Queue(), root = new TreeNode(levelorder[i++]);
    queue.enqueue(root);

    while(!queue.empty()) {
        const node = queue.dequeue();
        const left = new TreeNode(levelorder[i++]);
        const right = new TreeNode(levelorder[i++]);
        
        if(left.data !== -1) {
            node.left = left;
            queue.enqueue(left);
        }
        if(right.data !== -1) {
            node.right = right;
            queue.enqueue(right);
        }
    }

    return root;
}

console.log(deserializeTree([1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1]));