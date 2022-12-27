// let arr = [3,5,7,8]
function product(arr) {
    if (arr.length <= 0) return "Array can't be empty, Please enter some element"
    if (arr.length == 1) return arr[0]
    return (arr[0] * product(arr.slice(1, arr.length)))
}
console.log(product([3, 5, 4, 2, 5, 8]))