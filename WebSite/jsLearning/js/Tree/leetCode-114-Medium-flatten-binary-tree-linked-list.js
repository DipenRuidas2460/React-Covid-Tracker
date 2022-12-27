function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Iterative approach :- 
// var flatten = (root) => {
//     if (!root) return;
//     let stack = [root]
//     let tail = new TreeNode(0);
//     while (stack.length > 0) {
//         let top = stack.pop();
//         if (top.right) stack.push(top.right);
//         if (top.left) stack.push(top.left);
//         tail.right = top;
//         tail.left = null;
//         tail = top;
//     }
// }

// Recursive Approach :- 
var flatten = (root) => {
    const walk = (node) => {
        if (!node) return [null, null];
        let [leftHead, leftTail] = walk(node.left);
        let [rightHead, rightTail] = walk(node.right);
        let p = node;
        if (leftHead) {
            p.right = leftHead;
            p = leftTail;
        }

        if (rightHead) {
            p.right = rightHead;
            p = rightTail;
        }

        node.left = null;
        return [node, p];
    };
    walk(root);
}