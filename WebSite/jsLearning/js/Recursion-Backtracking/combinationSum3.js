var combinationSum3 = function (k, n) {
    let result = []
    let nums = []
    for (let i = 1; i <= 9; i++) nums.push(i)
    let dfs = (i, nums, k, n, slate) => {
        if (n < 0) return;      // backtracking
        if (slate.length === k) {
            if (n === 0) result.push(slate.slice());   // base case
            return;
        }
        for (let j = i; j < nums.length; j++) {
            slate.push(nums[j])
            console.log(slate);
            dfs(j + 1, nums, k, n - nums[j], slate)
            slate.pop()
        }
    }
    dfs(0, nums, k, n, [])
    return result
}

console.log(combinationSum3(3,7));