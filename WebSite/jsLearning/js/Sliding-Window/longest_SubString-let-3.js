var lengthOfLongestSubstring = (s) => {
    let l = 0
    let r = 0
    let max = 0
    let char = 0
    let set = new Set()
    while (r < s.length) {
        if (set.has(s[r])) {
            set.delete(s[l])
            l++;
        } else {
            set.add(s[r])
            if (set.size > max) {
                max = set.size
                char = l
            }
            r++;
        }
    }
    return `Maximum count:-${max}, substring:-${s.substring(char, char + max)}`
};

console.log(lengthOfLongestSubstring("hellothere"))




// var lengthOfLongestSubstring = function (s) {
//     const hash = {}
//     let max = 0;
//     let l = 0;
//     for (let r = 0; r < s.length; r++) {
//         hash[s[r]] = (hash[s[r]] || 0) + 1;
//         while (hash[s[r]] > 1) {
//             hash[s[r]]--;
//             l++
//         }
//         if ((r - l + 1) > max) max = (r - l + 1);
//     }
//     return max;
// }

// console.log(lengthOfLongestSubstring("hellothere"))



// var lengthOfLongestSubstring = (s) => {
//     let count = new Array(256).fill(0)
//     let l = 0
//     let r = 0
//     let ans = 0
//     let char = 0
//     while (r < s.length) {
//         count[s[r].charCodeAt(0) - 'a'.charCodeAt(0)]++;
//         while (count[s[r].charCodeAt(0) - 'a'.charCodeAt(0)] > 1) {
//             count[s[l].charCodeAt(0) - 'a'.charCodeAt(0)]--;
//             l++;
//         }
//         if ((r - l + 1) > ans) {
//             ans = (r - l + 1);
//             char = l;
//         }
//         r++;
        
//     }
//     return `Maximum count:-${ans}, substring:-${s.substring(char, char + ans)}`
//     // return ans;
// }

// console.log(lengthOfLongestSubstring("hellothere"))