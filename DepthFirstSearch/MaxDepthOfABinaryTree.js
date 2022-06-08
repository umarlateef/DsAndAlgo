class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
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
