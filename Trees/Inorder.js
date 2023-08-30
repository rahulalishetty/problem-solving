let Stack = require('../Stacks/stack');

function inorderTraversal(root) {
    if(!root) return [];
    const stack = new Stack(), inorder=[];
    let cur = root;
    while(cur || !stack.empty()) {
        while(cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        inorder.push(cur.data);
        cur = cur.right;
    }
    return inorder;
}