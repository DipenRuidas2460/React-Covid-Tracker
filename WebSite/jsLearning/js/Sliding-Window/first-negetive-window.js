function firstNegetiveWindow(arr, k) {
    let result = []   
    let deque = []    // storing negetive element index in window
    for (let i = 0; i < k; i++) if (arr[i] < 0) deque.push(i)
    for (let j = k; j < arr.length; j++) {
        if (arr[deque[0]] < 0) result.push(arr[deque[0]])
        else result.push(0)
        while (deque.length > 0 && deque[0] < j - k + 1) deque.shift();
        if (arr[j] < 0) deque.push(j);
    }
    if (arr[deque[0]] < 0) result.push(arr[deque[0]])
    else result.push(0)
    return result
}


function firstNegetiveInWin(arr, k) {
    let ans = []
    let deque = []
    for (let i = 0; i < k; i++) if (arr[i] < 0) deque.push(i)
    for (let j = k; j < arr.length; j++) {
        if (arr[deque[0]] < 0) ans.push(arr[deque[0]])
        else ans.push(0)
        while (deque.length > 0 && deque[0] < j - k + 1) deque.shift()
        if (arr[j] < 0) deque.push(j)
    }
    if (arr[deque[0]] < 0) ans.push(arr[deque[0]])
    else ans.push(0)
    return ans
}

console.log(firstNegetiveInWin([12, -1, -7, 8, -15, 30, 16, 28], 3));
console.log(firstNegetiveWindow([12, -1, -7, 8, -15, 30, 16, 28], 3));