function calculateRichesPerson(accounts) {
    let max = 0
    for(let i of accounts) max = Math.max(calculateMoney(i),max)
    return max
}

function calculateMoney(banks) {
    let moneyCount = 0
    for(let j of banks) moneyCount += j
    return moneyCount
}

console.log(calculateRichesPerson([[7,9,11],[5,6,17],[20,1,3]]));

// Animals count

function animalCount(arr) {
    let obj = {}
    for(let i of arr) obj[i] = (obj[i] || 0 ) + 1
    return obj
}

console.log(animalCount(["cow","goat","rat","sheep","cow","goat","rat","cow","goat","rat","Dear","lion"]));

 