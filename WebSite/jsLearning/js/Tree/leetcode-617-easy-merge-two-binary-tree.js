var mergeTrees = (root1, root2) => {
    let dfs = (r, t) => {
        if (!r && !t) return null;
        if (!r) return t;
        if (!t) return r;
        r.val += t.val;
        r.left = dfs(r.left, t.left);
        r.right = dfs(r.right, t.right);
        return r;
    }
    return dfs(root1, root2);
}