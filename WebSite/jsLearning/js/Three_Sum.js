var threeSum = function (nums) {
    nums.sort((a, b) => (a - b))
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let target = (nums[i] * -1)
        let subResult = twoSum(i + 1, target, nums)
        ans.push(...subResult)
    }
    return ans.length
};

function twoSum(j, target, nums) {
    let result = []
    k = nums.length - 1
    while (j < k) {
        if (nums[j] + nums[k] === target) {
            result.push([(target * -1), nums[j], nums[k]])
            while (j < k && nums[j] === nums[j + 1]) j++
            while (j < k && nums[k] === nums[k - 1]) k--
            j++
            k--
        }
        else if (nums[j] + nums[k] > target) k--;
        else j++
    }
    return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-2, 0, 1, 3]));