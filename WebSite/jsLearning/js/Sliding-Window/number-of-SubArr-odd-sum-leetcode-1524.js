var numberOfSubarrays = (arr) => {
    let even = 1
    let odd = 0
    let mod = (10 ** 9 + 7)
    let currSum = 0
    let res = 0
    let i = 0
    while (i < arr.length) {
        currSum += arr[i];
        if (currSum % 2 === 0) {
            res = res + odd;
            even++;
        } else {
            odd++;
            res = res + even;
        }
        res = res % mod;
        i++;
    }
    return res;
}


console.log(numberOfSubarrays([2, 4, 6]));
console.log(numberOfSubarrays([1, 3, 5]));