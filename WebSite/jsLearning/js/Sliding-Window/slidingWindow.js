function SlidingWindow(arr, w) {
    if (arr.length < w || (arr.length == 0)) return null
    let result = []
    let max = 0
    let sum = 0
    let p = 0
    let q = w - 1
    for (let i = 0; i < w; i++) sum += arr[i]
    max = sum;
    for (let j = w; j < arr.length; j++) {
        max = max + arr[j] - arr[j - w]
        if (max > sum) {
            sum = max
            p = j - w + 1
            q = j
        }

    }


    while (p <= q) {
        result.push(arr[p])
        p++

    }
    console.log("Maximum Sum:-", sum);
    console.log("SubArray:-", result)
    // return `Maximum Sum:-${sum}, SubArray:-${result}`
}

SlidingWindow([23, 34, 6, 200, 9, 3, 2, 7, 4, 89, 0], 3)




function maxWindowSumSubArray(arr, k) {
    let curr = 0
    let lastWindSum = 0
    let sum = 0
    let result = []
    let p = 0         // subarray's starting index
    let q = k - 1     // subarray's ending index
    if ((k > arr.length) || (arr.length == 0)) return "Not a valid Input"
    for (let i = 0; i < k; i++) sum += arr[i]
    curr = sum
    for (let j = k; j < arr.length; j++) {
        lastWindSum += arr[j - k]
        sum += arr[j]
        if (sum - lastWindSum > curr) {
            curr = sum - lastWindSum
            p = j - k + 1
            q = j
        }
    }

    while (p <= q) {
        result.push(arr[p])
        p++
    }
    console.log("Maximum Sum:-", curr);
    console.log("SubArray:-", result)
    // return result
}
maxWindowSumSubArray([23, 34, 6, 200, 9, 3, 2, 700, 43, 89, 8], 3)