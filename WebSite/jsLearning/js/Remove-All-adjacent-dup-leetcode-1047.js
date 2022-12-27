var removeDuplicates = (s) => {
    let stack = []
    for (let i of s) {
        if (stack[stack.length - 1] === i) stack.pop();
        else stack.push(i)
    }
    return stack.join("")
}

console.log(removeDuplicates("abbaca"));