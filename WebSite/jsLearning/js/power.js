// function pow(a,b){
//     if (b == 0) return 1
//     if (b < 0) return ((1 / (a * pow(a,Math.abs(b+1)))))
//     return (a * pow(a, b - 1))
// }

// console.log(pow(-2,-5))


var myPow = function (x, n) {
    if (x == 0 || x == 1) return x
    if (n == 0) return 1
    if (n == 1) return x
    if (n < 0) {
        x = 1 / x
        n = -n                              
    }

    if (n % 2 == 1) return myPow(x, (n - 1) / 2) ** 2 * x    
    return myPow(x, n / 2) ** 2                      
};

console.log(myPow(-2, -5));



// var myPow = function(x, n) {
//     if(x == 0) return 0
//     if(n == 0) return 1
//     if(n == 1) return x
//     if (n < 0){
//         x = 1/x
//         n = -n
//     }
//     let result = 1
//     let base = x**(2**0)
//     while (n > 1) {
//         if (n%2 != 0) {
//             result *=base
//             n = (n-1)/2
//         }
//         else {
//             n = n/2
//         }
//         base *= base
//     }
//     result *= base
//     return result
// };