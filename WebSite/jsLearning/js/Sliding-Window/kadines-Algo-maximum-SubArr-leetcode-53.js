var maxSubArrSum = (nums) => {
    let currSum = 0
    let maxSum = nums[0]
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i]
        currSum = Math.max(currSum, nums[i]);
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
}

console.log(maxSubArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));