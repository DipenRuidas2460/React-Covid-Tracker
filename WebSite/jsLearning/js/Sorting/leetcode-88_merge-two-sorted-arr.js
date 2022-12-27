// var merge = (nums1, m, nums2, n) => {
//     let p = m - 1
//     let q = n - 1
//     for (let i = nums1.length - 1; i >= 0; i--) {
//         if (p >= 0 && q >= 0) {
//             nums1[i] = (nums1[p] > nums2[q]) ? nums1[p--] : nums2[q--];
//         }
//         else if (p >= 0) {
//             nums1[i] = nums1[p--];
//         }
//         else {
//             nums1[i] = nums2[q--]
//         };
//     }
//     return nums1
// }

var merge = (nums1, m, nums2, n) => {
    let first = m - 1
    let second = n - 1
    let i = m + n - 1
    while (second >= 0) {
        let fVal = nums1[first]
        let sVal = nums2[second]
        if (fVal > sVal) {
            nums1[i] = fVal;
            i--;
            first--;
        } else {
            nums1[i] = sVal
            i--;
            second--;
        }
    }
    return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));