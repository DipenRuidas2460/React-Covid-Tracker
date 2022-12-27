// Question - 1

function findSqure(arr1, arr2) {
    let obj1 = {}, obj2 = {}
    for (let i of arr1) obj1[i] = (obj1[i] || 0) + 1
    for (let j of arr2) obj2[j] = (obj2[j] || 0) + 1
    for (let k in obj1) if (obj2[k * k] != obj1[k]) return false
    return true
}

console.log(findSqure([3, 4, 3, 6], [16, 9, 36, 9]));  // T.C = O(n), S.C = O(n) 

// MaxCount and maxCharacter
function maxFrequencyChar(arr) {
    let freq = {}
    if (arr.length == 0) return null
    let maxChar = arr[0]
    let maxCount = 1
    for (let i of arr) {
        freq[i] = (freq[i] || 0) + 1
        if (freq[i] > maxCount) {
            maxCount = freq[i]
            maxChar = i
        }
    }
    return `maxCount:-${maxCount} and maxChar:-${maxChar}`
}
console.log(maxFrequencyChar([1, 10, 12, 5, 7, 5, 8, 8, 9, 8, 8, 8]));

// Two strings are anagram or not

// Method - 1 

function isAnagram(s, t) {
    let obj1 = {}
    let obj2 = {}
    if (s.length != t.length) return false
    for (let i of s) obj1[i] = (obj1[i] || 0) + 1
    for (let j of t) obj2[j] = (obj2[j] || 0) + 1
    for (let k in obj1) if (obj2[k] != obj1[k]) return false
    return true;
}
console.log(isAnagram("hello", "llkeo"))

// Method - 2

function findAnagram(s1, s2) {
    if (s1.length !== s2.length) return "Not Anagram"
    let obj = {}
    for (let i of s1) obj[i] = (obj[i] || 0) + 1
    for (let j of s2) {
        if (!obj[j]) return "Not Anagram"    // value = 0 then print not anagram
        console.log(obj[j]);
        obj[j] -= 1
    }
    return "Anagram"
}

console.log(findAnagram("hello", "llleo"));

// Maximum frequency counting of an array

function maxFrequencyCountArr(arr) {
    let map = new Map()
    if (arr.length == 0) return null
    let maxChar = arr[0]
    let maxCount = 1
    for (let i of arr) {
        map.set(i, (map.get(i) || 0) + 1)
        if (map.get(i) > maxCount) {
            maxCount = map.get(i)
            maxChar = i
        }
    }
    return `maxCount:-${maxCount} and maxChar:-${maxChar}`
}
console.log(maxFrequencyCountArr([1, 10, 12, 5, 7, 5, 10, 10, 9, 10, 8, 8]));


