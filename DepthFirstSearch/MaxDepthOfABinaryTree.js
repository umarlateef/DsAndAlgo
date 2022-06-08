class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function treeMaxDepth(root) {
    // WRITE YOUR BRILLIANT CODE HERE
    return findDepth(root, 0);
}

function findDepth(node, currentDepth){
    if(!node){
        return currentDepth;
    }
    currentDepth++;
    return Math.max(findDepth(node.left, currentDepth), findDepth(node.right, currentDepth));
}

function buildTree(nodes, f) {
    const val = nodes.next().value;
    if (val === 'x') return null;
    const left = buildTree(nodes, f);
    const right = buildTree(nodes, f);
    return new Node(f(val), left, right);
}
