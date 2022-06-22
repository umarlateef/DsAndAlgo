var invertTree = function(root) {
    if(!root) return root;
    let left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(left);
    return root;
};
