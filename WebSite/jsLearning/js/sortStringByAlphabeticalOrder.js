function solution(s) {
    let arr = s.split("")
    for (let i = 0; i < arr.length; i++) {
        let low = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].toLowerCase() < arr[low].toLowerCase()) low = j;
        }
        if (i !== low) [arr[i], arr[low]] = [arr[low], arr[i]];
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].toLowerCase() === arr[i + 1].toLowerCase() && arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    return arr.join("")
}

console.log(solution("abcdefghijklmABCDEFGHIJKLMN"));

// Second method - 2
function letterSort(str) {
    let arr = [...str].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].toLowerCase() === arr[i + 1].toLowerCase() && arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    return arr.join("")
}

console.log(letterSort("abcdefghijklmABCDEFGHIJKLMN"));