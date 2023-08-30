// Given the inorder and postorder traversal of a tree, construct the binary tree.

const TreeNode = require("./TreeNode");

// NOTE: You may assume that duplicates do not exist in the tree.

function buildTree(inorder, postorder) {
    if(postorder.length === 0) return null;
    const head = postorder.pop();
    let root = new TreeNode(head); 
    const index = inorder.indexOf(head)+1;
    const rightInorder = inorder.splice(index);
    inorder.pop();
    const rightPostorder = postorder.splice(postorder.length-rightInorder.length);
    root.left = buildTree(inorder, postorder);
    root.right = buildTree(rightInorder, rightPostorder);
    return root;
}

// console.log(buildTree([2, 1, 3], [2, 3, 1]));
// console.log(buildTree([6, 1, 3, 2], [6, 3, 2, 1]));

function buildTree2(inorder, preorder) {
    if(preorder.length === 0) return null;
    const head = preorder.splice(0,1);
    let root = new TreeNode(head); 
    const index = inorder.indexOf(head)+1;
    const rightInorder = inorder.splice(index);
    inorder.pop();
    const rightPreorder = preorder.splice(preorder.length-rightInorder.length);
    root.left = buildTree2(inorder, preorder);
    root.right = buildTree2(rightInorder, rightPreorder);
    return root;
}

console.log(buildTree2([1, 2, 3], [2, 1, 3]));
console.log(buildTree2([1, 6, 2, 3], [6, 1, 3, 2]));