// Given a Binary Tree A consisting of N integer nodes, you need to find the diameter of the tree.

// The diameter of a tree is the number of edges on the longest path between two nodes in the tree.

function treeDiameter(root) {
    let diameter=0
    function findHeight(root) {    
        if(!root) return -1;
        let left = findHeight(root.left);
        let right = findHeight(root.right);
        
        diameter = Math.max(diameter, right+left+2);

        return Math.max(left, right)+1;
    }
    findHeight(root);
    return diameter;
}