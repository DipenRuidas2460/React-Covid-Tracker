var searchMatrix = (matrix, target) => {
    let left = 0
    let cols = matrix[0].length;
    let rows = matrix.length
    let right = cols * rows - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left))
        let midVal = matrix[Math.floor(right / cols)][right % cols];
        if (target === midVal) return true;
        else if (target < midVal) right = mid - 1;
        else left = mid + 1;
    }
    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));