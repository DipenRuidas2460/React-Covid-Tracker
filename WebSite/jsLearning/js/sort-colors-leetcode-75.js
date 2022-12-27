var sortColors = function (nums) {
    let i = 0, j = 0, k = nums.length - 1
    while (j <= k) {
        if (nums[j] == 0) [nums[i++], nums[j++]] = [nums[j], nums[i]];
        else if (nums[j] == 1) j++;
        else [nums[j], nums[k--]] = [nums[k], nums[j]];
    }
    return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));

