function visibleTreeNode(root) {
    
    return findVisible(root, root.val-1);
}

function findVisible(node, maxValue){
    if(!node) return 0;
    let count = 0;
    if(node.val>=maxValue){
        count++;
        maxValue = node.val;
    }
    return count+ findVisible(node.left, maxValue) + findVisible(node.right, maxValue);
}

visibleTreeNode([5 4 3 x x 8 x x 6 x x])
