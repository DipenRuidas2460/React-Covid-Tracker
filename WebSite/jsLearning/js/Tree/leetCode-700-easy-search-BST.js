var searchBST = (root, val) => {
    let node = root
    while (node != null) {
        if (val === node.val) return node;
        else if (val < node.val) node = node.left;
        else if (val > node.val) node = node.right;
    }
    return null
}