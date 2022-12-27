var minSubArrayLen = function (target, nums) {
    if (nums.length === 0) return 0
    let l = 0
    let r = 0
    let char = 0
    let sum = 0
    let shortest = nums.length + 1
    while (r < nums.length) {
        sum += nums[r]
        if (sum >= target) {
            while (sum >= target) {
                sum -= nums[l]
                l++;
            }
            shortest = Math.min(shortest, r - l + 2)
            char = l
        }
        r++
    }
    return (shortest === nums.length + 1) ? 0 : nums.slice(char - 1, char + shortest)
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));