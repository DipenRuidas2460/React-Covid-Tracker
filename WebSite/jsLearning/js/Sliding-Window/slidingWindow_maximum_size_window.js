var maxSlidingWindow = function (arr, k) {
    let result = []
    let deque = []
    for (let i = 0; i < k; i++) {
        while (deque.length > 0 && arr[i] >= arr[deque[deque.length - 1]]) deque.pop()
        deque.push(i)
    }
    for (let j = k; j < arr.length; j++) {
        result.push(arr[deque[0]])
        while (deque.length > 0 && deque[0] < j - k + 1) deque.shift()
        while (deque.length > 0 && arr[j] >= arr[deque[deque.length - 1]]) deque.pop()
        deque.push(j)
    }
    result.push(arr[deque[0]])     // for pushing the last maximum element of window in resulted array
    return result
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));