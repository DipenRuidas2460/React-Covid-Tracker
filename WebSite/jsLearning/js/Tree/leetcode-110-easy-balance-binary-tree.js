function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var heightOfTree = (node) => {
    if (!node) return 0;
    let lH = heightOfTree(node.left)
    let rH = heightOfTree(node.right)
    if (lH === -1 || rH === -1 || Math.abs(lH - rH) > 1) return -1
    return Math.max(lH, rH) + 1;
}

var isBalanced = (root) => {
    return heightOfTree(root) !== -1;
}