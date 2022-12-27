function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var maxDepth = function(root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    if (root.left || root.right) return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// console.log(maxDepth([3,9,20,null,null,15,7]));