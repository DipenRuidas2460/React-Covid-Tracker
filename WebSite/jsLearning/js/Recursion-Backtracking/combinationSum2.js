var combinationSum2 = function (candidates, target) {
    let ans = []
    candidates.sort((a, b) => (a - b));
    let dfs = (i, candidates, target, slate) => {
        if (target < 0) return;
        if (target === 0) {
            ans.push(slate.slice())
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            if (i !== j && candidates[j] === candidates[j - 1]) continue;
            slate.push(candidates[j]);
            dfs(j + 1, candidates, target - candidates[j], slate);
            slate.pop()
        }
    }
    dfs(0, candidates, target, []);
    return ans;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));