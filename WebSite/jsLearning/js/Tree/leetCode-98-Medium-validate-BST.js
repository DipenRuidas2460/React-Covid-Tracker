function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var isValidBST = (root) => {
    let ans = true
    let loop = (node, min, max) => {
        if ((node.val > min || min === undefined) && (node.val < max || max === undefined)) {
            if (node.left) loop(node.left, min, node.val);
            if (node.right) loop(node.right, node.val, max)
        } else ans = false;
    }
    loop(root);
    return ans;
}

console.log(isValidBST([2, 1, 3]))
console.log(isValidBST([5, 1, 4, null, null, 3, 6]));