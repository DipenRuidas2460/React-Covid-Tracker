let obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superNumber: 8,
            notNumber: true,
            notEven: 7
        },
        p: 6
    },
    k: 8
}

function evenSum(obj1) {
    let sum = 0
    for (const key in obj1) {
        if (obj1[key] !== null && typeof (obj1[key]) === 'object') {
            sum += evenSum(obj1[key])
        }
        else if (typeof (obj1[key]) === 'number') {
            if (obj1[key] % 2 == 0) sum += obj1[key]
        }
    }
    return sum
}

let res = evenSum(obj1)
console.log(res);