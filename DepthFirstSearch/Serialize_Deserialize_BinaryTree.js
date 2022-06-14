class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    let response = '';
    if(!root){
        return 'x,';
    }
    response += root.val+',';
    response += serialize(root.left);
    response += serialize(root.right);
    return response;
}
function deserialize(s) {
    s = s.slice(0, -1);
    return createNode(s.split(',')[Symbol.iterator]());
}

function createNode(nodes){
    var currentValue = nodes.next().value
    if(currentValue === 'x')
        return null;
    let node = new Node(currentValue)
    node.left = createNode(nodes);
    node.right = createNode(nodes);
    return node;
}
