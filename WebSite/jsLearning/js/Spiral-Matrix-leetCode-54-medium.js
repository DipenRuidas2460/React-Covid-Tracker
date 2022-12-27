var spiralOrder = function (matrix){
    let top = 0
    let left = 0
    let bottom = matrix.length - 1
    let right = matrix[0].length - 1
    let ans = []
    let size = matrix.length * matrix[0].length;
    while (ans.length < size) {
        for (let i = left; i <= right && ans.length < size; i++) {
            ans.push(matrix[top][i])
        }
        top++;
        for (let i = top; i <= bottom && ans.length < size; i++) {
            ans.push(matrix[i][right])
        }
        right--;
        for (let i = right; i >= left && ans.length < size; i--) {
            ans.push(matrix[bottom][i])
        }
        bottom--;
        for (let i = bottom; i >= top && ans.length < size; i--) {
            ans.push(matrix[i][left])
        }
        left++;
    }
    return ans;
}