var findKthSmallest = (nums, k) => {
    k = k - 1;
    let quickSelect = (l, r) => {
        let pivot = nums[r]
        let p = l;
        for (let i = l; i < r; i++) {
            if (nums[i] <= pivot) {
                [nums[p], nums[i]] = [nums[i], nums[p]]
                p++;
            }
        }
        [nums[p], nums[r]] = [nums[r], nums[p]];
        if (p === k) return nums[p];
        else if (p < k) return quickSelect(p + 1, r);
        else return quickSelect(l, p - 1);
    }
    return quickSelect(0, nums.length - 1)
}

console.log(findKthSmallest([3, -2, 3, 1, 2, 4, 5, 5, 6], 2));