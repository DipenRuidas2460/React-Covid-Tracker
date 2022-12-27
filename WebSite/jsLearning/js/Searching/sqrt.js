var Sqrt = function (x) {
    let found = false
    let i = 1
    while (found === false) {
        if (i ** 2 === x) {
            found = true
            return i
        } else if (i ** 2 > x) {
            let res = squreRoot(x, i - 1, i)
            found = true
            return (+res.toFixed(7))
        }
        i++
    }
}

function squreRoot(x, start, end) {
    if (start <= end) {
        let mid = (start + end) / 2
        let squre = mid ** 2;
        if (squre === x || (Math.abs(squre - x) < 0.0000001)) return mid
        else if (squre < x) return squreRoot(x, mid, end)
        else return squreRoot(x, start, mid)
    }
    return false
}

console.log(Sqrt(8));


// LeetCode - 69 (easy) :- 

var mySqrt = (x) => {
    if (x < 2) return x;
    let i = 0
    let j = x
    while (i < j) {
        let middle = Math.floor((i + j) / 2)
        let squre = middle ** 2
        if (squre === x) return middle;
        else if (squre < x) i = middle + 1;
        else j = middle;
    }
    return j - 1;
}

console.log(mySqrt(8));