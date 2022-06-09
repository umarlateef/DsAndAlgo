function isBalanced(tree) {
    if(!tree)
        return true;
    return checkBalance(node)>-1;
}

function checkBalance(node){
     if(!node)
        return 0;
    let leftDepth = checkBalance(node.left);
    let rightDepth = checkBalance(node.right);
    if(leftDepth===-1 || rightDepth===-1)
        return -1;
    if(Math.abs(leftDepth-rightDepth)>1)
        return -1;
    return Math.max(leftDepth, rightDepth)+1;
}
