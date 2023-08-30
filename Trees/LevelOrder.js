// Given a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

const Queue = require("../Queues/Queue");
const TreeNode = require("./TreeNode");

function levelOrder(root) {
    const levelorder = [];
    function traverse(root, l) {
        if(root === null) return; 
        if(!levelorder[l]) levelorder[l] = [];
        levelorder[l].push(root.data);
        traverse(root.left, l+1);
        traverse(root.right, l+1);
    }

    traverse(root, 0);
    return levelorder;
}

function levelOrderIterative(root) {
    if(!root) return [];
    const levelOrder = [], queue = new Queue();
    let l=0;
    queue.enqueue(root);

    while(!queue.empty()) {
        levelOrder[l] = [];
        const n = queue.size();
        for(let i=0;i<n;i++) {
            const node = queue.dequeue();
            levelOrder[l].push(node.data);
            if(node.left) queue.enqueue(node.left);
            if(node.right) queue.enqueue(node.right);
        }
        l++;
    }
    return levelOrder;
}

const root = new TreeNode(3);
let child = new TreeNode(9);
root.left = child;
child = new TreeNode(20);
root.right = child;
child = new TreeNode(15);
root.right.left = child;
child = new TreeNode(7);
root.right.right = child;
console.log(levelOrderIterative(root));