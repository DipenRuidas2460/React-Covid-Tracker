function maximumSumOfTwo(arr) {
    let largest = 0
    let secondLargest = null
    if (arr.length == 0) return []
    else if (arr.length == 1) {
        largest = arr[0]
        return `First largest number:-${largest},Second largest number:-${secondLargest},Sum:-${largest + secondLargest}`
    }
    else if (arr.length > 1 && arr.length < 3) {
        if (arr[0] > arr[1]) {
            largest = arr[0]
            secondLargest = arr[1]
        } else {
            largest = arr[1]
            secondLargest = arr[0]
        }
        return `First largest number:-${largest},Second largest number:-${secondLargest},Sum:-${largest + secondLargest}`
    }

    else if (arr.length >= 3) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= largest) {
                secondLargest = largest
                largest = arr[i]
            }
            else if (arr[i] > secondLargest && arr[i] < largest) secondLargest = arr[i]
        }
        return `First largest number:-${largest},Second largest number:-${secondLargest},Sum:-${largest + secondLargest}`
    }
}
console.log(maximumSumOfTwo([5, 4, 9, 6, 3]))



function maxSum(arr) {
    let largest = null, secondLargest = null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (secondLargest < arr[i]) {
            secondLargest = arr[i]
        }
    }
    return `First largest number:-${largest},Second largest number:-${secondLargest},Sum:-${largest + secondLargest}`
}

console.log(maxSum([5, 3]))