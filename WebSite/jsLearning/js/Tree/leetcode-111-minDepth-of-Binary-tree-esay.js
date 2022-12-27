var minDepth = (root) => {
    if (!root) return 0;
    let minDep = 1;
    let queue = [root];
    while (queue.length) {
        let levelSize = queue.length;
        while (levelSize) {
            let curr = queue.shift();
            if (!curr.left && !curr.right) return minDep;
            else {
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
            levelSize--;
        };
        minDep++;
    };
    return minDep;
};