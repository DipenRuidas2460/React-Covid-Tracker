// var maximumImportance = function (n, roads) {
//     let map = new Map()
//     for (let el of roads) {
//         if (map.get(el[0])) map.set(el[0], map.get(el[0]) + 1);
//         else map.set(el[0], 1);
//         if (map.get(el[1])) map.set(el[1], map.get(el[1]) + 1);
//         else map.set(el[1], 1);
//     }
//     let arr = [...map.entries()].sort((a, b) => (b[1] - a[1]))
//     let newMap = new Map()
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) newMap.set(arr[i][0], n--);
//     for (let i = 0; i < roads.length; i++) sum += newMap.get(roads[i][0]) + newMap.get(roads[i][1]);
//     return sum
// };


var maximumImportance = (n, roads) => {
    let sum = 0
    let map1 = new Map() // roads 
    let map2 = new Map() // set value vertices
    for (let el of roads) {
        if (map1.has(el[0])) map1.set(el[0], map1.get(el[0]) + 1)
        else map1.set(el[0], 1)
        if (map1.has(el[1])) map1.set(el[1], map1.get(el[1]) + 1)
        else map1.set(el[1], 1)
    }
    let arr = [...map1.entries()].sort((a, b) => (b[1] - a[1]));
    for (let i = 0; i < arr.length; i++) {
        map2.set(arr[i][0], n);
        n--;
    }
    for (let i = 0; i < roads.length; i++) {
        sum += map2.get(roads[i][0]) + map2.get(roads[i][1]);
    }
    return sum;
}

console.log(maximumImportance(5, [[0, 1], [1, 2], [2, 3], [0, 2], [1, 3], [2, 4]]));