function ternaryTreePaths(root) {
    // WRITE YOUR BRILLIANT CODE HERE
    if(!root) return [];
    let resp = getPath(root, '');
    return resp;
}

function getPath(node, path){
    
    path = path + node.val+'->';
    if(node.children.length === 0) return [path.substring(0, path.length-2)];
    let resp = [];
    for(let ch of node.children){
        let rr = getPath(ch, path);
        resp.push(...rr);
    }
    return resp;
}
