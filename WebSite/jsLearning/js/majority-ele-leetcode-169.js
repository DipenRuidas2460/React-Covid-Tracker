var majorityElement = (nums) => {
    let obj = {}
    let count = 0
    let max = 0
    for (let i of nums) obj[i] = (obj[i] || 0) ? (obj[i] + 1) : 1
    for (let j in obj) {
        if (obj[j] > count) {
            count = obj[j];
            max = j;
        }
    }
    return max;
}
console.log(majorityElement([3, 2, 3, 4, 4, 4, 5, 8, 5, 8, 8, 7, 8]));


function solution(a, arr) {
    let map = new Map()
    let max = 0
    let res = -1
    for (let i of arr) map.set(i, (map.get(i) || 0) + 1);
    map.forEach((value, key) => {
        if (value > max) {
            res = key
            max = value
        }
        else if (value == max) res = 0;
    })
    return res
}

console.log(solution(5, [1, 2, 1, 2, 2]));