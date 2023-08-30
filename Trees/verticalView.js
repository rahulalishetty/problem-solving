// Given a binary tree, return a 2-D array with vertical order traversal of it. Go through the example and image for more details.

const Queue = require("../Queues/Queue");

function verticalView(root) {
    if(!root) return [];
    const visited={}, result=[], ans=[], queue=new Queue();
    queue.enqueue([0, root]);

    while(!queue.empty()) {
        const [hdistance, node] = queue.dequeue();
        
        if(visited.hasOwnProperty(hdistance)) {
            visited[hdistance].push(node.data);
        } else {
            visited[hdistance] = [node.data];
        }

        if(node.left) {
            queue.enqueue([hdistance-1, node.left]);
        }
        if(node.right) {
            queue.enqueue([hdistance+1, node.right]);
        }
    }

    for(let val in visited) {
        result.push([val, visited[val]]);
    }
    result.sort((a,b) => a[0]-b[0]);
    return result.map((val) => val[1]);
}