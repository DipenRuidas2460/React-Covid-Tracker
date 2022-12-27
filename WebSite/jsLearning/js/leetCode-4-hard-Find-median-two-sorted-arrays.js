var findMedianSortedArrays = (nums1, nums2) => {
    if (nums2.length < nums1.length) return findMedianSortedArrays(nums2, nums1)
    let n1 = nums1.length
    let n2 = nums2.length
    let low = 0
    let high = n1
    while (low <= high) {
        let cut1 = Math.floor((low + high) / 2);
        let cut2 = Math.floor((n1 + n2 + 1) / 2) - cut1;
        let l1 = (cut1 == 0) ? -Infinity : nums1[cut1 - 1];
        let l2 = (cut2 == 0) ? -Infinity : nums2[cut2 - 1];
        let r1 = (cut1 == n1) ? Infinity : nums1[cut1];
        let r2 = (cut2 == n2) ? Infinity : nums2[cut2];
        if (l1 <= r2 && l2 <= r1) {
            if ((n1 + n2) % 2 == 1) return Math.max(l1, l2);
            return (Math.max(l1, l2) + (Math.min(r1, r2))) / 2;
        }
        else if (l1 > r2) high = cut1 - 1;
        else low = cut1 + 1;
    }
};

