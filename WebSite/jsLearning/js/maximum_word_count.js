function maxWordCount(sentences) {
    let max = 0
    for(let i of sentences){
        let currWordCount = i.split(" ").length
        if(currWordCount > max) max = currWordCount
    }
    return max
}

console.log(maxWordCount(["alice and bob love leetcode","i think so too","this is great thanks very much"]));