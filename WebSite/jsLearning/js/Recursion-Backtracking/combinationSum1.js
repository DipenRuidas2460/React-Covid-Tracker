var combinationSum = function (candidates, target) {
    let ans = []
    candidates.sort((a, b) => (a - b));
    let dfs = (i, candidates, target, slate) => {
        if (target < 0) return;
        if (target === 0) {
            ans.push(slate.slice())
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            slate.push(candidates[j])
            dfs(j, candidates, target - candidates[j], slate);
            slate.pop()
        }
    }
    dfs(0, candidates, target, []);
    return ans;
};

// console.log(combinationSum([2,3,6,7],7));
console.log(combinationSum([2,3,5],8));