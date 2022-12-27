function maximumSubArrLen(arr) {
    let map = new Map()
    let max = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum === 0) max = i + 1;
        else {
            if (map.has(sum)) max = Math.max(max, i - map.get(sum));
            else map.set(sum, i);
        }
    }
    return max;
}

console.log(maximumSubArrLen([1, -1, 3, 2, -2, -8, 1, 7, 10, 23]));