// Given a binary tree of integers denoted by root A. Return an array of integers representing the top view of the Binary tree.

// The top view of a Binary Tree is a set of nodes visible when the tree is visited from the top.

// Return the nodes in any order.

function topView(root) {
    if(!root) return [];
    const visited={}, result=[], ans=[], queue=new Queue();
    queue.enqueue([0, root]);

    while(!queue.empty()) {
        const [hdistance, node] = queue.dequeue();
        
        if(!visited.hasOwnProperty(hdistance)) {
            visited[hdistance]=1;
            result.push(node.data);
        }

        if(node.left) {
            queue.enqueue([hdistance-1, node.left]);
        }
        if(node.right) {
            queue.enqueue([hdistance+1, node.right]);
        }
    }

    return result;
}

