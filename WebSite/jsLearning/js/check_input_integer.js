function checkInt(inp) {
    if (!(/^-?[0-9]+$/).test(inp)) return false
    return inp
}

// question-2(print "Foo" ,"Bar")

function fooBar(inp) {
    if (inp % 3 === 0 && inp % 5 === 0) return "FooBar"
    else if (inp % 3 === 0) return "Foo"
    else if (inp % 5 === 0) return "Bar"
    else return false
}


// Remove Duplicate from array return remaining array

function removeDuplicate(arr) {
    let result = []
    let map = new Map()
    for (let i of arr) {
        if (map.has(i)) map.set(i, map.get(i) + 1)
        else map.set(i, 1)
    }
    map.forEach((value, key) => {
        if (value == 1) result.push(key)
        // result.push(key)
    })
    return result
}

// find unique pair from array whose sum is equal to target k(using map)

function findUniquePairs(arr, k) {
    let map = new Map()
    let res = new Map()
    for (let i of arr) {
        if (map.get(k - i)) {
            if (!(res.get(i) || res.get(k - i))) {
                res.set(i, k - i)
            }
        }
        if (map.has(i)) map.set(i, map.get(i) + 1)
        else map.set(i, 1)
    }

    return res
}

// find unique pairs using object

function findUniPair(arr, k) {
    let obj = {}, res = {}
    for (let i of arr) {
        if (obj[k - i]) {
            if (!(res[i] || res[k - i])) {
                res[i] = k - i
            }
        }
        obj[i] = (obj[i] || 0) ? obj[i] + 1 : 1
    }
    return res
}

console.log(fooBar(8));

console.log(checkInt(-12));

console.log(removeDuplicate([7, 2, 5, 8, 5, 9, 6, 2, 1, 4, 36]));

console.log(findUniquePairs([100, 0 ,-101 ,-100 ,1], -100))

console.log(findUniPair([7, 2, 4, 6, 9, 11, 34, 3, 2, 1], 8));