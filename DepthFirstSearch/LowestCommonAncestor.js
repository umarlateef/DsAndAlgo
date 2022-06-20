function lca(root, node1, node2) {
    // WRITE YOUR BRILLIANT CODE HERE
    if(!root)return null;
    if(root === node1)return node1;
    if(root === node2)return node2;
    let leftNodeFound = lca(root.left, node1, node2);
    let rightNodeFound = lca(root.right, node1, node2);
    if(leftNodeFound && rightNodeFound)
        return root;
    if(leftNodeFound) return leftNodeFound;
    if(rightNodeFound) return rightNodeFound;
    return null;
}
