function binaryTreeMinDepth(root) {
    // WRITE YOUR BRILLIANT CODE HERE
    let queue = [root];
    let resp = {};
    let depth = 0;
    while(queue.length>0){
        let n = queue.length;
        for(let index = 0; index<n; index++){
            let node = queue.shift();
            if(!node.left && !node.right){
                return depth; 
            }
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
        depth++;
    }
    return depth;
}
