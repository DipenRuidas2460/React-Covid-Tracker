var levelOrder = function (root) {
    if (!root) return [];
    let ans = []
    let queue = [root]
    while (queue.length) {
        let len = queue.length;                  // T.c = O(n), S.c = O(n)
        ans.push(queue.map(node => node.val));   // copy nodes in ans array
        while (len--) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return ans;
};