// Given a binary tree of integers denoted by root A. Return an array of integers representing the right view of the Binary tree.

// Right view of a Binary Tree is a set of nodes visible when the tree is visited from Right side.

function rightView(root) {
    const ans=[], visited={};
    function traversal(root, l) {
        if(!visited.hasOwnProperty(l)) {
            ans.push(root.data);
            visited[l] = 1;
        }

        if(root.right) traversal(root.right, l+1);
        if(root.left) traversal(root.left, l+1);
    }

    traversal(root, 0);
    return ans;
}