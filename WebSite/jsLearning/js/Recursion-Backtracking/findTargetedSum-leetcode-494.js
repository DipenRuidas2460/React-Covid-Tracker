var findTargetSumWays = (nums, target) => {
    let ans = 0
    let dfs = (i, nums, target, runningSum) => {
        if (i === nums.length) {
            if (runningSum === target) ans++;
            return;
        }

        // Positive Values(sum)

        runningSum += nums[i];
        dfs(i + 1, nums, target, runningSum);
        runningSum -= nums[i];

        // Negetive values (sum)

        runningSum -= nums[i];
        dfs(i + 1, nums, target, runningSum);
        runningSum += nums[i];
    }
    dfs(0, nums, target, 0);
    return ans;
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));