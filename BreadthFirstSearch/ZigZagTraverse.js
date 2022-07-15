class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function levelOrderTraversal(root) {
    let resp = [];
    let queue = [root];
    let rightToLeft = false;
    while(queue.length>0){
        let n = queue.length;
        let tempAr = [];
        for(let index=0; index<n; index++){
            let node = {};
            node = queue.shift();
            if(rightToLeft)
                tempAr.unshift(node.val);
            else
                tempAr.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        resp.push(tempAr);
        tempAr = [];
        rightToLeft = !rightToLeft;
    }
    return resp;
}
function treeMaxDepth(root) {
    // WRITE YOUR BRILLIANT CODE HERE
   if (root === null) return 0;
    // Depth of current node's subtree = max depth of the two subtrees + 1 provided by current node
    return Math.max(treeMaxDepth(root.left), treeMaxDepth(root.right)) + 1;
}

function buildTree(nodes, f) {
    const val = nodes.next().value;
    if (val === 'x') return null;
    const left = buildTree(nodes, f);
    const right = buildTree(nodes, f);
    return new Node(f(val), left, right);
}
function splitWords(s) {
    return s == "" ? [] : s.split(' ');
}

 const root = buildTree(splitWords('1 2 4 x 7 x x 5 x x 3 x 6 x x')[Symbol.iterator](), parseInt);
    const res = levelOrderTraversal(root);
    for (const row of res) {
        console.log(row.join(' '));
    }
