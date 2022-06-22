function validBst(root) {
    // WRITE YOUR BRILLIANT CODE HERE
    return validateBst(root, -1, Number.MAX_SAFE_INTEGER)
}

function validateBst(root, left, right){
    if(!root) return true;
    if(!(root.val >= left && root.val <= right))
        return false;
    return validateBst(root.left, left, root.val) && validateBst(root.right, root.val, right);
}
