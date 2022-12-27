function SubSetI(arr) {
    arr.sort((a, b) => (a - b))
    let ans = []
    function findSubSet(arr, i, temp) {
        if (i === arr.length) {
            ans.push(temp.slice())
            return
        }
        findSubSet(arr, i + 1, temp);
        temp.push(arr[i])
        findSubSet(arr, i + 1, temp);
        temp.pop()                                         // Time complexcity = O(2^n)
    }
    findSubSet(arr, 0, []);
    return ans
}

// console.log(SubSetI([5, 2, 1]));
console.log(SubSetI([3, 2, 1]));
// console.log(SubSetI([1, 2, 3, 4]));


