function binaryTreeRightSideView(root) {
    // WRITE YOUR BRILLIANT CODE HERE
    let queue = [root];
    let resp = [];
    while(queue.length>0){
        let n = queue.length;
        let temp = [];
        for(let index=0; index<n; index++){
            let node = queue.shift();
            temp.push(node.val);
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
        resp.push(temp[temp.length-1]);
        temp = [];
    }
    return resp;
}
